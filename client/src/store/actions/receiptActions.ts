import Router from "next/router";
import { ReceiptsFilterData } from "../../pages/receipts/receipts-filter/receipts-filter";
import receiptService from "../../services/receiptService";
import {
  receiptsFetching,
  receiptsFetchingError,
  receiptsFetchingSuccess
} from "../slices/receiptSlice";
import { AppDispatch, AppState } from "../store";

// export const createReceipt = async (formData: any) => {
//   try {
//     await receiptService.create(formData);
//     Router.push("/receipts");
//   } catch (error) {}
// };

export const getFilteredReceipts =
  (filterData: ReceiptsFilterData) => async (dispatch: AppDispatch) => {
    try {
      dispatch(receiptsFetching());
      const response = await receiptService.getFilteredReceipts(filterData);
      dispatch(receiptsFetchingSuccess(response.data));
    } catch (error) {
      dispatch(receiptsFetchingError((error as Error).message));
    }
  };

export const getMyReceipts = () => async (dispatch: AppDispatch) => {
  try {
    dispatch(receiptsFetching());
    const response = await receiptService.getMyReceipts();
    dispatch(receiptsFetchingSuccess(response.data));
  } catch (error) {
    dispatch(receiptsFetchingError((error as Error).message));
  }
};

export const payReceipt = async (id: string) => {
  try {
    await receiptService.payReceipt(id);
    Router.push("/receipts");
  } catch (error) {}
};
export const getReceipts = () => (state: AppState) => state.receipts.receipts;
