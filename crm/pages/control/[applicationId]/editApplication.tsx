import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import EditApplicationForm from "../../../components/Forms/PageForms/Control/EditApplicationForm";
import MainLayout from "../../../components/MainLayout";
import { ApplicationCancelData } from "../../../models/IApplication";
import {
  applicationInProgress,
  cancelApplication,
  completeApplication,
  editApplication,
} from "../../../store/actions/applicationActions";
import {
  getHouses,
  getHousesByCompany,
} from "../../../store/actions/controlObjectActions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { wrapper } from "../../../store/store";
import { getFullName } from "../../../utils/functions";
import getApplicationById from "../../api/getApplicationById";
import { ApplicationProps } from "./application";

const EditApplication: NextPage<ApplicationProps> = ({ application }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const houses = useAppSelector(getHouses());
  console.log("application", application);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(companyId));
  }, [dispatch]);

  const initApplication = {
    type: application.type,
    text: application.text,
    files: application.files ? application.files : [],
    address: application.address ? application.address : "",
    numberOfEntrance: application.numberOfEntrance
      ? application.numberOfEntrance
      : "",
    floor: application.floor ? application.floor : "",
    numberOfApartment: application.numberOfApartment,
    applicantFullName: application.applicantFullName,
    accountNumber: application.accountNumber ? application.accountNumber : "",
    phone: application.phone,
    isPhoneBindToAccount: application.isPhoneBindToAccount,
    status: application.status,
    priority: application.priority,
    executionDateFrom: application.executionDateFrom
      ? application.executionDateFrom
      : null,
    executionDateTo: application.executionDateTo
      ? application.executionDateTo
      : null,
    performer: application.performer
      ? {
          label: getFullName(application.performer),
          id: application.performer._id,
        }
      : null,
    typeOfPerformer: application.typeOfPerformer
      ? application.typeOfPerformer
      : "",
    contractor: application.contractor
      ? {
          label: application.contractor.contractorName,
          id: application.contractor._id,
        }
      : null,
    result: application.result ? application.result : "",
    resultComment: application.resultComment ? application.resultComment : "",
    resultFiles: application.resultFiles ? application.resultFiles : [],
    createDate: application.createDate,
    company: companyId,
  };
  const editApplicationSubmit = async (applicationData: FormData) => {
    await editApplication(application._id, applicationData);
  };
  const applicationInProgressSubmit = async (applicationData: FormData) => {
    await applicationInProgress(application._id, applicationData);
  };
  const completeApplicationSubmit = async (applicationData: FormData) => {
    await completeApplication(application._id, applicationData);
  };
  const applicationCanceledSubmit = async (
    reasonForCancel: ApplicationCancelData
  ) => {
    await cancelApplication(
      application._id,
      application.number,
      reasonForCancel
    );
  };
  return (
    <MainLayout
      breadcrumbs="Диспетчерская / Заявки / Новая заявка"
      title="Редктирование заявки"
      mainTitle={`Редктирование заявки № ${application.number}`}
    >
      {!isLoading ? (
        <EditApplicationForm
          initApplication={initApplication}
          editApplicationSubmit={editApplicationSubmit}
          applicationInProgressSubmit={applicationInProgressSubmit}
          applicationCanceledSubmit={applicationCanceledSubmit}
          completeApplicationSubmit={completeApplicationSubmit}
          houses={houses}
          companyId={companyId}
          application={application}
        />
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const application = await getApplicationById(ctx);
      return {
        props: application ? { application } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditApplication;
