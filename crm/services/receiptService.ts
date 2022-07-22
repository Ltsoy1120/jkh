import { AxiosResponse } from "axios";
import { ReceiptsFilterData } from "../components/Filters/ReceiptsFilter";
import { IReceipt } from "../models/IReceipt";
// import { ReceiptsFilterData } from "../pages/receipts/receipts-filter/receipts-filter";
import http from "./http.service";

const receiptService = {
  getFilteredReceipts: async (
    filterData: ReceiptsFilterData
  ): Promise<AxiosResponse<IReceipt[]>> => {
    return await http.post<IReceipt[]>("/receipts/filter", filterData);
  },
  getReceiptsByCompany: async (
    companyId: string
  ): Promise<AxiosResponse<IReceipt[]>> => {
    const data = await http.get<IReceipt[]>(`/receipts/byCompany/${companyId}`);
    return data;
  },
  getMyReceipts: async (): Promise<AxiosResponse<IReceipt[]>> => {
    const data = await http.get<IReceipt[]>("/receipts/my");
    return data;
  },
  payReceipt: async (id: string): Promise<AxiosResponse<IReceipt>> => {
    return await http.post<IReceipt>(`/receipt/${id}/pay`);
  },
};
export default receiptService;
