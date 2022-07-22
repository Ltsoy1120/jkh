import { AxiosResponse } from "axios";
import { EmployeesFilterData } from "../components/Filters/EmployeesFilter";
import { IUser } from "../models/IUser";
import { UserResponse } from "../models/response/UserResponse";
import http from "./http.service";

const userService = {
  getUsers: async (): Promise<AxiosResponse<IUser[]>> => {
    return http.get<IUser[]>("/users");
  },
  getMe: async (accessToken: string) => {
    const { data } = await http.get<IUser>("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return data;
  },
  getUserById: async (userId: string) => {
    return await http.get<IUser>(`/users/${userId}`);
  },
  addEmployee: async (
    employeeData: FormData
  ): Promise<AxiosResponse<UserResponse>> => {
    return await http.post<UserResponse>(`/users/addEmployee`, employeeData);
  },
  editEmployee: async (
    employeeId: string,
    employeeData: FormData
  ): Promise<AxiosResponse<IUser>> => {
    return await http.put<IUser>(
      `/users/${employeeId}/editEmployee`,
      employeeData
    );
  },
  deleteEmployee: async (employeeId: string) => {
    return await http.delete<IUser>(`/users/${employeeId}`);
  },
  getFilteredEmployees: async (
    filterData: EmployeesFilterData
  ): Promise<AxiosResponse<IUser[]>> => {
    return await http.post<IUser[]>("/users/employees/filter", filterData);
  },
  getEmployeesByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IUser[]>> => {
    console.log("companyId///", companyId);

    const data = await http.get<IUser[]>(`/users/employees/${companyId}`);
    return data;
  },
};
export default userService;
