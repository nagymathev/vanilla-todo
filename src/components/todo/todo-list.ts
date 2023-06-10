import {Folder} from "../main.ts";

let todos = document.createElement("div");
todos.classList.add("todos");

export default function () {
    // getTodos(folders);
    return todos
}

export function refreshTodos(folders: Folder[], id: number) {
    resetTodos();
    for (const folder of folders) {
        if (folder.id !== id) continue;
        folder.todos.forEach(todo => {
            let _todo = document.createElement("div");
            _todo.classList.add("todo");
            _todo.innerHTML = `
                <h3>${todo.title}</h3>
                <p>${todo.text}</p>
                <span>${todo.due_date}</span>
            `
            todos.appendChild(_todo);
        })
    }

    // return todos;
}

function resetTodos() {
    todos.innerHTML = "";
}