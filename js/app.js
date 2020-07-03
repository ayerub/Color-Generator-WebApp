const color = document.querySelector('.color-window');
let number = 0;

color.addEventListener('mousemove', onHover);
color.addEventListener('click', onClick);
color.addEventListener('wheel', onWheel);

function onHover(e) {
  const rgb = document.querySelector('.rgb-value');

  rgb.textContent = `RGB(${e.offsetY}, ${e.offsetX}, ${number})`;
  color.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX}, ${number}`;
  return rgb;
}

function onClick(e) {
  const container = document.querySelector('.saved-rgb');

  let colorDiv = document.createElement('div');
  colorDiv.className = 'color-div';
  
  let colorBox = document.createElement('div');
  colorBox.className = 'color-box';
  colorBox.style.backgroundColor = `rgb(${e.offsetY}, ${e.offsetX}, ${number}`;

  let activeColor = document.createElement('h3');
  activeColor.textContent = `RGB(${e.offsetY}, ${e.offsetX}, ${number})`;
  activeColor.className = 'saved-colors';
  
  container.appendChild(colorDiv);
  colorDiv.appendChild(colorBox);
  colorDiv.append(activeColor);
}

function onWheel(e) {
  let delta = e.deltaY;

  if (delta < 0 && number < 255) {
    number += 5;
  } else if (delta > 0 && number > 0) {
    number -= 5;
  }
}
