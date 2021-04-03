const Model = require("../models/model");

const messagesModel = new Model("messages");
exports.messagesPage = async (req, res) => {
  try {
    const data = await messagesModel.select("name, message");
    res.status(200).json({ messages: data.rows });
  } catch (err) {
    res.status(200).json({ messages: err.stack });
  }
};
