import type { GetServerSideProps, NextPage } from "next";
import { ChangeEvent, useState } from "react";
import AbsolutButton from "../../../components/Buttons/AbsolutButton";
import FormButtonGroup from "../../../components/Buttons/FormButtonGroup";
import TaskCard from "../../../components/Cards/TaskCard";
import CustomTextArea from "../../../components/Forms/ComponentForms/CustomTextArea";
import DateTimeSelect from "../../../components/Forms/ComponentForms/DateTimeSelect";
import MainLayout from "../../../components/MainLayout";
import Modal from "../../../components/Modal";
import Tabs from "../../../components/Tabs";
import { settingsTaskLinks } from "../../../components/Tabs/tabLinks";
import { ITask, TaskPostponeData } from "../../../models/ITask";
import { postponeTask } from "../../../store/actions/taskActions";
import { setTaskData } from "../../../store/slices/taskSlice";
import { wrapper } from "../../../store/store";
import { getTaskById } from "../../api/getTasks";

export interface TaskProps {
  task: ITask;
}

const Task: NextPage<TaskProps> = ({ task }) => {
  const [taskPostponeState, setTaskPostponeState] = useState<TaskPostponeData>({
    deadline: task.deadline ? task.deadline : null,
    newDeadline: null,
    reasonOfPostpone: "",
  });

  const handleDateSelect = (newValue: Date, name: string) => {
    setTaskPostponeState((prevState) => ({
      ...prevState,
      [name]: newValue,
    }));
  };

  const handleChange = (event: ChangeEvent<HTMLTextAreaElement>) => {
    setTaskPostponeState((prevState) => ({
      ...prevState,
      [event.target.name]: event.target.value,
    }));
  };

  const postponeTaskSubmit = async (
    event: React.FormEvent<HTMLButtonElement>
  ) => {
    event.preventDefault();
    console.log("state", taskPostponeState);
    await postponeTask(task._id, taskPostponeState);
    closeModal();
  };

  // для модалки
  const [showModal, setShowModal] = useState({
    show: false,
  });
  const openModal = () => {
    setShowModal({ show: true });
  };
  const closeModal = () => {
    setShowModal({ show: false });
  };
  const modalBody = (
    <>
      <h3>Отложить выполнение задачи № {task.number}</h3>
      <div style={{ display: "flex" }}>
        <DateTimeSelect
          label="Дата, время с"
          value={taskPostponeState.deadline}
          onChange={(newValue) => handleDateSelect(newValue, "deadline")}
          column
          width={265}
          mb={30}
          mr={20}
        />
        <DateTimeSelect
          label="Дата, время по"
          value={taskPostponeState.newDeadline}
          onChange={(newValue) => handleDateSelect(newValue, "newDeadline")}
          column
          width={265}
          mb={30}
        />
      </div>
      <div>
        <CustomTextArea
          placeholder="Причина отмены"
          name="reasonOfPostpone"
          value={taskPostponeState.reasonOfPostpone}
          onChange={handleChange}
          required
          width={550}
        />
      </div>
      <FormButtonGroup
        children1="Отложить выполнение"
        children2="Отмена"
        onClick1={postponeTaskSubmit}
        href={`/tasks/${task._id}`}
        isCenter
        width1={260}
        mb={30}
      />
    </>
  );
  return (
    <MainLayout
      breadcrumbs="Задачи / Я создал / Просмотр задачи"
      title="Задачи"
      mainTitle={`Задача № ${task.number}`}
    >
      <AbsolutButton text="Отложить исполнение" onClick={openModal} />
      {showModal.show && <Modal body={modalBody} close={closeModal} />}
      <Tabs tabLinks={settingsTaskLinks(task._id)} />
      <TaskCard task={task} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const task = await getTaskById(ctx);
      store.dispatch(setTaskData(task));
      return {
        props: task ? { task } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Task;
