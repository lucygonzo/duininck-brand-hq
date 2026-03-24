import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Dot, CopyHex, C } from '../components/ui';

export default function VisualIdentityPage() {
  return (
    <div>
      <SectionHeader num="03 / Brand" title="Visual Identity" sub="Color system, typography, logo usage, and visual direction for Duininck Companies and its subsidiaries." />
      <Callout>
        Current visual system extracted from duininckcompanies.com. Full audit and recommendations pending CMO discovery meeting and access to brand assets.
      </Callout>

      <Block variant="amber">
        <strong>Status:</strong> {VISUAL_IDENTITY.status}
      </Block>

      <Lbl style={{ marginTop: '20px' }}>Current Color Palette (from website)</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '24px' }}>
        {VISUAL_IDENTITY.currentPalette.map((c, i) => (
          <CopyHex key={i} hex={c.hex} name={c.name} role={c.role} />
        ))}
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Typography (Current)</Lbl>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{VISUAL_IDENTITY.typography.primary}</div>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{VISUAL_IDENTITY.typography.note}</Body>
        </Card>
        <Card>
          <Lbl>Logo & Wordmark</Lbl>
          <Body style={{ marginBottom: 0, fontSize: '12px' }}>{VISUAL_IDENTITY.logoNote}</Body>
        </Card>
      </div>

      <Lbl>Visual Audit Checklist</Lbl>
      {[
        { item: 'Parent company logo files (SVG, PNG, EPS)', status: 'Needed' },
        { item: 'Sub-brand logos for all 6+ operating companies', status: 'Needed' },
        { item: 'Brand guide / standards document (if exists)', status: 'Needed' },
        { item: 'Photography style and asset library', status: 'Needed' },
        { item: 'Color usage rules across print and digital', status: 'Needed' },
        { item: 'Typography specifications and licensing', status: 'Needed' },
        { item: 'Business card, letterhead, signage templates', status: 'Needed' },
        { item: 'Vehicle wrap / equipment branding standards', status: 'Needed' },
        { item: 'Sub-brand visual consistency audit', status: 'To Do' },
        { item: 'Competitive visual comparison', status: 'To Do' },
      ].map((c, i) => (
        <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '4px' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text }}>{c.item}</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: c.status === 'Needed' ? C.orange : C.amber, textTransform: 'uppercase' }}>{c.status}<Dot /></span>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <Block variant="blue">
          <strong>Key Question for CMO:</strong> Does a formal brand guide exist today? If so, how recently was it updated, and does it cover all subsidiaries? Understanding the current state of documentation will determine whether this is an evolution or a ground-up build.
        </Block>
      </div>
    </div>
  );
}
