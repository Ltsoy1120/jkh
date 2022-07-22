import Router from "next/router";
import { AccountsFilterData } from "../../components/Filters/ControlObjects/AccountsFilter";
import { ApartmentsFilterData } from "../../components/Filters/ControlObjects/ApartmentsFilter";
import { ContractsFilterData } from "../../components/Filters/ControlObjects/ContractsFilter";
import { DevicesFilterData } from "../../components/Filters/ControlObjects/DevicesFilter";
import { EntrancesFilterData } from "../../components/Filters/ControlObjects/EntrancesFilter";
import { HousesFilterData } from "../../components/Filters/ControlObjects/HousesFilter";
import {
  AccountClosingData,
  OwnerData,
  PayerData,
} from "../../models/IAccount";
import { TypeDeviceData } from "../../models/IDeviceData";
import { ApartmentData, EntranceData, HouseData } from "../../models/IHouse";
import controlObjectService from "../../services/controlObject.service";
import {
  controlObjectsFetching,
  housesFetchingSuccess,
  entrancesFetchingSuccess,
  apartmentsFetchingSuccess,
  contractsFetchingSuccess,
  accountsFetchingSuccess,
  controlObjectsError,
  accountLogsFetchingSuccess,
  devicesFetchingSuccess,
  propertiesFetchingSuccess,
} from "../slices/controlObjectSlice";
import { AppDispatch, AppState } from "../store";

// houses
export const createHouse = async (companyId: string, houseData: HouseData) => {
  try {
    await controlObjectService.createHouse(houseData);
    Router.push(`/company/${companyId}/controlObjects/houses`);
  } catch (error) {}
};
export const editHouse = async (
  companyId: string,
  houseId: string,
  houseData: FormData
) => {
  try {
    await controlObjectService.editHouse(houseId, houseData);
    Router.push(`/company/${companyId}/controlObjects/houses`);
  } catch (error) {}
};
export const deleteHouse = async (companyId: string, houseId: string) => {
  try {
    await controlObjectService.deleteHouse(houseId);
    Router.push(`/company/${companyId}/controlObjects/houses`);
  } catch (error) {}
};
export const getFilteredHouses =
  (filterData: HousesFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredHouses(filterData);
      dispatch(housesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getHousesByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getHousesByCompany(companyId);
      dispatch(housesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getAllHouses = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(controlObjectsFetching());
    const response = await controlObjectService.getAllHouses();
    dispatch(housesFetchingSuccess(response.data));
  } catch (error) {
    dispatch(controlObjectsError((error as Error).message));
  }
};
export const getHouses = () => (state: AppState) => state.controlObjects.houses;

// entrances
export const addEntrance = async (
  houseId: string,
  entranceData: EntranceData
) => {
  try {
    await controlObjectService.addEntrance(entranceData);
    Router.push(`/controlObjects/houses/${houseId}/entrances`);
  } catch (error) {}
};
export const editEntrance = async (
  houseId: string,
  entranceId: string,
  entranceData: EntranceData
) => {
  try {
    await controlObjectService.editEntrance(entranceId, entranceData);
    Router.push(`/controlObjects/houses/${houseId}/entrances`);
  } catch (error) {}
};
export const deleteEntrance = async (entranceId: string, houseId: string) => {
  try {
    await controlObjectService.deleteEntrance(entranceId);
    Router.push(`/controlObjects/houses/${houseId}/entrances`);
  } catch (error) {}
};
export const getEntrancesByHouse =
  (houseId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getEntrancesByHouse(houseId);
      dispatch(entrancesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getFilteredEntrances =
  (filterData: EntrancesFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredEntrances(
        filterData
      );
      dispatch(entrancesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getEntrances = () => (state: AppState) =>
  state.controlObjects.entrances;

// apartments
export const addApartment = async (
  houseId: string,
  apartmentData: ApartmentData
) => {
  try {
    await controlObjectService.addApartment(apartmentData);
    Router.push(`/controlObjects/houses/${houseId}/apartments`);
  } catch (error) {}
};
export const editApartment = async (
  houseId: string,
  apartmentId: string,
  apartmentData: ApartmentData
) => {
  try {
    await controlObjectService.editApartment(apartmentId, apartmentData);
    Router.push(`/controlObjects/houses/${houseId}/apartments`);
  } catch (error) {}
};
export const deleteApartment = async (apartmentId: string, houseId: string) => {
  try {
    await controlObjectService.deleteApartment(apartmentId);
    Router.push(`/controlObjects/houses/${houseId}/apartments`);
  } catch (error) {}
};
export const getApartmentsByHouse =
  (houseId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getApartmentsByHouse(houseId);
      dispatch(apartmentsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getFilteredApartments =
  (filterData: ApartmentsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredApartments(
        filterData
      );
      dispatch(apartmentsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getApartments = () => (state: AppState) =>
  state.controlObjects.apartments;

// contracts
export const addContract = async (
  companyId: string,
  contractData: FormData
) => {
  try {
    await controlObjectService.addContract(contractData);
    Router.push(`/company/${companyId}/controlObjects/contracts`);
  } catch (error) {}
};
export const editContract = async (
  companyId: string,
  contractId: string,
  contractData: FormData
) => {
  try {
    await controlObjectService.editContract(contractId, contractData);
    Router.push(`/company/${companyId}/controlObjects/contracts`);
  } catch (error) {}
};
export const deleteContract = async (contractId: string, companyId: string) => {
  try {
    await controlObjectService.deleteContract(contractId);
    Router.push(`/company/${companyId}/controlObjects/contracts`);
  } catch (error) {}
};
export const getContractsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getContractsByCompany(
        companyId
      );
      dispatch(contractsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getFilteredContracts =
  (filterData: ContractsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredContracts(
        filterData
      );
      dispatch(contractsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getContracts = () => (state: AppState) =>
  state.controlObjects.contracts;

// accounts
export const addAccount = async (companyId: string, accountData: FormData) => {
  try {
    await controlObjectService.addAccount(accountData);
    Router.push(`/company/${companyId}/controlObjects/accounts`);
  } catch (error) {}
};
export const editAccount = async (
  companyId: string,
  accountId: string,
  accountData: FormData
) => {
  try {
    await controlObjectService.editAccount(accountId, accountData);
    Router.push(`/company/${companyId}/controlObjects/accounts`);
  } catch (error) {}
};
export const closeAccount = async (
  accountId: string,
  closingData: AccountClosingData
) => {
  try {
    await controlObjectService.closeAccount(accountId, closingData);
    Router.push(`/controlObjects/accounts/${accountId}/editAccount`);
  } catch (error) {}
};
export const addPayer = async (accountId: string, payerData: PayerData) => {
  try {
    await controlObjectService.addPayer(accountId, payerData);
    Router.push(`/controlObjects/accounts/${accountId}/payer`);
  } catch (error) {}
};
export const editPayer = async (
  accountId: string,
  payerId: string,
  payerData: PayerData
) => {
  try {
    await controlObjectService.editPayer(payerId, payerData);
    Router.push(`/controlObjects/accounts/${accountId}/payer`);
  } catch (error) {}
};
export const addOwner = async (accountId: string, ownerData: OwnerData) => {
  try {
    await controlObjectService.addOwner(accountId, ownerData);
    Router.push(`/controlObjects/accounts/${accountId}/owners`);
  } catch (error) {}
};
export const addDevice =
  (accountId: string, deviceData: FormData) =>
  async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const { data } = await controlObjectService.addDevice(
        accountId,
        deviceData
      );
      console.log("data", data);

      if (data.status >= 400) {
        throw new Error(data.message);
      }
      Router.push(`/controlObjects/accounts/${accountId}/devices`);
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const editDevice = async (
  accountId: string,
  deviceId: string,
  deviceData: FormData
) => {
  try {
    await controlObjectService.editDevice(deviceId, deviceData);
    Router.push(`/controlObjects/accounts/${accountId}/devices`);
  } catch (error) {}
};
export const deleteAccount = async (accountId: string, companyId: string) => {
  try {
    await controlObjectService.deleteAccount(accountId);
    Router.push(`/company/${companyId}/controlObjects/accounts`);
  } catch (error) {}
};
export const deleteDevice = async (deviceId: string, accountId: string) => {
  try {
    await controlObjectService.deleteDevice(deviceId, accountId);
    Router.push(`/controlObjects/accounts/${accountId}/devices`);
  } catch (error) {}
};
export const getAccountsByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getAccountsByCompany(
        companyId
      );
      dispatch(accountsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getFilteredAccounts =
  (filterData: AccountsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredAccounts(
        filterData
      );
      dispatch(accountsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getAccounts = () => (state: AppState) =>
  state.controlObjects.accounts;

// devices
export const addDeviceData = async (
  accountId: string,
  deviceData: TypeDeviceData
) => {
  try {
    await controlObjectService.addDeviceData(deviceData);
    Router.push(`/controlObjects/accounts/${accountId}/devices`);
  } catch (error) {}
};
export const getDevicesByCompany =
  (companyId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getDevicesByCompany(
        companyId
      );
      dispatch(devicesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getFilteredDevices =
  (filterData: DevicesFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getFilteredDevices(
        filterData
      );
      dispatch(devicesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getDevices = () => (state: AppState) =>
  state.controlObjects.devices;

// history
export const getAccountLogsByAccount =
  (accountId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getAccountLogsByAccount(
        accountId
      );
      dispatch(accountLogsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getAccountLogs = () => (state: AppState) =>
  state.controlObjects.accountLogs;

// properties
export const getPropertiesByAccount =
  (accountId: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(controlObjectsFetching());
      const response = await controlObjectService.getPropertiesByAccount(
        accountId
      );
      dispatch(propertiesFetchingSuccess(response.data));
    } catch (error) {
      dispatch(controlObjectsError((error as Error).message));
    }
  };
export const getProperties = () => (state: AppState) =>
  state.controlObjects.properties;

export const getError = () => (state: AppState) => state.controlObjects.error;
