/* toggle style switcher */
const styleSwitcherToggle = document.querySelector('.style-switchertoggle');
styleSwitcherToggle.addEventListener('click', () => {
  document.querySelector('.style-switcher').classList.toggle('open');
});
// hide style - switcher on scroll
window.addEventListener('scroll', () => {
  if (document.querySelector('.style-switcher').classList.contains('open')) {
    document.querySelector('.style-switcher').classList.remove('open');
  }
});

/* theme colors */
const alternateStyle = document.querySelectorAll('.alternate-style');
function setActiveStyle(color) {
  alternateStyle.forEach((style) => {
    if (color === style.getAttribute('title')) {
      style.removeAttribute('disabled');
    } else {
      style.setAttribute('disabled', 'true');
    }
  });
}

/* theme light & dark mode */

const dayNight = document.querySelector('.day-night');
const titleH3Elements = document.querySelectorAll('.title-h3');

dayNight.addEventListener('click', () => {
  dayNight.querySelector('i').classList.toggle('fa-sun');
  dayNight.querySelector('i').classList.toggle('fa-moon');
  document.body.classList.toggle('dark');

  // Adiciona ou remove a classe 'white-text' com base na condição
  titleH3Elements.forEach(element => {
    element.classList.toggle('white-text');
  });
  
});
window.addEventListener('load', () => {  
  if (document.body.classList.contains('dark')) {
    dayNight.querySelector('i').classList.add('fa-sun');
    // Adiciona a classe 'white-text' em todos os elementos .title-h3 quando o modo escuro está ativado
    titleH3Elements.forEach(element => {
      element.classList.add('white-text');
    });
  } else {
    dayNight.querySelector('i').classList.add('fa-moon');
    // Remove a classe 'white-text' em todos os elementos .title-h3 quando o modo escuro está desativado
    titleH3Elements.forEach(element => {
      element.classList.remove('white-text');
    });
  }
});
