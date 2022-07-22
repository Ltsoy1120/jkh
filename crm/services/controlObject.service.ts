import { AxiosResponse } from "axios";
import http from "./http.service";
import {
  ApartmentData,
  EntranceData,
  HouseData,
  IApartment,
  IEntrance,
  IHouse,
} from "../models/IHouse";
import { HousesFilterData } from "../components/Filters/ControlObjects/HousesFilter";
import { EntrancesFilterData } from "../components/Filters/ControlObjects/EntrancesFilter";
import {
  AccountResponse,
  ApartmentResponse,
  ContractResponse,
  EntranceResponse,
  HouseResponse,
} from "../models/response/ControlObjectResponse";
import { ApartmentsFilterData } from "../components/Filters/ControlObjects/ApartmentsFilter";
import { IContract } from "../models/IContract";
import { ContractsFilterData } from "../components/Filters/ControlObjects/ContractsFilter";
import {
  AccountClosingData,
  IAccount,
  IAccountLog,
  OwnerData,
  PayerData,
} from "../models/IAccount";
import { AccountsFilterData } from "../components/Filters/ControlObjects/AccountsFilter";
import { DeviceResponse } from "../models/response/DeviceResponse";
import { DeviceDataResponse } from "../models/response/DeviceDataResponse";
import { TypeDeviceData } from "../models/IDeviceData";
import { IDevice } from "../models/IDevice";
import { DevicesFilterData } from "../components/Filters/ControlObjects/DevicesFilter";
import { IProperty } from "../models/IProperty";

const controlObjectService = {
  // houses
  createHouse: async (
    houseData: HouseData
  ): Promise<AxiosResponse<HouseResponse>> => {
    return await http.post<HouseResponse>("/houses", houseData);
  },
  editHouse: async (
    houseId: string,
    houseData: FormData
  ): Promise<AxiosResponse<HouseResponse>> => {
    return await http.put<HouseResponse>(`/houses/${houseId}`, houseData);
  },
  deleteHouse: async (
    houseId: string
  ): Promise<AxiosResponse<HouseResponse>> => {
    return await http.delete<HouseResponse>(`/houses/${houseId}`);
  },
  getFilteredHouses: async (
    filterData: HousesFilterData
  ): Promise<AxiosResponse<IHouse[]>> => {
    return await http.post<IHouse[]>("/houses/filter", filterData);
  },
  getHousesByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IHouse[]>> => {
    const data = await http.get<IHouse[]>(`/houses/${companyId}/byCompany`);
    return data;
  },
  getAllHouses: async (): Promise<AxiosResponse<IHouse[]>> => {
    const data = await http.get<IHouse[]>(`/houses`);
    return data;
  },

  // entrances
  addEntrance: async (
    entranceData: EntranceData
  ): Promise<AxiosResponse<EntranceResponse>> => {
    return await http.post<EntranceResponse>(`/entrances`, entranceData);
  },
  editEntrance: async (
    entranceId: string,
    entranceData: EntranceData
  ): Promise<AxiosResponse<EntranceResponse>> => {
    return await http.put<EntranceResponse>(
      `/entrances/${entranceId}`,
      entranceData
    );
  },
  deleteEntrance: async (
    entranceId: string
  ): Promise<AxiosResponse<EntranceResponse>> => {
    return await http.delete<EntranceResponse>(`/entrances/${entranceId}`);
  },
  getEntrancesByHouse: async (
    houseId: string
  ): Promise<AxiosResponse<IEntrance[]>> => {
    const data = await http.get<IEntrance[]>(`/entrances/${houseId}/byHouse`);
    return data;
  },
  getFilteredEntrances: async (
    filterData: EntrancesFilterData
  ): Promise<AxiosResponse<IEntrance[]>> => {
    return await http.post<IEntrance[]>(`/entrances/filter`, filterData);
  },

  // apartments
  addApartment: async (
    apartmentData: ApartmentData
  ): Promise<AxiosResponse<ApartmentResponse>> => {
    return await http.post<ApartmentResponse>(`/apartments`, apartmentData);
  },
  editApartment: async (
    apartmentId: string,
    apartmentData: ApartmentData
  ): Promise<AxiosResponse<ApartmentResponse>> => {
    return await http.put<ApartmentResponse>(
      `/apartments/${apartmentId}`,
      apartmentData
    );
  },
  deleteApartment: async (
    apartmentId: string
  ): Promise<AxiosResponse<ApartmentResponse>> => {
    return await http.delete<ApartmentResponse>(`/apartments/${apartmentId}`);
  },
  getApartmentsByHouse: async (
    houseId: string
  ): Promise<AxiosResponse<IApartment[]>> => {
    const data = await http.get<IApartment[]>(`/apartments/${houseId}/byHouse`);
    return data;
  },
  getFilteredApartments: async (
    filterData: ApartmentsFilterData
  ): Promise<AxiosResponse<IApartment[]>> => {
    return await http.post<IApartment[]>("/apartments/filter", filterData);
  },

  // contracts
  addContract: async (
    contractData: FormData
  ): Promise<AxiosResponse<ContractResponse>> => {
    return await http.post<ContractResponse>(`/contracts`, contractData);
  },
  editContract: async (
    contractId: string,
    contractData: FormData
  ): Promise<AxiosResponse<ContractResponse>> => {
    return await http.put<ContractResponse>(
      `/contracts/${contractId}`,
      contractData
    );
  },
  deleteContract: async (
    contractId: string
  ): Promise<AxiosResponse<ContractResponse>> => {
    return await http.delete<ContractResponse>(`/contracts/${contractId}`);
  },
  getContractsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IContract[]>> => {
    const data = await http.get<IContract[]>(
      `/contracts/${companyId}/byCompany`
    );
    return data;
  },
  getFilteredContracts: async (
    filterData: ContractsFilterData
  ): Promise<AxiosResponse<IContract[]>> => {
    return await http.post<IContract[]>("/contracts/filter", filterData);
  },

  // accounts
  addAccount: async (
    accountData: FormData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.post<AccountResponse>(`/accounts`, accountData);
  },
  editAccount: async (
    accountId: string,
    accountData: FormData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.put<AccountResponse>(
      `/accounts/${accountId}`,
      accountData
    );
  },
  closeAccount: async (
    accountId: string,
    closingData: AccountClosingData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.put<AccountResponse>(
      `/accounts/${accountId}/closeAccount`,
      closingData
    );
  },
  addPayer: async (
    accountId: string,
    payerData: PayerData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.put<AccountResponse>(
      `/accounts/${accountId}/addPayer`,
      payerData
    );
  },
  editPayer: async (
    payerId: string,
    payerData: PayerData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.put<AccountResponse>(
      `/users/${payerId}/editUser`,
      payerData
    );
  },
  addOwner: async (
    accountId: string,
    ownerData: OwnerData
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.put<AccountResponse>(
      `/accounts/${accountId}/addOwner`,
      ownerData
    );
  },
  addDevice: async (
    accountId: string,
    deviceData: FormData
  ): Promise<AxiosResponse<AccountResponse>> => {
    console.log("deviceData", deviceData);

    return await http.put<AccountResponse>(
      `/accounts/${accountId}/addDevice`,
      deviceData
    );
  },
  editDevice: async (
    deviceId: string,
    deviceData: FormData
  ): Promise<AxiosResponse<DeviceResponse>> => {
    return await http.put<DeviceResponse>(`/devices/${deviceId}`, deviceData);
  },
  deleteAccount: async (
    accountId: string
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.delete<AccountResponse>(`/accounts/${accountId}`);
  },
  deleteDevice: async (
    deviceId: string,
    accountId: string
  ): Promise<AxiosResponse<AccountResponse>> => {
    return await http.delete<AccountResponse>(
      `/accounts/${accountId}/deleteDevice/${deviceId}`
    );
  },
  getAccountsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IAccount[]>> => {
    const data = await http.get<IAccount[]>(`/accounts/${companyId}/byCompany`);
    return data;
  },
  getFilteredAccounts: async (
    filterData: AccountsFilterData
  ): Promise<AxiosResponse<IAccount[]>> => {
    return await http.post<IAccount[]>("/accounts/filter", filterData);
  },

  //devices
  getDevicesByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IDevice[]>> => {
    const data = await http.get<IDevice[]>(`/devices/${companyId}/byCompany`);
    return data;
  },
  getFilteredDevices: async (
    filterData: DevicesFilterData
  ): Promise<AxiosResponse<IDevice[]>> => {
    return await http.post<IDevice[]>("/devices/filter", filterData);
  },

  // devicedata
  addDeviceData: async (
    deviceData: TypeDeviceData
  ): Promise<AxiosResponse<DeviceDataResponse>> => {
    return await http.post<DeviceDataResponse>(`/devicedata`, deviceData);
  },

  // acccountlogs
  getAccountLogsByAccount: async (
    accountId: string
  ): Promise<AxiosResponse<IAccountLog[]>> => {
    const data = await http.get<IAccountLog[]>(
      `/acccountlogs/${accountId}/byAccount`
    );
    return data;
  },

  //properties
  getPropertiesByAccount: async (
    accountId: string
  ): Promise<AxiosResponse<IProperty[]>> => {
    const data = await http.get<IProperty[]>(
      `/properties/byAccount/${accountId}`
    );
    return data;
  },
};
export default controlObjectService;
