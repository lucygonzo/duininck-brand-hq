import { useState } from 'react';
import { METRICS, OPEN_PRIORITIES, CLIENT, CMO, INTERNAL_TEAM, CENTENNIAL } from '../data/brandData';
import { SectionHeader, Callout, Card, StatBox, Lbl, Body, Block, Chip, Divider, Dot, C } from '../components/ui';

const URGENCY_ORDER = ['Critical', 'High', 'Medium'];
type SortKey = 'importance' | 'owner' | 'dateAdded' | 'ease';

export default function OverviewPage({ onNavigate }: { onNavigate?: (tabId: string) => void }) {
  const [expandedPriority, setExpandedPriority] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>('importance');
  const [filterUrgency, setFilterUrgency] = useState<string>('all');
  const [agendaOpen, setAgendaOpen] = useState(false);

  const sortedPriorities = [...OPEN_PRIORITIES]
    .filter(p => filterUrgency === 'all' || p.urgency === filterUrgency)
    .sort((a, b) => {
      if (sortBy === 'importance') return URGENCY_ORDER.indexOf(a.urgency) - URGENCY_ORDER.indexOf(b.urgency);
      if (sortBy === 'owner') return a.owner.localeCompare(b.owner);
      if (sortBy === 'dateAdded') return (a.dateAdded || '').localeCompare(b.dateAdded || '');
      if (sortBy === 'ease') return (a.ease || 5) - (b.ease || 5);
      return 0;
    });

  return (
    <div>
      <SectionHeader num="00 / Foundation" title="Overview" sub="Executive summary: current state, key metrics, and open priorities for the Duininck Companies brand engagement." />

      {/* MEETING AGENDA */}
      <Card onClick={() => setAgendaOpen(!agendaOpen)} style={{ marginBottom: '16px', cursor: 'pointer', borderLeft: `4px solid ${C.orange}`, background: C.orangeGlow, border: `1px solid ${C.orange}30`, borderLeftWidth: '4px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <span style={{ fontSize: '18px' }}>📋</span>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>Meeting Agenda: Nicole Introduction</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.orange }}>6 discussion points that will shape the strategy</div>
            </div>
          </div>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', color: C.orange }}>{agendaOpen ? '▾' : '▸'}</span>
        </div>

        {agendaOpen && (
          <div style={{ marginTop: '16px', paddingTop: '16px', borderTop: `1px solid ${C.orange}30` }}>
            {/* Walkthrough Order */}
            <Lbl style={{ color: C.orange }}>Walkthrough Order (~28 min)</Lbl>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6px', marginBottom: '16px' }}>
              {[
                { num: '01', page: 'Overview', time: '3 min', note: 'Orient: what we researched, what surprised us' },
                { num: '02', page: 'Gap Analysis', time: '5 min', note: 'Headline: "A 9/10 company with a 4.7/10 brand"' },
                { num: '03', page: 'Competitive', time: '5 min', note: '3 centenarian competitors. Knife River at 674 listings.' },
                { num: '04', page: 'Audience', time: '4 min', note: 'Journey maps. The Glassdoor gap. Trade school pipeline.' },
                { num: '05', page: 'Verbal Identity', time: '3 min', note: 'Toggle messaging by audience. Core message in action.' },
                { num: '06', page: 'Digital Ecosystem', time: '3 min', note: '"Third generation" meta description. Zero page-1 rankings.' },
                { num: '07', page: 'Visual Identity', time: '2 min', note: 'Teal as unclaimed competitive space.' },
                { num: '08', page: 'GTM Strategy', time: '3 min', note: '6 pillars timed to the centennial.' },
              ].map((step, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 8px', background: '#fff', borderRadius: '6px', border: `1px solid ${C.borderSoft}` }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: C.orange, flexShrink: 0 }}>{step.num}</span>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{step.page} <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, fontWeight: 400 }}>{step.time}</span></div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.sub }}>{step.note}</div>
                  </div>
                </div>
              ))}
            </div>

            {/* Discussion Points */}
            <Lbl style={{ color: C.orange }}>Questions for Nicole (~30 min discussion)</Lbl>
            {[
              {
                question: 'Values conflict: corporate vs. operating',
                context: 'duininckcompanies.com lists Stewardship, Integrity, Servant Leadership, Family, Generosity. duininck.com lists Safety First, Team Duininck, Value Of Each Person, Mind The Gap, Get It Done. Are both intentional (corporate values vs. operating behaviors)? Or has one replaced the other?',
                why: 'The answer determines how we present values across the unified brand. Every page, every piece of content, every job posting references values.',
              },
              {
                question: 'Employee count: 700+ or 1,000?',
                context: 'The discovery call referenced 700+ employees. The duininckcompanies.com website says 1,000 employees. Which number is current, and does the 1,000 include Prinsco?',
                why: 'This affects audience sizing, internal comms platform scope, and how we frame the "whole person" positioning. The scale of the communication challenge depends on the real number.',
              },
              {
                question: 'Source asset files',
                context: 'We pulled every logo from the live websites (SVGs and PNGs). To finalize the visual system, we also need source vector files (AI/EPS), the Hart Ranch logo, and any existing brand guide PDF.',
                why: 'A shared Google Drive folder would be the simplest handoff. We can send the folder structure so files just need to be dropped in.',
              },
              {
                question: 'Analytics access',
                context: 'We built the SEO and digital ecosystem analysis using SimilarWeb estimates and manual search testing. Google Analytics viewer access would give us real traffic data, keyword performance, and user behavior across all properties.',
                why: 'The difference between "we estimate 5,000 monthly visitors" and "Google Analytics shows 5,000 monthly visitors with 68% bounce rate" is the difference between a recommendation and a proof point.',
              },
              {
                question: 'Stakeholder interview findings',
                context: 'Nicole conducted customer and stakeholder interviews during brand unification research. We have not seen transcripts, summaries, or findings from those conversations.',
                why: 'These interviews contain audience insights we cannot replicate from public data. Customer language, pain points, and perceptions from actual conversations would validate or challenge our audience profiles.',
              },
              {
                question: 'Tool budget range',
                context: 'The content system design (replacing Buffer + Excel) and internal comms platform selection both require knowing what spend is realistic. Even a broad range (under $200/mo, under $500/mo, under $1,000/mo) would let us recommend the right tier.',
                why: 'Without a budget signal, we recommend tools and then learn they are out of scope. One number eliminates a round of back-and-forth.',
              },
            ].map((dp, i) => (
              <Card key={i} style={{ marginBottom: '8px', borderLeft: `3px solid #22C55E`, padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{dp.question}</div>
                  <Chip color={'#22C55E'}>Discussion Point</Chip>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.6, marginBottom: '6px' }}>{dp.context}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.accent, fontStyle: 'italic' }}>Why this matters: {dp.why}</div>
              </Card>
            ))}

            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '8px', textAlign: 'center' }}>Walkthrough: ~28 min · Discussion: ~30 min · Total: ~60 min</div>
          </div>
        )}
      </Card>

      {/* START HERE: Three orientation cards */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <Card style={{ borderTop: `3px solid ${C.accent}`, padding: '16px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>What We Researched</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: C.accent, marginBottom: '4px' }}>31</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>Research files across company profile, 8 audience segments, 7 competitor profiles, digital ecosystem, SEO/GEO, industry landscape, and perception scoring.</div>
        </Card>
        <Card style={{ borderTop: `3px solid ${C.orange}`, padding: '16px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.orange, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>What Surprised Us</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: C.orange, marginBottom: '4px' }}>4.7</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>Brand perception score out of 10. A company this strong should score twice that. The gap between internal quality and external visibility is the entire opportunity.</div>
        </Card>
        <Card style={{ borderTop: `3px solid #22C55E`, padding: '16px' }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>What We Need Your Eyes On</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: '#22C55E', marginBottom: '4px' }}>6</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>Open discussion points throughout this document where your perspective will shape the strategy. Marked with green "Discussion Point" cards.</div>
        </Card>
      </div>

      {/* COMPANY DESCRIPTION */}
      <Card style={{ marginBottom: '0', borderTop: `3px solid ${C.accent}`, borderRadius: '10px 10px 0 0' }}>
        <Body style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '0' }}>
          <strong>Duininck Companies</strong> is a fourth-generation, family-owned portfolio spanning water management, heavy civil construction, materials, golf course design, and real estate development. Founded in 1926 in Willmar, Minnesota, the company operates across five states with 700+ employees and six operating companies. The current CMO, Nicole Behne, joined in May 2025 from Polaris and Hormel Foods to lead a brand unification that will consolidate all construction entities under one identity while preserving niche positioning for Duininck Golf and full independence for Prinsco.
        </Body>
      </Card>

      {/* CENTENNIAL (separate paragraph, same wrapper) */}
      <Card style={{ marginTop: '0', borderTop: 'none', borderRadius: '0 0 10px 10px', paddingTop: '0', marginBottom: '24px' }}>
        <div style={{ background: C.orangeDim, border: `1.5px solid ${C.orange}`, borderRadius: '8px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.orange, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Centennial Year</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>100 Years of Building What Endures</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginTop: '4px' }}>July 25, 2026 · Public celebration · ~2,000 attendees · Documentary premiere</div>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '44px', fontWeight: 800, color: C.orange, lineHeight: 1, flexShrink: 0, marginLeft: '24px' }}>100</div>
        </div>
        <Body style={{ fontSize: '12px', color: C.muted, marginTop: '12px', marginBottom: 0 }}>{CENTENNIAL.narrative}</Body>
      </Card>

      {/* METRICS */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
        {METRICS.map((m, i) => (
          <StatBox key={i} label={m.label} value={m.value} note={
            m.label === 'States Active' ? <span>{m.note} <Dot /></span> : m.note
          } />
        ))}
      </div>

      {/* COMPANY STAGE + ENGAGEMENT (pain points consolidated into stage) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        <Card>
          <Lbl>Company Stage</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.stage}</div>
          <Body style={{ marginBottom: '10px' }}>Centennial year. Fourth generation formally introduced at the 2018 Family Summit. Three-sector structure established 2022. Brand unification in progress under Nicole Behne.</Body>

          <Lbl style={{ color: C.orange, marginTop: '8px' }}>CMO Pain Points</Lbl>
          {CMO.painPoints.map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
              <span style={{ color: C.orange, flexShrink: 0 }}>&#9679;</span> {p}
            </div>
          ))}
        </Card>
        <Card>
          <Lbl>Engagement Phase</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.phase}</div>
          <Body style={{ marginBottom: '10px' }}>Content strategy, social workflow, centennial content planning, and brand unification support. Nicole operates project-based only. No retainers.</Body>

          <Lbl style={{ color: C.amber, marginTop: '8px' }}>Website Consolidation Status</Lbl>
          <div style={{ fontSize: '11px', color: C.sub, fontFamily: "'Inter', sans-serif" }}>
            {[
              { site: 'duininckcompanies.com', status: 'Portfolio hub (active)', color: C.success },
              { site: 'duininck.com', status: 'Under revision (still says "third generation")', color: C.amber },
              { site: 'duininckgolf.com', status: 'Under revision (social went dark)', color: C.amber },
              { site: 'Concrete site', status: 'Being eliminated', color: C.red },
              { site: 'prinsco.com', status: 'Independent (unchanged)', color: C.success },
              { site: 'Hart Ranch sites', status: 'Independent (unchanged)', color: C.success },
            ].map((s, i) => (
              <div key={i} style={{ display: 'flex', gap: '6px', alignItems: 'center', padding: '3px 0' }}>
                <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: s.color, flexShrink: 0 }} />
                <span style={{ fontWeight: 600 }}>{s.site}</span>
                <span style={{ color: C.muted }}>{s.status}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* PEOPLE: CMO + TEAM (shared section) */}
      <Divider label="People & Team" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        {/* CMO PROFILE */}
        <Card style={{ borderLeft: `3px solid ${C.accent}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
            <div>
              <Lbl>Primary Contact</Lbl>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.text }}>{CMO.name} · {CMO.title}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginTop: '2px' }}>Start: {CMO.startDate} · Referral: {CMO.referral}</div>
            </div>
            <Chip color={C.accent}>CMO</Chip>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginBottom: '6px' }}>
            <strong>Background:</strong> {CMO.background}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginBottom: '6px' }}>
            <strong>Work style:</strong> {CMO.workStyle}
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginBottom: '8px' }}>
            <strong>Current tools:</strong> {CMO.currentTools}
          </div>
          <div style={{ background: C.accentGlow, padding: '8px 12px', borderRadius: '6px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.accent, fontStyle: 'italic' }}>
            {CMO.quote}
          </div>
        </Card>

        {/* TEAM */}
        <Card style={{ borderLeft: `3px solid ${C.orange}` }}>
          <Lbl style={{ color: C.orange }}>The 3-Person Marketing Team</Lbl>
          <Body style={{ marginBottom: '10px', fontSize: '12px' }}>{INTERNAL_TEAM.gap}</Body>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {INTERNAL_TEAM.marketingTeam.map((m, i) => (
              <div key={i} style={{ background: C.s2, borderRadius: '6px', padding: '10px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{m.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, marginTop: '2px' }}>{m.role}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.muted, marginTop: '4px' }}>{m.note}</div>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* CONFIRMED DECISIONS */}
      <Divider label="Confirmed Decisions" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
        {[
          { label: 'Brand Unification', detail: 'All Duininck-named companies consolidating under a single brand. Concrete brand being eliminated.', status: 'CONFIRMED' },
          { label: 'Golf Keeps Niche', detail: 'Duininck Golf retains distinct positioning. Different audience (architects vs. GCs), separate website justified.', status: 'CONFIRMED' },
          { label: 'Prinsco Independent', detail: 'Prinsco maintains independent brand identity. Separate market, separate audience, separate marketing.', status: 'CONFIRMED' },
          { label: 'Project-Based Engagement', detail: 'Nicole wants defined scopes and deliverables. No retainers. Burned by agency overhead models at previous roles.', status: 'CONFIRMED' },
          { label: 'Website Consolidation', detail: 'Golf site and duininck.com under revision. Concrete site being eliminated. duininckcompanies.com serves as portfolio hub.', status: 'IN PROGRESS', annotation: 'Research finding: duininck.com still says "third generation" in its meta description. Six websites currently exist with zero cross-linking. Consolidation timeline aligns with centennial launch (July 2026).' },
        ].map((d, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{d.label}</div>
              <Chip color={d.status === 'CONFIRMED' ? C.success : C.amber}>{d.status}</Chip>
            </div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{d.detail}</Body>
            {d.annotation && (
              <div style={{ marginTop: '8px', padding: '6px 10px', background: C.warningDim, borderRadius: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.warning }}>
                {d.annotation}
              </div>
            )}
          </Card>
        ))}
      </div>

      {/* OPEN PRIORITIES */}
      <Divider label="Open Priorities" />

      {/* Sort + Filter Controls */}
      <div style={{ display: 'flex', gap: '8px', alignItems: 'center', marginBottom: '12px', flexWrap: 'wrap' }}>
        <Lbl style={{ marginBottom: 0, marginRight: '4px' }}>Sort:</Lbl>
        {(['importance', 'owner', 'dateAdded', 'ease'] as SortKey[]).map(s => (
          <button key={s} onClick={() => setSortBy(s)} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', border: `1px solid ${sortBy === s ? C.accent : C.border}`,
            background: sortBy === s ? C.accentDim : 'transparent', color: sortBy === s ? C.accent : C.muted, transition: 'all 0.15s',
          }}>{s === 'dateAdded' ? 'date' : s}</button>
        ))}
        <span style={{ width: '1px', height: '16px', background: C.border, margin: '0 4px' }} />
        <Lbl style={{ marginBottom: 0, marginRight: '4px' }}>Filter:</Lbl>
        {['all', 'Critical', 'High', 'Medium'].map(f => (
          <button key={f} onClick={() => setFilterUrgency(f)} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', border: `1px solid ${filterUrgency === f ? C.accent : C.border}`,
            background: filterUrgency === f ? C.accentDim : 'transparent', color: filterUrgency === f ? C.accent : C.muted, transition: 'all 0.15s',
          }}>{f}</button>
        ))}
      </div>

      {sortedPriorities.map((p, idx) => {
        const origIdx = OPEN_PRIORITIES.indexOf(p);
        return (
          <div key={origIdx} style={{ marginBottom: '6px' }}>
            <div
              onClick={() => setExpandedPriority(expandedPriority === origIdx ? null : origIdx)}
              style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: expandedPriority === origIdx ? '8px 8px 0 0' : '8px', cursor: 'pointer', transition: 'border-color 0.15s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: expandedPriority === origIdx ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text }}>{p.text}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{p.owner}</span>
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                {p.ease && (
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, border: `1px solid ${C.border}`, borderRadius: '4px', padding: '2px 6px' }}>
                    ease: {p.ease}/5
                  </span>
                )}
                <Chip color={p.urgency === 'Critical' ? C.red : p.urgency === 'High' ? C.amber : C.blue}>{p.urgency}</Chip>
              </div>
            </div>
            {expandedPriority === origIdx && (
              <div style={{ padding: '12px 14px', background: C.accentGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 8px 8px' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', fontFamily: "'Inter', sans-serif", fontSize: '11px' }}>
                  <div>
                    <Lbl>Why it matters</Lbl>
                    <span style={{ color: C.sub }}>{p.whyItMatters || 'Strategic priority identified in CMO discovery call. Directly affects brand perception, competitive positioning, or operational capability.'}</span>
                  </div>
                  <div>
                    <Lbl>When mentioned</Lbl>
                    <span style={{ color: C.sub }}>{p.whenMentioned || 'CMO Discovery Call, March 12, 2026'}</span>
                  </div>
                  <div>
                    <Lbl>Audit log context</Lbl>
                    <span style={{ color: C.sub }}>{p.auditLogContext || (p.owner.includes('Nicole') ? 'Requires Nicole\'s input or approval to advance. Include in next touchpoint.' : 'Can be progressed independently using research pipeline outputs.')}</span>
                  </div>
                </div>
              </div>
            )}
          </div>
        );
      })}

      <div style={{ marginTop: '24px' }}>
        <Block variant="blue">
          <strong>The "Full Truck" Wedge:</strong> When a Duininck truck pulls up on a site, it represents everything: 100 years of earned trust, four generations of family commitment, the full weight of six operating companies, and a values system that treats every employee as a whole person. No competitor can build this overnight. No competitor can fake a century.
        </Block>
      </div>
    </div>
  );
}
