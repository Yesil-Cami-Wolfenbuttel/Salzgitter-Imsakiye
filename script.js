// Gebetszeiten aus der PDF extrahiert und als Objekt gespeichert
const prayerTimes = [
  { date: '2025-03-01', imsak: '05:11', gunes: '06:57', zuhr: '12:35', asr: '15:23', maghrib: '18:03', isha: '19:36' },
  { date: '2025-03-02', imsak: '05:09', gunes: '06:55', zuhr: '12:35', asr: '15:25', maghrib: '18:05', isha: '19:38' },
  { date: '2025-03-03', imsak: '05:07', gunes: '06:53', zuhr: '12:35', asr: '15:26', maghrib: '18:07', isha: '19:39' },
  { date: '2025-03-04', imsak: '05:05', gunes: '06:50', zuhr: '12:35', asr: '15:27', maghrib: '18:09', isha: '19:41' },
  { date: '2025-03-05', imsak: '05:02', gunes: '06:48', zuhr: '12:34', asr: '15:28', maghrib: '18:11', isha: '19:43' },
  { date: '2025-03-06', imsak: '05:00', gunes: '06:46', zuhr: '12:34', asr: '15:30', maghrib: '18:12', isha: '19:45' },
  { date: '2025-03-07', imsak: '04:58', gunes: '06:44', zuhr: '12:34', asr: '15:31', maghrib: '18:14', isha: '19:47' },
  { date: '2025-03-08', imsak: '04:55', gunes: '06:41', zuhr: '12:34', asr: '15:32', maghrib: '18:16', isha: '19:48' },
  { date: '2025-03-09', imsak: '04:53', gunes: '06:39', zuhr: '12:33', asr: '15:33', maghrib: '18:18', isha: '19:50' },
  { date: '2025-03-10', imsak: '04:51', gunes: '06:37', zuhr: '12:33', asr: '15:35', maghrib: '18:19', isha: '19:52' },
  { date: '2025-03-11', imsak: '04:48', gunes: '06:35', zuhr: '12:33', asr: '15:36', maghrib: '18:21', isha: '19:54' },
  { date: '2025-03-12', imsak: '04:46', gunes: '06:32', zuhr: '12:33', asr: '15:37', maghrib: '18:23', isha: '19:56' },
  { date: '2025-03-13', imsak: '04:43', gunes: '06:30', zuhr: '12:32', asr: '15:38', maghrib: '18:25', isha: '19:58' },
  { date: '2025-03-14', imsak: '04:41', gunes: '06:28', zuhr: '12:32', asr: '15:39', maghrib: '18:27', isha: '20:00' },
  { date: '2025-03-15', imsak: '04:38', gunes: '06:25', zuhr: '12:32', asr: '15:40', maghrib: '18:28', isha: '20:02' },
  { date: '2025-03-16', imsak: '04:36', gunes: '06:23', zuhr: '12:32', asr: '15:41', maghrib: '18:30', isha: '20:04' },
  { date: '2025-03-17', imsak: '04:33', gunes: '06:21', zuhr: '12:31', asr: '15:43', maghrib: '18:32', isha: '20:05' },
  { date: '2025-03-18', imsak: '04:30', gunes: '06:18', zuhr: '12:31', asr: '15:44', maghrib: '18:34', isha: '20:07' },
  { date: '2025-03-19', imsak: '04:28', gunes: '06:16', zuhr: '12:31', asr: '15:45', maghrib: '18:35', isha: '20:09' },
  { date: '2025-03-20', imsak: '04:25', gunes: '06:14', zuhr: '12:30', asr: '15:46', maghrib: '18:37', isha: '20:11' },
  { date: '2025-03-21', imsak: '04:23', gunes: '06:11', zuhr: '12:30', asr: '15:47', maghrib: '18:39', isha: '20:13' },
  { date: '2025-03-22', imsak: '04:20', gunes: '06:09', zuhr: '12:30', asr: '15:48', maghrib: '18:41', isha: '20:15' },
  { date: '2025-03-23', imsak: '04:17', gunes: '06:07', zuhr: '12:29', asr: '15:49', maghrib: '18:42', isha: '20:17' },
  { date: '2025-03-24', imsak: '04:14', gunes: '06:04', zuhr: '12:29', asr: '15:50', maghrib: '18:44', isha: '20:19' },
  { date: '2025-03-25', imsak: '04:12', gunes: '06:02', zuhr: '12:29', asr: '15:51', maghrib: '18:46', isha: '20:21' },
  { date: '2025-03-26', imsak: '04:09', gunes: '06:00', zuhr: '12:29', asr: '15:52', maghrib: '18:47', isha: '20:24' },
  { date: '2025-03-27', imsak: '04:06', gunes: '05:57', zuhr: '12:28', asr: '15:53', maghrib: '18:49', isha: '20:26' },
  { date: '2025-03-28', imsak: '04:03', gunes: '05:55', zuhr: '12:28', asr: '15:54', maghrib: '18:51', isha: '20:28' },
  { date: '2025-03-29', imsak: '04:01', gunes: '05:53', zuhr: '12:28', asr: '15:55', maghrib: '18:53', isha: '20:30' }
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
