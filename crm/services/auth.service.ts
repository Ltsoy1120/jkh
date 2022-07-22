import axios, { AxiosResponse } from "axios";
import { parseCookies } from "nookies";
import { User } from "../pages/register";
import { API_URL } from "../config";
import { AuthResponse } from "../models/response/AuthResponse";
import http from "./http.service";

const authService = {
  register: async (userData: User): Promise<AxiosResponse<AuthResponse>> => {
    return await http.post<AuthResponse>("/register", userData);
  },
  login: async (
    email: string,
    password: string
  ): Promise<AxiosResponse<AuthResponse>> => {
    return await http.post<AuthResponse>("/login", { email, password });
  },
  logout: async (): Promise<void> => {
    // const { refreshToken } = parseCookies();
    // console.log("refreshToken", refreshToken);
    // return await http.get("/logout");
    return await http.get("/logout", {
      withCredentials: true,
      // headers: {
      //   Cookie: refreshToken
      // }
    });
  },
  refresh: async () => {
    return await axios.get<AuthResponse>(`${API_URL}/refresh`, {
      withCredentials: true,
    });
  },
};
export default authService;
