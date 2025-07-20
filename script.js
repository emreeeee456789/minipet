// script.js
let hunger = 50;
let happiness = 50;
let cleanliness = 50;

function updateStatus() {
  document.getElementById('hunger').innerText = hunger;
  document.getElementById('happiness').innerText = happiness;
  document.getElementById('cleanliness').innerText = cleanliness;
}

function feed() {
  const food = document.getElementById('food-select').value;
  if(food === 'kedi-mamasi') {
    hunger = Math.min(hunger + 20, 100);
    happiness += 5;
    showMessage('Mino kedi maması yedi, afiyet olsun!');
  } else if(food === 'balik') {
    hunger = Math.min(hunger + 30, 100);
    happiness += 10;
    showMessage('Mino balık yedi, çok mutlu!');
  } else if(food === 'tavuk') {
    hunger = Math.min(hunger + 25, 100);
    happiness += 7;
    showMessage('Mino tavuk yedi, lezzetliydi!');
  }
  updateStatus();
}

function takeBath() {
  cleanliness = 100;
  happiness += 10;
  showMessage('Mino güzelce duş aldı, tertemiz!');
  updateStatus();
}

function play() {
  happiness = Math.min(happiness + 15, 100);
  cleanliness = Math.max(cleanliness - 10, 0);
  showMessage('Mino oynuyor ve çok eğleniyor!');
  updateStatus();
}

function showMessage(msg) {
  const msgEl = document.getElementById('message');
  msgEl.innerText = msg;
  setTimeout(() => {
    msgEl.innerText = '';
  }, 3000);
}

updateStatus();
