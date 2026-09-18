# Case screenshots — drop real exports here

Aurora design stays in `app/globals.css`. These images are **content**, not theme.

- `hr/login.webp`, `hr/dashboard-mobile.webp`, `hr/dashboard-desktop.webp`, `hr/profile.webp`
- `readfam/onboarding.webp`, `readfam/home-following.webp`, `readfam/home-foryou.webp`, `readfam/book-details.webp`, `readfam/create-story.webp`, `readfam/edit-story.webp`
- `posco/dashboard.webp`, `posco/wireframes.webp`, `posco/styleguide.webp`

Export from Framer/Figma as `webp` ~1600w, keep <300kb each.

`components/sections/CaseSections.tsx` will auto-use `project.images[0]` via `next/image` when present, fallback to `MockVisual`.

See `lib/data.ts:images`.
