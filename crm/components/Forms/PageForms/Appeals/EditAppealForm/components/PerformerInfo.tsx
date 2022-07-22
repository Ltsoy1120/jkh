import { AppealData } from "../../../../../../models/IAppeal";
import { getFullNamesWithId } from "../../../../../../utils/functions";
import { Alert, SelectChangeEvent } from "@mui/material";
import { IUser } from "../../../../../../models/IUser";
import SelectWithId from "../../../../ComponentForms/SimpleSelect/SelectWithId";
import { SyntheticEvent } from "react";

interface PerformerInfoProps {
  state: AppealData;
  error: string;
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleSelect: (
    event: SyntheticEvent<Element, Event>,
    value: { label: string; id: string },
    name: string
  ) => void;
  employeesOfCompany: IUser[];
}

const PerformerInfo: React.FC<PerformerInfoProps> = ({
  state,
  error,
  handleSelect,
  employeesOfCompany,
}) => {
  return (
    <div style={{ marginTop: 30, marginBottom: 70 }}>
      <h2>Исполнитель</h2>
      <SelectWithId
        id="performer"
        label="Исполнитель"
        placeholder="Выберите из списка..."
        required
        options={getFullNamesWithId(employeesOfCompany)}
        name="performer"
        value={state.performer}
        onChange={(e, value) => handleSelect(e, value, "performer")}
        width={450}
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
export default PerformerInfo;
