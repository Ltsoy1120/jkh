import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getPropertyById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/properties/${ctx.query.propertyId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getPropertyById;
