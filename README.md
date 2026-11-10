# NJ Driver Knowledge Practice

A static HTML/CSS/JavaScript practice website based on the uploaded **2026 New Jersey Driver Manual**.

## Run it

1. Keep `index.html`, `styles.css`, and `app.js` in the same folder.
2. Open `index.html` in a modern browser.

No server, build step, account, or external JavaScript library is required. The stylesheet imports Manrope and DM Mono from Google Fonts; the site still works with system-font fallbacks if Google Fonts are unavailable.

## Exam behavior

- Each attempt selects 50 distinct questions at random from the question bank.
- 40 correct answers ends the attempt as a pass.
- 11 incorrect answers ends the attempt as an automatic fail.
- A skipped question moves to the back of the queue and can be answered later.
- Each submitted answer receives immediate feedback. Incorrect answers reveal the correct choice and a brief explanation.
- The user can start unlimited new attempts. Questions can reappear on later attempts.

## Content scope

The question bank covers the regular automobile-driver material from the 2026 New Jersey Driver Manual: licensing and GDL, vehicle operation and safety, road rules, defensive driving, alcohol and drugs, sharing the road, signs and pavement markings, railroad crossings, and vehicle information. Each explanation includes the printed manual page number used as its source reference.

This is an unofficial study aid, not an official MVC test or legal reference. The manual itself notes that statutes and regulations control if there is a discrepancy.
