let arrow = document.getElementById("arrow")
let popup = document.getElementById("popup")

arrow.addEventListener("mouseover", () => {
    popup.classList.remove("not-visible")
})

arrow.addEventListener("mouseleave", () => {
    popup.classList.add("not-visible")
})