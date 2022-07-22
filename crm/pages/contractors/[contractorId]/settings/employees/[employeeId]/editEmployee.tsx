import { GetServerSideProps, NextPage } from "next";
import { useRouter } from "next/router";
import MainLayout from "../../../../../../components/MainLayout";
import Tabs from "../../../../../../components/Tabs";
import EmployeeForm from "../../../../../../components/Forms/PageForms/EmployeeForm";
import { employeesLinks } from "../../../../../../components/Tabs/tabLinks";
import { editEmployee } from "../../../../../../store/actions/userActions";
import { wrapper } from "../../../../../../store/store";
import getEmployeeById from "../../../../../api/getEmployeeById";
import { IUser } from "../../../../../../models/IUser";

interface EditEmployeeProps {
  employee: IUser;
}

const EditEmployee: NextPage<EditEmployeeProps> = ({ employee }) => {
  const companyId = useRouter().query.companyId.toString();
  const initEmployee = employee && {
    email: employee.email,
    lastName: employee.lastName,
    name: employee.name,
    patronymic: employee.patronymic,
    dateOfBirth: employee.dateOfBirth,
    avatar: employee.avatar,
    phones: employee.phones,
    position: employee.position,
    department: employee.department,
    isActive: employee.isActive,
    company: employee.company,
    subordinates: employee.subordinates,
    typesOfRequests: employee.typesOfRequests,
    nameOfRequests: employee.nameOfRequests,
    sendPassword: employee.sendPassword,
  };

  const editEmployeeSubmit = async (employeeData: FormData) => {
    await editEmployee(companyId, employee._id, employeeData);
  };
  //   const editTypesOfWorkSubmit = async (typesOfWorkData: string[]) => {
  //     await editTypesOfWork(companyId, contractor._id, typesOfWorkData);
  //   };
  return (
    <MainLayout title="Личная информация" mainTitle="Редактирование сотрудника">
      <Tabs tabLinks={employeesLinks(companyId)} />
      <EmployeeForm initEmployee={initEmployee} onSubmit={editEmployeeSubmit} />
    </MainLayout>
  );
};

export const getServerSideProps: GetServerSideProps =
  wrapper.getServerSideProps((store) => async (ctx) => {
    try {
      const employee = await getEmployeeById(ctx);
      return {
        props: employee ? { employee } : {},
      };
    } catch (error) {
      console.log(error);
    }
  });

export default EditEmployee;
