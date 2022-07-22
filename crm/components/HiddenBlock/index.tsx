import Link from "next/link";
import { MouseEventHandler } from "react";
import {
  ArchiveIcon,
  CloseIcon,
  ContractIcon,
  CopyIcon,
  DeleteIcon,
  EditIcon,
  HourglassIcon,
  PlusIcon,
} from "../icons";
import styles from "./style.module.scss";

interface HiddenBlockProps {
  href?: string;
  closeHref?: string;
  addDeviceDataHref?: string;
  disableHandler?: MouseEventHandler<HTMLDivElement>;
  deleteHandler?: MouseEventHandler<HTMLDivElement>;
  addHandler?: MouseEventHandler<HTMLDivElement>;
  id: string;
  canAdd?: boolean;
  canEdit?: boolean;
  canClose?: boolean;
  canCopyRights?: boolean;
  canDeviceDataHistory?: boolean;
  canAddDeviceData?: boolean;
  canArchive?: boolean;
  canCreateAccount?: boolean;
  canDisable?: boolean;
  canDelete?: boolean;
}

const HiddenBlock: React.FC<HiddenBlockProps> = ({
  href,
  closeHref,
  addDeviceDataHref,
  disableHandler,
  deleteHandler,
  addHandler,
  id,
  canAdd,
  canEdit,
  canClose,
  canCopyRights,
  canDeviceDataHistory,
  canAddDeviceData,
  canArchive,
  canCreateAccount,
  canDisable,
  canDelete,
}) => {
  return (
    <div className={styles.hiddenBlock}>
      {canAdd && (
        <div className={styles.btn} onClick={addHandler}>
          <ContractIcon />
          <span id={id}>Пригласить</span>
        </div>
      )}
      {canEdit && (
        <Link href={href}>
          <a>
            <div className={styles.btn}>
              <EditIcon />
              <span>Редактировать</span>
            </div>
          </a>
        </Link>
      )}
      {canClose && (
        <Link href={closeHref}>
          <a>
            <div className={styles.btn}>
              <CloseIcon />
              <span>Закрыть</span>
            </div>
          </a>
        </Link>
      )}
      {canCopyRights && (
        <div className={styles.btn}>
          <CopyIcon />
          <span>Копировать права</span>
        </div>
      )}
      {canDeviceDataHistory && (
        <div className={styles.btn}>
          <HourglassIcon />
          <span id={id}>История показаний</span>
        </div>
      )}
      {canAddDeviceData && (
        <Link href={addDeviceDataHref}>
          <a>
            <div className={styles.btn}>
              <PlusIcon />
              <span id={id}>Подать показания</span>
            </div>
          </a>
        </Link>
      )}
      {canArchive && (
        <div className={styles.btn}>
          <ArchiveIcon />
          <span id={id}>В архив</span>
        </div>
      )}
      {canCreateAccount && (
        <div className={styles.btn}>
          <PlusIcon />
          <span id={id}>Создать лицевой счет</span>
        </div>
      )}
      {canDisable && (
        <div className={styles.btn} onClick={disableHandler}>
          <CloseIcon />
          <span id={id}>Отключить</span>
        </div>
      )}
      {canDelete && (
        <div className={styles.btn} onClick={deleteHandler}>
          <DeleteIcon />
          <span id={id}>Удалить</span>
        </div>
      )}
    </div>
  );
};
export default HiddenBlock;
