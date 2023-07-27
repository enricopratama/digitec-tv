const mask = document.querySelector('.mask');

function updateMaskPosition(pos) {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  y -= window.innerWidth * 0.0575; // Optimization for home screen

  if(window.innerWidth >= 1450) {
    y += window.innerWidth * 0.03;
  } 

  mask.style.setProperty('--mouse-x', x + '%');
  mask.style.setProperty('--mouse-y', y + '%');
}

document.addEventListener('pointermove', (pos) => {
  updateMaskPosition(pos);
});

window.addEventListener('resize', () => {

  const currentPos = { clientX: event.clientX, clientY: event.clientY };
  updateMaskPosition(currentPos);
});