import './styles/style.css'
import gsap from 'gsap'
import { ScrollTrigger } from 'gsap/all'
import Lenis from '@studio-freight/lenis'

gsap.registerPlugin(ScrollTrigger)

/**
 * Lenis scroll
 */
const lenis = new Lenis()

function raf(time) {
  lenis.raf(time)
  requestAnimationFrame(raf)
}

requestAnimationFrame(raf)


/**
 * Gsap animations
 */
const items = document.querySelectorAll('.slider__item')
const height = document.querySelector('.slider').offsetWidth
const width = (items.length - 1) * 100

document.querySelector('.sticky__wrapper').style.height = `${height / 16}rem`

gsap.to('.slider__item', {
    xPercent: -width,
    ease: 'none',
    scrollTrigger: {
        trigger: '.sticky__wrapper',
        start: 'top top',
        end: 'bottom bottom',
        scrub: true
    }
})

items.forEach(item => {

    gsap.to(item.querySelector('.slider__image'), {
        xPercent: 50,
        ease: 'none',
        scrollTrigger: {
            trigger: '.sticky__wrapper',
            start: 'top top',
            end: 'bottom bottom',
            scrub: true
        }
    })

})
