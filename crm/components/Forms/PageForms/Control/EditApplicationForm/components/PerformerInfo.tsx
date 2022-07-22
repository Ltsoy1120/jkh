import { ApplicationData } from "../../../../../../models/IApplication";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { typesOfRequests } from "../../../../ComponentForms/SimpleSelect/selectOptions";
import {
  getListData,
  getListDataWithId,
} from "../../../../ComponentForms/SimpleSelect/getSelectOptions";
import {
  getFullNames,
  getFullNamesWithId,
} from "../../../../../../utils/functions";
import { Alert, SelectChangeEvent } from "@mui/material";
import styles from "../style.module.scss";
import { IUser } from "../../../../../../models/IUser";
import { IContractor } from "../../../../../../models/IContractor";
import SelectWithId from "../../../../ComponentForms/SimpleSelect/SelectWithId";
import { SyntheticEvent } from "react";

interface PerformerInfoProps {
  state: ApplicationData;
  error: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleSelect: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => void;
  employeesOfCompany: IUser[];
  employeesOfContractor: IUser[];
  contractorsByCompany: IContractor[];
}

const PerformerInfo: React.FC<PerformerInfoProps> = ({
  state,
  error,
  handleChange,
  handleSelect,
  employeesOfCompany,
  employeesOfContractor,
  contractorsByCompany,
}) => {
  const listOfPerformer =
    state.typeOfPerformer === "Сотрудник"
      ? getFullNamesWithId(employeesOfCompany)
      : state.typeOfPerformer === "Подрядчик"
      ? getFullNamesWithId(employeesOfContractor)
      : null;
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Исполнитель</h2>
      <div className={styles.row}>
        <SimpleSelect
          id="typeOfPerformer"
          label="Тип исполнителя"
          placeholder="Выберите из списка..."
          required
          data={["Сотрудник", "Подрядчик"]}
          name="typeOfPerformer"
          value={state.typeOfPerformer}
          onChange={handleChange}
          width={265}
          mb={0}
        />
        <SimpleSelect
          id="type"
          label="Тип заявки"
          placeholder="Выберите из списка..."
          required
          data={typesOfRequests}
          name="type"
          value={state.type}
          onChange={handleChange}
          width={265}
          mb={0}
        />
      </div>
      {state.typeOfPerformer === "Подрядчик" && (
        <SelectWithId
          id="contractor"
          label="Подрядчик"
          placeholder="Выберите из списка..."
          required
          options={getListDataWithId(contractorsByCompany, "contractorName")}
          name="contractor"
          value={state.contractor}
          onChange={(e, value) => handleSelect(e, value, "contractor")}
          width={550}
          mb={60}
        />
      )}
      {state.contractor && (
        <SelectWithId
          id="performer"
          label="Исполнитель"
          placeholder="Выберите из списка..."
          required
          options={listOfPerformer}
          name="performer"
          value={state.performer}
          onChange={(e, value) => handleSelect(e, value, "performer")}
          mb={60}
          width={550}
        />
      )}
      {error && (
        <Alert
          severity="error"
          style={{ marginBottom: "20px", width: "550px" }}
        >
          {error}
        </Alert>
      )}
    </div>
  );
};
export default PerformerInfo;
