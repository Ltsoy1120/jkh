import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getAuthUser = async (ctx) => {
  const res = await fetch(`${API_URL}/users/me`, getAuthHeaders(ctx));
  return await res.json();
};
export default getAuthUser;
