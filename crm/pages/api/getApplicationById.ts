import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getApplicationById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/applications/${ctx.query.applicationId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getApplicationById;
