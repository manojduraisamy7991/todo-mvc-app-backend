const Todo = require('../models/Todo');

const createTodo = async (req, res) => {
  try {
    const todo = await Todo.create(req.body);
    res.status(201).json(todo);
  } catch (err) {
    res.status(500).json({
      success: false,
      message: 'Failed to create todo',
      error: err.message, 
    });
  }
};

module.exports = { createTodo };
