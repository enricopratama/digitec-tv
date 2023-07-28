// const mask = document.querySelector('.mask');

// function updateMaskPosition(pos) {
//   let x = (pos.clientX / window.innerWidth) * 100;
//   let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

//   y -= 85; 

//   if(window.innerWidth >= 1450) {
//     y += window.innerWidth * 0.03;
//   } 

//   mask.style.setProperty('--mouse-x', x + '%');
//   mask.style.setProperty('--mouse-y', y + '%');
// }

// document.addEventListener('pointermove', (pos) => {
//   updateMaskPosition(pos);
// });

// window.addEventListener('resize', () => {

//   const currentPos = { clientX: event.clientX, clientY: event.clientY };
//   updateMaskPosition(currentPos);
// });

const mask = document.querySelector('.mask');

function updateMaskPosition(pos) {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  y -= 86; // Optimization for carousel on top (home screen)
  if (window.innerWidth < 992 && window.innerWidth > 609) {
    y += window.innerWidth * 0.0242;
  } else if (window.innerWidth < 608) {
    y += window.innerWidth * 0.0742;
  }

  mask.style.setProperty('--mouse-x', x + '%');
  mask.style.setProperty('--mouse-y', y + '%');
}

document.addEventListener('pointermove', (pos) => {
  updateMaskPosition(pos);
});

window.addEventListener('resize', () => {
  // Recalculate mask position when the window is resized
  const currentPos = { clientX: event.clientX, clientY: event.clientY };
  updateMaskPosition(currentPos);
});