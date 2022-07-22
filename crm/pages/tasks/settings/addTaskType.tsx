import type { NextPage } from "next";
import Tabs from "../../../components/Tabs";
import { settingsTasksLinks } from "../../../components/Tabs/tabLinks";
import { TaskTypeData } from "../../../models/ITask";
import MainLayout from "../../../components/MainLayout";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import TaskTypeForm from "../../../components/Forms/PageForms/Tasks/TaskTypeForm";
import { createTaskType } from "../../../store/actions/taskActions";

const AddTaskType: NextPage = () => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initTaskType = {
    name: "",
    isActive: true,
    performers: [],
    company: companyId,
  };

  const addTaskTypeSubmit = async (taskTypeData: TaskTypeData) => {
    await createTaskType(companyId, taskTypeData);
  };

  return (
    <MainLayout
      breadcrumbs="Задачи / Настройки / Добавить новый тип задачи"
      title="Задачи"
      mainTitle="Добавить новый тип задачи"
    >
      <Tabs tabLinks={settingsTasksLinks(companyId)} />

      <TaskTypeForm
        initTaskType={initTaskType}
        onSubmit={addTaskTypeSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export default AddTaskType;
