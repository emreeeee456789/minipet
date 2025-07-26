// Supabase bağlantısı
import { createClient } from 'https://cdn.jsdelivr.net/npm/@supabase/supabase-js/+esm';

const supabaseUrl = 'https://ghtmaqmodwrumxpvgkjl.supabase.co';
const supabaseKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...'; // Key'inin tamamını sende zaten var
const supabase = createClient(supabaseUrl, supabaseKey);

// Ülke görselleri (gerekirse artır)
const countryImages = {
  Japonya: 'japonya.jpg',
  Fransa: 'fransa.jpg',
  Türkiye: 'turkiye.jpg'
};

// Listeyi ekrana bastır
async function maceraListesiniGoster() {
  const { data, error } = await supabase
    .from('macera')
    .select('*')
    .order('tarih', { ascending: false });

  const liste = document.getElementById('visitedList');
  if (!liste) return;

  if (error) {
    console.error("Supabase Hatası:", error.message);
    liste.innerHTML = `<li>Hata: ${error.message}</li>`;
    return;
  }

  if (!data || data.length === 0) {
    liste.innerHTML = '<li>Henüz hiç macera kaydı yok!</li>';
    return;
  }

  liste.innerHTML = '';
  data.forEach(entry => {
    const li = document.createElement('li');

    const tarihStr = entry.tarih
      ? new Date(entry.tarih).toLocaleString('tr-TR')
      : 'Tarih yok';

    const imageUrl = countryImages[entry.ulke] || 'default.jpg';

    li.innerHTML = `
      <img src="assets/${imageUrl}" alt="${entry.ulke}" style="width:100px; height:auto; border-radius:8px; margin-bottom:6px;"><br/>
      <strong>${entry.ulke}</strong><br/>
      <small>${tarihStr}</small>
    `;

    liste.appendChild(li);
  });
}

// Sayfa yüklenince başlat
document.addEventListener('DOMContentLoaded', maceraListesiniGoster);
