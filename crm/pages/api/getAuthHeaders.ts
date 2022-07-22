import { parseCookies } from "nookies";

const getAuthHeaders = (ctx) => {
  const { accessToken } = parseCookies(ctx);
  const authHeaders = {
    headers: {
      Authorization: `Bearer ${accessToken}`,
    },
  };
  return authHeaders;
};
export default getAuthHeaders;
