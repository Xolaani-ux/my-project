const page01 = document.getElementById('page01');
const page02 = document.getElementById('page02');
const carLogo = document.getElementById('carLogo');
const carImage = document.getElementById('carImage');
const modelName = document.getElementById('modelName');
const carPanel = document.getElementById('carPanel');
const body = document.body;

function showPorsche() {
  carPanel.style.opacity = '0';

  setTimeout(() => {
    carLogo.src = 'porsche-logo.png';
    carLogo.style.filter = 'none';
    carImage.src = 'porsche-car.png';
    modelName.textContent = 'STINGER';
    modelName.className = 'model-name stinger';

    page01.classList.add('active');
    page02.classList.remove('active');

    body.style.backgroundColor = '#ffffff';
    body.classList.remove('bugatti');

    carPanel.style.opacity = '1';
  }, 400);
}

function showBugatti() {
  carPanel.style.opacity = '0';

  setTimeout(() => {
    carLogo.src = 'bugatti-logo.png';
    carLogo.style.filter = 'invert(1)';
    carImage.src = 'bugatti-car.png';
    modelName.textContent = 'CHIRON';
    modelName.className = 'model-name agera';

    page01.classList.remove('active');
    page02.classList.add('active');

    body.style.backgroundColor = '#1A1A1A';
    body.classList.add('bugatti');

    carPanel.style.opacity = '1';
  }, 400);
}

page01.addEventListener('click', showPorsche);
page02.addEventListener('click', showBugatti);

showPorsche();