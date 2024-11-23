
module.exports = {
  add: async function (req, res) {
    try {
      const { todo } = req.allParams();
      const newTodo = await Task.create({ todo }).fetch();
      return res.ok(newTodo);
    } catch (error) {
      return res.serverError(error);
    }
  },

  edit: async function (req, res) {
    try {
      const { id, todo } = req.allParams();
      const updatedTodo = await Task.updateOne({ id }).set({ todo });
      return res.ok(updatedTodo);
    } catch (error) {
      return res.serverError(error);
    }
  },

  delete: async function (req, res) {
    try {
      const { id } = req.allParams();
      await Task.destroyOne({ id });
      return res.ok();
    } catch (error) {
      return res.serverError(error);
    }
  },

  search: async function (req, res) {
    try {
      const { keyword } = req.allParams();
      const todos = await Task.find({ todo: { contains: keyword } });
      return res.ok(todos);
    } catch (error) {
      return res.serverError(error);
    }
  },

  getAll: async function (req, res) {
    try {
      const todos = await Task.find();
      return res.ok(todos);
    } catch (error) {
      return res.serverError(error);
    }
  },
};
