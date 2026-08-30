# Interna Privacy Policy Site

Plain static privacy-policy website for Interna, independently maintained by DevDahon.

## Current policy snapshot

- Effective date: August 30, 2026
- Audited app version: 1.0.6
- Public URL: `https://devdahon.github.io/interna-privacy/`
- Mobile app configuration: `EXPO_PUBLIC_PRIVACY_POLICY_URL`

The policy currently reflects these app flows:

- local-first profile, duty-log, timer, proof-photo, report, and reflection storage
- optional AI processing through a Supabase Edge Function, with Gemini as the primary provider and xAI/NVIDIA retries
- rewarded Google Mobile Ads and backend reward-credit verification
- pseudonymous service-operation, usage-limit, reward-validation, and platform-integrity data
- local shift/timer reminders and the notification-only animated mascot guide
- operating-system biometric authentication without biometric-template access
- user-directed PDF, DOCX, CSV, documentation, and JSON backup sharing
- JSON backups that include readable local records and embedded proof-photo data, but not AI credits
- accurate retention, permission, deletion, and consent-choice descriptions for the current app

## Files

- `index.html` — policy content and semantic structure
- `styles.css` — responsive light/dark presentation and print layout
- `script.js` — policy metadata, theme preference, active section state, and accessible email copy feedback
- `image.png` — Interna app icon
- `app-ads.txt` — Google Mobile Ads publisher declaration
- `robots.txt` — Search engine crawling directives
- `sitemap.xml` — Canonical sitemap declaration
- `.nojekyll` — GitHub Pages static asset bypass

## Before publishing

1. Review the mobile app source, not only its user-facing labels.
2. Update `SITE_CONFIG` in `script.js`:
   - `effectiveDate`
   - `appVersion`
   - `contactEmail`
   - `developerName`
   - `portfolioUrl`
3. Recheck active AI providers, prompt contents, rewarded-credit logic, device-trust fields, permissions, backup contents, and notification behavior.
4. Test at 375px and desktop widths in both themes, including keyboard focus and reduced motion.
5. Keep the public folder independent from the portfolio root deployment and preserve `app-ads.txt`.

## Local preview

Serve the folder through a local static server so clipboard behavior and URL fragments can be tested in a browser.
