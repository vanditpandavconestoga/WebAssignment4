const Comment = require("../Model/commentSchema");

module.exports.getCommentData = async (req, res) => {
  try {
    const id = req.params.id
      ? {
          _id: req.params.id,
        }
      : {};

    const result = await Comment.find(id);
    res.status(200).send(result);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.createCommentData = async (req, res) => {
  try {
    const CommentData = req.body;

    const comment = new Comment(CommentData);
    await comment.save();
    res.status(200).send(comment);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

module.exports.updateCommentData = async (req, res) => {
  try {
    const id = req.params.id;
    const Data = await Comment.findByIdAndUpdate(id, req.body, { new: true });
    res.status(200).send(Data);
  } catch (error) {
    res.status(400).send({ error: error });
  }
};

module.exports.deleteCommentData = async (req, res) => {
  try {
    const id = req.params.id;
    await Comment.findByIdAndDelete(id);
    res.status(200).send({ message: "Comment deleted successfully" });
  } catch (error) {
    res.status(500).send({ error: "Internal Server Error" });
  }
};
