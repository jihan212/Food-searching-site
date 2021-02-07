fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("search-btn").addEventListener("click", function(){
        foodMenus(data);
        const fooditem = document.getElementById("food-items");
        fooditem.style.display = "grid";
    })
  });

function foodMenus(foods) {
  const foodItemsDiv = document.getElementById("food-items");
  const foodItem = foods.categories;
    foodItem.forEach(foodItems => {
    const foodItemDiv = document.createElement("div");
    foodItemDiv.className="food-item";

    const foodInfo = `
                <img class="food-img" src="${foodItems.strCategoryThumb}"></img>
                <h1 class="food-name">${foodItems.strCategory}</h1>
                <button id="recipeBTN" class="recipe-btn">Recipe</button>
            `;
    foodItemDiv.innerHTML = foodInfo;

    foodItemsDiv.appendChild(foodItemDiv);

    foodItemsDiv.appendChild(foodItemDiv);
    });
}
