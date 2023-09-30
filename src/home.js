import { createHtmlElement, content, switchRender } from "./index";

function render() {
    const main = createHtmlElement('main', 'main-home', ['main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', '', ['back-heading-text'], 'Restaurant');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', '', ['heading-text'], 'Aweasome');
    main.appendChild(headingText);

    const homeHeadingHr = createHtmlElement('hr', '', ['wide-hr'], '');
    main.appendChild(homeHeadingHr);

    const description = createHtmlElement('p', 'description', [], 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint ipsam obcaecati, cum aperiam ut error aspernatur nemo ipsum veritatis vitae, eum culpa? Vel numquam nostrum facilis corrupti fugit ipsam vitae.');
    main.appendChild(description);

    const homeButton = createHtmlElement('button', 'home-button', [], 'Menu');
    homeButton.addEventListener('click', () => {
        switchRender('Menu')
    });
    main.appendChild(homeButton);
}

export {render as renderHome}
