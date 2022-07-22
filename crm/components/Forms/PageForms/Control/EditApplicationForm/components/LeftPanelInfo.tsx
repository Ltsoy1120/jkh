import moment from "moment";
import { ApplicationData } from "../../../../../../models/IApplication";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import { prioritiesOfApplication } from "../../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import InfoCard from "./InfoCard";
import DateTimeSelect from "../../../../ComponentForms/DateTimeSelect";
import styles from "../style.module.scss";
import StatusButton from "../../../../../Buttons/StatusButton";

interface LeftPanelInfoProps {
  state: ApplicationData;
  handleChange: (event: SelectChangeEvent<string>) => void;
  handleDateSelect: (newValue: Date, name: string) => void;
}

const LeftPanelInfo: React.FC<LeftPanelInfoProps> = ({
  state,
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
        <InfoCard label="Тип" children={state.type} />
        <InfoCard
          label="Статус"
          children={<StatusButton status={state.status} />}
        />
        {/* <SimpleSelect
          id="status"
          label="Статус"
          placeholder="Выберите из списка..."
          required
          data={statusesOfApplication}
          name="status"
          value={state.status}
          onChange={handleChange}
          width={190}
        /> */}
        <SimpleSelect
          id="priority"
          label="Приоритет"
          placeholder="Выберите из списка..."
          required
          data={prioritiesOfApplication}
          name="priority"
          value={state.priority}
          onChange={handleChange}
          width={190}
        />
        <h2>Срок выполнения</h2>
        <DateTimeSelect
          label="Дата, время с"
          value={state.executionDateFrom}
          onChange={(newValue) =>
            handleDateSelect(newValue, "executionDateFrom")
          }
          column
          mb={30}
        />
        <DateTimeSelect
          label="Дата, время по"
          value={state.executionDateTo}
          onChange={(newValue) => handleDateSelect(newValue, "executionDateTo")}
          column
        />
      </div>
    </div>
  );
};
export default LeftPanelInfo;
