export interface IContract {
  _id: string;
  number: string;
  status: string;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  controlObjects: string[];
  scans: string[];
  company: string;
}

export type ContractData = {
  number: string;
  status: string;
  name: string;
  startDate: Date | null;
  endDate: Date | null;
  controlObjects: string[];
  scans: string[];
  company: string;
};
