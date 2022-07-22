import { AxiosResponse } from "axios";
import { PassportOfficeFilterData } from "../components/Filters/ControlObjects/PassportOfficeFilter";
import { IProperty } from "../models/IProperty";
import { ISubject, SubjectData } from "../models/ISubject";
import { SubjectResponse } from "../models/response/SubjectResponse";
import http from "./http.service";

const subjectService = {
  createSubject: async (
    subjectData: SubjectData
  ): Promise<AxiosResponse<SubjectResponse>> => {
    return await http.post<SubjectResponse>("/subjects", subjectData);
  },
  editSubject: async (
    subjectId: string,
    subjectData: SubjectData
  ): Promise<AxiosResponse<ISubject>> => {
    return await http.put<ISubject>(
      `/subjects/${subjectId}/editSubject`,
      subjectData
    );
  },
  deleteSubject: async (
    subjectId: string
  ): Promise<AxiosResponse<ISubject>> => {
    return await http.delete<ISubject>(`/subjects/${subjectId}`);
  },
  addProperty: async (
    subjectId: string,
    propertyData: FormData
  ): Promise<AxiosResponse<SubjectResponse>> => {
    return await http.put<SubjectResponse>(
      `subjects/${subjectId}/addProperty`,
      propertyData
    );
  },
  editProperty: async (
    propertyId: string,
    propertyData: FormData
  ): Promise<AxiosResponse<IProperty>> => {
    return await http.put<IProperty>(
      `properties/${propertyId}/editProperty`,
      propertyData
    );
  },
  deleteProperty: async (subjectId: string, propertyId: string) => {
    return await http.delete<SubjectResponse>(
      `/subjects/${subjectId}/deleteProperty/${propertyId}`
    );
  },
  addRegister: async (
    subjectId: string,
    registerData: FormData
  ): Promise<AxiosResponse<SubjectResponse>> => {
    return await http.put<SubjectResponse>(
      `subjects/${subjectId}/addRegister`,
      registerData
    );
  },
  editRegister: async (
    subjectId: string,
    registerData: FormData
  ): Promise<AxiosResponse<SubjectResponse>> => {
    return await http.put<SubjectResponse>(
      `subjects/${subjectId}/editRegister`,
      registerData
    );
  },
  getSubjectsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<ISubject[]>> => {
    return await http.get<ISubject[]>(`/subjects/byCompany/${companyId}`);
  },
  getFilteredSubjects: async (
    filterData: PassportOfficeFilterData
  ): Promise<AxiosResponse<ISubject[]>> => {
    return await http.post<ISubject[]>("/subjects/filter", filterData);
  },
};
export default subjectService;
