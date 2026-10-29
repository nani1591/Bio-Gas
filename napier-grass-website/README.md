# GreenFuel Bioenergy website

A React + Vite website concept for a biogas and renewable-energy business.

## Run locally in VS Code

1. Install Node.js (LTS).
2. Open this folder in VS Code.
3. Open Terminal and run:
   ```bash
   npm install
   npm run dev
   ```
4. Open the local URL printed by Vite (usually `http://localhost:5173`).

## Recent visual improvements

- Animated hero text and image entrance.
- Scroll-triggered reveal animations for sections and cards.
- Floating hero callout and subtle image zoom on hover.
- Expanded image gallery with three additional renewable-energy/nature images.
- Improved responsive styling for mobile screens.
- Reduced-motion support for visitors who prefer less animation.

Images are loaded from Unsplash, so an internet connection is needed to display them.


## Animated Products catalog

A Products page has been added at `pages/products.jsx` and connected through the navbar. It includes category filters, keyword search, animated image cards, expandable product details, and enquiry buttons that open the Contact page. Product names and descriptions are starter catalog content inspired by the Biofics biogas-plant reference; confirm and edit them to match GreenFuel's actual products and service scope. Product photos currently use remote Unsplash image URLs and require an internet connection.

Run locally with `npm install` followed by `npm run dev`.

## Production readiness updates

- Local background/logo artwork is available as WebP to reduce image transfer size.
- The contact form supports a JSON POST endpoint (`VITE_CONTACT_API_URL`). If no endpoint is configured, it can prepare an email using `VITE_CONTACT_EMAIL`; the visitor must press Send in their email app. The form deliberately does not claim an email was delivered when no delivery service is configured.
- Copy `.env.example` to `.env` for local configuration, or set the same `VITE_` variables in your hosting provider's build environment. Do not put private API keys in `VITE_` variables because they are public in the browser bundle.
- Add the real production hostname to `public/sitemap.xml` and `public/robots.txt` before publishing. The correct hostname was not included in the project archive, so no domain has been guessed.
- Before launch, test the contact flow on the deployed site, verify every external image URL, and test at 360px, 390px, 768px, 1024px and desktop widths.

### Contact delivery configuration

**Recommended:** point `VITE_CONTACT_API_URL` at a backend endpoint that validates and emails the submitted JSON. Example request body: `name`, `email`, `phone`, `projectType`, `message`, and `source`. The endpoint must use HTTPS, validate inputs server-side, add spam protection/rate limiting, and return a 2xx status only after accepting the enquiry.

**Fallback:** set `VITE_CONTACT_EMAIL` to a real, monitored company mailbox. The browser will open a prefilled email draft; this is not silent/background email delivery and depends on the visitor's mail app.
