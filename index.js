#! /usr/bin/env node
import inquirer from "inquirer";
let todos = [];
async function todosList(todos) {
    // Selection Add ,update ,view ,delete
    do {
        let answer = await inquirer.prompt({
            type: "list",
            name: "select",
            message: "Select and operation",
            choices: ["add", "update", "view", "delete"],
        });
        // Add Todos
        if (answer.select == "add") {
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Item : ",
            });
            todos.push(addTodo.todo);
            console.log(todos);
        }
        // Updae Todos
        if (answer.select == "update") {
            let updateTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "select item for update ",
                choices: todos.map((item) => item),
            });
            let addTodo = await inquirer.prompt({
                type: "input",
                name: "todo",
                message: "Add Item : ",
            });
            let newTodos = todos.filter((val) => val !== updateTodo.todo);
            todos = [...newTodos, addTodo.todo];
            console.log(todos);
        }
        if (answer.select == "view") {
            console.log(todos);
        }
        if (answer.select == "delete") {
            let deleteTodo = await inquirer.prompt({
                type: "list",
                name: "todo",
                message: "select item for delete ",
                choices: todos.map((item) => item),
            });
            let newTodos = todos.filter((val) => val !== deleteTodo.todo);
            todos = [...newTodos];
            console.log(todos);
        }
    } while (true);
}
todosList(todos);
