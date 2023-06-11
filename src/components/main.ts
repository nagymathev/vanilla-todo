import Projects, {getCurrentProject, refreshFolders} from './todo/todo-folder.ts';
import TodoList from "./todo/todo-list.ts";
import newTodoModal from './modal/newTodoModal.ts';
import newProjectModal from "./modal/newProjectModal.ts";

export class Todo {
    static id_counter = 0;
    id: number;
    title: string;
    text: string;
    due_date: string;

    constructor(title: string, text: string, due_date: string) {
        this.id = Todo.id_counter++;
        this.title = title;
        this.text = text;
        this.due_date = due_date;
    }
}

export class Folder {
    static id_counter = 0
    id: number
    name: string;
    todos: Todo[];

    constructor(name: string, todos: Todo[]) {
        this.id = Folder.id_counter++;
        this.name = name;
        this.todos = todos;
    }
}

let folders: Folder[] = [
    new Folder("homework", [
        new Todo("Maths", "Algebra homewerk", new Date().toDateString()),
        new Todo("Maths 2", "Algebra homewerk 2", new Date().toDateString())
    ]),
    new Folder("kitchen", [
        new Todo("Cleaning the pan", "I will cook soon so let's clean it!", new Date().toDateString())
    ])
]

export function addNewProject(project: Folder) {
    folders.push(project);
}

export function addNewTodo(project: Folder, todo: Todo) {
    project.todos.push(todo);
}

export function removeProject(project: Folder) {
    let idx = folders.indexOf(project, 0)
    folders.splice(idx, 1);
}

export function removeTodo(project: Folder, todo: Todo) {
    let idx = project.todos.indexOf(todo, 0)
    project.todos.splice(idx, 1);
}

export function getProjects(): Folder[] {
    return folders;
}

export function getProject(idx: number): Folder {
    return folders[idx];
}

export default function main() {
    let app = document.querySelector("#app")!;
    let main = document.createElement("main");
    let container = document.createElement("div")
    container.classList.add("container");
    main.appendChild(container);

    let todoContainer = document.createElement("div");
    todoContainer.classList.add("todo-container");
    todoContainer.appendChild(Projects());
    todoContainer.appendChild(TodoList());

    let buttonContainer = document.createElement("div");
    buttonContainer.classList.add("buttons");

    let newProjectButton = document.createElement("button")
    newProjectButton.innerText = "Add new Project";
    buttonContainer.appendChild(newProjectButton);
    newProjectButton.addEventListener("click", () => {
        app.appendChild(newProjectModal());
        document.querySelector<HTMLHeadingElement>(".modal h1")!.innerText = "New Project";
    })

    let newTodoButton = document.createElement("button");
    newTodoButton.innerText = "Add new Todo";
    buttonContainer.appendChild(newTodoButton);
    newTodoButton.addEventListener("click", () => {
        app.appendChild(newTodoModal());
        document.querySelector<HTMLHeadingElement>(".modal h1")!.innerText = "New Todo";
    })

    let deleteProjectButton = document.createElement("button");
    deleteProjectButton.innerText = "Delete Project";
    buttonContainer.appendChild(deleteProjectButton);
    deleteProjectButton.addEventListener("click", () => {
        removeProject(getCurrentProject());
        refreshFolders();
    })

    container.appendChild(buttonContainer);
    container.appendChild(todoContainer);

    return main;
}