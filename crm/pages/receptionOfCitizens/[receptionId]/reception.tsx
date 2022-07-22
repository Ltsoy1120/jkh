import MainLayout from "../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../store/store";
import Tabs from "../../../components/Tabs";
import { receptionLinks } from "../../../components/Tabs/tabLinks";
import { IReception } from "../../../models/IReception";
import getReceptionById from "../../api/getReceptionById";
import { setReceptionData } from "../../../store/slices/receptionSlice";
import ReceptionCard from "../../../components/Cards/ReceptionCard";

export interface ReceptionProps {
  reception: IReception;
}

const Reception: NextPage<ReceptionProps> = ({ reception }) => {
  return (
    <MainLayout
      breadcrumbs="Прием граждан / История приема / Просмотр записи"
      title="Просмотр записи "
      mainTitle={`Запись на прием № ${reception.number}`}
    >
      <Tabs tabLinks={receptionLinks(reception._id)} />
      <ReceptionCard reception={reception} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const reception = await getReceptionById(ctx);
      store.dispatch(setReceptionData(reception));
      return {
        props: reception ? { reception } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Reception;
