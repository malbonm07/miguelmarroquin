export let scrollEffect = (el, distance, width) => {
    if(window.scrollY > distance) {
      el.style = `width: ${width}%`
      el.childNodes[0].classList.add('animationSkill')
    }
    if(window.scrollY < distance) {
      el.style = "width: 0%"
      el.childNodes[0].classList.remove('animationSkill')
    }
}