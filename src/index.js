import './index.scss';

const button = document.querySelector('.container__button');
const prices = Array.from(document.querySelectorAll('#price'));
const monthlyArray = ['&dollar;19.99', '&dollar;24.99', '&dollar;39.99'];
const annualArray = ['&dollar;199.99', '&dollar;249.99', '&dollar;399.99'];
let tracker = true;

button.addEventListener('click', () => {
  if (tracker) {
    button.style.justifyContent = 'flex-end';
    prices.forEach((cur, i) => {
      cur.innerHTML = monthlyArray[i];
    });
    tracker = false;
  } else {
    button.style.justifyContent = 'flex-start';
    prices.forEach((cur, i) => {
      cur.innerHTML = annualArray[i];
    });
    tracker = true;
  }
});
