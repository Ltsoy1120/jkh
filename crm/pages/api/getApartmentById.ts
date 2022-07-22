import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getApartmentById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/apartments/${ctx.query.apartmentId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getApartmentById;
