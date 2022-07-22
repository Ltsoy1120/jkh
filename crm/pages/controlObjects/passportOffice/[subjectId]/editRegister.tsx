import type { GetServerSideProps, NextPage } from "next";
import MainLayout from "../../../../components/MainLayout";
import { wrapper } from "../../../../store/store";
import Tabs from "../../../../components/Tabs";
import { settingsSubjectLinks } from "../../../../components/Tabs/tabLinks";
import { ISubject } from "../../../../models/ISubject";
import { getFullName } from "../../../../utils/functions";
import getSubjectById from "../../../api/getSubjectById";
import { addRegister as editRegister } from "../../../../store/actions/subjectActions";
import RegisterForm from "../../../../components/Forms/PageForms/ControlObjects/RegisterForm";
import { setSubjectData } from "../../../../store/slices/subjectSlice";

export interface SubjectProps {
  subject: ISubject;
}

const EditRegister: NextPage<SubjectProps> = ({ subject }) => {
  const initRegister = {
    startDateOfRegister: subject.startDateOfRegister,
    endDateOfRegister: subject.endDateOfRegister
      ? subject.endDateOfRegister
      : null,
    registerAccountNumber: subject.registerAccount.number,
    registerStatus: subject.registerStatus ? subject.registerStatus : "",
    reasonOfLeaving: subject.reasonOfLeaving ? subject.reasonOfLeaving : "",
    reasonForArrival: subject.reasonForArrival ? subject.reasonForArrival : "",
    previosRegisterPlace: subject.previosRegisterPlace
      ? subject.previosRegisterPlace
      : "",
    newRegisterPlace: subject.newRegisterPlace ? subject.newRegisterPlace : "",
    registerComment: subject.registerComment ? subject.registerComment : "",
    registerDocs: subject.registerDocs ? subject.registerDocs : [],
  };
  const editRegisterSubmit = async (registerData: FormData) => {
    await editRegister(subject._id, registerData);
  };

  return (
    <MainLayout title="Паспортный стол" mainTitle={getFullName(subject)}>
      <Tabs tabLinks={settingsSubjectLinks(subject._id)} />
      <RegisterForm
        initRegister={initRegister}
        onSubmit={editRegisterSubmit}
        href={`/controlObjects/passportOffice/${subject._id}/register`}
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

export default EditRegister;
