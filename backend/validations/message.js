export const messageCreateValidation = [
    body("text", "Какая-то оишбка").isString(),
    body("dialogId", "Какая-то оишбка").isNumber(),
    body("userId", "Укажите имя").isNumber(),
]