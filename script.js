import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ghtmaqmodwrumxpvgkjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodG1hcW1vZHdydW14cHZna2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDYzNzgsImV4cCI6MjA2OTEyMjM3OH0.5pFJRGOmA-vlJ0rNcdujGsxx-KLJAYyveiTuuA0QRIU'; // senin anahtarın
const supabase = createClient(supabaseUrl, supabaseKey);

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

async function maceraListesiniGoster() {
  const { data, error } = await supabase
    .from('macera')
    .select('*')
    .order('tarih', { ascending: false });

  const liste = document.getElementById('visitedList');
  if (data && liste) {
    liste.innerHTML = '';
    data.forEach(entry => {
      const li = document.createElement('li');
      li.textContent = `${entry.ulke} (${new Date(entry.tarih).toLocaleString()})`;
      liste.appendChild(li);
    });
  }
}

// Sayfa yüklendiğinde çağır
document.addEventListener('DOMContentLoaded', maceraListesiniGoster);


window.onload = updateBars;
