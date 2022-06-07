const API_KEY = "pub_810759e5175cb001469d3860059de22c3945"
const TOPIC = "coding"
const URL = `https://newsdata.io/api/1/news?apikey=${API_KEY}&language=en&q=${TOPIC}`
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
      displayArticles(data.results)
    })
}

const displayArticles = (articles) => {
  articles.forEach(article => {
    let liElement = document.createElement("li");
    let linkElement = document.createElement("a");
    let breakTag = document.createElement("br")
    let imageElement = document.createElement("img")
    linkElement.href = article.link;
    linkElement.target = "_blank";
    linkElement.textContent = "article";
    liElement.textContent = `${article.title} | Link : `;
    liElement.appendChild(linkElement);
    if (article.image_url) imageElement.src = article.image_url;
    
    
    ULELEMENT.appendChild(liElement);
    ULELEMENT.appendChild(breakTag);
    ULELEMENT.appendChild(imageElement);
    ULELEMENT.appendChild(breakTag);
  })
}