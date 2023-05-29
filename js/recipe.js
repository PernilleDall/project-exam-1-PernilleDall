const queryString = document.location.search;
const params = new URLSearchParams(queryString);
let id = params.get("id");



if (id) {
  async function getRecipe() {
    const response = await fetch(`https://pernilledall.no/recipes/wp-json/wp/v2/recipe/${id}`);
    const data = await response.json();
    console.log(data);
    document.querySelector(".recipe").innerHTML += `
    <h1>${data.title.rendered}</h1>
    <img src="${data.acf.imageUrl}" width="400px">
    <p>${data.content.rendered}</p>
    `;

    
    const image = document.querySelector(".recipe img");
    image.addEventListener("click", function (event) {
      event.stopPropagation(); 
      const modal = document.getElementById("imageModal");
      const modalImg = document.getElementById("modalImage");

      
      modalImg.src = this.src;

      
      modal.style.display = "block";
    });

   
    const modal = document.getElementById("imageModal");
    modal.addEventListener("click", function () {
      modal.style.display = "none";
    });

    
  
  }

  getRecipe();
} 
