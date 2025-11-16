# GroupCal Landing Pages

Share calendars with your group. Mobile-optimized landing pages for A/B testing different value propositions.

## Landing Pages

1. **groupcal-1-family.html** - Family Coordination
   - "Finally, a calendar your whole family actually uses"
   - Target: Families with kids, busy households

2. **groupcal-2-texting.html** - Stop Coordination Texts
   - "Stop the 'when are you free?' texts"
   - Target: Friend groups, social planners

3. **groupcal-3-onepage.html** - One Source of Truth
   - "One calendar. Everyone on the same page."
   - Target: Roommates, couples, small teams

4. **groupcal-4-privacy.html** - Privacy Control
   - "Share your schedule. Keep your privacy."
   - Target: Privacy-conscious users

## Features

- Mobile-first design
- Purple/pink gradient branding
- Email capture with Google Sheets integration
- Source tracking for A/B testing
- LogRocket analytics integration
- Toast notifications

## Tech Stack

- Pure HTML, CSS, vanilla JavaScript
- Google Apps Script for backend
- LogRocket for session replay
- Vercel for hosting

## Setup

1. Create Google Apps Script using `google-apps-script-GROUPCAL.js`
2. Deploy and get URL
3. Replace `PLACEHOLDER_URL` in all HTML files
4. Deploy to Vercel

## Local Testing

```bash
open groupcal-1-family.html
```

## Deployment

```bash
vercel --prod
```
