const mask = document.querySelector('.mask');

function updateMaskPosition(pos) {
  let x = (pos.clientX / window.innerWidth) * 100;
  let y = ((pos.clientY + window.pageYOffset) / window.innerHeight) * 100;

  // y -= 86; // Optimization for carousel on top (home screen)
  // if (window.innerWidth < 992 && window.innerWidth > 609) {
  //   y += window.innerWidth * 0.0242;
  // } else if (window.innerWidth < 608) {
  //   y += window.innerWidth * 0.0742;
  // }

  if (window.innerWidth >= 1280) {
    y -= 78;
  } else if (window.innerWidth < 1280 && window.innerWidth > 1020) {
    y -= 60;
  } else if (window.innerWidth < 1020 && window.innerWidth > 920) {
    y -= 55;
  } else if (window.innerWidth < 920 && window.innerWidth > 820) {
    y -= 45; 
  } else if (window.innerWidth < 820 && window.innerWidth > 720) {
    y -= 45; 
  } else if (window.innerWidth < 720 && window.innerWidth > 620) {
    y -= 35; 
  } else if (window.innerWidth < 620 && window.innerWidth > 520) {
    y -= 35; 
  } else if (window.innerWidth < 520 && window.innerWidth > 220) {
    y -= 30; 
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