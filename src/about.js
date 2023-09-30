import { createHtmlElement, content } from "./index";

function render() {
    const main = createHtmlElement('main', 'main-about', ['main-solid', 'main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', '', ['back-heading-text'], 'Restaurant');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', 'about-heading-text', ['heading-text'], 'Aweasome');
    main.appendChild(headingText);

    const homeHeadingHr = createHtmlElement('hr', '', ['wide-hr'], '');
    main.appendChild(homeHeadingHr);

    const aboutRestaurant = createHtmlElement('p', 'about-restaurant', [], 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque placerat, tellus sit amet ultrices porttitor, ex ex aliquet purus, pellentesque rhoncus felis ipsum nec purus. Donec id enim in risus pellentesque blandit. Proin sed nibh nec arcu mollis rhoncus in sit amet augue. Suspendisse magna nisl, eleifend non tempor et, luctus id quam. Nulla bibendum vulputate ante, non malesuada eros lobortis euismod');
    main.appendChild(aboutRestaurant);
}

export { render as renderAbout }
