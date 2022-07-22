import { IUser } from "./IUser";

export interface IAuthUser {
  accessToken: string;
  refreshToken: string;
  user: IUser;
}
