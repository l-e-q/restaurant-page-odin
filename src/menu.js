import { createHtmlElement, content } from "./index";

function render() {
    const main = createHtmlElement('main', '', ['main-solid', 'main'], '');
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
            name: 'Portobello Beefsteak',
            description: `Tender slices of prime beef, perfectly seared to lock in the juices, paired with sautéed Portobello mushrooms and drizzled in a rich, savory sauce.`,
            price: 18.95
        },
        {
            name: 'Flambé Ratatouille',
            description: `Our Flambé Ratatouille is a fiery showcase of fresh, seasonal vegetables. We carefully select a medley of vibrant produce and flambe them with a splash of red wine, infusing the dish with a smoky depth of flavor.`,
            price: 14.50
        },
        {
            name: 'Albacore Tuna "Alba"',
            description: `Albacore Tuna "Alba" is a masterpiece of the sea. We source only the freshest albacore tuna and prepare it with a nutty, velvety sauce that beautifully complements the natural richness of the fish. A delicate citrus accent adds a refreshing twist, making each bite a harmonious blend of flavors. It's a dish that embodies the essence of culinary artistry.`,
            price: 21.95
        },
        {
            name: 'Flambé Ratatouille',
            description: `Our Raspberry Pavlova is a sweet finale to your culinary journey. It features a delicate meringue nest, filled with luscious raspberry curd and crowned with a cloud of fluffy egg whites. `,
            price: 8.50
        },
    ]

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
