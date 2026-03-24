// ============================================================
// PROPRIETARY METHODOLOGY
// This file contains the strategic frameworks that power
// the research prompts. These frameworks are embedded into
// AI prompts silently. Client-facing files show results
// organized by these categories without exposing the model.
// ============================================================

/**
 * 6-Category Competitive Framework
 * Applied to every competitive analysis prompt.
 * Client sees results grouped by dimension, never the framework name.
 */
export const COMPETITIVE_FRAMEWORK = [
  {
    id: 'direct',
    label: 'Direct Competitors',
    clientLabel: 'Head-to-Head Market Players',
    definition: 'Companies targeting the same problem with a very similar solution.',
    promptInstruction: 'Identify companies that bid on the same projects, serve the same buyer personas, and offer near-identical services. Focus on how they position, price, and differentiate.',
  },
  {
    id: 'adjacent',
    label: 'Adjacent Competitors',
    clientLabel: 'Alternative Solution Providers',
    definition: 'Companies targeting the same problem but with different solutions.',
    promptInstruction: 'Identify companies or approaches that solve the same underlying need through different methods. For construction: prefab, modular, in-house divisions of larger firms. For golf: landscape architects who also build. For pipe: alternative drainage materials.',
  },
  {
    id: 'industry_relatives',
    label: 'Industry Relatives',
    clientLabel: 'Industry Peers',
    definition: 'Companies in the same industry but not direct competitors.',
    promptInstruction: 'Map companies in the same broad industry that are not competing for the same contracts. These shape industry perception, set benchmarks, and influence talent expectations. Include companies in adjacent geographies or different project scales.',
  },
  {
    id: 'audience_relatives',
    label: 'Audience Relatives',
    clientLabel: 'Attention Competitors',
    definition: 'Companies competing for time and attention from the same target audience, even though they solve different problems.',
    promptInstruction: 'Identify who else is competing for the attention of our key audiences (GCs, municipal engineers, golf architects, blue-collar recruits). This includes trade publications, industry associations, equipment manufacturers, and recruiters. What are these audiences scrolling past to find us (or not find us)?',
  },
  {
    id: 'sister_models',
    label: 'Sister-Business Models',
    clientLabel: 'Structural Parallels',
    definition: 'Companies not in the same industry but with a similar business model.',
    promptInstruction: 'Find companies with similar structural DNA: multi-generational family businesses, holding companies with diverse subsidiaries, blue-collar workforces, seasonal operations, regional dominance in a niche. How do they handle brand architecture, employer brand, and internal comms? What works that we can adapt?',
  },
  {
    id: 'inspiration',
    label: 'Inspiration Companies',
    clientLabel: 'Messaging & Positioning Benchmarks',
    definition: 'Companies with similar values, marketplace constraints, or regulatory environments who excel at messaging and positioning.',
    promptInstruction: 'Identify brands (any industry) that face similar challenges: faith-based values in a secular market, blue-collar workforce branding, multi-generational storytelling, centennial milestones, holding company brand architecture. What are they doing with content, social, employer brand, and positioning that we should learn from?',
  },
];

/**
 * Audience-First Research Model
 * Audience research runs BEFORE competitive analysis.
 * Understanding who we serve defines the playing field
 * on which we evaluate competitors.
 */
export const AUDIENCE_RESEARCH_MODEL = {
  phases: [
    {
      id: 'confirmed_segments',
      label: 'Validate CMO-Confirmed Segments',
      instruction: 'Start with the segments Nicole confirmed. For each, research where they congregate (trade shows, publications, LinkedIn groups, subreddits), what language they use, what pain points they voice publicly, and what content earns their engagement.',
    },
    {
      id: 'gap_segments',
      label: 'Surface Missing Segments',
      instruction: 'Analyze the full business model and identify audiences the CMO may not have mentioned: investors/board, supply chain partners, regulatory bodies, trade association leadership, local media, educators/schools for pipeline. Recommend whether each matters.',
    },
    {
      id: 'journey_mapping',
      label: 'Map Decision Journeys',
      instruction: 'For the top 3 priority segments, map their decision journey from awareness to engagement. Where does Duininck show up (or fail to)? What content would move each stage? What does a competitor do at each stage that Duininck doesn\'t?',
    },
    {
      id: 'content_resonance',
      label: 'Content Resonance by Segment',
      instruction: 'For each segment, identify what content types, topics, and formats perform best. Pull from competitor social engagement, trade publication popularity, and LinkedIn engagement patterns. We need specifics: "Project carousel posts with before/after photos get 3x engagement for golf architects on Instagram" not "post more visual content."',
    },
  ],
};

/**
 * Research-to-Decision Bridge
 * Every research task must connect to a decision.
 * This prevents research for research's sake.
 */
export const RESEARCH_DECISION_BRIDGE = {
  instruction: 'Every piece of research must answer at least one of these strategic questions. If a finding doesn\'t connect to a decision, flag it as context but don\'t spend tokens expanding on it.',
  questions: [
    'What should we SAY (messaging, taglines, voice)?',
    'What should we SHOW (visual identity, photography, video)?',
    'WHERE should we show up (channels, platforms, directories)?',
    'WHO are we talking to (audience priority, persona refinement)?',
    'What are competitors doing that we should counter or ignore?',
    'What is NO competitor doing that we should own?',
    'What would make Nicole\'s 3-person team 3x more effective?',
    'What would make a recruit choose Duininck over Ames or Knife River?',
    'What would make a GC remember Duininck when the next bid comes?',
    'What content captures the Duininck story without putting blue-collar workers on camera?',
  ],
};

/**
 * Global Prompt Rules
 * Injected into every AI research prompt
 */
export const PROMPT_RULES = [
  'Do not give generic advice. Every insight must be specific to this company, this industry, and this competitive landscape.',
  'We need insights that set us above and beyond competition. Surface what others miss.',
  'Strategy should never exist for its own sake. Every recommendation must be in service of answering key questions, gathering insights, or closing leaky funnels.',
  'Do not use em dashes. Do not use "--" in place of em dashes.',
  'Use creative sentence structure. Avoid patterns like "It\'s not XX. It\'s Y." or "This isn\'t about X. This is about Y."',
  'Root all strategy and thought in what stakeholders and clients have told us. Reference Nicole\'s insights, quotes, and confirmed decisions.',
  'Be smart with token usage. Use what we already have before researching externally. Only go to the web for new context, insights, or updates we lack.',
  'Research the core company first, then each sub-brand. We need to understand the parent before the parts.',
  'When referencing colors or brand elements, pull specific hex codes and exact taglines. No approximations.',
  'Pull from publicly observable data: websites, social profiles, job postings, press releases, regulatory filings, trade publications. Do not fabricate data points.',
];

/**
 * Generates the rules block that gets injected into every prompt
 */
export function buildRulesBlock() {
  return PROMPT_RULES.map((rule, i) => `${i + 1}. ${rule}`).join('\n');
}

/**
 * Generates the competitive framework prompt section
 * Uses client-facing labels, not internal methodology names
 */
export function buildCompetitivePromptSection(clientConfig) {
  const competitors = [
    ...clientConfig.competitors.heavyCivil,
    ...clientConfig.competitors.golf,
    ...clientConfig.competitors.waterManagement,
  ];

  return COMPETITIVE_FRAMEWORK.map(cat => {
    return `### ${cat.clientLabel}\n${cat.promptInstruction}\n`;
  }).join('\n');
}
