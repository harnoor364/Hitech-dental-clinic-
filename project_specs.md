# Project Specs — HI-Tech Dental & Facial Aesthetic Clinic (Demo Homepage)

> **Version 2: redesign.** The visual style follows the reference screenshots (the "CuraDent" Dribbble shot): a sky-blue, clean, modern-sans look. Only the style and layout ideas are borrowed. Its logo, text, images and made-up numbers are **not** copied. All clinic content stays the same as in v1.

## What the app does and who uses it
A single-page demo homepage for a dental and facial-aesthetics clinic in Rajguru Nagar, Ludhiana.
- **Who sees it first:** the clinic owner (Dr. Paramjeet), as a pitch from a web designer.
- **Who it's built for:** local patients, mostly on phones, who want to check the clinic and book through WhatsApp or a phone call.
- **Goal:** look premium, custom-made and trustworthy, and rank well locally (SEO).

## Tech stack (unchanged)
| Part | Choice | Why |
|---|---|---|
| Code | Plain HTML, CSS and vanilla JavaScript | The brief asks for this, and it needs no build step |
| Framework / Database / Auth | None | Nothing is saved, and there are no logins |
| Hosting | Vercel (static deploy) | Free and simple |
| Fonts | **Onest** for headings (geometric sans, close to the reference) + **Inter** for body text | Matches the reference's clean, bold look |
| Icons | Hand-drawn inline SVG line icons, no emoji | Light and custom |

## Files
```
hitech-dental-clinic/
├── index.html        → the whole page (rebuilt)
├── styles.css        → all styling (rebuilt)
├── script.js         → menu, reveal animations, FAQ, marquee, booking form → WhatsApp
├── v1-backup/        → NEW: a copy of the current teal/serif design, kept in case you want it back
├── project_specs.md
└── README.md
```

## New design style (taken from the screenshots)
- **Colours:** white and very pale blue-grey section backgrounds (#F1F6F9), **sky blue** as the main colour (#3FA9E0, with a darker shade for readable text on buttons), near-black navy headings (#14202B) and a **dark charcoal footer** (#1A232C). The facial aesthetics section keeps a small **rose-gold** accent so it still feels separate, as in the original brief.
- **Type:** big, bold geometric-sans headings and light grey body text.
- **Section labels:** small uppercase text in an outlined pill (for example "OUR SERVICES").
- **Buttons:** rounded pill buttons in sky blue with a small icon.
- **Cards:** thin borders and a round pale-blue icon circle. On hover the card turns pale blue and the icon circle fills with solid blue, like "Dental Implants" in the screenshot.
- **Motion:** subtle scroll-reveal, plus one slow scrolling "marquee" band of large outlined words. It switches off for visitors who turn on "reduced motion".
- Mobile-first, with tap targets of at least 48px.

## Page sections (new order)
1. **Navbar:** text logo with a tooth mark, links, phone number with an icon, and a "Book Appointment" pill button. Hamburger menu on mobile.
2. **Hero** (screenshot 1): smiling female dentist photo on the left (Unsplash placeholder), text on the right:
   - small label: "Gentle care, real smiles"
   - H1: painless, gentle dental care in Rajguru Nagar, Ludhiana
   - subtext
   - "Book on WhatsApp" pill button and a "Call Now" link
   - a row of round reviewer-initial avatars next to **"4.8★ on Google · 30+ happy patients"**. This replaces the reference's made-up "400+ Expert Doctors".
3. **Marquee band** (screenshot 4, top): large outlined words scrolling slowly: *Painless Treatment ✦ Hygienic Clinic ✦ Affordable Pricing ✦ Women-led Clinic*. This replaces the old trust strip.
4. **Dental services** (screenshot 2): "OUR SERVICES" pill and a 2-column grid of the same 6 services. Each card has a round icon, a title, a short description and a "Book this treatment →" link that opens WhatsApp.
5. **Facial aesthetics:** the same card style with a rose-gold accent, the 3 services and a photo.
6. **About Dr. Param** (screenshot 3, top: "Learn about us" layout): photo on the left; on the right, a heading, intro and 2 feature rows with round icons (for example "Every step explained" and "Dental + skin care in one place"). The bracketed credential placeholders stay, and nothing is made up.
7. **Why choose us + quick facts** (screenshot 3, bottom: "Fun facts" layout):
   - left: the 4 review-based points (painless, explains every step, welcoming staff, cost-effective)
   - right: a 2×2 grid of **real** facts only: **4.8** Google rating, **30** Google reviews, **9** treatments offered, **6 days** a week (placeholder until timings are confirmed)
   - the reference's progress bars ("Active Engagement 90%") are left out because they would be made-up numbers
8. **Inside our clinic gallery** (screenshot 4, bottom: "Recent cases" layout): 4 photos side by side, where the one you hover or tap widens. These are placeholder photos with captions such as "Treatment room" and "Sterilisation area". They are **not** "cases" or before/after photos, because those would be invented.
9. **Reviews:** the 3 real Google reviews in the new card style, with stars, the translation under the Punjabi review, and a "Read all reviews on Google" button.
10. **Book an appointment** (screenshot 6): a wide clinic photo with a white card overlapping it:
    - fields: Name, Phone, Treatment (dropdown), Preferred date, Message
    - **"Send on WhatsApp"** opens WhatsApp with all the details already typed in
    - no server or database, and nothing is stored
    - the reference's video play button is left out (no video exists)
11. **FAQ** (screenshot 7, top): heading on the left; on the right, numbered questions ("01.", "02." …) in pale-blue boxes with a + icon. The same 5 questions and answers as before.
12. **Contact & location:** address, phone, WhatsApp, timings placeholder and the embedded Google Map.
13. **Footer** (screenshot 7, bottom): dark charcoal with 4 columns: logo + address/phone, page links, "Time schedule" (placeholder hours with an UPDATE comment), and a "Book on WhatsApp" box in place of the newsletter sign-up, which would need a backend.
14. **Floating WhatsApp button** on every screen.

## Left out of the reference on purpose
- The "Meet our doctors" 3-person team: there is only one doctor, so Dr. Param gets her own section (6).
- Fake stats (25+ years, 25k+ patients, 750 dentists, progress bars), the newsletter, the video button and the blog/pages menus.

## Fixed clinic data, SEO, performance (unchanged from v1)
- Same clinic name, doctor, address, phone, WhatsApp link and message, rating and reviews, word for word.
- Same title tag, meta description, Open Graph tags, one H1, Dentist + FAQPage JSON-LD and local keywords.
- Images lazy-load (except the hero), there are no JS libraries, and every image has alt text. Each placeholder photo has a `<!-- REPLACE -->` comment.

## What "done" looks like
- [ ] Current design saved in `v1-backup/`
- [ ] All 14 parts above are built in the new style, with the exact clinic details and reviews
- [ ] No console errors, and checked at desktop (1440px) and mobile (390px) widths with layout issues fixed
- [ ] All WhatsApp and phone links work, and the booking form opens WhatsApp with the details filled in
- [ ] SEO tags and JSON-LD are still present and valid
- [ ] README is updated if anything changed

## Not included (unless you ask)
- A real backend or database, logins, extra pages, a blog, a newsletter, or invented stats or credentials
