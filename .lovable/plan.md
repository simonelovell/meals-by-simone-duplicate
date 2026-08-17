# Meals By Simone — Landing Page

A warm, editorial single-page site for a meal-prep and nutrition membership, built mobile-first with generous whitespace, soft rounded cards, and photography leading every section.

## Look and feel

- Warm neutral palette: cream background, deep charcoal-brown text, sage green primary, terracotta accent.
- Type pairing: a soft script face (e.g. Caveat / Dancing Script) for emotive section headers, a clean sans (e.g. DM Sans) for all body and UI copy.
- Large radii on buttons, cards, and images; soft shadows; no hard corners or tech-startup gradients.
- All colors and fonts registered as design tokens so the whole page themes from one place.

## Page sections (in order)

1. Header — logo left; "Login" (text) and "Join Now" (filled pill) right; mobile menu.
2. Hero — headline about never asking "what's for dinner" again, subheading, "Start Free Trial" button plus "Watch Video" play link, big lifestyle image alongside; stacks on mobile.
3. Testimonials strip — 9 short quotes in a continuously scrolling marquee, paused on hover.
4. Video section — 16:9 intro video frame with play overlay and a CTA button beneath.
5. How it works — 4 numbered steps (Sign Up, Grab Your Menu, Get Cooking, Enjoy) beside a supporting photo.
6. Founder bio — portrait of Simone, credentials and story, closing script-font signature sign-off.
7. Social proof — Instagram-style grid of 6 square placeholder posts with a follow link.
8. Recipe sneak peek — 6 recipe cards, photo on top, name and short tag underneath.
9. Benefits — 3 columns: Save Time, Save Money, Stay Healthy, each with an icon and one line.
10. Pricing — 2 rounded plan cards, monthly vs annual with "Best Value" badge and savings callout, each with "Sign Up Now".
11. Newsletter — email capture block with inline confirmation toast.
12. Footer — Instagram / Facebook / YouTube links, nav links, copyright.

## Technical notes

- Everything lives in `src/routes/index.tsx` (replacing the placeholder) with section components under `src/components/landing/`.
- Tokens and fonts added to `src/styles.css` via `@theme`; Google Fonts loaded with a `<link>` in `src/routes/__root.tsx`.
- Placeholder photography generated into `src/assets/` (hero, how-it-works, founder portrait, 6 recipes, 6 Instagram tiles) and imported as ES modules so you can swap files later.
- Route-level `head()` with a Meals By Simone title, description, og/twitter tags.
- Buttons/newsletter are presentational for now; no backend, no auth wiring.

## Not included

- Real login/checkout, membership accounts, payments, or a live Instagram API embed — placeholders only until you're ready.
