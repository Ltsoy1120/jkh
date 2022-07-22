import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import Button from "../../../components/Buttons/Button";
import MainLayout from "../../../components/MainLayout";
import { deleteLeader } from "../../../store/actions/companyActions";
import { useAppSelector } from "../../../store/hooks";
import Tabs from "../../../components/Tabs";
import { IUser } from "../../../models/IUser";
import { wrapper } from "../../../store/store";
import LeaderInfo from "../../../components/Info/LeaderInfo";
import getCompanyById from "../../api/getCompanyById";
import { companyLinks } from "../../../components/Tabs/tabLinks";
import { CompanyProps } from ".";

const Leader: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData.role === "admin";
  const leader: IUser = company?.leader;
  const isLeader = userData._id === company?.leader?._id;

  const handleDeleteLeader = async () => {
    await deleteLeader(company._id);
  };

  return (
    <MainLayout title="Руководитель" mainTitle={`Компания "${company.name}"`}>
      <Tabs tabLinks={companyLinks(company._id)} />
      {!company?.leader ? (
        <>
          <h5>Данные о руководителе компании отстустствуют</h5>
          {isAdmin && (
            <Link href={`/company/${company._id}/addLeader`}>
              <a>
                <Button width={200}>Добавить руководителя</Button>
              </a>
            </Link>
          )}
        </>
      ) : (
        <LeaderInfo
          leader={leader}
          companyId={company._id}
          isAdmin={isAdmin}
          isLeader={isLeader}
          handleDeleteLeader={handleDeleteLeader}
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

export default Leader;
