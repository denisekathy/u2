const Todo = require("../models/todo");
const todo = require('../models/todo');

module.exports = {
 index,
 new: newTodo,
 create

};

function index(req, res) {
 res.render("index", {
   todos: Todo.getAll(),
 });
}
function create(req, res){
    Todo.create(req.body);
    res.redirect('/')
}

function newTodo(){

}


