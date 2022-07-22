import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getEntranceById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/entrances/${ctx.query.entranceId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getEntranceById;
