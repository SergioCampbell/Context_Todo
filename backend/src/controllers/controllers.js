import userSchema from "../models/users.js";

export const indexUser = (req, res) => {
  res.json({
    message: "Welcome to my API REST",
    author: "Sergio Campbell Dev",
    GitHub: "https://github.com/sergiocampbell",
  });
};

export const createUser = (req, res) => {
  const user = userSchema(req.body);
  user
    .save()
    .then((data) => res.json({ message: "User Created!", user: data }))
    .catch((err) => res.json({ message: err }));
};

export const findUser = async (req, res) => {
  userSchema(req.body);
  await userSchema
    .find()
    .then((data) => res.json({ message: "All users!", users: data }))
    .catch((err) => res.json({ message: err }));
};

export const findOneUser = async (req, res) => {
  const { id } = req.params;
  await userSchema
    .findById(id)
    .then((data) => res.json({ user: data }))
    .catch((err) => res.json({ message: err }));
};

export const updateOneUser = async (req, res) => {
  const { id } = req.params;
  await userSchema
    .findByIdAndUpdate(id, req.body)
    .then((data) => res.json({ message: "User Updated!", user: data }))
    .catch((err) => res.json({ message: err }));
};

export const removeOneUser = (req, res) => {
  const { id } = req.params;
  userSchema
    .remove({ _id: id })
    .then((data) => res.json({ message: "User removed!", data }))
    .catch((err) => res.json({ message: err }));
};
