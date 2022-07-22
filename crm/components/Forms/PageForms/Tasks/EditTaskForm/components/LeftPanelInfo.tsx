import moment from "moment";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import {
  prioritiesOfApplication,
  statusesOfAppeal,
} from "../../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import InfoCard from "./InfoCard";
import DateTimeSelect from "../../../../ComponentForms/DateTimeSelect";
import Input from "../../../../ComponentForms/Input";
import { getListData } from "../../../../ComponentForms/SimpleSelect/getSelectOptions";
import { ITaskType, TaskInit } from "../../../../../../models/ITask";
import styles from "../style.module.scss";
import StatusButton from "../../../../../Buttons/StatusButton";

interface LeftPanelInfoProps {
  state: TaskInit;
  taskTypesOfCompany: ITaskType[];
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const LeftPanelInfo: React.FC<LeftPanelInfoProps> = ({
  state,
  taskTypesOfCompany,
  handleChange,
  handleDateSelect,
}) => {
  return (
    <div className={styles.wrapBlock}>
      <div className={styles.content}>
        <InfoCard
          label="Создано"
          children={`${moment(new Date(state.createDate)).format(
            "DD.MM.YYYY"
          )} в ${moment(new Date(state.createDate)).format("hh.mm")}`}
        />
        <SimpleSelect
          id="basisForTask"
          label="На основании"
          placeholder="Выберите из списка..."
          required
          data={["Заявка", "Обращение", "Прием"]}
          name="basisForTask"
          value={state.basisForTask}
          onChange={handleChange}
          width={190}
        />
        <Input
          label="Номер документа"
          id="numberOfBasis"
          name="numberOfBasis"
          placeholder="Введите данные..."
          value={state.numberOfBasis}
          onChange={handleChange}
          required
          width={190}
        />
        {taskTypesOfCompany.length && (
          <SimpleSelect
            id="taskType"
            label="Тип задачи"
            placeholder="Выберите из списка..."
            required
            data={getListData(taskTypesOfCompany, "name")}
            name="taskType"
            value={state.taskType}
            onChange={handleChange}
            width={190}
          />
        )}
        {/* <InfoCard
          label="Статус"
          children={<StatusButton status={state.status} />}
        /> */}
        <SimpleSelect
          id="status"
          label="Статус"
          placeholder="Выберите из списка..."
          required
          data={["Новая", "В работе", "Отложена", "Выполнена", "Отменена"]}
          name="status"
          value={state.status}
          onChange={handleChange}
          width={190}
        />
        <SimpleSelect
          id="priority"
          label="Приоритет"
          placeholder="Выберите из списка..."
          required
          data={["Критический", "Высокий", "Средний"]}
          name="priority"
          value={state.priority}
          onChange={handleChange}
          width={190}
        />
        <DateTimeSelect
          label="Дедлайн"
          value={state.deadline}
          onChange={(newValue) => handleDateSelect(newValue, "deadline")}
          column
          mb={30}
        />
      </div>
    </div>
  );
};
export default LeftPanelInfo;
