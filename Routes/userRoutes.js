const express = require("express");
const {
  getUserData,
  createUserData,
  updateUserData,
  deleteUserData,
} = require("../Controller/userController");

const router = express.Router();

router.get("/user/:id?", getUserData);
router.post("/user/createUser", createUserData);
router.put("/user/updateuser/:id", updateUserData);
router.delete("/user/deleteuser/:id", deleteUserData);

module.exports = router;
