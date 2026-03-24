import { COMPANY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, C } from '../components/ui';

export default function BrandArchitecturePage() {
  return (
    <div>
      <SectionHeader num="08 / Brand" title="Brand Architecture" sub="How the parent brand and subsidiary brands relate, connect, and express themselves." />

      {/* DECISION MADE BANNER */}
      <div style={{ background: C.successDim, border: `2px solid ${C.success}`, borderRadius: '10px', padding: '18px 24px', marginBottom: '24px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.success, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Decision Confirmed by CMO</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: C.text }}>Unified Brand + Niche Exception</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginTop: '2px' }}>Nicole confirmed: all Duininck-named entities unifying. Concrete brand being eliminated. Golf keeps niche. Prinsco stays independent.</div>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.success, background: C.successDim, border: `1px solid ${C.success}`, padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', flexShrink: 0 }}>Confirmed</span>
      </div>

      <Callout>
        <strong>"When a Duininck truck pulls up on a site, we need to represent ALL of it, not just a piece of it."</strong> — Nicole Behne. This quote IS the architecture decision. One unified Duininck brand for construction, with Golf retaining its niche positioning for a fundamentally different audience.
      </Callout>

      {/* CONFIRMED ARCHITECTURE */}
      <Lbl>Confirmed Architecture Model</Lbl>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card style={{ borderLeft: `3px solid ${C.success}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.text }}>Unified Duininck Brand</div>
            <Chip color={C.success}>Active</Chip>
          </div>
          <Body style={{ fontSize: '12px', marginBottom: '10px' }}>All construction and materials entities operating under a single "Duininck" brand. No more separate concrete brand. Minnesota and Texas unified. One truck = all capabilities.</Body>
          <Lbl>What's Unifying</Lbl>
          {[
            { name: 'Duininck Heavy Civil (Midwest)', note: 'Core — being unified' },
            { name: 'Duininck Heavy Civil (Texas)', note: 'Was managed separately — now unifying' },
            { name: 'Duininck Concrete', note: 'Brand being ELIMINATED — folding in' },
          ].map((item, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '5px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{item.name}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.success }}>{item.note}</span>
            </div>
          ))}
        </Card>
        <div>
          <Card style={{ borderLeft: `3px solid ${C.amber}`, marginBottom: '10px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.text }}>Niche Exception: Golf</div>
              <Chip color={C.amber}>Niche</Chip>
            </div>
            <Body style={{ fontSize: '12px', marginBottom: '6px' }}>Golf retains distinct positioning. Different audience (architects vs. GCs), different website, different content strategy. Currently dark on social — restarting.</Body>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, fontStyle: 'italic', padding: '6px 8px', background: C.accentGlow, borderRadius: '4px' }}>
              "Golf still has a bit of a niche because of the architects that come to that site versus general contractors and public works." — Nicole
            </div>
          </Card>
          <Card style={{ borderLeft: `3px solid ${C.blue}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.text }}>Independent: Prinsco & Hart Ranch</div>
              <Chip color={C.blue}>Independent</Chip>
            </div>
            <Body style={{ fontSize: '12px', marginBottom: 0 }}>Prinsco (water management) and Hart Ranch (real estate/golf) maintain independent brand identities. Different markets, different customers, different brand equity.</Body>
          </Card>
        </div>
      </div>

      {/* TIMELINE */}
      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Brand Unification Timeline</Lbl>
        {[
          { date: 'May 2025', event: 'Nicole Behne joins as CMO. Brand unification kickoff.', status: 'complete' },
          { date: 'Jun-Dec 2025', event: 'Stakeholder interviews, customer interviews, brand discovery. Agency engaged.', status: 'complete' },
          { date: 'Jan-Mar 2026', event: 'Website consolidation in progress. Concrete brand retirement. Content strategy development.', status: 'active' },
          { date: 'Apr-Jun 2026', event: 'Unified brand rollout. Content capture season begins. Golf social relaunch.', status: 'upcoming' },
          { date: 'Jul 25, 2026', event: 'CENTENNIAL EVENT — unified brand showcase, 2,000 attendees, documentary premiere.', status: 'milestone' },
          { date: 'Aug-Dec 2026', event: 'Post-centennial momentum. Full unified digital presence. Content system operating.', status: 'upcoming' },
        ].map((item, i) => (
          <div key={i} style={{ display: 'flex', gap: '14px', padding: '8px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: item.status === 'milestone' ? C.orange : item.status === 'active' ? C.accent : item.status === 'complete' ? C.success : C.muted, fontWeight: 600, minWidth: '90px' }}>{item.date}</span>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: item.status === 'milestone' ? C.orange : C.sub, fontWeight: item.status === 'milestone' ? 700 : 400 }}>{item.event}</span>
          </div>
        ))}
      </Card>

      {/* CURRENT SUB-BRAND STATUS */}
      <Lbl>Current Sub-Brand Status</Lbl>
      {COMPANY.subsidiaries.map((s, i) => (
        <div key={i} style={{ display: 'flex', gap: '12px', alignItems: 'center', padding: '10px 14px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', marginBottom: '4px' }}>
          <div style={{ flex: 1 }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{s.name}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginLeft: '8px' }}>{s.sector}</span>
            {'brandNote' in s && (s as any).brandNote && (
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, marginTop: '2px' }}>{(s as any).brandNote}</div>
            )}
          </div>
          <Chip color={s.status === 'Merging' ? C.red : s.name.includes('Duininck') ? C.accent : C.amber}>
            {s.status === 'Merging' ? 'Being Absorbed' : s.status}
          </Chip>
        </div>
      ))}

      <div style={{ marginTop: '20px' }}>
        <Block variant="green">
          <strong>Why This Architecture Works:</strong> Nicole's "Full Truck" insight solves the architecture question. When a Duininck truck pulls up, it should represent everything — not fragment into sub-brands the customer has never heard of. The concrete brand was a vestige of an old acquisition. Golf stays niche because architects don't Google "heavy civil" — they search for golf course builders specifically.
        </Block>
      </div>

      <Block variant="blue">
        <strong>Strategic Recommendations:</strong><br />
        1. Launch the unified brand at the July 25 centennial event — maximum visibility, maximum emotional impact.<br />
        2. Create a simple endorsement system: "Duininck Golf — A Duininck Company" for the niche exception.<br />
        3. Retire all legacy concrete branding by centennial date — clean cut, no lingering.<br />
        4. Develop a truck/equipment wrap standard that visualizes "the full truck" — every capability, one brand.
      </Block>
    </div>
  );
}
