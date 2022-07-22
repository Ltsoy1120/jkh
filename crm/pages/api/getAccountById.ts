import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getAccountById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/accounts/${ctx.query.accountId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getAccountById;
