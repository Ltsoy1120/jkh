import MainLayout from "../../../../components/MainLayout/MainLayout";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import { NextPage } from "next";
import { useEffect } from "react";
import ContractsFilter from "../../../../components/Filters/ControlObjects/ContractsFilter";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useRouter } from "next/router";
import Panel from "../../../../components/Panel";
import ContractsTable from "../../../../components/Tables/ControlObjects/ContractsTable";
import {
  getContracts,
  getContractsByCompany,
} from "../../../../store/actions/controlObjectActions";

const Contracts: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.controlObjects.isLoading);
  const contracts = useAppSelector(getContracts());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getContractsByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout
      breadcrumbs="Объекты управления / Договоры / Перечень договоров"
      title="Договоры"
      mainTitle="Договоры"
    >
      <AbsolutButton
        text="Добавить новый договор"
        href="/controlObjects/contracts/addContract"
      />
      {!isLoading ? (
        <>
          {contracts.length ? (
            <>
              <Panel>
                <ContractsFilter
                  companyId={companyId}
                  contracts={contracts}
                  mb={0}
                />
              </Panel>
              <ContractsTable contracts={contracts} companyId={companyId} />
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
export default Contracts;
