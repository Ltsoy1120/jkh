import MainLayout from "../../../../components/MainLayout/MainLayout";
import Tabs from "../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../components/Tabs/tabLinks";
import { wrapper } from "../../../../store/store";
import { GetServerSideProps, NextPage } from "next";
import getSubjectById from "../../../api/getSubjectById";
import { ISubject } from "../../../../models/ISubject";
import AddPlus from "../../../../components/AddPlus";
import PropertiesTable from "../../../../components/Tables/ControlObjects/PropertiesTable";
import { getFullName } from "../../../../utils/functions";
import { setSubjectData } from "../../../../store/slices/subjectSlice";

export interface SubjectProps {
  subject: ISubject;
}

const Properties: NextPage<SubjectProps> = ({ subject }) => {
  console.log("subject", subject);
  return (
    <MainLayout title="Паспортный стол" mainTitle={getFullName(subject)}>
      <Tabs tabLinks={settingsSubjectLinks(subject._id)} />
      <AddPlus
        name="Добавить собственность"
        href={`/controlObjects/passportOffice/${subject._id}/addProperty`}
      />
      {subject.properties.length ? (
        <PropertiesTable properties={subject.properties} subject={subject} />
      ) : (
        <h2>Данных о собственностях субъекта нет</h2>
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

export default Properties;
