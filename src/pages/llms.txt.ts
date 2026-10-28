import type { APIRoute } from 'astro';
import { SITE, absolute } from '../lib/site';
import { faq } from '../data/faq';

const { standard, founding, foundingSeats, trialDays } = SITE.pricing;

const body = `# BidRadar

> BidRadar is an independent, one-person email digest service for small U.S. federal construction and facilities contractors. Every weekday it selects newly posted construction and facilities contract opportunities from SAM.gov (focused on small-business set-asides), writes a short summary of each, gives it a 1-5 fit score and a suggested bid approach, filters the list by each subscriber's trades and states, and emails it to them.

BidRadar is not affiliated with SAM.gov, the General Services Administration or any U.S. government agency. The original notice on SAM.gov is the authoritative source.

## Key facts

- Price: $${standard}/month. The first ${foundingSeats} paying customers pay $${founding}/month, locked in for the life of their subscription.
- Free sample: ${trialDays} weekday digests, no credit card required.
- Cancel any time. Full refund if not satisfied in the first paid month.
- Each digest item contains: notice title, agency, posting and due dates, set-aside type, BidRadar's own summary, a 1-5 fit score, a suggested bid approach, and a link to the original notice. Notice text is not reproduced.
- Every email includes BidRadar's postal address and an unsubscribe link (CAN-SPAM).
- Contact: ${SITE.email}
- Mailing address: ${SITE.address.line1}, ${SITE.address.line2}, ${SITE.address.line3}, ${SITE.address.country}

## Pages

- [Home](${absolute('/')}): what the service does, comparison with SAM.gov alerts, pricing, FAQ, free sample signup
- [Sample digest](${absolute('/sample/')}): eight real opportunities posted on SAM.gov Oct 24-27, 2026, with BidRadar summaries, scores and advice
- [Pricing](${absolute('/pricing/')}): plans, billing, cancellation and refunds
- [About and contact](${absolute('/about/')}): who runs BidRadar and how to reach us
- [Terms of Service](${absolute('/terms/')})
- [Privacy Policy](${absolute('/privacy/')})
- [Refund Policy](${absolute('/refund/')})

## FAQ

${faq.map((f) => `### ${f.q}\n\n${f.a}`).join('\n\n')}
`;

export const GET: APIRoute = () =>
  new Response(body, { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
