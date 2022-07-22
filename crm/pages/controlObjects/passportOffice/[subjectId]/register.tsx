import MainLayout from "../../../../components/MainLayout/MainLayout";
import Tabs from "../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../components/Tabs/tabLinks";
import { wrapper } from "../../../../store/store";
import { GetServerSideProps, NextPage } from "next";
import getSubjectById from "../../../api/getSubjectById";
import { ISubject } from "../../../../models/ISubject";
import AddPlus from "../../../../components/AddPlus";
import { getFullName } from "../../../../utils/functions";
import { setSubjectData } from "../../../../store/slices/subjectSlice";
import RegisterTable from "../../../../components/Tables/ControlObjects/RegisterTable";

export interface SubjectProps {
  subject: ISubject;
}

const Register: NextPage<SubjectProps> = ({ subject }) => {
  return (
    <MainLayout title="Паспортный стол" mainTitle={getFullName(subject)}>
      <Tabs tabLinks={settingsSubjectLinks(subject._id)} />
      <AddPlus
        name="Добавить регистрацию"
        href={`/controlObjects/passportOffice/${subject._id}/addRegister`}
      />
      {subject.registerAccount ? (
        <RegisterTable subject={subject} />
      ) : (
        <h2>Данных о регистрации субъекта нет</h2>
      )}
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const subject = await getSubjectById(ctx);
      store.dispatch(setSubjectData(subject));
      return {
        props: subject ? { subject } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default Register;
