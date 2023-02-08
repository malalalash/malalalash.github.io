const mainContainer = document.querySelector(".main-container")
const thanksContainer = document.querySelector(".thank-you")
const submit = document.getElementById("submit")
const rateAgain = document.getElementById("rate-again")
const rating = document.getElementById("rating")
const rates = document.querySelectorAll(".btn")

submit.addEventListener("click", () => {
    thanksContainer.classList.remove("hidden")
    mainContainer.classList.add("hidden")
})

rateAgain.addEventListener("click", () => {
    thanksContainer.classList.add("hidden")
    mainContainer.classList.remove("hidden")
})

rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.innerHTML = rate.innerHTML
    })
})
