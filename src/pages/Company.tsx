import { useState } from 'react';
import { COMPANY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, Divider, C } from '../components/ui';

// Map milestones to generation spans for the two-sided timeline
const GEN_SPANS = [
  { gen: 'Gen 1', label: 'Henry, Amos & Wilbur', start: 1919, end: 1954, color: C.accent },
  { gen: 'Gen 2', label: 'Curt, Willis, Norm, Harris, Lee & Larry', start: 1955, end: 1987, color: C.blue },
  { gen: 'Gen 3', label: 'Jason, Chris, Kyle, Jamie, Jeremy, Judd, Ryan & Trevor', start: 1988, end: 2017, color: C.amber },
  { gen: 'Gen 4', label: 'Sam Duininck & family', start: 2018, end: 2026, color: C.orange },
];

function getGenForYear(year: number) {
  return GEN_SPANS.find(g => year >= g.start && year <= g.end);
}

// Sub-brand accent colors based on actual brand usage
const SUB_COLORS: Record<string, string> = {
  'Prinsco': '#0072CE',
  'Duininck Heavy Civil (Midwest)': C.accent,
  'Duininck Heavy Civil (Texas)': C.accent,
  'Duininck Concrete (being absorbed)': '#8B8B8B',
  'Duininck Golf': '#2E7D4F',
  'Hart Ranch Golf Club': '#5A3E2B',
  'Hart Ranch / Duininck Development': '#5A3E2B',
};

type SubTab = 'overview' | 'detail';

/** Toggleable editorial annotation that lives inside its parent card */
function EditorialNote({ preview, detail, variant = 'warning' }: { preview: string; detail: string; variant?: 'warning' | 'info' }) {
  const [open, setOpen] = useState(false);
  const bg = variant === 'warning' ? C.warningDim : C.accentGlow;
  const color = variant === 'warning' ? C.warning : C.accent;
  const icon = variant === 'warning' ? '⚠' : 'ℹ';

  return (
    <div style={{ marginTop: '10px' }}>
      <div
        onClick={() => setOpen(!open)}
        style={{ display: 'flex', gap: '6px', alignItems: 'flex-start', padding: '8px 10px', background: bg, borderRadius: open ? '6px 6px 0 0' : '6px', cursor: 'pointer', transition: 'border-radius 0.15s' }}
      >
        <span style={{ fontSize: '11px', flexShrink: 0, lineHeight: 1.3 }}>{icon}</span>
        <div style={{ flex: 1 }}>
          <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color, lineHeight: 1.4 }}>{preview}</span>
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, flexShrink: 0, transform: open ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
      </div>
      {open && (
        <div style={{ padding: '8px 10px 10px 28px', background: bg, borderRadius: '0 0 6px 6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: variant === 'warning' ? C.sub : C.accent, lineHeight: 1.6 }}>
          {detail}
        </div>
      )}
    </div>
  );
}

export default function CompanyPage({ onNavigate }: { onNavigate?: (tabId: string) => void }) {
  const [timelineRef, setTimelineRef] = useState<HTMLDivElement | null>(null);
  const [portfolioTab, setPortfolioTab] = useState<SubTab>('overview');
  const [expandedSub, setExpandedSub] = useState<number | null>(null);

  const scrollToTimeline = () => {
    if (timelineRef) timelineRef.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div>
      <SectionHeader num="01 / Foundation" title="Company Profile" sub="The founding story, mission, values, family legacy, and portfolio structure behind Duininck Companies." />

      <Callout>
        A century of building what endures. Duininck Companies is a generational commitment to stewardship, service, and growth, expressed through six operating companies across four industries.
        <EditorialNote
          preview={'"Building things that endure" uses a vague noun. Duininck does not use "things" in their own materials.'}
          detail={'Stronger alternatives: "Building roads, water systems, golf courses, and communities that endure" or simply "Building what endures." Specificity reinforces portfolio breadth. Vagueness undermines it. Check whether Nicole has a preferred version from her messaging framework.'}
        />
      </Callout>

      {/* MISSION + VISION */}
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '14px', marginBottom: '20px' }}>
        <Card>
          <Lbl>Mission</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.mission}</Body>
          <EditorialNote
            preview={'This mission statement reads as vague. "Energized to build for the future" could belong to any company.'}
            detail={'Discussion Point: How would an employee finish the sentence: "Duininck builds for the future by _____"? The wellbeing framework, the centennial, and the family legacy all give this weight. Worth pressure-testing against stakeholder interview findings.'}
          />
        </Card>
        <Card>
          <Lbl>Vision</Lbl>
          <Body style={{ marginBottom: 0 }}>{COMPANY.vision}</Body>
          <EditorialNote
            variant="info"
            preview={'Operational context: "Treating people like neighbors" shows up in how Duininck delivers work.'}
            detail={'The wellbeing framework (Career, Family, Finances, Health, Community, Spiritual) operationalizes this vision. Glassdoor reviewers confirm it: "Owners are great people that really care for their employees." The open question: does this extend to subcontractors, partners, and communities with the same consistency?'}
          />
        </Card>
      </div>

      {/* CORE THESIS + FOUNDING STORY */}
      <Card style={{ marginBottom: '20px' }}>
        <Lbl>Core Thesis</Lbl>
        <Body style={{ fontStyle: 'italic' }}>{COMPANY.thesis}</Body>
        <div style={{ height: '1px', background: C.border, margin: '12px 0' }} />
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Lbl style={{ marginBottom: 0 }}>Founding Story</Lbl>
          <button onClick={scrollToTimeline} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, background: C.accentDim, border: `1px solid ${C.accent}30`, padding: '3px 10px', borderRadius: '12px', cursor: 'pointer', textDecoration: 'none' }}>Jump to Timeline &#8595;</button>
        </div>
        <Body style={{ marginTop: '6px' }}>{COMPANY.foundingStory.summary}</Body>
      </Card>

      {/* TWO-SIDED GENERATIONAL TIMELINE */}
      <div ref={setTimelineRef}>
        <Divider label="Generational Timeline" />
      </div>

      <div style={{ position: 'relative', marginBottom: '24px' }}>
        <div style={{ display: 'grid', gridTemplateColumns: '220px 24px 1fr', gap: '0' }}>
          {/* LEFT: Generations */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            {GEN_SPANS.map((g, i) => {
              const milestonesInSpan = COMPANY.milestones.filter(m => {
                const yr = parseInt(m.year);
                return yr >= g.start && yr <= g.end;
              });
              return (
                <div key={i} style={{ background: `${g.color}10`, border: `1px solid ${g.color}30`, borderRadius: '10px', padding: '14px 16px', flex: milestonesInSpan.length || 1 }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: g.color, fontWeight: 700, marginBottom: '3px' }}>{g.gen}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{g.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '6px' }}>{g.start} {g.end < 2026 ? `to ${g.end}` : 'to present'}</div>
                </div>
              );
            })}
          </div>

          {/* CENTER: vertical line with dots */}
          <div style={{ display: 'flex', justifyContent: 'center', position: 'relative' }}>
            <div style={{ background: C.border, width: '2px', height: '100%' }} />
          </div>

          {/* RIGHT: Milestones */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2px' }}>
            {COMPANY.milestones.map((m, i) => {
              const yr = parseInt(m.year);
              const gen = getGenForYear(yr);
              const isCentennial = m.year === '2026';
              return (
                <div key={i} style={{
                  display: 'flex', gap: '12px', alignItems: 'flex-start',
                  padding: '10px 14px',
                  background: isCentennial ? C.orangeGlow : 'transparent',
                  borderRadius: '8px',
                  borderLeft: `3px solid ${isCentennial ? C.orange : gen?.color || C.muted}`,
                }}>
                  <span style={{
                    fontFamily: "'JetBrains Mono', monospace",
                    fontSize: '13px',
                    color: isCentennial ? C.orange : gen?.color || C.muted,
                    fontWeight: 700,
                    minWidth: '44px',
                    flexShrink: 0,
                  }}>{m.year}</span>
                  <span style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: isCentennial ? C.orange : C.sub,
                    fontWeight: isCentennial ? 700 : 400,
                    lineHeight: 1.5,
                  }}>{m.event}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* CORE VALUES */}
      <Divider label="Core Values" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {COMPANY.values.map((v, i) => (
          <Card key={i}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '6px' }}>{v.name}</div>
            <Body style={{ marginBottom: 0, fontSize: '11px' }}>{v.description}</Body>
          </Card>
        ))}
      </div>

      {/* ONE-LINERS */}
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

      {/* PORTFOLIO COMPANIES */}
      <Divider label="Portfolio Companies" />

      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '12px' }}>
        <Body style={{ marginBottom: 0, fontSize: '12px', color: C.muted }}>Six operating companies across water management, construction, golf, and real estate.</Body>
        {onNavigate && (
          <button onClick={() => onNavigate('architecture')} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, background: C.accentDim, border: `1px solid ${C.accent}30`, padding: '4px 12px', borderRadius: '12px', cursor: 'pointer' }}>
            View Brand Architecture &#8599;
          </button>
        )}
      </div>

      {/* Sub-tabs for overview vs detail */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '16px' }}>
        {[{ key: 'overview' as SubTab, label: 'Overview' }, { key: 'detail' as SubTab, label: 'Sub-Brand Detail' }].map(t => (
          <button key={t.key} onClick={() => setPortfolioTab(t.key)} style={{
            fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.1em',
            padding: '6px 14px', borderRadius: '6px 6px 0 0', cursor: 'pointer', border: 'none',
            background: portfolioTab === t.key ? C.accentDim : 'transparent',
            color: portfolioTab === t.key ? C.accent : C.muted,
            fontWeight: portfolioTab === t.key ? 600 : 400,
            borderBottom: `2px solid ${portfolioTab === t.key ? C.accent : 'transparent'}`,
          }}>{t.label}</button>
        ))}
      </div>

      {portfolioTab === 'overview' && (
        <>
          {/* Revenue breakdown summary */}
          <Card style={{ marginBottom: '14px', background: C.accentGlow }}>
            <Lbl>Revenue & Scale Summary</Lbl>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px' }}>
              {[
                { label: 'Prinsco (Water Mgmt)', value: '~$95.7M est.', note: 'ZoomInfo/D&B estimate' },
                { label: 'Heavy Civil (MN/SD/TX)', value: 'Private', note: 'Not disclosed (family-owned)' },
                { label: 'Golf Division', value: 'Private', note: 'Not disclosed (family-owned)' },
                { label: 'Real Estate/Dev', value: 'Private', note: 'Not disclosed (family-owned)' },
              ].map((r, i) => (
                <div key={i}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.accent }}>{r.value}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{r.label}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '9px', color: C.ghost, marginTop: '2px' }}>{r.note}</div>
                </div>
              ))}
            </div>
          </Card>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {COMPANY.subsidiaries.map((s, i) => {
              const subColor = SUB_COLORS[s.name] || C.accent;
              return (
                <Card key={i} style={{ borderLeft: `3px solid ${subColor}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{s.name}</div>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: subColor, background: `${subColor}14`, padding: '2px 6px', borderRadius: '9999px', textTransform: 'uppercase' }}>{s.status}</span>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginBottom: '6px' }}>{s.sector} · {s.hq}</div>
                  <Body style={{ marginBottom: 0, fontSize: '12px' }}>{s.description}</Body>
                </Card>
              );
            })}
          </div>
        </>
      )}

      {portfolioTab === 'detail' && (
        <div style={{ marginBottom: '20px' }}>
          {COMPANY.subsidiaries.map((s, i) => {
            const subColor = SUB_COLORS[s.name] || C.accent;
            const isExpanded = expandedSub === i;
            return (
              <div key={i} style={{ marginBottom: '6px' }}>
                <Card
                  onClick={() => setExpandedSub(isExpanded ? null : i)}
                  style={{ borderLeft: `3px solid ${subColor}`, cursor: 'pointer', padding: '14px 18px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
                      <div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{s.name}</div>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{s.sector} · {s.hq}</div>
                      </div>
                    </div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: subColor, background: `${subColor}14`, border: `1px solid ${subColor}30`, padding: '2px 6px', borderRadius: '9999px', textTransform: 'uppercase' }}>{s.status}</span>
                    </div>
                  </div>
                </Card>
                {isExpanded && (
                  <div style={{ background: C.accentGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 10px 10px', padding: '16px 20px' }}>
                    <Body style={{ fontSize: '13px' }}>{s.description}</Body>
                    {'brandNote' in s && (s as any).brandNote && (
                      <div style={{ padding: '8px 12px', background: `${subColor}08`, border: `1px solid ${subColor}20`, borderRadius: '6px', marginBottom: '10px' }}>
                        <Lbl style={{ color: subColor, marginBottom: '3px' }}>Brand Architecture Note</Lbl>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>{(s as any).brandNote}</div>
                      </div>
                    )}
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
                      <div>
                        <Lbl>Headquarters</Lbl>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{s.hq}</div>
                      </div>
                      <div>
                        <Lbl>Sector</Lbl>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{s.sector}</div>
                      </div>
                      <div>
                        <Lbl>Status</Lbl>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: subColor, fontWeight: 600 }}>{s.status}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}

      {/* AWARDS */}
      <Divider label="Awards & Recognition" />
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '8px', marginBottom: '20px' }}>
        {COMPANY.awards.map((a, i) => (
          <Card key={i} style={{ padding: '14px', textAlign: 'center' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '22px', fontWeight: 800, color: C.accent, marginBottom: '4px' }}>{a.year}</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.4 }}>{a.award}</div>
          </Card>
        ))}
      </div>

      <Block variant="blue">
        <strong>Employee Wellbeing Framework:</strong> Duininck invests in employees across six dimensions: {COMPANY.wellbeingFramework.join(', ')}. This positions every team member as a whole person, not a headcount. No competitor in MN heavy civil uses this language.
      </Block>
    </div>
  );
}
