const mask = document.querySelector('.mask');

document.addEventListener('pointermove', (pos) => {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  y -= 0.058125 * window.innerWidth;

  if (window.innerWidth < 290) {
    y -= 30;
  }

  mask.style.setProperty('--mouse-x', x + '%');
  mask.style.setProperty('--mouse-y', y + '%');
});