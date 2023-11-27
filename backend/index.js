import express from "express";
import mongoose from "mongoose";
import { registerValidation, loginValidation } from "./validations/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { register, login, getMe } from "./controllers/UserController.js";

mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => console.log("DB Ok"))
  .catch((err) => console.warn("DB Errore", err));

const app = express();
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Jiu Link");
});

app.post("/auth/login", loginValidation, handleValidationErrors, login);
app.post(
  "/auth/register",
  registerValidation,
  handleValidationErrors,
  register
);
app.get("/auth/me", checkAuth, getMe);

app.listen(5555, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server OK");
});
