// STEP 1: Create a Header component.
// -----------------------
// Write a function that takes no arguments and returns the markup you see below:
//
//  <div class="header">
//    <span class="date">MARCH 28, 2020</span>
//    <h1>Lambda Times</h1>
//    <span class="temp">98°</span>
//  </div>
//
// Use your function to create a header
// and append it to the DOM inside the div.header-container

const months = ["JANUARY", "FEBRUARY", "MARCH", "APRIL", "MAY", "JUNE", "JULY", "AUGUST", "SEPTEMBER", "OCTOBER", "NOVEMBER", "DECEMBER"]
let d = new Date()

function Header() {
    const header = document.createElement("div")
    header.classList.add("header")

    const date = document.createElement("span")
    date.classList.add("date")
    date.textContent = `${months[d.getMonth() - 1]} ${d.getDate()}, ${d.getFullYear()}`

    const h1 = document.createElement("h1")
    h1.textContent = "Lambda Times"

    const temp = document.createElement("span")
    temp.classList.add("temp")
    temp.textContent = "98 \u00B0"

    header.appendChild(date)
    header.appendChild(h1)
    header.appendChild(temp)

    return header
}

document.querySelector(".header-container").appendChild(Header())