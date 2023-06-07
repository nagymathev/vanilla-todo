import Projects from './todo/todo-folder.ts';
import TodoList from "./todo/todo-list.ts";

class Todo {
    title: string;
    text: string;
    due_date: string;

    constructor(title: string, text: string, due_date: string) {
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

export let folders: Folder[] = [
    new Folder("homework", [
        new Todo("Maths", "Algebra homewerk", new Date().toDateString()),
        new Todo("Maths 2", "Algebra homewerk 2", new Date().toDateString())
    ]),
    new Folder("kitchen", [
        new Todo("Cleaning the pan", "I will cook soon so let's clean it!", new Date().toDateString())
    ])
]

export default function main() {
    return `
        <main>
            <div class="container">
                ${Projects(folders)}
                ${TodoList()}
            </div>
        </main>
    `
}