import MainLayout from "../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../store/store";
import Tabs from "../../../components/Tabs";
import {
  settingsAppealLinks,
  settingsApplicationLinks,
} from "../../../components/Tabs/tabLinks";
import ButtonGroup from "../../../components/Buttons/ButtonGroup";
import { IAppeal } from "../../../models/IAppeal";
import getAppealById from "../../api/getAppealById";
import { setAppealData } from "../../../store/slices/appealSlice";
import AppealCard from "../../../components/Cards/AppealCard";

export interface AppealProps {
  appeal: IAppeal;
}

const Appeal: NextPage<AppealProps> = ({ appeal }) => {
  console.log("appeal", appeal);
  return (
    <MainLayout
      breadcrumbs="Обращения / Просмотр обращения"
      title="Просмотр обращения "
      mainTitle={`Обращение № ${appeal.number}`}
    >
      <Tabs tabLinks={settingsAppealLinks(appeal._id)} />
      {appeal.status !== "Отменена" && (
        <ButtonGroup
          absolute
          children1="Создать дочернее обращение"
          href1={`/appeals/${appeal._id}`}
          width1={250}
          children2="Отложить обращение"
          // onClick2={deleteAccountHandler}
          width2={200}
        />
      )}
      <AppealCard appeal={appeal} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const appeal = await getAppealById(ctx);
      store.dispatch(setAppealData(appeal));
      return {
        props: appeal ? { appeal } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Appeal;
