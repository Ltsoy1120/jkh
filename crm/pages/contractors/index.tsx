import { NextPage } from "next";
import { useEffect } from "react";
import ContractorsFilter from "../../components/Filters/ContractorsFilter";
import MainLayout from "../../components/MainLayout";
import ContractorsTables from "../../components/Tables/ContractorsTables";
import {
  getContractors,
  getAllContractors,
} from "../../store/actions/contractorActions";
import { useAppDispatch, useAppSelector } from "../../store/hooks";

const AllContractors: NextPage = () => {
  const companyId = useAppSelector((state) => state.users.userData?.company);
  const contractors = useAppSelector(getContractors());
  const isLoading = useAppSelector((state) => state.contractors.isLoading);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getAllContractors());
  }, [dispatch]);

  return (
    <MainLayout
      title="Подрядчики"
      mainTitle="Все подрядчики"
      breadcrumbs="Компания / Подрядчики"
    >
      {!isLoading ? (
        <>
          {contractors?.length ? (
            <>
              <ContractorsFilter />
              <ContractorsTables
                companyId={companyId}
                contractors={contractors}
              />
            </>
          ) : (
            <>
              <h2>Подрядчиков нет</h2>
            </>
          )}
        </>
      ) : (
        <h2>Loading...</h2>
      )}
    </MainLayout>
  );
};
export default AllContractors;
