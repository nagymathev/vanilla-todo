export default function (): string {
    return `
        <div class="todos">
        </div>
    `
}

// function getTodos(folders: Folder[]) {
//     let todos = "";
//     let activeElem = document.querySelector<HTMLLIElement>(".container .active");
//     let active = parseInt(activeElem?.dataset.id ?? "-1") ?? -1;
//     for (const folder of folders) {
//         if (active === -1 || folder.id !== active) continue;
//         folder.todos.forEach(todo => {
//             todos += `
//                 <div class="todo">
//                     <h3>${todo.title}</h3>
//                     <p>${todo.text}</p>
//                     <span>${todo.due_date}</span>
//                 </div>`
//         })
//     }
//
//     return todos;
// }