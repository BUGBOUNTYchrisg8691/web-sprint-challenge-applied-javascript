// STEP 3: Create article cards.
// -----------------------
// Send an HTTP GET request to the following address: https://lambda-times-api.herokuapp.com/articles
// Study the response data you get back, closely.
// You will be creating a card for each article in the response.
// This won't be as easy as just iterating over an array though.
//
// Write a function that takes a single article object and returns the following markup:
//
// <div class="card">
//   <div class="headline">{Headline of article}</div>
//   <div class="author">
//     <div class="img-container">
//       <img src={url of authors image} />
//     </div>
//     <span>By {author's name}</span>
//   </div>
// </div>
//
// Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
//
// Use your function to create a card for each of the articles, and append each card to the DOM.

const cardsContainer = document.querySelector(".cards-container")
const URL = "https://lambda-times-api.herokuapp.com/articles"

axios.get(URL).then(resp => {
    Object.keys(resp.data.articles).forEach(topic => {
        resp.data.articles[topic].forEach(art => {
            if (topic === "node") {
                cardsContainer.appendChild(createCard(art, "node.js"))
            } else {
                cardsContainer.appendChild(createCard(art, topic))
            }
        })
    })
}).catch(err => renderErr(err))

const createCard = (data, topic) => {
    const card = document.createElement("div")
    card.classList.add("card")
    card.classList.add(topic)

    const headline = document.createElement("div")
    headline.classList.add("headline")
    headline.textContent = data.headline

    const author = document.createElement("div")
    author.classList.add("author")

    const imgContainer = document.createElement("div")
    imgContainer.classList.add("img-container")

    const img = document.createElement("img")
    img.src = data.authorPhoto

    const span = document.createElement("span")
    span.textContent = `By ${data.authorName}`

    imgContainer.appendChild(img)

    author.appendChild(imgContainer)
    author.appendChild(span)

    card.appendChild(headline)
    card.appendChild(author)

    card.addEventListener("click", (e) => {
        console.log(headline.textContent)
    })

    return card
}

const renderErr = (data) => {
    const div = document.createElement("div")
    div.classList.add("error")

    const h2 = document.createElement("h2")
    h2.textContent = `Sorry, your API ${data.message}`
    div.appendChild(h2)

    document.querySelector(".errors-container").appendChild(div)
}