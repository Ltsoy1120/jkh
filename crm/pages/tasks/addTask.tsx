import type { NextPage } from "next";
import TaskForm from "../../components/Forms/PageForms/Tasks/TaskForm";
import MainLayout from "../../components/MainLayout";
import { createTask } from "../../store/actions/taskActions";
import { useAppSelector } from "../../store/hooks";

const AddAppeal: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;

  const initTask = {
    basisForTask: "",
    numberOfBasis: "",
    taskName: "",
    priority: "",
    taskType: "",
    deadline: null,
    remindOfDeadline: false,
    remindHow: "",
    remindWho: "",
    remindWhen: null,
    remindDays: "",
    address: "",
    numberOfApartment: "",
    text: "",
    files: [],
    performers: [],
    observers: [],
    company: companyId,
  };
  const createTaskSubmit = async (taskData: FormData) => {
    await createTask(taskData);
  };

  return (
    <MainLayout
      breadcrumbs="Задачи / Новая задача"
      title="Задачи"
      mainTitle="Новая задача"
    >
      <TaskForm
        initTask={initTask}
        onSubmit={createTaskSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export default AddAppeal;
