async function getRecipes(){
    const response = await fetch ("https://pernilledall.no/recipes/wp-json/wp/v2/recipe")
    const data = await response.json();
    console.log(data);
    data.forEach((recipe) => {
       renderRecipe(recipe);
        
    });
}

getRecipes();

function renderRecipe(recipe) {
    document.querySelector(".recipes").innerHTML += `
      <div class="one-recipe">
        <a href="./recipe.html?id=${recipe.id}">
          <h2>${recipe.title.rendered}</h2>
          <img class="image" src="${recipe.acf.imageUrl}" width="200px" onclick="openModal('${recipe.acf.imageUrl}')">
          <p>${recipe.acf.shortDescription}</p>
        </a>
      </div>
    `;
  }
  

