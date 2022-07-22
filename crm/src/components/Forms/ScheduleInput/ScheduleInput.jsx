import ToggleSwitch from "../../ToggleSwitch/ToggleSwitch";
import styles from "./ScheduleInput.module.scss";

export default function ScheduleInput({ margin_bottom }) {
  return <input type="number" placeholder="00:00" className={styles.input} style={{ marginBottom: margin_bottom }} />;
}
