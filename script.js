const card_share = document.querySelector('.card__share');
const btn = document.querySelector('.about__button');

btn.addEventListener('click', () => {
  card_share.classList.toggle('show');
});
