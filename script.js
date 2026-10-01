import { sections, buildMessage, splitMessage, telegramURL } from './form-core.mjs';

const form = document.getElementById('order-form');
const container = document.getElementById('book-sections');
const dialog = document.getElementById('preview-dialog');
const storageKey = 'liltz-ourlittlebook-form-v1';
let saveTimer;

for (const section of sections) {
  const details = document.createElement('details');
  details.className = 'book-section';
  const summary = document.createElement('summary');
  const name = document.createElement('span');
  name.className = 'section-name';
  name.textContent = section.title;
  if (section.subtitle) {
    const subtitle = document.createElement('small');
    subtitle.textContent = section.subtitle;
    name.append(subtitle);
  }
  const state = document.createElement('span');
  state.className = 'section-state';
  state.textContent = 'opsional';
  const plus = document.createElement('span');
  plus.className = 'plus';
  plus.setAttribute('aria-hidden', 'true');
  summary.append(name, state, plus);
  const body = document.createElement('div');
  body.className = 'section-body';
  for (const [key, labelText, example, kind] of section.fields) {
    const field = document.createElement('div');
    field.className = 'field';
    const label = document.createElement('label');
    const id = `${section.id}-${key}`;
    label.htmlFor = id;
    label.textContent = labelText;
    const input = document.createElement(kind ? 'textarea' : 'input');
    input.id = input.name = id;
    input.placeholder = example;
    input.maxLength = kind === 'paragraph' ? 600 : 140;
    if (kind) input.rows = kind === 'heading' ? 2 : 3;
    field.append(label, input);
    body.append(field);
  }
  details.append(summary, body);
  container.append(details);
}

function values() {
  return { ...Object.fromEntries(new FormData(form)), rush: form.elements.rush.checked ? 'yes' : 'no', recolor: form.elements.recolor.checked ? 'yes' : 'no' };
}

function updateOptions() {
  const recolor = form.elements.recolor.checked;
  document.getElementById('recolor-field').hidden = !recolor;
  form.elements['recolor-note'].disabled = !recolor;
  form.elements['recolor-note'].required = recolor;
  const fee = (form.elements.rush.checked ? 4000 : 0) + (recolor ? 2000 : 0);
  document.getElementById('option-total').textContent = `Biaya tambahan: Rp${fee.toLocaleString('id-ID')}`;
}

function updateSections() {
  let total = 0;
  for (const details of container.children) {
    const count = [...details.querySelectorAll('input, textarea')].filter((input) => input.value.trim()).length;
    total += count;
    details.querySelector('.section-state').textContent = count ? `${count} diisi` : 'opsional';
    details.classList.toggle('has-content', count > 0);
  }
  document.getElementById('change-count').textContent = total ? `${total} kolom diisi` : 'Belum ada perubahan teks';
}

try {
  const saved = JSON.parse(localStorage.getItem(storageKey) || '{}');
  if (saved && typeof saved === 'object') {
    for (const [key, value] of Object.entries(saved)) {
      const input = form.elements.namedItem(key);
      if (input && typeof value === 'string') {
        if (input.type === 'checkbox') input.checked = value === 'yes';
        else input.value = value;
      }
    }
  }
} catch { /* The form remains usable when browser storage is unavailable. */ }
updateSections();
updateOptions();

form.addEventListener('input', () => {
  updateSections();
  updateOptions();
  document.getElementById('handoff').hidden = true;
  clearTimeout(saveTimer);
  saveTimer = setTimeout(() => {
    try {
      localStorage.setItem(storageKey, JSON.stringify(values()));
      document.getElementById('save-status').textContent = 'Draft tersimpan di perangkat ini.';
    } catch {
      document.getElementById('save-status').textContent = 'Draft tidak bisa disimpan di browser ini. Salin ringkasan sebelum meninggalkan halaman.';
    }
  }, 250);
});

async function copyMessage(statusId) {
  const message = buildMessage(values());
  const status = document.getElementById(statusId);
  try {
    await navigator.clipboard.writeText(message);
    status.textContent = 'Teks berhasil disalin.';
  } catch {
    document.getElementById('message-preview').textContent = message;
    if (!dialog.open) dialog.showModal();
    status.textContent = 'Browser membatasi clipboard. Pilih dan salin teks dari ringkasan.';
    document.getElementById('preview-copy-status').textContent = status.textContent;
  }
}

document.getElementById('preview-button').addEventListener('click', () => {
  document.getElementById('message-preview').textContent = buildMessage(values());
  document.getElementById('preview-copy-status').textContent = '';
  dialog.showModal();
});
document.getElementById('close-preview').addEventListener('click', () => dialog.close());
document.getElementById('dialog-copy').addEventListener('click', () => copyMessage('preview-copy-status'));
document.getElementById('copy-button').addEventListener('click', () => copyMessage('copy-status'));
document.getElementById('clear-button').addEventListener('click', () => {
  clearTimeout(saveTimer);
  form.reset();
  try { localStorage.removeItem(storageKey); } catch { /* No stored draft to remove. */ }
  updateSections();
  updateOptions();
  document.getElementById('save-status').textContent = 'Draft dikosongkan.';
  document.getElementById('handoff').hidden = true;
});

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const message = buildMessage(values());
  const chunks = splitMessage(message);
  const payloads = chunks.map((chunk, index) => chunks.length > 1 ? `OUR LITTLE BOOK · Pesan ${index + 1} dari ${chunks.length}\n\n${chunk}` : chunk);
  const links = document.getElementById('message-links');
  links.replaceChildren();
  for (const [index, payload] of payloads.entries()) {
    const link = document.createElement('a');
    link.className = 'message-link';
    link.href = telegramURL(payload);
    link.target = '_blank';
    link.rel = 'noopener noreferrer';
    link.textContent = payloads.length > 1 ? `Buka pesan ${index + 1} dari ${payloads.length}` : 'Buka chat @huurns lagi';
    links.append(link);
  }
  document.getElementById('handoff-note').textContent = chunks.length > 1
    ? `Isian kamu dibagi menjadi ${chunks.length} pesan agar semuanya terbawa. Kirim pesan pertama di Telegram, lalu buka pesan berikutnya dari tombol di bawah. Setelah selesai, lampirkan foto dan musik.`
    : 'Tekan Send di Telegram, lalu lampirkan 4 foto serta MP3 dan cover jika mengganti lagu. Kalau teks tidak muncul di aplikasi, salin teks dari tombol di bawah.';
  document.getElementById('handoff').hidden = false;
  document.getElementById('copy-status').textContent = '';
  // Open synchronously so browsers do not block the tab after an async clipboard call.
  window.open(telegramURL(payloads[0]), '_blank', 'noopener,noreferrer');
  if (navigator.clipboard) {
    navigator.clipboard.writeText(message).then(() => {
      document.getElementById('copy-status').textContent = 'Salinan seluruh teks juga tersedia di clipboard.';
    }).catch(() => { /* The explicit copy button remains available. */ });
  }
});
