import { destroyCookie, setCookie } from "nookies";
import { IAuthUser } from "../models/IAuthUser";

export const setTokens = ({ accessToken, refreshToken }: IAuthUser) => {
  removeAuthData();
  setCookie(null, "accessToken", accessToken, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });
  setCookie(null, "refreshToken", refreshToken, {
    maxAge: 30 * 24 * 60 * 60,
    path: "/"
  });
};

export const removeAuthData = () => {
  destroyCookie(null, "accessToken");
  destroyCookie(null, "refreshToken");
};

const cookieService = {
  setTokens,
  removeAuthData
};
export default cookieService;
