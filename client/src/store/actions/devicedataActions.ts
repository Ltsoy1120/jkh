import Router from "next/router";
import { DeviceData } from "../../../pages/newdevicedata/[id]";
import { DeviceDataFilterData } from "../../pages/devicehistory/devicehistory-filter/devicehistory-filter";
import devicedataService from "../../services/devicedata.service";
import {
  deviceDataFetching,
  deviceDataFetchingError,
  deviceDataFetchingSuccess
} from "../slices/devicedataSlice";
import { AppDispatch, AppState } from "../store";

export const createDeviceData = async (data: DeviceData) => {
  try {
    await devicedataService.create(data);
    Router.push(`/devicehistory/${data.device}`);
  } catch (error) {}
};
export const getMyDeviceData = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(deviceDataFetching());
    const response = await devicedataService.getMyDeviceData();
    dispatch(deviceDataFetchingSuccess(response.data));
  } catch (error) {
    dispatch(deviceDataFetchingError((error as Error).message));
  }
};
export const getFilteredDeviceData =
  (filterData: DeviceDataFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deviceDataFetching());
      const response = await devicedataService.getFilteredDeviceData(
        filterData
      );
      dispatch(deviceDataFetchingSuccess(response.data));
    } catch (error) {
      dispatch(deviceDataFetchingError((error as Error).message));
    }
  };
export const getDeviceDataByDevice =
  (id: string) => async (dispatch: AppDispatch) => {
    try {
      dispatch(deviceDataFetching());
      const response = await devicedataService.getDeviceDataByDevice(id);
      dispatch(deviceDataFetchingSuccess(response.data));
    } catch (error) {
      dispatch(deviceDataFetchingError((error as Error).message));
    }
  };
export const getDeviceData = () => (state: AppState) =>
  state.deviceData.deviceData;
