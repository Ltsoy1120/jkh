import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getAppealById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/appeals/${ctx.query.appealId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getAppealById;
