import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getReceptionById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/receptions/${ctx.query.receptionId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getReceptionById;
