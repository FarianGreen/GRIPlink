import mongoose from "mongoose";

const MessageSchema = new mongoose.Schema(
  {
    text: { type: String, require: Boolean },
    dialog: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Dialog",
      require: true,
    },
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", require: true },
    read: {
      type: Boolean,
      default: false,
    },
    attachments: [{ type: mongoose.Schema.Types.ObjectId, ref: "UploadFile" }],
  },
  {
    timestamps: true,
    usePushEach: true,
  }
);
export default mongoose.model("Message", MessageSchema);
