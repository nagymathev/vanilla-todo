import {getCurrentProject} from "./todo-folder.ts";
import {removeTodo} from "../main.ts";

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
        _todo.dataset.id = `${todo.id}`;

        let h3 = document.createElement("h3");
        h3.innerText = todo.title;
        _todo.appendChild(h3);

        let p = document.createElement("p");
        p.innerText = todo.text;
        _todo.appendChild(p);

        let span = document.createElement("span");
        span.innerText = todo.due_date;
        _todo.appendChild(span);

        let deleteButton = document.createElement("button");
        deleteButton.innerText = "Delete";
        deleteButton.classList.add("delete-button");
        _todo.appendChild(deleteButton);

        deleteButton.addEventListener("click", () => {
            removeTodo(getCurrentProject(), todo);
            refreshTodos();
        })

        todos.appendChild(_todo);
    })

    // return todos;
}

function resetTodos() {
    todos.innerHTML = "";
}