let count = 0;

const value = document.querySelector('#value');
const btns = document.querySelectorAll('.btn');

// console.log(btn);

btns.forEach(function (btns) {
  btns.addEventListener('click', function (e) {
    if (e.currentTarget.classList.contains('increase')) {
      count++;
    } else if (e.currentTarget.classList.contains('decrease')) {
      count--;
    } else {
      count = 0;
    }
    value.textContent = count;
    if (count > 0) {
      value.style.color = 'green';
    } else if (count < 0) {
      value.style.color = 'red';
    } else {
      value.style.color = 'black';
    }
  });
});
