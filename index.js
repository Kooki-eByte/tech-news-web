const API_KEY = "93e999575aa648f3bb07f76e24a88977"
const TOPIC = "coding"
const URL = `https://newsapi.org/v2/everything?q=${TOPIC}&apikey=${API_KEY}`
const ULELEMENT = document.querySelector(".tech-ul")

window.addEventListener("load", () => {
  startSearch();
})

const startSearch = async () => {
  await fetch(URL, {
    method: "GET",
  })
    .then((res) => res.json())
    .then((data) => {
      console.log(data);

      // Display articles on page
      displayArticles(data.articles)
    })
}

const displayArticles = (articles) => {
  articles.forEach(article => {
    let liElement = document.createElement("li");
    let linkElement = document.createElement("a");
    let breakTag = document.createElement("br")
    let imageElement = document.createElement("img")
    linkElement.href = article.url;
    linkElement.target = "_blank";
    linkElement.textContent = "article";
    liElement.textContent = `${article.title} | Link : `;
    liElement.appendChild(linkElement);
    imageElement.src = article.urlToImage;
    
    ULELEMENT.appendChild(liElement);
    ULELEMENT.appendChild(breakTag);
    ULELEMENT.appendChild(imageElement);
    ULELEMENT.appendChild(breakTag);
  })
}