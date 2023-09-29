import { createHtmlElement, content } from "./index";

function render() {
    const main = createHtmlElement('main', '', ['main'], '');
    content.appendChild(main)
}

export {render as renderHome}
