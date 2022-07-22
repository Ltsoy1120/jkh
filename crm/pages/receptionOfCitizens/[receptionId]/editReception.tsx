import type { GetServerSideProps, NextPage } from "next";
import { useEffect } from "react";
import EditReceptionForm from "../../../components/Forms/PageForms/ReceptionOfCitizens/EditReceptionForm";
import MainLayout from "../../../components/MainLayout";
import Tabs from "../../../components/Tabs";
import { receptionLinks } from "../../../components/Tabs/tabLinks";
import { IReception, ReceptionCancelData } from "../../../models/IReception";
import {
  getHouses,
  getHousesByCompany,
} from "../../../store/actions/controlObjectActions";
import {
  cancelReception,
  completeReception,
  confirmReception,
  editReception,
} from "../../../store/actions/receptionActions";
import { useAppDispatch, useAppSelector } from "../../../store/hooks";
import { wrapper } from "../../../store/store";
import { getFullName } from "../../../utils/functions";
import getReceptionById from "../../api/getReceptionById";

export interface ReceptionProps {
  reception: IReception;
}

const EditReception: NextPage<ReceptionProps> = ({ reception }) => {
  const company = useAppSelector((state) => state.companies.company);
  const isLoading = useAppSelector((state) => state.receptions.isLoading);
  const houses = useAppSelector(getHouses());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getHousesByCompany(company._id));
  }, [dispatch]);

  const initReception = reception && {
    number: reception.number,
    office: reception.office
      ? {
          label: reception.office.name,
          id: reception.office._id,
        }
      : null,
    topic: reception.topic,
    text: reception.text,
    files: reception.files ? reception.files : [],
    address: reception.address,
    numberOfApartment: reception.numberOfApartment,
    visiterName: reception.visiterName,
    visiterPhone: reception.visiterPhone,
    status: reception.status,
    date: reception.date ? reception.date : null,
    time: reception.time ? reception.time : null,
    responsiblePerson: reception.responsiblePerson
      ? {
          label: getFullName(reception.responsiblePerson),
          id: reception.responsiblePerson._id,
        }
      : null,
    account: {
      label: `${
        reception.account.payer ? getFullName(reception.account.payer) : ""
      }`,
      address: `${reception.account.address}, кв.${reception.account.numberOfApartment}`,
      account: `Л/С №${reception.account.number}`,
      id: reception.account._id,
    },
    resultComment: reception.resultComment ? reception.resultComment : "",
    resultFiles: reception.resultFiles ? reception.resultFiles : [],
    createDate: reception.createDate,
    company: reception.company,
  };
  const editReceptionSubmit = async (receptionData: FormData) => {
    await editReception(reception._id, receptionData);
  };
  const confirmReceptionSubmit = async (receptionData: FormData) => {
    await confirmReception(reception._id, receptionData);
  };
  const completeReceptionSubmit = async (receptionData: FormData) => {
    await completeReception(reception._id, receptionData);
  };
  const cancelReceptionSubmit = async (
    reasonForCancel: ReceptionCancelData
  ) => {
    await cancelReception(reception._id, reception.number, reasonForCancel);
  };
  return (
    <MainLayout
      breadcrumbs="Прием граждан / История приема / Просмотр записи"
      title="Просмотр записи "
      mainTitle={`Запись на прием № ${reception.number}`}
    >
      <Tabs tabLinks={receptionLinks(reception._id)} />
      {!isLoading ? (
        <EditReceptionForm
          initReception={initReception}
          editReceptionSubmit={editReceptionSubmit}
          confirmReceptionSubmit={confirmReceptionSubmit}
          completeReceptionSubmit={completeReceptionSubmit}
          cancelReceptionSubmit={cancelReceptionSubmit}
          houses={houses}
          offices={company.offices}
          companyId={company._id}
          reception={reception}
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
      const reception = await getReceptionById(ctx);
      return {
        props: reception ? { reception } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });
export default EditReception;
