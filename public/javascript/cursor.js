const mask = document.querySelector('.mask');

document.addEventListener('pointermove', (pos) => {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  if (window.innerWidth >= 1024) {
    y -= 77;
  } else if (window.innerWidth <= 1023 && window.innerWidth >= 640) {
    y -= 50;
  } else if (window.innerWidth <= 639) {
    y -= 30;
  }

  /*
  y -= Math.max(0, Math.min(42, (window.innerWidth - 640) / 34));
  */

  mask.style.setProperty('--mouse-x', x + '%');
  mask.style.setProperty('--mouse-y', y + '%');
});