# HI-Tech Dental & Facial Aesthetic Clinic — demo homepage

A one-page website made of plain HTML, CSS and JavaScript. There is nothing to install and no build step.

## Files
- `index.html`: all the page content, SEO tags and Google structured data
- `styles.css`: all the design
- `script.js`: menu, sticky header, fade-in animations and FAQ

## View it on your computer
Double-click `index.html`. It opens in your browser.

## Things to update before going live
Search `index.html` for these comments:
- `<!-- UPDATE -->`: opening hours (in 3 places: contact section, footer and the JSON-LD in `<head>`), the real domain (canonical/og:url) and the map coordinates
- `<!-- REPLACE -->`: Unsplash placeholder photos. Swap them for real clinic photos.
- `[... – to confirm]`: the doctor's qualifications, experience, registration number and personal note

## Deploy to Vercel (free)

**Option A: from Terminal (no GitHub needed)**
1. Install the Vercel command-line tool once: in Terminal, run `npm i -g vercel` (this needs Node.js from https://nodejs.org).
2. In Terminal, go to this folder: `cd ~/hitech-dental-clinic`
3. Run `vercel` and log in when asked. Accept the default answers. When asked about "Build Command" or "Output Directory", leave them empty.
4. Vercel gives you a preview link. Run `vercel --prod` to get the live link.

**Option B: through GitHub (best for future edits)**
1. Create a new repository on https://github.com/new and upload these files.
2. Go to https://vercel.com/new and click **Import** next to your repository.
3. Set **Framework Preset** to **Other**. Leave the build settings empty, then click **Deploy**.
4. After about 30 seconds you get a live link like `hitech-dental.vercel.app`.

**Custom domain (optional):** In Vercel, open the project → **Settings → Domains** → add the clinic's domain, then follow the DNS steps it shows.
