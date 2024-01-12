import { body } from "express-validator";

export const loginValidation = [
  body("email", "Не верный формат почты").isEmail(),
  body("password", "Неверный логин или пароль").isLength({ min: 6 }),
];
