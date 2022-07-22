import { TaskInit } from "../../../../../../models/ITask";
import DateTimeSelect from "../../../../ComponentForms/DateTimeSelect";
import CheckBox from "../../../../../CheckBox";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { SelectChangeEvent } from "@mui/material";
import styles from "../style.module.scss";

interface DeadlineInfoProps {
  state: TaskInit;
  handleChecked: (name: string) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
  handleChange: (event: SelectChangeEvent<string>) => void;
}

const DeadlineInfo: React.FC<DeadlineInfoProps> = ({
  state,
  handleChecked,
  handleDateSelect,
  handleChange,
}) => {
  return (
    <div className={styles.wrapInfo}>
      <h2>Напоминание о дедлайне</h2>
      <CheckBox
        label="Напомнить о дедлайне"
        checked={state.remindOfDeadline}
        onChange={() => handleChecked("remindOfDeadline")}
        mb={30}
      />
      {state.remindOfDeadline && (
        <div className={styles.row}>
          <SimpleSelect
            id="remindHow"
            label="Как напомнить"
            placeholder="Выберите из списка..."
            required
            data={["Определенная дата", "Количество дней"]}
            name="remindHow"
            value={state.remindHow}
            onChange={handleChange}
            width={265}
            mb={0}
          />
          <SimpleSelect
            id="remindWho"
            label="Кому напомнить"
            placeholder="Выберите из списка..."
            required
            data={["Всем", "Исполнителям", "Наблюдателям", "Автору"]}
            name="remindWho"
            value={state.remindWho}
            onChange={handleChange}
            width={265}
            mb={0}
          />
        </div>
      )}
      {state.remindHow === "Определенная дата" && (
        <DateTimeSelect
          label="Напомнить когда"
          value={state.remindWhen}
          onChange={(newValue) => handleDateSelect(newValue, "remindWhen")}
          column
          width={265}
          mb={30}
        />
      )}
      {state.remindHow === "Количество дней" && (
        <div className={styles.row}>
          <SimpleSelect
            id="remindDays"
            label="Количество дней"
            placeholder="Выберите из списка..."
            required
            data={["1 день", "2 дня", "3 дня", "4 дня", "5 дней"]}
            name="remindDays"
            value={state.remindDays}
            onChange={handleChange}
            width={265}
            mb={0}
          />
        </div>
      )}
    </div>
  );
};
export default DeadlineInfo;
