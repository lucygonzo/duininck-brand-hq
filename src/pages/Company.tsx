import { COMPANY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, C } from '../components/ui';

export default function CompanyPage() {
  return (
    <div>
      <SectionHeader num="01 / Foundation" title="Company Profile" sub="The founding story, mission, values, family legacy, and portfolio structure behind Duininck Companies." />
      <Callout>
        Nearly 100 years of building things that endure. Duininck Companies is not just a business. It is a generational commitment to stewardship, service, and growth.
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Mission</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.mission}</Body>
        </Card>
        <Card>
          <Lbl>Vision</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.vision}</Body>
        </Card>
      </div>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Thesis</Lbl>
        <Body style={{ fontStyle: 'italic' }}>{COMPANY.thesis}</Body>
        <div style={{ height: '1px', background: C.border, margin: '12px 0' }} />
        <Lbl>Founding Story</Lbl>
        <Body>{COMPANY.foundingStory.summary}</Body>
      </Card>

      <Lbl>Generational Timeline</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        {[
          { label: 'Generation 1 (1920s)', desc: COMPANY.foundingStory.gen1 },
          { label: 'Generation 2 (1950s)', desc: COMPANY.foundingStory.gen2 },
          { label: 'Generation 3 (1988+)', desc: COMPANY.foundingStory.gen3 },
          { label: 'Generation 4 (2018+)', desc: COMPANY.foundingStory.gen4 },
        ].map((g, i) => (
          <Card key={i}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '5px' }}>{g.label}</div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{g.desc}</Body>
          </Card>
        ))}
      </div>

      <Lbl>Core Values</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {COMPANY.values.map((v, i) => (
          <Card key={i}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>{v.name}</div>
            <Body style={{ marginBottom: 0, fontSize: '11px' }}>{v.description}</Body>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        {[
          { label: 'Corporate', line: COMPANY.oneLiners.corporate },
          { label: 'Recruiting', line: COMPANY.oneLiners.recruiting },
          { label: 'Partners', line: COMPANY.oneLiners.partner },
        ].map((l, i) => (
          <Card key={i}>
            <Lbl>{l.label}</Lbl>
            <Body style={{ marginBottom: 0, fontStyle: 'italic', fontSize: '12px' }}>{l.line}</Body>
          </Card>
        ))}
      </div>

      <Lbl>Portfolio Companies</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        {COMPANY.subsidiaries.map((s, i) => (
          <Card key={i}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{s.name}</div>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, background: C.accentDim, padding: '2px 6px', borderRadius: '9999px', textTransform: 'uppercase' }}>{s.status}</span>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginBottom: '6px' }}>{s.sector} · {s.hq}</div>
            <Body style={{ marginBottom: 0, fontSize: '12px' }}>{s.description}</Body>
          </Card>
        ))}
      </div>

      <Lbl>Key Milestones</Lbl>
      {COMPANY.milestones.map((m, i) => (
        <div key={i} style={{ display: 'flex', gap: '12px', padding: '8px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.accent, fontWeight: 500, minWidth: '42px' }}>{m.year}</span>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub }}>{m.event}</span>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <Block variant="blue">
          <strong>Employee Wellbeing Framework:</strong> Duininck explicitly supports employees across 6 dimensions: {COMPANY.wellbeingFramework.join(', ')}. They treat each employee as "a whole person."
        </Block>
      </div>
    </div>
  );
}
