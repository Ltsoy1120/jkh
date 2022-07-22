import React, { useEffect } from "react";
import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../components/MainLayout";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { getEmployeesByCompany } from "../../../../store/actions/userActions";
import { getEmployees } from "../../../../store/slices/userSlice";

const RegisterOfDocs: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  // const employees = useAppSelector(getEmployees());
  // const dispatch = useAppDispatch();

  // useEffect(() => {
  //   dispatch(getEmployeesByCompany(companyId));
  // }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Компания / Реестр документов"
      title="Реестр документов"
      mainTitle="Реестр документов"
    >
      {/* <AbsolutButton
        text="Добавить сотрудника"
        href={`/company/${companyId}/employees/addEmployee`}
      />
      {employees.length ? (
        <>
          <FilterSubscriber />
        <SubscriberTables />
        </>
      ) : (
        <h2>Сотрудники не найдены</h2>
      )} */}
    </MainLayout>
  );
};

export default RegisterOfDocs;
