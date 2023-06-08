import {Folder} from '../main.ts'
import { getTodos } from "./todo-list.ts";

export default function (folders: Folder[]) {
    let ul = document.createElement("ul");
    getFolders(ul, folders);

    return ul;
}

function getFolders(parent: HTMLElement, folders: Folder[]) {
    let _fldrs = parent;
    for (const fldr of folders) {
        let elem = document.createElement("li");
        elem.dataset.id = `${fldr.id}`;
        elem.innerText = fldr.name;
        _fldrs.appendChild(elem);
        elem.addEventListener("click", () => {
            document.querySelector(".container .todos")!.innerHTML = "";
            Array.from(document.querySelectorAll(".container li")).forEach(li => {
                li.classList.remove("active");
            })
            elem.classList.add("active");
            getTodos(folders, fldr.id);
        })
    }
}