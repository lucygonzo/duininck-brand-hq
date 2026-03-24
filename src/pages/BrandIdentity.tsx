import { BRAND_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, C } from '../components/ui';

export default function BrandIdentityPage() {
  return (
    <div>
      <SectionHeader num="02 / Brand" title="Brand Identity" sub="Archetype, brand anchor, personality, and core narrative that drive every Duininck decision." />
      <Callout>
        The single idea the whole brand stands on: <strong>BUILT TO LAST.</strong> Every subsidiary maps back to this. Roads that last. Pipes that endure. Courses that stand the test of time. Communities that grow. And a family that proves it: four generations, 100 years, still building. Nicole validates it: she has "more purpose than ever" working at a roads-and-golf company because the foundation is that strong.
      </Callout>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Brand Archetype</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{BRAND_IDENTITY.archetype}</div>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{BRAND_IDENTITY.archetypeNote}</Body>
        </Card>
        <Card>
          <Lbl>Brand Anchor</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '32px', fontWeight: 800, color: C.accent, letterSpacing: '-0.02em', lineHeight: 1, marginBottom: '8px' }}>{BRAND_IDENTITY.brandAnchor}</div>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{BRAND_IDENTITY.brandAnchorNote}</Body>
        </Card>
      </div>

      {/* THE UNTOUCHABLE WEDGE */}
      <Card style={{ marginBottom: '20px', borderLeft: `3px solid ${C.orange}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <div>
            <Lbl style={{ color: C.orange }}>The Untouchable Wedge</Lbl>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: C.text, letterSpacing: '-0.02em' }}>"{BRAND_IDENTITY.wedge.headline}"</div>
          </div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.orange, background: C.orangeDim, padding: '3px 8px', borderRadius: '9999px', textTransform: 'uppercase' }}>Unreplicable</div>
        </div>
        <Body style={{ marginBottom: '12px' }}>{BRAND_IDENTITY.wedge.description}</Body>
        <Lbl>Proof Points — What No Competitor Can Copy</Lbl>
        {BRAND_IDENTITY.wedge.proofPoints.map((point, i) => (
          <div key={i} style={{ display: 'flex', gap: '8px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text, padding: '5px 0', borderBottom: i < BRAND_IDENTITY.wedge.proofPoints.length - 1 ? `1px solid ${C.borderSoft}` : 'none' }}>
            <span style={{ color: C.orange, flexShrink: 0, fontWeight: 700 }}>{String(i + 1).padStart(2, '0')}</span> {point}
          </div>
        ))}
      </Card>

      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Narrative</Lbl>
        <Body style={{ fontStyle: 'italic', marginBottom: 0 }}>{BRAND_IDENTITY.coreNarrative}</Body>
      </Card>

      <Lbl>Brand Personality</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {BRAND_IDENTITY.personality.map((p, i) => (
          <Card key={i}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>{p.trait}</div>
            <Body style={{ marginBottom: 0, fontSize: '11px' }}>{p.description}</Body>
          </Card>
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px' }}>
        <Card>
          <Lbl>Language We Use</Lbl>
          {BRAND_IDENTITY.doSay.map((s, i) => (
            <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <span style={{ color: C.success, marginRight: '8px' }}>&#10003;</span>{s}
            </div>
          ))}
        </Card>
        <Card>
          <Lbl>Language We Avoid</Lbl>
          {BRAND_IDENTITY.dontSay.map((s, i) => (
            <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <span style={{ color: C.error, marginRight: '8px' }}>&#10007;</span>{s}
            </div>
          ))}
        </Card>
      </div>

      <div style={{ marginTop: '20px' }}>
        <Block variant="green">
          <strong>Strategic Note:</strong> The "Full Truck" wedge is Duininck's cheat code. When competitors say "we build roads," Duininck says "when our truck pulls up, you get 100 years of trust, 4 generations of commitment, and the full weight of a family portfolio that builds everything from highways to championship golf courses." That's not a tagline. That's an economic moat.
        </Block>
      </div>
    </div>
  );
}
