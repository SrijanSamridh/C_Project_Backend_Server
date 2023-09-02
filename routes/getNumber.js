const express = require("express");
const numberRouter = express.Router();
const Contact = require("../models/contact");

// Get all the numbers
numberRouter.get("/api/get", async (req, res) => {
  try {
    const contacts = await Contact.find({});
    res.status(200).json({ contacts });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});

// Get a number by name
numberRouter.get("/api/search/:name", async (req, res) => {
  const { name } = req.params;

  try {
    const contact = await Contact.findOne({ name });

    if (!contact) {
      return res.status(404).json({ error: "Contact not found" });
    }

    res.status(200).json({ contact });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
});
  

module.exports = numberRouter;
