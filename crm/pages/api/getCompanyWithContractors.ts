import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getCompanyWithContractors = async (ctx) => {
  const res = await fetch(
    `${API_URL}/company/${ctx.params.companyId}/contractors`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getCompanyWithContractors;
