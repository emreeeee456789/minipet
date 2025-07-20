const countries = [
  { name: "Türkiye", image: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Turkey_Istanbul_Bosphorus_Bridge.jpg" },
  { name: "Japonya", image: "https://upload.wikimedia.org/wikipedia/commons/0/03/Tokyo_Tower_and_surrounding_area.jpg" },
  { name: "Fransa", image: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Paris_Night.jpg" },
  { name: "Brezilya", image: "https://upload.wikimedia.org/wikipedia/commons/1/17/Christ_on_Corcovado_mountain.JPG" },
  { name: "İtalya", image: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Colosseo_2020.jpg" }
];

let visited = [];

function startAdventure() {
  const random = countries[Math.floor(Math.random() * countries.length)];

  // Aynı yere tekrar gitmesin
  if (visited.includes(random.name)) {
    alert(`Miniğimiz zaten ${random.name}’ye gitmişti! 🌍`);
    return;
  }

  visited.push(random.name);

  // Görseli göster
  const img = document.getElementById("countryImage");
  img.src = random.image;
  img.style.display = "block";

  // Listeye ekle
  const list = document.getElementById("visitedList");
  const li = document.createElement("li");
  li.textContent = `Miniğimiz ${random.name}'yi gezdi!`;
  list.appendChild(li);
}
