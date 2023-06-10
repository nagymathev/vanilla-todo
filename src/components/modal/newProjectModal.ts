import inputModal, {closeModal} from './inputModal.ts';
import {addNewProject, Folder} from "../main.ts";
import {refreshFolders} from "../todo/todo-folder.ts";

export default function () {
    let backdrop = inputModal();
    let modal = backdrop.firstElementChild!;

    let h1 = document.createElement("h1");
    h1.innerText = "New Project";
    modal.appendChild(h1);

    let titleInput = document.createElement("input");
    titleInput.placeholder = "Project Title";
    modal.appendChild(titleInput)

    let submitButton = document.createElement("button");
    submitButton.innerText = "Add Project";
    modal.appendChild(submitButton);

    submitButton.addEventListener("click", () => {
        addNewProject(new Folder(titleInput.value, []));
        refreshFolders();
        closeModal();
    })

    return backdrop;
}