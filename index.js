
const nodes = document.querySelectorAll(".item")
const prev = document.getElementById("prev")
const next = document.getElementById("next")

let active = 3
const fireFn = () => {
    let count = 0

    nodes[active].style.transform = `none`
    nodes[active].style.zIndex = 1
    nodes[active].style.filter = `none`
    nodes[active].style.opacity = 1;

    for (let i = active + 1; i < nodes.length; i++) {
        count++;
        nodes[i].style.transform = `translateX(${ 120 * count }px) scale(${ 1 - 0.2 * count }) `
        nodes[i].style.zIndex = -count
        nodes[i].style.filter = `blur(2px)`
        nodes[i].style.opacity = count > 2 ? 0 : 0.6;
    }

    count = 0
    for (let i = active - 1; i >= 0; i--) {
        count++;
        nodes[i].style.transform = `translateX(${ -120 * count }px) scale(${ 1 - 0.2 * count })`
        nodes[i].style.zIndex = -count
        nodes[i].style.filter = `blur(2px)`
        nodes[i].style.opacity = count > 2 ? 0 : 0.6;
    }
}

fireFn()

next.addEventListener('click', () => {
    active = active + 1 < nodes.length ? active + 1 : active
    fireFn()
})

prev.addEventListener("click", () => {
    active = active - 1 >= 0 ? active - 1 : active
    fireFn()
})