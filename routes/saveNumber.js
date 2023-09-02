const express = require("express");
const saveRouter = express.Router();
const Contact = require("../models/contact");

saveRouter.post("/api/save", async (req, res) => {
  const { name, number } = req.body;
  try {
    const contact = new Contact({ name, number });
    await contact.save();
    res.status(201).json({ success: "Number saved successfully." });
  } catch (err) {
    res.status(400).json({ error: err });
  }
});

module.exports = saveRouter;
