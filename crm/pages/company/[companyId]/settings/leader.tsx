import { GetServerSideProps, NextPage } from "next";
import Link from "next/link";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import Button from "../../../../components/Buttons/Button";
import LeaderForm from "../../../../components/Forms/PageForms/LeaderForm";
import { useAppSelector } from "../../../../store/hooks";
import { editLeader } from "../../../../store/actions/companyActions";
import { wrapper } from "../../../../store/store";
import { IUser, LeaderData } from "../../../../models/IUser";
import { CompanyProps } from "../../[id]";
import getCompanyById from "../../../api/getCompanyById";
import { settingsCompanyLinks } from "../../../../components/Tabs/tabLinks";

const LeaderSettings: NextPage<CompanyProps> = ({ company }) => {
  const userData = useAppSelector((state) => state.users.userData);
  const isAdmin = userData?.role === "admin";
  const leader: IUser = company?.leader;

  const initLeader = leader && {
    lastName: leader.lastName,
    name: leader.name,
    patronymic: leader.patronymic,
    dateOfBirth: leader.dateOfBirth,
    phones: leader.phones,
    email: leader.email,
    position: leader.position,
    role: leader.role,
    fullnameInParent: leader.fullnameInParent,
    basisForAppointment: leader.basisForAppointment,
  };

  const editLeaderSubmit = async (leaderData: LeaderData) => {
    await editLeader(company._id, leaderData);
  };

  return (
    <MainLayout
      title="Руководители"
      mainTitle={`Настройка профиля компании  "${company?.name}"`}
    >
      <Tabs tabLinks={settingsCompanyLinks(company?._id)} />
      {!leader ? (
        <>
          <h5>Данные о руководителе компании отстустствуют</h5>
          {isAdmin && (
            <Link href={`/company/${company?._id}/addLeader`}>
              <a>
                <Button width={200}>Добавить руководителя</Button>
              </a>
            </Link>
          )}
        </>
      ) : (
        <LeaderForm initLeader={initLeader} onSubmit={editLeaderSubmit} />
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

export default LeaderSettings;
