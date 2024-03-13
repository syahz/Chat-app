/** @format */
import Conversation from "../models/conversation.model.js";
import Message from "../models/message.model.js";

export const sendMassage = async (req, res) => {
  try {
    const { message } = req.body;
    const { id: receiverId } = req.params;
    const senderId = req.user._id;

    let conversation = await Conversation.findOne({
      participans: { $all: [senderId, receiverId] },
    });

    if (!conversation) {
      conversation = await Conversation.create({
        participans: [senderId, receiverId],
      });
    }

    const newMessage = new Message({
      senderId,
      receiverId,
      message,
    });

    if (newMessage) {
      conversation.messages.push(newMessage._id);
    }

    //await conversation.save();
    //await newMessage.save();

    await Promise.all([conversation.save(), newMessage.save()]);

    res.status(201).json(newMessage);
  } catch (error) {
    console.error("error in massage controller :", error.message);
    res.status(500).json({ error: "Failed to send message", error });
  }
};

export const getMessages = async (req, res) => {
  try {
    const { id: userToChatId } = req.params;
    const userId = req.user._id;
    const conversation = await Conversation.findOne({
      participans: { $all: [userId, userToChatId] },
    }).populate("messages");

    if (!conversation) return res.status(200).json([]);

    const messages = conversation.messages;
    res.status(200).json(messages);
  } catch (error) {
    console.error("error in getMessages controller :", error.message);
    res.status(500).json({ error: "Failed to send message", error });
  }
};
