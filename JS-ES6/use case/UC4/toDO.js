// Model
class Todo {
    constructor(title, date) {
        Todo.nextId++;
        this.id = Todo.nextId; // auto_increment
        this.title = title;
        this.completed = false
        this.date = date
    }
}
Todo.nextId = 0;
var ToDoItems = [];
// Service
class TodosService {
    constructor() { }
    addTodo(title) {
        ToDoItems.push(new Todo(title, new Date()))
        console.log(ToDoItems);
    }
    editTodo(id, newTitle) {
        var completetodo = ToDoItems.filter(function (obj) {
            if (obj.id == id)
                return obj.title = newTitle;
        });
        console.log(completetodo);
    }
    completeTodo(id) {
        var completetodo = ToDoItems.filter(function (obj) {
            return obj.completed = true;
        });
        console.log(completetodo);


    }
    completeAll() {
        var abc = ToDoItems.filter(function (obj) {
            return obj.completed = true;
        });
        console.log(abc)
    }
    deleteTodo(id) {
        var DeleteItem = ToDoItems.filter(function (obj) {
            if (obj.id == id)
                return obj.id !== id;
        })
        console.log(DeleteItem);
    }
    
}

const service = new TodosService();