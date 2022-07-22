import { getFullNamesWithId } from "../../../../../utils/functions";
import { Alert, SelectChangeEvent } from "@mui/material";
import SelectWithId from "../../../ComponentForms/SimpleSelect/SelectWithId";
import { SyntheticEvent } from "react";
import { ReceptionData } from "../../../../../models/IReception";
import { IUser } from "../../../../../models/IUser";

interface ResponsiblePersonInfoProps {
  state: ReceptionData;
  error: string;
  handleSelect: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => void;
  employeesOfCompany: IUser[];
}

const ResponsiblePersonInfo: React.FC<ResponsiblePersonInfoProps> = ({
  state,
  error,
  handleSelect,
  employeesOfCompany,
}) => {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>Ответственный за прием</h2>
      <SelectWithId
        id="responsiblePerson"
        label="Ответственное лицо"
        placeholder="Выберите из списка..."
        required
        options={getFullNamesWithId(employeesOfCompany)}
        name="responsiblePerson"
        value={state.responsiblePerson}
        onChange={(e, value) => handleSelect(e, value, "responsiblePerson")}
        width={450}
        mb={60}
      />
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
export default ResponsiblePersonInfo;
