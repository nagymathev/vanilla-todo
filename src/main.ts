import './style.css'

import header from "./components/header.ts";
import main, {Folder, folders as _fldrs} from "./components/main.ts";
import footer from "./components/footer.ts";

document.querySelector<HTMLDivElement>('#app')!.innerHTML = `
    ${header()}
    ${main()}
    ${footer()}
`

let folders = Array.from(document.querySelectorAll(".container li"));
folders.forEach(elem => elem.addEventListener("click", () => {
    folders.forEach(fldr => fldr.classList.remove("active"));
    elem.classList.add("active");
}))

let _cntnr = document.querySelector<HTMLDivElement>(".container");
_cntnr?.addEventListener("click", () => {
    if (_cntnr != null) (Array.from(_cntnr.children).at(-1) as HTMLDivElement).innerHTML = getTodos(_fldrs);
})

function getTodos(folders: Folder[]) {
    let todos = "";
    let activeElem = document.querySelector<HTMLLIElement>(".container .active");
    let active = parseInt(activeElem?.dataset.id ?? "-1") ?? -1;
    for (const folder of folders) {
        if (active === -1 || folder.id !== active) continue;
        folder.todos.forEach(todo => {
            todos += `
                <div class="todo">
                    <h3>${todo.title}</h3>
                    <p>${todo.text}</p>
                    <span>${todo.due_date}</span>
                </div>`
        })
    }

    return todos;
}
