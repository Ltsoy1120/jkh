import MainLayout from "../../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import { wrapper } from "../../../../../store/store";
import { ITaskNotice, TaskNoticeData } from "../../../../../models/ITask";
import { getTaskNoticeByCompany } from "../../../../api/getTasks";
import Tabs from "../../../../../components/Tabs";
import { settingsTasksLinks } from "../../../../../components/Tabs/tabLinks";
import TaskNoticeForm from "../../../../../components/Forms/PageForms/Tasks/TaskNoticeForm";
import { createTaskNotice } from "../../../../../store/actions/taskActions";

export interface TaskTypesProps {
  taskNotice: ITaskNotice;
}
const TaskNotices: NextPage<TaskTypesProps> = ({ taskNotice }) => {
  const companyId = useRouter().query.companyId.toString();
  const initTaskNotice = {
    isNoticeToPerformer: taskNotice?.isNoticeToPerformer
      ? taskNotice.isNoticeToPerformer
      : false,
    isNoticeToObserver: taskNotice?.isNoticeToObserver
      ? taskNotice.isNoticeToObserver
      : false,
    company: companyId,
  };

  const createTaskNoticeSubmit = async (taskNoticeData: TaskNoticeData) => {
    await createTaskNotice(companyId, taskNoticeData);
  };
  return (
    <MainLayout
      breadcrumbs="Задачи / Настройки / Оповещения"
      title="Задачи"
      mainTitle="Оповещения"
    >
      <Tabs tabLinks={settingsTasksLinks(companyId)} />

      <TaskNoticeForm
        initTaskNotice={initTaskNotice}
        onSubmit={createTaskNoticeSubmit}
      />
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const taskNotice = await getTaskNoticeByCompany(ctx);
      return {
        props: taskNotice ? { taskNotice } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default TaskNotices;
