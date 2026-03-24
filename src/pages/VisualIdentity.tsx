import { useState } from 'react';
import { VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, DataTable, Divider, ProgressBar, C } from '../components/ui';

const TABS = ['Color System', 'Typography', 'Logos & Assets', 'Photography', 'Social Standards', 'Lockups', 'Sub-Brands', 'Gaps'];
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
          {/* Hero Swatch: Teal + Orange side by side */}
          <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '0', marginBottom: '20px', borderRadius: '12px', overflow: 'hidden', boxShadow: '0 2px 8px rgba(0,0,0,0.08)' }}>
            <div style={{ background: '#004F71', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 24px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '32px', fontWeight: 800, color: '#fff', letterSpacing: '-0.02em' }}>Duininck Teal</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText('#004F71')}>#004F71 · Click to copy</div>
            </div>
            <div style={{ background: '#FE5000', height: '160px', display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '20px 24px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 800, color: '#fff' }}>Orange</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: 'rgba(255,255,255,0.7)', marginTop: '4px', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText('#FE5000')}>#FE5000 · Click to copy</div>
            </div>
          </div>

          {/* Supporting Colors: smaller, secondary row */}
          <Divider label="Supporting Palette" />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '10px', marginBottom: '16px' }}>
            {V.primaryPalette.slice(2).map((c, i) => (
              <div key={i} onClick={() => navigator.clipboard.writeText(c.hex)} style={{ cursor: 'pointer', background: '#fff', border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
                <div style={{ height: '48px', background: c.hex, display: 'flex', alignItems: 'flex-end', padding: '6px 8px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: c.hex === '#FFFFFF' || c.hex === '#F7F6F3' ? C.muted : '#fff' }}>{c.hex}</span>
                </div>
                <div style={{ padding: '8px 10px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{c.name}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>{c.role}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Color specs table */}
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

          {/* Surfaces Palette: compact single strip */}
          <Divider label="Surfaces" />
          <Card style={{ padding: '12px 16px', marginBottom: '16px' }}>
            <div style={{ display: 'flex', gap: '0', marginBottom: '8px', borderRadius: '6px', overflow: 'hidden', height: '32px' }}>
              {V.surfacesPalette.map((s, i) => (
                <div key={i} onClick={() => navigator.clipboard.writeText(s.hex)} style={{ flex: 1, background: s.hex.length > 7 ? `#${s.hex.slice(1,7)}` : s.hex, cursor: 'pointer', opacity: s.hex.length > 7 ? parseInt(s.hex.slice(7), 16) / 255 : 1, border: '1px solid rgba(0,0,0,0.04)', position: 'relative' }} title={`${s.name}: ${s.hex}`} />
              ))}
            </div>
            <div style={{ display: 'flex', justifyContent: 'space-between' }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>White</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>Tints and state surfaces</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>Error</span>
            </div>
          </Card>

          {/* Audience Color Emphasis with swatches */}
          <Divider label="Color Emphasis by Audience" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '10px' }}>The palette stays the same. The lead color shifts by audience.</Body>
          {(() => {
            const audienceSwatches: Record<string, string[]> = {
              'GCs & Public Works': ['#004F71', '#1E293B', '#F7F6F3', '#FE5000'],
              'Prospective Employees': ['#FE5000', '#004F71', '#FFFFFF', '#1E293B'],
              'Golf Architects': ['#16251C', '#83B348', '#004F71', '#FFFFFF'],
              'Current Employees': ['#004F71', '#FE5000', '#D4880B', '#F7F6F3'],
              'Communities': ['#004F71', '#F7F6F3', '#1E293B', '#FFFFFF'],
            };
            return V.audienceColorNotes.map((a, i) => (
              <Card key={i} style={{ marginBottom: '6px', padding: '12px 16px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent }}>{a.audience}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '3px' }}>{a.emphasis}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '3px', flexShrink: 0, marginLeft: '12px' }}>
                    {(audienceSwatches[a.audience] || ['#004F71']).map((hex, j) => (
                      <div key={j} style={{ width: j === 0 ? '32px' : '20px', height: '32px', borderRadius: '4px', background: hex, border: hex === '#FFFFFF' || hex === '#F7F6F3' ? '1px solid #ddd' : '1px solid rgba(0,0,0,0.06)', opacity: j === 0 ? 1 : 0.7 + (0.1 * (3 - j)) }} title={hex} />
                    ))}
                  </div>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted, marginTop: '4px', fontStyle: 'italic' }}>{a.rationale}</div>
              </Card>
            ));
          })()}

          {/* Action Color Concept */}
          <Divider label="Action Color: The Orange Signal" />
          <Card style={{ borderLeft: `4px solid ${C.orange}`, marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.orange, marginBottom: '6px' }}>Duininck Orange as the "do something here" signal</div>
            <Body style={{ fontSize: '12px', marginBottom: '10px' }}>
              Some of the strongest brands have a single color that permeates every touchpoint where action happens. An HVAC company paints its handles red so every homeowner recognizes the brand at a glance. For Duininck, orange should function the same way. Orange appears on buttons ("Apply Now"), on centennial materials, on recruiting ads, on CTAs, on hard hat stickers. Wherever the brand asks someone to act, orange shows up. Teal is the authority. Orange is the invitation.
            </Body>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              {[
                { context: 'Website CTA button', example: '"Apply Now" in #FE5000 on teal page' },
                { context: 'Recruiting post', example: 'Orange headline stops the scroll on Indeed/Facebook' },
                { context: 'Centennial badge', example: '100-year mark in orange on every touchpoint' },
              ].map((ex, i) => (
                <div key={i} style={{ padding: '8px 10px', background: C.orangeGlow, borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.orange, textTransform: 'uppercase', marginBottom: '3px' }}>{ex.context}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{ex.example}</div>
                </div>
              ))}
            </div>
            <Chip color={C.amber}>Open Decision</Chip>
          </Card>

          {/* Competitive Color Landscape */}
          <Divider label="Competitive Color Landscape" />
          <Card style={{ marginBottom: '16px' }}>
            <Body style={{ fontSize: '12px', marginBottom: '12px' }}>
              Understanding which colors competitors own in the MN heavy civil market reveals where Duininck can carve visual white space. Teal is currently unclaimed territory.
            </Body>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '10px' }}>
              {[
                { company: 'Ames Construction', palette: ['#1C3454', '#C8A64C', '#FFFFFF', '#333333'], note: 'Corporate blue + gold. Common, unremarkable.' },
                { company: 'Knife River', palette: ['#CC0000', '#222222', '#FFFFFF', '#666666'], note: 'Red + black. High-energy. Stands out on equipment.' },
                { company: 'C.S. McCrossan', palette: ['#1A3A6C', '#FFFFFF', '#E8E8E8', '#333333'], note: 'Conservative blue + white. Institutional.' },
                { company: 'Aggregate Industries', palette: ['#4A7C3F', '#777777', '#FFFFFF', '#333333'], note: 'Green + gray. Environmental positioning.' },
                { company: 'Landscapes Unlimited', palette: ['#1B5E3B', '#FFFFFF', '#333333', '#8B7D3C'], note: 'Forest green + white. Golf standard.' },
                { company: 'Wadsworth Golf', palette: ['#1C2D5C', '#C03030', '#FFFFFF', '#333333'], note: 'Navy + red + white. Patriotic, traditional.' },
              ].map((comp, i) => (
                <div key={i} style={{ padding: '10px 12px', background: C.s2, borderRadius: '8px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: C.text }}>{comp.company}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '0', borderRadius: '4px', overflow: 'hidden', height: '28px', marginBottom: '6px' }}>
                    {comp.palette.map((hex, j) => (
                      <div key={j} style={{ flex: j === 0 ? 2 : 1, background: hex, border: hex === '#FFFFFF' || hex === '#E8E8E8' ? '1px solid #ddd' : 'none' }} />
                    ))}
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.ghost }}>{comp.note}</div>
                </div>
              ))}
            </div>
            <div style={{ marginTop: '12px', padding: '10px 14px', background: C.accentGlow, borderRadius: '8px', border: `1px solid ${C.accent}20` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.accent, marginBottom: '4px' }}>Recommendation: Duininck Teal owns uncontested space</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>No MN heavy civil competitor uses teal. Blues are everywhere (Ames, McCrossan, Wadsworth). Greens belong to golf and environmental brands. Red is Knife River's territory. Teal (#004F71) sits between blue and green, signaling both professional authority and environmental consciousness. This is white space worth defending.</div>
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

      {/* ===== TAB 3: LOGOS & ASSETS ===== */}
      {tab === 'Logos & Assets' && (
        <div>
          {/* Grouped-style logo preview grid by brand */}
          {(() => {
            const brandGroups = [
              {
                brand: 'Duininck Companies (Parent)',
                desc: 'Primary corporate identity for the portfolio holding company',
                logos: V.sourcedLogos.filter(l => l.brand === 'Duininck Companies'),
                bgColors: ['#FFFFFF', '#004F71', '#1E293B'],
              },
              {
                brand: 'Duininck Inc. (Construction)',
                desc: 'Heavy civil construction, materials, and paving operations',
                logos: V.sourcedLogos.filter(l => l.brand === 'Duininck Inc.'),
                bgColors: ['#FFFFFF', '#004F71'],
              },
              {
                brand: 'Duininck Golf',
                desc: 'Golf course construction, renovation, and restoration',
                logos: V.sourcedLogos.filter(l => l.brand === 'Duininck Golf'),
                bgColors: ['#1E293B', '#FFFFFF'],
              },
              {
                brand: 'Prinsco',
                desc: 'Water management solutions and drainage pipe manufacturing',
                logos: V.sourcedLogos.filter(l => l.brand === 'Prinsco'),
                bgColors: ['#FFFFFF'],
              },
            ];
            const missingBrands = V.sourcedLogos.filter(l => l.status === 'missing');

            return (
              <>
                {brandGroups.map((group, gi) => (
                  <div key={gi} style={{ marginBottom: '28px' }}>
                    <Divider label={group.brand} />
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.muted, marginBottom: '12px' }}>{group.desc}</div>
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {group.logos.map((logo, li) => {
                        const isWhiteLogo = logo.file.toLowerCase().includes('white');
                        const isBlackLogo = logo.file.toLowerCase().includes('black') || logo.file.toLowerCase().includes('Black');
                        const bg = isWhiteLogo ? '#1E293B' : isBlackLogo ? '#F0EEEB' : '#FFFFFF';
                        return (
                          <div key={li} style={{ flex: '1 1 180px', minWidth: '160px', maxWidth: '240px' }}>
                            <div style={{ background: bg, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', height: '80px', border: `1px solid ${C.border}` }}>
                              {logo.url ? (
                                <img src={logo.url} alt={`${logo.brand} logo`} style={{ maxWidth: '100%', maxHeight: '100%', objectFit: 'contain' }} onError={(e) => { (e.target as HTMLImageElement).style.display = 'none'; }} />
                              ) : (
                                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.ghost }}>Not available</span>
                              )}
                            </div>
                            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '5px', padding: '0 2px' }}>
                              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.sub }}>{logo.format}</span>
                              <div style={{ display: 'flex', gap: '8px' }}>
                                {logo.url && logo.format.includes('SVG') && (
                                  <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textDecoration: 'none', fontWeight: 600 }}>SVG</a>
                                )}
                                {logo.url && logo.format.includes('PNG') && (
                                  <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textDecoration: 'none', fontWeight: 600 }}>PNG</a>
                                )}
                                {logo.url && !logo.format.includes('SVG') && !logo.format.includes('PNG') && (
                                  <a href={logo.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, textDecoration: 'none', fontWeight: 600 }}>Download</a>
                                )}
                              </div>
                            </div>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '2px', padding: '0 2px' }}>{logo.note}</div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}

                {/* Missing logos */}
                {missingBrands.length > 0 && (
                  <div style={{ marginBottom: '20px' }}>
                    <Divider label="Missing Assets" />
                    <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
                      {missingBrands.map((logo, i) => (
                        <div key={i} style={{ flex: '1 1 180px', minWidth: '160px', maxWidth: '240px' }}>
                          <div style={{ background: C.s2, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '20px', height: '80px', border: `2px dashed ${C.warning}` }}>
                            <span style={{ fontSize: '20px' }}>⚠️</span>
                          </div>
                          <div style={{ marginTop: '5px', padding: '0 2px' }}>
                            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: C.warning }}>{logo.brand}</span>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '2px' }}>{logo.note}</div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </>
            );
          })()}

          <Divider label="Font Sources" />
          {V.fontSources.map((f, i) => (
            <Card key={i} style={{ marginBottom: '6px', padding: '12px 16px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{f.font}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{f.license}</div>
                </div>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                  <Chip color={f.status === 'proposed' ? C.accent : C.amber}>{f.status}</Chip>
                  <a href={f.url} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.accent}30`, borderRadius: '6px' }}>Google Fonts &#8599;</a>
                </div>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted, marginTop: '4px' }}>{f.note}</div>
            </Card>
          ))}

          <Divider label="Logo Inventory (All Properties)" />
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

          <Block variant="amber">
            <strong>Discussion Point: Asset files.</strong> We pulled every logo available from the live websites. To finalize the visual system, we also need source vector files (AI/EPS), the Hart Ranch logo, approved color variations (grayscale, single-color, reversed), and any existing brand guide PDF. A shared Drive folder would be the easiest handoff.
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

      {/* ===== TAB 5: SOCIAL STANDARDS ===== */}
      {tab === 'Social Standards' && (
        <div>
          <Divider label="Platform Specifications" />
          {V.socialStandards.platforms.map((p, i) => (
            <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>{p.platform}</div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <Lbl>Profile Picture</Lbl>
                  <Body style={{ fontSize: '11px', marginBottom: '6px' }}>{p.profilePic}</Body>
                </div>
                <div>
                  <Lbl>Cover / Banner</Lbl>
                  <Body style={{ fontSize: '11px', marginBottom: '6px' }}>{p.coverImage}</Body>
                </div>
              </div>
              <Lbl>Post Dimensions</Lbl>
              <Body style={{ fontSize: '11px', marginBottom: '6px' }}>{p.postDimensions}</Body>
              <div style={{ padding: '6px 10px', background: C.accentGlow, borderRadius: '4px' }}>
                <Lbl style={{ marginBottom: '2px' }}>Color Emphasis</Lbl>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>{p.colorEmphasis}</div>
              </div>
            </Card>
          ))}

          <Divider label="Content Type Templates" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '10px' }}>Visual structure and color rules for each content format. These templates ensure consistency whether Nicole, the designer, or the admin creates the post.</Body>
          {V.socialStandards.contentTemplates.map((ct, i) => (
            <Card key={i} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{ct.type}</div>
                <Chip color={C.accent}>{ct.slides}</Chip>
              </div>
              <Lbl>Structure</Lbl>
              <Body style={{ fontSize: '11px', marginBottom: '6px' }}>{ct.structure}</Body>
              <div style={{ padding: '6px 10px', background: C.accentGlow, borderRadius: '4px' }}>
                <Lbl style={{ marginBottom: '2px' }}>Color Treatment</Lbl>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>{ct.colors}</div>
              </div>
            </Card>
          ))}
        </div>
      )}

      {/* ===== TAB 6: LOCKUPS ===== */}
      {tab === 'Lockups' && (
        <div>
          <Callout>
            Partnership lockups define how sub-brands visually connect to the Duininck parent brand. Today, no endorsement system exists. These mockups represent the proposed system.
          </Callout>

          <Divider label="Lockup Arrangements" />
          {V.lockupMockups.map((lm, i) => (
            <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{lm.name}</div>
              <Body style={{ fontSize: '12px', marginBottom: '8px' }}>{lm.description}</Body>
              <div style={{ background: C.s2, borderRadius: '8px', padding: '16px 20px', marginBottom: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '13px', color: C.accent, textAlign: 'center', whiteSpace: 'pre-line', letterSpacing: '0.02em' }}>
                {lm.mockup}
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <Lbl>Usage</Lbl>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{lm.usage}</div>
                </div>
                <div>
                  <Lbl>Clear Space</Lbl>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{lm.clearSpace}</div>
                </div>
              </div>
            </Card>
          ))}

          <Divider label="Usage Rules" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {V.lockupRules.filter(r => r.rule === 'Do').map((r, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.success}`, padding: '12px 16px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.success, fontWeight: 700, flexShrink: 0 }}>&#10003;</span>
                  <Body style={{ fontSize: '12px', marginBottom: 0 }}>{r.detail}</Body>
                </div>
              </Card>
            ))}
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {V.lockupRules.filter(r => r.rule === "Don't").map((r, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.red}`, padding: '12px 16px' }}>
                <div style={{ display: 'flex', gap: '6px', alignItems: 'flex-start' }}>
                  <span style={{ color: C.red, fontWeight: 700, flexShrink: 0 }}>&#10007;</span>
                  <Body style={{ fontSize: '12px', marginBottom: 0 }}>{r.detail}</Body>
                </div>
              </Card>
            ))}
          </div>

          <div style={{ marginTop: '16px' }}>
            <Block variant="amber">
              <strong>Discussion Point:</strong> These lockup arrangements are proposed concepts. The next step is producing the actual "A Duininck Company" badge in SVG format with the approved teal (#004F71). This could be handled by the existing agency or designer.
            </Block>
          </div>

          {/* Sponsorship Phrases */}
          <Divider label="Sponsorship & Co-Branding Phrase" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '10px' }}>When Duininck sponsors community events, partners with organizations, or co-brands with suppliers, a consistent phrase anchors the relationship. These options are rooted in the brand thesis (stewardship, craft, community) and the "Built to Last" anchor.</Body>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
            {[
              { phrase: 'Built by Duininck', note: 'Direct. Ties sponsorship to the core capability. Best for construction-adjacent sponsorships.', recommended: true },
              { phrase: 'A Duininck Partnership', note: 'Collaborative tone. Positions Duininck as an equal partner, not a benefactor. Good for supplier and vendor co-branding.' },
              { phrase: 'Supported by Duininck Companies', note: 'Formal and traditional. Works for community events, charitable sponsorships, and nonprofit partnerships.' },
              { phrase: 'Powered by Duininck', note: 'Energetic. Implies capability and infrastructure. Best for technology partnerships or equipment-related branding.' },
              { phrase: 'Growing Together with Duininck', note: 'Echoes the "People. Values. Growth." tagline. Community-facing. Warm. Good for local sponsorships in Willmar/Prinsburg.' },
            ].map((opt, i) => (
              <Card key={i} style={{ padding: '12px 16px', borderLeft: `3px solid ${opt.recommended ? C.success : C.border}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: opt.recommended ? C.success : C.text }}>"{opt.phrase}"</div>
                  {opt.recommended && <Chip color={C.success}>Recommended</Chip>}
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{opt.note}</div>
              </Card>
            ))}
          </div>
          <Block variant="amber">
            <strong>Open decision:</strong> The sponsorship phrase should be selected and formalized before the centennial event. July 25 will involve community partners, vendor relationships, and media coverage that all benefit from consistent co-branding language.
          </Block>
        </div>
      )}

      {/* ===== TAB 7: SUB-BRANDS ===== */}
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

      {/* ===== TAB 8: GAPS ===== */}
      {tab === 'Gaps' && (
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
