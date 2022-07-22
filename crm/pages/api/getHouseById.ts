import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getHouseById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/houses/${ctx.query.houseId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getHouseById;
