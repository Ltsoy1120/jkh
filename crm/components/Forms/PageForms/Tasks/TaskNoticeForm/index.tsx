import { useState } from "react";
import styles from "./style.module.scss";
import { TaskNoticeData } from "../../../../../models/ITask";
import CheckBox from "../../../../CheckBox";
import Button from "../../../../Buttons/Button";

interface TaskTypeFormProps {
  initTaskNotice: TaskNoticeData;
  onSubmit: (taskNoticeData: TaskNoticeData) => Promise<void>;
}

const TaskNoticeForm: React.FC<TaskTypeFormProps> = ({
  initTaskNotice,
  onSubmit,
}) => {
  const [state, setState] = useState<TaskNoticeData>(initTaskNotice);

  const handleChecked = (name: string) => {
    setState((prevState) => ({
      ...prevState,
      [name]: !state[name],
    }));
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSubmit(state);
  };

  return (
    <form onSubmit={handleSubmit} className={styles.wrapper}>
      <h2>Оповещение по E-mail</h2>
      <CheckBox
        label="Исполнителя"
        checked={state.isNoticeToPerformer}
        onChange={() => handleChecked("isNoticeToPerformer")}
        mb={30}
      />
      <CheckBox
        label="Наблюдателя"
        checked={state.isNoticeToObserver}
        onChange={() => handleChecked("isNoticeToObserver")}
        mb={30}
      />
      <Button bg="green" width={150} mt={50}>
        Сохранить
      </Button>
    </form>
  );
};
export default TaskNoticeForm;
