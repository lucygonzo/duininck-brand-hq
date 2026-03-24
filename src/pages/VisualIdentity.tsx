import { useState } from 'react';
import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, DataTable, Divider, ProgressBar, C } from '../components/ui';

const TABS = ['Color System', 'Typography', 'Logos & Lockups', 'Photography', 'Sub-Brands', 'Gaps & Evolution'];
const V = VISUAL_IDENTITY;

export default function VisualIdentityPage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expandedFormat, setExpandedFormat] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader num="03 / Brand" title="Visual Identity" sub="Color system, typography, logos, photography guidelines, and visual standards across all Duininck properties." />

      {/* TL;DR */}
      <Card style={{ borderTop: `3px solid ${C.accent}`, background: C.accentGlow, marginBottom: '16px' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.accent, lineHeight: 1.5 }}>{V.headline}</div>
      </Card>

      {/* Brand Guide Link */}
      <div style={{ marginBottom: '20px' }}>
        <a href={V.brandGuideUrl} target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px', padding: '8px 16px', background: C.accentDim, border: `1px solid ${C.accent}30`, borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.accent }}>Open Brand Guide</span>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>External reference &#8599;</span>
        </a>
      </div>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ===== TAB 1: COLOR SYSTEM ===== */}
      {tab === 'Color System' && (
        <div>
          <Divider label="Primary Brand Palette" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {V.primaryPalette.map((c, i) => (
              <div key={i} onClick={() => navigator.clipboard.writeText(c.hex)} style={{ cursor: 'pointer', background: '#fff', border: `1px solid ${C.border}`, borderRadius: '10px', overflow: 'hidden', boxShadow: '0 1px 4px rgba(0,0,0,0.05)' }}>
                <div style={{ height: '64px', background: c.hex, display: 'flex', alignItems: 'flex-end', padding: '6px 8px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: c.hex === '#FFFFFF' || c.hex === '#F7F6F3' ? C.muted : '#fff', opacity: 0.9 }}>{c.hex}</span>
                </div>
                <div style={{ padding: '8px 10px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{c.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '2px' }}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>

          <DataTable
            headers={['Color', 'HEX', 'RGB', 'CMYK', 'PMS', 'Usage']}
            colWidths={['16%', '12%', '14%', '16%', '14%', '28%']}
            rows={V.primaryPalette.map(c => [
              <span style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <span style={{ width: '12px', height: '12px', borderRadius: '50%', background: c.hex, border: c.hex === '#FFFFFF' ? '1px solid #ddd' : 'none', flexShrink: 0 }} />
                <span style={{ fontWeight: 600 }}>{c.name}</span>
              </span>,
              <span onClick={() => navigator.clipboard.writeText(c.hex)} style={{ cursor: 'pointer', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.accent }}>{c.hex}</span>,
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{c.rgb}</span>,
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{c.cmyk}</span>,
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{c.pms}</span>,
              c.usage,
            ])}
            compact
          />

          <Divider label="Color Usage in Context" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginBottom: '20px' }}>
            {[
              { bg: '#004F71', text: '#FFFFFF', label: 'Teal + White', sample: 'Built to Last' },
              { bg: '#FE5000', text: '#FFFFFF', label: 'Orange + White', sample: 'Apply Now' },
              { bg: '#FFFFFF', text: '#1E293B', label: 'White + Navy', sample: 'Body copy reads clean' },
              { bg: '#F7F6F3', text: '#004F71', label: 'Gray + Teal', sample: 'Section header' },
              { bg: '#1E293B', text: '#FFFFFF', label: 'Navy + White', sample: 'Footer treatment' },
              { bg: '#004F71', text: '#FE5000', label: 'Teal + Orange', sample: 'CTA highlight' },
              { bg: '#FFFFFF', text: '#004F71', label: 'White + Teal', sample: 'Primary heading' },
              { bg: '#F7F6F3', text: '#1E293B', label: 'Gray + Navy', sample: 'Subtle section' },
            ].map((demo, i) => (
              <div key={i} style={{ borderRadius: '8px', overflow: 'hidden', border: `1px solid ${C.border}`, boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
                <div style={{ background: demo.bg, padding: '16px 12px', minHeight: '56px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: demo.text }}>{demo.sample}</span>
                </div>
                <div style={{ padding: '6px 10px', background: '#fff' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{demo.label}</div>
                </div>
              </div>
            ))}
          </div>

          <Divider label="Centennial Campaign Palette" />
          <Card style={{ background: C.orangeGlow, border: `1px solid ${C.orange}30` }}>
            <Lbl style={{ color: C.orange }}>100th Anniversary · July 25, 2026</Lbl>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginTop: '10px' }}>
              {V.centennialPalette.map((c, i) => (
                <div key={i} onClick={() => navigator.clipboard.writeText(c.hex)} style={{ cursor: 'pointer' }}>
                  <div style={{ height: '40px', background: c.hex, borderRadius: '6px', border: c.hex === '#F7F6F3' ? '1px solid #ddd' : 'none' }} />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.text, marginTop: '4px' }}>{c.hex}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted }}>{c.name}</div>
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ===== TAB 2: TYPOGRAPHY ===== */}
      {tab === 'Typography' && (
        <div>
          <Divider label="Proposed Type System" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '20px' }}>
            {V.typography.proposed.map((t, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.accent}` }}>
                <Lbl>{t.name}</Lbl>
                <div style={{
                  fontFamily: t.family === 'Inter' ? "'Inter', sans-serif" : "'JetBrains Mono', monospace",
                  fontSize: t.name === 'Display' ? '28px' : t.name === 'Subheading' ? '18px' : t.name === 'Body' ? '14px' : '11px',
                  fontWeight: t.name === 'Display' ? 800 : t.name === 'Subheading' ? 600 : 400,
                  letterSpacing: t.tracking !== 'Normal' ? t.tracking : undefined,
                  textTransform: t.name === 'Data / Label' ? 'uppercase' as const : undefined,
                  color: C.text, lineHeight: 1.4, marginBottom: '10px',
                }}>{t.sample}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>
                  {t.family} · {t.weight} · Tracking: {t.tracking}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '4px' }}>{t.usage}</div>
              </Card>
            ))}
          </div>

          <Block variant="amber">
            <strong>Current state:</strong> {V.typography.current.primary} on duininckcompanies.com. {V.typography.current.note}
          </Block>

          <Divider label="Competitive Font Landscape" />
          <DataTable headers={['Company', 'Font Stack']} colWidths={['30%', '70%']} rows={V.typography.competitorFonts.map(f => [f.company, f.fonts])} compact />
          <Block variant="blue"><strong>Differentiation note:</strong> {V.typography.differentiation}</Block>
        </div>
      )}

      {/* ===== TAB 3: LOGOS & LOCKUPS ===== */}
      {tab === 'Logos & Lockups' && (
        <div>
          <Divider label="Current Logo Inventory" />
          <DataTable
            headers={['Property', 'Logo Type', 'Format', 'Tagline?', 'Parent Visible?']}
            colWidths={['22%', '22%', '22%', '14%', '20%']}
            rows={V.logoInventory.map(l => [
              <span style={{ fontWeight: 600 }}>{l.property}</span>, l.type,
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{l.format}</span>,
              l.hasTagline ? <Chip color={C.success}>Yes</Chip> : <Chip color={C.muted}>No</Chip>,
              l.parentVisible ? <Chip color={C.success}>Yes</Chip> : <Chip color={C.red}>No</Chip>,
            ])}
          />

          <Divider label="Partnership Lockup Rules" />
          <Block variant="red">
            <strong>Current problems:</strong>
            {V.partnershipLockups.problems.map((p, i) => (
              <div key={i} style={{ display: 'flex', gap: '6px', marginTop: '6px' }}><span style={{ color: C.red, flexShrink: 0 }}>&#9679;</span> {p}</div>
            ))}
          </Block>

          <Lbl style={{ marginTop: '16px' }}>Recommendations</Lbl>
          {V.partnershipLockups.recommendations.map((r, i) => (
            <Card key={i} style={{ marginBottom: '6px', padding: '12px 16px' }}>
              <div style={{ display: 'flex', gap: '8px', alignItems: 'flex-start' }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.accent, fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
                <Body style={{ marginBottom: 0, fontSize: '12px' }}>{r}</Body>
              </div>
            </Card>
          ))}

          <Block variant="amber">
            <strong>Status:</strong> Clear space rules, minimum sizes, and approved color variations are pending the unified brand launch. Source logo files (SVG/EPS) need to come from Nicole.
          </Block>
        </div>
      )}

      {/* ===== TAB 4: PHOTOGRAPHY ===== */}
      {tab === 'Photography' && (
        <div>
          <Divider label="Core Photography Principles" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {V.photography.principles.map((p, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.accent}` }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{p.rule}</div>
                <Body style={{ fontSize: '12px', marginBottom: 0 }}>{p.detail}</Body>
              </Card>
            ))}
          </div>

          <Divider label="Application by Format" />
          <Body style={{ marginBottom: '10px', fontSize: '11px', color: C.muted }}>Click any format to expand the specific photography and visual rules for that deliverable type.</Body>

          {V.photography.applicationGuidelines.map((ag, i) => {
            const isExp = expandedFormat === i;
            return (
              <div key={i} style={{ marginBottom: '4px' }}>
                <Card onClick={() => setExpandedFormat(isExp ? null : i)} style={{ cursor: 'pointer', padding: '12px 16px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: isExp ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{ag.format}</span>
                  </div>
                </Card>
                {isExp && (
                  <div style={{ background: C.accentGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 10px 10px', padding: '12px 16px' }}>
                    <Body style={{ fontSize: '13px', marginBottom: 0 }}>{ag.rule}</Body>
                  </div>
                )}
              </div>
            );
          })}

          <div style={{ marginTop: '16px' }}>
            <Block variant="orange"><strong>Capture timing:</strong> {V.photography.captureTiming}</Block>
          </div>

          <Divider label="Asset Links (Google Drive)" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            {V.photography.assetLinks.map((link, i) => (
              <Card key={i} style={{ padding: '14px', textAlign: 'center' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.accent, marginBottom: '4px' }}>{link.label}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>{link.note}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, marginTop: '6px' }}>{link.path}</div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ===== TAB 5: SUB-BRANDS ===== */}
      {tab === 'Sub-Brands' && (
        <div>
          {V.subBrandPalettes.map((sb, i) => (
            <div key={i}>
              <Divider label={sb.brand} />
              <Card style={{ marginBottom: '16px', borderLeft: `3px solid ${sb.colors[0]?.hex || C.muted}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.text }}>{sb.brand}</div>
                  <Chip color={sb.status.includes('eliminated') || sb.status.includes('Merging') ? C.red : sb.status.includes('Independent') ? C.blue : C.amber}>{sb.status}</Chip>
                </div>
                <div style={{ display: 'flex', gap: '10px', marginBottom: '10px' }}>
                  {sb.colors.map((c, ci) => (
                    <div key={ci} onClick={() => navigator.clipboard.writeText(c.hex)} style={{ cursor: 'pointer' }}>
                      <div style={{ width: '48px', height: '48px', borderRadius: '8px', background: c.hex, border: '1px solid rgba(0,0,0,0.1)' }} />
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.text, marginTop: '4px' }}>{c.hex}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: C.muted }}>{c.name}</div>
                    </div>
                  ))}
                </div>
                <Body style={{ fontSize: '12px', marginBottom: 0 }}>{sb.note}</Body>
              </Card>
            </div>
          ))}

          <Divider label="Cross-Property Visual Audit" />
          <DataTable
            headers={['Property', 'Primary', 'Secondary', 'Heading Font', 'Body Font', 'CMS']}
            colWidths={['20%', '14%', '14%', '16%', '14%', '22%']}
            compact
            rows={V.propertyAudit.map(p => [
              <span style={{ fontWeight: 600, fontSize: '11px' }}>{p.property}</span>,
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.primary, border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }} />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px' }}>{p.primary}</span>
              </span>,
              <span style={{ display: 'flex', alignItems: 'center', gap: '4px' }}>
                {p.secondary !== 'N/A' ? <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: p.secondary, border: '1px solid rgba(0,0,0,0.1)', flexShrink: 0 }} /> : null}
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px' }}>{p.secondary}</span>
              </span>,
              <span style={{ fontSize: '11px' }}>{p.headingFont}</span>,
              <span style={{ fontSize: '11px' }}>{p.bodyFont}</span>,
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px' }}>{p.cms}</span>,
            ])}
          />
        </div>
      )}

      {/* ===== TAB 6: GAPS & EVOLUTION ===== */}
      {tab === 'Gaps & Evolution' && (
        <div>
          <Callout>
            What is missing or needs refinement for a unified Duininck visual brand. Each gap connects to a specific action that should be completed before the centennial launch (July 25, 2026).
          </Callout>

          {V.gaps.map((gap, i) => {
            const borderColor = gap.severity === 'Critical' ? C.red : gap.severity === 'High' ? C.warning : C.muted;
            const chipColor = gap.severity === 'Critical' ? C.red : gap.severity === 'High' ? C.amber : C.muted;
            return (
              <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${borderColor}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{gap.area}</div>
                  <Chip color={chipColor}>{gap.severity}</Chip>
                </div>
                <Body style={{ fontSize: '12px', marginBottom: '8px' }}>{gap.detail}</Body>
                <Block variant="blue"><strong>Action:</strong> {gap.action}</Block>
              </Card>
            );
          })}

          <Divider label="Brand Maturity Comparison" />
          <Card>
            <Body style={{ marginBottom: '12px', fontSize: '12px' }}>How Duininck's visual brand maturity compares to key competitors. Scored on consistency of colors, typography, logo system, tagline visibility, and digital cohesion.</Body>
            {V.brandMaturity.map((bm, i) => {
              const isUs = bm.company === 'Duininck';
              return (
                <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: isUs ? 700 : 400, color: isUs ? C.accent : C.text, width: '140px', flexShrink: 0 }}>{bm.company}</span>
                  <div style={{ flex: 1 }}><ProgressBar pct={bm.score * 10} color={isUs ? C.orange : C.accent} /></div>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: isUs ? C.orange : C.accent, width: '36px', textAlign: 'right' }}>{bm.score}/10</span>
                </div>
              );
            })}
          </Card>

          <div style={{ marginTop: '16px' }}>
            <Block variant="orange">
              <strong>Target:</strong> The centennial event (July 25, 2026) is the unification moment. All visual gaps above should be closed by that date. The palette foundation is strong (teal + orange). The system around it is what's missing.
            </Block>
          </div>
        </div>
      )}
    </div>
  );
}
