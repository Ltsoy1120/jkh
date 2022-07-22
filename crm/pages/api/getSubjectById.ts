import { API_URL } from "../../config";
import getAuthHeaders from "./getAuthHeaders";

const getSubjectById = async (ctx) => {
  const res = await fetch(
    `${API_URL}/subjects/${ctx.query.subjectId}`,
    getAuthHeaders(ctx)
  );
  return await res.json();
};
export default getSubjectById;
