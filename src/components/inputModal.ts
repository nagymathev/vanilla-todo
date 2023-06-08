export default function () {
    let backdrop = document.createElement("div");
    backdrop.classList.add("backdrop");

    let modal = document.createElement("div");
    modal.classList.add("modal");

    backdrop.appendChild(modal);

    let h1 = document.createElement("h1");
    h1.innerText = "Title";
    modal.appendChild(h1);

    let exit = document.createElement("span");
    exit.innerText = "Close";
    exit.classList.add("exitModal")
    modal.appendChild(exit);
    exit.addEventListener("click", () => {
        backdrop.remove();
    })

    let titleInput = document.createElement("input");
    titleInput.placeholder = "Todo Title";
    modal.appendChild(titleInput)

    let descInput = document.createElement("input");
    descInput.placeholder = "Todo Description";
    modal.appendChild(descInput);

    let dateInput = document.createElement("input");
    dateInput.type = "date";
    modal.appendChild(dateInput);

    return backdrop;
}