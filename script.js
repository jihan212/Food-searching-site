
const foodList = food =>{
    fetch ('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then (response => response.json())
    .then (data =>{
        const food = data.categories;
        for (let i = 0; i < food.length; i++) {
            const foodName = food[i].strCategory;
            console.log(foodName);
        }
    })
}
foodList();