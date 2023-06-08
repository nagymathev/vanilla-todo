import './style.css'

import header from "./components/header.ts";
import main from "./components/main.ts";
import footer from "./components/footer.ts";

let app = document.querySelector<HTMLDivElement>('#app')!
app.appendChild(new DOMParser().parseFromString(header(), 'text/html').body.firstElementChild!);
app.appendChild(main());
app.appendChild(new DOMParser().parseFromString(footer(), 'text/html').body.firstElementChild!);
