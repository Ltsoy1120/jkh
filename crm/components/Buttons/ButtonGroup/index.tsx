import Link from "next/link";
import Button from "../Button";
import styles from "./style.module.scss";

interface ButtonGroupProps {
  absolute?: boolean;
  onClick1?: () => void;
  onClick2?: (event: React.FormEvent<HTMLButtonElement>) => void;
  onClick3?: () => void;
  children1: React.ReactNode;
  children2: React.ReactNode;
  href1?: string;
  href2?: string;
  width1?: number;
  width2?: number;
  children3?: React.ReactNode;
  href3?: string;
  width3?: number;
}
const ButtonGroup: React.FC<ButtonGroupProps> = ({
  absolute,
  onClick1,
  onClick2,
  onClick3,
  children1,
  children2,
  children3,
  href1,
  href2,
  href3,
  width1,
  width2,
  width3,
}) => {
  return (
    <div className={absolute ? styles.containerButtons : styles.buttons}>
      {href1 && children1 !== "Выгрузить в Excel" ? (
        <Link href={href1}>
          <a>
            <Button width={width1}>{children1}</Button>
          </a>
        </Link>
      ) : children1 === "Выгрузить в Exel" ? (
        <a download href={href1}>
          <Button width={width1}>{children1}</Button>
        </a>
      ) : (
        <Button onClick={onClick1} width={width1}>
          {children1}
        </Button>
      )}
      {href2 ? (
        <Link href={href2}>
          <a>
            <Button width={width2}>{children2}</Button>
          </a>
        </Link>
      ) : (
        <Button onClick={onClick2} width={width2}>
          {children2}
        </Button>
      )}
      {children3 && href3 ? (
        <Link href={href3}>
          <a>
            <Button width={width3}>{children3}</Button>
          </a>
        </Link>
      ) : children3 ? (
        <Button onClick={onClick3} width={width3}>
          {children3}
        </Button>
      ) : null}
    </div>
  );
};
export default ButtonGroup;
