import type { NextPage } from "next";
import MainLayout from "../../components/MainLayout";
import { createCompany } from "../../store/actions/companyActions";
import CompanyForm from "../../components/Forms/PageForms/CompanyForm";

const AddCompany: NextPage = () => {
  const initCompany = {
    name: "",
    address: "",
    timezone: "",
    phones: [],
    domen: "",
    website: "",
    logo: "",
  };
  const addCompanySubmit = async (companyData: FormData) => {
    await createCompany(companyData);
  };
  return (
    <MainLayout
      title="Добавление компании"
      mainTitle="Добавление новой компании"
    >
      <CompanyForm initCompany={initCompany} onSubmit={addCompanySubmit} />
    </MainLayout>
  );
};

export default AddCompany;
