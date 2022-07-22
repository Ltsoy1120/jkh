import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../../components/MainLayout";
import { wrapper } from "../../../../store/store";
import Tabs from "../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../components/Tabs/tabLinks";
import { ISubject } from "../../../../models/ISubject";
import { getFullName } from "../../../../utils/functions";
import getSubjectById from "../../../api/getSubjectById";
import PropertyForm from "../../../../components/Forms/PageForms/ControlObjects/PropertyForm";
import { addProperty } from "../../../../store/actions/subjectActions";
import { setSubjectData } from "../../../../store/slices/subjectSlice";

export interface SubjectProps {
  subject: ISubject;
}

const AddProperty: NextPage<SubjectProps> = ({ subject }) => {
  const initProperty = {
    subject: subject._id,
    startDateOfOwnership: null,
    endDateOfOwnership: null,
    registerNumber: "",
    accountNumber: "",
    shareOfOwnership: "",
    comment: "",
    docs: [],
  };
  const addPropertySubmit = async (propertyData: FormData) => {
    await addProperty(subject._id, propertyData);
  };

  return (
    <MainLayout title="Паспортный стол" mainTitle={getFullName(subject)}>
      <Tabs tabLinks={settingsSubjectLinks(subject._id)} />
      <PropertyForm
        initProperty={initProperty}
        onSubmit={addPropertySubmit}
        href={`/controlObjects/passportOffice/${subject._id}/properties`}
      />
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

export default AddProperty;
