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

  // PLACEHOLDER (Creem payment links). Paste the Creem checkout URLs here.
  // While empty, the Subscribe buttons open an email to us instead.
  checkout: {
    founding: '',
    standard: '',
  },

  // PLACEHOLDER (email signup form). Paste the POST endpoint from your form
  // or newsletter service (e.g. Formspree, Buttondown, Tally, Kit).
  // Field names sent: email, trades, states, source.
  // While empty, the form opens a pre-filled email to us instead.
  signupForm: {
    action: '',
    // Where to send people after a successful submit (path on this site).
    thanksPath: '/thanks/',
  },

  // PLACEHOLDER (logo). The current mark is a simple geometric SVG in
  // src/components/Logo.astro. Swap it there when the real logo exists.
};
