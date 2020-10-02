/*
  STRETCH GOAL
  STRETCH GOAL
  STRETCH GOAL

  If You've gotten this far, you're on your own! Although we will give you some hints:
    1. You will need to write a function that creates the carousel component, you will find the HTML below.
    2. You will need to grab a reference to all of the images
    3. Create a current index
    4. Those buttons are gonna need some click handlers
    5. Think of how you would animate this component. Make the cards slide in and out, or fade. It's up to you!
    6. Have fun!
*/

/* HTML:
  <div class="carousel">
    <div class="left-button"> < </div>
    <img src="https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg" />
    <img src="https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg" />
    <div class="right-button"> > </div>
  </div>
*/

const carCnt = document.querySelector(".carousel-container")
const IMGS = ["https://tk-assets.lambdaschool.com/ba687af4-3a1e-43d7-87b2-f30453264c9d_mountains.jpeg", "https://tk-assets.lambdaschool.com/8aa075b0-67cf-47ce-9a7f-8cc9d754675d_computer.jpeg", "https://tk-assets.lambdaschool.com/5b7441c6-6e4b-4feb-a4ec-8dd2eb76238a_trees.jpeg", "https://tk-assets.lambdaschool.com/0b770382-d0eb-4465-8bf2-692a79fcda71_turntable.jpeg"]

const createCarousel = () => {
    const carousel = document.createElement("div")
    carousel.classList.add("carousel")

    const leftBtn = document.createElement("div")
    leftBtn.classList.add("left-button")
    leftBtn.textContent = "<"

    const rightBtn = document.createElement("div")
    rightBtn.classList.add("right-button")
    rightBtn.textContent = ">"

    IMGS.forEach((img, idx) => {
        const image = document.createElement("img")
        image.classList.add("image")
        image.classList.add("fade")
        image.src = img

        if (idx === 0) {
            image.style.display = "block"
        }

        carousel.appendChild(image)
    })

    carousel.prepend(leftBtn)
    carousel.appendChild(rightBtn)

    return carousel
}

carCnt.appendChild(createCarousel())

const slides = Array.from(document.querySelectorAll(".image"))
const lBtn = document.querySelector(".left-button")
const rBtn = document.querySelector(".right-button")

var slideIdx = 0

lBtn.addEventListener("click", () => {
    slides[slideIdx].style.display = "none"
    slideIdx -= 1

    if (slideIdx < 0) {
        slideIdx = slides.length - 1
    }

    slides[slideIdx].style.display = "block"
})

rBtn.addEventListener("click", () => {
    slides[slideIdx].style.display = "none"
    slideIdx += 1

    if (slideIdx > slides.length - 1) {
        slideIdx = 0
    }

    slides[slideIdx].style.display = "block"
})