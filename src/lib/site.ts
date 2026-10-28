import { SITE } from '../../site.config.mjs';

export { SITE };

const base = import.meta.env.BASE_URL.replace(/\/$/, '');

/** Prefix an internal path with the deploy base path. */
export const href = (path: string) => `${base}${path.startsWith('/') ? path : '/' + path}`;

/** Absolute URL for canonical links, sitemaps and structured data. */
export const absolute = (path = '/') => new URL(href(path), SITE.url).toString();

const mailto = (subject: string, body = '') =>
  `mailto:${SITE.email}?subject=${encodeURIComponent(subject)}${body ? `&body=${encodeURIComponent(body)}` : ''}`;

export const contactHref = mailto('Question about BidRadar');

/** Creem checkout link, or an email fallback while the link is a placeholder. */
export const checkoutHref = (plan: 'founding' | 'standard') =>
  SITE.checkout[plan] ||
  mailto(
    `BidRadar subscription (${plan === 'founding' ? 'founding $' + SITE.pricing.founding : 'standard $' + SITE.pricing.standard}/month)`,
    'Hi, I would like to subscribe to BidRadar.\n\nMy trades:\nStates I work in:\n',
  );

export const year = new Date().getFullYear();
