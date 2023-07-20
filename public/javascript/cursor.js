const mask = document.querySelector('.mask');

document.addEventListener('pointermove', (pos) => {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  y -= 0.044125 * window.innerWidth; // Changed to higher from 0.05

  if (window.innerWidth < 290) {
    y -= 30;
  } else if (window.innerWidth > 300 && window.innerWidth < 821) {
    y -= 10;
  } 
  mask.style.setProperty('--mouse-x', x + '%');
  mask.style.setProperty('--mouse-y', y + '%');
});
