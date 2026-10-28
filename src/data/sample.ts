// Real notices posted on SAM.gov between 2026-10-24 and 2026-10-27
// (federal construction and facilities). Only the title, agency, dates,
// set-aside type and link come from the notice. The summary, score and
// bid advice are BidRadar's own writing. No notice text is reproduced.

export type SetAside = 'SBA' | 'SDVOSBC' | 'NONE';

export interface Opportunity {
  title: string;
  agency: string;
  setAside: SetAside;
  posted: string; // ISO date
  due: string; // ISO date
  score: number; // 1-5
  summary: string;
  advice: string;
  url: string;
}

export const setAsideLabel: Record<SetAside, string> = {
  SBA: 'Small business set-aside',
  SDVOSBC: 'SDVOSB set-aside',
  NONE: 'No set-aside',
};

export const sample: Opportunity[] = [
  {
    title: '$465M SPK SMALL BUSINESS MATOC FOR DBB/DB CONSTRUCTION',
    agency: 'Department of Defense',
    setAside: 'SBA',
    posted: '2026-10-26',
    due: '2026-12-02',
    score: 5,
    summary:
      'USACE Sacramento District is setting up a $465M small-business MATOC for design-bid-build and design-build construction. Responses due Dec 2.',
    advice:
      'Large multiple-award vehicle. Smaller GCs should team up (JV or mentor-protégé) to win a seat, then compete for task orders.',
    url: 'https://sam.gov/opp/a1860dddf22441c1801a6085cab1412e/view',
  },
  {
    title: 'Z1DA--642-22-104 | Upgrade Substation Building 2 Phase 1 for Philadelphia VAMC',
    agency: 'Department of Veterans Affairs',
    setAside: 'SDVOSBC',
    posted: '2026-10-27',
    due: '2026-11-20',
    score: 5,
    summary:
      'Phase 1 upgrade of the Building 2 substation at the Philadelphia VA Medical Center. SDVOSB set-aside, due Nov 20.',
    advice:
      'Fits an electrical prime, or an SDVOSB general contractor paired with an electrical subcontractor.',
    url: 'https://sam.gov/opp/288ca1f380b04ba5b424aa359047a8f8/view',
  },
  {
    title: 'Y1DA--CON NRM 531-25-102 | Expand Emergency Room',
    agency: 'Department of Veterans Affairs',
    setAside: 'SDVOSBC',
    posted: '2026-10-26',
    due: '2026-11-06',
    score: 5,
    summary:
      'Emergency room expansion at a VA medical center (project 531-25-102). SDVOSB set-aside, due Nov 6.',
    advice:
      'Construction inside an occupied hospital. Lead with your ICRA and infection-control experience.',
    url: 'https://sam.gov/opp/fa941f15318249599bcdca5b13a43da7/view',
  },
  {
    title: 'Replace HVAC System and Components at CAD593',
    agency: 'Department of Defense',
    setAside: 'SBA',
    posted: '2026-10-26',
    due: '2026-12-02',
    score: 5,
    summary:
      'Replacement of the HVAC system and related components at CAD593. Small-business set-aside, due Dec 2.',
    advice:
      'HVAC contractors can bid this as prime. The timeline leaves room to schedule a site visit.',
    url: 'https://sam.gov/opp/b4f4a929ee084c05ac1f973e3b0531c9/view',
  },
  {
    title: 'Z2DA--666-27-102 Lightning Protection Update B71N',
    agency: 'Department of Veterans Affairs',
    setAside: 'SDVOSBC',
    posted: '2026-10-26',
    due: '2026-11-27',
    score: 4,
    summary:
      'Lightning protection system update for VA Building 71N. SDVOSB set-aside, due Nov 27.',
    advice:
      'Specialty subs (lightning protection, electrical) should find an SDVOSB prime to partner with.',
    url: 'https://sam.gov/opp/a1b1f2db2fcf4f1f9d108530ea86d6e8/view',
  },
  {
    title:
      'N4008526R0228 DESIGN-BUILD (DB), REPAIR OTC DORM KING HALL BLDG 291, NAVAL STATION NEWPORT RI, NEWPORT RHODE I',
    agency: 'Department of Defense',
    setAside: 'NONE',
    posted: '2026-10-27',
    due: '2026-11-05',
    score: 4,
    summary:
      'Design-build repair of the King Hall dormitory (Building 291) at Naval Station Newport, Rhode Island. Due Nov 5.',
    advice: 'Design-build: the prime will need an architecture or engineering design partner.',
    url: 'https://sam.gov/opp/09d17c6c6295423ba453b9e7e8c87a1e/view',
  },
  {
    title: 'N0017327Q5317- Roof Membrane Replacement and Waterproofing',
    agency: 'Department of Defense',
    setAside: 'NONE',
    posted: '2026-10-27',
    due: '2026-11-06',
    score: 4,
    summary: 'Roof membrane replacement and waterproofing at a Navy facility. Due Nov 6.',
    advice: 'Roofing contractors can quote this directly.',
    url: 'https://sam.gov/opp/3e80d2b89d1642898db0d91ed08c57d0/view',
  },
  {
    title:
      'Munitions Maintenance and Inspection Facility and Conventional Munitions Cube Storage Addition, HIANG, JBPHH',
    agency: 'Department of Defense',
    setAside: 'SBA',
    posted: '2026-10-26',
    due: '2026-11-12',
    score: 4,
    summary:
      'New munitions maintenance and inspection facility plus a munitions storage addition for the Hawaii Air National Guard at JBPHH. Small-business set-aside, due Nov 12.',
    advice: 'Mid-to-large new build. Bonding capacity matters here, so consider teaming.',
    url: 'https://sam.gov/opp/bd588bcffae5426f998e3bd8f1b5d9bd/view',
  },
];

// Real counts for the same window (SAM.gov, 2026-10-24 to 2026-10-27).
export const windowStats = {
  from: 'Oct 24',
  to: 'Oct 27, 2026',
  total: 71,
  smallBusiness: 36,
};

const fmt = new Intl.DateTimeFormat('en-US', { month: 'short', day: 'numeric', timeZone: 'UTC' });
export const shortDate = (iso: string) => fmt.format(new Date(iso + 'T00:00:00Z'));
