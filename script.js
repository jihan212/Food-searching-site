fetch("https://www.themealdb.com/api/json/v1/1/categories.php")
  .then((response) => response.json())
  .then((data) => {
    document.getElementById("search-btn").addEventListener("click", function(){
        foodMenus(data);
        const fooditem = document.getElementById("food-items");
        fooditem.style.display = "grid";
    })
  });

const foodMenus = foods =>{
  const foodItemsDiv = document.getElementById("food-items");
  const foodItem = foods.categories;
    foodItem.forEach(foodItems => {
    const foodItemDiv = document.createElement("div");
    foodItemDiv.className="food-item";

    const foodInfo = `
                <img class="food-img" src="${foodItems.strCategoryThumb}"></img>
                <h1 class="food-name">${foodItems.strCategory}</h1>
                <button onClick="displayDetail('${foodItems.strCategory}')" id="recipeBTN" class="recipe-btn">Recipe</button>
            `;
    foodItemDiv.innerHTML = foodInfo;

    foodItemsDiv.appendChild(foodItemDiv);
    });
}
const displayDetail = name => {
    const url = `https://www.themealdb.com/api/json/v1/1/categories.php`
    fetch(url)
    .then(response => response.json())
    .then(data => recipeDetails(data.categories[0]));
}
const recipeDetails = recipe =>{
    const detailDiv = document.getElementById("food-details");
    detailDiv.innerHTML=`
    <img class="recipe-img" src="${recipe.strCategoryThumb}"></img>
    <h1 class="food-name">${recipe.strCategory}</h1> 
    <p>${recipe.strCategoryDescription}</p>   
    `
}