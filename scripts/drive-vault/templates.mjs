// ============================================================
// Drive Vault Templates
// Each function returns markdown content for a Drive file.
// Templates include both Human Brief and AI Research Prompt.
// Proprietary methodology is embedded silently in prompts.
// ============================================================

import { buildRulesBlock, buildCompetitivePromptSection, COMPETITIVE_FRAMEWORK, AUDIENCE_RESEARCH_MODEL, RESEARCH_DECISION_BRIDGE } from './methodology.mjs';

// Helper: generates the standard prompt header injected into every AI prompt
function promptHeader(c) {
  return `You are researching ${c.name} (${c.website}), a ${c.generation}-generation family-owned portfolio company headquartered in ${c.headquarters}, founded in ${c.founded}. They span water management, heavy civil construction, golf course construction, and real estate development across ${c.states.join(', ')}. Their CMO is ${c.cmo.name} (${c.cmo.background}), who joined ${c.cmo.startDate}. Current tagline: "${c.tagline}". Brand anchor: "${c.brand.anchor}". The company celebrates its centennial in ${c.centennialYear} with a public event on ${c.centennialDate}.

Key context from CMO discovery call:
- Marketing team is ${c.team.size} people for ${c.employees} employees. ${c.team.gap}
- Brand unification underway: consolidating sub-brands under one Duininck identity
- Concrete brand being eliminated. Golf retains niche positioning. Prinsco stays independent.
- ${c.brand.wedge}: ${c.brand.wedgeDescription}

RESEARCH RULES:
${buildRulesBlock()}`;
}

// ============================================================
// 00_Project_Management
// ============================================================

export function engagementBrief(c) {
  return `# Engagement Brief: ${c.name}
> Project scope, contacts, confirmed decisions, and engagement parameters
> Research Phase: 0 (Foundation)
> Status: In Progress

---

## Engagement Overview

| Field | Detail |
|-------|--------|
| Client | ${c.name} |
| Website | ${c.website} |
| Primary Contact | ${c.cmo.name}, ${c.cmo.title} |
| CMO Background | ${c.cmo.background} |
| CMO Start Date | ${c.cmo.startDate} |
| Engagement Style | ${c.cmo.workStyle} |
| HQ | ${c.headquarters} |
| Founded | ${c.founded} |
| Centennial | ${c.centennialDate} |
| Team Size | ${c.team.size} (${c.team.gap}) |

## Confirmed Decisions (from Discovery Call)
1. Brand unification: all construction entities consolidating under "Duininck"
2. Concrete brand: being eliminated, folded into unified brand
3. Golf: retains niche positioning (different audience from core construction)
4. Prinsco: stays fully independent
5. Engagement model: project-based only (no retainers)

## Subsidiaries
${c.subs.map(s => `- **${s.name}** (${s.sector}) | ${s.status} | ${s.hq}`).join('\n')}

## Key Audiences (CMO-Confirmed)
${c.audiences.map((a, i) => `${i + 1}. ${a}`).join('\n')}

## Nicole's Quote
> ${c.cmo.quote}

---

## Budget & Tools
- Current tools: Claude, Co-pilot, ChatGPT, Buffer (unhappy)
- Budget range: [Pending from Nicole]

## Human Review Notes
[Add strategic observations, relationship notes, engagement boundaries here]
`;
}

export function decisionLog(c) {
  return `# Decision Log: ${c.name}
> Every strategic decision, who made it, why, and when
> Living document updated throughout engagement

---

## How to Use This Log
Record every decision that shapes brand strategy. Include the rationale and who owned the call. This prevents relitigating settled questions and creates an audit trail.

| Date | Decision | Rationale | Owner | Status |
|------|----------|-----------|-------|--------|
| 2026-03-12 | Unify all construction brands under "Duininck" | Customers see one truck, should see one brand | Nicole + Sam | Confirmed |
| 2026-03-12 | Eliminate Concrete brand | Folding into unified brand. Separate identity adds confusion. | Nicole | Confirmed |
| 2026-03-12 | Golf retains niche positioning | Different buyer persona (architects vs. GCs). Separate website justified. | Nicole | Confirmed |
| 2026-03-12 | Prinsco stays independent | Separate brand, separate market, separate identity. | Nicole | Confirmed |
| 2026-03-12 | Project-based engagement only | Nicole burned by retainer model. Wants defined scope and deliverables. | Nicole | Confirmed |

---

## Pending Decisions
| Question | Options | Owner | Target Date |
|----------|---------|-------|-------------|
| Content management system | Buffer replacement (Sprout, Later, Hootsuite, custom) | Lucy + Nicole | TBD |
| Golf social restart timing | Immediate vs. wait for spring content | Nicole | TBD |
| Internal comms platform | Intranet, app, SMS-based system | Nicole | TBD |
| Centennial brand launch timing | At July event vs. phased rollout | Nicole + Sam | TBD |

## Human Review Notes
[Add context, pushback, stakeholder dynamics here]
`;
}

// ============================================================
// 01_Brand_Foundation
// ============================================================

export function companyProfile(c) {
  return `# Company Profile: ${c.name}
> Deep-dive company research: history, structure, financials, leadership, reputation
> Research Phase: 1 (Foundation)
> Status: Not Started

---

## Why This Matters
The company profile is the foundation every other research artifact builds on. Without understanding who ${c.shortName} actually is (their structure, scale, history, reputation, and how the market perceives them), competitive positioning and audience strategy will float on assumptions instead of evidence.

## Key Questions to Answer
- How is ${c.shortName} perceived by people who have never spoken to the leadership team?
- What does the public record reveal about their corporate structure and scale?
- Where does the company show up (or fail to show up) in industry conversations?
- What parts of their story are visible to outsiders vs. locked inside the family?

---

## AI Research Prompt
> Copy this entire block into Claude to generate the research below.

\`\`\`
${promptHeader(c)}

TASK: Build a comprehensive company profile for ${c.name} using only publicly available information. Research the parent company first, then each subsidiary individually.

PARENT COMPANY RESEARCH:
1. Pull the current company description from duininckcompanies.com. Capture exact headlines, taglines, and mission language (verbatim, with quotes).
2. Search Minnesota Secretary of State business filings for all entities containing "Duininck" or "Prinsco" or "Hart Ranch." Document: entity names, filing dates, registered agents, status, principal office addresses.
3. Search South Dakota and Texas state filings for the same.
4. Pull LinkedIn company page data: employee count, headquarters, industry classification, recent posts, follower count, employee distribution by function.
5. Search for press coverage, awards, and industry mentions from the past 3 years. Focus on trade publications (ENR, Roads & Bridges, Golf Course Architecture).
6. Check Better Business Bureau, Glassdoor, Indeed for company profile data and employee sentiment.
7. Document all awards and recognitions you can verify (Minnesota Family Business Award 2024, Sheldon G. Hayes Award 2003, Hart Ranch #1 Public Course in SD).

SUB-BRAND RESEARCH (one section per subsidiary):
${c.subs.map(s => `- **${s.name}** (${s.sector}, ${s.hq}): Pull website content, unique positioning, any separate social profiles, job postings, project portfolios. Note how they reference the parent brand (or don't).`).join('\n')}

OUTPUT FORMAT:
- Executive summary (3 paragraphs: who they are, how they're perceived, what's missing from public view)
- Corporate structure table (entity name, state, status, sector)
- Leadership team (names, titles, tenure where findable)
- Public reputation snapshot (reviews, awards, press)
- Digital footprint summary (all URLs, social handles, follower counts)
- Sub-brand consistency analysis (do they look/sound like one company?)
- Gaps: what can an outsider NOT learn about ${c.shortName}? What's invisible?
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Strategic observations, corrections, things the AI missed or got wrong]
`;
}

export function brandArchitecture(c) {
  return `# Brand Architecture: ${c.name}
> Confirmed architecture model, sub-brand relationships, unification timeline
> Research Phase: 1 (Foundation)
> Status: CONFIRMED (from CMO discovery call March 12, 2026)

---

## Why This Matters
Brand architecture defines how every sub-brand relates to the parent. For ${c.shortName}, this was the single biggest strategic question heading into the engagement, and Nicole confirmed the direction in the discovery call. This document captures the confirmed model and tracks execution.

## Confirmed Architecture Model

### Unified Brand with Strategic Exceptions
- **Core rule:** All construction entities consolidate under one "Duininck" identity
- **Exception 1:** Duininck Golf retains niche positioning (different buyer persona)
- **Exception 2:** Prinsco stays fully independent (separate brand, separate market)
- **Exception 3:** Hart Ranch operates independently

### Sub-Brand Status
| Entity | Architecture Decision | Status |
|--------|----------------------|--------|
${c.subs.map(s => `| ${s.name} | ${s.status} | Confirmed |`).join('\n')}

### Nicole's Rationale
> "${c.brand.wedgeDescription}"

### Unification Timeline
| Date | Milestone |
|------|-----------|
| May 2025 | Nicole joins as CMO. Brand audit begins. |
| Q3 2025 | Stakeholder + customer interviews completed |
| Q1 2026 | Website consolidation begins |
| July 25, 2026 | Centennial event. Unified brand launch moment. |
| Q3-Q4 2026 | Full rollout: signage, vehicles, collateral, digital |

---

## AI Research Prompt
> Copy this into Claude to validate architecture decisions against market evidence.

\`\`\`
${promptHeader(c)}

TASK: Validate ${c.name}'s confirmed brand architecture against competitive evidence and best practices for multi-subsidiary holding companies.

Research these specific questions:
1. How do the top 3 heavy civil competitors handle brand architecture? (Ames Construction, C.S. McCrossan, Knife River). Do they unify or keep separate brands? What can we observe from their websites and collateral?
2. How do the top golf construction competitors handle parent brand endorsement? (Landscapes Unlimited, Wadsworth Golf, Heritage Links). Is "A [Parent] Company" common in this niche?
3. Find 3 examples of family-owned holding companies (any industry) that successfully unified previously separate brands. What did the transition look like publicly? How long did it take?
4. What visual patterns emerge: do unified brands use consistent colors, or do sub-brands get accent colors within a system?

OUTPUT FORMAT:
- Competitor architecture comparison table
- 3 unification case studies with timeline and approach
- Specific recommendations for ${c.shortName}'s visual endorsement system
- Risks to watch during transition (customer confusion, SEO impact, etc.)
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Strategic observations, corrections, things the AI missed]
`;
}

export function coreNarrative(c) {
  return `# Core Narrative: ${c.name}
> The master story that underpins all messaging across every audience and channel
> Research Phase: 1 (Foundation)
> Status: Not Started

---

## Why This Matters
Every tagline, social post, recruiting ad, and project case study should feel like a chapter of the same story. The core narrative is that story. For ${c.shortName}, the centennial year creates a once-in-a-century opportunity to anchor this narrative in something no competitor can claim: 100 years of continuous family operation.

## Key Questions to Answer
- What is the ONE story that connects roads, golf courses, pipe manufacturing, and real estate?
- How do we tell a 100-year story in a way that feels forward-looking, not nostalgic?
- What language resonates with blue-collar workers AND golf course architects?
- How do we honor faith-based values authentically without alienating secular audiences?

---

## AI Research Prompt
> Copy this into Claude to develop the core narrative framework.

\`\`\`
${promptHeader(c)}

TASK: Develop a core narrative framework for ${c.name} that unifies their entire portfolio under one story.

CONTEXT ALREADY CONFIRMED:
- Brand anchor: "${c.brand.anchor}"
- Tagline: "${c.tagline}"
- Wedge: "${c.brand.wedge}" (${c.brand.wedgeDescription})
- Personality: ${c.brand.personality.join(', ')}
- Values: ${c.brand.values.join(', ')}
- Centennial celebration: ${c.centennialDate}

DEVELOP:
1. The 100-word master narrative (the story everything else branches from). This should work spoken aloud by Nicole at the centennial event AND written on the about page. Write 3 versions: one that leads with legacy, one that leads with capability, one that leads with people.
2. The "thread" that connects all subsidiaries. Roads, pipes, golf courses, and real estate sound disconnected. Find the connective tissue (hint: Nicole's insight about "the full truck" is the starting point, but we need to go deeper).
3. The centennial reframe: how to use 100 years as a forward-looking asset, not a museum piece. Study how other centennial brands have done this. Pull specific examples.
4. The faith-values calibration: ${c.shortName}'s values are explicitly faith-based. Research 3 companies with similar values positioning who do it well without alienating secular partners. What language choices make the difference?
5. The blue-collar bridge: language that resonates with equipment operators AND golf course architects. These are radically different audiences. Find the vocabulary overlap.

OUTPUT FORMAT:
- 3 master narrative versions (100 words each)
- Connective tissue analysis (what unifies the portfolio)
- 3 centennial positioning examples from other brands
- Faith-values language calibration guide
- Blue-collar/white-collar vocabulary bridge
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Strategic observations, narrative preferences, tone adjustments]
`;
}

export function untouchableWedge(c) {
  return `# The Untouchable Wedge: ${c.name}
> What makes ${c.shortName} impossible to replicate. The strategic moat.
> Research Phase: 1 (Foundation)
> Status: Drafted (needs competitive validation)

---

## Why This Matters
"The Full Truck" is Nicole's phrase for what competitors cannot fake: when a Duininck truck arrives, it carries 100 years, 4 generations, and a values culture that treats every worker as a whole person. This document validates that wedge against competitive reality and sharpens it into messaging.

## The Wedge: "${c.brand.wedge}"
${c.brand.wedgeDescription}

## Proof Points (from CMO discovery call)
1. 100 years of continuous family operation. Survived the Depression-era bankruptcy, diversified across a century.
2. Blue-collar workforce that stays because they're treated as whole people, not headcount.
3. A CMO from Fortune 200 companies who says she has "more purpose here than anywhere."
4. Golf division so respected they restore courses by Donald Ross, Seth Raynor, and Tillinghast.
5. Own the infrastructure: water systems, sewer systems, aggregates, pipe manufacturing. Vertically integrated.
6. Faith-based values that are authentic and longstanding, not a corporate veneer.
7. 4th generation already in the business. Succession isn't a plan; it's happening.

---

## AI Research Prompt
> Copy this into Claude to pressure-test the wedge against competitors.

\`\`\`
${promptHeader(c)}

TASK: Pressure-test the Untouchable Wedge ("The Full Truck") against competitive reality.

FOR EACH PROOF POINT ABOVE:
1. Can any competitor claim something similar? Research Ames Construction (age, ownership), Knife River (MDU Resources parent, scale), C.S. McCrossan (family-owned?), Landscapes Unlimited, Wadsworth Golf.
2. How do competitors position their heritage, values, and culture? Pull exact language from their websites and career pages.
3. Where is ${c.shortName}'s wedge truly untouchable vs. where could a competitor match it?

SPECIFIC RESEARCH:
- How many competitors in MN heavy civil are family-owned and multi-generational? (This validates the rarity.)
- Which competitors have explicit values statements? Pull their exact words. Compare to ${c.shortName}'s values: ${c.brand.values.join(', ')}.
- Which competitors talk about employee wellbeing? What language do they use? Do any have a "whole person" framework?
- Search Glassdoor reviews for Ames, McCrossan, Knife River. What do employees say about culture? How does it compare to what ${c.shortName} claims?

OUTPUT FORMAT:
- Wedge validation matrix: each proof point scored as Unique / Rare / Common
- Competitor values comparison table (exact language from their sites)
- Glassdoor culture sentiment comparison
- 3 ways to sharpen the wedge based on what competitors are NOT saying
- The "one sentence" version of the wedge for elevator conversations
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Which proof points landed hardest? Which need more evidence?]
`;
}

// ============================================================
// 02_Visual_Identity
// ============================================================

export function visualIdentityAudit(c) {
  return `# Visual Identity Audit: ${c.name}
> Current state of all visual brand elements across every property
> Research Phase: 1 (Asset Collection)
> Status: Not Started

---

## Why This Matters
Brand unification requires knowing exactly what exists today before designing what comes next. This audit captures every logo, color, font, and visual treatment currently live across all ${c.shortName} properties. Without it, unification risks creating something that clashes with assets already in the field.

## Key Questions to Answer
- Are the sub-brands using consistent colors, or has drift created visual chaos?
- What logo formats exist and where are they used?
- Does the website typography match the print/signage typography?
- What visual elements connect the subsidiaries vs. make them look unrelated?

---

## AI Research Prompt
> Copy this into Claude to generate the visual audit.

\`\`\`
${promptHeader(c)}

TASK: Conduct a comprehensive visual identity audit of all ${c.name} properties using publicly visible assets only.

FOR EACH WEBSITE, CAPTURE:
1. Logo: describe it (wordmark, icon, combination mark?). Note any tagline integrated into the logo. Screenshot or describe placement (header, footer, favicon).
2. Colors: use Chrome DevTools (Inspect > Computed Styles) to pull exact hex codes from headers, buttons, links, backgrounds, text. Document at least 5 colors per site.
3. Typography: pull font-family values from DevTools for headings, body text, and navigation. Note weights (300, 400, 700, etc.) and sizes.
4. Photography style: describe the hero images. Are they stock? Custom? Drone? Equipment? People? What's the lighting, composition, subject matter?
5. Layout patterns: card-based? Full-width sections? Sidebar navigation? How modern does it feel?

WEBSITES TO AUDIT:
- duininckcompanies.com (parent)
- duininckgolf.com
- prinsco.com
- Any Hart Ranch properties
- Any Duininck Concrete pages still live
- LinkedIn company pages (visual treatment of banners, logos)

KNOWN COLORS (validate these are current):
${c.colors.map(color => `- ${color.name}: ${color.hex}`).join('\n')}

OUTPUT FORMAT:
- Property-by-property audit table (URL, logo type, primary color hex, secondary color hex, font stack, photography style)
- Cross-property consistency score (1-10 with rationale)
- Color drift analysis: where are colors inconsistent?
- Typography drift analysis: where are fonts inconsistent?
- Visual unification recommendations: what changes would make all properties feel like one family?
- Priority actions: what's the quickest fix for visual consistency?
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Asset Inventory
| Property | Logo File | Primary Hex | Secondary Hex | Font | Notes |
|----------|-----------|-------------|---------------|------|-------|
| duininckcompanies.com | | | | | |
| duininckgolf.com | | | | | |
| prinsco.com | | | | | |
| Hart Ranch | | | | | |
| LinkedIn | | | | | |

## Human Review Notes
[Flag anything the AI couldn't see: print materials, vehicle wraps, signage, uniforms]
`;
}

export function photographyStyle(c) {
  return `# Photography & Visual Content Style: ${c.name}
> Guidelines for capturing the ${c.shortName} story visually, rooted in CMO-confirmed constraints
> Research Phase: 2 (Strategy)
> Status: Not Started

---

## Why This Matters
Nicole was explicit: the workforce will not go on camera. "These guys are blue-collar. They don't want to talk to anybody." The photography strategy must produce compelling visual content WITHOUT relying on talking heads, interviews, or posed portraits. The work becomes the protagonist.

## CMO-Confirmed Constraints
- No talking heads (workers won't participate)
- Graphics underperform ("two likes")
- Carousels outperform static images
- Video of workers DOING the work (with voiceover) is acceptable
- Golf beauty shots lag construction by a full year (growing season)
- 3-person team means capture must be efficient and systematized

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Develop a photography and visual content style guide for ${c.name} that works within these hard constraints: no talking heads, no posed portraits, no on-camera interviews. The workforce is blue-collar and camera-shy.

RESEARCH:
1. Find 5 construction/industrial brands on Instagram or LinkedIn that produce excellent visual content WITHOUT showing employee faces prominently. Pull their handles and describe what works about their approach.
2. Find 3 golf course/landscape brands that showcase transformation stories (construction to finished product). How do they handle the time gap between building and beauty?
3. Research drone photography best practices for construction sites. What angles, times of day, and project phases produce the most compelling footage?
4. Study how brands like Caterpillar, John Deere, and Volvo Trucks make equipment the hero of their visual storytelling. What techniques translate to ${c.shortName}'s scale?

DEVELOP:
- Shot list template for a typical construction project (mobilization through completion)
- Shot list template for a golf course project (construction through grow-in, 12+ month arc)
- Equipment beauty shot guidelines (lighting, angles, staging)
- "Hands at work" photography rules (how to capture workers without revealing faces)
- Drone capture checklist (what to shoot, when, weather requirements)
- Before/during/after carousel template structure
- Color grading recommendations that reinforce ${c.shortName}'s brand palette (${c.colors.map(cl => `${cl.name}: ${cl.hex}`).join(', ')})

OUTPUT FORMAT:
- 5 brand references with handles and analysis
- Construction project shot list template
- Golf project shot list template (multi-season)
- Equipment photography guidelines
- "No face" creative techniques (10+ approaches)
- Carousel structure templates (3 types)
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Add Nicole's reactions, preferred examples, specific project sites to target]
`;
}

// ============================================================
// 04_Audience_Research
// ============================================================

export function audienceSegments(c) {
  return `# Audience Segments: ${c.name}
> WHO we serve, what they need, where they are, and what moves them
> Research Phase: 2 (BEFORE competitive landscape)
> Status: Not Started

---

## Why This Matters
Audience research runs BEFORE competitive analysis because understanding who we serve defines the playing field. We evaluate competitors through the lens of "how well do they serve OUR audiences?" without this grounding, competitive analysis drifts into generic benchmarking.

Nicole confirmed ${c.audiences.length} audience segments in the discovery call. This research validates those segments, surfaces any we're missing, and builds the depth needed for messaging and channel strategy.

## CMO-Confirmed Segments
${c.audiences.map((a, i) => `${i + 1}. ${a}`).join('\n')}

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Build comprehensive audience profiles for ${c.name}. Start with the ${c.audiences.length} CMO-confirmed segments, then identify any gaps.

${AUDIENCE_RESEARCH_MODEL.phases.map(phase => `PHASE: ${phase.label}\n${phase.instruction}`).join('\n\n')}

FOR EACH CONFIRMED SEGMENT, RESEARCH:
${c.audiences.map(a => `
**${a}:**
- Where do they congregate? (Trade shows, LinkedIn groups, publications, associations, subreddits)
- What language do they use when discussing their needs? (Pull from job postings, RFPs, forum posts)
- What content earns their engagement? (Analyze what competitors post that gets traction with this audience)
- What are their top 3 frustrations when hiring a contractor/vendor?
- What would make them remember ${c.shortName} over alternatives?
- What does their decision journey look like? (Awareness > Research > Shortlist > Select > Retain)`).join('\n')}

ALSO RESEARCH:
- Are there segments Nicole didn't mention that the business model suggests? (Supply chain partners, regulatory bodies, trade association leadership, local media, educators/schools for talent pipeline)
- For the recruiting audience specifically: what are blue-collar workers in MN/SD/TX searching for? What job boards, social platforms, and community channels reach them? What language in job postings performs best?

STRATEGIC QUESTIONS THIS MUST ANSWER:
${RESEARCH_DECISION_BRIDGE.questions.map(q => `- ${q}`).join('\n')}

OUTPUT FORMAT:
- Segment profile for each audience (demographics, psychographics, needs, channels, content preferences)
- Audience priority matrix (impact vs. effort to reach)
- Gap analysis: missing segments with recommendation
- Decision journey maps for top 3 segments
- Channel recommendations by segment
- Language samples by segment (what resonates, what falls flat)
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's reactions, segment priority adjustments, audience nuances she'd add]
`;
}

// ============================================================
// 05_Competitive
// ============================================================

export function competitiveLandscape(c) {
  const allCompetitors = [
    ...c.competitors.heavyCivil,
    ...c.competitors.golf,
    ...c.competitors.waterManagement,
  ];

  return `# Competitive Landscape: ${c.name}
> Full competitive analysis across all business lines and competitive dimensions
> Research Phase: 3 (AFTER audience research is complete)
> Status: Not Started

---

## Why This Matters
Competitive intelligence only matters when filtered through audience needs. That's why audience research comes first. Now we evaluate every competitive dimension through the lens of: "how well does this competitor serve the audiences we've identified, and where are they falling short in ways ${c.shortName} can exploit?"

## Key Questions to Answer
- Who is winning the messaging battle for each audience segment?
- Where is NO competitor showing up (the white space)?
- What employer brand promises are competitors making to the same talent pool?
- Which competitors have stronger digital presence, and what are they doing that ${c.shortName} isn't?
- What can a 100-year family business say that a corporate subsidiary never could?

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Build a comprehensive competitive landscape analysis for ${c.name} across all business lines.

IMPORTANT: This analysis should be filtered through the audience segments we've identified (reference audience research if completed). Evaluate competitors based on how well they serve those audiences, not just their capabilities.

KNOWN COMPETITORS:
Heavy Civil: ${c.competitors.heavyCivil.join(', ')}
Golf Construction: ${c.competitors.golf.join(', ')}
Water Management: ${c.competitors.waterManagement.join(', ')}
Materials: ${c.competitors.materials.join(', ')}

ANALYZE ACROSS THESE COMPETITIVE DIMENSIONS:

${buildCompetitivePromptSection(c)}

FOR EACH KNOWN COMPETITOR, PULL:
1. Website: primary URL, tagline (exact words), hero messaging, about page positioning
2. Brand identity: colors (hex codes from DevTools), typography, logo treatment, photography style
3. Social presence: all platform handles, follower counts, posting frequency, top-performing content types
4. Career page: employer value proposition, benefits highlighted, language used, Glassdoor/Indeed rating
5. SEO footprint: estimated traffic (SimilarWeb), domain authority estimate, top-ranking keywords
6. Content strategy: what are they publishing? Case studies? Blog posts? Video? How often?
7. Ownership structure: family-owned, PE-backed, public, subsidiary of larger corp?

THEN SYNTHESIZE:
- Positioning map: plot all competitors on two axes (brand maturity vs. service breadth)
- White space analysis: what is NO competitor doing well? Where can ${c.shortName} own a position?
- Messaging differentiation: ${c.shortName}'s "${c.brand.anchor}" and "${c.brand.wedge}" positioning. Does any competitor come close?
- Employer brand gap: does any competitor use "whole person" or values-based recruiting language?
- The centennial advantage: do any competitors have heritage claims? How old are they? Can anyone match 100 years?

OUTPUT FORMAT:
- Executive summary (3 paragraphs: who's winning, where's the white space, what's the opportunity)
- Competitor comparison matrix (all dimensions, all competitors)
- Positioning map visualization description
- White space opportunities (ranked by impact)
- Competitive threats to watch
- Messaging differentiation scorecard
- Employer brand comparison table
- Heritage/legacy comparison
- Recommendations: 5 moves ${c.shortName} should make based on competitive gaps
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Competitors Nicole mentioned that we missed? Relationships she has with any of these companies?]
`;
}

export function competitorProfile(competitorName, c) {
  return `# Competitor Deep Dive: ${competitorName}
> Comprehensive profile analyzing brand, digital presence, and positioning
> Research Phase: 3 (Competitive Intelligence)
> Status: Not Started

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Build a deep competitive profile of ${competitorName} as a competitor to ${c.name}.

RESEARCH:
1. **Company overview**: ownership, age, headquarters, revenue estimate (if findable), employee count, geographic reach, service lines
2. **Brand analysis**: visit their website. Capture exact tagline, hero messaging, about page copy, mission/vision statements. Pull hex codes from their brand colors. Identify their font stack.
3. **Digital presence**: all social media handles with follower counts. Posting frequency. Best-performing post types. Website traffic estimate (SimilarWeb).
4. **SEO footprint**: top 10 keywords they rank for. Domain authority estimate. Content types that drive organic traffic.
5. **Employer brand**: career page messaging (exact language). Benefits highlighted. Glassdoor rating and review themes. Indeed rating. LinkedIn employee count and growth.
6. **Content strategy**: what are they publishing? Blog cadence? Case studies? Video? Awards/press? Social content themes?
7. **Strengths vs. ${c.shortName}**: where do they outperform us? Where do we outperform them?
8. **Vulnerabilities**: where are they weak? What audience needs are they failing to meet?

OUTPUT FORMAT:
- Company snapshot table (key metrics)
- Brand positioning summary (tagline, archetype, key messages)
- Digital scoreboard (followers, traffic, SEO metrics)
- Employer brand assessment
- SWOT relative to ${c.shortName}
- Specific opportunities: what can ${c.shortName} exploit?
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's perspective on this competitor? Project overlap? Talent loss to them?]
`;
}

// ============================================================
// 06_Digital_Ecosystem
// ============================================================

export function seoBaseline(c) {
  return `# SEO Baseline: ${c.name}
> Current search engine performance across all properties
> Research Phase: 2 (Digital Ecosystem)
> Status: Not Started

---

## Why This Matters
SEO is the foundation of discoverability. If ${c.shortName} doesn't rank for the searches their audiences make, they're invisible to new customers and recruits. This baseline captures where they stand today so every future action has a measurable starting point.

## Key Questions to Answer
- What searches should lead to ${c.shortName} but currently don't?
- Which competitors outrank them for critical keywords?
- What's the quickest SEO win available right now?
- Is the brand unification helping or hurting search performance?

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Build an SEO baseline for all ${c.name} web properties. Use free tools: Google search results, SimilarWeb, any available SEO checkers.

AUDIT EACH PROPERTY:
${['duininckcompanies.com', 'duininckgolf.com', 'prinsco.com'].map(url => `
**${url}:**
- Page title and meta description for homepage (exact text)
- H1 tags on key pages
- Schema markup present? (check view-source or schema validator)
- robots.txt and sitemap.xml present?
- HTTPS properly configured?
- Mobile-friendly? (Google Mobile-Friendly Test)
- PageSpeed score (mobile and desktop)
- Estimated monthly traffic (SimilarWeb)
- Top referring domains
- Estimated keyword count`).join('\n')}

KEYWORD RESEARCH:
- What should ${c.shortName} rank for? Build a target keyword list organized by subsidiary:
  * Heavy Civil: "heavy civil contractor Minnesota," "road construction MN," "paving contractor," etc.
  * Golf: "golf course construction," "golf course renovation," "Donald Ross restoration," etc.
  * Prinsco: "drainage pipe manufacturer," "agricultural drainage," "stormwater pipe," etc.
  * Recruiting: "construction jobs Minnesota," "heavy equipment operator jobs," etc.

- For each target keyword, check: does ${c.shortName} currently rank? What position? Who ranks above them?

COMPETITOR SEO COMPARISON:
- Compare domain authority / traffic estimates for: ${c.competitors.heavyCivil.join(', ')}
- What keywords do competitors rank for that ${c.shortName} doesn't?

QUICK WINS:
- Identify 5 SEO improvements that could be made this week (meta descriptions, schema, internal linking, etc.)

OUTPUT FORMAT:
- Property-by-property SEO scorecard
- Target keyword matrix (keyword, search volume estimate, current rank, competitor rank)
- Competitor SEO comparison table
- Quick win list (5-10 actions, ranked by impact/effort)
- Strategic gaps: what content needs to exist for SEO that currently doesn't?
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Flag any keywords Nicole specifically mentioned wanting to rank for]
`;
}

export function geoStrategy(c) {
  return `# GEO (Generative Engine Optimization): ${c.name}
> How ${c.shortName} shows up (or doesn't) when people ask AI about their industry
> Research Phase: 2 (Digital Ecosystem)
> Status: Not Started

---

## Why This Matters
When a municipal engineer asks ChatGPT "who are the best heavy civil contractors in Minnesota?" or a golf course architect asks Claude "who builds the best restoration courses?" the answer shapes perception before ${c.shortName} ever gets a call. GEO is the new SEO. This audit establishes the baseline.

## Key Questions to Answer
- Does ${c.shortName} appear in AI-generated answers for their core services?
- Which competitors DO appear? What makes them AI-visible?
- What structured data would make ${c.shortName} more likely to be cited by AI models?

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Audit ${c.name}'s presence in AI-generated answers and develop a GEO strategy.

TEST QUERIES (run in ChatGPT, Claude, Google AI Overviews, and Perplexity):

Heavy Civil:
- "Best heavy civil contractors in Minnesota"
- "Top road construction companies Midwest"
- "Heavy civil construction companies with best safety records"
- "Who are the largest paving contractors in Minnesota?"
- "Family-owned construction companies in Minnesota"

Golf:
- "Best golf course builders in the United States"
- "Golf course restoration companies"
- "Who builds Donald Ross course restorations?"
- "Top golf course construction firms"

Prinsco:
- "Best drainage pipe manufacturers"
- "Agricultural drainage pipe companies"
- "Stormwater management pipe manufacturers"

Recruiting:
- "Best construction companies to work for in Minnesota"
- "Family-owned companies with best employee benefits"

FOR EACH QUERY, DOCUMENT:
- Does ${c.shortName} appear in the response?
- What companies ARE mentioned?
- What sources does the AI cite?
- What would need to exist on ${c.shortName}'s website to be included?

RESEARCH GEO ENABLERS:
- Wikipedia/Wikidata: does ${c.shortName} have entries? Do competitors?
- Industry directories: which ones feed AI training data?
- Schema markup: what structured data would help AI understand ${c.shortName}'s services?
- Case studies: do they have project pages detailed enough for AI to cite?

OUTPUT FORMAT:
- AI presence scorecard (query-by-query results across 4 platforms)
- Competitor AI visibility comparison
- Gap analysis: what content is missing?
- GEO action plan: 10 specific actions to improve AI visibility
- Wikipedia/Wikidata strategy
- Schema markup recommendations
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Which queries matter most to Nicole? Any she'd add?]
`;
}

export function socialAudit(c) {
  return `# Social Media Audit: ${c.name}
> Current state of all social accounts across the portfolio
> Research Phase: 2 (Digital Ecosystem)
> Status: Not Started

---

## Why This Matters
Nicole's team is running social with Excel files and Buffer, and the Golf accounts went dark. Before recommending any new tools or strategies, we need the full picture: what exists, what's performing, and what's been abandoned.

## CMO Context
- Current tools: Buffer (unhappy with it) + Excel files ("clunky")
- Team: 3 people (CMO, designer, admin)
- Golf social: DARK. Sam and a few guys ran it with an agency. Stopped because too busy.
- Nicole insight: "Graphics get two likes. Carousels work."

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Conduct a comprehensive social media audit of all ${c.name} accounts across every platform.

FOR EACH ACCOUNT, CAPTURE:
1. Platform and handle/URL
2. Follower/connection count
3. Date of last post
4. Average posts per week (look at last 3 months)
5. Engagement rate (average likes + comments / follower count for last 10 posts)
6. Top 3 performing posts (by engagement) and what made them work
7. Worst 3 performing posts and why they fell flat
8. Content mix breakdown: what % is graphics, photos, carousels, video, text?
9. Bio/about text (verbatim)
10. Profile photo and banner description
11. Are they using the correct brand colors? (compare to ${c.colors.map(cl => `${cl.hex}`).join(', ')})

ACCOUNTS TO FIND AND AUDIT:
- ${c.name}: LinkedIn, Facebook, Instagram, YouTube, X/Twitter, TikTok
- Duininck Golf: LinkedIn, Instagram, Facebook, YouTube
- Prinsco: LinkedIn, Facebook, Instagram, YouTube
- Hart Ranch: LinkedIn, Facebook, Instagram, YouTube
- Any other Duininck-related accounts

COMPETITOR SOCIAL BENCHMARK:
- Pull follower counts and posting frequency for: ${c.competitors.heavyCivil.join(', ')}
- What content types are competitors using that ${c.shortName} isn't?
- Which competitor has the strongest social presence and why?

OUTPUT FORMAT:
- Account inventory table (platform, handle, followers, last post, frequency, engagement rate)
- "Dark" accounts list (inactive for 30+ days)
- Content performance analysis (what content types perform best across all accounts)
- Competitor social comparison table
- Gap analysis: what competitors do that ${c.shortName} doesn't
- Quick wins: 5 social actions for this week
- Tool recommendation: what should replace Buffer + Excel?
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's preferences on tools, accounts she wants to sunset, content she's seen work]
`;
}

// ============================================================
// 03_Verbal_Identity
// ============================================================

export function voiceGuidelines(c) {
  return `# Voice Guidelines: ${c.name}
> How ${c.shortName} sounds across every channel and audience
> Research Phase: 4 (Strategy)
> Status: In Progress (foundations laid in Brand HQ)

---

## Why This Matters
A unified brand needs a unified voice. But "unified" doesn't mean "one-size-fits-all." ${c.shortName} talks to golf course architects, equipment operators, municipal engineers, and job seekers. The voice must flex without breaking. Nicole needs guidelines her 3-person team can apply without second-guessing.

## Already Confirmed
- Brand personality: ${c.brand.personality.join(', ')}
- Tagline: "${c.tagline}"
- Brand anchor: "${c.brand.anchor}"
- DO say: "Built to last," "Four generations strong," "We see the whole person"
- DON'T say: "Disrupting the industry," "Best-in-class," "We're like a family"
- Content rule: No talking heads. Carousels over graphics. The work speaks.

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Develop comprehensive voice guidelines for ${c.name} that can be applied by a 3-person marketing team.

USING WHAT WE ALREADY KNOW:
- Brand personality: ${c.brand.personality.join(', ')}
- Values: ${c.brand.values.join(', ')}
- Key audiences: ${c.audiences.join('; ')}

DEVELOP:
1. Voice attributes with spectrum scales (e.g., "Confident but not boastful: we earned it, we don't need to shout about it")
2. Channel-specific voice calibration:
   - LinkedIn (professional, industry authority)
   - Instagram (visual storytelling, project beauty, culture peeks)
   - Facebook (community, recruiting, local)
   - Career pages (inviting, specific, benefits-forward)
   - Website copy (authoritative, legacy-grounded, forward-looking)
   - Internal comms (inclusive, proud, informational)
   - Golf-specific channels (sophisticated but approachable, craft-focused)

3. For each channel, write 2 example posts in the correct voice:
   - A project completion announcement
   - A recruiting post

4. "Sound like / Don't sound like" guide with real examples:
   - Sound like: [example sentence in ${c.shortName}'s voice]
   - Don't sound like: [same message in a generic corporate voice]
   - Why: [what makes the difference]

5. The "Nicole test": if Nicole has to write something at 7pm on her phone, what 3 rules should she remember? Make it that simple.

OUTPUT FORMAT:
- Voice attribute scales (5 spectrums)
- Channel voice matrix (channel x attribute)
- 14 sample posts (2 per channel)
- Sound like / Don't sound like guide (10 pairs)
- The 3-rule quick reference card
- Vocabulary bank: 20 on-brand words and 20 off-brand words
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's tone preferences, language she uses naturally, phrases she gravitates toward]
`;
}

export function messagingMatrix(c) {
  return `# Messaging Matrix: ${c.name}
> What to say to whom, where, and why
> Research Phase: 4 (Strategy)
> Status: Not Started

---

## Why This Matters
Nicole mentioned she built an audience-based messaging framework but it "still feels clunky." This matrix replaces that with a clear grid: for each audience, what's the core message, the proof point, the CTA, and the channel. Nicole's team should be able to open this file and know exactly what to say to a golf architect on LinkedIn vs. a job seeker on Indeed.

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Build a complete messaging matrix for ${c.name} organized by audience x channel.

AUDIENCES (from CMO-confirmed segments):
${c.audiences.map((a, i) => `${i + 1}. ${a}`).join('\n')}

FOR EACH AUDIENCE, DEVELOP:
1. Core message (what is the ONE thing they need to hear?)
2. Supporting proof points (3 facts that back the message)
3. Emotional hook (what feeling should this create?)
4. Primary CTA (what action do we want from them?)
5. Channel-specific adaptation:
   - LinkedIn post (2-3 sentences)
   - Instagram caption (1 sentence + hashtags)
   - Website headline (under 10 words)
   - Email subject line
   - Job posting headline (for recruiting audience)

ALSO DEVELOP:
- The "universal message" that works for ALL audiences (the brand umbrella)
- Centennial-specific messaging for each audience
- The "30-second pitch" for each audience (what Nicole says at a conference)

CONSTRAINTS:
- No generic platitudes. Every message must reference something specific about ${c.shortName}.
- Proof points must be verifiable (years in business, number of employees, specific projects, awards).
- Language must work for blue-collar AND white-collar audiences depending on the segment.
- All messaging should reinforce the brand anchor: "${c.brand.anchor}"

OUTPUT FORMAT:
- Master matrix table: Audience x (Core Message, Proof Points, Emotional Hook, CTA)
- Channel adaptation table: Audience x Channel x Sample Copy
- Universal brand message (50 words)
- Centennial messages by audience
- 30-second pitches by audience
- Messaging do's and don'ts (10 each)
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's messaging framework content to merge in, language preferences, audience priorities]
`;
}

// ============================================================
// 07_Content_Strategy
// ============================================================

export function contentSystemDesign(c) {
  return `# Content System Design: ${c.name}
> The operating system that makes a 3-person team perform like 10
> Research Phase: 4 (Strategy)
> Status: Not Started

---

## Why This Matters
Nicole doesn't need more content. She needs a SYSTEM. The current setup (Buffer + Excel files + ad hoc capture) creates friction at every step. The new system must: reduce decision fatigue, enable AI-assisted production, systematize capture during the seasonal window, and run on 3 people without burning them out.

## CMO Constraints (non-negotiable)
- 3-person team: Nicole (strategy), designer (visuals + photo/video), admin (execution + community)
- Nicole already uses Claude, Co-pilot, ChatGPT. She's AI-forward.
- She hates Buffer. Wants a replacement.
- No retainers. The system must be ownable by the internal team.
- Blue-collar workers won't go on camera.
- Golf beauty shots lag by a year. Capture and content calendars must account for this.

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Design a complete content operating system for ${c.name}'s 3-person marketing team.

THE SYSTEM MUST INCLUDE:

1. CAPTURE LAYER: How content gets collected from the field
   - Who captures what? (Nicole, designer, project managers, field workers?)
   - What tools minimize effort? (Phone apps, shared albums, simple submission forms)
   - How does capture happen without disrupting construction work?
   - Seasonal capture calendar: what to shoot Apr-Nov, what to create Nov-Mar

2. PRODUCTION LAYER: How raw captures become publishable content
   - AI-assisted pipeline: how Claude/ChatGPT fits into the workflow (caption writing, carousel copywriting, hashtag research, content repurposing)
   - Template system: pre-designed Canva/Figma templates for each content type
   - Content types to produce: project carousels, equipment reels, employee spotlights (no face), drone footage, community impact, recruiting posts, golf transformation stories

3. SCHEDULING LAYER: What replaces Buffer + Excel
   - Evaluate: Sprout Social, Later, Hootsuite, Loomly, Planable, Publer
   - Requirements: multi-account, approval workflow, calendar view, analytics, under $200/mo, not clunky
   - Recommendation with rationale

4. MEASUREMENT LAYER: How Nicole proves ROI
   - What 5 metrics matter for ${c.shortName}? (Not vanity metrics)
   - Monthly reporting template
   - How to connect social engagement to recruiting pipeline and project inquiries

5. CONTENT CALENDAR: First 90 days
   - Weekly posting cadence by platform
   - Centennial content countdown plan (March > July 25)
   - Golf social restart plan
   - Recruiting content surge for construction season

OUTPUT FORMAT:
- System architecture diagram (text-based, showing layers and flow)
- Tool recommendation with pricing comparison
- 90-day content calendar
- AI prompt templates for common content tasks (5 prompts)
- Capture workflow for field teams
- Template list with specifications
- Measurement dashboard design
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's tool preferences, budget constraints, team capacity notes]
`;
}

// ============================================================
// 08_Strategy
// ============================================================

export function employerBrandStrategy(c) {
  return `# Employer Brand Strategy: ${c.name}
> Positioning ${c.shortName} as the employer of choice in blue-collar construction
> Research Phase: 4 (Strategy)
> Status: Not Started

---

## Why This Matters
${c.shortName} hires seasonal workers EVERY year. They compete for the same talent pool as Ames, McCrossan, and Knife River. The differentiator: a "whole person" approach rooted in six wellbeing dimensions (Career, Family/Social, Finances, Health, Community, Spiritual). No competitor talks like this. The question is whether the talent market wants to hear it.

## The Wellbeing Framework
Nicole confirmed these as the pillars of employee value: Career, Family/Social, Finances, Health, Community, Spiritual.

---

## AI Research Prompt

\`\`\`
${promptHeader(c)}

TASK: Develop an employer brand strategy for ${c.name} centered on their "whole person" wellbeing framework.

RESEARCH FIRST:
1. What are the top competitors saying on their career pages? Pull exact headlines and benefit language from:
   - Ames Construction careers page
   - C.S. McCrossan careers page
   - Knife River careers page
   - Aggregate Industries careers page
2. Glassdoor/Indeed analysis: what do employees say about working at each competitor? Common complaints? Common praise?
3. What is ${c.shortName}'s current career page saying? (Pull exact copy from the website)
4. Research: what attracts blue-collar workers in construction? What matters more: pay, benefits, schedule, culture, proximity? Find data.
5. Search for "best employers in construction" lists and rankings. Is ${c.shortName} on any? Who is?

DEVELOP:
1. Employer value proposition (EVP) built on the 6 wellbeing dimensions. For each dimension, write:
   - The promise (what ${c.shortName} offers)
   - The proof (what evidence supports it)
   - The headline (for career page/recruiting ads)
2. Recruiting content templates:
   - Job posting template that uses the wellbeing framework
   - LinkedIn recruiting ad (3 versions)
   - Indeed posting optimization
   - Instagram carousel for recruiting
3. Seasonal recruiting campaign (ramp up before April construction season):
   - Timeline: Jan-Mar hiring push
   - Channels: where to reach blue-collar workers in MN/SD/TX
   - Messages: what to say that competitors aren't saying
4. The "whole person" differentiator test: would this language resonate with a 25-year-old equipment operator who currently works for a competitor? Would it matter to their spouse? Test the messaging through those lenses.

OUTPUT FORMAT:
- Current state analysis (competitor career pages, Glassdoor comparison)
- EVP by wellbeing dimension (promise, proof, headline)
- 5 recruiting content templates
- Seasonal campaign plan
- Channel strategy for reaching blue-collar talent
- Differentiation scorecard: where ${c.shortName} wins vs. competitors
\`\`\`

---

## Research Output
[Paste AI research results here]

---

## Human Review Notes
[Nicole's employer brand priorities, specific wellbeing programs to highlight, retention data if available]
`;
}

// ============================================================
// TEMPLATE REGISTRY
// Maps file paths to template functions
// ============================================================

export function getAllTemplates(c) {
  const templates = {};

  // 00_Project_Management
  templates['00_Project_Management/engagement-brief.md'] = engagementBrief(c);
  templates['00_Project_Management/decision-log.md'] = decisionLog(c);

  // 01_Brand_Foundation
  templates['01_Brand_Foundation/company-profile.md'] = companyProfile(c);
  templates['01_Brand_Foundation/brand-architecture.md'] = brandArchitecture(c);
  templates['01_Brand_Foundation/core-narrative.md'] = coreNarrative(c);
  templates['01_Brand_Foundation/untouchable-wedge.md'] = untouchableWedge(c);
  templates['01_Brand_Foundation/brand-identity.md'] = stub('Brand Identity', 'Core brand identity attributes, archetype, personality, values', c);
  templates['01_Brand_Foundation/centennial-strategy.md'] = stub('Centennial Strategy', 'Strategic plan for the 2026 centennial year and July 25 event', c);

  // 02_Visual_Identity
  templates['02_Visual_Identity/visual-identity-audit.md'] = visualIdentityAudit(c);
  templates['02_Visual_Identity/photography-style.md'] = photographyStyle(c);
  templates['02_Visual_Identity/color-system.md'] = stub('Color System', `Documented color palette with hex codes. Current: ${c.colors.map(cl => `${cl.name} ${cl.hex}`).join(', ')}`, c);
  templates['02_Visual_Identity/typography.md'] = stub('Typography', 'Font stack documentation across all properties', c);
  templates['02_Visual_Identity/sub-brand-visual-audit.md'] = stub('Sub-Brand Visual Audit', 'Visual consistency analysis across all sub-brand properties', c);
  templates['02_Visual_Identity/asset-inventory.md'] = stub('Asset Inventory', 'Complete inventory of all brand assets: logos, templates, signage, vehicle wraps', c);

  // 03_Verbal_Identity
  templates['03_Verbal_Identity/voice-guidelines.md'] = voiceGuidelines(c);
  templates['03_Verbal_Identity/messaging-matrix.md'] = messagingMatrix(c);
  templates['03_Verbal_Identity/tagline-inventory.md'] = stub('Tagline Inventory', `All taglines and slogans in use. Primary: "${c.tagline}"`, c);
  templates['03_Verbal_Identity/naming-conventions.md'] = stub('Naming Conventions', 'How to reference subsidiaries post-unification', c);
  templates['03_Verbal_Identity/channel-voice-guide.md'] = stub('Channel Voice Guide', 'Voice calibration by platform: LinkedIn, Instagram, Facebook, career pages, internal', c);
  templates['03_Verbal_Identity/centennial-messaging.md'] = stub('Centennial Messaging', 'Messaging framework for the 100-year milestone', c);
  templates['03_Verbal_Identity/elevator-pitches.md'] = stub('Elevator Pitches', 'Audience-specific pitches: GC, architect, recruit, community, partner', c);

  // 04_Audience_Research
  templates['04_Audience_Research/audience-segments.md'] = audienceSegments(c);
  templates['04_Audience_Research/persona-gc-publicworks.md'] = stub('Persona: GCs & Public Works', 'Detailed persona for general contractors and municipal/public works decision-makers', c);
  templates['04_Audience_Research/persona-golf-architects.md'] = stub('Persona: Golf Architects & Owners', 'Detailed persona for golf course architects, private club boards, resort operators', c);
  templates['04_Audience_Research/persona-recruits.md'] = stub('Persona: Prospective Employees', 'Detailed persona for seasonal and full-time blue-collar talent', c);
  templates['04_Audience_Research/persona-employees.md'] = stub('Persona: Current Employees', 'Detailed persona for existing 700+ field workers and internal audience', c);
  templates['04_Audience_Research/persona-communities.md'] = stub('Persona: Communities', 'Detailed persona for municipalities and communities where Duininck operates', c);
  templates['04_Audience_Research/persona-ag-customers.md'] = stub('Persona: Ag Customers (Prinsco)', 'Detailed persona for agricultural drainage and water management buyers', c);
  templates['04_Audience_Research/employee-journey-map.md'] = stub('Employee Journey Map', 'Awareness > Apply > Onboard > Grow > Advocate journey for blue-collar talent', c);

  // 05_Competitive
  templates['05_Competitive/competitive-landscape.md'] = competitiveLandscape(c);
  templates['05_Competitive/competitive-positioning-map.md'] = stub('Competitive Positioning Map', 'Visual positioning map plotting competitors on brand maturity vs. service breadth', c);
  templates['05_Competitive/employer-brand-comparison.md'] = stub('Employer Brand Comparison', 'Career page messaging, Glassdoor/Indeed ratings, benefits comparison across competitors', c);
  templates['05_Competitive/competitor-social-audit.md'] = stub('Competitor Social Audit', 'Social media presence comparison: followers, frequency, engagement, content types', c);

  // Competitor profiles
  const allCompetitors = [
    ...c.competitors.heavyCivil,
    ...c.competitors.golf,
    ...c.competitors.waterManagement.slice(0, 1), // ADS only
  ];
  for (const comp of allCompetitors) {
    const slug = comp.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/-+$/, '');
    templates[`05_Competitive/profiles/${slug}.md`] = competitorProfile(comp, c);
  }

  // 06_Digital_Ecosystem
  templates['06_Digital_Ecosystem/seo-baseline.md'] = seoBaseline(c);
  templates['06_Digital_Ecosystem/geo-strategy.md'] = geoStrategy(c);
  templates['06_Digital_Ecosystem/social-audit.md'] = socialAudit(c);
  templates['06_Digital_Ecosystem/digital-audit.md'] = stub('Digital Ecosystem Audit', 'All digital properties: domains, hosting, analytics, tech stack', c);
  templates['06_Digital_Ecosystem/tech-stack-audit.md'] = stub('Tech Stack Audit', 'CMS, hosting, analytics, CDN, and marketing tools across all properties', c);
  templates['06_Digital_Ecosystem/seo-strategy.md'] = stub('SEO Strategy', 'Keyword targets, content gaps, and link building plan by subsidiary', c);
  templates['06_Digital_Ecosystem/content-performance.md'] = stub('Content Performance', 'Analysis of top-performing content across all channels', c);

  // Website audits
  for (const site of ['duininck', 'golf', 'prinsco', 'hartranch', 'concrete']) {
    templates[`06_Digital_Ecosystem/website-audits/website-audit-${site}.md`] = stub(
      `Website Audit: ${site}`,
      `Full site audit: structure, content, UX, mobile, performance, SEO`,
      c
    );
  }

  templates['06_Digital_Ecosystem/local-seo/google-business-profiles.md'] = stub('Google Business Profiles', 'GBP audit for all locations: accuracy, reviews, photos, Q&A', c);
  templates['06_Digital_Ecosystem/local-seo/directory-listings.md'] = stub('Directory Listings', 'Industry directory presence and accuracy: ENR, ABC, AGC, local chambers', c);

  // 07_Content_Strategy
  templates['07_Content_Strategy/content-system-design.md'] = contentSystemDesign(c);
  templates['07_Content_Strategy/seasonal-capture-calendar.md'] = stub('Seasonal Capture Calendar', 'Monthly capture plan: what to shoot, where, who captures, what it feeds', c);
  templates['07_Content_Strategy/blue-collar-capture-playbook.md'] = stub('Blue-Collar Capture Playbook', 'How to create compelling content when the workforce won\'t go on camera', c);
  templates['07_Content_Strategy/carousel-templates.md'] = stub('Carousel Templates', 'Specifications for project stories, employee spotlights, equipment reels, golf transformations', c);
  templates['07_Content_Strategy/golf-social-restart.md'] = stub('Golf Social Restart', 'Strategy to reactivate dark golf social accounts without losing credibility', c);
  templates['07_Content_Strategy/centennial-content-plan.md'] = stub('Centennial Content Plan', 'Pre-event, event, and post-event content for July 25, 2026 celebration', c);
  templates['07_Content_Strategy/internal-comms-strategy.md'] = stub('Internal Communications Strategy', 'How to reach 700+ disconnected field employees with brand story', c);
  templates['07_Content_Strategy/content-calendar-template.md'] = stub('Content Calendar Template', 'Weekly/monthly posting schedule template by platform and audience', c);

  // 08_Strategy
  templates['08_Strategy/employer-brand-strategy.md'] = employerBrandStrategy(c);
  templates['08_Strategy/untouchable-wedge.md'] = stub('Untouchable Wedge Strategy', 'How to operationalize "The Full Truck" across all touchpoints', c);
  templates['08_Strategy/recruiting-strategy.md'] = stub('Recruiting Strategy', 'Seasonal campaign plan for blue-collar talent acquisition', c);
  templates['08_Strategy/centennial-campaign.md'] = stub('Centennial Campaign', 'Full campaign plan: paid, organic, PR, event, internal', c);
  templates['08_Strategy/brand-unification-roadmap.md'] = stub('Brand Unification Roadmap', 'Phase-by-phase plan for visual and verbal unification', c);
  templates['08_Strategy/digital-strategy.md'] = stub('Digital Strategy', 'Integrated digital presence plan across web, social, SEO, GEO', c);

  // 09_Assets_Library
  templates['09_Assets_Library/asset-inventory.md'] = stub('Assets Library Inventory', 'Master index of all brand assets: logos, photography, templates, video, collateral', c);

  // 10_Research_Pipeline
  templates['10_Research_Pipeline/research-prompts.md'] = stub('Research Prompts', 'Index of all AI research prompts used in this engagement', c);
  templates['10_Research_Pipeline/industry-landscape.md'] = stub('Industry Landscape', 'Macro trends in construction, golf, water management, and real estate', c);
  templates['10_Research_Pipeline/raw-research/company-deep-dive.md'] = stub('Company Deep Dive', 'Extended research on parent company and subsidiaries', c);
  templates['10_Research_Pipeline/raw-research/competitor-research.md'] = stub('Competitor Research', 'Raw competitive intelligence data and notes', c);
  templates['10_Research_Pipeline/raw-research/industry-trends.md'] = stub('Industry Trends', 'Macro trends affecting construction, golf, water management', c);
  templates['10_Research_Pipeline/raw-research/audience-research.md'] = stub('Audience Research', 'Raw audience research data, survey results, interview notes', c);

  return templates;
}

/**
 * Generates a stub template for files that don't need full prompts yet.
 * These get filled in as the engagement progresses.
 */
function stub(title, description, c) {
  return `# ${title}: ${c.name}
> ${description}
> Status: Not Started

---

## Why This Matters
[To be developed as the engagement progresses. This file is a placeholder in the research pipeline.]

## Key Questions to Answer
- [TBD based on upstream research]

---

## AI Research Prompt
> [Will be developed after prerequisite research phases are complete]

---

## Research Output
[Pending]

---

## Human Review Notes
[Add observations and context as they emerge]
`;
}
