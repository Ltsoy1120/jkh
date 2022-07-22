import MainLayout from "../../../../components/MainLayout";
import { GetServerSideProps, NextPage } from "next";
import AbsolutButton from "../../../../components/Buttons/AbsolutButton";
import PassportOfficeTable from "../../../../components/Tables/ControlObjects/PassportOfficeTable";
import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../../../../store/hooks";
import { useRouter } from "next/router";
import {
  getSubjects,
  getSubjectsByCompany,
} from "../../../../store/actions/subjectActions";
import Panel from "../../../../components/Panel";
import getAccountsByCompany from "../../../api/getAccountsByCompany";
import { wrapper } from "../../../../store/store";
import PassportOfficeFilter from "../../../../components/Filters/ControlObjects/PassportOfficeFilter";
import { IAccount } from "../../../../models/IAccount";

export interface AccountsProps {
  accounts: IAccount[];
}
const PassportOffice: NextPage<AccountsProps> = ({ accounts }) => {
  console.log("accounts", accounts);

  const companyId = useRouter().query.companyId.toString();
  const isLoading = useAppSelector((state) => state.subjects.isLoading);
  const subjects = useAppSelector(getSubjects());

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getSubjectsByCompany(companyId));
  }, [dispatch]);

  return (
    <MainLayout title="Объекты управления" mainTitle="Субъекты">
      <AbsolutButton
        text="Добавить новый субъект"
        href="/controlObjects/passportOffice/addSubject"
      />
      <Panel>
        <PassportOfficeFilter
          companyId={companyId}
          accounts={accounts}
          subjects={subjects}
        />
      </Panel>
      {!isLoading ? (
        <>
          {subjects.length ? (
            <PassportOfficeTable subjects={subjects} />
          ) : (
            <h2>Субъекты отсутствуют</h2>
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
      const accounts = await getAccountsByCompany(ctx);
      console.log("accounts===", accounts);

      return {
        props: accounts ? { accounts } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default PassportOffice;
