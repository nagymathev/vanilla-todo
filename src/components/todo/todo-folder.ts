import {Folder, getProjects} from '../main.ts'
import { refreshTodos } from "./todo-list.ts";

let parent = document.createElement("ul");
let currentActive: HTMLLIElement;

export default function () {
    refreshFolders();
    selectFirstFolder();

    return parent;
}

function resetFolders() {
    Array.from(parent.children).forEach(li => {
        li.classList.remove("active");
    })
}

function createFolder(fldr: Folder) {
    let elem = document.createElement("li");
    elem.dataset.id = `${fldr.id}`;
    elem.innerText = fldr.name;
    parent.appendChild(elem);
    return elem;
}

function selectFirstFolder() {
    resetFolders();
    let first = parent.firstElementChild! as HTMLLIElement;
    setActive(first);
}

function setActive(elem: HTMLElement) {
    elem.classList.add("active");
    refreshTodos(getProjects(), parseInt(elem.dataset.id!));
}

export function refreshFolders() {
    let folders = getProjects();
    parent.innerHTML = "";
    for (const fldr of folders) {
        let elem = createFolder(fldr);
        if (fldr.id === folders.length - 1) setActive(elem);
        elem.addEventListener("click", () => {
            resetFolders();
            elem.classList.add("active");
            currentActive = elem;
            refreshTodos(folders, fldr.id);
        })
    }
}

export function getCurrentProject() {
    return currentActive;
}