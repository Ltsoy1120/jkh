import styles from "../style.module.scss";

interface PlusProps {
  onClick?: () => void;
  mb?: number;
  className?: string;
}

const Plus: React.FC<PlusProps> = ({ onClick, mb, className }) => {
  return (
    <div
      className={`${styles.btn} ${className}`}
      onClick={onClick}
      style={{ marginBottom: mb }}
    >
      <svg width="23" height="23" viewBox="0 0 23 23" fill="none">
        <path d="M12.5735 12.5732L21.0247 12.5732C21.6915 12.5732 22.232 12.0327 22.232 11.3659C22.232 10.6991 21.6915 10.1586 21.0247 10.1585L12.5735 10.1586L12.5735 1.70744C12.5734 1.04064 12.033 0.500162 11.3662 0.500111C10.6994 0.500111 10.1589 1.04064 10.1588 1.70744L10.1588 10.1586L1.70769 10.1586C1.04099 10.1585 0.500412 10.6991 0.500361 11.3659C0.500411 12.0327 1.04089 12.5732 1.70769 12.5732L10.1589 12.5732L10.1589 21.0243C10.1589 21.6911 10.6994 22.2316 11.3662 22.2317C12.033 22.2317 12.5735 21.6912 12.5735 21.0243L12.5735 12.5732Z" />
      </svg>
    </div>
  );
};
export default Plus;
