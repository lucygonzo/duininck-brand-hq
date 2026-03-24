import { useState } from 'react';
import { COMPANY, VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, Divider, CopyHex, C } from '../components/ui';

const TABS = ['Architecture', 'Duininck Golf', 'Prinsco', 'Hart Ranch', 'Concrete (Legacy)'];

export default function BrandArchitecturePage() {
  const [tab, setTab] = useState(TABS[0]);

  const subPalettes = VISUAL_IDENTITY.subBrandPalettes;
  const sourcedLogos = VISUAL_IDENTITY.sourcedLogos;

  return (
    <div>
      <SectionHeader num="08 / Brand" title="Brand Architecture" sub="How the parent brand and subsidiary brands relate, connect, and express themselves." />

      {/* STRATEGIC FRAMING: House of Brands vs. Branded House */}
      <Card style={{ borderTop: `3px solid ${C.accent}`, marginBottom: '16px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
          <Lbl style={{ color: C.accent }}>Open Strategic Question</Lbl>
          <Chip color={C.success}>Resolved</Chip>
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '8px' }}>House of Brands or Branded House?</div>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
          <div style={{ padding: '10px 14px', background: C.s2, borderRadius: '8px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.muted, marginBottom: '4px' }}>House of Brands (like P&G)</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.muted, lineHeight: 1.5 }}>Each subsidiary has its own independent brand identity. Parent company is invisible to customers. Maximizes individual brand equity but fragments the portfolio story.</div>
          </div>
          <div style={{ padding: '10px 14px', background: C.accentGlow, border: `1px solid ${C.accent}30`, borderRadius: '8px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.accent, marginBottom: '4px' }}>Branded House (like Virgin) &#10003;</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, lineHeight: 1.5 }}>All subsidiaries carry the parent brand name. Maximizes portfolio story and "Full Truck" effect. Requires consistent visual and verbal identity across all entities.</div>
          </div>
        </div>
        <Body style={{ fontSize: '12px', marginBottom: 0 }}>
          <strong>Duininck's confirmed answer: a hybrid.</strong> All construction entities consolidate under the Duininck name (branded house). Golf retains niche positioning with parent endorsement ("A Duininck Company"). Prinsco and Hart Ranch stay fully independent (house of brands for those two). This hybrid maximizes the "Full Truck" effect for construction while preserving brand equity where audiences are fundamentally different.
        </Body>
      </Card>

      {/* SUB-TABS */}
      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ===== ARCHITECTURE TAB ===== */}
      {tab === 'Architecture' && (
        <div>
          {/* DECISION MADE BANNER */}
          <div style={{ background: C.successDim, border: `2px solid ${C.success}`, borderRadius: '10px', padding: '18px 24px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.success, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '4px' }}>Decision Confirmed by CMO</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: C.text }}>Unified Brand + Niche Exception</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, marginTop: '2px' }}>Nicole confirmed: all Duininck-named entities unifying. Concrete brand being eliminated. Golf keeps niche. Prinsco stays independent.</div>
            </div>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.success, background: C.successDim, border: `1px solid ${C.success}`, padding: '4px 10px', borderRadius: '9999px', textTransform: 'uppercase', flexShrink: 0 }}>Confirmed</span>
          </div>

          <Callout>
            <strong>"When a Duininck truck pulls up on a site, we need to represent ALL of it, not just a piece of it."</strong> (Nicole Behne, CMO). This quote IS the architecture decision. One unified Duininck brand for construction, with Golf retaining niche positioning for a fundamentally different audience.
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
                { name: 'Duininck Heavy Civil (Midwest)', note: 'Core, being unified' },
                { name: 'Duininck Heavy Civil (Texas)', note: 'Was managed separately, now unifying' },
                { name: 'Duininck Concrete', note: 'Brand being ELIMINATED, folding in' },
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
                <Body style={{ fontSize: '12px', marginBottom: '6px' }}>Golf retains distinct positioning. Different audience (architects vs. GCs), different website, different content strategy. Currently dark on social, restart planned.</Body>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, fontStyle: 'italic', padding: '6px 8px', background: C.accentGlow, borderRadius: '4px' }}>
                  "Golf still has a bit of a niche because of the architects that come to that site versus general contractors and public works." (Nicole)
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
          <Divider label="Unification Timeline" />
          <Card style={{ marginBottom: '20px' }}>
            {[
              { date: 'May 2025', event: 'Nicole Behne joins as CMO. Brand unification kickoff.', status: 'complete' },
              { date: 'Jun-Dec 2025', event: 'Stakeholder interviews, customer interviews, brand discovery. Agency engaged.', status: 'complete' },
              { date: 'Jan-Mar 2026', event: 'Website consolidation in progress. Concrete brand retirement. Content strategy development.', status: 'active' },
              { date: 'Apr-Jun 2026', event: 'Unified brand rollout. Content capture season begins. Golf social relaunch.', status: 'upcoming' },
              { date: 'Jul 25, 2026', event: 'CENTENNIAL EVENT: unified brand showcase, 2,000 attendees, documentary premiere.', status: 'milestone' },
              { date: 'Aug-Dec 2026', event: 'Post-centennial momentum. Full unified digital presence. Content system operating.', status: 'upcoming' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '14px', padding: '10px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: item.status === 'milestone' ? C.orange : item.status === 'active' ? C.accent : item.status === 'complete' ? C.success : C.muted, fontWeight: 600, minWidth: '100px' }}>{item.date}</span>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: item.status === 'milestone' ? C.orange : C.sub, fontWeight: item.status === 'milestone' ? 700 : 400 }}>{item.event}</span>
              </div>
            ))}
          </Card>

          {/* SUB-BRAND STATUS */}
          <Divider label="Sub-Brand Status" />
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
              <strong>Why This Architecture Works:</strong> Nicole's "Full Truck" insight resolves the architecture question. When a Duininck truck pulls up, it should represent everything, not fragment into sub-brands the customer has never heard of. Concrete was a vestige of an old acquisition. Golf stays niche because architects search for golf course builders specifically, not "heavy civil."
            </Block>
          </div>

          <Block variant="blue">
            <strong>Strategic Recommendations:</strong><br />
            1. Launch the unified brand at the July 25 centennial event. Maximum visibility, maximum emotional impact.<br />
            2. Create a simple endorsement system: "Duininck Golf, A Duininck Company" for the niche exception.<br />
            3. Retire all legacy concrete branding by centennial date. Clean cut, no lingering.<br />
            4. Develop a truck/equipment wrap standard that visualizes "the full truck." Every capability, one brand.
          </Block>
        </div>
      )}

      {/* ===== SUB-BRAND TABS ===== */}
      {['Duininck Golf', 'Prinsco', 'Hart Ranch', 'Concrete (Legacy)'].map(brandTab => {
        if (tab !== brandTab) return null;

        const brandKey = brandTab === 'Concrete (Legacy)' ? 'Duininck Concrete' : brandTab;
        const palette = subPalettes.find(p => p.brand.includes(brandKey));
        const logos = sourcedLogos.filter(l => l.brand.includes(brandKey));
        const sub = COMPANY.subsidiaries.find(s => s.name.includes(brandKey));

        // Define divergence points per brand
        const divergencePoints: Record<string, string[]> = {
          'Duininck Golf': [
            'Different primary audience: golf course architects and owners vs. GCs and public works',
            'Completely different color palette: dark greens and sage vs. Duininck teal and orange',
            'No visual connection to parent brand on any current material',
            'Separate website (duininckgolf.com) with different CMS, fonts, and photography style',
            'Social accounts went dark. No active brand presence for the past year.',
            'Portfolio includes prestige venues (Hazeltine, Erin Hills, TPC) that are undermarketed',
            '"Peace of Mind" positioning language does not appear anywhere in the parent brand',
          ],
          'Prinsco': [
            'Completely independent brand identity. Zero Duininck mention on site.',
            'Product-led brand (pipe specs, SKUs, dealer network) vs. parent service-led brand',
            'Different color palette: Prinsco blue and yellow vs. Duininck teal and orange',
            'Has its own content hub ("The Water Table" podcast) with active publishing',
            'Separate CMS, separate website, separate social accounts, separate marketing',
            'Audience is agricultural/water management buyers, not construction GCs',
            'Revenue estimated at ~$95.7M, potentially the largest entity in the portfolio',
          ],
          'Hart Ranch': [
            'Fully independent brand. Premium positioning (#1 Public Course in SD, Golfweek).',
            'Earth-tone palette (forest green, dark teal, warm tan) with no Duininck colors',
            'Geographic isolation: Rapid City, SD (Black Hills) vs. Willmar, MN headquarters',
            'Real estate development + golf club + campground. Very different business model.',
            'Audience is leisure/residential buyers, not construction or manufacturing',
            'No logo currently sourced. Hart Ranch visual identity needs documentation.',
          ],
          'Duininck Concrete': [
            'Brand is being ELIMINATED. All identity assets will be deprecated.',
            'Legacy acquisition: Central Allied Company acquired in 2004, renamed Duininck Concrete',
            'Color palette (red, light teal, gold) has zero overlap with parent brand',
            'Multiple Minnesota locations still carry this branding on signage and vehicles',
            'Website/pages being retired as part of unification',
            'Transition timeline: fully absorbed by centennial date (July 25, 2026)',
          ],
        };

        const points = divergencePoints[brandKey] || [];

        return (
          <div key={brandTab}>
            {/* Brand header */}
            <Card style={{ marginTop: '16px', borderTop: `3px solid ${palette?.colors[0]?.hex || C.accent}`, marginBottom: '16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 800, color: C.text }}>{brandTab}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginTop: '2px' }}>{sub?.sector} · {sub?.hq}</div>
                </div>
                <Chip color={brandKey === 'Duininck Concrete' ? C.red : brandKey === 'Duininck Golf' ? C.amber : C.blue}>
                  {palette?.status || sub?.status || 'Unknown'}
                </Chip>
              </div>
              {sub && <Body style={{ marginTop: '8px', fontSize: '13px' }}>{sub.description}</Body>}
              {palette && (
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, fontStyle: 'italic', marginTop: '6px' }}>{palette.note}</div>
              )}
            </Card>

            {/* Brand Colors */}
            {palette && (
              <>
                <Lbl>Brand Colors</Lbl>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '16px' }}>
                  {palette.colors.map((clr, i) => (
                    <div key={i} style={{ flex: 1 }}>
                      <div
                        onClick={() => navigator.clipboard.writeText(clr.hex)}
                        style={{ height: '60px', background: clr.hex, borderRadius: '8px', cursor: 'pointer', border: '1px solid rgba(0,0,0,0.08)' }}
                      />
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.text, marginTop: '6px' }}>{clr.hex}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted }}>{clr.name}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost }}>{clr.role}</div>
                    </div>
                  ))}
                </div>
              </>
            )}

            {/* Sourced Logos */}
            <Lbl>Sourced Logo Files</Lbl>
            {logos.length > 0 ? (
              <div style={{ marginBottom: '16px' }}>
                {logos.map((logo, i) => (
                  <Card key={i} style={{ marginBottom: '4px', padding: '10px 14px', borderLeft: `3px solid ${logo.status === 'missing' ? C.warning : C.success}` }}>
                    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                      <div>
                        <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{logo.file || 'Not sourced'}</span>
                        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginLeft: '8px' }}>{logo.format}</span>
                      </div>
                      <div style={{ display: 'flex', gap: '6px' }}>
                        <Chip color={logo.status === 'sourced' ? C.success : C.warning}>{logo.status}</Chip>
                        {logo.url && (
                          <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.accent}30`, borderRadius: '6px' }}>Download &#8599;</a>
                        )}
                      </div>
                    </div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted, marginTop: '3px' }}>{logo.note}</div>
                  </Card>
                ))}
              </div>
            ) : (
              <Block variant="amber">No logo files sourced yet for {brandTab}. Flag this for Nicole's asset request.</Block>
            )}

            {/* Divergence Points */}
            <Lbl>Where {brandTab} Diverges from Parent Brand</Lbl>
            <Card style={{ marginBottom: '16px' }}>
              {points.map((point, i) => (
                <div key={i} style={{ display: 'flex', gap: '8px', padding: '8px 0', borderBottom: i < points.length - 1 ? `1px solid ${C.borderSoft}` : 'none' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: brandKey === 'Duininck Concrete' ? C.red : C.amber, fontWeight: 700, flexShrink: 0, minWidth: '20px' }}>{String(i + 1).padStart(2, '0')}</span>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.5 }}>{point}</span>
                </div>
              ))}
            </Card>

            {/* Architecture relationship note */}
            <Block variant={brandKey === 'Duininck Concrete' ? 'red' : brandKey === 'Duininck Golf' ? 'amber' : 'blue'}>
              {brandKey === 'Duininck Golf' && (
                <><strong>Architecture role:</strong> Niche exception within the branded house. Retains separate visual identity and website but should adopt "A Duininck Company" endorsement badge. The parent company depth (100 years, own aggregates, heavy equipment fleet) is an untold advantage no pure golf builder can match.</>
              )}
              {brandKey === 'Prinsco' && (
                <><strong>Architecture role:</strong> Fully independent brand. The Duininck family connection adds trust for dealer relationships and long-term contracts, but the product brand leads. No endorsement badge needed or recommended. Prinsco's "Water Management Solutions" positioning is clear and should stay undiluted.</>
              )}
              {brandKey === 'Hart Ranch' && (
                <><strong>Architecture role:</strong> Fully independent brand serving a premium leisure and residential market. The Duininck connection may surface in investor or partner conversations but has no consumer-facing value. Hart Ranch's identity should stand entirely on its own merit and geographic positioning (Black Hills, SD).</>
              )}
              {brandKey === 'Duininck Concrete' && (
                <><strong>Architecture role:</strong> BEING ELIMINATED. This brand was a legacy of the 2004 Central Allied Company acquisition. All concrete/materials operations are folding under the unified Duininck brand. Signage, vehicles, and digital presence should be transitioned by the centennial date. No new materials should carry this brand.</>
              )}
            </Block>
          </div>
        );
      })}
    </div>
  );
}
