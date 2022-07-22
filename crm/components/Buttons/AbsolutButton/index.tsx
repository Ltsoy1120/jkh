import Link from "next/link";
import Button from "../Button";
import styles from "./style.module.scss";

interface ButtonProps {
  text: string;
  href?: string;
  onClick?: () => void;
  right?: number;
}
const AbsolutButton: React.FC<ButtonProps> = ({
  text,
  href,
  onClick,
  right,
}) => {
  return (
    <div className={styles.addEmployee} style={{ right }}>
      {href && (
        <Link href={href}>
          <a>
            <Button>{text}</Button>
          </a>
        </Link>
      )}
      {onClick && <Button onClick={onClick}>{text}</Button>}
    </div>
  );
};
export default AbsolutButton;
