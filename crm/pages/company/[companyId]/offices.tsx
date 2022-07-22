import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import MainLayout from "../../../components/MainLayout";
import Button from "../../../components/Buttons/Button";
import Tabs from "../../../components/Tabs";
import OfficesTable from "../../../components/Tables/OfficesTable";
import { useAppSelector } from "../../../store/hooks";
import { wrapper } from "../../../store/store";
import { CompanyProps } from ".";
import getCompanyById from "../../api/getCompanyById";
import { companyLinks } from "../../../components/Tabs/tabLinks";

const Offices: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = company?.leader?._id === userData?._id;
  const isAdmin = userData?.role === "admin";
  const offices = company?.offices;
  const isHiddenBlock = isLeader || isAdmin;

  return (
    <MainLayout title="Офисы" mainTitle={`Компания "${company.name}"`}>
      <Tabs tabLinks={companyLinks(company._id)} />
      {!offices[0] ? (
        <>
          <h5>Данные об офисах компании отстустствуют</h5>
          {(isLeader || isAdmin) && (
            <Link href={`/company/${company._id}/addOffice`}>
              <a>
                <Button width={200}>Добавить офис</Button>
              </a>
            </Link>
          )}
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
