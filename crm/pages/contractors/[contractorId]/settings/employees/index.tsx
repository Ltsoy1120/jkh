import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import Link from "next/link";
import MainLayout from "../../../../../components/MainLayout";
import Tabs from "../../../../../components/Tabs";
import { wrapper } from "../../../../../store/store";
import { settingsContractorLinks } from "../../../../../components/Tabs/tabLinks";
import getContractorById from "../../../../api/getContractorById";
import { IContractor } from "../../../../../models/IContractor";
import Button from "../../../../../components/Buttons/Button";
import { useAppDispatch, useAppSelector } from "../../../../../store/hooks";
import { useEffect } from "react";
import { getEmployeesByContractor } from "../../../../../store/actions/contractorActions";
import EmployeesTables from "../../../../../components/Tables/EmployeesTables";
import AbsolutButton from "../../../../../components/Buttons/AbsolutButton";

interface EmployeesSettingsProps {
  contractor: IContractor;
}

const EmployeesSettings: NextPage<EmployeesSettingsProps> = ({
  contractor,
}) => {
  const isLoading = useAppSelector((state) => state.contractors.isLoading);
  const companyId = useRouter().query.companyId?.toString();
  const contractorId = useRouter().query.contractorId?.toString();
  const employees = useAppSelector((state) => state.contractors.employees);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByContractor(contractorId));
  }, [dispatch]);

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle={`Настройка профиля подрядчика "${contractor.contractorName}"`}
    >
      <Tabs tabLinks={settingsContractorLinks(companyId, contractor._id)} />
      {!isLoading ? (
        <>
          {employees.length ? (
            <>
              <AbsolutButton
                text="Добавить сотрудника"
                href={`/company/${companyId}/contractors/${contractor._id}/addEmployee`}
              />
              <EmployeesTables employees={employees} />
            </>
          ) : (
            <>
              <h5>Данные о сотрудниках подрядчика отстустствуют</h5>
              <Link
                href={`/company/${companyId}/contractors/${contractor._id}/addEmployee`}
              >
                <a>
                  <Button width={200}>Добавить сотрудника</Button>
                </a>
              </Link>
            </>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
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

export default EmployeesSettings;
