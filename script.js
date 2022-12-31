'use strict';

const btnOpen = document.querySelector('.open');
const btnClose = document.querySelector('.close');
const containerMain = document.querySelector('.container-main');

btnOpen.addEventListener('click', () =>
  containerMain.classList.add('show-nav')
);

btnClose.addEventListener('click', () => {
  containerMain.classList.remove('show-nav');
});
