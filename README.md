# Simple Registration Form

Open `index.html` in your browser (double-click the file or use Live Server) to view the registration form.

## Fields
- Full Name
- Father's Name
- Mother's Name
- Phone Number (10–15 digits, optional `+`)
- Address

## Features
- Client-side validation (HTML5 + JS)
- Phone pattern check
- Shows a success message with submitted data
- Saves the last submission to `localStorage` under the key `lastRegistration`

## Run
1. Open `index.html` in the browser or use a Live Server extension.
2. Fill the form and click **Register**.

## Notes
- This is a static demo. To persist submissions on a server, add a backend (e.g., Node/Express or a serverless endpoint) and send the form data with `fetch()`.

If you'd like, I can add server-side storage, export CSV, or enhance validation/UX.