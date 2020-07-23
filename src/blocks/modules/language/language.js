const language = document.querySelector('.language')
const languageList = document.querySelector('.language__list');
const languageBtn = document.querySelector('.language__current')
languageBtn.addEventListener('click', () => {
  languageList.classList.toggle('spaceInDown');
  languageList.classList.toggle('spaceOutDown');
  language.classList.toggle('language--open');
})
