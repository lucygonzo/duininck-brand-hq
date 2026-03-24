# Duininck Companies — Content System Design
> 📁 Location: `07_Content_Strategy/content-system-design.md`
> Last updated: [DATE]
> Status: ⬜ Not started — Phase 4

---

## The Core Problem
> Nicole doesn't need more content. She needs a content OPERATING SYSTEM.
> 3 people serving 700+ employees across 5+ states. No content strategist. No dedicated social person.
> She needs a system that makes her 3-person team operate like a 10-person department.

---

## Current State (from Discovery Call)

| Component | Current | Pain Level |
|---|---|---|
| Social scheduling | Buffer | Unhappy |
| Content tracking | Excel files | "Clunky, feels awful" |
| Content creation AI | Claude, Co-pilot, ChatGPT | Uses regularly — wants more |
| Photography | In-house designer can shoot | Can't own strategy |
| Video | External partner (centennial docs) | No ongoing video workflow |
| Golf social | DARK — stopped posting | Urgent to restart |
| Internal comms | NONE | 700+ disconnected employees |
| Messaging framework | Nicole built one | "Great foundations but still feels clunky" |
| Content calendar | [none documented] | No systematic planning |

---

## Proposed System Architecture

### Layer 1: Strategy (Quarterly)
- Seasonal content themes mapped to business goals
- Capture calendar: what to shoot, when, where, why
- Channel-specific plans (LinkedIn, Instagram, Facebook, Golf, Internal)

### Layer 2: Planning (Monthly)
- Monthly content calendar (pre-built, adjustable)
- Carousel templates pre-loaded for the month
- Capture shot list sent to field teams
- Internal comms calendar

### Layer 3: Production (Weekly)
- AI-assisted copywriting workflow (Claude prompts for each content type)
- Photo/video capture workflow (who captures, how, where it goes)
- Carousel assembly from templates
- Voiceover script writing

### Layer 4: Distribution (Daily)
- Scheduling tool (replacement for Buffer)
- Cross-posting rules (what goes where)
- Approval workflow (Nicole → publish)
- Internal distribution (field employees)

### Layer 5: Measurement (Monthly)
- Dashboard: what's working, what's not
- Content performance report
- Audience growth tracking
- Recruiting pipeline attribution

---

## Seasonal Capture Calendar

| Month | Construction Activity | What to Capture | Content Type |
|---|---|---|---|
| **Apr-May** | Season kickoff, mobilization | Crew prep, equipment staging, first pours | Recruiting + culture |
| **Jun-Aug** | Peak construction | Active projects, paving, grading, golf work, drone footage | Project stories + capabilities |
| **Sep-Oct** | Project completions | Before/after documentation, community impact | Case studies + community |
| **Nov-Dec** | Wrap-up | Holiday/gratitude content, year-in-review | Values + gratitude |
| **Jan-Mar** | Off-season | Publish 2026 captures as 2027 content. Equipment maintenance. Recruiting. | Evergreen + recruiting |

**Critical insight:** Golf beauty shots come a YEAR after construction. 2026 captures feed 2027 content. Must plan NOW.

---

## Content Templates

### 1. Project Story Carousel (4-5 slides)
```
Slide 1: Hero shot of completed project (or dramatic in-progress)
Slide 2: "THE CHALLENGE" — What was the problem? (2-3 lines + photo)
Slide 3: "THE WORK" — What did Duininck do? (action shots)
Slide 4: "THE RESULT" — Before/after or completion shot
Slide 5: "DUININCK" — Logo + tagline + CTA
```

### 2. Employee Spotlight Carousel (3-4 slides)
```
Slide 1: Employee photo (candid, on-site, NOT posed portrait)
Slide 2: Name, role, years at Duininck, location
         "What I build" (one sentence)
Slide 3: Stats or fun facts (equipment they run, projects completed, miles paved)
Slide 4: "Join a company that sees the whole person" + careers link
```
*Note: Blue-collar workforce won't go on camera. Use candid photos of them WORKING, with stats overlay. No talking-head videos.*

### 3. Equipment / Process Reel (Video)
```
0-3s: Wide shot of equipment in action (hook)
3-8s: Close-up of the process (paving, grading, pipe laying)
8-15s: Aerial/drone perspective showing scale
15-20s: Finished result or crew walking away
Caption: Simple, factual. "[X] tons of asphalt. [Y] miles of road. Duininck."
```
*Voiceover option: "This is what 100 years of building looks like."*

### 4. Golf Course Restoration Story (Carousel or Video)
```
Slide 1: Original architect sketch or historic photo
Slide 2: "Before" — Pre-renovation condition
Slide 3: "During" — Duininck Golf crew at work
Slide 4: "After" — Completed restoration (beauty shot — 1 year later)
Slide 5: Architect quote or course fact + Duininck Golf branding
```

---

## AI-Assisted Production Pipeline

Nicole already uses Claude, Co-pilot, and ChatGPT. Build a workflow around what she knows:

### Claude Prompts for Content Production
```
PROMPT: LinkedIn Post Writer
Write a LinkedIn post for Duininck Companies about [TOPIC].
Voice: Steadfast, humble, generous, forward-looking, grounded.
Tone: Warm professional. Understated confidence.
Must include: One specific detail that proves the point (not generic).
Language rules: No "disrupting," "innovative solutions," "best-in-class."
Length: 150-200 words.
End with: One of these — "People. Values. Growth." or "Built to last." or "Four generations strong."
Hashtags: #PeopleValuesGrowth #BuiltToLast #DuininckCompanies
```

```
PROMPT: Carousel Copy Writer
Write copy for a [PROJECT STORY / EMPLOYEE SPOTLIGHT / EQUIPMENT] carousel for Duininck's Instagram.
Format: [NUMBER] slides. Each slide: headline (5-7 words) + body (1-2 sentences).
Voice: Direct, visual, let the work speak. Not corporate.
Include: One surprising stat or specific detail.
Final slide: CTA to [careers page / website / DM].
```

```
PROMPT: Golf Social Caption
Write an Instagram caption for Duininck Golf about [COURSE NAME / RESTORATION / PROJECT].
Voice: Refined but not pretentious. Knowledgeable about golf architecture.
Reference: The architect (Ross, Raynor, Tillinghast, etc.) if applicable.
Length: 80-120 words.
Hashtags: #DuininckGolf #GolfCourseRestoration + relevant architect/course tags
```

---

## Tool Recommendations

### Social Scheduling (Replace Buffer)
| Tool | Price | Pros | Cons | Fit |
|---|---|---|---|---|
| Later | $$  | Visual calendar, carousel support, AI captions | Limited LinkedIn features | Good |
| Sprout Social | $$$  | Full analytics, approval workflows, listening | Expensive for 3-person team | Strong |
| Hootsuite | $$ | Comprehensive, team features | Clunky UI (Nicole may hate it too) | Moderate |
| Metricool | $ | Affordable, good analytics, scheduling | Less robust approval workflows | Good |

### Internal Comms (for 700+ field employees)
| Tool | Price | Pros | Cons | Fit |
|---|---|---|---|---|
| Beekeeper | $$ | Built for frontline/blue-collar, mobile-first | Requires IT setup | Strong |
| Staffbase | $$$ | Employee app, comms platform | Can be complex | Strong |
| Workvivo | $$ | Engagement-focused, social-style feed | Newer product | Moderate |
| GroupMe/WhatsApp | Free | Everyone already has it | Not professional, no analytics | Quick fix |

---

## Measurement Framework

### Monthly Metrics Dashboard
| Metric | Target | Source |
|---|---|---|
| Total social followers (all accounts) | +X%/month | Social platform analytics |
| Average engagement rate | >X% | Social analytics |
| Website traffic (organic) | +X%/month | GA4 |
| Career page visits | Track monthly | GA4 |
| Job applications | Track monthly | ATS |
| Content pieces published | X/month | Content calendar |
| Internal comms reach | X% of employees | Internal platform |
| Golf social recovery | X followers in Y months | Instagram/LinkedIn |
