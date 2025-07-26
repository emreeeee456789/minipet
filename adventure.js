// Supabase bağlantısı
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ghtmaqmodwrumxpvgkjl.supabase.co'; // BURAYI DEĞİŞTİR
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdodG1hcW1vZHdydW14cHZna2psIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTM1NDYzNzgsImV4cCI6MjA2OTEyMjM3OH0.5pFJRGOmA-vlJ0rNcdujGsxx-KLJAYyveiTuuA0QRIU'; // BURAYI DEĞİŞTİR
const supabase = createClient(supabaseUrl, supabaseKey);

// Miniğimizi maceraya yolla
async function miniMaceraBaslat(ulke) {
  const { data, error } = await supabase
    .from('macera')
    .insert([{ ulke: ulke }]);

  if (error) {
    alert('Bir hata oluştu: ' + error.message);
  } else {
    alert(`Miniğimiz ${ulke} ülkesine gönderildi! 🌍`);
  }
}

// HTML'deki buton tıklanınca çalışsın
document.addEventListener('DOMContentLoaded', () => {
  const maceraBtn = document.getElementById('maceraBtn');
  if (maceraBtn) {
    maceraBtn.addEventListener('click', () => {
      const ulke = prompt("Miniğimiz hangi ülkeye gitsin?");
      if (ulke) {
        miniMaceraBaslat(ulke);
      }
    });
  }
});
