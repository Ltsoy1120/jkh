import { NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../components/MainLayout";
import EmployeeForm from "../../../components/Forms/PageForms/EmployeeForm";
import { addEmployee } from "../../../store/actions/userActions";

const AddEmployee: NextPage = () => {
  const contractorId = useRouter().query.contractorId?.toString();

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
    contractor: contractorId,
    subordinates: [""],
    typesOfRequests: "",
    nameOfRequests: "",
    sendPassword: true,
  };

  const employeeFormSubmit = async (employeeData: FormData) => {
    await addEmployee(contractorId, employeeData);
  };

  return (
    <MainLayout title="Сотрудники" mainTitle="Добавление сотрудника">
      <EmployeeForm initEmployee={initEmployee} onSubmit={employeeFormSubmit} />
    </MainLayout>
  );
};
export default AddEmployee;
