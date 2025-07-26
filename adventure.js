import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://XXX.supabase.co';
const supabaseKey = 'public-anon-key';
const supabase = createClient(supabaseUrl, supabaseKey);

async function miniMaceraBaslat(ulke) {
  console.log("Butona tıklandı, ülke:", ulke);

  const { data, error } = await supabase
    .from('macera')
    .insert([{ ulke: ulke, tarih: new Date().toISOString() }]);

  if (error) {
    console.error('Supabase hatası:', error);
    alert('Hata: ' + error.message);
  } else {
    alert(`Miniğimiz ${ulke} ülkesine gönderildi! 🌍`);
    window.location.href = "adventure.html";
  }
}

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

