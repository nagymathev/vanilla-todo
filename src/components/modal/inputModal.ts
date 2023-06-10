let backdrop = document.createElement("div");

export default function () {

    backdrop.classList.add("backdrop");

    let modal = document.createElement("div");
    modal.classList.add("modal");

    backdrop.appendChild(modal);

    let exit = document.createElement("span");
    exit.innerText = "Close";
    exit.classList.add("exitModal")
    modal.appendChild(exit);
    exit.addEventListener("click", () => {
        closeModal();
    })

    return backdrop;
}

export function closeModal() {
    backdrop.remove();
}