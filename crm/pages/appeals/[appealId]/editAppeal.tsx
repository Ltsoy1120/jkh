import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import { AppealProps } from ".";
import ButtonGroup from "../../../components/Buttons/ButtonGroup";
import EditAppealForm from "../../../components/Forms/PageForms/Appeals/EditAppealForm";
import EditApplicationForm from "../../../components/Forms/PageForms/Control/EditApplicationForm";
import MainLayout from "../../../components/MainLayout";
import Tabs from "../../../components/Tabs";
import { settingsAppealLinks } from "../../../components/Tabs/tabLinks";
import { ApplicationCancelData } from "../../../models/IApplication";
import { doneAppeal, editAppeal } from "../../../store/actions/appealActions";
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
import getAppealById from "../../api/getAppealById";

const EditAppeal: NextPage<AppealProps> = ({ appeal }) => {
  const companyId = useAppSelector((state) => state.companies.company)?._id;
  const isLoading = useAppSelector((state) => state.appeals.isLoading);
  const houses = useAppSelector(getHouses());
  console.log("appeal", appeal);

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(companyId));
  }, [dispatch]);

  const initAppeal = {
    number: appeal.number,
    type: appeal.type,
    text: appeal.text,
    files: appeal.files ? appeal.files : [],
    address: appeal.address,
    numberOfApartment: appeal.numberOfApartment,
    phone: appeal.phone,
    status: appeal.status,
    priority: appeal.priority,
    workDate: appeal.workDate ? appeal.workDate : null,
    performer: appeal.performer
      ? {
          label: getFullName(appeal.performer),
          id: appeal.performer._id,
        }
      : null,
    account: {
      label: `${appeal.account.payer ? getFullName(appeal.account.payer) : ""}`,
      address: `${appeal.account.address}, кв.${appeal.account.numberOfApartment}`,
      account: `Л/С №${appeal.account.number}`,
      id: appeal.account._id,
    },
    result: appeal.result ? appeal.result : "",
    resultComment: appeal.resultComment ? appeal.resultComment : "",
    resultFiles: appeal.resultFiles ? appeal.resultFiles : [],
    createDate: appeal.createDate,
    company: companyId,
  };
  const editAppealSubmit = async (appealData: FormData) => {
    await editAppeal(appeal._id, appealData);
  };
  const applicationInProgressSubmit = async (appealData: FormData) => {
    await applicationInProgress(appeal._id, appealData);
  };
  const doneAppealSubmit = async (appealData: FormData) => {
    await doneAppeal(appeal._id, appealData);
  };
  const applicationCanceledSubmit = async (
    reasonForCancel: ApplicationCancelData
  ) => {
    await cancelApplication(appeal._id, appeal.number, reasonForCancel);
  };
  return (
    <MainLayout
      breadcrumbs={`Обращения / Редактирование обращения № ${appeal.number}`}
      title="Редктирование обращения"
      mainTitle={`Редактирование обращения № ${appeal.number}`}
    >
      <Tabs tabLinks={settingsAppealLinks(appeal._id)} />
      {appeal.status !== "Отменена" && (
        <ButtonGroup
          absolute
          children1="Создать дочернее обращение"
          href1={`/appeals/${appeal._id}`}
          width1={270}
          children2="Создать заявку"
          href2={`/control/addApplication`}
          width2={160}
          children3="Создать задачу"
          href3={`/tasks/addTask`}
          width3={160}
        />
      )}
      {!isLoading ? (
        <EditAppealForm
          initAppeal={initAppeal}
          editAppealSubmit={editAppealSubmit}
          applicationInProgressSubmit={applicationInProgressSubmit}
          applicationCanceledSubmit={applicationCanceledSubmit}
          doneAppealSubmit={doneAppealSubmit}
          houses={houses}
          companyId={companyId}
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
      const appeal = await getAppealById(ctx);
      return {
        props: appeal ? { appeal } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });
export default EditAppeal;
