import deviceService from "../../services/device.service";
import {
  devicesFetching,
  devicesFetchingError,
  devicesFetchingSuccess
} from "../slices/deviceSlice";
import { AppDispatch, AppState } from "../store";

export const getMyDevices = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(devicesFetching());
    const response = await deviceService.getMyDevices();
    dispatch(devicesFetchingSuccess(response.data));
  } catch (error) {
    dispatch(devicesFetchingError((error as Error).message));
  }
};

export const getDevices = () => (state: AppState) => state.devices.devices;
