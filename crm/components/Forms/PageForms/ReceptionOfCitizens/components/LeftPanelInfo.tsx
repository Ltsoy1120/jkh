import moment from "moment";
import InfoCard from "./InfoCard";
import StatusButton from "../../../../Buttons/StatusButton";
import { ReceptionData } from "../../../../../models/IReception";
import styles from "../style.module.scss";

interface LeftPanelInfoProps {
  state: ReceptionData;
}

const LeftPanelInfo: React.FC<LeftPanelInfoProps> = ({ state }) => {
  return (
    <div className={styles.wrapBlock}>
      <div className={styles.content}>
        <InfoCard
          label="Создано"
          children={`${moment(new Date(state.createDate)).format(
            "DD.MM.YYYY"
          )} в ${moment(new Date(state.createDate)).format("hh.mm")}`}
        />
        <InfoCard
          label="Дата приема"
          children={`${state.date} в ${state.time}`}
        />
        <InfoCard
          label="Статус"
          children={<StatusButton status={state.status} />}
        />
      </div>
    </div>
  );
};
export default LeftPanelInfo;
