import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { Alert, SelectChangeEvent } from "@mui/material";
import AddFiles from "../../../../../AddFiles";
import CustomTextArea from "../../../../ComponentForms/CustomTextArea";
import DocsInfo from "./DocsInfo";
import { ChangeEvent } from "react";
import { resultsOfWork } from "../../../../ComponentForms/SimpleSelect/selectOptions";
import styles from "../style.module.scss";
import { AppealData } from "../../../../../../models/IAppeal";

interface ResultInfoProps {
  state: AppealData;
  error: string;
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number, name: string) => void;
}

const ResultInfo: React.FC<ResultInfoProps> = ({
  state,
  error,
  handleChange,
  handleFileChange,
  removeFile,
}) => {
  return (
    <div style={{ marginTop: 30 }}>
      <h2>{`Работа по обращению № ${state.number}`}</h2>
      <div className={styles.row}>
        <CustomTextArea
          label="Результат работы"
          name="resultComment"
          value={state.resultComment}
          onChange={handleChange}
          width={450}
        />
        <AddFiles
          label="Добавить документы"
          name="resultFiles"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      <DocsInfo files={state.resultFiles} removeFile={removeFile} />
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
export default ResultInfo;
