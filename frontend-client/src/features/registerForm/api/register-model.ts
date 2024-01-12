export class RegisterModel {
  email: string;
  password: string;
  userName: string;
  userSurname: string;

  constructor(
    email: string,
    password: string,
    userName: string,
    userSurname: string
  ) {
    this.email = email;
    this.password = password;
    this.userName = userName;
    this.userSurname = userSurname;
  }
}
