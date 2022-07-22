import { IApartment } from "../../../models/IHouse";
import Button from "../../Buttons/Button";
import styles from "./style.module.scss";

interface HouseCleaningCardProps {
  apartments: IApartment[];
}
const HouseCleaningCard: React.FC<HouseCleaningCardProps> = ({
  apartments,
}) => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.wrapInfo}>
        <p>Всего помещений: {apartments.length} </p>
        <Button bg="green">Удалить все помещения</Button>
      </div>
      <div className={styles.wrapInfo}>
        <p>Всего помещений: {apartments.length} </p>
        <Button bg="green">Удалить все помещения</Button>
      </div>
      <div className={styles.wrapInfo}>
        <p>Всего помещений: {apartments.length} </p>
        <Button bg="green">Удалить все помещения</Button>
      </div>
    </div>
  );
};
export default HouseCleaningCard;
