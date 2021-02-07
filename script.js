
    fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then (response => response.json())
    .then (data =>{
        foodMenus(data);
        //console.log(data.categories.strCategory);
    })
    function foodMenus(foods) {
        const foodItemsDiv = document.getElementById("food-items");
        const foodItem = foods.categories;
        for (let i = 0; i < foodItem.length; i++) {
            const foodItems = foodItem[i];
            const foodItemDiv = document.createElement('div');

            const foodNames = document.createElement('h1');
            foodNames.innerText = foodItems.strCategory;
            foodItemDiv.appendChild(foodNames);

            const foodDescription = document.createElement('p');
            foodDescription.innerText = foodItems.strCategoryDescription;
            foodItemDiv.appendChild(foodDescription);

            foodItemsDiv.appendChild(foodItemDiv);
        }
    }