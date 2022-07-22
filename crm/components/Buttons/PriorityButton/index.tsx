import LocalFireDepartmentIcon from "@mui/icons-material/LocalFireDepartment";
import RocketLaunchIcon from "@mui/icons-material/RocketLaunch";
import { AppealsIcon } from "../../icons";
import styles from "./style.module.scss";

interface ButtonProps {
  priority: string;
}
const PriorityButton: React.FC<ButtonProps> = ({ priority }) => {
  return (
    <span
      className={`${styles.button} ${
        priority === "Критический"
          ? styles.critical
          : priority === "Высокий"
          ? styles.high
          : styles.middle
      }`}
    >
      {priority === "Критический" ? (
        <RocketLaunchIcon />
      ) : priority === "Высокий" ? (
        <LocalFireDepartmentIcon />
      ) : (
        <AppealsIcon />
      )}
      <span>{priority}</span>
    </span>
  );
};
export default PriorityButton;
