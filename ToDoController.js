const ToDoModel = require("../model/ToDoModel");

module.exports.getToDos = async (req, res) => {
  const todos = await ToDoModel.find();
  res.send(todos);
};

module.exports.SaveToDo = (req, res) => {
  const { todo } = req.body;
  ToDoModel.create({ todo })
    .then((data) => {
      console.log("Saved Succe...");
      res.sendStatus(201);
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports.updateToDo = (req, res) => {
  const { id } = req.params;
  const { todo } = req.body;
  ToDoModel.findByIdAndUpdate(id, { todo })
    .then(() => {
      res.send("Updated");
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};

module.exports.deleteToDo = (req, res) => {
  const { id } = req.params;
  ToDoModel.findByIdAndDelete(id)
    .then(() => {
      res.send("Deleted");
    })
    .catch((err) => {
      res.send(err);
      console.log(err);
    });
};
