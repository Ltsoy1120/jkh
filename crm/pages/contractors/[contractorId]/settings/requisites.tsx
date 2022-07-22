import Link from "next/link";
import Tabs from "../../../../components/Tabs";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import RequisitesForm from "../../../../components/Forms/PageForms/RequisitesForm";
import Button from "../../../../components/Buttons/Button";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import { RequisitesData } from "../../../../models/ICompany";
import { settingsContractorLinks } from "../../../../components/Tabs/tabLinks";
import getContractorById from "../../../api/getContractorById";
import { IContractor } from "../../../../models/IContractor";
import { useRouter } from "next/router";
import { editRequisites } from "../../../../store/actions/contractorActions";

interface RequisitesSettingsProps {
  contractor: IContractor;
}

const RequisitesSettings: NextPage<RequisitesSettingsProps> = ({
  contractor,
}) => {
  const companyId = useRouter().query.companyId.toString();
  const requisites: RequisitesData = contractor?.requisites;
  const initRequisites = requisites && {
    ogrn: requisites.ogrn,
    inn: requisites.inn,
    kpp: requisites.kpp,
    bankName: requisites.bankName,
    bik: requisites.bik,
    paymentAccount: requisites.paymentAccount,
    correspondentAccount: requisites.correspondentAccount,
  };

  const editRequisitesSubmit = async (requisitesData: RequisitesData) => {
    await editRequisites(companyId, contractor._id, requisitesData);
  };

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Настройка профиля подрядчика "${contractor.contractorName}"`}
    >
      <Tabs tabLinks={settingsContractorLinks(companyId, contractor._id)} />
      {!requisites ? (
        <>
          <h5>Данные о реквизитах компании отстустствуют</h5>
          <Link
            href={`/company/${companyId}/contractors/${contractor._id}/addRequisites`}
          >
            <a>
              <Button width={200}>Добавить реквизиты</Button>
            </a>
          </Link>
        </>
      ) : (
        <RequisitesForm
          initRequisites={initRequisites}
          onSubmit={editRequisitesSubmit}
        />
      )}
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

export default RequisitesSettings;
