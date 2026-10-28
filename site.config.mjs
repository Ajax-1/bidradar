// =====================================================================
//  BidRadar: every placeholder lives in this one file.
//  Replace the values marked PLACEHOLDER, then rebuild/redeploy.
// =====================================================================

export const SITE = {
  name: 'BidRadar',

  // PLACEHOLDER (domain). While there is no custom domain the site is
  // served from GitHub Pages at https://ajax-1.github.io/bidradar/.
  // When you buy a domain: set url to 'https://yourdomain.com' and
  // basePath to '/', then add public/CNAME containing the bare domain.
  url: 'https://ajax-1.github.io',
  basePath: '/bidradar',

  email: 'bidradar@mail.grokbot.com',
  address: {
    line1: 'BidRadar',
    line2: '12 Xiaoying East Road, Qinghe',
    line3: 'Haidian District, Beijing 100085',
    country: 'China',
  },

  pricing: {
    standard: 19, // USD per month
    founding: 9, // USD per month, first 10 customers, locked permanently
    foundingSeats: 10,
    trialDays: 3,
    // Set to false once the 10 founding spots are taken. The founding
    // plan then disappears and only the $19 plan is offered.
    foundingOpen: true,
  },

  // Creem checkout. While either value is empty, that Subscribe button
  // opens an email to us instead.
  checkout: {
    founding: 'https://www.creem.io/payment/prod_6CD83lhFbPd2HYqD0YDRLj', // $9/mo, first 10
    standard: 'https://www.creem.io/payment/prod_ZjAvJFcgquPuyLJXB74MU', // $19/mo
  },

  // Sample signups are delivered by FormSubmit (https://formsubmit.co).
  // No account and no fee. The random alias keeps the inbox address out of
  // the page source. FormSubmit treats that alias as its own form: the first
  // submission emails `email` a one-time "Activate Form" link, and until it
  // is clicked submissions are held (about 30 days) instead of delivered.
  // The script posts to this AJAX URL; without JavaScript the form posts to
  // the same alias without /ajax/. Clear `action` to fall back to mailto:.
  // Fields sent: email, trades, states, source.
  signupForm: {
    action: 'https://formsubmit.co/ajax/b6ee89b8f45ff8a52486c58ade115e63',
    // Where to send people after a successful submit (path on this site).
    thanksPath: '/thanks/',
  },

  // PLACEHOLDER (logo). The current mark is a simple geometric SVG in
  // src/components/Logo.astro. Swap it there when the real logo exists.
};
