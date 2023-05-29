const queryString = document.location.search;
const params = new URLSearchParams(queryString);

async function getLatestRecipe() {
  const response = await fetch("https://pernilledall.no/recipes/wp-json/wp/v2/recipe");
  const data = await response.json();
  const latestPost = data[data.length - 1]; 
  
  console.log(latestPost);
  document.querySelector(".recipe-section").innerHTML += `
  <div class="latest-post">
    <h2>${latestPost.title.rendered}</h2>
    <img src="${latestPost.acf.imageUrl}" width="400px">
    <p>${latestPost.content.rendered}</p>
    </div>
  `;
}

getLatestRecipe();

document.getElementById("next-button").addEventListener("click", showNextPosts);
document.getElementById("prev-button").addEventListener("click", showPrevPosts);

let startIndex = 0;

function showNextPosts() {
  startIndex += 3;
  renderPosts();
}

function showPrevPosts() {
  if (startIndex > 0) {
    startIndex -= 3;
    renderPosts();
  }
}

let allPosts = [];

async function getRecipes() {
  const response = await fetch("https://pernilledall.no/recipes/wp-json/wp/v2/recipe");
  const data = await response.json();
  allPosts = data;
  renderPosts();
}

function renderPosts() {
  const latestPosts = allPosts.slice(startIndex, startIndex + 3);
  const newPostsContainer = document.querySelector(".new-posts");
  newPostsContainer.innerHTML = "";

  latestPosts.forEach(recipe => {
    newPostsContainer.innerHTML += `
      <a href="/pages/recipe.html?id=${recipe.id}">
        <img class="post-img" src="${recipe.acf.imageUrl}" width="200px">
        <h2>${recipe.title.rendered}</h2>
        <p>${recipe.acf.shortDescription}</p>
      </a>
    `;
  });
}
getRecipes();

