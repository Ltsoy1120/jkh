import Link from "next/link";
import Button from "../Button";
import styles from "./style.module.scss";

interface FormButtonGroupProps {
  cancelHandler?: () => void;
  onClick1?: (event: React.FormEvent<HTMLButtonElement>) => void;
  href?: string;
  children1?: string;
  children2?: string;
  width1?: number;
  width2?: number;
  isCenter?: boolean;
  mb?: number;
}
const FormButtonGroup: React.FC<FormButtonGroupProps> = ({
  cancelHandler,
  onClick1,
  href,
  children1 = "Сохранить",
  children2 = "Отмена",
  width1 = 150,
  width2 = 150,
  isCenter,
  mb,
}) => {
  return (
    <div
      className={isCenter ? styles.centerButtons : styles.wrapButtons}
      style={{ marginBottom: mb }}
    >
      <Button onClick={onClick1} bg="green" width={width1} mr={30}>
        {children1}
      </Button>
      {href ? (
        <Link href={href}>
          <a>
            <Button type="button" width={width2}>
              {children2}
            </Button>
          </a>
        </Link>
      ) : (
        <Button onClick={cancelHandler} type="button" width={width2}>
          {children2}
        </Button>
      )}
    </div>
  );
};
export default FormButtonGroup;
