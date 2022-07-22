import MainLayout from "../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../store/store";
import getApplicationById from "../../api/getApplicationById";
import Tabs from "../../../components/Tabs";
import { settingsApplicationLinks } from "../../../components/Tabs/tabLinks";
import ButtonGroup from "../../../components/Buttons/ButtonGroup";
import { IApplication } from "../../../models/IApplication";
import ApplicationCard from "../../../components/Cards/ApplicationCard";
import { setApplicationData } from "../../../store/slices/applicationSlice";

export interface ApplicationProps {
  application: IApplication;
}

const Application: NextPage<ApplicationProps> = ({ application }) => {
  return (
    <MainLayout
      breadcrumbs="Диспетчерская / Заявки / Просмотр заявки"
      title="Просмотр заявки "
      mainTitle={`Заявка № ${application.number}`}
    >
      <Tabs tabLinks={settingsApplicationLinks(application._id)} />
      {application.status !== "Отменена" && (
        <ButtonGroup
          absolute
          children1="Создать дочернюю заявку"
          href1={`/control/${application._id}/createChildApplication`}
          width1={250}
          children2="Отложить заявку"
          // onClick2={deleteAccountHandler}
          width2={200}
        />
      )}
      <ApplicationCard application={application} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const application = await getApplicationById(ctx);
      store.dispatch(setApplicationData(application));
      return {
        props: application ? { application } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Application;
