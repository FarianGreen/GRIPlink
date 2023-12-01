import { body } from "express-validator";

export const registerValidation = [
  body('email','Не верный формат почты').isEmail(),
  body('password','Пароль должен быть больше 6 символов').isLength({ min: 6 }),
  body('userName','Укажите имя').isLength({ min: 3 }),
  body('userSurname','Укажите фамилию').isLength({ min: 3 }),
  body('avatarUrl','Неверная ссылка на аватарку').optional().isURL(),
];
