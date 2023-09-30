import { createHtmlElement, content } from "./index";

function render() {
    const main = createHtmlElement('main', 'main-menu', ['main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', 'menu-back-heading-text', ['back-heading-text'], 'Restaurant');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', 'menu-heading-text', ['heading-text'], 'Menu');
    main.appendChild(headingText);

    const div = createHtmlElement('div', 'a', [], '');
    main.appendChild(div);

    const menuHeadingHr = createHtmlElement('hr', 'menu-wide-hr', ['wide-hr'], '');
    div.appendChild(menuHeadingHr);

    const restaurantMenuList = createHtmlElement('ul', 'restaurant-menu-list', [], '');
    main.appendChild(restaurantMenuList);

    const dishes = [{
        name: 'Cake',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel
                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit
                    placeat pariatur.`,
        price: 20
    },
    {
        name: 'Fish',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel
                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit
                    placeat pariatur.`,
        price: 20
    },
    {
        name: 'Egg',
        description: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi blanditiis vel
                    distinctio, ullam quod dolor ratione temporibus neque vitae iste beatae nobis veniam hic ab, mollitia quas fugit
                    placeat pariatur.`,
        price: 20
    }]

    dishes.forEach(dish => {
        const dishListItem = createHtmlElement('li', '', ['dish'], '');
        restaurantMenuList.appendChild(dishListItem);

        const dishName = createHtmlElement('h3', '', ['dish-name'], `${dish.name}`);
        dishListItem.appendChild(dishName);

        const dishDescription = createHtmlElement('p', '', ['dish-description'], `${dish.description}`);
        dishListItem.appendChild(dishDescription);

        const dishPrice = createHtmlElement('h4', '', ['dish-price'], `${dish.price}$`);
        dishListItem.appendChild(dishPrice);

        if (dishes.indexOf(dish) !== dishes.length - 1) {const menuHr = createHtmlElement('hr', '', ['thin-hr'], '');
            dishListItem.appendChild(menuHr);
        }
    })
}

export { render as renderMenu }
