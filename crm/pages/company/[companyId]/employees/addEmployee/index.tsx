import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../../components/MainLayout";
import Tabs from "../../../../../components/Tabs";
import EmployeeForm from "../../../../../components/Forms/PageForms/EmployeeForm";
import { employeesLinks } from "../../../../../components/Tabs/tabLinks";
import { addEmployee } from "../../../../../store/actions/userActions";
import { useDispatch } from "react-redux";

const AddEmployee: NextPage = () => {
  const companyId = useRouter().query.companyId.toString();

  const dispatch = useDispatch();
  const initEmployee = {
    email: "",
    lastName: "",
    name: "",
    patronymic: "",
    dateOfBirth: null,
    avatar: "",
    phones: [],
    position: "",
    department: "",
    isActive: true,
    company: companyId,
    subordinates: [""],
    typesOfRequests: "",
    nameOfRequests: "",
    sendPassword: true,
  };

  const employeeFormSubmit = async (employeeData: FormData) => {
    await dispatch(addEmployee(companyId, employeeData));
  };

  return (
    <MainLayout title="Личная информация" mainTitle="Сотрудники">
      <Tabs tabLinks={employeesLinks(companyId)} />
      <EmployeeForm
        initEmployee={initEmployee}
        onSubmit={employeeFormSubmit}
        companyId={companyId}
      />
    </MainLayout>
  );
};
export default AddEmployee;
