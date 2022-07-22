import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getDeviceById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/devices/${ctx.query.deviceId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getDeviceById;
