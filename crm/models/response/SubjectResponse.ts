import { ISubject } from "../ISubject";

export interface SubjectResponse {
  status?: number;
  message: string;
  subject: ISubject;
}
