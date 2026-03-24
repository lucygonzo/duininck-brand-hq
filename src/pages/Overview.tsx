import { useState } from 'react';
import { METRICS, OPEN_PRIORITIES, CLIENT, CMO, INTERNAL_TEAM, CENTENNIAL } from '../data/brandData';
import { SectionHeader, Callout, Card, StatBox, Lbl, Body, Block, Chip, Divider, C } from '../components/ui';

const URGENCY_ORDER = ['Critical', 'High', 'Medium'];
type SortKey = 'importance' | 'owner' | 'category';

export default function OverviewPage() {
  const [expandedPriority, setExpandedPriority] = useState<number | null>(null);
  const [sortBy, setSortBy] = useState<SortKey>('importance');
  const [filterUrgency, setFilterUrgency] = useState<string>('all');

  const sortedPriorities = [...OPEN_PRIORITIES]
    .filter(p => filterUrgency === 'all' || p.urgency === filterUrgency)
    .sort((a, b) => {
      if (sortBy === 'importance') return URGENCY_ORDER.indexOf(a.urgency) - URGENCY_ORDER.indexOf(b.urgency);
      if (sortBy === 'owner') return a.owner.localeCompare(b.owner);
      return 0;
    });

  return (
    <div>
      <SectionHeader num="00 / Foundation" title="Overview" sub="Executive summary: current state, key metrics, and open priorities for the Duininck Companies Brand HQ." />

      {/* COMPANY DESCRIPTION + CENTENNIAL */}
      <Card style={{ marginBottom: '24px', borderTop: `3px solid ${C.accent}` }}>
        <Body style={{ fontSize: '14px', lineHeight: 1.7, marginBottom: '16px' }}>
          <strong>Duininck Companies</strong> is a fourth-generation, family-owned portfolio spanning water management, heavy civil construction, materials, golf course design, and real estate development. Founded in 1926 in Willmar, Minnesota, the company operates across five states with 700+ employees and six operating companies.
        </Body>
        <div style={{ background: C.orangeDim, border: `1.5px solid ${C.orange}`, borderRadius: '8px', padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.orange, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Centennial Year</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>100 Years of Building Things That Endure</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginTop: '4px' }}>July 25, 2026 · Public celebration · ~2,000 attendees · Documentary premiere</div>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '44px', fontWeight: 800, color: C.orange, lineHeight: 1, flexShrink: 0, marginLeft: '24px' }}>100</div>
        </div>
        <Body style={{ fontSize: '12px', color: C.muted, marginTop: '12px', marginBottom: 0 }}>{CENTENNIAL.narrative}</Body>
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
        {METRICS.map((m, i) => <StatBox key={i} label={m.label} value={m.value} note={m.note} />)}
      </div>

      {/* COMPANY STAGE + PAIN POINTS (combined) */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        <Card>
          <Lbl>Company Stage</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.stage}</div>
          <Body style={{ marginBottom: '10px' }}>Centennial year. Fourth generation formally introduced. Three-sector structure established 2022. Brand unification in progress under new CMO.</Body>
          <Lbl style={{ color: C.orange, marginTop: '8px' }}>CMO Pain Points</Lbl>
          {CMO.painPoints.slice(0, 4).map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
              <span style={{ color: C.orange, flexShrink: 0 }}>&#9679;</span> {p}
            </div>
          ))}
        </Card>
        <Card>
          <Lbl>Engagement Phase</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.phase}</div>
          <Body style={{ marginBottom: '10px' }}>Content strategy, social workflow, centennial content planning, and brand unification support. Nicole wants project-based work, not retainer.</Body>
          <Lbl style={{ color: C.orange, marginTop: '8px' }}>Pain Points (cont.)</Lbl>
          {CMO.painPoints.slice(4).map((p, i) => (
            <div key={i} style={{ display: 'flex', gap: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
              <span style={{ color: C.orange, flexShrink: 0 }}>&#9679;</span> {p}
            </div>
          ))}
        </Card>
      </div>

      {/* PEOPLE: CMO + TEAM (shared section) */}
      <Divider label="People" />

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
          <Lbl style={{ color: C.orange }}>The 3-Person Problem</Lbl>
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
          { label: 'Golf Keeps Niche', detail: 'Duininck Golf retains distinct positioning. Different audience (architects vs. GCs), separate website.', status: 'CONFIRMED' },
          { label: 'Prinsco Independent', detail: 'Prinsco maintains independent brand identity. Separate market and audience.', status: 'CONFIRMED' },
          { label: 'Project-Based Engagement', detail: 'Nicole wants defined scopes and deliverables. No retainers. Burned by agency overhead models.', status: 'CONFIRMED' },
          { label: 'Website Consolidation', detail: 'Golf site and duininck.com are being revised. Concrete site is being eliminated. duininckcompanies.com serves as portfolio hub.', status: 'IN PROGRESS', annotation: 'Research note: duininck.com still says "third generation" in its meta description. Six websites currently exist with no cross-linking. Consolidation timeline aligns with centennial launch.' },
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
        {(['importance', 'owner'] as SortKey[]).map(s => (
          <button key={s} onClick={() => setSortBy(s)} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em',
            padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', border: `1px solid ${sortBy === s ? C.accent : C.border}`,
            background: sortBy === s ? C.accentDim : 'transparent', color: sortBy === s ? C.accent : C.muted, transition: 'all 0.15s',
          }}>{s}</button>
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

      {sortedPriorities.map((p, i) => (
        <div key={i} style={{ marginBottom: '6px' }}>
          <div
            onClick={() => setExpandedPriority(expandedPriority === i ? null : i)}
            style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: expandedPriority === i ? '8px 8px 0 0' : '8px', cursor: 'pointer', transition: 'border-color 0.15s' }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: expandedPriority === i ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text }}>{p.text}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{p.owner}</span>
            </div>
            <Chip color={p.urgency === 'Critical' ? C.red : p.urgency === 'High' ? C.amber : C.blue}>{p.urgency}</Chip>
          </div>
          {expandedPriority === i && (
            <div style={{ padding: '12px 14px', background: C.accentGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 8px 8px' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', fontFamily: "'Inter', sans-serif", fontSize: '11px' }}>
                <div>
                  <Lbl>Why it matters</Lbl>
                  <span style={{ color: C.sub }}>
                    {p.urgency === 'Critical' ? 'Time-sensitive. Construction season, golf restart, and centennial deadlines create hard windows that cannot be rescheduled.' :
                     p.urgency === 'High' ? 'Strategically important. Affects brand perception, competitive positioning, or internal operations.' :
                     'Foundational work that enables downstream deliverables. Not urgent, but blocking.'}
                  </span>
                </div>
                <div>
                  <Lbl>Source</Lbl>
                  <span style={{ color: C.sub }}>CMO Discovery Call, March 12, 2026</span>
                </div>
                <div>
                  <Lbl>Context</Lbl>
                  <span style={{ color: C.sub }}>
                    {p.owner.includes('Nicole') ? 'Nicole owns this item. Needs her input or approval to move forward.' :
                     'Lucy owns this item. Can be progressed independently using research pipeline.'}
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>
      ))}

      <div style={{ marginTop: '24px' }}>
        <Block variant="blue">
          <strong>The "Full Truck" Wedge:</strong> When a Duininck truck pulls up on a site, it represents everything: 100 years of earned trust, four generations of family commitment, the full weight of six operating companies, and a values system that treats every employee as a whole person. No competitor can build this overnight. No competitor can fake a century.
        </Block>
      </div>
    </div>
  );
}
