import axios from "axios";
import { UserType } from "../types/types";

export const instance = axios.create({
  baseURL: "https://social-network.samuraijs.com/api/1.0/",
  withCredentials: true,
  headers: {
    "API-KEY": "c1f0b7d1-dc16-41bd-b130-0fd123149d60",
    //c1f0b7d1-dc16-41bd-b130-0fd123149d60
    //52d41bee-1ff2-442f-88ef-58198d527466
  },
});
export enum ResultCodesEnum {
  Success = 0,
  Error = 1,
}
export enum ResultCodesEnumCaptcha {
  Success = 0,
  Error = 1,
  CapthaIsRequired = 10,
}
export type ResponseType<D = {}, RC = ResultCodesEnum> = {
  data: D;
  resultCode: RC;
  messages: Array<string>;
};

export type GetItemsType = {
  items: Array<UserType>;
  totalCount: number;
  error: string | null;
};
