
getRandomMeal();

async function getRandomMeal() {

    const resp = await fetch(`www.themealdb.com/api/json/v1/1/random.php`;

    const respDate = resp.json()
    const randomMeal = respData.meals[0];

     //console.log(randomMeal);

}

async function getMealById(id){
    const meal = await fetch('www.themealdb.com/api/json/v1/1/lookup.php?i='+id);
}

async function getMealBySearch(term){
    const meals = await fetch('www.themealdb.com/api/json/v1/1/search.php?s='+term);
}
