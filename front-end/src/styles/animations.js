import { gsap } from 'gsap'

export const fadeInFromLeft = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, x: -200 },
    { opacity: 1, x: 0, duration: 1 }
  )
}

export const fadeInFromBottom = (element) => {
  gsap.fromTo(
    element,
    { opacity: 0, y: 100 },
    { opacity: 1, y: 0, duration: 1 }
  )
}
