import { ICompany } from "../ICompany";

export interface CompanyResponse {
  status?: number;
  message: string;
  company: ICompany;
  newContractorId?: string;
}
