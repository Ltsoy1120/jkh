import type { GetServerSideProps, NextPage } from "next";
import Tabs from "../../../../components/Tabs";
import { settingsTasksLinks } from "../../../../components/Tabs/tabLinks";
import { ITaskType, TaskTypeData } from "../../../../models/ITask";
import MainLayout from "../../../../components/MainLayout";
import { useAppSelector } from "../../../../store/hooks";
import TaskTypeForm from "../../../../components/Forms/PageForms/Tasks/TaskTypeForm";
import { editTaskType } from "../../../../store/actions/taskActions";
import { wrapper } from "../../../../store/store";
import { getTaskTypeById } from "../../../api/getTasks";
import { getFullName } from "../../../../utils/functions";

export interface TaskTypeProps {
  taskType: ITaskType;
}

const EditTaskType: NextPage<TaskTypeProps> = ({ taskType }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const initTaskType = taskType && {
    name: taskType.name,
    isActive: taskType.isActive,
    performers: taskType.performers.length
      ? taskType.performers.map((performer) => ({
          label: getFullName(performer),
          id: performer._id,
        }))
      : [],
    company: companyId,
  };

  const addTaskTypeSubmit = async (taskTypeData: TaskTypeData) => {
    await editTaskType(companyId, taskType._id, taskTypeData);
  };

  return (
    <MainLayout
      breadcrumbs="Задачи / Настройки / Добавить новый тип задачи"
      title="Задачи"
      mainTitle={`Редактировать тип задачи "${taskType.name}"`}
    >
      <Tabs tabLinks={settingsTasksLinks(companyId, taskType._id)} />

      <TaskTypeForm
        initTaskType={initTaskType}
        onSubmit={addTaskTypeSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const taskType = await getTaskTypeById(ctx);
      return {
        props: taskType ? { taskType } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditTaskType;
