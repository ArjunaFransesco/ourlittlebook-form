# Our little book form

Static personalization form for Liltz's [Our Little Book](https://ourlittlebook.liltz.my.id/).

The form prepares an editable Telegram draft for **@huurns** using `https://t.me/huurns?text=...`. The customer presses Send inside Telegram. Photos, MP3 files, and music cover images are attached in that chat. No responses are sent to GitHub or stored on a server. Drafts are saved in the customer's browser and can be cleared from the form.

All optional fields are blank. Their placeholders show the original book wording. The message contains only completed fields plus instructions for the attachments. Long orders are divided into numbered Telegram drafts without losing text. A copy button and message preview provide a fallback if a Telegram client does not fill the draft.

## Hosting

GitHub Pages serves the root of the `main` branch. No build, dependencies, API key, or backend is needed. Open the deployed site or serve the folder over HTTP for local use; JavaScript modules do not load from `file://` in some browsers.

## Editing

- `form-core.mjs`: field labels, sample wording, message formatting, Telegram target and splitting.
- `script.js`: accessible form generation, local drafts, preview, copy, and Telegram handoff.
- `style.css`: the book's red, cream, and dark theme with responsive layouts.
- `index.html`: basic details, attachment instructions and page structure.

Telegram draft links: https://core.telegram.org/api/links#public-username-links
