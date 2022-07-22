import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getCompanyById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/company/${ctx.params.companyId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getCompanyById;
