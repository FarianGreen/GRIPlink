import { _baseUrl } from "../../../shared/constants/baseUrl";
import { RegisterModel } from "./register-model";

export type TRegisterType = {
  email: string;
  password: string;
  userName: string;
  userSurname: string;
};

export async function registerNewUser({
  email,
  password,
  userName,
  userSurname,
}: TRegisterType) {
  return fetch(`${_baseUrl}auth/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(
      new RegisterModel(email, password, userName, userSurname)
    ),
  });
}
