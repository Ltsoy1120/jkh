import { IContractor } from "../IContractor";

export interface ContractorResponse {
  status?: number;
  message: string;
  contractor: IContractor;
}
