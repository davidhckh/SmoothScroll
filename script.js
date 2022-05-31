const scrollWrap = document.querySelector('.smooth-scroll-wrapper')

const height = () => scrollWrap.getBoundingClientRect().height
const speed = .08

let offset = 0

// Scroll
const smoothScroll = () => {
    offset += (window.pageYOffset - offset) * speed

    scrollWrap.style.transform = 'translateY(-' + offset + 'px) translateZ(0)'

    window.requestAnimationFrame(smoothScroll)
}
smoothScroll()

// Resize
const handleResize = () => {
    document.body.style.height = Math.floor(height()) + 'px'
}
handleResize()

window.addEventListener('resize', handleResize)