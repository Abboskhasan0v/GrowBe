
const introHovers = document.querySelectorAll(".intro__hovers")

window.addEventListener("mousemove", (event) => {
        introHovers.forEach(item => {
            const speed = item.getAttribute("data-speed")
            const X = event.screenX / 40 * speed / 2
            const Y = event.screenY / 40 * speed / 2
            item.style.transform = `translate(${X}px, ${Y}px)`
        });
})
