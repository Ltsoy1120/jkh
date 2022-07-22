import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getAccountsByCompany = async (ctx) => {
  const res = await fetch(
    `${API_URL}/accounts/${ctx.params.companyId}/byCompany`,
    getAuthHeaders(ctx)
  );
  console.log("res", res);

  return await res.json();
};
export default getAccountsByCompany;
