const countries = [
  { name: "Türkiye", image: "turkiye.jpg" },
  { name: "Fransa", image: "fransa.jpg" },
  { name: "Japonya", image: "japonya.jpg" }
];

const random = countries[Math.floor(Math.random() * countries.length)];
document.getElementById("countryName").textContent = `${random.name}’ye Gitti!`;
document.getElementById("countryImage").src = random.image;
document.getElementById("countryImage").alt = random.name;
