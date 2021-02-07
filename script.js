fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    foodMenus(data);
  });

function foodMenus(foods) {
  const foodItemsDiv = document.getElementById("food-items");
  const foodItem = foods.categories;
  for (let i = 0; i < foodItem.length; i++) {
    const foodItems = foodItem[i];
    const foodItemDiv = document.createElement("div");
    foodItemDiv.className="food-item";

    const foodInfo = `
                <img class="food-img" src="${foodItems.strCategoryThumb}"></img>
                <h1 class="food-name">${foodItems.strCategory}</h1>
                <p class="food-details">${foodItems.strCategoryDescription}</p>
            `;
    foodItemDiv.innerHTML = foodInfo;

    foodItemsDiv.appendChild(foodItemDiv);
  }
}
