import { GetServerSideProps, NextPage } from "next";
import { parseCookies } from "nookies";
import MainLayout from "../../../../../components/MainLayout/MainLayout";
import { useAppSelector } from "../../../../../store/hooks";
import {
  editOffice,
  getCompany,
} from "../../../../../store/actions/companyActions";
import { IOffice, OfficeData } from "../../../../../models/IOffice";
import Tabs from "../../../../../components/Tabs";
import OfficeForm from "../../../../../components/Forms/PageForms/OfficeForm";
import { wrapper } from "../../../../../store/store";
import { API_URL } from "../../../../../config";
import { useRouter } from "next/router";
import { settingsCompanyLinks } from "../../../../../components/Tabs/tabLinks";

interface OfficeProps {
  office: IOffice;
}

const OfficeSettings: NextPage<OfficeProps> = ({ office }) => {
  const companyId = useRouter().query.companyId.toString();
  const initOffice = office && {
    name: office.name,
    address: office.address,
    dateOfWork: office.dateOfWork,
    timeOfWork: office.timeOfWork,
    timeOfLunch: office.timeOfLunch,
    phones: office.phones,
    noPreRegistration: office.noPreRegistration,
    schedule: office.schedule,
  };

  console.log("office", office);
  const editOfficeSubmit = async (officeData: OfficeData) => {
    await editOffice(companyId, office._id, officeData);
  };

  return (
    <MainLayout title="Офисы" mainTitle={`Настройка офиса  "${office.name}"`}>
      <Tabs tabLinks={settingsCompanyLinks(companyId)} />
      <OfficeForm initOffice={initOffice} onSubmit={editOfficeSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    const { officeId } = ctx.params;
    const { accessToken } = parseCookies(ctx);
    try {
      const res = await fetch(`${API_URL}/office/${officeId}`, {
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
      const office = await res.json();
      return {
        props: office ? { office } : {},
      };
    } catch (error) {}
  });

export default OfficeSettings;
