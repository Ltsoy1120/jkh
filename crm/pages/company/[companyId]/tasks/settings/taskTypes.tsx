import MainLayout from "../../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import AbsolutButton from "../../../../../components/Buttons/AbsolutButton";
import { useAppSelector } from "../../../../../store/hooks";
import { useRouter } from "next/router";
import { wrapper } from "../../../../../store/store";
import { ITaskType } from "../../../../../models/ITask";
import { getTaskTypesByCompany } from "../../../../api/getTasks";
import Tabs from "../../../../../components/Tabs";
import { settingsTasksLinks } from "../../../../../components/Tabs/tabLinks";
import TaskTypesTable from "../../../../../components/Tables/Tasks/TaskTypesTable";

export interface TaskTypesProps {
  taskTypes: ITaskType[];
}
const TaskTypes: NextPage<TaskTypesProps> = ({ taskTypes }) => {
  console.log("taskTypes", taskTypes);

  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const isLoading = useAppSelector((state) => state.subjects.isLoading);

  return (
    <MainLayout
      breadcrumbs="Задачи / Настройки / Типы задач"
      title="Задачи"
      mainTitle="Настройки"
    >
      <Tabs tabLinks={settingsTasksLinks(companyId)} />
      <AbsolutButton
        text="Добавить новый тип задачи"
        href="/tasks/settings/addTaskType"
      />
      {!isLoading ? (
        <>
          {taskTypes.length ? (
            <TaskTypesTable taskTypes={taskTypes} />
          ) : (
            <h2>Типы задач отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const taskTypes = await getTaskTypesByCompany(ctx);
      return {
        props: taskTypes ? { taskTypes } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default TaskTypes;
