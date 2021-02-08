document.getElementById("search-btn").addEventListener("click",function(){
  searchFood();
})
const searchFood = async() => {
  const searchLetter = document.getElementById("search-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchLetter}`
  // data loading
  const res = await fetch (url)
  const data = await res.json()
  displayFoods(data.meals);
}
const displayFoods = foods => {
  const foodItems = document.getElementById("food-items");
  foodItems.innerHTML = '';

  foods.forEach(food => {
    const foodItem = document.createElement('div');
    foodItem.className = "food-item";
    foodItem.innerHTML = `
    <img class="food-img" src="${food.strMealThumb}"></img>
    <h1 class="food-name">${food.strMeal}</h1>
    <button onClick="getIngredients('${food.strIngredient1}','${food.strIngredient2}','${food.strIngredient3}','${food.strIngredient4}','${food.strIngredient5}','${food.strIngredient6}')" class="recipe-btn">Ingredients</button>
    `;
    foodItems.appendChild(foodItem);
  })
}

const getIngredients = ( ingredients1,ingredients2,ingredients3,ingredients4,ingredients5,ingredients6  ) =>{
  const itemIngredients = document.getElementById("food-details");
  itemIngredients.className = ("food-details");
  const ul = document.createElement('ul');
  ul.innerHTML = `
  <li>${ingredients1}</li>
  <li>${ingredients2}</li>
  <li>${ingredients3}</li>
  <li>${ingredients4}</li>
  <li>${ingredients5}</li>
  <li>${ingredients6}</li>
  `
  itemIngredients.appendChild(ul);
}