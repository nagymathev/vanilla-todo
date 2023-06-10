import {getCurrentProject} from "./todo-folder.ts";

let todos = document.createElement("div");
todos.classList.add("todos");

export default function () {
    // getTodos(folders);
    return todos
}

export function refreshTodos() {
    resetTodos();
    getCurrentProject().todos.forEach(todo => {
        let _todo = document.createElement("div");
        _todo.classList.add("todo");
        _todo.innerHTML = `
            <h3>${todo.title}</h3>
            <p>${todo.text}</p>
            <span>${todo.due_date}</span>
        `
        todos.appendChild(_todo);
    })

    // return todos;
}

function resetTodos() {
    todos.innerHTML = "";
}