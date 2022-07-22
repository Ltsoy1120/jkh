import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getPropertyByAccount = async (ctx) => {
  const res = await fetch(
    `${API_URL}/properties/byAccount/${ctx.params.accountId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getPropertyByAccount;
