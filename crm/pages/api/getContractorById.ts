import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getContractorById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/contractors/${ctx.query.contractorId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getContractorById;
