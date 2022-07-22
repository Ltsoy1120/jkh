import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../components/MainLayout";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import EmployeesTables from "../../../../components/Tables/EmployeesTables";
import EmployeesFilter from "../../../../components/Filters/EmployeesFilter";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getEmployeesByCompany } from "../../../../store/actions/userActions";
import { getEmployees } from "../../../../store/slices/userSlice";

const Employees: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const employees = useAppSelector(getEmployees());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getEmployeesByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Компания / Сотрудники"
      title="Сотрудники"
      mainTitle="Сотрудники"
    >
      <AbsolutButton
        text="Добавить сотрудника"
        href={`/company/${companyId}/employees/addEmployee`}
      />
      {employees.length ? (
        <>
          <EmployeesFilter employees={employees} companyId={companyId} />
          <EmployeesTables employees={employees} />
        </>
      ) : (
        <h2>Сотрудники не найдены</h2>
      )}
    </MainLayout>
  );
};

export default Employees;
