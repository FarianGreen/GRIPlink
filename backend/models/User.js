import mongoose from "mongoose";

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true,
      unique: true,
    },
    passwordHash: {
      type: String,
      required: true,
    },
    userName: {
      type: String,
      required: true,
    },
    userSurname: {
      type: String,
      required: true,
    },
    avatarUrl: String,
    last_seen: Date,
  },
  { timestamps: true }
);
export default mongoose.model("User", UserSchema);
