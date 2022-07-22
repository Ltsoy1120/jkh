import { IAccount } from "../IAccount";
import { IContract } from "../IContract";
import { IApartment, IEntrance, IHouse } from "../IHouse";

export interface HouseResponse {
  status?: number;
  message: string;
  house: IHouse;
}

export interface EntranceResponse {
  status?: number;
  message: string;
  entrance: IEntrance;
}

export interface ApartmentResponse {
  status?: number;
  message: string;
  entrance: IApartment;
}

export interface ContractResponse {
  status?: number;
  message: string;
  entrance: IContract;
}

export interface AccountResponse {
  status?: number;
  message: string;
  entrance: IAccount;
}
