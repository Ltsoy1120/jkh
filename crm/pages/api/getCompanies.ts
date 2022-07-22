import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getCompanies = async (ctx) => {
  const res = await fetch(`${API_URL}/companies`, getAuthHeaders(ctx));

  return await res.json();
};
export default getCompanies;
