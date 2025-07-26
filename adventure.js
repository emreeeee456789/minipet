// Supabase bağlantısı
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ghtmaqmodwrumxpvgkjl.supabase.co'; // <- BURAYI KENDİ URL'İNLE DEĞİŞTİR
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodG1hcW1vZHdydW14cHZna2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDYzNzgsImV4cCI6MjA2OTEyMjM3OH0.5pFJRGOmA-vlJ0rNcdujGsxx-KLJAYyveiTuuA0QRIU'; // <- BURAYI KENDİ API KEY'İNLE DEĞİŞTİR
const supabase = createClient(supabaseUrl, supabaseKey);

// Ülke adlarına göre görsel URL'leri
const countryImages = {
  Japonya: 'japonya.jpg',
};

// Listeyi ekrana bastır
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

      // Tarihi düzgün formatla
      const tarihStr = new Date(entry.tarih).toLocaleString('tr-TR');

      // Ülkeye göre görsel al
      const imageUrl = countryImages[entry.ulke] || 'default.jpg';

      li.innerHTML = `
        <img src="assets/${imageUrl}" alt="${entry.ulke}" style="width:100px; height:auto; border-radius:8px; margin-bottom:6px;"><br/>
        <strong>${entry.ulke}</strong><br/>
        <small>${tarihStr}</small>
      `;
      liste.appendChild(li);
    });
  } else if (error) {
    console.error("Supabase Hatası:", error.message);
  }
}

// Sayfa yüklendiğinde çalıştır
document.addEventListener('DOMContentLoaded', maceraListesiniGoster);
