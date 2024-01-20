import { _baseUrl } from "../../../shared/constants/baseUrl";
import { LoginModel } from "./loginModel";

export type TloginType = {
  email: string;
  password: string;
  token: string;
  FieldValues: string;
};
export type TLoginState = {
  error: string;
  data: Object;
};

export async function loginUser({ email, password }: TloginType) {
  return fetch(`${_baseUrl}auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(new LoginModel(email, password)),
  });
}
