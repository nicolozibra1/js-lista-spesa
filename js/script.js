let ingredients = [
    "spaghetti",
    "guanciale",
    "uova",
    "formaggio",
    "sale",
    "pepe"
];
console.log(ingredients);

let i = 0;

while(i < ingredients.length) {

    const listItem = document.createElement("li");

    listItem.textContent = ingredients[i];

    ingredientList.appendChild(listItem);

    i++;
}
