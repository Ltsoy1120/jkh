import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Button from "../../../components/Buttons/Button";
import MainLayout from "../../../components/MainLayout";
import Tabs from "../../../components/Tabs";
import { useAppSelector } from "../../../store/hooks";
import { deleteRequisites } from "../../../store/actions/companyActions";
import { wrapper } from "../../../store/store";
import { CompanyProps } from ".";
import RequisitesInfo from "../../../components/Info/RequisitesInfo";
import getCompanyById from "../../api/getCompanyById";
import { companyLinks } from "../../../components/Tabs/tabLinks";

const Requisites: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isLeader = company?.leader?._id === userData?._id;
  const isAdmin = userData.role === "admin";
  const requisites = company?.requisites;

  const handleDeleteRequisites = async () => {
    await deleteRequisites(company._id);
  };

  return (
    <MainLayout title="Реквизиты" mainTitle={`Компания "${company.name}"`}>
      <Tabs tabLinks={companyLinks(company._id)} />
      {!requisites ? (
        <>
          <h5>Реквизиты компании "{company.name}" отстустствуют</h5>
          {(isLeader || isAdmin) && (
            <Link href={`/company/${company._id}/addRequisites`}>
              <a>
                <Button width={200}>Добавить реквизиты</Button>
              </a>
            </Link>
          )}
        </>
      ) : (
        <RequisitesInfo
          requisites={requisites}
          companyId={company._id}
          isAdmin={isAdmin}
          isLeader={isLeader}
          handleDeleteRequisites={handleDeleteRequisites}
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

export default Requisites;
