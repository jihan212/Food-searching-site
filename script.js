document.getElementById("search-btn").addEventListener("click",function(){
  searchFood();
})
const searchFood = () => {
  const searchLetter = document.getElementById("search-input").value;
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchLetter}`
  fetch (url)
  .then (res => res.json())
  .then (data => displayFoods(data.meals))
}
const displayFoods = foods => {
  const foodItems = document.getElementById("food-items");

  foods.forEach(food => {
    const foodItem = document.createElement('div');
    foodItem.className = "food-item";
    foodItem.innerHTML = `
    <img class="food-img" src="${food.strMealThumb}"></img>
    <h1 class="food-name">${food.strMeal}</h1>
    `;
    foodItems.appendChild(foodItem);
  })
}