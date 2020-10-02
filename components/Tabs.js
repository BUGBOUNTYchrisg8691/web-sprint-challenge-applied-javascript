// STEP 2: Create tabs
// -----------------------
// Using axios send a GET request to the address: https://lambda-times-api.herokuapp.com/topics
// Once the data is resolved use console logs or breakpoints to review the structure.
// Iterate over the topics creating a new tab for each topic, and appending it to the DOM
// under the div.topics element.
//
//  Each tab should look like this:
//    <div class="tab">topic here</div>
//
// NOTE: you do _not_ need to install axios as it's included in the HTML via script element

const URL = "https://lambda-times-api.herokuapp.com/topics"
const tabs = document.querySelector(".topics")

axios.get(URL).then(resp => resp.data.topics.forEach(topic => {
    tabs.appendChild(createTab(topic))
})).catch(err => console.log(err))

const createTab = (data) => {
    const tab = document.createElement("div")
    tab.classList.add("tab")
    tab.textContent = data

    tab.addEventListener("click", (e) => {
        const cards = document.querySelectorAll(".card")
        Array.from(cards).forEach(el => {
            el.style.display = "flex"
        })
        Array.from(cards).forEach(el => {
            if (!el.classList.contains(e.target.textContent)) {
                el.style.display = "none"
            }
        })
    })

    return tab
}

const all = document.createElement("div")
all.classList.add("tab")
all.textContent = "all"

all.addEventListener("click", () => {
    Array.from(document.querySelectorAll(".card"))
        .forEach(el => {
            el.style.display = "flex"
        })
})

tabs.appendChild(all)