const page01 = document.getElementById('page01');
const page02 = document.getElementById('page02');
const carLogo = document.getElementById('carLogo');
const carImage = document.getElementById('carImage');
const modelName = document.getElementById('modelName');
const carPanel = document.getElementById('carPanel');
const body = document.body;
const specsContainer = document.getElementById('specsContainer');
const specsGrid = document.getElementById('specsGrid');

let currentCar = 'porsche';
let specsVisible = false;

const carSpecs = {
  porsche: {
    specs: [
      { label: 'Top Speed', value: '214 mph' },
      { label: 'Acceleration', value: '0-60 in 2.5s' },
      { label: 'Engine', value: '4.6L V8 Hybrid' },
      { label: 'Horsepower', value: '887 hp' },
      { label: 'Torque', value: '944 lb-ft' },
      { label: 'Transmission', value: '7-Speed PDK' },
      { label: 'Weight', value: '3,692 lbs' },
      { label: 'Price', value: '$845,000' }
    ]
  },
  bugatti: {
    specs: [
      { label: 'Top Speed', value: '261 mph' },
      { label: 'Acceleration', value: '0-60 in 2.4s' },
      { label: 'Engine', value: '8.0L W16 Quad-Turbo' },
      { label: 'Horsepower', value: '1,479 hp' },
      { label: 'Torque', value: '1,180 lb-ft' },
      { label: 'Transmission', value: '7-Speed Dual-Clutch' },
      { label: 'Weight', value: '4,400 lbs' },
      { label: 'Price', value: '$3,000,000' }
    ]
  }
};

function toggleSpecs() {
  specsVisible = !specsVisible;
  
  if (specsVisible) {
    const car = carSpecs[currentCar];
    specsGrid.innerHTML = '';
    
    car.specs.forEach(spec => {
      const specItem = document.createElement('div');
      specItem.className = 'spec-item';
      specItem.innerHTML = `
        <div class="spec-label">${spec.label}</div>
        <div class="spec-value">${spec.value}</div>
      `;
      specsGrid.appendChild(specItem);
    });
    
    specsContainer.classList.add('show');
  } else {
    specsContainer.classList.remove('show');
  }
}

function hideSpecs() {
  specsVisible = false;
  specsContainer.classList.remove('show');
}

function showPorsche() {
  hideSpecs();
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
    currentCar = 'porsche';
    carPanel.style.opacity = '1';
  }, 400);
}

function showBugatti() {
  hideSpecs();
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
    currentCar = 'bugatti';
    carPanel.style.opacity = '1';
  }, 400);
}

carLogo.addEventListener('click', toggleSpecs);
page01.addEventListener('click', showPorsche);
page02.addEventListener('click', showBugatti);

showPorsche();