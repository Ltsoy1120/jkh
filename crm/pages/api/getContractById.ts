import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getContractById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/contracts/${ctx.query.contractId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getContractById;
