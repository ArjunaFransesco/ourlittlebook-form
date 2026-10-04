export const sections = [
  {
    "id": "front",
    "title": "Cover depan",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "for amane, my favorite person"
      ],
      [
        "title",
        "Judul utama",
        "it's your\nbirthday.",
        "heading"
      ],
      [
        "date",
        "Teks bawah pertama",
        "birthday edition"
      ],
      [
        "sign",
        "Teks bawah kedua",
        "made with love by cattia"
      ]
    ]
  },
  {
    "id": "page1",
    "title": "Halaman 01",
    "subtitle": "Pembuka",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "today is all about you"
      ],
      [
        "title",
        "Judul",
        "happy\nbirthday!",
        "heading"
      ],
      [
        "body",
        "Paragraf pembuka",
        "i put a few of my favorite photos of you in here. a birthday card wasn't going to fit them all. go on, turn the page.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page2",
    "title": "Halaman 02",
    "subtitle": "Foto 1",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "starting strong"
      ],
      [
        "title",
        "Judul",
        "birthday\nboy.",
        "heading"
      ],
      [
        "caption",
        "Kalimat di bawah foto",
        "the suit, the loose tie, your grin. okay, you knew exactly what you were doing.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page3",
    "title": "Halaman 03",
    "subtitle": "Foto 2",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "saving this one too"
      ],
      [
        "caption",
        "Kalimat di bawah foto",
        "just a white tee and somehow i'm distracted.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page4",
    "title": "Halaman 04",
    "subtitle": "Hal yang disukai",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "a few favorites"
      ],
      [
        "title",
        "Judul",
        "my favorite\ndetails.",
        "heading"
      ],
      [
        "item1-title",
        "Poin pertama: judul",
        "your grin"
      ],
      [
        "item1-body",
        "Poin pertama: isi",
        "that almost laughing face in the suit photo. gets me every time.",
        "paragraph"
      ],
      [
        "item2-title",
        "Poin kedua: judul",
        "the side glance"
      ],
      [
        "item2-body",
        "Poin kedua: isi",
        "you're looking away in that white tee and i'm still looking at you.",
        "paragraph"
      ],
      [
        "item3-title",
        "Poin ketiga: judul",
        "the casual ones"
      ],
      [
        "item3-body",
        "Poin ketiga: isi",
        "messy hair, a tee, no big deal. those are some of my favorites.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page5",
    "title": "Halaman 05",
    "subtitle": "Kutipan besar",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "for the record"
      ],
      [
        "quote",
        "Kutipan",
        "another year of you. yeah, that's worth celebrating.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page6",
    "title": "Halaman 06",
    "subtitle": "Kolase foto 3 dan 4",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "two more for the birthday book"
      ],
      [
        "caption",
        "Kalimat di bawah kolase",
        "the close up and the orange shirt. both made the cut.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "page7",
    "title": "Halaman 07",
    "subtitle": "Surat",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "your birthday note"
      ],
      [
        "greeting",
        "Sapaan",
        "dear amane,"
      ],
      [
        "p1",
        "Paragraf pertama",
        "happy birthday, amane!",
        "paragraph"
      ],
      [
        "p2",
        "Paragraf kedua",
        "i hope you get good food, a really good cake, and a day you don't have to rush through. you deserve to enjoy this one.",
        "paragraph"
      ],
      [
        "p3",
        "Paragraf ketiga",
        "i love having you in my life. the random messages, the silly photos, all of it. i'm really glad i get to celebrate another birthday with you.",
        "paragraph"
      ],
      [
        "p4",
        "Paragraf keempat",
        "here's to more photos, more things to laugh about, and more birthdays together. love you.",
        "paragraph"
      ],
      [
        "sign",
        "Tanda tangan",
        "love,\ncattia.",
        "heading"
      ]
    ]
  },
  {
    "id": "page8",
    "title": "Halaman 08",
    "subtitle": "Penutup",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "before you go"
      ],
      [
        "title",
        "Judul besar",
        "make a\nwish.",
        "heading"
      ],
      [
        "body",
        "Kalimat penutup",
        "happy birthday, amane. now go get your cake. i'll be here taking more photos of you.",
        "paragraph"
      ]
    ]
  },
  {
    "id": "back",
    "title": "Cover belakang",
    "fields": [
      [
        "top",
        "Teks kecil atas",
        "birthday edition"
      ],
      [
        "initials",
        "Inisial tengah",
        "c · a"
      ],
      [
        "title",
        "Judul tengah",
        "same time\nnext year?",
        "heading"
      ],
      [
        "body",
        "Kalimat bawah",
        "keep this one. we'll need a bigger book next year.\nlove you, amane.",
        "paragraph"
      ]
    ]
  }
];

export function buildMessage(values) {
  const read = (key) => String(values[key] ?? '').trim();
  const lines = ['BIRTHDAY BOOK', 'Form personalisasi buku ulang tahun', '', 'DETAIL BUKU'];
  const customerFields = [['customer', 'Nama pemesan'], ['telegram', 'Username Telegram'], ['deadline', 'Deadline'], ['website-title', 'Judul tab website']];
  const customerLines = customerFields.filter(([key]) => read(key)).map(([key, label]) => `${label}: ${read(key)}`);
  if (customerLines.length) lines.splice(3, 0, 'DETAIL PEMESAN', ...customerLines, '');
  for (const [key, label] of [['sender', 'Pengirim'], ['recipient', 'Penerima'], ['occasion', 'Momen'], ['date', 'Tanggal']]) {
    if (read(key)) lines.push(`${label}: ${read(key)}`);
  }
  lines.push('', 'Bagian yang tidak diisi mengikuti contoh. Nama dan tanggal disesuaikan dengan detail di atas.');
  const rush = read('rush') === 'yes';
  const recolor = read('recolor') === 'yes';
  const extra = (rush ? 4000 : 0) + (recolor ? 2000 : 0);
  lines.push('', 'PILIHAN TAMBAHAN', `Deadline under 24 hours: ${rush ? 'Ya (+Rp4.000)' : 'Tidak'}`, `Recolor: ${recolor ? 'Ya (+Rp2.000)' : 'Tidak'}`);
  if (recolor && read('recolor-note')) lines.push(`Warna yang diminta: ${read('recolor-note')}`);
  lines.push(`Biaya tambahan: Rp${extra.toLocaleString('id-ID')}`);
  const links = [['link-one', 'Pilihan link 1'], ['link-two', 'Pilihan link 2']].filter(([key]) => read(key));
  if (links.length) {
    lines.push('', 'LINK WEBSITE');
    for (const [key, label] of links) lines.push(`${label}: https://${read(key)}.liltz.my.id`);
  }
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
  return `https://t.me/huurns?text=${encodeURIComponent(text)}`;
}
