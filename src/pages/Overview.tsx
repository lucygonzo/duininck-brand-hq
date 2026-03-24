import { METRICS, OPEN_PRIORITIES, CLIENT, CMO, INTERNAL_TEAM, CENTENNIAL } from '../data/brandData';
import { SectionHeader, Callout, Card, StatBox, Lbl, Body, Block, Chip, C } from '../components/ui';

export default function OverviewPage() {
  return (
    <div>
      <SectionHeader num="00 / Foundation" title="Overview" sub="Executive summary: current state, key metrics, and open priorities for the Duininck Companies Brand HQ." />

      {/* CENTENNIAL BANNER */}
      <div style={{ background: C.orangeDim, border: `2px solid ${C.orange}`, borderRadius: '10px', padding: '20px 24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.orange, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Centennial Year</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>100 Years of Building Things That Endure</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginTop: '4px' }}>July 25, 2026 — Public celebration · ~2,000 attendees · Documentary premiere</div>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '48px', fontWeight: 800, color: C.orange, lineHeight: 1, flexShrink: 0, marginLeft: '24px' }}>100</div>
      </div>

      <Callout>
        <strong>Duininck Companies</strong> is a fourth-generation, family-owned portfolio spanning water management, heavy civil construction, materials, golf course design, and real estate development. Founded in 1926 in Willmar, Minnesota. This is their <strong>centennial year</strong> — and they're launching a brand unification alongside a 100-year celebration that should define the next chapter. {CENTENNIAL.narrative}
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '24px' }}>
        {METRICS.map((m, i) => <StatBox key={i} label={m.label} value={m.value} note={m.note} />)}
      </div>

      {/* CMO PROFILE */}
      <Card style={{ marginBottom: '20px', borderLeft: `3px solid ${C.accent}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <Lbl>Primary Contact</Lbl>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.text }}>{CMO.name} · {CMO.title}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginTop: '2px' }}>Start: {CMO.startDate} · Referral: {CMO.referral}</div>
          </div>
          <Chip color={C.accent}>CMO</Chip>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginBottom: '10px' }}>
          <strong>Background:</strong> {CMO.background}
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginBottom: '10px' }}>
          <strong>Work style:</strong> {CMO.workStyle}
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginBottom: '10px' }}>
          <strong>Current tools:</strong> {CMO.currentTools}
        </div>
        <div style={{ background: C.accentGlow, padding: '10px 14px', borderRadius: '6px', fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.accent, fontStyle: 'italic' }}>
          {CMO.quote}
        </div>
      </Card>

      {/* TEAM PROBLEM */}
      <Card style={{ marginBottom: '20px', borderLeft: `3px solid ${C.orange}` }}>
        <Lbl style={{ color: C.orange }}>The 3-Person Problem</Lbl>
        <Body style={{ marginBottom: '8px' }}>{INTERNAL_TEAM.gap}</Body>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
          {INTERNAL_TEAM.marketingTeam.map((m, i) => (
            <div key={i} style={{ background: C.s2, borderRadius: '6px', padding: '10px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{m.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, marginTop: '2px' }}>{m.role}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.muted, marginTop: '4px' }}>{m.note}</div>
            </div>
          ))}
        </div>
      </Card>

      {/* CONFIRMED DECISIONS */}
      <Lbl>Confirmed Brand Decisions</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Brand Unification', detail: 'All Duininck-named companies unifying under single brand. Concrete brand being eliminated.', status: 'CONFIRMED' },
          { label: 'Golf Keeps Niche', detail: 'Duininck Golf retains distinct positioning — different audience (architects vs. GCs).', status: 'CONFIRMED' },
          { label: 'Prinsco Independent', detail: 'Prinsco maintains independent brand identity. Separate market and audience.', status: 'CONFIRMED' },
          { label: 'Website Consolidation', detail: 'Golf site and Duininck.com being revised. Concrete site being eliminated.', status: 'IN PROGRESS' },
        ].map((d, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{d.label}</div>
              <Chip color={d.status === 'CONFIRMED' ? C.success : C.amber}>{d.status}</Chip>
            </div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{d.detail}</Body>
          </Card>
        ))}
      </div>

      {/* CMO PAIN POINTS */}
      <Lbl>CMO Pain Points (from Discovery Call)</Lbl>
      <Card style={{ marginBottom: '20px' }}>
        {CMO.painPoints.map((p, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '5px 0', borderBottom: i < CMO.painPoints.length - 1 ? `1px solid ${C.borderSoft}` : 'none' }}>
            <span style={{ color: C.orange, flexShrink: 0 }}>&#9679;</span> {p}
          </div>
        ))}
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '24px' }}>
        <Card>
          <Lbl>Company Stage</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.stage}</div>
          <Body style={{ marginBottom: 0 }}>Centennial year. Fourth generation formally introduced. Three-sector structure established 2022. Brand unification in progress under new CMO.</Body>
        </Card>
        <Card>
          <Lbl>Engagement Phase</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{CLIENT.phase}</div>
          <Body style={{ marginBottom: 0 }}>Content strategy, social workflow, centennial content planning, and brand unification support. Nicole wants project-based work, NOT retainer.</Body>
        </Card>
      </div>

      <Lbl>Open Priorities</Lbl>
      {OPEN_PRIORITIES.map((p, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '6px' }}>
          <div>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text }}>{p.text}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginLeft: '10px' }}>{p.owner}</span>
          </div>
          <Chip color={p.urgency === 'Critical' ? C.red : p.urgency === 'High' ? C.amber : C.blue}>{p.urgency}</Chip>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <Block variant="blue">
          <strong>The "Full Truck" Wedge:</strong> When a Duininck truck pulls up on a site, it represents ALL of it — 100 years of earned trust, 4 generations of family commitment, the full weight of 6+ operating companies, and a values system that treats every employee as a whole person. No competitor can build this overnight. No competitor can fake a century.
        </Block>
      </div>
    </div>
  );
}
