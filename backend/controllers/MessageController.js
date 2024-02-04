import Message from "../models/Message.js";
export const createMessage = async (req, res) => {
  try {
    const doc = new Message({
      text: req.body.text,
      user: req.body.user,
    });
    const message = await doc.save();
    res.json(message);
  } catch (err) {
    res.status(500).json({
      message: "Произошла ошибка",
    });
  }
};
