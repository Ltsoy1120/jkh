import type { GetServerSideProps, NextPage } from "next";
import { TaskProps } from ".";
import EditTaskForm from "../../../components/Forms/PageForms/Tasks/EditTaskForm";
import MainLayout from "../../../components/MainLayout";
import Tabs from "../../../components/Tabs";
import { settingsTaskLinks } from "../../../components/Tabs/tabLinks";
import { ApplicationCancelData } from "../../../models/IApplication";
import { TaskCancelData } from "../../../models/ITask";
import {
  cancelTask,
  completeTask,
  editTask,
} from "../../../store/actions/taskActions";
import { useAppSelector } from "../../../store/hooks";
import { setTaskData } from "../../../store/slices/taskSlice";
import { wrapper } from "../../../store/store";
import { getFullName } from "../../../utils/functions";
import { getTaskById } from "../../api/getTasks";

const EditTask: NextPage<TaskProps> = ({ task }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const isLoading = useAppSelector((state) => state.appeals.isLoading);

  const initTask = {
    createDate: task.createDate,
    basisForTask: task.basisForTask,
    numberOfBasis: task.numberOfBasis,
    taskName: task.taskName,
    priority: task.priority,
    taskType: task.taskType ? task.taskType : "",
    deadline: task.deadline ? task.deadline : null,
    remindOfDeadline: task.remindOfDeadline,
    remindHow: task.remindHow ? task.remindHow : "",
    remindWho: task.remindWho ? task.remindWho : "",
    remindWhen: task.remindWhen ? task.remindWhen : null,
    remindDays: task.remindDays ? task.remindDays : "",
    address: task.address ? task.address : "",
    numberOfApartment: task.numberOfApartment ? task.numberOfApartment : "",
    text: task.text ? task.text : "",
    files: task.files ? task.files : [],
    dispatcher: {
      label: getFullName(task.dispatcher),
      id: task.dispatcher._id,
    },
    performers: task.performers
      ? task.performers.map((performer) => ({
          label: getFullName(performer),
          id: performer._id,
        }))
      : [],
    observers: task.observers
      ? task.observers.map((observer) => ({
          label: getFullName(observer),
          id: observer._id,
        }))
      : [],
    status: task.status,
    resultComment: task.resultComment ? task.resultComment : "",
    resultFiles: task.resultFiles ? task.resultFiles : [],
    company: companyId,
  };

  const editTaskSubmit = async (taskData: FormData) => {
    await editTask(task._id, taskData);
  };
  const completeTaskSubmit = async (taskData: FormData) => {
    await completeTask(task._id, taskData);
  };
  const cancelTaskSubmit = async (reasonForCancel: TaskCancelData) => {
    await cancelTask(task._id, reasonForCancel);
  };

  return (
    <MainLayout
      breadcrumbs="Задачи / Я создал / Редактирование задачи"
      title="Задачи"
      mainTitle={`Задача № ${task.number}`}
    >
      <Tabs tabLinks={settingsTaskLinks(task._id)} />
      {!isLoading ? (
        <EditTaskForm
          task={task}
          initTask={initTask}
          editTaskSubmit={editTaskSubmit}
          cancelTaskSubmit={cancelTaskSubmit}
          completeTaskSubmit={completeTaskSubmit}
          companyId={companyId}
        />
      ) : (
        <h2>Loading...</h2>
      )}
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

export default EditTask;
