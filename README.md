# ChatGPT Detector — Front-end starter

This is a static front-end preview. It contains no AI model and does not currently detect AI-generated text.

## Files

- `index.html` — page structure and visible content
- `assets/style.css` — responsive styling
- `assets/app.js` — word counter, clear button, and preview-state messages

## Preview locally

Open `index.html` in a browser, or use the VS Code Live Server extension.

## Preview on GitHub Pages

1. Create a GitHub repository.
2. Upload the files while preserving the `assets` folder.
3. In repository Settings → Pages, publish from the `main` branch and `/ (root)`.
4. Open the published Pages URL.

## Before connecting WordPress / a live domain

- Choose an AI-detection provider and review its API documentation, pricing, data retention, and permitted use.
- Build a server-side endpoint (WordPress plugin or custom backend). Keep the API key on the server; never put it in browser JavaScript.
- Add input validation, request-size limits, rate limiting, abuse protection, timeouts, and clear error handling.
- Confirm exactly what the provider's score means. Do not relabel an arbitrary confidence score as a guaranteed percentage of AI-written text.
- Publish an accurate privacy policy describing whether submitted text is sent to a third party, retained, or deleted.
- Replace preview messages with real API results only after the backend is tested.

## SEO notes

The page uses one clear H1, descriptive section headings, crawlable explanatory content, and accessible controls. Avoid claiming guaranteed accuracy, supported models, instant processing, or private/no-storage handling until those claims are verified. Add structured data only when it accurately describes the implemented product and visible page content.
