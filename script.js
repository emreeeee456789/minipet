let food = 100;
let sleepLevel = 100;
let cleanliness = 100;

const countries = [
  { name: "Türkiye", image: "turkiye.jpg" },
  { name: "Fransa", image: "fransa.jpg" },
  { name: "Japonya", image: "japonya.jpg" }
];

let visited = [];

function updateBars() {
  document.getElementById("foodBar").style.width = food + "%";
  document.getElementById("sleepBar").style.width = sleepLevel + "%";
  document.getElementById("cleanBar").style.width = cleanliness + "%";
}

function feed() {
  food = Math.min(food + 10, 100);
  updateBars();
}

function sleep() {
  sleepLevel = Math.min(sleepLevel + 10, 100);
  updateBars();
}

function wash() {
  cleanliness = Math.min(cleanliness + 10, 100);
  updateBars();
}

function degradeStats() {
  food = Math.max(food - 1, 0);
  sleepLevel = Math.max(sleepLevel - 1, 0);
  cleanliness = Math.max(cleanliness - 1, 0);
  updateBars();
}

setInterval(degradeStats, 5000); // 5 saniyede bir azalsın

function startAdventure() {
  const random = countries[Math.floor(Math.random() * countries.length)];

  if (!visited.includes(random.name)) {
    visited.push(random.name);

    const img = document.getElementById("countryImage");
    img.src = random.image;
    img.style.display = "block";
    img.alt = random.name;

    const list = document.getElementById("visitedList");
    const li = document.createElement("li");
    li.textContent = random.name;
    list.appendChild(li);
  } else {
    alert(`${random.name} zaten ziyaret edildi!`);
  }
}

window.onload = updateBars;
