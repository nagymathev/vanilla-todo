import viteLogo from "/vite.svg";

export default function header() {
    let header = document.createElement("header");
    let img = document.createElement("img");
    img.src = viteLogo;
    header.appendChild(img);
    let title = document.createElement("h1");
    title.innerText = "Cool Todo Company";
    header.appendChild(title);
    return header;
}