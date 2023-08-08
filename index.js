const items = document.querySelectorAll(".slider .item")
const prev = document.getElementById("prev")
const next = document.getElementById("next")


let active = 3
const sliderFn = () => {
    let stt = 0

    items[active].style.transform = `none`;
    items[active].style.zIndex = 1
    items[active].style.filter = `none`
    items[active].style.opacity = 1

    //The loop will work after click the next button
    for (let i = active + 1; i < items.length; i++) {
        stt++
        items[i].style.transform = `translateX(${ 120 * stt }px) scale(${ 1 - 0.2 * stt })`;
        items[i].style.zIndex = -stt
        items[i].style.filter = `blur(1px)`
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

        //The loop will work after click the next button
    stt = 0
    for (let i = active - 1; i >= 0; i--) {
        stt++
        items[i].style.transform = `translateX(${ -120 * stt }px) scale(${ 1 - 0.2 * stt })`;
        items[i].style.zIndex = -stt
        items[i].style.filter = `blur(1px)`
        items[i].style.opacity = stt > 2 ? 0 : 0.6;
    }

}

// the function will call after loade the window
sliderFn()

// 
next.addEventListener("click", () => {
    active = active + 1 < items.length ? active + 1 : active
    sliderFn()
})
prev.addEventListener("click", () => {
    active = active - 1 >= 0 ? active - 1 : active
    sliderFn()
})