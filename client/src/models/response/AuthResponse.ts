import { IAuthUser } from "../IAuthUser";

export interface AuthResponse {
  message: string;
  authData: IAuthUser;
}
