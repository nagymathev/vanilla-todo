import inputModal, {closeModal} from './inputModal.ts';
import {addNewTodo, Todo} from "../main.ts";
import {getCurrentProject} from "../todo/todo-folder.ts";
import {refreshTodos} from "../todo/todo-list.ts";

export default function () {
    let backdrop = inputModal();
    let modal = backdrop.firstElementChild!;

    let h1 = document.createElement("h1");
    h1.innerText = "New Todo";
    modal.appendChild(h1);

    let titleInput = document.createElement("input");
    titleInput.placeholder = "Todo Title";
    modal.appendChild(titleInput)

    let descInput = document.createElement("input");
    descInput.placeholder = "Todo Description";
    modal.appendChild(descInput);

    // let dateInput = document.createElement("input");
    // dateInput.type = "date";
    // modal.appendChild(dateInput);

    let submitButton = document.createElement("button");
    submitButton.innerText = "Add Todo";
    modal.appendChild(submitButton);

    submitButton.addEventListener("click", () => {
        addNewTodo(getCurrentProject(), new Todo(titleInput.value, descInput.value, (new Date).toDateString()));
        refreshTodos();
        closeModal();
    })

    return backdrop;
}