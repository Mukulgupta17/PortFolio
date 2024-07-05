const express = require("express");
const router = express.Router();
const User = require("../Model/Contactmodel");
router.post("/", async (req, res) => {
  console.log(req.body.firstName, "oooooooooooooooooo");

  try {
    const newData = new User({
      firstname: req.body.firstName,
      email: req.body.email,
      lastname: req.body.lastName,
      phone: req.body.phoneNumber,
      service: req.body.service,
      message: req.body.message,
    });  
    console.log(newData, "newdata");

    const data = await newData.save();
    res.json({ success: "successful" });
  } catch (e) {
    console.log(e);
  }
});
module.exports = router;
