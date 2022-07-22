import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { editHead } from "../../../../store/actions/contractorActions";
import { wrapper } from "../../../../store/store";
import { IUser } from "../../../../models/IUser";
import { settingsContractorLinks } from "../../../../components/Tabs/tabLinks";
import getContractorById from "../../../api/getContractorById";
import { HeadData, IContractor } from "../../../../models/IContractor";
import HeadForm from "../../../../components/Forms/PageForms/ContractorForm/HeadForm";

interface HeadSettingsProps {
  contractor: IContractor;
}

const HeadSettings: NextPage<HeadSettingsProps> = ({ contractor }) => {
  const companyId = useRouter().query.companyId.toString();
  const head: IUser = contractor?.head;

  const initHead = head && {
    lastName: head.lastName,
    name: head.name,
    patronymic: head.patronymic,
    dateOfBirth: head.dateOfBirth,
    phones: head.phones,
    email: head.email,
    position: head.position,
  };

  const editHeadSubmit = async (headData: HeadData) => {
    await editHead(companyId, contractor._id, headData);
  };

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Настройка профиля подрядчика "${contractor.contractorName}"`}
    >
      <Tabs tabLinks={settingsContractorLinks(companyId, contractor._id)} />
      <HeadForm initHead={initHead} onSubmit={editHeadSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const contractor = await getContractorById(ctx);
      return {
        props: contractor ? { contractor } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default HeadSettings;
