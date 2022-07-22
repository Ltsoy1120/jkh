import { AxiosResponse } from "axios";
import { IUser } from "../models/IUser";
import http from "./http.service";

const userService = {
  getUsers: async (): Promise<AxiosResponse<IUser[]>> => {
    return http.get<IUser[]>("/users");
  },
  getMe: async (accessToken: string) => {
    const { data } = await http.get<IUser>("/users/me", {
      headers: {
        Authorization: `Bearer ${accessToken}`
      }
    });
    return data;
  }
};
export default userService;
