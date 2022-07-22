import { IUser } from "../IUser";

export interface UserResponse {
  status?: number;
  message: string;
  user: IUser;
}
