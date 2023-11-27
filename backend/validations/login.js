import { body } from "express-validator";

export const loginValidation = [
  body('email','Не верный формат почты').isEmail(),
  body('password','Пароль должен быть больше 6 символов').isLength({ min: 6 }),
];