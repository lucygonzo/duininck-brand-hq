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
    summary: 'Five-minute fixes and zero-cost actions that move the needle immediately. No approvals needed. No budget required.',
    urgency: 'Immediate',
    steps: [
      { action: 'Fix "third generation" meta description on duininck.com', owner: 'Nicole / Web team', detail: 'Every Google impression for duininck.com reinforces factually wrong information. This is a 5-minute CMS edit that changes "third generation" to "fourth generation." The single highest-impact action per second of effort.', status: 'not-started' },
      { action: 'Add meta description to duininckcompanies.com', owner: 'Nicole / Web team', detail: 'The parent site has no meta description at all. Google auto-generates one, which means every search impression is uncontrolled messaging. Write 155 characters that mention "fourth generation," "100 years," and "family-owned portfolio."', status: 'not-started' },
      { action: 'Claim Google Business Profiles for all locations', owner: 'Nicole / Admin', detail: 'Unverified: whether GBPs exist for Willmar, Prinsburg, Eagle Lake, and Texas locations. If unclaimed, anyone could claim them. If claimed but empty, they need photos, hours, and descriptions. Free to set up, 1 week to verify.', status: 'not-started' },
      { action: 'Start Glassdoor review campaign internally', owner: 'Nicole', detail: 'Duininck has 9 Glassdoor reviews. Ames has 114. Knife River has 141. The existing reviews are positive ("owners are great people," "low turnover"). A simple internal ask ("help us tell the world what it\'s like to work here") could get to 50+ in 6 months.', status: 'not-started' },
      { action: 'Add "100 years" and "founded 1926" language to all homepage heroes', owner: 'Nicole / Web team', detail: 'The centennial is invisible on every Duininck website. Before the July 25 event, every property should reference the milestone. This is both a brand signal and an SEO keyword.', status: 'not-started' },
    ],
  },
  {
    id: 'golf',
    name: 'Golf Social Resurrection',
    timeline: 'Weeks 1-4',
    summary: 'Duininck Golf has Hazeltine, Erin Hills, TPC venues, and Ross/Raynor/Tillinghast restorations in its portfolio. 143 new golf projects are in the pipeline nationally. Architects selecting builders right now cannot find Duininck Golf online.',
    urgency: 'Critical',
    steps: [
      { action: 'Reactivate Duininck Golf Instagram account', owner: 'Nicole + Sam', detail: 'The account is dark. Reactivate with a clean bio mentioning the portfolio pedigree and the parent company backing. Profile picture: Duininck Golf logo on white. First post: the strongest portfolio image available.', status: 'not-started' },
      { action: 'Build 12-week portfolio content calendar', owner: 'Lucy', detail: 'One prestige venue per week for 12 weeks. Hazeltine week 1, Erin Hills week 2, a Tillinghast restoration week 3. Each post: beauty photo + architect name tag + brief build story. This establishes credibility before asking for anything.', status: 'not-started' },
      { action: 'Photograph completed courses in their mature beauty phase', owner: 'Nicole / Designer', detail: 'Courses completed 12-18 months ago are now in peak beauty. Send the photographer to 3-5 completed courses for golden-hour shoots. These become the portfolio that sells the next project.', status: 'not-started' },
      { action: 'Pursue NGF Top 100 Businesses in Golf recognition', owner: 'Lucy + Nicole', detail: 'Landscapes Unlimited has been on this list every year since 2018. Wadsworth is on it. Duininck Golf is not. The application process exists. The portfolio qualifies.', status: 'not-started' },
    ],
  },
  {
    id: 'employer',
    name: 'Employer Brand Activation',
    timeline: 'Weeks 2-8',
    summary: 'The "whole person" wellbeing framework is genuinely unique in MN construction. No competitor uses this language. Activate it in every recruiting touchpoint before Knife River and Ames absorb the seasonal talent pool.',
    urgency: 'Critical',
    steps: [
      { action: 'Rewrite all Indeed job postings with wellbeing framework language', owner: 'Lucy + Nicole', detail: 'Current postings read identically to every other construction company: $27-$35/hr, standard benefits, generic description. Rewrite to lead with "We see the whole you: your career, your family, your health, your finances, your community, your purpose." The pay range is table stakes. The positioning is the differentiator.', status: 'not-started' },
      { action: 'Launch Ridgewater College partnership exploration', owner: 'Nicole', detail: 'Ridgewater is literally in Willmar. Their Construction Craft Laborer program produces exactly the talent Duininck needs. A "Duininck Scholars" cohort (tuition assistance in exchange for seasonal commitment) would own the local pipeline before competitors notice.', status: 'not-started' },
      { action: 'Build recruiting carousel templates', owner: 'Lucy', detail: 'Slide 1: equipment hero shot + "Now Hiring" headline. Slide 2: what the role involves (no jargon). Slide 3: the 6 wellbeing dimensions. Slide 4: how to apply + pay range. Orange-dominant to stop the scroll on Facebook and Indeed.', status: 'not-started' },
      { action: 'Create @lifeatduininck or equivalent employer brand channel', owner: 'Lucy + Nicole', detail: 'Knife River runs @lifeatknife (2,385 followers, 696 posts) as a dedicated employer brand Instagram. Employee spotlights with caption stories (not video interviews). Career fair coverage. Safety milestone celebrations. The handle IS the strategy.', status: 'not-started' },
    ],
  },
  {
    id: 'content',
    name: 'Content System Build',
    timeline: 'Weeks 4-10',
    summary: 'Nicole needs a system, not more content. Replace Buffer + Excel with an operating system that makes a 3-person team perform like 10. AI-assisted production, seasonal capture calendar, and measurement.',
    urgency: 'High',
    steps: [
      { action: 'Select social scheduling tool to replace Buffer', owner: 'Lucy + Nicole', detail: 'Evaluate Sprout Social, Later, Hootsuite, Loomly, Planable. Requirements: multi-account posting, approval workflow, calendar view, analytics, under the budget Nicole confirms. Recommendation ready after tool budget discussion.', status: 'not-started' },
      { action: 'Build seasonal content capture calendar (April through November)', owner: 'Lucy', detail: 'Every active project gets a capture plan: what to shoot, when, who captures it. April-May: mobilization and recruiting. June-Aug: peak construction, drone footage. Sep-Oct: project completions, before/after. Nov-Dec: wrap-up, gratitude, planning.', status: 'not-started' },
      { action: 'Create blue-collar content capture playbook', owner: 'Lucy', detail: 'The workforce will not go on camera. Content strategy must work within that constraint: equipment hero shots, drone footage, hands-at-work photography (no faces), voiceover narratives, time-lapse sequences. This isn\'t a limitation. It\'s a creative parameter.', status: 'not-started' },
      { action: 'Design AI-assisted content production pipeline', owner: 'Lucy', detail: 'Nicole already uses Claude, Co-pilot, ChatGPT. Formalize the workflow: raw capture goes in, AI assists with captions, hashtags, carousel copy, and content repurposing. One capture session produces LinkedIn, Instagram, and Facebook content simultaneously.', status: 'not-started' },
      { action: 'Build carousel and post templates in Canva or Figma', owner: 'Lucy', detail: '6 template types: project carousel (5-7 slides), employee spotlight (3-4 slides), equipment feature (3-5 slides), recruiting post (1-4 slides), community impact (1 slide), centennial content (3-5 slides). Each with color treatment rules.', status: 'not-started' },
    ],
  },
  {
    id: 'centennial',
    name: 'Centennial Campaign',
    timeline: 'Now through July 25, 2026',
    summary: 'The centennial is a once-in-100-years brand moment. It matters to every audience: recruits hear "come build the next 100 years," employees feel "I\'m part of something historic," communities celebrate "they\'ve been our neighbors since 1926," and GCs think "100 years of delivery."',
    urgency: 'Critical',
    steps: [
      { action: 'Launch centennial content countdown on social', owner: 'Nicole', detail: 'Weekly posts from now until July 25. "This week in our 100 years" series. Historic milestones, then-vs-now comparisons, family story moments. Orange + Heritage Gold color treatment.', status: 'not-started' },
      { action: 'Finalize July 25 event content capture plan', owner: 'Nicole + Video partner', detail: 'Multi-camera crew, drone coverage, live social posting, professional photography. The documentary premiere happens here. Every minute of this event produces content that feeds the next 12 months of marketing.', status: 'not-started' },
      { action: 'Prepare media kit for press outreach (60-90 days before event)', owner: 'Lucy', detail: 'Press kit to: West Central Tribune, ENR, Roads & Bridges, Golf Course Architecture, Minnesota Business Magazine, local radio. 100-year family business with 2,000-attendee celebration is a natural story. Outreach should start by late April.', status: 'not-started' },
      { action: 'Create "100 Stories" digital campaign concept', owner: 'Lucy + Nicole', detail: 'Modeled on JE Dunn\'s successful 2024 centennial campaign. 100 short stories from employees, customers, community members, and family. Each story is a social post, and the collection becomes a digital archive. Starts before the event, continues after.', status: 'not-started' },
      { action: 'Design internal centennial experience for 700+ field employees', owner: 'Nicole', detail: 'Centennial branded hard hat stickers, jobsite countdown boards, "I Build for Duininck" shareable social content. The centennial belongs to every person who has ever picked up a tool for this company. Make sure field workers feel included, not spectators.', status: 'not-started' },
    ],
  },
  {
    id: 'digital',
    name: 'Digital Visibility Foundation',
    timeline: 'Weeks 2-12 (ongoing)',
    summary: 'Duininck does not appear on Google\'s first page for "heavy civil contractor Minnesota." The brand is invisible to anyone who doesn\'t already know the name. Fix the foundation before investing in content.',
    urgency: 'High',
    steps: [
      { action: 'Add Organization schema (JSON-LD) to all websites', owner: 'Web team', detail: 'Structured data helps Google and AI models understand what Duininck does. Organization, LocalBusiness, and Project schemas. Developer adds JSON-LD to the header of each site. The single highest-impact GEO action after metadata fixes.', status: 'not-started' },
      { action: 'Build project case study pages (2-3 per month)', owner: 'Lucy + Nicole', detail: 'Each major project gets its own URL with specs, timeline, materials, outcomes, and photography. This serves three purposes: SEO (each page ranks for location + service keywords), sales (GCs can find relevant experience), and AI visibility (case studies are what AI models cite).', status: 'not-started' },
      { action: 'Research and draft Wikipedia article', owner: 'Lucy', detail: '100-year family business, multiple subsidiaries, centennial event, community awards. This meets Wikipedia notability criteria. A Wikipedia entry is the single highest-impact action for GEO (AI visibility). Needs to be factual, well-sourced, and neutral.', status: 'not-started' },
      { action: 'Verify and optimize industry directory listings', owner: 'Lucy', detail: 'AGC, NAPA, GCBAA, ENR databases, BBB. Ensure all listings are accurate, current, and include the centennial mention. These directories feed AI training data and influence search rankings.', status: 'not-started' },
      { action: 'Increase blog publishing from twice per year to 2-4x monthly', owner: 'Nicole + Lucy', detail: 'Current cadence: duininckcompanies.com publishes "new stories twice per year." This is invisible to search engines. Target: 2-4 posts per month covering project completions, centennial milestones, industry insights, and employee stories. AI-assisted writing can make this sustainable for a 3-person team.', status: 'not-started' },
    ],
  },
  {
    id: 'internal',
    name: 'Internal Communications Platform',
    timeline: 'Weeks 6-12',
    summary: '700+ field employees have no email, no intranet, no app. They are completely disconnected from the brand story. If each shared one piece of content per year, that\'s 700+ authentic impressions in the communities where Duininck recruits.',
    urgency: 'High',
    steps: [
      { action: 'Evaluate SMS vs. mobile app solutions', owner: 'Lucy + Nicole', detail: 'Options: Beekeeper (full employee app), Staffbase (enterprise comms), Team Engine (SMS-based, simpler). Key question: will field workers download an app? SMS reaches everyone but is less visual. Budget and adoption likelihood determine the right tool.', status: 'not-started' },
      { action: 'Launch platform before centennial event', owner: 'Nicole', detail: 'The centennial is the perfect first message. "You\'re part of something 100 years in the making." If the platform launches after July 25, the most powerful engagement moment is missed.', status: 'not-started' },
      { action: 'Design monthly "Duininck Digest" content format', owner: 'Lucy', detail: 'Project spotlights (what YOUR work looks like from a drone), safety milestone recognition, benefits reminders, centennial countdown, new hire welcomes. One push per month that takes 5 minutes to read. Foremen can also distribute printed 1-pagers at morning huddles.', status: 'not-started' },
      { action: 'Create shareable employee content ("I Build for Duininck")', owner: 'Lucy', detail: 'Pre-made social content employees can share to personal networks. "I build for Duininck" badges, project completion shareable graphics, centennial pride content. Organic amplification to 700+ personal networks in recruiting markets.', status: 'not-started' },
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
