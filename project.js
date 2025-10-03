
const recipes = [
  { title: "Spaghetti", ingredients: ["pasta", "tomato"], category: "Italian", cookingTime: 30 },
  { title: "Sushi", ingredients: ["rice", "fish"], category: "Japanese", cookingTime: 50 },
  { title: "Salad", ingredients: ["lettuce", "tomato"], category: "Healthy", cookingTime: 10 },
  { title: "Adobo", ingredients: ["chicken", "soy sauce"], category: "Filipino", cookingTime: 60 },
];

function countRecipes(recipes) {
  return recipes.length;
}


function filterByCategory(recipes, category) {
  return recipes.filter(recipe => recipe.category === category);
}


function findLongestRecipe(recipes) {
  return recipes.reduce((longest, recipe) =>
    recipe.cookingTime > longest.cookingTime ? recipe : longest
  );
}


function groupByCookingTime(recipes){
    return recipes.reduce((groups, recipe) => {
        if (recipe.coockingTime <= 20){
            groups.quick.push(recipe);
        }else if (recipe.coockingTime <= 45){
            groups.medium.push(recipe);
        }else{
            groups.long.push(recipe);
        }
        return groups;
    },{quick: [], medium: [], long: []});
    }

function fetchNewRecipes() {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        { title: "Ramen", ingredients: ["noodles", "broth"], category: "Japanese", cookingTime: 40 },
        { title: "Pancakes", ingredients: ["flour", "egg"], category: "Breakfast", cookingTime: 15 }
      ]);
    }, 2000)
  });
}

console.log("Total recipes:", countRecipes(recipes));
console.log("Japanese recipes:", filterByCategory(recipes, "Japanese"));
console.log("Longest recipe:", findLongestRecipe(recipes));
console.log("Grouped by time:", groupByCookingTime(recipes));

fetchNewRecipes().then(newRecipes =>{
    console.log("Fetched recipes:", newRecipes);
});
