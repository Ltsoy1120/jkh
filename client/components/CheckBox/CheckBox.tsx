import styles from "./CheckBox.module.scss";

type CheckBoxProps = {
  label: string;
  checked: boolean;
  onChange: () => void;
};

export default function CheckBox({ label, checked, onChange }: CheckBoxProps) {
  return (
    <div className={styles.blockCheckBox}>
      <div className={styles.checkBox} onClick={onChange}>
        {checked ? (
          <svg width="17" height="18" viewBox="0 0 17 18" fill="none">
            <path
              d="M1 9.91892L6.76923 16L16 1"
              stroke="#1EA133"
              strokeWidth="2"
              strokeLinecap="round"
            />
          </svg>
        ) : (
          ""
        )}
      </div>
      <span>{label}</span>
    </div>
  );
}
