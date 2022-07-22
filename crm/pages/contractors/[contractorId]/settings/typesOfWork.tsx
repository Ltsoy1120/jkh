import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../../../components/MainLayout";
import Tabs from "../../../../components/Tabs";
import { wrapper } from "../../../../store/store";
import { settingsContractorLinks } from "../../../../components/Tabs/tabLinks";
import getContractorById from "../../../api/getContractorById";
import { IContractor } from "../../../../models/IContractor";
import Button from "../../../../components/Buttons/Button";
import TypesOfWorkForm from "../../../../components/Forms/PageForms/ContractorForm/TypesOfWorkForm";
import { editTypesOfWork } from "../../../../store/actions/contractorActions";
import { useAppSelector } from "../../../../store/hooks";

interface TypesOfWorkSettingsProps {
  contractor: IContractor;
}

const TypesOfWorkSettings: NextPage<TypesOfWorkSettingsProps> = ({
  contractor,
}) => {
  const companyId = useRouter().query.companyId?.toString();
  const contractorId = useRouter().query.contractorId?.toString();
  const initTypesOfWork = contractor?.typesOfWork;
  const editTypesOfWorkSubmit = async (typesOfWorkData: string[]) => {
    await editTypesOfWork(companyId, contractor._id, typesOfWorkData);
  };

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Настройка профиля подрядчика "${contractor.contractorName}"`}
    >
      <Tabs tabLinks={settingsContractorLinks(companyId, contractor._id)} />
      {!initTypesOfWork.length ? (
        <>
          <h5>Данные о видах работ подрядчика отстустствуют</h5>
          <Link
            href={`/company/${companyId}/contractors/${contractorId}/addTypesOfWork`}
          >
            <a>
              <Button width={200}>Добавить виды работ</Button>
            </a>
          </Link>
        </>
      ) : (
        <TypesOfWorkForm
          initTypesOfWork={initTypesOfWork}
          onSubmit={editTypesOfWorkSubmit}
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

export default TypesOfWorkSettings;
