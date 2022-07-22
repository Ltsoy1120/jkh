import { TaskInit } from "../../../../../../models/ITask";
import styles from "../style.module.scss";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { getListData } from "../../../../ComponentForms/SimpleSelect/getSelectOptions";
import Input from "../../../../ComponentForms/Input";
import CustomTextArea from "../../../../ComponentForms/CustomTextArea";
import AddGroupOfFiles from "../../../../../AddGroupOfFiles";
import { SelectChangeEvent } from "@mui/material";
import DocsInfo from "./DocsInfo";
import { IHouse } from "../../../../../../models/IHouse";

interface TaskInfoProps {
  state: TaskInit;
  houses: IHouse[];
  handleChange: (
    event:
      | React.ChangeEvent<HTMLInputElement>
      | React.ChangeEvent<HTMLTextAreaElement>
      | SelectChangeEvent<string>
  ) => void;
  handleFileChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  removeFile: (index: number, name: string) => void;
}

const TaskInfo: React.FC<TaskInfoProps> = ({
  state,
  houses,
  handleChange,
  handleFileChange,
  removeFile,
}) => {
  return (
    <>
      <div className={styles.row}>
        <SimpleSelect
          id="address"
          label="Адрес/Дом"
          name="address"
          data={getListData(houses, "address")}
          value={state.address}
          onChange={handleChange}
          placeholder="Выберите из списка..."
          width={450}
          mb={0}
        />
        <Input
          label="Помещение"
          id="numberOfApartment"
          name="numberOfApartment"
          placeholder="Введите данные..."
          value={state.numberOfApartment}
          onChange={handleChange}
          width={200}
          mb={0}
        />
      </div>
      <div className={styles.row}>
        <CustomTextArea
          label="Текст обращения"
          name="text"
          value={state.text}
          onChange={handleChange}
          required
          width={450}
        />
        <AddGroupOfFiles
          label="Добавить документы"
          name="files"
          onChange={handleFileChange}
          fz={12}
          width={"auto"}
        />
      </div>
      {state.files[0] && (
        <DocsInfo files={state.files} removeFile={removeFile} />
      )}
    </>
  );
};
export default TaskInfo;
