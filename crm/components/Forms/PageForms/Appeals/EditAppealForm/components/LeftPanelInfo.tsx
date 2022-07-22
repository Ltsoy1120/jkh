import moment from "moment";
import SimpleSelect from "../../../../ComponentForms/SimpleSelect";
import {
  prioritiesOfApplication,
  statusesOfAppeal,
  typesOfAppeals,
} from "../../../../ComponentForms/SimpleSelect/selectOptions";
import { SelectChangeEvent } from "@mui/material";
import InfoCard from "./InfoCard";
import DateTimeSelect from "../../../../ComponentForms/DateTimeSelect";
import styles from "../style.module.scss";
import StatusButton from "../../../../../Buttons/StatusButton";
import { AppealData } from "../../../../../../models/IAppeal";

interface LeftPanelInfoProps {
  state: AppealData;
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
        <SimpleSelect
          id="type"
          label="Тип"
          placeholder="Выберите из списка..."
          required
          data={typesOfAppeals}
          name="type"
          value={state.type}
          onChange={handleChange}
          width={190}
        />
        {/* <InfoCard
          label="Статус"
          children={<StatusButton status={state.status} />}
        /> */}
        <SimpleSelect
          id="status"
          label="Статус"
          placeholder="Выберите из списка..."
          required
          data={statusesOfAppeal}
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
          data={prioritiesOfApplication}
          name="priority"
          value={state.priority}
          onChange={handleChange}
          width={190}
        />
        <h2>Срок выполнения</h2>
        <DateTimeSelect
          label="Дата"
          value={state.workDate}
          onChange={(newValue) => handleDateSelect(newValue, "workDate")}
          mb={30}
        />
      </div>
    </div>
  );
};
export default LeftPanelInfo;
