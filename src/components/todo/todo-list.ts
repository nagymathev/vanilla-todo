import {Folder} from "../main.ts";

export default function () {
    let todos = document.createElement("div");
    todos.classList.add("todos");
    // getTodos(folders);
    return todos
}

export function getTodos(folders: Folder[], id: number) {
    let todos = document.querySelector<HTMLDivElement>(".todos")!;
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