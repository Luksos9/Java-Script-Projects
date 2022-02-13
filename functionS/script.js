'use strict';

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
  header.addEventListener('mouseover', function () {
    header.style.color = 'yellow';
  });
  header.addEventListener('mouseout', function () {
    header.style.color = 'pink';
  });
})();
