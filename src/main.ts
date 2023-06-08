import './style.css'

import header from "./components/header.ts";
import main from "./components/main.ts";
import footer from "./components/footer.ts";

let app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(header());
app.appendChild(main());
app.appendChild(footer());
