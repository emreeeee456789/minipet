document.addEventListener('DOMContentLoaded', function() {
  let hunger = 50;
  let happiness = 50;
  let cleanliness = 50;

  function updateStatus() {
    document.getElementById('hunger').innerText = hunger;
    document.getElementById('happiness').innerText = happiness;
    document.getElementById('cleanliness').innerText = cleanliness;
  }

  function showMessage(msg) {
    const msgEl = document.getElementById('message');
    msgEl.innerText = msg;
    setTimeout(() => {
      msgEl.innerText = '';
    }, 3000);
  }

  window.feed = function() {
    const food = document.getElementById('food-select').value;
    if(food === 'kedi-mamasi') {
      hunger = Math.min(hunger + 20, 100);
      happiness = Math.min(happiness + 5, 100);
      showMessage('Mino kedi maması yedi, afiyet olsun!');
    } else if(food === 'balik') {
      hunger = Math.min(hunger + 30, 100);
      happiness = Math.min(happiness + 10, 100);
      showMessage('Mino balık yedi, çok mutlu!');
    } else if(food === 'tavuk') {
      hunger = Math.min(hunger + 25, 100);
      happiness = Math.min(happiness + 7, 100);
      showMessage('Mino tavuk yedi, lezzetliydi!');
    }
    updateStatus();
  };

  window.takeBath = function() {
    cleanliness = 100;
    happiness = Math.min(happiness + 10, 100);
    showMessage('Mino güzelce duş aldı, tertemiz!');
    updateStatus();
  };

  window.play = function() {
    happiness = Math.min(happiness + 15, 100);
    cleanliness = Math.max(cleanliness - 10, 0);
    showMessage('Mino oynuyor ve çok eğleniyor!');
    updateStatus();
  };

  updateStatus();
});
