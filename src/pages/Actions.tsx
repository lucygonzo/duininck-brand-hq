import { useState } from 'react';
import { SectionHeader, Callout, Card, Lbl, Body, Chip, Block, Divider, C } from '../components/ui';

type Step = {
  action: string;
  owner: string;
  detail: string;
  status: 'not-started' | 'in-progress' | 'complete';
};

type Phase = {
  id: string;
  name: string;
  timeline: string;
  summary: string;
  urgency: 'Immediate' | 'Critical' | 'High' | 'Medium';
  steps: Step[];
};

const PHASES: Phase[] = [
  {
    id: 'meeting',
    name: 'Nicole Introduction Meeting',
    timeline: 'Tomorrow',
    summary: '6 discussion points that will shape the rest of the engagement. Walkthrough of the Brand HQ, then open conversation on the questions only Nicole can answer.',
    urgency: 'Immediate',
    steps: [
      { action: 'Values conflict: corporate vs. operating', owner: 'Discussion', detail: 'duininckcompanies.com lists Stewardship, Integrity, Servant Leadership, Family, Generosity. duininck.com lists Safety First, Team Duininck, Value Of Each Person, Mind The Gap, Get It Done. Are both intentional (corporate values vs. operating behaviors)? Or has one replaced the other? The answer determines how we present values across the unified brand.', status: 'not-started' },
      { action: 'Employee count: 700+ or 1,000?', owner: 'Discussion', detail: 'The discovery call referenced 700+ employees. The website says 1,000. Which is current? Does 1,000 include Prinsco? This affects internal comms platform scope and how we frame the "whole person" positioning.', status: 'not-started' },
      { action: 'Source asset files via shared Drive folder', owner: 'Nicole', detail: 'We pulled every logo from the live websites. To finalize the visual system: source vector files (AI/EPS), the Hart Ranch logo, and any existing brand guide PDF. A shared folder is the simplest handoff.', status: 'not-started' },
      { action: 'Google Analytics viewer access', owner: 'Nicole', detail: 'We built the SEO analysis using SimilarWeb estimates. GA4 viewer access gives us real traffic data, keyword performance, and user behavior. The difference between "we estimate" and "the data shows" is the difference between a recommendation and a proof point.', status: 'not-started' },
      { action: 'Stakeholder interview findings', owner: 'Nicole', detail: 'Nicole conducted customer and stakeholder interviews during brand unification research. Transcripts, summaries, or findings from those conversations would validate or challenge our audience profiles with actual customer language.', status: 'not-started' },
      { action: 'Tool budget range', owner: 'Nicole', detail: 'Content system (replacing Buffer + Excel) and internal comms platform both require knowing what spend is realistic. Even a broad range (under $200/mo, under $500/mo, under $1,000/mo) eliminates a round of back-and-forth.', status: 'not-started' },
    ],
  },
  {
    id: 'quickwins',
    name: 'Quick Wins (This Week)',
    timeline: 'Week 1',
    summary: 'These cost nothing and take minutes. Every day they remain unfixed, Duininck loses ground in search visibility, recruiting perception, and brand accuracy.',
    urgency: 'Immediate',
    steps: [
      { action: 'Every Google impression tells the wrong story. One CMS edit fixes it.', owner: 'Nicole / Web team', detail: 'duininck.com\'s meta description says "third generation, family-owned construction company." Duininck is in its fourth generation. Sam is already in the business. Every single time someone sees Duininck in Google results, the company looks one generation behind reality. This is a 5-minute CMS edit that fixes the most-seen sentence about the company on the internet.', status: 'not-started' },
      { action: 'The parent site lets Google write its own description. 155 characters reclaims it.', owner: 'Nicole / Web team', detail: 'duininckcompanies.com has no meta description at all. When Google encounters a page without one, it pulls whatever fragment of text it finds and displays that to searchers. The result: uncontrolled first impressions on every query. 155 characters mentioning "fourth generation," "100 years," and "family-owned portfolio" give Duininck control of how the parent brand introduces itself.', status: 'not-started' },
      { action: 'Local search presence may be unclaimed. Free verification locks it down.', owner: 'Nicole / Admin', detail: 'When a county engineer searches "construction company near Willmar MN" on Google Maps, Duininck should appear with photos, reviews, and a description. We could not confirm whether Google Business Profiles are claimed for Willmar, Prinsburg, Eagle Lake, or Texas locations. Unclaimed profiles mean anyone can claim them, and empty profiles signal an inactive business. Verification takes a week and costs nothing.', status: 'not-started' },
      { action: '9 employee reviews vs. 114 for Ames. The culture is strong; the evidence is invisible.', owner: 'Nicole', detail: 'A recruit\'s spouse googles "Duininck reviews" before the family makes a career decision. They find 9 Glassdoor reviews. Then they check Ames: 114 reviews, 3.8 stars. Knife River: 141 reviews. Thin review presence signals "small" even when the company employs 700+ people. The reviews Duininck already has are genuinely positive ("owners are great people," "low turnover"). An internal ask to employees who already feel good about the company is all it takes.', status: 'not-started' },
      { action: 'The centennial is invisible on every Duininck website. One line on each homepage changes that.', owner: 'Nicole / Web team', detail: 'July 25, 2026 is the biggest brand moment in company history. 2,000 attendees. Documentary premiere. 100 years of family legacy. And right now, no Duininck website mentions it. A visitor to duininckcompanies.com, duininck.com, or duininckgolf.com has no idea this is the centennial year. Adding "100 Years of Building What Endures" to homepage heroes takes minutes and makes every visitor aware of the milestone before anyone tells them.', status: 'not-started' },
    ],
  },
  {
    id: 'golf',
    name: 'Golf Social Resurrection',
    timeline: 'Weeks 1-4',
    summary: 'Duininck Golf has Hazeltine, Erin Hills, TPC venues, and Ross/Raynor/Tillinghast restorations in its portfolio. 143 new golf projects are in the pipeline nationally. Architects selecting builders right now cannot find Duininck Golf online.',
    urgency: 'Critical',
    steps: [
      { action: 'World-class portfolio, zero online presence. Reactivation starts with one post.', owner: 'Nicole + Sam', detail: 'The account is dark. Reactivate with a clean bio mentioning the portfolio pedigree and the parent company backing. Profile picture: Duininck Golf logo on white. First post: the strongest portfolio image available.', status: 'not-started' },
      { action: '143 projects in the pipeline and architects can\'t find Duininck. 12 weeks of portfolio content fixes that.', owner: 'Lucy', detail: 'One prestige venue per week for 12 weeks. Hazeltine week 1, Erin Hills week 2, a Tillinghast restoration week 3. Each post: beauty photo + architect name tag + brief build story. This establishes credibility before asking for anything.', status: 'not-started' },
      { action: 'Courses built 18 months ago are in peak beauty right now. Capture before the window closes.', owner: 'Nicole / Designer', detail: 'Courses completed 12-18 months ago are now in peak beauty. Send the photographer to 3-5 completed courses for golden-hour shoots. These become the portfolio that sells the next project.', status: 'not-started' },
      { action: 'Landscapes Unlimited and Wadsworth are on the NGF Top 100. Duininck Golf qualifies but has never applied.', owner: 'Lucy + Nicole', detail: 'The National Golf Foundation publishes this list annually. Landscapes Unlimited has been on it every year since 2018. The application process exists. Duininck Golf\'s portfolio of championship venues and restoration work qualifies. Recognition from NGF changes how architects perceive the brand before a single conversation happens.', status: 'not-started' },
    ],
  },
  {
    id: 'employer',
    name: 'Employer Brand Activation',
    timeline: 'Weeks 2-8',
    summary: 'The "whole person" wellbeing framework is genuinely unique in MN construction. No competitor uses this language. Activate it in every recruiting touchpoint before Knife River and Ames absorb the seasonal talent pool.',
    urgency: 'Critical',
    steps: [
      { action: 'Job postings sound like every other contractor. The wellbeing framework makes them sound like Duininck.', owner: 'Lucy + Nicole', detail: 'Current postings read identically to every other construction company: $27-$35/hr, standard benefits, generic description. Rewrite to lead with "We see the whole you: your career, your family, your health, your finances, your community, your purpose." The pay range is table stakes. The positioning is the differentiator.', status: 'not-started' },
      { action: 'Ridgewater College is in Willmar. The talent pipeline is in Duininck\'s backyard.', owner: 'Nicole', detail: 'Ridgewater\'s Construction Craft Laborer program produces exactly the talent Duininck needs. A "Duininck Scholars" cohort (tuition assistance in exchange for seasonal commitment) would own the local pipeline before competitors notice. Knife River already offers paid CDL training. This is the Duininck-specific answer to the same problem.', status: 'not-started' },
      { action: 'Recruiting content gets two seconds to stop the scroll. Branded templates make those seconds count.', owner: 'Lucy', detail: 'Slide 1: equipment hero shot + "Now Hiring" headline. Slide 2: what the role involves (no jargon). Slide 3: the 6 wellbeing dimensions. Slide 4: how to apply + pay range. Orange-dominant to stop the scroll on Facebook and Indeed. These templates are owned assets the team reuses, not one-off design requests.', status: 'not-started' },
      { action: 'Recruits hear from competitors. They should hear from Duininck employees.', owner: 'Lucy + Nicole', detail: 'Knife River runs @lifeatknife (2,385 followers, 696 posts). The handle itself reframes Instagram from a corporate marketing channel into an employee experience channel. The content is simple: still photos with caption stories (no video required), career fair coverage, safety milestone celebrations. Duininck needs an equivalent, but the approach should feel like Duininck, not like a Knife River copy. We\'re exploring what a Duininck-specific version looks like: whether it lives as its own account or as a content pillar within the existing presence, and whether employee-generated content (phone photos from the field) can be systematized without adding work to Nicole\'s team.', status: 'not-started' },
    ],
  },
  {
    id: 'content',
    name: 'Content Operating System',
    timeline: 'Weeks 4-10',
    summary: 'Nicole\'s team runs on Buffer and Excel spreadsheets. The problem is not the tools. The problem is that a 3-person team cannot produce, schedule, approve, and measure content across 8+ accounts without a system designed around how they actually work. Off-the-shelf schedulers solve posting. They don\'t solve the thinking, capturing, repurposing, or measuring.',
    urgency: 'High',
    steps: [
      { action: 'The workflow breaks before the content does', owner: 'Lucy + Nicole', detail: 'Nicole described the current process as "clunky." Excel tracks what to post. Buffer schedules it. Neither tool knows what the other is doing. Approval happens over email or in person. Analytics live in a third place. The result: Nicole\'s time goes to managing the process instead of directing the strategy. Before recommending any tool, we need to map the actual workflow: who captures, who writes, who approves, who posts, who measures. The system should be built around those people, not forced onto them. We\'re exploring whether a custom-built workflow (using automations Nicole\'s team actually controls) outperforms subscribing to another platform that owns the process.', status: 'not-started' },
      { action: 'A missed capture window costs 12 months of content', owner: 'Lucy', detail: 'Construction is seasonal. Golf courses take a full year to reach beauty after construction. A project that starts in May 2026 produces usable content in spring 2027. Every month without a capture plan is content that will never exist. The seasonal capture calendar maps every active project to a shot list: what to shoot, when, who on-site is responsible for capturing it, and when that capture becomes publishable content. This is not a content calendar. It is a production schedule that feeds a content calendar.', status: 'not-started' },
      { action: 'The camera-shy workforce is a creative constraint, not a dead end', owner: 'Lucy', detail: 'Nicole was clear: "These guys are blue-collar. They don\'t want to talk to anybody. They\'re not going to be on camera." Every competitor defaults to posed group photos or stock imagery as a result. Duininck can turn this constraint into a signature: equipment-as-hero photography, drone footage that makes the scale of work feel cinematic, hands-at-work shots that show craft without showing faces, voiceover narratives that let the work speak. The playbook should make "no faces" feel intentional and powerful, not like something is missing.', status: 'not-started' },
      { action: 'One capture should feed three platforms without triple the work', owner: 'Lucy', detail: 'Nicole already uses Claude, Co-pilot, and ChatGPT for writing. The missing piece is a formalized pipeline where raw captures flow in and adapted content flows out. One drone session at a jobsite produces: a LinkedIn project update (professional, specs-forward), an Instagram carousel (visual, before/during/after), and a Facebook community post (local, "we built the road you drive on"). We\'re designing this as a repeatable workflow with AI-assisted writing, not a one-time creative exercise. The goal is to build something Nicole\'s team owns and runs independently.', status: 'not-started' },
      { action: 'Templates should enforce the brand without requiring a designer every time', owner: 'Lucy', detail: 'The designer can shoot and edit, but cannot be the bottleneck for every post. Branded templates (project carousels, employee spotlights, equipment features, recruiting posts, community impact, centennial content) with locked color treatments, font choices, and layout rules mean anyone on the team can produce on-brand content. The templates ARE the brand guidelines applied to daily work. We\'re building these as owned assets, not subscribing to a template marketplace.', status: 'not-started' },
    ],
  },
  {
    id: 'centennial',
    name: 'Centennial Campaign',
    timeline: 'Now through July 25, 2026',
    summary: 'The centennial is a once-in-100-years brand moment. It matters to every audience: recruits hear "come build the next 100 years," employees feel "I\'m part of something historic," communities celebrate "they\'ve been our neighbors since 1926," and GCs think "100 years of delivery."',
    urgency: 'Critical',
    steps: [
      { action: 'The centennial deserves a countdown, not an announcement. Weekly content builds anticipation.', owner: 'Nicole', detail: 'Weekly posts from now until July 25. "This week in our 100 years" series. Historic milestones, then-vs-now comparisons, family story moments. Orange + Heritage Gold color treatment. The centennial should feel like a season, not a single event.', status: 'not-started' },
      { action: 'Every minute of July 25 produces content that feeds the next 12 months. Plan the capture now.', owner: 'Nicole + Video partner', detail: 'Multi-camera crew, drone coverage, live social posting, professional photography. The documentary premiere happens here. Without a capture plan, the event produces memories. With one, it produces a year of marketing assets.', status: 'not-started' },
      { action: 'A 100-year family business celebration writes its own press story. Send the pitch 60 days out.', owner: 'Lucy', detail: 'Press kit to: West Central Tribune, ENR, Roads & Bridges, Golf Course Architecture, Minnesota Business Magazine, local radio. 2,000-attendee centennial for a fourth-generation family construction company is a story journalists want to cover. Outreach should start by late April.', status: 'not-started' },
      { action: 'JE Dunn turned their centennial into 100 stories. Duininck has 100 years of stories waiting to be told.', owner: 'Lucy + Nicole', detail: '100 short stories from employees, customers, community members, and family. Each story is a social post, and the collection becomes a permanent digital archive. This is modeled on JE Dunn\'s successful 2024 campaign but adapted for Duininck\'s audience mix: GCs, recruits, golf architects, and communities each see different stories from the same collection.', status: 'not-started' },
      { action: '700 field workers should feel like the centennial belongs to them, not just the family.', owner: 'Nicole', detail: 'Centennial branded hard hat stickers, jobsite countdown boards, "I Build for Duininck" shareable social content. If the celebration feels like a corporate event observed from afar, it fails. If field workers feel their daily work is part of a 100-year legacy, it succeeds. The internal experience is what turns employees into ambassadors.', status: 'not-started' },
    ],
  },
  {
    id: 'digital',
    name: 'Digital Visibility Foundation',
    timeline: 'Weeks 2-12 (ongoing)',
    summary: 'Duininck does not appear on Google\'s first page for "heavy civil contractor Minnesota." The brand is invisible to anyone who doesn\'t already know the name. Fix the foundation before investing in content.',
    urgency: 'High',
    steps: [
      { action: 'Google and AI models don\'t understand what Duininck does. Schema markup tells them directly.', owner: 'Web team', detail: 'Organization, LocalBusiness, and Project schemas added as JSON-LD in the header of each site. This is the structured data equivalent of introducing yourself at a conference instead of waiting to be recognized. Developer adds it once; it works permanently.', status: 'not-started' },
      { action: '100 years of projects and almost none are documented online. Each case study page is a new search result.', owner: 'Lucy + Nicole', detail: 'Each major project gets its own URL with specs, timeline, materials, outcomes, and photography. This serves three purposes simultaneously: SEO (each page ranks for location + service keywords), sales (GCs can find relevant experience), and AI visibility (case studies are what AI models cite when asked "who builds heavy civil in Minnesota").', status: 'not-started' },
      { action: 'Duininck has no Wikipedia entry. AI models rely on Wikipedia more than any other source.', owner: 'Lucy', detail: '100-year family business, multiple subsidiaries, centennial event, community awards, ENR-recognized projects. This meets Wikipedia notability criteria. A well-sourced article is the single highest-impact action for GEO (Generative Engine Optimization). When ChatGPT or Claude is asked about MN construction companies, Wikipedia entries are what they reference.', status: 'not-started' },
      { action: 'Industry directories feed AI training data. Duininck\'s listings should be accurate and complete.', owner: 'Lucy', detail: 'AGC, NAPA, GCBAA, ENR databases, BBB. Verify all listings are accurate, current, and include the centennial mention. These directories are referenced by both search engines and AI models when compiling company information. Inaccurate or outdated listings propagate wrong information across the entire digital ecosystem.', status: 'not-started' },
      { action: 'The blog publishes twice per year. Search engines treat that as abandoned. 2-4x monthly rebuilds authority.', owner: 'Nicole + Lucy', detail: 'duininckcompanies.com currently publishes "new stories twice per year." To search engines, that frequency signals inactivity. Target: 2-4 posts per month covering project completions, centennial milestones, industry insights, and employee stories. AI-assisted writing (Nicole already uses Claude) makes this sustainable without adding headcount. One capture session, one AI-assisted draft, one approval, publish.', status: 'not-started' },
    ],
  },
  {
    id: 'internal',
    name: 'Reaching 700+ People Who Have No Inbox',
    timeline: 'Weeks 6-12',
    summary: '700+ field employees carry smartphones but have no corporate email, no intranet, no app. 83% of frontline workers globally lack a corporate email address. These are not people who missed the memo. They were never on the distribution list. Every one of them could be a brand ambassador in their community, but only if they feel connected to the story first.',
    urgency: 'High',
    steps: [
      { action: 'The channel question depends on who these people actually are', owner: 'Lucy + Nicole', detail: 'An app requires a download. SMS requires only a phone number. A printed page requires only a foreman who remembers to hand it out. The right answer depends on how Duininck\'s field workers actually consume information today. Do they check group texts? Do foremen relay news at morning huddles? Do they scroll Facebook at lunch? Before choosing a platform, we need to understand the communication habits that already exist and build on top of them, rather than asking 700 people to adopt a new behavior. We\'re investigating what a Duininck-owned communication system looks like versus subscribing to an enterprise platform that may be overbuilt for the actual need.', status: 'not-started' },
      { action: 'The centennial is the message that justifies the channel', owner: 'Nicole', detail: 'Every communication channel needs a reason to exist. "You\'re part of something 100 years in the making" is a message powerful enough to justify whatever channel delivers it. If the system launches before July 25, the centennial becomes the inaugural moment. If it launches after, the most compelling first message has already passed. The event is the forcing function for the timeline.', status: 'not-started' },
      { action: 'Monthly content that earns attention without demanding it', owner: 'Lucy', detail: 'Field workers will not read a newsletter. They will glance at something compelling for 30 seconds during a break. The "Duininck Digest" format: one drone photo of a project THEY worked on (recognition), one safety milestone (pride), one benefit they might not know about (value), one centennial fact (belonging). Foremen can also distribute a printed version at morning huddles for crews without strong cell service on remote sites.', status: 'not-started' },
      { action: '700 personal networks are an untapped recruiting channel', owner: 'Lucy', detail: 'Every Duininck employee has a personal network: Facebook friends, neighbors, church contacts, family. If even 10% of 700 employees share one "I Build for Duininck" post, that is 70 authentic impressions in the exact communities where Duininck recruits. Pre-made content (project completion graphics, centennial badges, referral messages) removes the friction. The employee does not need to write anything. They tap "share." We are designing these as branded assets the team owns, not a third-party advocacy platform.', status: 'not-started' },
    ],
  },
];

// Already complete items
const COMPLETED = [
  { action: 'Process CMO discovery meeting transcript and update Brand HQ', date: 'Mar 12, 2026' },
  { action: 'Confirm brand architecture decision (unified + niche golf + independent Prinsco)', date: 'Mar 12, 2026' },
  { action: 'Complete company profile deep research (SOS filings, LinkedIn, press)', date: 'Mar 16, 2026' },
  { action: 'Complete audience segment research (8 segments with empathy profiles)', date: 'Mar 18, 2026' },
  { action: 'Complete competitive intelligence (7 profiles, landscape synthesis)', date: 'Mar 20, 2026' },
  { action: 'Complete SEO/GEO baseline audit across all properties', date: 'Mar 22, 2026' },
  { action: 'Complete industry landscape research (IIJA, labor, tech, golf market)', date: 'Mar 22, 2026' },
  { action: 'Complete brand perception scoring and funnel audits', date: 'Mar 23, 2026' },
  { action: 'Build Google Drive research vault (77 files, 15 folders)', date: 'Mar 16, 2026' },
  { action: 'Source and catalog all available logo files from live websites', date: 'Mar 24, 2026' },
];

export default function ActionsPage() {
  const [expandedPhase, setExpandedPhase] = useState<string | null>('meeting');
  const [stepStatus, setStepStatus] = useState<Record<string, string>>({});

  const toggleStep = (phaseId: string, stepIdx: number) => {
    const key = `${phaseId}-${stepIdx}`;
    setStepStatus(prev => {
      const current = prev[key] || 'not-started';
      const next = current === 'not-started' ? 'in-progress' : current === 'in-progress' ? 'complete' : 'not-started';
      return { ...prev, [key]: next };
    });
  };

  const urgencyColor = (u: string) =>
    u === 'Immediate' ? C.orange : u === 'Critical' ? C.red : u === 'High' ? C.amber : C.blue;

  return (
    <div>
      <SectionHeader num="11 / Workspace" title="Strategic Action Plan" sub="Phased implementation roadmap for the Duininck brand engagement. Each phase has a clear timeline, owner, and set of concrete steps." />

      <Callout>
        Eight strategic phases, ordered by urgency and dependency. Phase 0 is the meeting with Nicole that unblocks everything else. Quick wins in Phase 1 can ship this week with zero budget. Each subsequent phase builds on the one before it.
      </Callout>

      {/* Phase cards */}
      {PHASES.map((phase) => {
        const isExpanded = expandedPhase === phase.id;
        const phaseSteps = phase.steps.map((_, i) => stepStatus[`${phase.id}-${i}`] || 'not-started');
        const completedCount = phaseSteps.filter(s => s === 'complete').length;
        const inProgressCount = phaseSteps.filter(s => s === 'in-progress').length;

        return (
          <Card key={phase.id} style={{ marginBottom: '10px', borderLeft: `4px solid ${urgencyColor(phase.urgency)}`, overflow: 'hidden' }}>
            {/* Phase header (always visible) */}
            <div onClick={() => setExpandedPhase(isExpanded ? null : phase.id)} style={{ cursor: 'pointer', padding: '2px 0' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text }}>{phase.name}</div>
                  <Chip color={urgencyColor(phase.urgency)}>{phase.urgency}</Chip>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted }}>{phase.timeline}</span>
                  {completedCount > 0 && (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: '#22C55E' }}>{completedCount}/{phase.steps.length} done</span>
                  )}
                  {inProgressCount > 0 && (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.accent }}>{inProgressCount} active</span>
                  )}
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: C.muted }}>{isExpanded ? '▾' : '▸'}</span>
                </div>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>{phase.summary}</div>
            </div>

            {/* Expanded steps */}
            {isExpanded && (
              <div style={{ marginTop: '14px', paddingTop: '14px', borderTop: `1px solid ${C.border}` }}>
                {phase.steps.map((step, i) => {
                  const status = stepStatus[`${phase.id}-${i}`] || step.status;
                  const statusColor = status === 'complete' ? '#22C55E' : status === 'in-progress' ? C.accent : C.border;

                  return (
                    <div key={i} style={{ marginBottom: '10px', padding: '12px 14px', background: status === 'complete' ? 'rgba(34,197,94,0.04)' : status === 'in-progress' ? C.accentGlow : C.s2, borderRadius: '8px', border: `1px solid ${status === 'complete' ? '#22C55E20' : status === 'in-progress' ? C.accent + '20' : C.borderSoft}` }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                          <div
                            onClick={(e) => { e.stopPropagation(); toggleStep(phase.id, i); }}
                            style={{ width: '20px', height: '20px', borderRadius: '6px', border: `2px solid ${statusColor}`, background: status === 'complete' ? '#22C55E' : status === 'in-progress' ? C.accentDim : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', flexShrink: 0 }}
                          >
                            {status === 'complete' && <span style={{ color: '#fff', fontSize: '11px' }}>&#10003;</span>}
                            {status === 'in-progress' && <span style={{ color: C.accent, fontSize: '9px' }}>&#9679;</span>}
                          </div>
                          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: status === 'complete' ? '#22C55E' : C.text, textDecoration: status === 'complete' ? 'line-through' : 'none' }}>{step.action}</div>
                        </div>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, flexShrink: 0 }}>{step.owner}</span>
                      </div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.6, marginLeft: '30px' }}>{step.detail}</div>
                    </div>
                  );
                })}
              </div>
            )}
          </Card>
        );
      })}

      {/* Completed */}
      <Divider label={`Completed (${COMPLETED.length})`} />
      <div style={{ opacity: 0.7 }}>
        {COMPLETED.map((item, i) => (
          <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: 'rgba(34,197,94,0.04)', border: `1px solid rgba(34,197,94,0.15)`, borderRadius: '8px', marginBottom: '4px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '18px', height: '18px', borderRadius: '5px', background: '#22C55E', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                <span style={{ color: '#fff', fontSize: '10px' }}>&#10003;</span>
              </div>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, textDecoration: 'line-through' }}>{item.action}</span>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{item.date}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
