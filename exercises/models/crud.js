const User = require('./user')

const getUserById = (id) => {
  // the .exec returns a real promise,
  // this would be the same as to List() in IQueryable
  return User.findById(id).exec();
}

const getAllUsers = () => {
  return User.find().exec()
}

const createUser = (userDetails) => {
  return User.create(userDetails);
}
const removeUserById = (id) => {
  return User.findByIdAndRemove(id).exec()
}

const updateUserById = (id, update) => {
  return User.findByIdAndUpdate(id, update, { new: true }).exec()
}

module.exports = {
  getUserById,
  getAllUsers,
  createUser,
  removeUserById,
  updateUserById
}
