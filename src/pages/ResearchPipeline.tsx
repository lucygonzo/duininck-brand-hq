import { useState } from 'react';
import { SectionHeader, Callout, Card, Lbl, Body, ProgressBar, Block, C } from '../components/ui';

type StepStatus = 'pending' | 'in_progress' | 'complete' | 'needs_review';

const RESEARCH_STEPS = [
  {
    id: 'company',
    section: 'Company Profile',
    step: 1,
    priority: 'complete' as const,
    driveFile: '01_Brand_Foundation/company-profile.md',
    estimatedTime: '20 min',
    inputsNeeded: ['Website URL', 'CMO meeting transcript', 'Any existing about page / pitch deck'],
    prompt: `You are a brand strategist building a comprehensive company profile for Duininck Companies.

Using the context below, create a structured Markdown document for: 01_Brand_Foundation/company-profile.md

---
COMPANY: Duininck Companies
WEBSITE: https://duininckcompanies.com
CMO: Nicole Behne (ex-Polaris, ex-Hormel, started May 2025)
CENTENNIAL: 2026 (100 years)
---

Generate the following sections with clear H2 headings:

## Founding Story
## Mission & Vision
## Company Positioning (one-liners for: corporate / recruiting / partners)
## Portfolio Structure (3 sectors, 6+ subs with HQ, market, status)
## Core Values (5 values with descriptions)
## Family Governance (Gen 1-4 timeline, Central Team, Family Summit)
## Employee Wellbeing Framework (6 dimensions)
## Key Milestones (1919-2026)
## Centennial Year (July 25, 2026 event details)
## Open Questions

Format: H2 sections, bullet points, mark unverified items [UNCONFIRMED].`,
    status: 'complete' as StepStatus,
  },
  {
    id: 'competitive',
    section: 'Competitive Intelligence',
    step: 2,
    priority: 'critical' as const,
    driveFile: '05_Competitive/competitive-landscape.md',
    estimatedTime: '90 min',
    inputsNeeded: ['Competitor names by subsidiary', 'Any existing competitive intel', 'RFP/bid competitor lists'],
    prompt: `You are a brand strategist building a multi-sector competitive analysis for Duininck Companies. a 100-year-old, fourth-generation family business portfolio.

Create: 05_Competitive/competitive-landscape.md

Context:
- Portfolio of 6+ operating companies across 3 sectors (Water, Construction, Real Estate)
- HQ: Willmar, MN; operations in MN, TX, GA, SD
- 100-year centennial in 2026, 4th generation active
- Brand unification in progress (unified Duininck + golf niche + Prinsco independent)
- "Untouchable Wedge": The Full Truck. century of trust, whole-person values, vertically integrated

COMPETITORS TO RESEARCH:
Construction: Ames Construction, C.S. McCrossan, Knife River, Aggregate Industries
Golf: Landscapes Unlimited, Wadsworth Golf, Heritage Links, McDonald & Sons
Water: ADS (Advanced Drainage Systems), Hancor, Contech

For EACH competitor:
## [Competitor Name]
**Sector:** | **Threat Level:** High/Medium/Watch
**Website:** | **Founded:** | **HQ:** | **Size:**
**Positioning:** (what they claim)
**Key Strengths:** (bullets)
**Weaknesses / Gaps:** (bullets)
**Digital Presence:** Website quality (1-5), social followers, SEO estimate
**Employer Brand:** Career page messaging, Glassdoor rating
**Duininck's Edge:** (1-2 sentences. what they can't copy)

Then:
## Positioning Map (brand maturity × capability breadth)
## White Space (what NO competitor owns)
## Employer Brand Comparison Table
## SEO Footprint Comparison`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'audience',
    section: 'Audience Research',
    step: 3,
    priority: 'high' as const,
    driveFile: '04_Audience_Research/audience-segments.md',
    estimatedTime: '45 min',
    inputsNeeded: ['Nicole\'s customer interview findings', 'Employee demographics', 'Recruiting pain points'],
    prompt: `You are a brand strategist creating deep audience personas for Duininck Companies.

Create: 04_Audience_Research/audience-segments.md

CONFIRMED SEGMENTS (from CMO Nicole Behne):
1. Public Works & General Contractors. Nicole conducted customer interviews. Primary.
2. Golf Course Architects & Owners. Niche audience. "Architects come to that site vs GCs."
3. Prospective Employees (Seasonal + FT). "We're hiring every year for seasonal help."
4. Current Employees (700+ field). "Over 700 employees in the field not getting the information."
5. Communities Where They Operate. "Share with employees and communities where we live and work."
6. Agricultural Customers (Prinsco). May be out of scope. Prinsco operates independently.

KEY INSIGHTS FROM NICOLE:
- Blue-collar workers won't go on camera
- "Whole person" wellbeing framework = recruiting differentiator
- Seasonal hiring is existential. need people to SEE what an amazing org this is
- No intranet. 700+ workers disconnected from brand story
- Golf audience is fundamentally different from construction audience

For EACH segment: Demographics, Psychographics, Behaviors, Jobs to Be Done (functional/emotional/social), Messaging that works, Channel preferences.

Then:
## Cross-Segment Insights
## Priority Matrix (Revenue Impact × Growth Potential × Brand Impact × Effort)
## Blue-Collar Content Challenge (how to reach people who won't go on camera)`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'seo',
    section: 'SEO & GEO Audit',
    step: 4,
    priority: 'critical' as const,
    driveFile: '06_Digital_Ecosystem/seo-baseline.md',
    estimatedTime: '60 min',
    inputsNeeded: ['SEMrush/Ahrefs access', 'Google Analytics access', 'Google Business Profile access'],
    prompt: `You are a digital strategist auditing the SEO and GEO (Generative Engine Optimization) landscape for Duininck Companies.

Create: 06_Digital_Ecosystem/seo-baseline.md

PROPERTIES TO AUDIT:
- duininckcompanies.com (parent. being unified)
- duininckgolf.com (niche. retaining)
- prinsco.com (independent. may be out of scope)
- Hart Ranch properties (independent)

KEY CONTEXT:
- Brand unification in progress. concrete brand website being retired (needs redirect plan)
- Nicole is already using AI tools (Claude, Co-pilot, ChatGPT). GEO matters to her
- 100-year-old company = strong authority signals if properly surfaced
- Golf division has niche SEO opportunity (golf course builders/restoration)
- Local SEO critical for construction (projects are geographic)

AUDIT SECTIONS:

## Domain Metrics (DR, traffic, backlinks, referring domains per property)
## Keyword Rankings (current positions for target keywords by subsidiary)
## Target Keyword Map (what searches SHOULD find each entity?)
## On-Page SEO Audit (title tags, meta descriptions, schema, images, speed)
## Local SEO (Google Business Profiles for all locations. Willmar, TX, GA, SD)
## Backlink Analysis (quality, gaps, competitor comparison)
## Redirect Plan (concrete brand → unified brand migration)

## GEO Audit
Test these queries in ChatGPT, Claude, Google AI Overviews, Perplexity:
- "best heavy civil contractors in Minnesota"
- "golf course builders in the United States"
- "family-owned construction companies Minnesota"
- "Duininck Companies" (brand query)
Document: Does Duininck appear? What info? Is it accurate? Who appears instead?

## GEO Opportunities
- Wikipedia/Wikidata presence
- Schema markup (Organization, LocalBusiness, FAQ)
- Structured content (case studies, project pages with specs)
- Industry directory listings

## Quick Wins (Top 5 SEO actions for immediate impact)
## 90-Day SEO Roadmap`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'digital',
    section: 'Digital Ecosystem Audit',
    step: 5,
    priority: 'high' as const,
    driveFile: '06_Digital_Ecosystem/digital-audit.md',
    estimatedTime: '45 min',
    inputsNeeded: ['Social media account access', 'Website CMS credentials', 'Analytics access'],
    prompt: `You are a digital strategist auditing the full digital ecosystem for Duininck Companies.

Create: 06_Digital_Ecosystem/digital-audit.md + 06_Digital_Ecosystem/social-audit.md

KNOWN DIGITAL STATE (from CMO Nicole):
- Social scheduling: Buffer (unhappy. "clunky")
- Content tracking: Excel files (hates it)
- AI tools: Claude, Co-pilot, ChatGPT (uses regularly)
- Golf social: DARK. stopped posting. Urgent to restart.
- Internal comms: NONE. no intranet for 700+ field employees
- Content insight: Static graphics get "two likes." Carousels work.

AUDIT SECTIONS:

## Digital Properties Inventory (all websites, domains, social accounts, directories)
## Tech Stack (CMS, analytics, email, scheduling, CRM)
## Social Media Audit
For each account: profile completeness, last 30 posts analysis, engagement rates, top/worst performing content, audience demographics, competitor comparison

## Content Performance Analysis
What content types are working? What's flopping? Data-backed.

## Website Audit Summary
Each property: structure, content, UX, mobile, speed, SEO basics, conversion paths

## Tool Recommendations
Social scheduling replacement (Sprout, Later, Hootsuite, Metricool. pros/cons/price)
Internal comms (Beekeeper, Staffbase, Workvivo. for blue-collar mobile-first)
Content calendar (Notion, Monday, Asana)

## Workflow Redesign
Current: Excel + Buffer → Proposed: [recommended stack + workflow]
Must work for 3-person team operating like 10.`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'verbal',
    section: 'Verbal Identity',
    step: 6,
    priority: 'high' as const,
    driveFile: '03_Verbal_Identity/voice-guidelines.md',
    estimatedTime: '35 min',
    inputsNeeded: ['Nicole\'s messaging framework', 'Website copy audit', 'Recruiting materials'],
    prompt: `You are a brand voice strategist building the complete verbal identity for Duininck Companies.

Create: 03_Verbal_Identity/voice-guidelines.md

CONFIRMED VOICE (from CMO discovery):
- Archetype: The Builder / The Steward
- Traits: Steadfast, Humble, Generous, Forward-Looking, Grounded
- Anchor: "BUILT TO LAST"
- Tagline: "People. Values. Growth."
- The voice of people who build real things and keep their word
- Nicole's quote: "I have more purpose in my work today than I ever have"

KEY CONSTRAINTS:
- Blue-collar audience won't tolerate corporate speak
- Faith-based values are real, not veneer. express authentically, not preachy
- Golf voice is distinct from construction voice (architects vs. GCs)
- Never say: "disrupting," "innovative solutions," "best-in-class," "we're like a family" (they ARE a family)

BUILD:
## Voice Summary (5 traits with "sounds like" / "never sounds like" examples)
## Voice Spectrum (Formal-Casual, Bold-Understated, Technical-Plain, Serious-Playful)
## Messaging Matrix (by audience × by channel)
## Channel-Specific Voice (Website, LinkedIn, Instagram, Golf, Recruiting, Internal)
## Naming Conventions (how to reference each entity)
## Centennial Messaging (campaign lines for 100-year milestone)
## Words We Own (15+) / Words We Never Use (10+)
## Sample Copy (LinkedIn post, Golf caption, Recruiting headline, Internal comms)`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'visual',
    section: 'Visual Identity Research',
    step: 7,
    priority: 'high' as const,
    driveFile: '02_Visual_Identity/visual-identity-audit.md',
    estimatedTime: '30 min',
    inputsNeeded: ['Logo files from Nicole', 'Existing brand guide', 'Sub-brand logos', 'Photography assets'],
    prompt: `You are a brand designer documenting and auditing the visual identity for Duininck Companies.

Create: 02_Visual_Identity/visual-identity-audit.md

KNOWN VISUALS:
- Colors: Teal #004F71, Orange #FE5000, Navy #1E293B, White, Warm Gray #F7F6F3
- Typography: Roboto 300/400 on current website (redesign underway)
- Status: Brand unification in progress. Concrete brand being eliminated. Golf retains niche.

PHOTOGRAPHY RULES (from Nicole):
- Blue-collar workforce won't go on camera. NO talking heads
- Film the WORK: equipment, b-roll, drone footage, process
- Add voiceover narratives over cinematic footage
- Carousels > static graphics (graphics get "two likes")
- Golf beauty shots come 1 year after construction (timing offset)

BUILD:
## Current Color System (each color: hex, RGB, role, usage rules)
## Typography Audit (current vs. recommended)
## Logo Audit (once assets received from Nicole)
## Photography Style Guide (cinematic b-roll, drone, voiceover, no talking heads)
## Sub-Brand Visual Consistency Audit (screenshots of each property)
## Vehicle/Equipment Wrap Standards ("The Full Truck" concept)
## Competitive Visual Comparison (vs. 5 key competitors)
## Design System Recommendations`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'employer',
    section: 'Employer Brand Strategy',
    step: 8,
    priority: 'high' as const,
    driveFile: '08_Strategy/employer-brand-strategy.md',
    estimatedTime: '35 min',
    inputsNeeded: ['Current job postings', 'Employee retention data', 'Glassdoor/Indeed reviews'],
    prompt: `You are an employer brand strategist building the employer brand framework for Duininck Companies.

Create: 08_Strategy/employer-brand-strategy.md

THE WEDGE:
Duininck's 6-dimension wellbeing framework treats every worker as a "whole person":
Career, Family/Social, Finances, Health, Community, Spiritual
HYPOTHESIS: No construction competitor in the Midwest messages this way. Validate.

CONSTRAINTS:
- Blue-collar workers won't go on camera. content must be visual (equipment, work), not testimonial
- Seasonal hiring is critical. need people to see what an amazing org this is
- "We're like a family" is OFF LIMITS (they ARE a family. don't dilute with cliche)
- Nicole: "We're hiring every year for this seasonal help"

BUILD:
## Current Employer Brand Assessment
## Employee Value Proposition (EVP) mapped to 6 wellbeing dimensions
## Recruiting Headlines (seasonal workers, experienced operators, veterans, young pros)
## Content Strategy (stats-based spotlights, equipment reels, day-in-the-life. no talking heads)
## Blue-Collar Capture Rules (what TO do, what NOT to do)
## Competitive Employer Brand Comparison (vs. Ames, McCrossan, Knife River)
## Centennial Recruiting Angle ("100 years and just getting started")
## Activation Plan (Phase 1-3 with timelines)
## Metrics (career page visits, applications, time-to-fill, cost-per-hire)`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'content',
    section: 'Content System Design',
    step: 9,
    priority: 'critical' as const,
    driveFile: '07_Content_Strategy/content-system-design.md',
    estimatedTime: '45 min',
    inputsNeeded: ['Nicole\'s current messaging framework', 'Buffer/Excel audit', 'Content performance data'],
    prompt: `You are a content strategist designing a content OPERATING SYSTEM for Duininck Companies.

Create: 07_Content_Strategy/content-system-design.md

THE CORE PROBLEM:
Nicole doesn't need more content. She needs a SYSTEM.
3 people (CMO + designer + admin) serving 700+ employees across 5+ states.
No content strategist. No dedicated social person.
She needs 3 people to operate like 10.

CURRENT STATE:
- Buffer for scheduling (unhappy)
- Excel for tracking (hates it)
- Claude/Co-pilot/ChatGPT for writing (likes AI)
- Designer can shoot but can't own strategy
- Golf social is DARK
- Static graphics get "two likes". carousels work
- Golf beauty shots come 1 YEAR after construction

BUILD:
## System Architecture (5 layers: Strategy → Planning → Production → Distribution → Measurement)
## Seasonal Capture Calendar (Apr-Nov active season + off-season publishing)
## Content Templates (Project story carousel, Employee spotlight, Equipment reel, Golf restoration)
## AI-Assisted Production Pipeline (Claude prompts for each content type)
## Tool Recommendations (social scheduling, internal comms, content calendar. with pricing)
## Golf Social Restart Strategy (approach, first 30 days, content plan)
## Internal Comms Strategy (reaching 700+ disconnected field workers. mobile-first)
## Measurement Framework (monthly metrics dashboard)
## Centennial Content Plan (pre/during/post July 25 event)`,
    status: 'pending' as StepStatus,
  },
  {
    id: 'centennial',
    section: 'Centennial Campaign',
    step: 10,
    priority: 'high' as const,
    driveFile: '08_Strategy/centennial-campaign.md',
    estimatedTime: '30 min',
    inputsNeeded: ['July 25 event details', 'Documentary video partner info', 'Budget for centennial'],
    prompt: `You are a campaign strategist designing the centennial campaign for Duininck Companies' 100-year anniversary in 2026.

Create: 08_Strategy/centennial-campaign.md

EVENT: July 25, 2026. Public celebration, ~2,000 attendees
CONTENT: Documentary videos with historic footage, AI-animated stills, family history
VIDEO PARTNER: Nicole's contact from Hormel days. already producing documentary
BRAND MOMENT: This is the ultimate proof point. Most construction companies don't survive 20 years.

NARRATIVE: "100 years of building things that endure."

BUILD:
## Campaign Strategy (centennial as recruiting anchor, customer proof, internal pride, press moment, brand unification launch)
## Timeline (March → July 25 → December)
## Pre-Event Content (countdown series, historic throwbacks, family stories, employee features)
## Event Content (day-of social coverage, documentary premiere, community celebration)
## Post-Event Content (momentum campaign, content repurposing, "the next 100 years")
## Channel Plan (social, website, internal, press, recruiting)
## Centennial Messaging Kit (headlines, copy blocks, social captions, email templates)
## Budget Considerations
## Success Metrics`,
    status: 'pending' as StepStatus,
  },
];

const getPriorityColor = (p: string) => ({ critical: '#C03A2B', high: '#D4880B', medium: '#2B7CB0', complete: '#2E7D4F', low: '#666' }[p] || '#666');
const getStatusColor = (s: string) => ({ pending: '#999', in_progress: '#D4880B', complete: '#2E7D4F', needs_review: '#2B7CB0' }[s] || '#999');

export default function ResearchPipelinePage() {
  const [statuses, setStatuses] = useState<Record<string, StepStatus>>(
    () => Object.fromEntries(RESEARCH_STEPS.map(s => [s.id, s.status]))
  );
  const [activeStep, setActiveStep] = useState<string | null>(null);
  const [copied, setCopied] = useState<string | null>(null);

  const setStatus = (id: string, status: StepStatus) => setStatuses(prev => ({ ...prev, [id]: status }));

  const copyPrompt = (step: typeof RESEARCH_STEPS[0]) => {
    navigator.clipboard.writeText(step.prompt);
    setCopied(step.id);
    setTimeout(() => setCopied(null), 2000);
  };

  const completed = Object.values(statuses).filter(s => s === 'complete').length;
  const total = RESEARCH_STEPS.length;
  const activeStepData = activeStep ? RESEARCH_STEPS.find(s => s.id === activeStep) : null;

  return (
    <div>
      <SectionHeader num="00 / Research Pipeline" title="Research Pipeline" sub="Sequential research process. Each step generates a Claude prompt → output goes into a Google Drive markdown file → insights feed into Brand HQ pages." />
      <Callout>
        <strong>How this works:</strong> Each step generates a structured Claude prompt. Copy it, open a new Claude conversation with web search enabled, paste the prompt + any client context, and save the output into the corresponding Google Drive markdown file. Mark complete when done. The Drive files are the <strong>source of truth</strong>; this app is the <strong>storytelling layer</strong>.
      </Callout>

      <Block variant="blue">
        <strong>Drive Folder Structure:</strong> All outputs map to the Google Drive folder structure. See <code>DRIVE_FOLDER_STRUCTURE.md</code> and <code>MASTER_CHECKLIST.md</code> for the full 108-item research checklist and file mapping.
      </Block>

      <Card style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <Lbl style={{ marginBottom: 0 }}>Overall Progress</Lbl>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.accent }}>{completed}/{total} steps complete</span>
        </div>
        <ProgressBar pct={(completed / total) * 100} />
        <div style={{ display: 'flex', gap: '16px', marginTop: '10px', flexWrap: 'wrap' }}>
          {[
            { label: 'Pending', color: getStatusColor('pending'), count: Object.values(statuses).filter(s => s === 'pending').length },
            { label: 'In Progress', color: getStatusColor('in_progress'), count: Object.values(statuses).filter(s => s === 'in_progress').length },
            { label: 'Complete', color: getStatusColor('complete'), count: completed },
            { label: 'Needs Review', color: getStatusColor('needs_review'), count: Object.values(statuses).filter(s => s === 'needs_review').length },
          ].map(item => (
            <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: '5px' }}>
              <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: item.color }} />
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{item.label}: {item.count}</span>
            </div>
          ))}
        </div>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: activeStep ? '300px 1fr' : '1fr', gap: '16px' }}>
        <div>
          {RESEARCH_STEPS.map((step) => {
            const status = statuses[step.id];
            return (
              <div key={step.id} onClick={() => setActiveStep(activeStep === step.id ? null : step.id)} style={{ display: 'flex', gap: '12px', padding: '14px', background: activeStep === step.id ? C.accentGlow : C.s1, border: `1px solid ${activeStep === step.id ? C.accent : C.border}`, borderRadius: '8px', marginBottom: '6px', cursor: 'pointer', transition: 'all 0.15s' }}>
                <div style={{ width: '26px', height: '26px', borderRadius: '50%', background: status === 'complete' ? C.successDim : status === 'in_progress' ? C.warningDim : C.s3, border: `1px solid ${status === 'complete' ? C.success : status === 'in_progress' ? C.warning : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: status === 'complete' ? C.success : C.muted }}>
                  {status === 'complete' ? '\u2713' : step.step}
                </div>
                <div style={{ flex: 1, minWidth: 0 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '8px', marginBottom: '4px' }}>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{step.section}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: getPriorityColor(step.priority), textTransform: 'uppercase' }}>{step.priority}</span>
                  </div>
                  <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>{step.estimatedTime}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>{step.driveFile}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {activeStepData && (
          <Card style={{ alignSelf: 'start', position: 'sticky', top: '0' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '16px' }}>
              <div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>
                  Step {activeStepData.step}: {activeStepData.section}
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>
                  {activeStepData.estimatedTime} · {activeStepData.driveFile}
                </div>
              </div>
              <button onClick={() => setActiveStep(null)} style={{ background: 'none', border: 'none', color: C.muted, cursor: 'pointer', fontSize: '16px', lineHeight: 1 }}>
                x
              </button>
            </div>

            <div style={{ marginBottom: '16px' }}>
              <Lbl>Inputs needed before running this prompt</Lbl>
              {activeStepData.inputsNeeded.map((inp, i) => (
                <div key={i} style={{ display: 'flex', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '3px 0' }}>
                  <span style={{ color: C.accent }}>&#8594;</span> {inp}
                </div>
              ))}
            </div>

            <div style={{ marginBottom: '16px' }}>
              <Lbl>Status</Lbl>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
                {(['pending', 'in_progress', 'complete', 'needs_review'] as StepStatus[]).map(s => (
                  <button key={s} onClick={(e) => { e.stopPropagation(); setStatus(activeStepData.id, s); }} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', borderRadius: '4px', cursor: 'pointer', border: `1px solid ${statuses[activeStepData.id] === s ? getStatusColor(s) : C.border}`, background: statuses[activeStepData.id] === s ? `${getStatusColor(s)}18` : 'transparent', color: statuses[activeStepData.id] === s ? getStatusColor(s) : C.muted, transition: 'all 0.15s' }}>
                    {s.replace('_', ' ')}
                  </button>
                ))}
              </div>
            </div>

            <div style={{ marginBottom: '12px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <Lbl style={{ marginBottom: 0 }}>Claude Research Prompt</Lbl>
                <button onClick={() => copyPrompt(activeStepData)} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '5px 12px', borderRadius: '5px', cursor: 'pointer', border: `1px solid ${copied === activeStepData.id ? C.success : C.accent}`, background: copied === activeStepData.id ? C.successDim : C.accentDim, color: copied === activeStepData.id ? C.success : C.accent, transition: 'all 0.2s' }}>
                  {copied === activeStepData.id ? '\u2713 Copied!' : 'Copy Prompt'}
                </button>
              </div>
              <div style={{ background: C.s2, border: `1px solid ${C.border}`, borderRadius: '6px', padding: '12px', maxHeight: '320px', overflowY: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.sub, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {activeStepData.prompt}
              </div>
            </div>

            <Block variant="blue">
              <strong>Workflow:</strong> Copy prompt → Open new Claude conversation (enable web search) → Paste prompt + client context → Save output to <code>{activeStepData.driveFile}</code> in Google Drive → Mark complete here → Update Brand HQ app page with key insights.
            </Block>
          </Card>
        )}
      </div>
    </div>
  );
}
