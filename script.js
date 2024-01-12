let arrow = document.getElementById("arrow")
let popup = document.getElementById("popup")

arrow.addEventListener("mouseover", () => {
    popup.classList.remove("not-visible")
})

arrow.addEventListener("mouseleave", () => {
    popup.classList.add("not-visible")
})

// Mobile design logic 

let arrow_mobile = document.getElementById("arrow-mobile-container")
let container = document.getElementById("avatar-name-arrow-container-mobile") //on-hover
let avatar_name_date = document.getElementById("not-hover-design")
let icons_container = document.getElementById("on-hover-design")

arrow_mobile.addEventListener("mouseover", () => {
    container.classList.add("on-hover")
    avatar_name_date.classList.add("not-visible-mobile")
    icons_container.classList.remove("not-visible-mobile")
})

arrow_mobile.addEventListener("mouseleave", () => {
    container.classList.remove("on-hover")
    avatar_name_date.classList.remove("not-visible-mobile")
    icons_container.classList.add("not-visible-mobile")
})