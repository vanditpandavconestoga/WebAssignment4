const User = require("../Model/userSchema");

module.exports.getUserData = async (req, res) => {
  try {
    const id = req.params.id
      ? {
          _id: req.params.id,
        }
      : {};

    const result = await User.find(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.createUserData = async (req, res) => {
  try {
    const UserData = req.body;

    const user = new User(UserData);
    await user.save();
    res.status(200).send(user);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.updateUserData = async (req, res) => {
  try {
    const id = req.params.id;
    const Data = await User.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(Data);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.deleteUserData = async (req, res) => {
  try {
    const id = req.params.id;
    await User.findByIdAndDelete(id);
    res.status(200).send({ message: "User deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
