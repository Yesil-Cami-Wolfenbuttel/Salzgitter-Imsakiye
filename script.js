// Gebetszeiten aus der PDF für Salzgitter extrahiert und als Objekt gespeichert
const prayerTimes = [
  { date: '2025-03-01', imsak: '05:12', gunes: '06:58', zuhr: '12:36', asr: '15:24', maghrib: '18:04', isha: '19:37' },
  { date: '2025-03-02', imsak: '05:10', gunes: '06:56', zuhr: '12:36', asr: '15:26', maghrib: '18:06', isha: '19:38' },
  { date: '2025-03-03', imsak: '05:08', gunes: '06:53', zuhr: '12:36', asr: '15:27', maghrib: '18:08', isha: '19:40' },
  { date: '2025-03-04', imsak: '05:06', gunes: '06:51', zuhr: '12:35', asr: '15:28', maghrib: '18:10', isha: '19:42' },
  { date: '2025-03-05', imsak: '05:03', gunes: '06:49', zuhr: '12:35', asr: '15:29', maghrib: '18:11', isha: '19:44' },
  { date: '2025-03-06', imsak: '05:01', gunes: '06:47', zuhr: '12:35', asr: '15:31', maghrib: '18:13', isha: '19:46' },
  { date: '2025-03-07', imsak: '04:59', gunes: '06:45', zuhr: '12:35', asr: '15:32', maghrib: '18:15', isha: '19:47' },
  { date: '2025-03-08', imsak: '04:56', gunes: '06:42', zuhr: '12:35', asr: '15:33', maghrib: '18:17', isha: '19:49' },
  { date: '2025-03-09', imsak: '04:54', gunes: '06:40', zuhr: '12:34', asr: '15:34', maghrib: '18:19', isha: '19:51' },
  { date: '2025-03-10', imsak: '04:51', gunes: '06:38', zuhr: '12:34', asr: '15:35', maghrib: '18:20', isha: '19:53' },
  { date: '2025-03-11', imsak: '04:49', gunes: '06:35', zuhr: '12:34', asr: '15:37', maghrib: '18:22', isha: '19:55' },
  { date: '2025-03-12', imsak: '04:47', gunes: '06:33', zuhr: '12:33', asr: '15:38', maghrib: '18:24', isha: '19:57' },
  { date: '2025-03-13', imsak: '04:44', gunes: '06:31', zuhr: '12:33', asr: '15:39', maghrib: '18:26', isha: '19:59' },
  { date: '2025-03-14', imsak: '04:42', gunes: '06:28', zuhr: '12:33', asr: '15:40', maghrib: '18:27', isha: '20:01' },
  { date: '2025-03-15', imsak: '04:39', gunes: '06:26', zuhr: '12:33', asr: '15:41', maghrib: '18:29', isha: '20:02' },
  { date: '2025-03-16', imsak: '04:36', gunes: '06:24', zuhr: '12:32', asr: '15:42', maghrib: '18:31', isha: '20:04' },
  { date: '2025-03-17', imsak: '04:34', gunes: '06:22', zuhr: '12:32', asr: '15:43', maghrib: '18:33', isha: '20:06' },
  { date: '2025-03-18', imsak: '04:31', gunes: '06:19', zuhr: '12:32', asr: '15:45', maghrib: '18:34', isha: '20:08' },
  { date: '2025-03-19', imsak: '04:29', gunes: '06:17', zuhr: '12:32', asr: '15:46', maghrib: '18:36', isha: '20:10' },
  { date: '2025-03-20', imsak: '04:26', gunes: '06:15', zuhr: '12:31', asr: '15:47', maghrib: '18:38', isha: '20:12' },
  { date: '2025-03-21', imsak: '04:23', gunes: '06:12', zuhr: '12:31', asr: '15:48', maghrib: '18:40', isha: '20:14' },
  { date: '2025-03-22', imsak: '04:21', gunes: '06:10', zuhr: '12:31', asr: '15:49', maghrib: '18:41', isha: '20:16' },
  { date: '2025-03-23', imsak: '04:18', gunes: '06:08', zuhr: '12:30', asr: '15:50', maghrib: '18:43', isha: '20:18' },
  { date: '2025-03-24', imsak: '04:15', gunes: '06:05', zuhr: '12:30', asr: '15:51', maghrib: '18:45', isha: '20:20' },
  { date: '2025-03-25', imsak: '04:13', gunes: '06:03', zuhr: '12:30', asr: '15:52', maghrib: '18:47', isha: '20:22' },
  { date: '2025-03-26', imsak: '04:10', gunes: '06:01', zuhr: '12:29', asr: '15:53', maghrib: '18:48', isha: '20:24' },
  { date: '2025-03-27', imsak: '04:07', gunes: '05:58', zuhr: '12:29', asr: '15:54', maghrib: '18:50', isha: '20:26' },
  { date: '2025-03-28', imsak: '04:04', gunes: '05:56', zuhr: '12:29', asr: '15:55', maghrib: '18:52', isha: '20:29' },
  { date: '2025-03-29', imsak: '04:01', gunes: '05:54', zuhr: '12:29', asr: '15:56', maghrib: '18:54', isha: '20:31' }
];


function formatDate(date) {
  const options = { year: 'numeric', month: 'long', day: 'numeric' };
  return date.toLocaleDateString('tr-TR', options);
}

function loadPrayerTimes() {
  const now = new Date();
const today = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;



  const todaysTimes = prayerTimes.find(pt => pt.date === today);
  const nextDay = new Date(now);
  nextDay.setDate(now.getDate() + 1);
  const tomorrowsTimes = prayerTimes.find(pt => pt.date === nextDay.toISOString().split('T')[0]);

  document.getElementById('current-date').textContent = `Tarih - ${formatDate(now)}`;

  if (todaysTimes) {
    document.getElementById('imsak-time').textContent = todaysTimes.imsak;
    document.getElementById('gunes-time').textContent = todaysTimes.gunes;
    document.getElementById('zuhr-time').textContent = todaysTimes.zuhr;
    document.getElementById('asr-time').textContent = todaysTimes.asr;
    document.getElementById('maghrib-time').textContent = todaysTimes.maghrib;
    document.getElementById('isha-time').textContent = todaysTimes.isha;
    startCountdown(todaysTimes, tomorrowsTimes);
  } else {
    document.getElementById('countdown').textContent = 'Bugüne ait namaz vakitleri bulunamadı.';
  }
}

function startCountdown(times, tomorrowsTimes) {
  const now = new Date();

  const getTime = (timeStr, addDay = false) => {
    const [hours, minutes] = timeStr.split(':').map(Number);
    const date = new Date();
    date.setHours(hours, minutes, 0, 0);
    if (addDay) date.setDate(date.getDate() + 1);
    return date;
  };

  const imsak = getTime(times.imsak);
  const maghrib = getTime(times.maghrib);
  const isha = getTime(times.isha);
  const nextImsak = tomorrowsTimes ? getTime(tomorrowsTimes.imsak, true) : getTime(times.imsak, true);

  let targetTime = null;
  let message = '';

  if (now >= isha || now.getHours() < 5) { 
    targetTime = now < imsak ? imsak : nextImsak;
    message = 'Sahura kalan süre';
  } else if (now < maghrib) {
    targetTime = maghrib;
    message = 'İftara kalan süre';
  } else if (now >= maghrib && now < isha) {
    targetTime = isha;
    message = 'Hayırlı Iftarlar, Allah kabul etsin!';
  }

  if (!targetTime || isNaN(targetTime.getTime())) {
    document.getElementById('countdown').textContent = 'Geçerli bir hedef saat bulunamadı.';
    return;
  }

  clearInterval(window.countdownInterval);
  window.countdownInterval = setInterval(() => {
    const now = new Date();
    const diff = targetTime - now;

    if (diff > 0) {
      const hrs = String(Math.floor(diff / (1000 * 60 * 60))).padStart(2, '0');
      const mins = String(Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))).padStart(2, '0');
      const secs = String(Math.floor((diff % (1000 * 60)) / 1000)).padStart(2, '0');
      document.getElementById('time').textContent = `${hrs}:${mins}:${secs}`;
      document.getElementById('message').textContent = message;




    } else {
      clearInterval(window.countdownInterval);
      document.getElementById('countdown').textContent = 'Süre doldu';
      loadPrayerTimes();
    }
  }, 1000);
}

function initMap() {
  const map = L.map('map').setView([52.1654944, 10.5229380], 15); // DITIB Wolfenbüttel

  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '© OpenStreetMap contributors',
    maxZoom: 19
  }).addTo(map);

  const mosqueMarker = L.marker([52.1654944, 10.5229380]).addTo(map)
    .bindPopup('<b>DITIB Wolfenbüttel Camii</b><br>Schützenstraße 37, 38304 Wolfenbüttel')
    .openPopup();
}

document.addEventListener('DOMContentLoaded', () => {
  loadPrayerTimes();
  initMap();
});
