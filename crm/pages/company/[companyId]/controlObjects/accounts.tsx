import React, { useEffect } from "react";
import MainLayout from "../../../../components/MainLayout/MainLayout";
import { useRouter } from "next/router";
import { NextPage } from "next";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import {
  getAccounts,
  getAccountsByCompany,
} from "../../../../store/actions/controlObjectActions";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import Panel from "../../../../components/Panel";
import AccountsFilter from "../../../../components/Filters/ControlObjects/AccountsFilter";
import AccountsTable from "../../../../components/Tables/ControlObjects/AccountsTable";

const Accounts: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const accounts = useAppSelector(getAccounts());
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAccountsByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Лицевые счета"
      title="Объекты управления"
      mainTitle="Лицевые счета"
    >
      <AbsolutButton
        text="Добавить новый лицевой счет"
        href="/controlObjects/accounts/addAccount"
      />
      {!isLoading ? (
        <>
          {accounts.length ? (
            <>
              <Panel>
                <AccountsFilter
                  accounts={accounts}
                  companyId={companyId}
                  mb={0}
                />
              </Panel>
              <AccountsTable companyId={companyId} accounts={accounts} />
            </>
          ) : (
            <h2>Лицевые счета отсутствуют</h2>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default Accounts;
