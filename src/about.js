import { createHtmlElement, content } from "./index";

function render() {
    const main = createHtmlElement('main', 'main-about', ['main-solid', 'main'], '');
    content.appendChild(main);

    const backHeadingText = createHtmlElement('p', '', ['back-heading-text'], '"Symphony of Flavors"');
    main.appendChild(backHeadingText);

    const headingText = createHtmlElement('h1', 'about-heading-text', ['heading-text'], 'History');
    main.appendChild(headingText);

    const homeHeadingHr = createHtmlElement('hr', '', ['wide-hr'], '');
    main.appendChild(homeHeadingHr);

    const aboutRestaurant = createHtmlElement('p', 'about-restaurant', [], `In the heart of our beloved city, there lies a dining experience unlike any other—a culinary voyage through time and taste that beckons to those with a passion for history and gastronomy. Our story begins with a group of passionate food enthusiasts, bound by a shared love for Italy's rich culinary heritage and its indomitable spirit during the tumultuous years of World War II.

As we delved into the annals of history, we uncovered the tales of wartime kitchens in Italy, where chefs faced scarcity with creativity, turning simple ingredients into extraordinary dishes. It was a time when every meal became a cherished moment, a symbol of hope and resilience.

Inspired by these stories of culinary ingenuity in the face of adversity, we embarked on a mission to recreate that magic for the modern palate. We envisioned a restaurant where every dish would carry the essence of those wartime kitchens, a place where flavors would tell stories of survival, innovation, and the enduring spirit of Italy.

With meticulous research and unwavering dedication, we gathered recipes passed down through generations, refined them with a contemporary twist, and curated an exquisite menu that pays homage to the past while satisfying the cravings of today. Our dishes are a testament to the culinary artistry that flourished even in the darkest of times.

Step into our restaurant and you'll find an atmosphere steeped in nostalgia, with rustic decor and vintage memorabilia that transport you to the wartime era. Our culinary team, led by passionate chefs, pours heart and soul into each plate, striving to evoke not just flavors but memories. Every bite is a connection to the past, a tribute to the resilience of Italian kitchens.

We invite you to savor the flavors of history, to embark on a journey that transcends time and palate. At our restaurant, you're not just a guest; you're a participant in a living history lesson, a connoisseur of wartime ingenuity, and a patron of modern delights.

Welcome to our culinary time capsule, where every visit is a celebration of the past and a feast for the senses. Come, join us, and let the flavors of history enchant your taste buds.`);
    main.appendChild(aboutRestaurant);
}

export { render as renderAbout }
