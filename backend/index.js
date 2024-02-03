import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import { registerValidation, loginValidation } from "./validations/index.js";
import { checkAuth, handleValidationErrors } from "./utils/index.js";
import { register, login, getMe,createMessage } from "./controllers/index.js";


mongoose
  .connect("mongodb://127.0.0.1:27017/")
  .then(() => console.log("DB Ok"))
  .catch((err) => console.warn("DB Errore", err));

const app = express();
app.use(express.json());
app.use(cors());

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

// app.get("/messages", MessageController.getAll);
// app.get("/messages", MessageController.getOne);
app.post("/messages", createMessage);
// app.delete("/messages", MessageController.remove);
// app.patch("/messages", MessageController.update);

app.listen(5555, (err) => {
  if (err) {
    console.log(err);
  }
  console.log("server OK");
});
