export const sections = [
  { id: 'front', title: 'Cover depan', fields: [
    ['top', 'Teks kecil atas', 'for amane, my favorite person'],
    ['title', 'Judul utama', "you're my\nfavorite.", 'heading'],
    ['date', 'Teks bawah pertama', 'october 3'],
    ['sign', 'Teks bawah kedua', 'made with love by cattia'],
  ] },
  { id: 'page1', title: 'Halaman 01', subtitle: 'Pembuka', fields: [
    ['top', 'Teks kecil atas', 'october 3 is all about you'],
    ['title', 'Judul', 'happy\nboyfriend\nday!', 'heading'],
    ['body', 'Paragraf pembuka', 'i made this because loving you makes me ridiculously happy. okay, open it. i have so much to say.', 'paragraph'],
  ] },
  { id: 'page2', title: 'Halaman 02', subtitle: 'Foto 1', fields: [
    ['top', 'Teks kecil atas', 'first, can we talk about this photo'],
    ['title', 'Judul', 'look at\nyou!', 'heading'],
    ['caption', 'Kalimat di bawah foto', 'the loose tie, that face, your hand on the jacket. i smiled the second i saw it.', 'paragraph'],
  ] },
  { id: 'page3', title: 'Halaman 03', subtitle: 'Foto 2', fields: [
    ['top', 'Teks kecil atas', 'and i love this one too'],
    ['caption', 'Kalimat di bawah foto', 'you make me smile so much.', 'paragraph'],
  ] },
  { id: 'page4', title: 'Halaman 04', subtitle: 'Hal yang disukai', fields: [
    ['top', 'Teks kecil atas', 'a few things i adore'],
    ['title', 'Judul', 'the little\nthings.', 'heading'],
    ['item1-title', 'Poin pertama: judul', 'that grin'],
    ['item1-body', 'Poin pertama: isi', "you look like you're about to laugh, and now i'm smiling too.", 'paragraph'],
    ['item2-title', 'Poin kedua: judul', 'your little looks'],
    ['item2-body', 'Poin kedua: isi', "yes, even when you're just looking away. so cute.", 'paragraph'],
    ['item3-title', 'Poin ketiga: judul', 'all of you'],
    ['item3-body', 'Poin ketiga: isi', "the messy tie, the white tee, every little thing. i love it all.", 'paragraph'],
  ] },
  { id: 'page5', title: 'Halaman 05', subtitle: 'Kutipan besar', fields: [
    ['top', 'Teks kecil atas', 'okay, one more thing'],
    ['quote', 'Kutipan', 'i get so excited when your name pops up. yes, every single time.', 'paragraph'],
  ] },
  { id: 'page6', title: 'Halaman 06', subtitle: 'Kolase foto 3 dan 4', fields: [
    ['top', 'Teks kecil atas', "i couldn't pick just one"],
    ['caption', 'Kalimat di bawah kolase', "i mean, look at you. i'm obsessed.", 'paragraph'],
  ] },
  { id: 'page7', title: 'Halaman 07', subtitle: 'Surat', fields: [
    ['top', 'Teks kecil atas', 'a little note for your day'],
    ['greeting', 'Sapaan', 'dear amane,'],
    ['p1', 'Paragraf pertama', 'happy boyfriend day, amane!', 'paragraph'],
    ['p2', 'Paragraf kedua', "it's october 3, and i'm so happy i get to celebrate you. i made this little book because one photo was never going to be enough.", 'paragraph'],
    ['p3', 'Paragraf ketiga', 'your smile, your silly little looks, the way you make a regular day feel fun. i love all of it. i love you.', 'paragraph'],
    ['p4', 'Paragraf keempat', 'i hope today makes you smile as much as you make me smile.', 'paragraph'],
    ['sign', 'Tanda tangan', 'love,\ncattia.', 'heading'],
  ] },
  { id: 'page8', title: 'Halaman 08', subtitle: 'Penutup', fields: [
    ['top', 'Teks kecil atas', 'one last thing'],
    ['title', 'Judul besar', "you're\nmy\nfavorite.", 'heading'],
    ['body', 'Kalimat penutup', "happy boyfriend day, amane. i can't wait to make more memories with you.", 'paragraph'],
  ] },
  { id: 'back', title: 'Cover belakang', fields: [
    ['top', 'Teks kecil atas', 'october 3'],
    ['initials', 'Inisial tengah', 'c · a'],
    ['title', 'Judul tengah', 'what a\ngood day.', 'heading'],
    ['body', 'Kalimat bawah', 'made for the person who makes me this happy.\ni love you, amane.', 'paragraph'],
  ] },
];

export function buildMessage(values) {
  const read = (key) => String(values[key] ?? '').trim();
  const lines = ['OUR LITTLE BOOK', 'Form personalisasi buku', '', 'DETAIL BUKU'];
  const customerFields = [['customer', 'Nama pemesan'], ['telegram', 'Username Telegram'], ['deadline', 'Deadline'], ['website-title', 'Judul tab website']];
  const customerLines = customerFields.filter(([key]) => read(key)).map(([key, label]) => `${label}: ${read(key)}`);
  if (customerLines.length) lines.splice(3, 0, 'DETAIL PEMESAN', ...customerLines, '');
  for (const [key, label] of [['sender', 'Pengirim'], ['recipient', 'Penerima'], ['occasion', 'Momen'], ['date', 'Tanggal']]) {
    if (read(key)) lines.push(`${label}: ${read(key)}`);
  }
  lines.push('', 'Bagian yang tidak diisi mengikuti contoh. Nama dan tanggal disesuaikan dengan detail di atas.');
  for (const section of sections) {
    const filled = section.fields.filter(([key]) => read(`${section.id}-${key}`));
    if (!filled.length) continue;
    lines.push('', section.title.toUpperCase() + (section.subtitle ? ` (${section.subtitle})` : ''));
    for (const [key, label] of filled) lines.push(`${label}: ${read(`${section.id}-${key}`)}`);
  }
  const music = [['music-title', 'Judul lagu'], ['music-artist', 'Artis']].filter(([key]) => read(key));
  if (music.length) {
    lines.push('', 'MUSIK');
    for (const [key, label] of music) lines.push(`${label}: ${read(key)}`);
  }
  if (read('notes')) lines.push('', 'CATATAN TAMBAHAN', read('notes'));
  lines.push('', 'LAMPIRAN DI TELEGRAM', 'Kirim 4 foto sebagai dokumen, dengan nomor urutan.', 'Foto 1: halaman 02', 'Foto 2: halaman 03', 'Foto 3 dan Foto 4: kolase halaman 06', 'Untuk mengganti lagu: kirim MP3 dan gambar cover lagu di chat ini.');
  return lines.join('\n');
}

// Keep both the Telegram draft and its encoded URL within practical limits.
// Splits preserve every character, including non-Latin text and emoji.
export function splitMessage(message, maxChars = 3500, maxEncoded = 6500) {
  const chunks = [];
  let rest = message;
  while (rest) {
    let end = 0;
    let encoded = 0;
    for (const character of rest) {
      const nextEncoded = encoded + encodeURIComponent(character).length;
      if (end + character.length > maxChars || nextEncoded > maxEncoded) break;
      end += character.length;
      encoded = nextEncoded;
    }
    if (!end) throw new Error('Message chunk limits are too small.');
    if (end < rest.length) {
      const newline = rest.lastIndexOf('\n', end - 1);
      if (newline > end / 2) end = newline + 1;
    }
    chunks.push(rest.slice(0, end));
    rest = rest.slice(end);
  }
  return chunks;
}

export function telegramURL(text) {
  return `https://t.me/xlimaw?text=${encodeURIComponent(text)}`;
}
