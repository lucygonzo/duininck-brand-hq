// ============================================================
// DUININCK COMPANIES BRAND HQ. DATA
// Source: duininckcompanies.com, CMO discovery call (Mar 12, 2026),
//         31 deep research files (research-output/)
// CMO: Nicole Behne (ex-Polaris, ex-Hormel)
// Last sync: March 23, 2026
//
// CONFIRMED = Validated by Nicole in discovery call
// RESEARCHED = Validated through public data research
// INFERRED = Derived from public sources, needs validation
// ============================================================

export const CLIENT = {
  name: 'Duininck Companies',
  fullName: 'Duininck Companies',
  tagline: 'People. Values. Growth.',
  website: 'duininckcompanies.com',
  stage: 'Established / 4th Generation',
  phase: 'Brand Unification & Centennial Launch',
  brandStatus: 'active-rebrand',
  productType: 'holding-company',
  hasSubBrands: true,
  updatedAt: 'March 15, 2026',
  founded: '1926',
  headquarters: 'Willmar, Minnesota',
  centennialYear: '2026',
  centennialEvent: 'July 25, 2026. Public celebration, ~2,000 attendees',
};

// ---- CMO PROFILE (from discovery call) ----
export const CMO = {
  name: 'Nicole Behne',
  title: 'CMO',
  startDate: 'May 2025',
  background: 'Hormel Foods (Fortune 200, 80-year BBDO relationship) → Polaris → Duininck',
  workStyle: 'Project-based ONLY. Hates retainers. Burned by agency overhead models.',
  currentTools: 'Claude, Co-pilot, ChatGPT, Buffer (unhappy with it)',
  painPoints: [
    'No content strategy. has foundations but no strategic lens on what to capture and why',
    'Social workflow is "clunky". Excel files + Buffer, feels awful',
    'Tiny team for massive scope: CMO + 1 graphic designer + 1 admin/community manager',
    'No intranet for 700+ field employees who are disconnected from the brand story',
    'Golf division went dark on social. need to restart without losing momentum',
    'Blue-collar workforce won\'t go on camera. needs creative capture approaches',
    'Content timing gap: golf course beauty shots come a YEAR after construction (growing season)',
    '2026 season captures will feed 2027 content. need to plan NOW',
  ],
  quote: '"I feel like I have more purpose in my work today than I ever have and I\'m working for a company that builds roads and golf courses."',
  referral: 'Sam Duininck (4th gen, connected Reagan to Nicole)',
};

export const INTERNAL_TEAM = {
  total: '700+ employees',
  fieldPercentage: '~90%',
  marketingTeam: [
    { name: 'Nicole Behne', role: 'CMO', note: 'Ex-Polaris, ex-Hormel. Strategic leader. In the weeds for first time in career.' },
    { name: 'Graphic Designer', role: 'Design + Photo/Video', note: 'Can shoot internally but cannot own content strategy alone' },
    { name: 'Admin / Community Manager', role: 'Admin + Community', note: 'Supports execution' },
  ],
  gap: 'No content strategist. No dedicated social person. No internal comms platform. 3 people serving 700+ employees across 5+ states.',
};

export const METRICS = [
  { label: 'Years in Business', value: '100', note: 'Centennial: 2026' },
  { label: 'Generations', value: '4th', note: 'Sam Duininck active' },
  { label: 'Field Employees', value: '700+', note: 'Mostly seasonal blue-collar' },
  { label: 'Marketing Team', value: '3', note: 'CMO + designer + admin' },
  { label: 'States Active', value: '5+', note: 'MN, TX, GA, SD, +' },
  { label: 'Centennial Event', value: 'Jul 25', note: '~2,000 attendees' },
];

export const OPEN_PRIORITIES = [
  { text: 'Build content capture strategy for 2026 season (feeds 2027 content)', urgency: 'Critical', owner: 'Lucy + Nicole', dateAdded: '2026-03-12', ease: 3, whyItMatters: 'Construction season starts April. Every project without a capture plan is a year of lost content. Golf beauty shots taken in 2026 feed 2027 marketing.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Nicole confirmed content timing gap: captures lag publication by 12+ months. Sam Duininck validated this for golf specifically.' },
  { text: 'Define social workflow to replace clunky Excel + Buffer process', urgency: 'Critical', owner: 'Lucy', dateAdded: '2026-03-12', ease: 4, whyItMatters: 'The current workflow (Buffer + Excel) creates friction at every step. Nicole called it "clunky" and "awful." A 3-person team cannot afford friction.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Nicole uses Claude, Co-pilot, and ChatGPT already. She wants automation, not more people. The tool should make 3 people operate like 10.' },
  { text: 'Restart Golf division social presence (went dark, urgent)', urgency: 'Critical', owner: 'Nicole', dateAdded: '2026-03-12', ease: 2, whyItMatters: '140+ new golf courses are in the pipeline nationally. Architects browse Instagram to evaluate builders. Duininck Golf has world-class portfolio (Hazeltine, Erin Hills, TPC) that is completely invisible.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Sam and a few guys ran golf social with an agency. Stopped because too busy. ~600 LinkedIn followers vs. Landscapes Unlimited dominating the space.' },
  { text: 'Plan centennial content for July 25 event (2,000 attendees)', urgency: 'Critical', owner: 'Nicole + video partner', dateAdded: '2026-03-12', ease: 2, whyItMatters: 'Once-in-a-century brand moment. JE Dunn (2024 centennial) ran "100 stories" campaign + "Building a Legacy" philanthropy initiative. Duininck is inside 6 months with no visible public content plan.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Nicole has a video partner from her Hormel days producing documentary. Historic footage + AI-animated stills planned. Media outreach should begin 60-90 days before event.' },
  { text: 'Audit sub-brand visual consistency post-unification', urgency: 'High', owner: 'Lucy', dateAdded: '2026-03-12', ease: 4, whyItMatters: 'Six websites use six different palettes with zero shared brand elements. Until visual consistency exists, the unification is just words on a strategy deck.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Visual audit complete: Duininck Teal (#004F71) appears on parent and construction sites but not golf, Prinsco, or Hart Ranch. No shared typography.' },
  { text: 'Develop blue-collar content capture playbook (no on-camera talent)', urgency: 'High', owner: 'Lucy + Reagan', dateAdded: '2026-03-12', ease: 3, whyItMatters: 'Nicole was explicit: workers will not go on camera. The content strategy must produce compelling visuals without talking heads. Equipment becomes the hero. Carousels outperform graphics.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Nicole: "These guys are blue-collar. They don\'t want to talk to anybody." But she CAN video them working and add voiceover. Knife River solves this with still photos + caption stories on @lifeatknife.' },
  { text: 'Evaluate intranet solutions for 700+ disconnected field employees', urgency: 'High', owner: 'Nicole', dateAdded: '2026-03-12', ease: 2, whyItMatters: '700+ employees are disconnected from the brand story. 83% of frontline workers globally lack corporate email. If each employee shared one piece of content per year, that is 700 authentic impressions in recruiting markets.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Options researched: Beekeeper, Staffbase, Team Engine (SMS-based), WhatsApp groups. SMS may be simplest for construction crews. Budget confirmation needed from Nicole.' },
  { text: 'Map seasonal content calendar: what to shoot, when, where, why', urgency: 'High', owner: 'Lucy + Nicole', dateAdded: '2026-03-12', ease: 4, whyItMatters: 'Construction is seasonal (April through November). Every week without a capture plan is footage that cannot be recovered until next year. Off-season (Nov through Mar) publishes what was captured.', whenMentioned: 'CMO Discovery Call, March 12, 2026', auditLogContext: 'Seasonal capture plan drafted in brandData.ts: Apr-May (mobilization), Jun-Aug (peak construction), Sep-Oct (completions), Nov-Dec (wrap-up), Jan-Mar (publish 2026 captures as 2027 content).' },
];

export const COMPANY = {
  mission: 'We are energized to build for the future with a focus on people, values, and growth.',
  vision: 'To steward a thriving, multi-generational family business that advances its people, partners, and communities through values-driven growth.',
  thesis: 'A family business can grow across a century by staying rooted in faith-based values while diversifying into complementary industries. When you treat employees as whole people and steward resources generationally, the business compounds trust, talent, and territory.',

  // CONFIRMED by Nicole: "When a Duininck truck pulls up on a site, we need to represent ALL of it, not just a piece of it."
  unificationInsight: 'When a Duininck truck pulls up on a site, we need to represent ALL of it, not just a piece of it.',

  foundingStory: {
    summary: 'In 1919, 16-year-old Henry Duininck began working on road construction in Minnesota. By 1926, he and his brothers Amos and Wilbur formalized Duininck Brothers Construction. A 1932 bankruptcy during the Depression forced a reorganization, but the family rebuilt. Four generations later, the company spans water management, construction, materials, golf course design, and real estate.',
    gen1: 'Henry, Amos, and Wilbur Duininck (1920s-1950s): Founded on Minnesota road construction. Survived Depression-era bankruptcy. Rebuilt through perseverance and local relationships.',
    gen2: 'Curt, Willis, Norm, Harris, Lee, and Larry (1950s-1980s): Expanded scope. Added DOD contracts, diversified into manufacturing (Prinsco), golf (Hart Ranch), and real estate.',
    gen3: 'Jason, Chris, Kyle, Jamie, Jeremy, Judd, Ryan, and Trevor (1988-present): Professionalized operations. Created Central Team (2014). Restructured into 3 industry sectors (2022). Documented purpose, values, and behaviors.',
    gen4: 'Sam Duininck and others formally introduced at 2018 Family Summit. Actively in the business. Sam connected this engagement.',
  },

  values: [
    { name: 'Stewardship', description: 'We recognize that all we have is a gift from God, and we foster the advancement of His resources entrusted to our care.' },
    { name: 'Integrity', description: 'We subscribe to biblical values and conform our conduct accordingly.' },
    { name: 'Servant Leadership', description: 'We lead with clarity of purpose, develop our people, and prioritize relationships.' },
    { name: 'Family', description: 'We nurture the wellbeing of families at work and at home.' },
    { name: 'Generosity', description: 'We joyfully give our time, talent, and finances out of grateful hearts.' },
  ],

  // CONFIRMED: Brand unification is killing separate concrete brand, folding under Duininck
  subsidiaries: [
    {
      name: 'Prinsco',
      sector: 'Water Management',
      hq: 'Willmar, MN',
      description: 'Plastic pipe manufacturer for agricultural drainage, stormwater, and onsite market segments. Multi-state operations.',
      status: 'Flagship',
      brandNote: 'Independent brand. separate from Duininck naming. Stays independent.',
    },
    {
      name: 'Duininck Heavy Civil (Midwest)',
      sector: 'Construction & Materials',
      hq: 'Minnesota / South Dakota',
      description: 'Heavy civil construction: aggregate, grading, paving, engineering, site prep, underground utilities. Public works, government, commercial, residential.',
      status: 'Core',
      brandNote: 'Being unified under single Duininck brand.',
    },
    {
      name: 'Duininck Heavy Civil (Texas)',
      sector: 'Construction & Materials',
      hq: 'Texas',
      description: 'Texas division of heavy civil operations. Previously managed independently with separate messaging.',
      status: 'Core',
      brandNote: 'Being unified under single Duininck brand. Was managed separately.',
    },
    {
      name: 'Duininck Concrete (being absorbed)',
      sector: 'Construction & Materials',
      hq: 'Willmar, MN',
      description: 'Quality aggregates, ready mix, and construction supply across multiple Minnesota locations.',
      status: 'Merging',
      brandNote: 'CONFIRMED: Concrete brand being eliminated. Folding into unified Duininck brand.',
    },
    {
      name: 'Duininck Golf',
      sector: 'Construction & Materials',
      hq: 'Delano, MN & Atlanta, GA',
      description: 'Golf course renovation, construction, and restoration. Known for work on Donald Ross, Seth Raynor, and Tillinghast courses.',
      status: 'Specialty / Niche',
      brandNote: 'CONFIRMED: Keeps niche positioning. Different audience (architects vs. GCs). Went dark on social. restarting.',
    },
    {
      name: 'Hart Ranch Golf Club',
      sector: 'Real Estate',
      hq: 'Rapid City, SD',
      description: '#1 Public Golf Course in South Dakota (Golfweek). Part of Hart Ranch Development in the Black Hills.',
      status: 'Premium',
      brandNote: 'Independent brand.',
    },
    {
      name: 'Hart Ranch / Duininck Development',
      sector: 'Real Estate',
      hq: 'SD & Willmar, MN',
      description: 'Ranchette property development, campground operations, Waterview Business Park. Owns/operates water and sewer systems.',
      status: 'Growth',
      brandNote: 'Independent brand.',
    },
  ],

  oneLiners: {
    corporate: 'A fourth-generation, values-driven family portfolio spanning water management, construction, and real estate across the central United States.',
    recruiting: 'Join a family company that sees you as a whole person: your career, your family, your health, your community, your purpose.',
    partner: 'Nearly 100 years of building infrastructure, managing water, and developing communities, powered by shared values and multi-generational commitment.',
  },

  wellbeingFramework: ['Career', 'Family/Social', 'Finances', 'Health', 'Community', 'Spiritual'],

  milestones: [
    { year: '1919', event: 'Henry Duininck, age 16, begins road construction work in Minnesota' },
    { year: '1926', event: 'Duininck Brothers Construction officially formed' },
    { year: '1932', event: 'Bankruptcy during Depression; reorganized and rebuilt' },
    { year: '1975', event: 'Founded Prinsburg Tile Company (precursor to Prinsco)' },
    { year: '1984', event: 'Hart Ranch vacation resort established in South Dakota' },
    { year: '1986', event: 'Prinsburg Tile becomes Prinsco; shifts to plastic pipe manufacturing' },
    { year: '1988', event: 'Duininck Golf division established' },
    { year: '2004', event: 'Acquired Central Allied Company (becomes Duininck Concrete)' },
    { year: '2014', event: 'Central Team created for enterprise services across portfolio' },
    { year: '2018', event: 'Gen 4 formally introduced at first annual Family Summit' },
    { year: '2022', event: 'Portfolio restructured into 3 industry sectors' },
    { year: '2024', event: 'Minnesota Family Business Award' },
    { year: '2025', event: 'Nicole Behne joins as CMO. Brand unification kickoff. Stakeholder & customer interviews.' },
    { year: '2026', event: 'CENTENNIAL YEAR. Brand unification launch. July 25 public event (~2,000). Documentary videos. Website consolidation.' },
  ],

  awards: [
    { year: '2024', award: 'Minnesota Family Business Award' },
    { year: '2023', award: '#1 Public Golf Course in South Dakota (Golfweek). Hart Ranch' },
    { year: '2022', award: 'Willmar Foundation Community Building Award' },
    { year: '2003', award: 'Sheldon G. Hayes Award. National Asphalt Pavement Association' },
  ],
};

export const BRAND_IDENTITY = {
  archetype: 'The Builder / The Steward',
  archetypeNote: 'Duininck embodies the Builder archetype (creating tangible, lasting infrastructure) crossed with the Steward (protecting and growing what has been entrusted). Nicole\'s own words validate this: she has "more purpose than ever" working at a roads-and-golf company because the foundation of the organization is that strong.',
  brandAnchor: 'BUILT TO LAST',
  brandAnchorNote: 'Every subsidiary maps back to this: roads that last, pipes that endure, courses that stand the test of time, communities that grow. The family itself is the proof. 100 years, 4 generations, still building. No competitor can fabricate this.',
  coreNarrative: 'For 100 years, the Duininck family has been building things that endure: roads, water systems, golf courses, communities, and a company culture rooted in faith and service. Now in its fourth generation, Duininck Companies proves that when you build on the right foundation, growth is not just possible but inevitable.',

  // THE UNTOUCHABLE WEDGE. what makes Duininck impossible to replicate
  wedge: {
    headline: 'The Full Truck',
    description: 'When a Duininck truck pulls up on a site, it doesn\'t just represent one crew or one capability. It represents 100 years of earned trust, 4 generations of family commitment, the full weight of 6+ operating companies, and a values system that treats every employee as a whole person. No competitor can build this overnight. No competitor can fake a century.',
    proofPoints: [
      '100 years of continuous family operation. survived the Depression, diversified across a century',
      'Blue-collar workforce that stays because they\'re treated as whole people, not headcount',
      'A CMO from Fortune 200 companies who says she has "more purpose here than anywhere"',
      'Golf division so respected they restore courses by Ross, Raynor, and Tillinghast. the legends',
      'Own the infrastructure: water systems, sewer systems, aggregates, pipe manufacturing. Vertically integrated.',
      'Faith-based values that are authentic and longstanding, not a corporate veneer',
      '4th generation is already in the business. The succession isn\'t a plan. it\'s happening.',
    ],
  },

  personality: [
    { trait: 'Steadfast', description: 'Reliable, consistent, and proven over generations. We show up and deliver. 100 years proves it.' },
    { trait: 'Humble', description: 'Let the work speak. These are blue-collar people who won\'t even go on camera. because the work IS the story.' },
    { trait: 'Generous', description: 'With time, talent, and resources. Giving is a reflex, not a strategy. The wellbeing framework isn\'t HR theater.' },
    { trait: 'Forward-Looking', description: 'Rooted in tradition but always building for the next generation. Gen 4 is already in the business. Brand unification is happening NOW.' },
    { trait: 'Grounded', description: 'Connected to the land, the work, the people, the values. You can\'t fake this. The dirt under the fingernails is real.' },
  ],

  doSay: [
    'Built to last. 100 years and counting',
    'People. Values. Growth.',
    'Four generations strong',
    'When our truck pulls up, you get all of us',
    'We see the whole person',
    'Building for the next generation',
    'The foundation matters',
    'Enduring partnerships',
  ],
  dontSay: [
    'Disrupting the industry',
    'Move fast and break things',
    'Crushing it',
    'Innovative solutions (too startup-y)',
    'Synergistic alignment',
    'Best-in-class (overused, unsubstantiated)',
    'We\'re like a family (they ARE a family. don\'t dilute it)',
  ],
};

export const VISUAL_IDENTITY = {
  headline: 'Six websites, six palettes, zero shared colors. The visual system needs unification under Duininck Teal.',
  status: 'Brand unification in progress. Websites being revised, concrete brand being eliminated.',
  brandGuideUrl: 'brand-guide.html',

  // ---- PRIMARY PALETTE ----
  primaryPalette: [
    { name: 'Duininck Teal', hex: '#004F71', rgb: '0, 79, 113', cmyk: '100, 30, 0, 56', pms: 'PMS 302 C', role: 'Primary brand color', usage: 'Headers, navigation, brand elements, logo, primary buttons' },
    { name: 'Duininck Orange', hex: '#FE5000', rgb: '254, 80, 0', cmyk: '0, 69, 100, 0', pms: 'PMS 1655 C', role: 'Accent / CTA / energy', usage: 'Call-to-action buttons, highlights, centennial badge, urgency indicators' },
    { name: 'Dark Navy', hex: '#1E293B', rgb: '30, 41, 59', cmyk: '49, 31, 0, 77', pms: 'PMS 289 C', role: 'Text / headers', usage: 'Body text, headlines, paragraph copy' },
    { name: 'White', hex: '#FFFFFF', rgb: '255, 255, 255', cmyk: '0, 0, 0, 0', pms: 'N/A', role: 'Backgrounds', usage: 'Page backgrounds, card surfaces, reverse text on dark' },
    { name: 'Warm Gray', hex: '#F7F6F3', rgb: '247, 246, 243', cmyk: '0, 0, 2, 3', pms: 'Warm Gray 1 C', role: 'Background / subtle surfaces', usage: 'Section backgrounds, card surfaces, soft contrast areas' },
  ],

  // ---- CENTENNIAL CAMPAIGN PALETTE ----
  centennialPalette: [
    { name: 'Centennial Orange', hex: '#FE5000', role: 'Lead campaign color', usage: 'Hero badges, event materials, celebration branding' },
    { name: 'Duininck Teal', hex: '#004F71', role: 'Grounding color', usage: 'Headlines, structural elements alongside orange' },
    { name: 'Heritage Gold', hex: '#D4880B', role: 'Heritage accent', usage: 'Century marks, milestone callouts, awards' },
    { name: 'Warm White', hex: '#F7F6F3', role: 'Clean background', usage: 'Event collateral backgrounds' },
    { name: 'Deep Navy', hex: '#1E293B', role: 'Formal text', usage: 'Formal event invitations, printed programs' },
  ],

  // ---- SUB-BRAND PALETTES ----
  subBrandPalettes: [
    { brand: 'Duininck Golf', status: 'Niche (retains distinct positioning)', colors: [
      { name: 'Golf Dark Green', hex: '#16251C', role: 'Primary' },
      { name: 'Golf Vivid Green', hex: '#12C058', role: 'Accent' },
      { name: 'Golf Sage', hex: '#83B348', role: 'Secondary' },
    ], note: 'Golf retains niche visual treatment. Different audience (architects vs. GCs). Endorsed as "A Duininck Company."' },
    { brand: 'Prinsco', status: 'Independent brand', colors: [
      { name: 'Prinsco Blue', hex: '#4171B4', role: 'Primary' },
      { name: 'Prinsco Yellow', hex: '#FFEA52', role: 'Accent' },
    ], note: 'Maintains independent brand identity. Different market (water management). Zero Duininck mention on site.' },
    { brand: 'Hart Ranch', status: 'Independent brand', colors: [
      { name: 'Hart Forest Green', hex: '#1C4538', role: 'Primary' },
      { name: 'Hart Dark Teal', hex: '#00594C', role: 'Secondary' },
      { name: 'Hart Warm Tan', hex: '#D1C1A8', role: 'Accent' },
    ], note: '#1 Public Course in SD. Independent premium positioning. Zero Duininck mention on site.' },
    { brand: 'Duininck Concrete', status: 'Merging (brand being eliminated)', colors: [
      { name: 'Concrete Red', hex: '#D72138', role: 'Primary' },
      { name: 'Concrete Light Teal', hex: '#68CCD1', role: 'Secondary' },
      { name: 'Concrete Gold', hex: '#FBB040', role: 'Accent' },
    ], note: 'Brand being retired and folded into unified Duininck brand. Colors will be deprecated.' },
  ],

  // ---- TYPOGRAPHY ----
  typography: {
    current: { primary: 'Roboto (300, 400)', note: 'Currently on website. Website redesign underway.' },
    proposed: [
      { name: 'Display', family: 'Inter', weight: '800 Extra Bold', tracking: '-0.02em', sample: 'Built to Last', usage: 'Headlines, brand anchor, hero text' },
      { name: 'Subheading', family: 'Inter', weight: '600 Semi Bold', tracking: 'Normal', sample: 'Four generations strong', usage: 'Section headers, card titles, subheads' },
      { name: 'Body', family: 'Inter', weight: '400 Regular', tracking: 'Normal', sample: 'A century of building things that endure across Minnesota, South Dakota, Texas, and Georgia.', usage: 'Body copy, descriptions, long-form content' },
      { name: 'Data / Label', family: 'JetBrains Mono', weight: '400 Regular', tracking: '0.12em', sample: 'EST. 1926 · WILLMAR, MN', usage: 'Labels, metadata, data points, uppercase elements' },
    ],
    competitorFonts: [
      { company: 'Knife River', fonts: 'Montserrat (900, uppercase) + Poppins' },
      { company: 'Ames Construction', fonts: 'Poppins + Poppins' },
      { company: 'C.S. McCrossan', fonts: 'Montserrat + Poppins' },
      { company: 'Landscapes Unlimited', fonts: 'Poppins + Open Sans' },
    ],
    differentiation: 'Montserrat + Poppins dominates heavy civil. Duininck should avoid these to differentiate visually.',
  },

  // ---- LOGO INVENTORY ----
  logoInventory: [
    { property: 'duininckcompanies.com', type: 'SVG wordmark', format: 'SVG', hasTagline: false, parentVisible: true },
    { property: 'duininck.com', type: 'SVG wordmark', format: 'SVG', hasTagline: false, parentVisible: false },
    { property: 'duininckgolf.com', type: 'PNG wordmark', format: 'PNG (1000x259px)', hasTagline: false, parentVisible: false },
    { property: 'dconcrete.com', type: 'PNG wordmark + icon', format: 'PNG', hasTagline: false, parentVisible: false },
    { property: 'prinsco.com', type: 'PNG wordmark + descriptor', format: 'PNG (2550x1006px)', hasTagline: true, parentVisible: false },
    { property: 'hartranch.com', type: 'PNG crest/shield mark', format: 'PNG (93x80px)', hasTagline: false, parentVisible: false },
  ],

  partnershipLockups: {
    status: 'Not yet defined',
    problems: [
      'No "A Duininck Company" endorsement badge exists anywhere today',
      'No subsidiary logo visually references the parent brand',
      'Prinsco uses Bank Gothic-style type that looks nothing like any other Duininck entity',
      'Logo formats are inconsistent: SVG (parent), PNG with shadow (Golf), oversized PNG (Prinsco), tiny PNG (Hart Ranch)',
    ],
    recommendations: [
      'Create an "A Duininck Company" endorsement badge in teal (#004F71) with parent logo',
      'Place endorsement badge in footer of Golf and Concrete sites immediately',
      'Standardize all logos to SVG format with defined clear space and minimum sizes',
      'Design the visual endorsement system: how does "Duininck Golf" relate to "Duininck" visually?',
      'Define approved color variations: full color, reversed (white), single-color (teal), grayscale',
    ],
  },

  // ---- PHOTOGRAPHY GUIDELINES ----
  photography: {
    principles: [
      { rule: 'No talking heads', detail: 'Blue-collar workforce will not go on camera. Use cinematic b-roll with voiceover instead. Hands, equipment, silhouettes are all fair game.' },
      { rule: 'Film the work, not the workers', detail: 'Equipment in action, grading in progress, paving rolling out, golf course shaping. The work IS the content. Let craftsmanship speak.' },
      { rule: 'Carousels over graphics', detail: 'Static branded graphics get two likes. Project story carousels (before/during/after) perform. Real imagery only.' },
      { rule: 'Golden hour is the standard', detail: 'Both Golf and Concrete teams already favor sunrise and golden hour shots. Formalize this as the unified photography language across all divisions.' },
      { rule: 'Drone and aerial are mandatory', detail: 'Showcase scale and craftsmanship from above. Required for golf course projects and large civil sites. Budget for drone capture on every major project.' },
      { rule: 'Equipment as hero', detail: 'Heavy equipment is aspirational to the recruiting audience. Treat excavators, pavers, and graders like product photography: clean angles, dramatic lighting, sense of power.' },
    ],
    applicationGuidelines: [
      { format: 'One Sheets / Sell Sheets', rule: 'Full-bleed hero image in the top third. Equipment or completed project, never stock imagery. Teal headline overlay.' },
      { format: 'Website Pages', rule: 'Cinematic hero with text overlay. Minimum 1920px wide. Dark gradient overlay for text readability. Parallax optional.' },
      { format: 'Pitch Decks / RFPs', rule: 'Project photography on section dividers. Data slides use warm gray (#F7F6F3) backgrounds. No clip art. Ever.' },
      { format: 'Social Posts', rule: 'Carousel format preferred. Before/during/after progression for projects. Real job site photos only. No branded graphics.' },
      { format: 'Job Descriptions / Recruiting', rule: 'Show equipment and crew at work (faces not required). Sunrise/golden hour framing. Aspirational scale and craft.' },
      { format: 'Video / Reels', rule: 'Cinematic b-roll with voiceover narration. 15 to 60 seconds. Drone establishing shot to open. No interview-style talking heads.' },
      { format: 'Landing Pages', rule: 'Full-width hero image. Parallax scroll on project imagery where possible. Before/after sliders for Golf course transformation stories.' },
      { format: 'Internal Comms', rule: 'Candid crew shots (backs and silhouettes are fine). Job site progress documentation style. Safety-first framing in every image.' },
    ],
    captureTiming: 'Golf course beauty shots come a YEAR after construction (growing season). The 2026 season captures will feed 2027 content. Capture schedules must be planned NOW for every active project.',
    assetLinks: [
      { label: 'Photography Style Guide', path: '02_Visual_Identity/photography-style.md', note: 'Google Drive' },
      { label: 'Shot List Templates', path: '07_Content_Strategy/seasonal-capture-calendar.md', note: 'Google Drive' },
      { label: 'Asset Library', path: '09_Assets_Library/asset-inventory.md', note: 'Google Drive' },
    ],
  },

  // ---- GAPS & EVOLUTION ----
  gaps: [
    { area: 'No Shared Visual Language', severity: 'Critical', detail: 'Zero shared hex codes across 6 websites. Zero shared fonts. Three different CMS platforms. A visitor to any two Duininck properties would never guess they are related.', action: 'Define unified color system where teal (#004F71) appears as family color on every Duininck-branded property.' },
    { area: 'No Endorsement Badge', severity: 'Critical', detail: 'No "A Duininck Company" badge exists anywhere. No subsidiary logo references the parent visually. No footer attribution connects the family.', action: 'Design and deploy endorsement badge for Golf, Concrete (while it exists), and future unified brand.' },
    { area: 'No Visible Tagline on Any Website', severity: 'Critical', detail: 'Every competitor has a visible tagline. Duininck has none on any live property. "Built to Last" exists only in Brand HQ, not on any customer-facing page.', action: 'Add "Built to Last" or "People. Values. Growth." to all Duininck web properties before centennial launch.' },
    { area: 'Inconsistent Logo Formats', severity: 'High', detail: 'Parent uses SVG (good). Others use PNG at wildly different dimensions (93px to 2550px). Some have drop shadows. No shared design language across logos.', action: 'Convert all logos to SVG. Define clear space, minimum size, and approved color variations for each.' },
    { area: 'No Photography Style Guide', severity: 'High', detail: 'Sunrise/golden hour thread exists organically (Golf and Concrete teams) but is accidental, not systematic. No shared shot list, color grading standard, or composition rules.', action: 'Create unified photography style guide building on the golden hour thread. Include shot lists by content type and project phase.' },
    { area: 'Typography Fragmentation', severity: 'High', detail: 'Six sites use six different font stacks: Roboto (parent), Poppins (Golf), Teko/Open Sans (Concrete), BankGothicPro (Prinsco), Outfit/Karla (Hart Ranch).', action: 'Standardize on one font pairing for all Duininck-branded properties. Avoid Montserrat/Poppins (competitor territory).' },
    { area: 'Brand Maturity Gap', severity: 'Medium', detail: 'Knife River scores ~9/10 for brand maturity (trademarked tagline, consistent system). Ames scores ~8/10. Duininck scores ~5/10 due to visual fragmentation despite a strong teal + orange palette foundation.', action: 'Close the gap by unifying visuals at centennial launch (July 25, 2026). The palette is strong. The system around it is missing.' },
    { area: 'No Print/Collateral Standards', severity: 'Medium', detail: 'No documented standards for business cards, letterhead, signage, vehicle wraps, or equipment branding. Trucks are a primary brand touchpoint and have no wrap standard.', action: 'Develop print standards as part of unified brand rollout. Vehicle wraps should be first priority (most visible public touchpoint).' },
  ],

  // ---- CROSS-PROPERTY VISUAL AUDIT ----
  propertyAudit: [
    { property: 'duininckcompanies.com', primary: '#004F71', secondary: '#FE5000', headingFont: 'Roboto', bodyFont: 'Roboto', cms: 'WordPress/Astra', buttonStyle: 'Sharp (2px radius)' },
    { property: 'duininck.com', primary: '#1B5633', secondary: 'N/A', headingFont: 'Custom theme', bodyFont: 'Custom theme', cms: 'WordPress (custom)', buttonStyle: 'Green solid' },
    { property: 'duininckgolf.com', primary: '#16251C', secondary: '#12C058', headingFont: 'Poppins', bodyFont: 'Poppins', cms: 'WordPress/Phlox Pro', buttonStyle: 'Pill (9999px)' },
    { property: 'dconcrete.com', primary: '#D72138', secondary: '#68CCD1', headingFont: 'Teko', bodyFont: 'Open Sans', cms: 'DudaOne', buttonStyle: 'Square (1px)' },
    { property: 'prinsco.com', primary: '#4171B4', secondary: '#FFEA52', headingFont: 'BankGothicPro', bodyFont: 'Arial', cms: 'WordPress (custom)', buttonStyle: 'Pill (9999px)' },
    { property: 'hartranch.com', primary: '#1C4538', secondary: '#00594C', headingFont: 'Outfit', bodyFont: 'Karla', cms: 'Joomla/YooTheme', buttonStyle: 'Standard' },
  ],

  brandMaturity: [
    { company: 'Knife River', score: 9, note: 'Trademarked tagline, consistent system, strong employer brand (@lifeatknife)' },
    { company: 'Ames Construction', score: 8, note: 'Unified ESOP messaging, consistent colors, "One Ames" brand system' },
    { company: 'C.S. McCrossan', score: 7, note: 'Consistent but dated. Family heritage visible but not leveraged.' },
    { company: 'Landscapes Unlimited', score: 7, note: 'Clean golf-focused identity. NGF Top 100 recognition every year.' },
    { company: 'Duininck', score: 5, note: 'Strong teal + orange foundation, but 6 fragmented websites with zero visual connection.' },
  ],

  // ---- SURFACES / EXTENDED PALETTE ----
  surfacesPalette: [
    { name: 'Card Surface', hex: '#FFFFFF', usage: 'Primary card backgrounds, content containers' },
    { name: 'Page Background', hex: '#F7F6F3', usage: 'Page-level background, section separation' },
    { name: 'Soft Surface', hex: '#F0EEEB', usage: 'Secondary card backgrounds, hover states, input fields' },
    { name: 'Muted Surface', hex: '#E8E5E0', usage: 'Disabled states, subtle dividers, inactive elements' },
    { name: 'Teal Tint 8%', hex: '#004F7114', usage: 'Selected states, active tab backgrounds, highlight rows' },
    { name: 'Teal Tint 4%', hex: '#004F710A', usage: 'Subtle hover states, callout backgrounds' },
    { name: 'Orange Tint 8%', hex: '#FE500014', usage: 'Warning/urgency backgrounds, centennial callouts' },
    { name: 'Success Tint', hex: '#2E7D4F1A', usage: 'Confirmation states, completed indicators' },
    { name: 'Error Tint', hex: '#C03A2B1A', usage: 'Error states, critical alerts, competitor flags' },
  ],

  // ---- AUDIENCE COLOR EMPHASIS ----
  audienceColorNotes: [
    { audience: 'GCs & Public Works', emphasis: 'Lead with Teal (#004F71). Conveys authority, reliability, and institutional trust. Orange for CTAs only.', rationale: 'This audience responds to professional, understated visuals. Avoid excessive orange, which reads as consumer-facing.' },
    { audience: 'Prospective Employees', emphasis: 'Lead with Orange (#FE5000) paired with Teal. Orange conveys energy, opportunity, and warmth.', rationale: 'Recruiting content needs to stop the scroll. Orange draws attention on Indeed and Facebook. Teal grounds it as serious.' },
    { audience: 'Golf Architects', emphasis: 'Lead with Golf Green (#16251C) and Sage (#83B348). Teal as parent endorsement only.', rationale: 'Golf is a distinct aesthetic world. Dark greens signal sophistication and craft. The Duininck teal should appear only in the "A Duininck Company" badge.' },
    { audience: 'Current Employees', emphasis: 'Equal Teal and Orange. This is the full brand expression. Add Heritage Gold (#D4880B) for centennial moments.', rationale: 'Internal communications should feel like the complete Duininck identity. No sub-brand filtering needed.' },
    { audience: 'Communities', emphasis: 'Teal (#004F71) with warm neutrals. Warm Gray (#F7F6F3) backgrounds. Minimal orange.', rationale: 'Community-facing materials should feel trusted, established, and approachable. Warm neutrals soften the institutional teal.' },
  ],

  // ---- SOURCED LOGO FILES ----
  sourcedLogos: [
    { brand: 'Duininck Companies', file: 'Duininck-Color.svg', url: 'https://duininckcompanies.com/wp-content/uploads/2024/09/Duininck-Color.svg', format: 'SVG', status: 'sourced', note: 'Clean vector from website. Best quality available.' },
    { brand: 'Duininck Companies', file: 'Group-17.svg', url: 'https://duininckcompanies.com/wp-content/uploads/2024/09/Group-17.svg', format: 'SVG', status: 'sourced', note: 'Footer icon/secondary mark.' },
    { brand: 'Duininck Companies', file: 'dnkc-social-share.jpg', url: 'https://duininckcompanies.com/wp-content/uploads/2024/09/dnkc-social-share.jpg', format: 'JPG (2400x1350)', status: 'sourced', note: 'Social sharing card image.' },
    { brand: 'Duininck Inc.', file: 'duinink-logo.svg', url: 'https://www.duininck.com/wp-content/uploads/2018/07/duinink-logo.svg', format: 'SVG', status: 'sourced', note: 'Filename has typo ("duinink"). Clean vector.' },
    { brand: 'Duininck Inc.', file: 'duinink-logo-white.svg', url: 'https://www.duininck.com/wp-content/uploads/2018/07/duinink-logo-white.svg', format: 'SVG', status: 'sourced', note: 'White/reversed version for dark backgrounds.' },
    { brand: 'Duininck Golf', file: 'Duininck-Golf-Black.png', url: 'https://www.duininckgolf.com/wp-content/uploads/2022/11/Duininck-Golf-Black.png', format: 'PNG (1000x259)', status: 'sourced', note: 'Black version. No SVG available.' },
    { brand: 'Duininck Golf', file: 'Duininck-Golf-white-2Shadow.png', url: 'https://www.duininckgolf.com/wp-content/uploads/2022/12/Duininck-Golf-white-2Shadow.png', format: 'PNG', status: 'sourced', note: 'White with drop shadow. Not ideal for print.' },
    { brand: 'Prinsco', file: 'Prinsco_Logo-WaterMgmtSol-2018_Primary-Logo.png', url: 'https://www.prinsco.com/wp-content/uploads/2023/11/Prinsco_Logo-WaterMgmtSol-2018_Primary-Logo.png', format: 'PNG (2550x1006)', status: 'sourced', note: 'Includes "Water Management Solutions" descriptor. Very large file.' },
    { brand: 'Hart Ranch', file: '', url: '', format: '', status: 'missing', note: 'Not sourced yet. Can be pulled from hartranch.com or provided via shared Drive folder.' },
    { brand: 'Duininck Concrete', file: '', url: '', format: '', status: 'missing', note: 'Not sourced. Brand being eliminated but needed for transition docs.' },
  ],

  fontSources: [
    { font: 'Inter', url: 'https://fonts.google.com/specimen/Inter', license: 'OFL (free)', status: 'proposed', note: 'Recommended for unified brand. Display + body.' },
    { font: 'JetBrains Mono', url: 'https://fonts.google.com/specimen/JetBrains+Mono', license: 'OFL (free)', status: 'proposed', note: 'Recommended for data, labels, metadata.' },
    { font: 'Roboto', url: 'https://fonts.google.com/specimen/Roboto', license: 'Apache 2.0 (free)', status: 'current', note: 'Currently on duininckcompanies.com. Will be replaced.' },
  ],

  // ---- SOCIAL VISUAL STANDARDS ----
  socialStandards: {
    platforms: [
      {
        platform: 'LinkedIn',
        profilePic: '400x400px, square crop. Use Duininck teal logo mark on white background. Company pages: use "D" initial or full wordmark.',
        coverImage: '1128x191px (desktop), 1128x220px (mobile). Use project photography with teal gradient overlay. "Built to Last" tagline anchored bottom-left.',
        postDimensions: 'Single image: 1200x627px (landscape) or 1080x1080px (square). Carousel: 1080x1080px per slide. Video: 1920x1080px (16:9).',
        colorEmphasis: 'Teal-dominant. Professional tone. Orange for CTAs in carousel end-slides only.',
      },
      {
        platform: 'Instagram',
        profilePic: '320x320px, circular crop. Use teal "D" mark or full wordmark centered on white.',
        coverImage: 'N/A (Instagram has no cover photo). Bio: include centennial mention and website link.',
        postDimensions: 'Feed: 1080x1080px (square) or 1080x1350px (portrait, preferred). Stories/Reels: 1080x1920px (9:16). Carousel: 1080x1350px per slide.',
        colorEmphasis: 'Photography-forward. Let the work speak. Brand colors in text overlays and end-slides, not as backgrounds.',
      },
      {
        platform: 'Facebook',
        profilePic: '170x170px (desktop), 128x128px (mobile). Same as LinkedIn: logo mark on white.',
        coverImage: '820x312px (desktop), 640x360px (mobile). Community-focused project image. Warm, approachable framing.',
        postDimensions: 'Image: 1200x630px (landscape). Square: 1080x1080px. Video: 1280x720px minimum.',
        colorEmphasis: 'Warm palette. Teal + Warm Gray. This is the community channel, so less formal than LinkedIn.',
      },
    ],
    contentTemplates: [
      { type: 'Project Carousel', slides: '5-7 slides', structure: 'Slide 1: Before photo with project name. Slides 2-5: During/progress shots. Slide 6: After/completion beauty shot. Slide 7: Branded end-slide with "Built to Last" and Duininck logo.', colors: 'Photography-dominant. Teal text overlay on Slide 1 and 7. No colored backgrounds on photo slides.' },
      { type: 'Employee Spotlight', slides: '3-4 slides', structure: 'Slide 1: Worker silhouette or hands-at-work photo with name and role. Slide 2: Stats (years at company, projects, fun fact). Slide 3: Quote overlay on equipment/site photo. Slide 4: "We see the whole you" branded end-slide.', colors: 'Teal header text. Warm Gray backgrounds on stat slides. Orange accent on the "whole you" end-slide.' },
      { type: 'Equipment Feature', slides: '3-5 slides', structure: 'Slide 1: Equipment hero shot (golden hour or dramatic angle). Slide 2: Specs or capability callout. Slide 3-4: Equipment in action on a live project. Slide 5: Branded end-slide.', colors: 'Let equipment photography dominate. Teal for any text overlays. Minimal color treatment.' },
      { type: 'Recruiting Post', slides: '1 image or 4-slide carousel', structure: 'Single image: equipment beauty shot + "Now Hiring" + pay range + QR code. Carousel: Slide 1 headline, Slide 2 what the role involves, Slide 3 wellbeing framework, Slide 4 how to apply.', colors: 'Orange-dominant for recruiting. Stops the scroll. Teal for supporting text. White backgrounds on info slides.' },
      { type: 'Community Impact', slides: '1 image', structure: 'Completed project photo from the community perspective (road they drive on, park they use). Overlay with location and project name. Keep simple.', colors: 'Teal + Warm Gray. Approachable. No hard sell.' },
      { type: 'Centennial Content', slides: '3-5 slides', structure: 'Slide 1: "100 Years" badge with Heritage Gold. Slide 2: Historic photo (if available) or founding story text. Slide 3: Modern project photo. Slide 4: "Built to Last" with centennial date. Slide 5: Event details or CTA.', colors: 'Orange + Heritage Gold (#D4880B) lead. Teal anchors. This is the one time orange dominates the full palette.' },
    ],
  },

  // ---- PARTNERSHIP LOCKUPS ----
  lockupMockups: [
    {
      name: 'Horizontal Endorsement',
      description: 'Sub-brand logo on the left, vertical divider line, "A Duininck Company" text + parent logo on the right.',
      mockup: '[Duininck Golf Logo]  |  A Duininck Company [D]',
      usage: 'Website headers, document footers, email signatures.',
      clearSpace: 'Minimum clear space around the lockup equals the height of the "D" mark on all sides.',
    },
    {
      name: 'Stacked Endorsement',
      description: 'Sub-brand logo centered on top, "A Duininck Company" line below in smaller text.',
      mockup: '     [Duininck Golf Logo]\n      A Duininck Company',
      usage: 'Social media profiles, square formats, signage where width is constrained.',
      clearSpace: 'Same rule: "D" mark height as minimum margin.',
    },
    {
      name: 'Badge Only',
      description: '"A Duininck Company" in a small pill badge. No sub-brand logo. Used as a footer element.',
      mockup: '[ A Duininck Company ]',
      usage: 'Website footers, collateral fine print, email footer strips.',
      clearSpace: 'Badge should sit at least 16px from other elements.',
    },
    {
      name: 'Social Profile Lockup',
      description: 'For social media profile pictures where space is limited. "D" mark in teal on white circle.',
      mockup: '  [D]\n  ----\n Teal on\n  White',
      usage: 'LinkedIn, Instagram, Facebook profile pictures for Duininck-branded pages.',
      clearSpace: 'Logo mark centered with equal padding on all sides within the circle crop.',
    },
  ],
  lockupRules: [
    { rule: 'Do', detail: 'Use the horizontal endorsement on all Golf properties. It connects Golf to the parent brand for the first time.' },
    { rule: 'Do', detail: 'Use the badge-only version in email footers for all Duininck-branded communications.' },
    { rule: 'Do', detail: 'Maintain the clear space rule (height of "D" mark) on every application.' },
    { rule: 'Do', detail: 'Use teal (#004F71) endorsement text on white/light backgrounds. White text on dark/photography backgrounds.' },
    { rule: 'Don\'t', detail: 'Never place the endorsement badge over busy photography. Use a solid or gradient bar behind it.' },
    { rule: 'Don\'t', detail: 'Never use the parent Duininck logo at a larger size than the sub-brand logo in any lockup.' },
    { rule: 'Don\'t', detail: 'Never combine the endorsement with Prinsco. Prinsco is intentionally independent.' },
    { rule: 'Don\'t', detail: 'Never rotate, stretch, recolor, or add effects to any logo in the lockup.' },
  ],
};

// CONFIRMED segments from Nicole's call
export const AUDIENCE_SEGMENTS = [
  {
    name: 'Public Works & General Contractors',
    description: 'County road departments, municipal engineers, DOT project managers, and general contractors who bid and contract heavy civil work.',
    priority: 'Primary',
    status: 'CONFIRMED by Nicole',
    nicoleNote: 'Nicole conducted customer interviews with GCs and public works during brand unification research.',
  },
  {
    name: 'Golf Course Architects & Owners',
    description: 'Course architects, private club boards, resort operators, and municipal golf authorities. Niche audience that visits duininckgolf.com specifically.',
    priority: 'Primary (Niche)',
    status: 'CONFIRMED by Nicole',
    nicoleNote: '"Golf still has a bit of a niche because of the architects that come to that site versus general contractors and public works."',
  },
  {
    name: 'Prospective Employees (Seasonal + Full-Time)',
    description: 'Blue-collar operators, skilled trades, equipment operators, and laborers. especially seasonal hires needed every construction season.',
    priority: 'Critical',
    status: 'CONFIRMED by Nicole',
    nicoleNote: '"We\'re hiring every year for this seasonal help. We need people to see what an amazing organization this is so that they want to come work for us."',
  },
  {
    name: 'Current Employees (700+ Field Workers)',
    description: 'Existing workforce, mostly in the field, who are disconnected from the brand story. No intranet. No internal comms platform.',
    priority: 'Critical (Internal)',
    status: 'CONFIRMED by Nicole',
    nicoleNote: '"We have over 700 employees that are out in the field that aren\'t getting the information. This company is just amazing... the story is so rich."',
  },
  {
    name: 'Communities Where They Live & Work',
    description: 'The municipalities, towns, and regions where Duininck operates. Community reputation drives public works contracts and recruiting.',
    priority: 'High',
    status: 'CONFIRMED by Nicole',
    nicoleNote: '"I feel like I have this opportunity to share that with the employees and the communities where we live and work."',
  },
  {
    name: 'Agricultural Customers (Prinsco)',
    description: 'Farmers and agricultural businesses purchasing drainage pipe and water management solutions through Prinsco.',
    priority: 'Primary (Prinsco)',
    status: 'Inferred. Prinsco operates somewhat independently',
    nicoleNote: 'Nicole\'s scope is construction & materials sector. Prinsco may have its own marketing.',
  },
];

export const COMPETITORS = {
  note: 'Full competitive analysis pending. Key insight: Duininck\'s real competitive advantage isn\'t operational. it\'s the 100-year family story, the values culture, and the "whole person" employee approach. No competitor can replicate a century.',
  bySubsidiary: [
    { subsidiary: 'Prinsco', competitors: ['ADS (Advanced Drainage Systems)', 'Hancor', 'Contech', 'Local tile manufacturers'], category: 'Water Management' },
    { subsidiary: 'Duininck Heavy Civil', competitors: ['Ames Construction', 'C.S. McCrossan', 'Knife River', 'Aggregate Industries'], category: 'Construction' },
    { subsidiary: 'Duininck Concrete', competitors: ['Cemstone', 'Aggregate Industries', 'Knife River Materials', 'Local ready-mix plants'], category: 'Materials (brand being absorbed)' },
    { subsidiary: 'Duininck Golf', competitors: ['Landscapes Unlimited', 'Wadsworth Golf', 'Heritage Links', 'McDonald & Sons'], category: 'Golf Construction' },
    { subsidiary: 'Hart Ranch', competitors: ['Local SD golf courses', 'Regional resorts', 'Custer State Park area properties'], category: 'Real Estate / Golf' },
  ],
};

// ---- CENTENNIAL DATA ----
export const CENTENNIAL = {
  year: 2026,
  event: {
    date: 'July 25, 2026',
    attendance: '~2,000 people',
    type: 'Public celebration / community event',
    content: 'Documentary videos with historic footage, AI-animated stills, family history',
    videoPartner: 'Nicole\'s contact from Hormel days. already producing documentary',
  },
  narrative: 'This isn\'t just an anniversary party. It\'s a proof point. Most construction companies don\'t survive 20 years. Duininck has survived 100. including a Depression-era bankruptcy, generational transitions, industry consolidation, and market shifts. The centennial is the ultimate brand credential.',
  opportunities: [
    'Centennial as recruiting anchor: "Join a company that\'s been building for 100 years. and is just getting started"',
    'Centennial as customer proof: "When you hire Duininck, you hire a century of experience"',
    'Centennial as internal pride: Give 700+ field employees a reason to feel part of something historic',
    'Centennial as press moment: Local and trade media coverage of 100-year family business milestone',
    'Centennial as brand unification moment: Launch the unified brand AT the centennial event',
  ],
};

// ---- CONTENT STRATEGY INTEL (from Nicole) ----
export const CONTENT_INTEL = {
  currentState: {
    tools: 'Buffer (unhappy) + Excel files (clunky) + Claude/Co-pilot/ChatGPT for writing',
    team: '3 people. Nicole + designer + admin. Designer can shoot but can\'t own strategy.',
    golfSocial: 'DARK. Sam and a few guys were doing it themselves with an agency. Stopped because too busy.',
    messagingFramework: 'Nicole built audience-based messaging framework. "Great foundations but still feels clunky."',
  },
  keyInsights: [
    {
      insight: 'Content capture timing is offset by a full year',
      detail: 'Golf course beauty shots don\'t come until a YEAR after construction. when the grass grows in, shrubbery fills out. Sam confirmed: "The beautiful pictures don\'t come until a year after we\'re done." This means 2026 captures feed 2027 content.',
      implication: 'Must plan a capture calendar NOW for the full 2026 construction season. Every project needs a "capture plan" with before/during/after phases mapped to content release dates 6-12 months later.',
    },
    {
      insight: 'Blue-collar workforce won\'t go on camera',
      detail: 'Nicole was explicit: "These guys are blue-collar. They don\'t want to talk to anybody. They\'re not going to be on camera." But she can video them DOING the work and add voiceover.',
      implication: 'Content strategy must be built around cinematic b-roll, voiceover narratives, equipment footage, and drone work. NOT talking heads. This is actually a brand advantage: the work speaks for itself.',
    },
    {
      insight: 'Graphics don\'t perform on social. carousels do',
      detail: 'Nicole and Reagan agreed: static graphics get "two likes." Carousels work. Video works. Real content works.',
      implication: 'Stop making branded graphics. Build carousel templates for project stories (before/during/after), employee spotlights (photo + stats + quote overlay), and equipment/process sequences.',
    },
    {
      insight: 'Nicole wants process automation, not more people',
      detail: 'She\'s already using AI tools. She doesn\'t need more bodies. she needs a system that makes her 3-person team operate like a 10-person team.',
      implication: 'The deliverable here isn\'t "content". it\'s a content SYSTEM. Workflow, templates, AI-assisted production pipeline, scheduling, and measurement.',
    },
  ],
  seasonalCapturePlan: {
    note: 'Construction is seasonal. Must maximize capture during active season (April-November).',
    phases: [
      { month: 'Apr-May', activity: 'Season kickoff. Document mobilization, crew preparation, equipment staging. Recruit content.', contentType: 'Recruiting + culture' },
      { month: 'Jun-Aug', activity: 'Peak construction. Capture active projects: paving, grading, golf course work, underground. Drone footage.', contentType: 'Project stories + capabilities' },
      { month: 'Sep-Oct', activity: 'Project completions. Before/after documentation. Community impact shots.', contentType: 'Case studies + community' },
      { month: 'Nov-Dec', activity: 'Wrap-up. Holiday/gratitude content. Year-in-review. Plan next season.', contentType: 'Values + gratitude + planning' },
      { month: 'Jan-Mar', activity: 'Off-season. Publish 2026 captures as 2027 content. Equipment maintenance stories. Recruiting for next season.', contentType: 'Evergreen + recruiting' },
    ],
  },
};

// ============================================================
// RESEARCH-BACKED DATA (from 31 research output files)
// Added: March 23, 2026
// ============================================================

// ---- COMPETITOR DEEP PROFILES ----
export const COMPETITOR_PROFILES = [
  {
    name: 'Ames Construction',
    subsidiary: 'Heavy Civil',
    founded: '1962',
    age: '63 years',
    hq: 'Burnsville, MN',
    ownership: 'ESOP (employee-owned)',
    revenue: '~$1.6B',
    employees: '~2,200',
    states: 'National',
    glassdoor: { rating: '3.8', reviews: 114, recommend: '78%' },
    openPositions: '168',
    tagline: 'Instilling True Confidence. Delivering Success.',
    values: ['Safety', 'ESOP culture', 'One Ames unity', 'Environmental harmony', 'Diversity & inclusion'],
    heritageClaim: '60+ years, farm roots, founded by Dick Ames with a used Cat D8',
    uniqueAsset: 'ESOP ownership (financial stake for employees)',
    vulnerabilities: [
      'No longer family-owned (transitioned to ESOP)',
      '"Nepotism runs rampant" in Glassdoor reviews',
      'Environmental positioning feels corporate, not earned',
      'National scale creates anonymity in local markets',
    ],
    opportunities: [
      '"Family vs. ESOP" narrative: family ownership is emotionally stronger',
      'Glassdoor gap: 114 reviews vs Duininck\'s 9. Close the gap to change perception.',
      'Community rootedness: Ames is Burnsville (suburban). Duininck is Willmar (where the work happens).',
    ],
  },
  {
    name: 'Knife River',
    subsidiary: 'Heavy Civil',
    founded: 'MDU legacy, spun off 2023',
    age: 'New as independent',
    hq: 'Bismarck, ND',
    ownership: 'NYSE public (KNF)',
    revenue: '~$2B+',
    employees: '5,700+',
    states: '14 states',
    glassdoor: { rating: '3.8', reviews: 141, recommend: '79%' },
    openPositions: '674',
    tagline: 'Building strong neighborhoods and strong communities',
    values: ['People first', 'Integrity', 'Excellence', 'Safety'],
    heritageClaim: 'No family story. Corporate spinoff origin. "Pioneer in training."',
    uniqueAsset: 'In-house paid CDL training. @lifeatknife Instagram (2,385 followers, 696 posts)',
    vulnerabilities: [
      'Public company pressure (quarterly earnings vs. values)',
      'Culture score is lowest metric at 3.5/5 on Glassdoor',
      '"Favoritism runs deep" is repeated in reviews',
      'No emotional origin story. Corporate spinoff has no narrative weight.',
      '"People-first" is generic. Every company claims it.',
    ],
    opportunities: [
      'CDL training parity: Duininck needs Ridgewater College partnership to match',
      '"Family vs. Wall Street": Duininck answers to family values, not analysts',
      'Culture wedge: if Duininck builds Glassdoor presence showing higher culture scores, it becomes quantifiable',
    ],
  },
  {
    name: 'C.S. McCrossan',
    subsidiary: 'Heavy Civil',
    founded: '1956',
    age: '70 years',
    hq: 'Maple Grove, MN',
    ownership: 'Family-owned, 2nd generation',
    revenue: 'Private (multi-million)',
    employees: '~500',
    states: 'MN/Midwest',
    glassdoor: { rating: '4.0', reviews: 3, recommend: 'N/A (too few)' },
    openPositions: 'Not listed',
    tagline: 'Over 50 Years In Construction',
    values: ['Safety', 'Professionalism', 'Teamwork', 'Continuous improvement'],
    heritageClaim: '70 years, family-founded by Charley McCrossan, 2nd generation',
    uniqueAsset: 'Light rail expertise (Blue Line, Green Line). Twin Cities metro focus.',
    vulnerabilities: [
      'Only 2nd generation (Duininck is 4th)',
      'Extremely thin Glassdoor (3 reviews)',
      '"Technologically behind the times" per reviews',
      '"Very few young employees" suggests succession risk',
      'No diversification: purely highway/bridge/transit',
    ],
    opportunities: [
      'Generational depth: "Two generations built McCrossan. Four built Duininck."',
      'Portfolio breadth: McCrossan builds roads. Duininck builds roads + golf courses + water systems.',
    ],
  },
  {
    name: 'Landscapes Unlimited',
    subsidiary: 'Golf',
    founded: '1976',
    age: '~50 years',
    hq: 'Lincoln, NE',
    ownership: 'Private (family of companies)',
    revenue: 'Private',
    employees: 'Not disclosed',
    states: 'National + international',
    glassdoor: { rating: 'N/A', reviews: 2, recommend: 'N/A' },
    openPositions: '2',
    tagline: 'The recognized leader in golf course development, construction, and renovation',
    values: ['Attract and develop talent', 'Empower to build relationships', 'Regionalized experts'],
    heritageClaim: '"Nearly 50 years young." 2,500+ completed projects.',
    uniqueAsset: '"More Major Championship venues and top-100 courses than any competitor." NGF Top 100 every year since 2018. Golf management arm (60+ properties).',
    vulnerabilities: [
      'No parent company depth (standalone golf builder)',
      '"Premier" is self-declared, not a third-party designation',
      'No emotional origin story',
      'Management arm may stretch focus from construction quality',
    ],
    opportunities: [
      'Frame parent connection: "Backed by 100 years of building infrastructure"',
      'Claim the prestige portfolio: Hazeltine, Erin Hills, TPC, Ross/Raynor/Tillinghast',
      'Pursue NGF Top 100 recognition',
      'Instagram resurrection with 30-day portfolio blitz',
    ],
  },
  {
    name: 'Wadsworth Golf',
    subsidiary: 'Golf',
    founded: '1958',
    age: '67 years',
    hq: 'Plainfield, IL',
    ownership: 'Private',
    revenue: 'Private',
    employees: 'Not disclosed',
    states: '44 states',
    glassdoor: { rating: 'N/A', reviews: 0, recommend: 'N/A' },
    openPositions: 'Not listed',
    tagline: '"America\'s Premier Golf Course Builder and Renovation Specialist"',
    values: ['Quality', 'Excellence', 'Devotion to duty'],
    heritageClaim: '67 years. 1,000+ major golf projects across 44 states.',
    uniqueAsset: 'Self-declared "America\'s Premier." Wadsworth Golf Charities Foundation ($6M+ in grants). GCBAA + ASGCA + NGF member.',
    vulnerabilities: [
      'No parent company backing',
      '"Premier" is self-declared, not earned from ranking',
      'Charitable foundation could be matched by Duininck\'s values culture',
    ],
    opportunities: [
      'Counter the "1,000+" claim: Duininck needs to quantify their project count',
      'Parent company depth: cost advantages, equipment fleet, vertical integration',
    ],
  },
  {
    name: 'ADS (Advanced Drainage Systems)',
    subsidiary: 'Water Management (Prinsco)',
    founded: '1966',
    age: '60 years',
    hq: 'Hilliard, OH',
    ownership: 'NYSE public (WMS)',
    revenue: '~$3B',
    employees: '5,000-10,000',
    states: '29 locations, national',
    glassdoor: { rating: 'N/A', reviews: 0, recommend: 'N/A' },
    openPositions: 'Not tracked',
    tagline: 'N/A',
    values: [],
    heritageClaim: '60 years. Global manufacturer.',
    uniqueAsset: 'Massive distribution network. 30x Prinsco\'s estimated revenue.',
    vulnerabilities: [
      'NYSE pressure. Corporate bureaucracy.',
      'Prinsco can offer family-owned trust and regional responsiveness',
    ],
    opportunities: [
      'Regional strength: Prinsco dominates upper Midwest ag markets',
      'Speed and responsiveness of family-owned vs. NYSE corporation',
    ],
  },
  {
    name: 'Ulland Brothers',
    subsidiary: 'Heavy Civil (Heritage)',
    founded: '1920',
    age: '106 years',
    hq: 'Cloquet, MN',
    ownership: 'TBD (appears family-owned)',
    revenue: 'TBD',
    employees: 'TBD',
    states: 'MN, western WI, northern IA',
    glassdoor: { rating: 'TBD', reviews: 0, recommend: 'TBD' },
    openPositions: 'TBD',
    tagline: 'Quality service for over 95 years',
    values: ['Keep promises', 'Do quality work'],
    heritageClaim: 'Founded 1920 by Oscar and Palmer Ulland. 6 YEARS OLDER than Duininck.',
    uniqueAsset: 'Centenarian heritage. Longest-operating MN heavy civil firm.',
    vulnerabilities: [
      'Website does not mention which generation runs the company',
      'No family succession story visible',
      'Limited to NE MN (Cloquet, Virginia, Albert Lea). Geographic overlap with Duininck may be minimal.',
      'Simple values ("keep your word, do your best") lack depth',
    ],
    opportunities: [
      'Duininck should emphasize COMBINATION: 100 years + 4 generations + portfolio breadth. Age alone is not unique.',
    ],
  },
];

// ---- COMPETITIVE LANDSCAPE SYNTHESIS ----
export const COMPETITIVE_LANDSCAPE = {
  summary: 'Duininck competes against companies 10-30x its size (Ames at $1.6B, Knife River at $2B+, ADS at $3B) but holds advantages none can replicate: 100 years of continuous family ownership, 4 active generations, faith-based values culture, and portfolio breadth (roads + golf + water + real estate) that no single competitor matches. The gap is not capability. The gap is visibility. Competitors with weaker stories tell them louder.',
  heritageCompetitors: [
    { name: 'Ulland Brothers', founded: '1920', age: '106 years', location: 'Cloquet, MN' },
    { name: 'Bolander', founded: '1924', age: '102 years', location: 'MN' },
    { name: 'Duininck', founded: '1926', age: '100 years', location: 'Willmar, MN' },
  ],
  heritageInsight: '"100 years" is necessary but not unique in MN heavy civil. The defensible position is: "Four generations, 100 years, and the only company that builds roads, golf courses, and water systems."',
  whiteSpace: [
    { gap: '"Whole person" employer positioning', audience: 'Recruits, employees', note: 'Nobody in MN construction uses this language.' },
    { gap: '100-year heritage as forward-looking asset', audience: 'All audiences', note: 'Most use heritage as nostalgia. Duininck can use it as proof of resilience.' },
    { gap: 'Golf + construction + water under one story', audience: 'GCs, architects', note: '"The Full Truck" is unreplicable.' },
    { gap: 'Blue-collar content without talking heads', audience: 'Social audiences', note: 'Every competitor defaults to posed photos or stock. Cinematic equipment footage is wide open.' },
    { gap: 'Internal comms for field workers', audience: '700+ employees', note: 'Most construction companies ignore this. First-mover advantage.' },
    { gap: 'Trade school pipeline partnerships', audience: 'Seasonal recruits', note: 'Nobody owns the Ridgewater/Central Lakes relationship.' },
    { gap: 'Centennial as brand moment', audience: 'All audiences', note: 'Once in 100 years. Cannot be manufactured.' },
  ],
  recommendations: [
    'Own "whole person." Activate wellbeing framework in every job posting immediately.',
    'Fix Glassdoor gap. 9 reviews vs 114 (Ames) and 141 (Knife River).',
    'Match Knife River CDL training via Ridgewater College partnership.',
    'Resurrect golf social. Landscapes Unlimited owns the narrative while Duininck\'s portfolio sits invisible.',
    'Use the centennial everywhere: recruiting, customer trust, community pride, press moment.',
    '"Family vs. Wall Street" positioning against Ames (ESOP) and Knife River (NYSE).',
    'Make the work the hero. Cinematic b-roll, drone footage, equipment in action. No talking heads needed.',
    'Unify visually NOW. Shared color/type/photo system across all web properties.',
  ],
  unificationBenchmarks: [
    { company: 'Beldon (Construction)', lesson: 'Parent name goes first. Sub-brands become descriptors (Beldon Roofing, Beldon Siding).', parallel: 'Duininck Golf, Duininck Heavy Civil. Nicole is already doing this.' },
    { company: 'Quanta Services (Infrastructure)', lesson: 'Local autonomy, central brand. 180+ acquired companies under one visual identity.', parallel: 'Let local PMs run projects. Brand team controls how it looks and sounds.' },
    { company: 'Hung Thinh (Vietnamese RE/Construction)', lesson: 'First-time visual alignment required complete overhaul, not just logo swap.', parallel: 'All Duininck sites need shared color/type/photo system.' },
    { company: 'Virgin (Multi-Industry)', lesson: 'Brand personality must stretch across industries. Attitude, not capability.', parallel: '"Built to Last" works for roads AND golf courses AND pipe.' },
    { company: 'Mars, Inc. (Family Global)', lesson: 'For service companies, the parent brand IS the trust signal. Lead with it.', parallel: 'Lead with "Duininck," not the subsidiary name.' },
  ],
};

// ---- SEO & GEO BASELINE ----
export const SEO_BASELINE = {
  headline: 'Duininck does not appear on Google\'s first page for "heavy civil contractor Minnesota." Ames, McCrossan, Park Construction, and 5 others rank above them.',
  propertyAudits: [
    {
      url: 'duininckcompanies.com',
      metaTitle: 'Home - Duininck Companies',
      metaDesc: 'Not provided (likely missing or default CMS text)',
      h1: 'People. Values. Growth.',
      issues: ['Meta title generic, no keywords', 'Meta description missing', 'H1 is tagline, not searchable', 'Blog publishes TWICE per year', 'No service pages, no portfolio, no case studies'],
    },
    {
      url: 'duininck.com',
      metaTitle: 'Home - Duininck Inc.',
      metaDesc: 'Duininck is a third generation, family-owned construction company...',
      h1: 'Building Strong Communities',
      issues: ['Meta description says "third generation" (FACTUALLY WRONG, should be fourth)', 'Meta title generic', 'H1 is sentiment, not keyword', 'Service pages exist but likely thin content'],
    },
    {
      url: 'duininckgolf.com',
      metaTitle: 'Duininck Golf - MN - GA | Golf Course Construction - Remodeling',
      metaDesc: 'Duininck Golf constructs golf courses as well as remodels and restores...',
      h1: 'Building The Best Golf',
      issues: ['Best optimized of all properties', 'Does not rank for "golf course builder" or "golf course construction"', 'No prestige venues mentioned on homepage (Hazeltine, Erin Hills, TPC)'],
    },
    {
      url: 'prinsco.com',
      metaTitle: 'Home - Prinsco, Inc',
      metaDesc: 'Water management solutions',
      h1: 'TBD (hero focused on customer appreciation)',
      issues: ['Meta description is 3 words', 'Zero connection to Duininck parent brand', 'Has content hub "The Water Table" (podcast + articles) which is good'],
    },
  ],
  quickWins: [
    'Fix meta description on duininck.com that says "third generation" (5-minute fix)',
    'Add meta descriptions to duininckcompanies.com (currently missing)',
    'Expand prinsco.com meta description from 3 words to 150-160 characters',
    'Add "100-year" / "centennial" / "founded 1926" language to all homepages',
    'Claim/verify Google Business Profiles for all locations',
    'Submit sitemap.xml to Google Search Console for all properties',
    'Add Organization schema (JSON-LD) to all sites',
  ],
  geoFindings: [
    { query: 'Best heavy civil contractors in Minnesota', duininckAppears: false, whoAppears: 'Ames, Knife River, McCrossan, Kiewit' },
    { query: 'Best golf course builders in the US', duininckAppears: false, whoAppears: 'Landscapes Unlimited, Wadsworth, Heritage Links' },
    { query: 'Best drainage pipe manufacturers', duininckAppears: false, whoAppears: 'ADS, Hancor dominate' },
    { query: 'Best construction companies to work for in MN', duininckAppears: false, whoAppears: 'Ames (#89 on Best Companies list)' },
    { query: 'Family-owned construction companies in Minnesota', duininckAppears: 'Possibly', whoAppears: 'Depends on training data' },
  ],
  geoInsight: 'Duininck is likely invisible to AI models due to: no Wikipedia entry, thin website content, no detailed case study pages, no schema markup, limited press coverage.',
};

// ---- DIGITAL ECOSYSTEM ----
export const DIGITAL_ECOSYSTEM = {
  fragmentationScore: '6 websites, zero cross-linking, inconsistent branding',
  properties: [
    { url: 'duininckcompanies.com', purpose: 'Parent portfolio site', linkedIn: '~1,800 followers', connection: 'Links to subsidiaries but no visual unity' },
    { url: 'duininck.com', purpose: 'Construction operations', linkedIn: 'Shared with parent', connection: 'Says "third generation" (wrong)' },
    { url: 'duininckgolf.com', purpose: 'Golf construction', linkedIn: '~600 followers', connection: 'No reference to parent company heritage' },
    { url: 'prinsco.com', purpose: 'Water management products', linkedIn: 'Separate', connection: 'Zero Duininck mention (intentional)' },
    { url: 'Hart Ranch properties', purpose: 'Real estate / golf club', linkedIn: 'Separate', connection: 'Independent brand' },
    { url: 'Legacy Concrete pages', purpose: 'Being retired', linkedIn: 'N/A', connection: 'Brand being eliminated' },
  ],
  socialComparison: [
    { company: 'Ames Construction', linkedin: '~35,000', instagram: 'Active', facebook: 'Active' },
    { company: 'Knife River', linkedin: '~25,000', instagram: '@lifeatknife (2,385, 696 posts)', facebook: 'Active' },
    { company: 'Duininck', linkedin: '~1,800', instagram: '@duininckinc (348, 416 posts)', facebook: 'Active' },
    { company: 'Duininck Golf', linkedin: '~600', instagram: 'Dark', facebook: 'Dark' },
  ],
  contentBenchmarks: {
    linkedinEngagement: '4.0% (construction/manufacturing has HIGHEST LinkedIn engagement of any industry)',
    instagramEngagement: '5.02% for construction/industrial',
    facebookEngagement: '2.31% for construction',
    bestContent: ['Before/after project transformations', 'Time-lapse construction videos', 'Equipment beauty shots', 'Employee spotlights (photos with caption stories)', 'Native carousels on LinkedIn'],
    recommendedPlatforms: ['LinkedIn (GCs, industry reputation)', 'Instagram (visual storytelling, golf portfolio, recruiting)', 'Facebook (community, blue-collar recruiting, events)'],
  },
};

// ---- BRAND PERCEPTION ----
export const BRAND_PERCEPTION = {
  overallScore: 4.7,
  dimensions: [
    { name: 'Brand Awareness (MN Construction)', score: 6, note: 'Known locally, invisible digitally' },
    { name: 'Brand Awareness (Golf, National)', score: 3, note: 'World-class portfolio, zero visibility' },
    { name: 'Employer Brand Perception', score: 4, note: 'Good culture, no evidence online' },
    { name: 'Digital Presence', score: 3, note: '6 fragmented sites, no SEO, wrong meta descriptions' },
    { name: 'Industry Authority', score: 5, note: 'Awards exist but not amplified. No thought leadership.' },
    { name: 'Community Perception', score: 7, note: 'Strong in Willmar/Prinsburg area. Multiple community awards.' },
    { name: 'Overall External Perception', score: 4.7, note: 'A 9/10 company with a 4.7/10 brand.' },
  ],
  perceptionGap: [
    { familyKnows: '100 years, 4 generations, faith-based values', worldSees: '"A third generation, family-owned construction company" (their own meta description)' },
    { familyKnows: '6+ operating companies spanning 4 industries', worldSees: '6 disconnected websites that don\'t reference each other' },
    { familyKnows: 'Hazeltine, Erin Hills, TPC venue builder', worldSees: 'A golf company with 600 LinkedIn followers and dark social' },
    { familyKnows: '"Whole person" wellbeing framework', worldSees: 'Standard job postings on Indeed ($27-$35/hr, no differentiation)' },
    { familyKnows: 'Survived the Depression, rebuilt, diversified for a century', worldSees: 'No Wikipedia, blog publishes twice a year' },
    { familyKnows: 'CMO from Hormel/Polaris has "more purpose than ever"', worldSees: 'Org that looks like a mid-size regional contractor from outside' },
  ],
};

// ---- FUNNEL AUDITS ----
export const FUNNEL_AUDITS = [
  {
    name: 'General Contractor Journey',
    stages: [
      { stage: 'Discovery', action: 'Google search: "heavy civil contractor Minnesota"', leak: 'Duininck not on page 1. GC clicks Ames, McCrossan, or Meyer.', severity: 'Critical' },
      { stage: 'Consideration', action: 'GC checks duininck.com', leak: 'Homepage says "Building Strong Communities" (what does that mean?). No project portfolio with specs.', severity: 'High' },
      { stage: 'Evaluation', action: 'GC looks for proof: past projects similar to theirs', leak: '1 case study found. No filtering by type, size, or location. Competitors have 50+.', severity: 'High' },
      { stage: 'Decision', action: 'GC sees Duininck on bid list', leak: 'Reputation helps here, but only if they were already known.', severity: 'Low' },
    ],
  },
  {
    name: 'Recruit Journey (Equipment Operator)',
    stages: [
      { stage: 'Awareness', action: 'Sees truck on jobsite, hears from friend', leak: 'None at this stage', severity: 'Low' },
      { stage: 'Search', action: 'Indeed: "equipment operator jobs Willmar MN"', leak: 'Posting looks identical to every other contractor. No mention of values, wellbeing, centennial.', severity: 'Critical' },
      { stage: 'Research', action: 'Googles "Duininck reviews"', leak: '9 Glassdoor reviews (Ames has 114, Knife River 141). Thin presence signals instability.', severity: 'High' },
      { stage: 'Application', action: 'Clicks Apply on Indeed', leak: 'How many clicks? Mobile-friendly? Does it ask for resume (blue-collar may not have one)?', severity: 'Medium' },
      { stage: 'Decision', action: 'Comparing offers', leak: 'Knife River offers paid CDL training. Ames is ESOP. What tangible differentiator does Duininck offer?', severity: 'Critical' },
    ],
  },
  {
    name: 'Golf Architect Journey',
    stages: [
      { stage: 'Need', action: 'Architect designing a renovation, needs builder', leak: 'None', severity: 'Low' },
      { stage: 'Search', action: 'GCBAA directory, colleague referrals, Instagram', leak: 'Duininck Golf social is dark. Landscapes Unlimited and Wadsworth are visible.', severity: 'Critical' },
      { stage: 'Portfolio Review', action: 'Visits duininckgolf.com', leak: 'Portfolio exists but doesn\'t lead with prestige venues. No project count.', severity: 'High' },
      { stage: 'Relationship', action: 'Checks LinkedIn for team expertise', leak: '~600 followers. Minimal content. Can\'t gauge team expertise from online.', severity: 'High' },
      { stage: 'Selection', action: 'Goes with known builder or strongest portfolio', leak: 'Duininck loses on visibility, not capability.', severity: 'Critical' },
    ],
  },
  {
    name: 'Internal Employee Journey',
    stages: [
      { stage: 'Daily Experience', action: '700+ employees scattered across 5+ states', leak: 'No internal comms platform. News travels through foremen, or not at all.', severity: 'Critical' },
      { stage: 'Brand Awareness', action: 'Does field worker know about centennial?', leak: 'Probably not. Without a channel, the brand story stays in the Willmar office.', severity: 'High' },
      { stage: 'Ambassador Potential', action: 'Would worker share a post? Would spouse recommend?', leak: 'Can\'t share what you\'ve never seen. 700 potential ambassadors, zero activation.', severity: 'Critical' },
    ],
  },
];

// ---- BEST-IN-CLASS BENCHMARKS ----
export const BEST_IN_CLASS = [
  {
    company: 'SC Johnson',
    founded: '1886',
    generation: '5th',
    lesson: 'Heritage is the HEADLINE, not a footnote. "A Family Company" is in the logo, the tagline, the URL.',
    parallel: 'Duininck should lead with "Four generations. 100 years." on every touchpoint.',
  },
  {
    company: 'JE Dunn Construction',
    founded: '1924',
    generation: 'N/A',
    lesson: '"100 Stories" digital campaign + "Building a Legacy: A Century of Generosity" philanthropy. Commemorative logo on site signage and employee gear.',
    parallel: 'Directly applicable to Duininck\'s July 25 centennial. 100 stories from 100 years.',
  },
  {
    company: 'Marlin Steel',
    founded: 'Family mfg',
    generation: 'N/A',
    lesson: 'CEO became industry thought leader through LinkedIn and speaking. Small family manufacturer outcompeted larger companies on brand.',
    parallel: 'Nicole could be the voice. A Fortune 200 CMO who chose a rural MN roads-and-golf company is an inherently compelling story.',
  },
  {
    company: 'Lincoln Electric',
    founded: '1895',
    generation: 'N/A',
    lesson: '"Guaranteed employment" policy since 1958. No layoffs in 65+ years. One signature commitment IS the employer brand.',
    parallel: 'Duininck needs one signature commitment. The wellbeing framework could be it, but it must be tangible and visible.',
  },
  {
    company: 'Edward Jones',
    founded: '1922',
    generation: 'N/A',
    lesson: '"Serving individual investors since 1922." Rural roots + heritage + personal service competing against Wall Street scale.',
    parallel: '"Building communities since 1926." Rural Willmar roots + century of trust competing against Burnsville/Bismarck corporate HQs.',
  },
];

// ---- INDUSTRY LANDSCAPE ----
export const INDUSTRY_LANDSCAPE = {
  iija: {
    mnAllocation: '$4.8 billion for highways over 5 years',
    bridgeFunding: '$302 million for MN bridge replacement and repairs',
    totalMN: '$7.3 billion across all categories',
    expiration: 'IIJA authorization expires September 30, 2026',
    status: '2022-2024 was planning. 2026 is "shovels in the ground" year.',
  },
  laborShortage: {
    gap2026: '349,000 new workers needed nationally',
    hiringDifficulty: '80% of heavy civil firms report difficulty filling positions',
    broader: '92% of ALL construction firms struggle to find qualified workers',
    equipmentOperatorPay: '$54,530 median (2024 BLS)',
    immigrationImpact: 'Enforcement affects nearly 1/3 of construction firms per AGC',
  },
  technology: {
    aiStatus: 'No longer "future tool." 2026 marks shift from trend to baseline.',
    autonomous: 'Caterpillar, Komatsu, Deere, Volvo all developing autonomous/semi-autonomous machinery.',
    drones: 'Standard for surveying and monitoring. Market: $3.77B in 2025.',
    gps: 'GPS machine control already widespread in grading and paving.',
    safetyAI: 'Computer vision identifies unsafe conditions and PPE non-compliance in real time.',
  },
  golfMarket: {
    value2025: '$0.7 billion',
    projected2035: '$1.4 billion (7.2% CAGR)',
    pipeline: '140+ new courses in planning or under construction nationally',
    hotMarkets: 'Florida, Texas, South Carolina (half of new openings in past 3 years)',
    renovationBoom: 'Aging facilities need drainage, irrigation, turf performance upgrades',
  },
  parallelIndustries: [
    { industry: 'Agriculture', lesson: 'Family farms that invested in brand thrived while commodity farms declined. A branded construction company competes on trust; a commodity one competes on price.' },
    { industry: 'Mining', lesson: 'Equipment-as-hero content strategy originated here. Caterpillar and Rio Tinto proved employer brand investment outperforms on recruiting.' },
    { industry: 'Commercial Fishing', lesson: 'Blue-collar work CAN be compelling content without polished production. Raw authenticity works.' },
    { industry: 'Oil & Gas', lesson: 'Pay alone doesn\'t retain workers. Culture, stability, and "come home safe" messaging matters more long-term.' },
    { industry: 'Manufacturing', lesson: 'Family manufacturers who invest in brand and culture outperform PE-backed competitors on retention.' },
  ],
  timingWindows: [
    { window: 'Centennial content capture plan', deadline: 'NOW (April prep)', why: 'July 25 event needs multi-camera crew, drone, social plan, media outreach' },
    { window: 'IIJA project letting acceleration', deadline: 'NOW through Sept 2026', why: 'MnDOT accelerating lettings before authorization expires' },
    { window: 'Construction season content capture', deadline: 'April-November 2026', why: 'This year\'s footage feeds 2027 content. Miss it, wait a full year.' },
    { window: 'Golf social restart', deadline: 'Before spring 2026', why: 'Architects selecting builders for 140+ new projects NOW' },
    { window: 'Seasonal hiring push', deadline: 'January-March 2026', why: 'Compete for operators before Knife River and Ames absorb the talent pool' },
    { window: 'Glassdoor activation', deadline: 'NOW (ongoing)', why: '9 reviews vs 114 (Ames). Every month widens the gap.' },
    { window: '"Third generation" meta fix', deadline: 'IMMEDIATE', why: 'Every Google impression reinforces false information. 5-minute fix.' },
    { window: 'Trade school partnerships', deadline: 'Before fall 2026 enrollment', why: 'Ridgewater College cohort for spring 2027. Lead time required.' },
    { window: 'Media outreach for centennial', deadline: 'May 2026 (60-90 days before)', why: 'Press kits to local + trade media.' },
  ],
};

// ---- VERBAL IDENTITY INVENTORY ----
export const VERBAL_INVENTORY = {
  valuesConflict: {
    issue: 'TWO DIFFERENT value sets on two different websites. Needs resolution.',
    parentSite: { source: 'duininckcompanies.com', values: ['Stewardship', 'Integrity', 'Servant Leadership', 'Family', 'Generosity'] },
    constructionSite: { source: 'duininck.com/about/values/', values: ['Safety First', 'Team Duininck', 'Value Of Each Person', 'Mind The Gap', 'Get It Done'] },
  },
  taglinesByProperty: [
    { property: 'duininckcompanies.com', taglines: ['People. Values. Growth.', 'Strong relationships. Shared values. Sustainable growth.', 'A Fourth Generation Family Business Portfolio'] },
    { property: 'duininck.com', taglines: ['Building Strong Communities', 'An Investment for Generations to Come', 'Since 1926'] },
    { property: 'duininckgolf.com', taglines: ['Building The Best Golf', 'Built On Partnership', 'Peace Of Mind', 'Team Duininck'] },
    { property: 'prinsco.com', taglines: ['Your work matters now more than ever.', 'Dig deep, go hard, and count on us to have your back.'] },
  ],
  languagePatterns: [
    { word: '"Communities" / "strong communities"', frequency: 'Very high', where: 'duininck.com (5+ uses on homepage)' },
    { word: '"Values" / "core values"', frequency: 'Very high', where: 'All properties' },
    { word: '"Family" / "family-owned"', frequency: 'High', where: 'Parent + construction' },
    { word: '"100 years" / "since 1926"', frequency: 'Low (surprisingly)', where: 'Only duininck.com' },
    { word: '"Fourth generation"', frequency: 'Very low', where: 'Only golf site' },
    { word: '"Centennial"', frequency: 'Zero', where: 'Nowhere' },
    { word: '"Wellbeing" / "whole person"', frequency: 'Zero', where: 'Nowhere' },
    { word: '"Built to Last"', frequency: 'Zero', where: 'Nowhere on live sites' },
    { word: '"The Full Truck"', frequency: 'Zero', where: 'Nowhere on live sites' },
  ],
  voiceComparison: [
    { property: 'duininckcompanies.com', voice: 'Corporate, portfolio-level', tone: 'Warm, family-focused', focus: 'Values, stories, people' },
    { property: 'duininck.com', voice: 'Operational, contractor-speak', tone: 'Practical, capability-focused', focus: 'Services, markets, projects' },
    { property: 'duininckgolf.com', voice: 'Premium, craft-oriented', tone: 'Confident, partnership-focused', focus: 'Quality, expertise, peace of mind' },
  ],
  missingLanguage: 'The most powerful positioning from the CMO discovery call ("Built to Last," "The Full Truck," "whole person" wellbeing, centennial) appears NOWHERE on any live Duininck property. The brand strategy exists only in Brand HQ, not on the websites customers visit.',
};

// ---- AUDIENCE SEGMENTS (DEEP) ----
export const AUDIENCE_SEGMENTS_DEEP = [
  {
    name: 'Prospective Employees',
    priority: 'CRITICAL',
    source: 'CONFIRMED + Deep Research',
    channels: ['Indeed (primary)', 'Facebook (passive)', 'Word of mouth (very high)', 'ZipRecruiter', 'Company website (low intent)'],
    funnelLeaks: ['Job postings identical to competitors', '9 Glassdoor reviews vs 114 (Ames)', 'No mention of wellbeing, centennial, or family story in postings', 'Knife River has 674 listings vs 25'],
    contentPreferences: ['Real job descriptions with pay ranges', 'Employee stories (not testimonials, stories)', 'Benefits details (specific, not generic)', '"Day in the life" content'],
    winFactors: ['"Whole person" wellbeing framework (unique)', 'Family culture (Glassdoor: "owners are great people")', 'Centennial pride', 'Rural MN base (less competition than Twin Cities)'],
    lossFactors: ['Knife River paid CDL training', 'Ames ESOP ownership stake', 'Scale perception (674 vs 25 listings)', 'Glassdoor invisibility'],
  },
  {
    name: 'Public Works & GCs',
    priority: 'PRIMARY',
    source: 'CONFIRMED + Deep Research',
    channels: ['MnDOT bid letting', 'AGC events', 'NAPA conferences', 'County engineer associations', 'Trade shows (ConExpo)', 'Existing relationships'],
    funnelLeaks: ['Not on page 1 for "heavy civil contractor Minnesota"', 'No project portfolio with specs on website', 'No safety record page', 'No case studies with outcomes'],
    contentPreferences: ['Project case studies with specs and outcomes', 'Safety statistics', 'Equipment capability documentation', 'ENR/NAPA awards and rankings'],
    winFactors: ['100-year track record', 'Existing relationships in MN/SD markets', 'Vertical integration (own aggregates, equipment)', 'Family accountability'],
    lossFactors: ['Invisible in Google search', 'No documented project portfolio', 'Competitors have detailed case study pages'],
  },
  {
    name: 'Golf Architects & Owners',
    priority: 'PRIMARY (Niche)',
    source: 'CONFIRMED + Deep Research',
    channels: ['GCBAA directory', 'ASGCA', 'Architect relationships', 'Golf Course Architecture magazine', 'Instagram', 'NGF events'],
    funnelLeaks: ['Dark social accounts', 'Portfolio not framed with prestige venues', 'No project count to compete with Landscapes (2,500+) or Wadsworth (1,000+)', 'LinkedIn at ~600 followers'],
    contentPreferences: ['Portfolio photography (completed courses in beauty phase)', '"One year later" transformation stories', 'Architect testimonials', 'Technical craft details (drainage, shaping, turf)'],
    winFactors: ['Hazeltine, Erin Hills, TPC, Ross/Raynor/Tillinghast portfolio', 'Parent company backing (own aggregates, equipment)', '100-year heritage', '"Peace of Mind" positioning'],
    lossFactors: ['Invisible online', 'Landscapes Unlimited dominates narrative', 'Wadsworth claims "America\'s Premier"', 'No NGF Top 100 recognition'],
  },
  {
    name: 'Current Employees',
    priority: 'CRITICAL (Internal)',
    source: 'CONFIRMED + Deep Research',
    channels: ['No channel exists (the problem)', 'Foreman verbal updates', 'Jobsite huddles'],
    funnelLeaks: ['No internal comms platform', '83% of frontline workers lack corporate email', 'Brand story stays in Willmar office', '700 potential ambassadors with zero activation'],
    contentPreferences: ['Safety recognition', 'Project spotlights ("your work from a drone")', 'Benefits reminders', 'Centennial pride content', 'Family events'],
    winFactors: ['Employees already positive on Glassdoor', 'Low turnover (per reviews)', 'Values culture is real and experienced'],
    lossFactors: ['No way to reach them', 'Disconnected from brand story', 'Can\'t share what they\'ve never seen'],
  },
  {
    name: 'Communities',
    priority: 'HIGH',
    source: 'CONFIRMED + Deep Research',
    channels: ['Local newspapers (West Central Tribune)', 'Local radio', 'Facebook (dominant in rural MN)', 'Community events, county fairs', 'Chamber of Commerce'],
    funnelLeaks: ['Community perception is strong but informal', 'Centennial event is the biggest moment in 100 years; needs formal media plan'],
    contentPreferences: ['Community impact stories', 'Local hiring announcements', 'Sponsorship visibility', 'Centennial celebration coverage'],
    winFactors: ['Awards (MN Family Business, Willmar Community Building)', 'Generosity value is lived', 'Deep roots in Willmar/Prinsburg'],
    lossFactors: ['No proactive media outreach found', 'Centennial press plan unclear'],
  },
  {
    name: 'Ag Customers (Prinsco)',
    priority: 'SEPARATE',
    source: 'Inferred + Research',
    channels: ['Dealer networks', 'Ag trade shows', 'Farm publications', '"The Water Table" podcast'],
    funnelLeaks: ['Prinsco brand has zero Duininck connection (intentional)', 'ADS is 30x larger in revenue'],
    contentPreferences: ['Technical specs', 'Dealer support', 'Ag drainage best practices'],
    winFactors: ['Regional dominance in upper Midwest', 'Family-owned responsiveness vs NYSE corporation', '"The Water Table" content hub is strong'],
    lossFactors: ['ADS massive distribution and scale advantage', 'Product buying decision driven by specs/price, not brand story'],
  },
  {
    name: 'Subcontractors & Trade Partners',
    priority: 'HIGH',
    source: 'Research-added segment',
    channels: ['MN Subcontractors Association (MSA)', 'AGC events', 'Plan rooms', 'Jobsite relationships', 'Word of mouth'],
    funnelLeaks: ['Duininck\'s sub reputation is invisible externally', 'No formal preferred sub program documented'],
    contentPreferences: ['Payment reliability signal', 'Safety culture evidence', 'Project pipeline visibility', 'Fair change order process'],
    winFactors: ['Values (Servant Leadership, Integrity) translate directly to sub relationships', 'A prime that pays on time and runs safe sites is genuinely rare'],
    lossFactors: ['Invisible sub satisfaction data', 'No formal preferred partner program'],
  },
  {
    name: 'Civil Engineers & Consultants',
    priority: 'HIGH',
    source: 'Research-added segment',
    channels: ['MnDOT consultant networking', 'ASCE MN chapter', 'ACEC MN', 'County Engineers Association', 'Pre-bid conferences'],
    funnelLeaks: ['No project portfolio organized by type', 'No performance metrics (on-time rate, safety rate)', 'No ACEC/ASCE event presence documented'],
    contentPreferences: ['Technical specs in case studies', 'Timeline adherence data', 'Safety incident rates', 'Continuing education sponsorship'],
    winFactors: ['100-year track record IS the proof point for engineers', 'Competence + reliability + communication = exactly what engineers value'],
    lossFactors: ['No documented performance metrics', 'Project portfolio missing specs'],
  },
];

// ---- TRADE SCHOOL PIPELINE ----
export const TRADE_SCHOOL_PIPELINE = [
  {
    name: 'Ridgewater College',
    location: 'Willmar, MN (Duininck\'s backyard)',
    programs: ['Construction Trades', 'Heavy equipment (forklift, skid loader, mobile crane, CDL prep)', 'Basic Construction Skills (OSHA 10-hour)', 'Construction Craft Laborer', 'Electrician'],
    opportunity: 'Sponsor a "Duininck Scholars" cohort. Tuition assistance in exchange for seasonal commitment. This is literally in Willmar.',
  },
  {
    name: 'Central Lakes College',
    location: 'Brainerd/Staples, MN',
    programs: ['Heavy Equipment Operation & Maintenance (1-year and 2-year tracks)', 'Students earn: OSHA 10-hour, Class A CDL, CPR/AED, MN aggregate production cert'],
    opportunity: 'Attend career fairs. Offer site visits. "Come see what a real jobsite looks like."',
  },
  {
    name: 'Dakota County Technical College',
    location: 'Rosemount, MN',
    programs: ['Heavy Construction Equipment Technology', 'Year-round program with dealer/contractor partnerships'],
    opportunity: 'Year-round program means year-round pipeline, not just seasonal.',
  },
  {
    name: 'MN State Commercial Driver Academy',
    location: 'Three campuses',
    programs: ['Standardized CDL training designed for employer partnerships'],
    opportunity: 'CDL sponsorship program to match Knife River\'s paid CDL training.',
  },
  {
    name: 'MnDOT Youth Pathway',
    location: 'MN Virtual Academy',
    programs: ['Operating Engineers Local 49 Pathway for high school students', 'Students learn heavy equipment operation while earning high school credit'],
    opportunity: 'Brand awareness starts before they\'re job seekers. Connect with this pipeline.',
  },
];

// ---- AUDIENCE EMPATHY PROFILES ----
export const AUDIENCE_EMPATHY: Record<string, {
  dailyLife: string;
  howTheyFind: string;
  howTheyDecide: string;
  frustrations: string[];
  trustSignals: string[];
  journeyStages: { stage: string; action: string; duininckRole: string; leak?: string }[];
  driveLink: string;
  dataDepth: 'deep' | 'moderate' | 'shallow';
}> = {
  'Prospective Employees': {
    dailyLife: 'Marcus is 25, operates a skid steer in Willmar. Married, one kid. Scrolls Facebook after dinner. Hears about jobs from guys at church and the gas station. Checks Indeed when he wants a change. Does not use LinkedIn.',
    howTheyFind: 'Word of mouth first. Indeed second. Facebook job posts shared by friends third. Never searches "construction company websites."',
    howTheyDecide: 'Pay range is table stakes. Benefits conversation happens at the kitchen table with their spouse. Glassdoor reviews matter if the spouse checks. Culture is felt through the interview, not the job posting.',
    frustrations: ['Job postings all sound the same', 'No way to know if a company actually cares or just says they do', 'Seasonal layoffs create financial anxiety', 'Long commutes to bigger company jobsites'],
    trustSignals: ['Real employee stories (not polished testimonials)', 'Specific pay ranges (not "competitive")', 'Named benefits (not "comprehensive package")', 'Company age and stability (100 years = still here next season)'],
    journeyStages: [
      { stage: 'Awareness', action: 'Hears about Duininck from a friend, sees a truck, or spots a job post', duininckRole: 'Brand visibility on jobsites, trucks, Facebook', leak: 'No brand recognition outside Willmar area' },
      { stage: 'Interest', action: 'Searches "Duininck" or clicks Indeed listing', duininckRole: 'Indeed posting that stops the scroll, career page that sells', leak: 'Posting reads like every other contractor' },
      { stage: 'Research', action: 'Spouse googles "Duininck reviews," checks Glassdoor', duininckRole: 'Glassdoor presence with authentic employee voices', leak: 'Only 9 reviews vs 114 (Ames)' },
      { stage: 'Apply', action: 'Fills out application on Indeed or website', duininckRole: 'Simple, mobile-friendly application process', leak: 'Too many clicks from listing to submit' },
      { stage: 'Interview', action: 'Meets with hiring manager or foreman', duininckRole: 'Wellbeing framework visible, family culture felt', leak: 'If interview feels corporate, the culture claim falls flat' },
      { stage: 'Start', action: 'First day on the jobsite', duininckRole: 'Onboarding that confirms the promise', leak: 'Gap between marketing and reality' },
    ],
    driveLink: '04_Audience_Research/persona-recruits.md',
    dataDepth: 'deep',
  },
  'Public Works & GCs': {
    dailyLife: 'County engineer in a rural MN office. Manages road maintenance budgets, writes project specs, reviews bids. Reads ENR rankings. Attends AGC events twice a year. Knows every contractor by reputation.',
    howTheyFind: 'They already know who the contractors are. Selection is through formal bid processes (MnDOT letting) or pre-qualification lists. Reputation travels through the county engineer network.',
    howTheyDecide: 'Lowest responsible bid wins public work. "Responsible" means safety record, past performance, bonding capacity, and equipment capability. Brand doesn\'t win bids directly, but reputation influences who gets invited to negotiate.',
    frustrations: ['Contractors who underbid then submit change orders', 'Poor communication when field conditions diverge from specs', 'Safety incidents on their projects reflect on them', 'Turnover on contractor crews mid-project'],
    trustSignals: ['Track record on similar projects', 'Safety statistics (EMR, TRIR)', 'References from other county engineers', 'Equipment capability documentation'],
    journeyStages: [
      { stage: 'Project Scoping', action: 'Engineer designs project and writes specs', duininckRole: 'Relationships with engineers who write favorable specs' },
      { stage: 'Bid Letting', action: 'Project posted on MnDOT bidlet site', duininckRole: 'Submit competitive bid. Being pre-qualified matters.' },
      { stage: 'Evaluation', action: 'Bids reviewed for responsiveness and responsibility', duininckRole: 'Safety record, past performance, equipment list', leak: 'No documented safety record page on website' },
      { stage: 'Award', action: 'Contract awarded to lowest responsible bidder', duininckRole: 'Win the work on capability + price' },
      { stage: 'Execution', action: 'Project constructed over weeks/months', duininckRole: 'On-time, on-budget, no claims, proactive communication', leak: 'No case studies documenting successful outcomes' },
      { stage: 'Retention', action: 'Engineer remembers experience for next project', duininckRole: 'Follow-up, relationship maintenance, trade event presence' },
    ],
    driveLink: '04_Audience_Research/persona-gc-publicworks.md',
    dataDepth: 'deep',
  },
  'Golf Architects & Owners': {
    dailyLife: 'ASGCA member designing course renovations across the US. Browses Instagram for builder portfolios. Attends GCBAA events. Trusts builders they have worked with before. Portfolio quality matters more than price.',
    howTheyFind: 'Architect relationships drive most selections. "Having experience with similar projects and a relationship with the architect on past projects is always preferred." Instagram, GCBAA directory, and ASGCA events fill in the rest.',
    howTheyDecide: 'Portfolio quality is #1. Can they execute this type of work (restoration vs. new build vs. renovation)? Have they worked with this architect before? Are they GCBAA members? Financial stability of the builder matters (can they finish a multi-year project?).',
    frustrations: ['Builders who don\'t understand the architect\'s vision', 'Poor shaping quality on greens complexes', 'Builders who disappear after construction (no grow-in support)', 'Unreliable timelines that affect course opening dates'],
    trustSignals: ['Named venue portfolio (Hazeltine, Erin Hills = instant credibility)', 'Repeat architect relationships', 'GCBAA membership', 'Photography of completed courses in their mature beauty phase'],
    journeyStages: [
      { stage: 'Design', action: 'Architect designs or plans renovation', duininckRole: 'Pre-existing relationship with architect' },
      { stage: 'Builder Selection', action: 'Architect recommends builders or reviews GCBAA directory', duininckRole: 'Visible in directory, portfolio shared proactively', leak: 'Dark social accounts, invisible portfolio' },
      { stage: 'Proposal', action: 'Builder submits proposal with approach and pricing', duininckRole: 'Highlight parent company depth (own aggregates, equipment)', leak: 'No quantified project count to match Landscapes (2,500+)' },
      { stage: 'Construction', action: '6-18 month build process', duininckRole: 'Partnership approach, "Peace of Mind" delivery' },
      { stage: 'Grow-In', action: '12+ months of turf maturation after construction', duininckRole: '"One year later" photography for portfolio and social content' },
      { stage: 'Relationship', action: 'Architect recommends for next project', duininckRole: 'Ongoing relationship maintenance, shared portfolio content' },
    ],
    driveLink: '04_Audience_Research/persona-golf-architects.md',
    dataDepth: 'deep',
  },
  'Current Employees (700+)': {
    dailyLife: 'Equipment operator on a road crew in central MN. Starts at 6am, works until dark during construction season. No company email. Gets information from foreman at morning huddle. Scrolls Facebook on lunch break. Knows 5 coworkers well, 695 not at all.',
    howTheyFind: 'They don\'t "find" information. It reaches them or it doesn\'t. No intranet, no email, no app. Company news comes through the foreman grapevine or not at all.',
    howTheyDecide: 'Whether to stay or leave is decided at the kitchen table. Pay, schedule, commute, how they feel about the foreman, whether the family feels secure. Brand has zero influence unless it translates to tangible experience.',
    frustrations: ['Feeling disconnected from the "big picture"', 'Not knowing what other crews are doing', 'Missing company news and benefit updates', 'Seasonal uncertainty (will I be back next year?)'],
    trustSignals: ['Foreman relaying real information', 'Seeing the Duininck name on community projects they drive past', 'Benefits that actually get used (not just listed)', 'Being recognized for safety milestones'],
    journeyStages: [
      { stage: 'Onboarding', action: 'First day on crew', duininckRole: 'Safety training, crew introduction, values visible', leak: 'No branded onboarding that connects to 100-year story' },
      { stage: 'Working', action: 'Daily operations on jobsite', duininckRole: 'Safe site, fair treatment, good equipment', leak: 'No internal comms platform reaches them' },
      { stage: 'Belonging', action: 'Feeling part of something larger', duininckRole: 'Centennial involvement, project pride, recognition', leak: '700 disconnected workers who don\'t know the brand story' },
      { stage: 'Advocating', action: 'Telling friends and family about Duininck', duininckRole: 'Pre-made social content, referral program', leak: 'No mechanism to turn employees into brand ambassadors' },
    ],
    driveLink: '04_Audience_Research/persona-employees.md',
    dataDepth: 'deep',
  },
  'Subcontractors & Trade Partners': {
    dailyLife: 'Specialty contractor owner in MN. Runs a crew of 8-20. Picks primes based on who pays on time, runs safe sites, and has steady work. Hears about primes through the AGC network and jobsite word of mouth.',
    howTheyFind: 'Plan rooms, bid listing services, and relationships with prime contractor PMs. The subcontractor community in MN is small. Everyone knows who pays well and who doesn\'t.',
    howTheyDecide: 'Payment reliability is #1. Then: safety culture, project management quality, change order fairness, and pipeline volume. A sub will take a lower-margin project from a prime who pays on time over a higher-margin project from one who doesn\'t.',
    frustrations: ['Late payments (net 60+ from some primes)', 'Scope creep without fair change orders', 'Unsafe conditions on prime-managed sites', 'Primes who treat subs as expendable'],
    trustSignals: ['Word of mouth from other subs', 'MSA membership and event presence', 'Consistent project pipeline', 'Fair documented processes'],
    journeyStages: [
      { stage: 'Awareness', action: 'Sub hears about Duininck through network', duininckRole: 'AGC/MSA presence, jobsite reputation', leak: 'If payment reputation is unknown, subs avoid the risk' },
      { stage: 'Bid', action: 'Sub bids on Duininck project', duininckRole: 'Clear scopes, fair bid process', leak: 'Unclear specs lead to underbids and future disputes' },
      { stage: 'Work', action: 'Sub performs on Duininck site', duininckRole: 'Safe site management, proactive PM communication' },
      { stage: 'Payment', action: 'Sub invoices and waits for payment', duininckRole: 'Pay on time, every time', leak: 'One late payment destroys the relationship' },
      { stage: 'Repeat', action: 'Sub decides whether to bid again', duininckRole: 'Preferred sub program, pipeline visibility' },
    ],
    driveLink: '04_Audience_Research/persona-subcontractors.md',
    dataDepth: 'moderate',
  },
  'Civil Engineers & Consultants': {
    dailyLife: 'Professional engineer at a consulting firm. Designs highway and infrastructure projects. Writes specifications that influence which contractors can bid. Works with MnDOT on project scoping. Values competence and communication.',
    howTheyFind: 'They already know the qualified contractors. Pre-qualification lists and past project experience determine who gets considered. ACEC and county engineer events build relationships.',
    howTheyDecide: 'Can this contractor execute the spec? Will they communicate if conditions change? What is their performance history? Engineers value predictability and technical competence above everything else.',
    frustrations: ['Contractors who don\'t follow specs', 'Poor communication when field conditions diverge', 'Claims and disputes that reflect on the engineer\'s project', 'Having to explain basic requirements to under-qualified crews'],
    trustSignals: ['On-time completion track record', 'Low change order percentage', 'GPS machine control and technical capability', 'Proactive RFI process'],
    journeyStages: [
      { stage: 'Design', action: 'Engineer writes project specs', duininckRole: 'Relationships that lead to favorable spec alignment' },
      { stage: 'Pre-qual', action: 'Contractor pre-qualification review', duininckRole: 'Current certifications, equipment list, safety record' },
      { stage: 'Construction', action: 'Engineer oversees contractor performance', duininckRole: 'Execute the spec. Communicate proactively. No surprises.' },
      { stage: 'Closeout', action: 'Project completion and documentation', duininckRole: 'Clean closeout, no claims, as-built documentation' },
      { stage: 'Reference', action: 'Engineer recommends for future projects', duininckRole: 'Follow-up relationship, performance data sharing' },
    ],
    driveLink: '04_Audience_Research/persona-civil-engineers.md',
    dataDepth: 'moderate',
  },
  'Communities': {
    dailyLife: 'Resident of Willmar, MN. Drives past Duininck trucks on Highway 12. Knows the Duininck name from church, the county fair, and local news. May not understand the full scope of the company.',
    howTheyFind: 'They don\'t seek Duininck out. Duininck is part of the community landscape. Visibility comes from project signage, local sponsorships, employee word of mouth, and the West Central Tribune.',
    howTheyDecide: 'Community members form opinions through accumulated impressions: Is Duininck a good employer? Do they give back? Are their projects well-managed? Do they hire locally?',
    frustrations: ['Construction disruption (road closures, noise, dust)', 'Not knowing who is responsible for a project', 'Feeling like companies extract value without investing in the community'],
    trustSignals: ['Visible community investment (sponsorships, donations)', 'Local employment', 'Awards (Minnesota Family Business Award)', 'Centennial event celebrating community'],
    journeyStages: [
      { stage: 'Awareness', action: 'See Duininck trucks, signage, or news mention', duininckRole: 'Branded trucks, jobsite signage, local media presence' },
      { stage: 'Impression', action: 'Form opinion about the company', duininckRole: 'Community sponsorships, volunteer work, employee behavior' },
      { stage: 'Connection', action: 'Attend centennial event, meet an employee, read about an award', duininckRole: 'July 25 event, Facebook community content, WCT features' },
      { stage: 'Advocacy', action: 'Speak positively about Duininck to neighbors', duininckRole: 'Give them a reason to be proud: "That company is 100 years old and they hire our neighbors"' },
    ],
    driveLink: '04_Audience_Research/persona-communities.md',
    dataDepth: 'moderate',
  },
  'Ag Customers (Prinsco)': {
    dailyLife: 'Farmer in western MN. Manages drainage on 2,000 acres. Buys pipe through a local dealer. Cares about specs, availability, and price. Attends Farmfest. Listens to ag radio.',
    howTheyFind: 'Dealer recommendation first. Then: Farmfest booth, ag trade magazine, word of mouth from other farmers. Prinsco\'s "Water Table" podcast reaches technically engaged buyers.',
    howTheyDecide: 'Product specs for their soil type. Dealer availability and delivery speed. Price comparison with ADS and other manufacturers. Installation support.',
    frustrations: ['Product availability during peak drainage season', 'Unclear specs for complex soil conditions', 'National brands that don\'t understand Midwest ag', 'Rising material costs'],
    trustSignals: ['Local dealer relationship', 'Midwest-based manufacturer', '"The Water Table" content showing expertise', 'Family-owned responsiveness'],
    journeyStages: [
      { stage: 'Need', action: 'Drainage issue identified on farm', duininckRole: 'Prinsco brand known through dealer network' },
      { stage: 'Research', action: 'Consult dealer, check specs', duininckRole: 'Product specs at prinsco.com, dealer locator' },
      { stage: 'Purchase', action: 'Order through dealer', duininckRole: 'Availability, pricing, delivery speed' },
      { stage: 'Install', action: 'Tile installation on farm', duininckRole: 'Installation guides, tech support if needed' },
      { stage: 'Loyalty', action: 'Reorder for next project', duininckRole: 'Consistent product quality, dealer relationship maintained' },
    ],
    driveLink: '04_Audience_Research/persona-ag-customers.md',
    dataDepth: 'moderate',
  },
};

// ---- MESSAGING MATRIX ----
export const MESSAGING_MATRIX = {
  coreMessage: {
    headline: 'Four generations. 100 years. We build things that last.',
    body: 'For a century, the Duininck family has been building infrastructure, managing water, shaping golf courses, and growing communities across the central United States. Now in its fourth generation, Duininck Companies proves that when you build on the right foundation, everything endures.',
    anchor: 'BUILT TO LAST',
    proof: ['100 years of continuous family operation', '4 generations actively in the business', '6+ operating companies across 4 industries', 'Faith-based values that predate the HR department'],
  },
  audiences: [
    {
      id: 'gc',
      name: 'General Contractors & Public Works',
      icon: '🏗️',
      headline: 'A century of showing up and delivering.',
      subline: 'When a Duininck truck arrives at your site, it carries 100 years of earned trust, vertically integrated capability, and a family that stakes their name on every project.',
      valueProps: [
        { prop: 'Proven track record', detail: '100 years of completed projects across highways, bridges, utilities, and commercial development. We survived the Depression and kept building.' },
        { prop: 'Vertical integration', detail: 'We mine our own aggregates, manufacture our own materials, and operate our own equipment fleet. Fewer subcontractors, fewer delays, fewer surprises.' },
        { prop: 'Family accountability', detail: 'When the name on the truck is the name on the family, quality is personal. The Duininck family is still in the business, still on jobsites, still answering for the work.' },
        { prop: 'Multi-state capability', detail: 'Operations across Minnesota, South Dakota, Texas, and beyond. Regional expertise with national-caliber equipment and engineering.' },
      ],
      channels: [
        { channel: 'LinkedIn', how: 'Project completion posts with specs, timeline adherence, and before/after photos. Tag the county engineer and GC.', frequency: '2-3x/week' },
        { channel: 'MnDOT bid presence', how: 'Ensure pre-qualification is current. Submit for every relevant letting. Visibility in the bid system IS the marketing.', frequency: 'Ongoing' },
        { channel: 'AGC/NAPA events', how: 'Sponsor, attend, present. Case studies on complex projects. Safety record as a talking point.', frequency: 'Quarterly events' },
        { channel: 'Trade publications', how: 'Submit project features to ENR, Roads & Bridges. Nominate for NAPA quality awards.', frequency: '2-3 submissions/year' },
        { channel: 'Website (project portfolio)', how: 'Detailed case study pages with specs, timelines, outcomes. Each project is its own URL for SEO.', frequency: 'Add 2-3/month' },
      ],
      sampleCopy: 'Duininck has been building Minnesota\'s infrastructure since 1926. Four generations later, we bring our own aggregates, our own equipment fleet, and 100 years of keeping our word to every project we touch.',
    },
    {
      id: 'recruits',
      name: 'Prospective Employees',
      icon: '👷',
      headline: 'We see the whole you.',
      subline: 'Most construction companies see an equipment operator. We see a whole person: your career, your family, your health, your finances, your community, your purpose.',
      valueProps: [
        { prop: 'Career growth', detail: 'From seasonal operator to year-round team member. We invest in your development because we plan to have you for decades, not just one season.' },
        { prop: 'Family-first culture', detail: 'When the owners know your name and ask about your kids, the culture is real. We nurture the wellbeing of families at work and at home.' },
        { prop: 'Financial stability', detail: 'Competitive pay ($27-$35/hr for operators), strong benefits, 401k match, tuition reimbursement. A 100-year company doesn\'t disappear between seasons.' },
        { prop: 'Health and safety', detail: 'Safety isn\'t a poster on the wall. Making it home every night is the first priority, every day, every site.' },
        { prop: 'Community roots', detail: 'We live where we work. Willmar, Prinsburg, the communities we build for are our communities too.' },
        { prop: 'Purpose', detail: 'You\'re not just operating equipment. You\'re building roads families drive on, golf courses people celebrate on, water systems communities depend on. The work matters.' },
      ],
      channels: [
        { channel: 'Indeed', how: 'Rewrite every posting to lead with wellbeing framework. "$27-$35/hr" is table stakes. "We see the whole you" is the differentiator.', frequency: 'Every open position' },
        { channel: 'Facebook', how: 'Employee spotlight carousels (photo + stats + quote overlay). "Meet the crew" content. Share to personal networks.', frequency: '3-4x/week' },
        { channel: 'Instagram', how: 'Equipment beauty shots, drone footage of jobsites, "a day in the life" without talking heads. Make the work look epic.', frequency: '3-4x/week' },
        { channel: 'Glassdoor', how: 'Activate existing employees to leave reviews. Target: 50+ reviews in 6 months. Currently at 9.', frequency: 'Ongoing campaign' },
        { channel: 'Ridgewater College', how: 'Career fairs, sponsored cohorts, site visits. "Come see what a real jobsite looks like."', frequency: 'Semester events' },
      ],
      sampleCopy: 'Most companies hire equipment operators. We welcome whole people. At Duininck, we invest in your career, your family, your health, your finances, your community, and your purpose. We\'ve been doing this for 100 years because we believe when you build on the right foundation, everything lasts.',
    },
    {
      id: 'golf',
      name: 'Golf Architects & Owners',
      icon: '⛳',
      headline: 'Craftsmanship backed by a century of building.',
      subline: 'When you trust Duininck Golf with your course, you get the precision of a specialty builder backed by the infrastructure, equipment, and financial depth of a 100-year family company.',
      valueProps: [
        { prop: 'Prestige portfolio', detail: 'Hazeltine National, Erin Hills, TPC venues. Restorations of courses designed by Donald Ross, Seth Raynor, and Tillinghast.' },
        { prop: 'Parent company depth', detail: 'We own our aggregates. We operate our own heavy equipment fleet. No pure golf builder can match this depth.' },
        { prop: '"Peace of Mind"', detail: 'On time, on budget, highest quality craftsmanship. That\'s not a promise. It\'s a century-old pattern.' },
        { prop: 'Nationwide capability', detail: 'From Minnesota to Georgia and beyond. Every climate, every soil type, every region.' },
      ],
      channels: [
        { channel: 'Instagram', how: 'Portfolio-first: beauty shots of completed courses. Tag the architect. Before/during/after carousels. The "one year later" story.', frequency: '4-5x/week' },
        { channel: 'LinkedIn', how: 'Project announcements, architect relationships, thought leadership. Tag ASGCA and GCBAA.', frequency: '2-3x/week' },
        { channel: 'Golf Course Architecture magazine', how: 'Project features, renovation spotlights. This is where architects browse.', frequency: 'Quarterly' },
        { channel: 'GCBAA / ASGCA events', how: 'Attend, sponsor, present. Portfolio reviews with architects.', frequency: 'Annual events' },
      ],
      sampleCopy: 'Donald Ross, Seth Raynor, Tillinghast. The architects who designed for the ages trusted builders who could match their vision. Duininck Golf earns that trust through precision craftsmanship, backed by a 100-year family company with its own aggregates and infrastructure expertise.',
    },
    {
      id: 'employees',
      name: 'Current Employees (700+)',
      icon: '💪',
      headline: 'You\'re part of something 100 years in the making.',
      subline: 'The roads you build, the courses you shape, the pipes you install will be here long after all of us. That\'s what it means to work for a company that builds things that last.',
      valueProps: [
        { prop: 'You matter to a family, not a corporation', detail: 'The Duininck family is still here, still building alongside you. Your work matters to people whose name is on the truck.' },
        { prop: 'The centennial is YOUR story', detail: 'July 25, 2026 celebrates every person who ever picked up a tool or operated a machine for Duininck. That includes you.' },
        { prop: 'Your wellbeing is the mission', detail: 'Six dimensions we invest in: career, family, finances, health, community, purpose.' },
        { prop: 'Your work speaks for itself', detail: 'Roads your community drives on. Golf courses on TV. Water systems everybody depends on. You built that.' },
      ],
      channels: [
        { channel: 'SMS / mobile app', how: 'Monthly "Duininck Digest": project spotlights, safety wins, centennial countdown.', frequency: 'Monthly' },
        { channel: 'Jobsite signage', how: 'Centennial countdown boards. "100 Years. You\'re Building the Next Chapter."', frequency: 'Every site' },
        { channel: 'Foreman toolbox talks', how: 'Printed 1-pagers at morning huddles: company news, safety stats, employee spotlights.', frequency: 'Weekly' },
        { channel: 'Employee sharing', how: 'Pre-made social content: "I build for Duininck." Organic amplification to personal networks.', frequency: 'Monthly drops' },
      ],
      sampleCopy: 'You\'re not just working a job. You\'re building on a foundation that four generations of the Duininck family started 100 years ago. The roads you pave, the courses you shape, the infrastructure you install will outlast all of us.',
    },
    {
      id: 'community',
      name: 'Communities',
      icon: '🏘️',
      headline: 'We\'ve been your neighbors since 1926.',
      subline: 'For 100 years, the Duininck family has built the infrastructure your community depends on, employed your neighbors, and invested in the places we all call home.',
      valueProps: [
        { prop: 'Local roots', detail: 'Founded in Prinsburg, headquartered in Willmar. We didn\'t move in from out of state. We grew up here.' },
        { prop: 'Community investment', detail: 'Willmar Foundation Community Building Award (2022). Minnesota Family Business Award (2024). Generosity is a reflex, not a program.' },
        { prop: 'Local employment', detail: '700+ employees across your communities. Seasonal work that keeps local families employed.' },
        { prop: 'Infrastructure you depend on', detail: 'The roads you drive, the water systems that serve you, the developments where you shop. We built them.' },
      ],
      channels: [
        { channel: 'Facebook', how: 'Community impact stories. Event announcements. Sponsorship visibility.', frequency: '2-3x/week' },
        { channel: 'West Central Tribune', how: 'Centennial press release. Community event coverage. Employee spotlights.', frequency: 'Monthly pitches' },
        { channel: 'Local radio', how: 'Centennial spots. Hiring season ads. Community event promotion.', frequency: 'Seasonal' },
        { channel: 'Community events', how: 'County fairs, chambers, church events. Centennial celebration (July 25, ~2,000 attendees).', frequency: 'Ongoing' },
      ],
      sampleCopy: 'For 100 years, the Duininck family has been building the roads, water systems, and communities that our neighbors depend on. We live here. We work here. We invest here. This July, we celebrate 100 years of building together.',
    },
    {
      id: 'subs',
      name: 'Subcontractors & Partners',
      icon: '🔧',
      headline: 'A prime you can count on.',
      subline: 'When you partner with Duininck, you work alongside a family company that pays on time, runs safe sites, and treats every partner with the respect they show their own crew.',
      valueProps: [
        { prop: 'Payment reliability', detail: 'A 100-year family company doesn\'t play games with payment terms. When we say net 30, we mean it.' },
        { prop: 'Safe jobsites', detail: 'Safety First means your crew goes home safe too. Every site, every day.' },
        { prop: 'Fair project management', detail: 'Clear scopes, honest change orders, and the kind of communication you expect from a partner, not just a prime.' },
        { prop: 'Steady pipeline', detail: 'With IIJA funding accelerating and 100 years of MnDOT relationships, we have the project volume to keep you busy.' },
      ],
      channels: [
        { channel: 'AGC/MSA events', how: 'Attend Minnesota Subcontractors Association events. Build relationships at contractor mixers.', frequency: 'Quarterly' },
        { channel: 'LinkedIn', how: 'Feature sub partnerships in project posts: "Built with [partner]." Recognize the team, not just the prime.', frequency: 'Include in project posts' },
        { channel: 'Direct outreach', how: 'Preferred sub program communications. Pipeline visibility for upcoming projects.', frequency: 'Pre-season + as needed' },
      ],
      sampleCopy: 'The best subcontractors choose who they work with. They choose primes who pay on time, run safe sites, and treat every partner like a member of the team. The Duininck family has been earning that trust for 100 years.',
      theirQuestions: ['Do they pay on time?', 'Is the jobsite safe for my crew?', 'Are the scopes clear or will I get squeezed on change orders?', 'Is there enough work to build a book of business here?'],
      howWeAnswer: ['Payment reliability is backed by 100 years of family reputation, not corporate accounting.', 'Safety First is our first value for a reason. Your crew is our crew on the jobsite.', 'Our project managers run fair, documented processes. We would rather keep a good sub than win a change order argument.', 'IIJA funding is accelerating MN project lettings. Our pipeline is strong through 2028.'],
    },
    {
      id: 'engineers',
      name: 'Civil Engineers & Consultants',
      icon: '📐',
      headline: 'We build what you design. Exactly.',
      subline: 'Engineers need contractors who execute with precision, communicate proactively when conditions change, and deliver on schedule. Duininck has been doing exactly that since 1926.',
      valueProps: [
        { prop: 'Technical precision', detail: '100 years of grading, paving, and underground utilities. Our crews read plans the way you write them.' },
        { prop: 'Proactive communication', detail: 'When field conditions change, we call before we dig. No surprises, no claims.' },
        { prop: 'Performance record', detail: 'On-time completion, safety incident rates, change order percentages. We track and share the metrics you care about.' },
        { prop: 'Equipment capability', detail: 'GPS machine control, own aggregates, full engineering department. We bring capability that matches your design sophistication.' },
      ],
      channels: [
        { channel: 'ASCE/ACEC MN events', how: 'Sponsor continuing education sessions. Present case studies on complex projects.', frequency: 'Quarterly' },
        { channel: 'County engineer outreach', how: 'Build relationships with MN\'s 87 county engineers. Site visits. Performance data sharing.', frequency: 'Ongoing' },
        { channel: 'Website (technical portfolio)', how: 'Project pages organized by TYPE with specs, timelines, materials, and outcomes.', frequency: 'Add 2-3/month' },
        { channel: 'LinkedIn', how: 'Technical content: project challenges solved, innovative approaches, equipment capabilities.', frequency: '1-2x/week' },
      ],
      sampleCopy: 'Engineers need contractors who build what\'s drawn, communicate when conditions change, and deliver on schedule. Duininck has been doing exactly that since 1926. Four generations of precision, backed by our own aggregates, engineering department, and GPS-controlled equipment.',
      theirQuestions: ['Can they execute this spec?', 'Will they communicate if field conditions diverge?', 'What is their on-time delivery track record?', 'Do they have the equipment and engineering depth for this scope?'],
      howWeAnswer: ['100 years of heavy civil across highways, bridges, utilities, and commercial. We have done projects like yours before.', 'We call before we dig. Our PMs document conditions and communicate proactively.', 'We track completion metrics and share them. Ask for our project performance data.', 'We mine our own aggregates, operate our own fleet, and have an in-house engineering department.'],
    },
    {
      id: 'ag',
      name: 'Agricultural Customers (Prinsco)',
      icon: '🌾',
      headline: 'Water management that works as hard as you do.',
      subline: 'Prinsco has been engineering drainage and water management solutions for ag operations since 1975. Family-owned, Midwest-rooted, built for the land you depend on.',
      valueProps: [
        { prop: 'Ag-first engineering', detail: 'Products designed specifically for agricultural drainage: GOLDFLO, Goldpro Storm, GOLDLINE. Built for Midwest soil and water conditions.' },
        { prop: 'Regional expertise', detail: 'Headquartered in Willmar, MN. We know upper Midwest agriculture because we live it.' },
        { prop: 'Dealer relationships', detail: 'Strong distributor network across MN, SD, ND, IA, WI. Your local dealer knows our products.' },
        { prop: 'Family-owned responsiveness', detail: 'Decisions happen fast here. We don\'t wait for a corporate board in Ohio to approve your order.' },
      ],
      channels: [
        { channel: '"The Water Table" podcast', how: 'Prinsco\'s content hub for ag water management. Best practices, research, industry news.', frequency: 'Regular episodes' },
        { channel: 'Ag trade shows', how: 'Farmfest, Husker Harvest Days, regional farm shows. Product demos, dealer meetings.', frequency: 'Seasonal events' },
        { channel: 'Dealer network', how: 'Through-channel marketing. Support dealers with specs, guides, and co-branded materials.', frequency: 'Ongoing' },
        { channel: 'prinsco.com', how: 'Product specs, installation guides, dealer locator, Water Table content.', frequency: 'Ongoing updates' },
      ],
      sampleCopy: 'Since 1975, Prinsco has been engineering water management solutions for the agricultural operations that feed America. Family-owned, Midwest-headquartered, and built for the soil and water conditions you work with every day.',
      theirQuestions: ['Do they have the right pipe specs for my soil type?', 'Can I get it from my local dealer?', 'How does it compare to ADS or other national brands?', 'Will they support me on installation questions?'],
      howWeAnswer: ['GOLDFLO, Goldpro Storm, and GOLDLINE are engineered specifically for Midwest agricultural conditions.', 'We have dealer coverage across MN, SD, ND, IA, WI. Find yours at prinsco.com/dealers.', 'We are family-owned and Midwest-based. ADS is a $3B NYSE corporation in Ohio. We know your land because we live on it.', 'Call us directly. Decisions happen fast. We also publish installation guides and run The Water Table podcast for ongoing support.'],
    },
  ],
  taglines: {
    short: 'Built to Last.',
    medium: 'Four generations. 100 years. Built to Last.',
    long: 'For 100 years, the Duininck family has been building roads, water systems, golf courses, and communities that endure.',
    elevator: 'Duininck Companies is a fourth-generation family business spanning construction, water management, golf course building, and real estate development across the central United States. Founded in 1926, now celebrating our centennial, we build things meant to outlast the people who build them. When a Duininck truck shows up, it carries 100 years of earned trust and the full weight of six operating companies.',
  },
  boilerplate: {
    pressRelease: 'Duininck Companies is a fourth-generation, family-owned portfolio company headquartered in Willmar, Minnesota. Founded in 1926, Duininck spans water management (Prinsco), heavy civil construction, golf course construction, and real estate development across Minnesota, South Dakota, Texas, and Georgia. Celebrating its centennial in 2026, Duininck employs 700+ people and operates under the brand anchor "Built to Last." For more information, visit duininckcompanies.com.',
    socialBio: 'Fourth-generation family company. 100 years of building roads, golf courses, water systems, and communities. People. Values. Growth. #BuiltToLast',
    emailSignature: 'Duininck Companies | Fourth Generation. 100 Years. Built to Last. | duininckcompanies.com',
    oneLiner: 'A fourth-generation family company building infrastructure, managing water, and shaping golf courses across the central United States since 1926.',
  },
  portfolioVoice: [
    {
      brand: 'Duininck Golf',
      voiceShift: 'More sophisticated and craft-focused. Lead with portfolio quality (Ross, Raynor, Tillinghast restorations). Partnership language replaces capability language. "Peace of Mind" is the anchor phrase.',
      toneAdjustments: ['Replace "we build" with "we shape" or "we craft"', 'Architect names are credibility signals. Use them.', 'Seasonal beauty language: "the course reveals itself over time"', 'Parent connection: "Backed by a century of building infrastructure"'],
      audienceFocus: 'Golf course architects, private club boards, resort operators',
      doSay: ['Craftsmanship', 'Peace of mind', 'Partnership', 'Restoration', 'We shape your vision'],
      dontSay: ['Heavy civil', 'Road construction', 'Equipment fleet', 'Blue-collar'],
    },
    {
      brand: 'Prinsco',
      voiceShift: 'Product-led, technical, agricultural. The Duininck family connection adds trust but should not lead. Prinsco has its own identity, its own audience, and its own content hub (The Water Table).',
      toneAdjustments: ['Technical specs over brand storytelling', 'Dealer-first language: "available through your local distributor"', 'Agricultural credibility: "Midwest soil, Midwest water, Midwest expertise"', '"Family-owned responsiveness" is the parent brand contribution'],
      audienceFocus: 'Farmers, ag dealers, stormwater engineers',
      doSay: ['Water management solutions', 'Family-owned responsiveness', 'Built for Midwest conditions', 'Your local dealer'],
      dontSay: ['Construction', 'Golf courses', 'Heavy civil', 'Four generations (Prinsco is separate)'],
    },
    {
      brand: 'Hart Ranch',
      voiceShift: 'Premium, lifestyle-oriented. South Dakota\'s Black Hills as the setting. Community building meets outdoor recreation. The Duininck values show up as stewardship of land and community.',
      toneAdjustments: ['Lifestyle language: "ranchette living," "Black Hills experience"', 'Premium without pretension: approachable luxury', 'Community language: "building where families grow"', 'Golf pedigree: #1 Public Course in SD (Golfweek)'],
      audienceFocus: 'Property buyers, golfers, resort visitors',
      doSay: ['Black Hills living', 'Community', '#1 Public Course in SD', 'Stewardship of the land'],
      dontSay: ['Heavy civil', 'Construction company', 'Portfolio company', 'Industrial'],
    },
  ],
};

// ---- GTM STRATEGY ----
export const GTM_STRATEGY = {
  overview: 'Close the gap between a 9/10 company and a 4.7/10 brand by activating the centennial as the forcing function, unifying digital presence, and deploying the "whole person" employer brand before competitors recognize the white space.',
  pillars: [
    {
      name: 'Brand Unification',
      description: 'Consolidate 6 fragmented websites into one coherent digital presence. Unified visual identity, verbal identity, and brand architecture across all touchpoints.',
      timeline: 'Q1-Q3 2026',
      owner: 'Nicole + Agency + Lucy',
      kpis: ['Visual consistency score across properties', 'Cross-linking between sites', 'Unified metadata and schema markup'],
      status: 'In Progress',
    },
    {
      name: 'Centennial Campaign',
      description: 'Leverage the once-in-100-years moment to amplify brand visibility across every audience. July 25 event as the centerpiece, with pre/post content extending the narrative 6 months in each direction.',
      timeline: 'Jan-Dec 2026',
      owner: 'Nicole + Video Partner',
      kpis: ['Event attendance (target: 2,000)', 'Press coverage (local + trade)', 'Social engagement during campaign', 'Centennial content reach'],
      status: 'Active',
    },
    {
      name: 'Employer Brand Activation',
      description: 'Deploy the "whole person" wellbeing framework into every recruiting touchpoint. Fix the Glassdoor gap. Build the trade school pipeline. Make Duininck the employer of choice in MN construction.',
      timeline: 'Q1-Q4 2026',
      owner: 'Nicole + Lucy',
      kpis: ['Glassdoor review count (target: 50+)', 'Job posting differentiation score', 'Ridgewater College partnership status', 'Application volume vs prior year'],
      status: 'Not Started',
    },
    {
      name: 'Golf Portfolio Resurrection',
      description: 'Restart dark social accounts, lead with prestige portfolio (Hazeltine, Erin Hills, TPC, Ross/Raynor/Tillinghast), and recapture the architect audience before Landscapes Unlimited and Wadsworth own the narrative completely.',
      timeline: 'Q1-Q2 2026',
      owner: 'Nicole + Sam',
      kpis: ['Instagram restart (target: weekly posting)', 'LinkedIn Golf followers (target: 2,000)', 'GCBAA/NGF visibility', 'Architect relationship pipeline'],
      status: 'Not Started',
    },
    {
      name: 'Content System Build',
      description: 'Replace Buffer + Excel with a content operating system that makes a 3-person team perform like 10. AI-assisted production, seasonal capture calendar, carousel templates, and measurement.',
      timeline: 'Q2-Q3 2026',
      owner: 'Lucy + Nicole',
      kpis: ['Tool selected and implemented', 'Seasonal capture plan active', 'Content cadence: 10+ posts/week across platforms', 'Engagement rate vs industry benchmark'],
      status: 'Not Started',
    },
    {
      name: 'Digital Visibility',
      description: 'SEO quick wins, GEO foundation (Wikipedia, schema, case studies), and local search optimization. Make Duininck findable by people who don\'t already know the name.',
      timeline: 'Q1-Q4 2026 (ongoing)',
      owner: 'Lucy',
      kpis: ['Page 1 rankings for core keywords', 'AI visibility score', 'Organic traffic growth', 'Google Business Profile optimization'],
      status: 'Not Started',
    },
  ],
  timingWindows: [
    { window: 'NOW', action: 'Fix "third generation" meta description. Claim Google Business Profiles. Start Glassdoor review campaign.', urgency: 'Immediate' },
    { window: 'April 2026', action: 'Seasonal content capture begins. Golf social restart. Centennial content countdown launches.', urgency: 'Critical' },
    { window: 'July 25, 2026', action: 'Centennial event. Unified brand launch moment. Maximum content capture (multi-camera, drone, live social).', urgency: 'Milestone' },
    { window: 'Sept 30, 2026', action: 'IIJA authorization expires. MnDOT accelerating project lettings. Maximize bid pipeline.', urgency: 'Market' },
    { window: 'Q4 2026', action: 'Post-centennial momentum. 2026 captures become 2027 content. Year-end review and 2027 planning.', urgency: 'Planning' },
  ],
};

export const GTM_CAMPAIGNS: { name: string; channel: string; audience: string; goal: string; spend: string; results: string; learnings: string; status: string }[] = [];

export const GTM_STEERING: { date: string; insight: string; source: string; type: 'log' | 'action'; action?: string }[] = [];
