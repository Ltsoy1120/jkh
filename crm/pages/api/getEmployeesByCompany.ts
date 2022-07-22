import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getEmployeesByCompany = async (ctx) => {
  const res = await fetch(
    `${API_URL}/users/employees/${ctx.params.id}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getEmployeesByCompany;
