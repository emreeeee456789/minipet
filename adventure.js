// Supabase bağlantısı
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://SENIN_PROJECT_URL.supabase.co';
const supabaseKey = 'SENIN_PUBLIC_ANON_KEY';
const supabase = createClient(supabaseUrl, supabaseKey);

// Miniğimizi maceraya yolla
async function miniMaceraBaslat(ulke) {
  const { data, error } = await supabase
    .from('macera')
    .insert([{ ulke: ulke, tarih: new Date().toISOString() }]);

  if (error) {
    alert('Bir hata oluştu: ' + error.message);
  } else {
    alert(`Miniğimiz ${ulke} ülkesine gönderildi! 🌍`);
    window.location.href = "adventure.html";
  }
}

// Sayfa yüklendiğinde butona tıklanırsa
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

});
