import Tabs from "../../../../components/Tabs";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import RequisitesForm from "../../../../components/Forms/PageForms/RequisitesForm";
import { useAppSelector } from "../../../../store/hooks";
import { editRequisites } from "../../../../store/actions/companyActions";
import Link from "next/link";
import Button from "../../../../components/Buttons/Button";
import { CompanyProps } from "../../[id]";
import { GetServerSideProps, NextPage } from "next";
import { wrapper } from "../../../../store/store";
import getCompanyById from "../../../api/getCompanyById";
import { RequisitesData } from "../../../../models/ICompany";
import { settingsCompanyLinks } from "../../../../components/Tabs/tabLinks";

const RequisitesSettings: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const isLeader = userData?._id === company?.leader?._id;
  const requisites: RequisitesData = company?.requisites;
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
    await editRequisites(company._id, requisitesData);
  };

  return (
    <>
      {isLeader || isAdmin ? (
        <MainLayout
          title="Руководители"
          mainTitle={`Настройка профиля компании  "${company.name}"`}
        >
          <Tabs tabLinks={settingsCompanyLinks(company._id)} />
          {!requisites ? (
            <>
              <h5>Данные о рекизитах компании отстустствуют</h5>
              <Link href={`/company/${company._id}/addRequisites`}>
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
      ) : (
        <h1>У вас отстустствует доступ к настройкам профиля компании</h1>
      )}
    </>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const company = await getCompanyById(ctx);
      return {
        props: company ? { company } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default RequisitesSettings;
