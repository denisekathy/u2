const todos = [
   
];

module.exports = {
  getAll,
 getOne,
  create,

};

function getAll(){
    return todos;
}

function getOne(id) {
    return todos[id]
}

function create(todo){
    todos.push(todo);
}