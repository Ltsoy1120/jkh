import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Button from "../../../../components/Buttons/Button";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { useAppSelector } from "../../../../store/hooks";
import OfficesTable from "../../../../components/Tables/OfficesTable";
import getCompanyById from "../../../api/getCompanyById";
import { wrapper } from "../../../../store/store";
import { CompanyProps } from "../../[id]";
import { deleteOffice } from "../../../../store/actions/companyActions";
import { settingsCompanyLinks } from "../../../../components/Tabs/tabLinks";

const Offices: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = company?.leader?._id === userData._id;
  const isAdmin = userData?.role === "admin";
  const offices = company?.offices;
  const isHiddenBlock = isLeader || isAdmin;

  return (
    <>
      {isLeader || isAdmin ? (
        <MainLayout
          title="Офисы"
          mainTitle={`Настройка профиля компании "${company.name}"`}
        >
          <Tabs tabLinks={settingsCompanyLinks(company._id)} />
          {!offices[0] ? (
            <>
              <h5>Данные об офисах компании отстустствуют</h5>
              <Link href={`/company/${company._id}/addOffice`}>
                <a>
                  <Button width={200}>Добавить офис</Button>
                </a>
              </Link>
            </>
          ) : (
            <OfficesTable
              offices={offices}
              isAdmin={isAdmin}
              isHiddenBlock={isHiddenBlock}
              companyId={company._id}
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

export default Offices;
