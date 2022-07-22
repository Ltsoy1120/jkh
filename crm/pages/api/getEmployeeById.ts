import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getEmployeeById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/users/${ctx.params.employeeId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getEmployeeById;
