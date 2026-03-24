import { useState } from 'react';
import { AUDIENCE_SEGMENTS_DEEP, TRADE_SCHOOL_PIPELINE, AUDIENCE_EMPATHY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, Divider, C } from '../components/ui';

const TABS = ['Segments', 'Pipeline', 'Priority Matrix'];

export default function AudiencePage() {
  const [tab, setTab] = useState(TABS[0]);
  const [activeSeg, setActiveSeg] = useState(AUDIENCE_SEGMENTS_DEEP[0].name);

  const priorityColor = (p: string) =>
    p.includes('CRITICAL') ? C.red : p.includes('PRIMARY') || p.includes('Primary') ? C.accent : p.includes('HIGH') ? C.amber : p === 'SEPARATE' ? C.muted : C.blue;

  return (
    <div>
      <SectionHeader num="05 / Market" title="Audience" sub="8 validated segments with empathy profiles, journey maps, funnel leaks, and channel strategy." />

      <Callout>
        Audience research runs BEFORE competitive analysis. Understanding who we serve defines the playing field. These 8 segments (6 confirmed by Nicole, 2 added through research) cover every audience that affects revenue, recruiting, and brand perception.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Segments' && (
        <div>
          {/* Segment selector pills */}
          <div style={{ display: 'flex', gap: '5px', flexWrap: 'wrap', marginTop: '12px', marginBottom: '16px' }}>
            {AUDIENCE_SEGMENTS_DEEP.map((seg) => (
              <button
                key={seg.name}
                onClick={() => setActiveSeg(seg.name)}
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontSize: '11px',
                  fontWeight: activeSeg === seg.name ? 700 : 400,
                  color: activeSeg === seg.name ? '#fff' : C.sub,
                  background: activeSeg === seg.name ? priorityColor(seg.priority) : '#fff',
                  border: `1px solid ${activeSeg === seg.name ? priorityColor(seg.priority) : C.border}`,
                  borderRadius: '20px',
                  padding: '5px 12px',
                  cursor: 'pointer',
                  transition: 'all 0.15s',
                }}
              >
                {seg.name}
              </button>
            ))}
          </div>

          {/* Active Segment Detail */}
          {(() => {
            const seg = AUDIENCE_SEGMENTS_DEEP.find(s => s.name === activeSeg) || AUDIENCE_SEGMENTS_DEEP[0];
            const empathy = AUDIENCE_EMPATHY[seg.name];

            return (
              <div>
                {/* Overview Card */}
                <Card style={{ borderLeft: `4px solid ${priorityColor(seg.priority)}`, marginBottom: '16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 800, color: C.text }}>{seg.name}</div>
                    <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                      <Chip color={priorityColor(seg.priority)}>{seg.priority}</Chip>
                      {empathy && <Chip color={empathy.dataDepth === 'deep' ? C.success : C.amber}>{empathy.dataDepth} research</Chip>}
                    </div>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: seg.source.includes('CONFIRMED') ? '#22C55E' : C.muted, marginBottom: '8px' }}>{seg.source}</div>
                  <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap' }}>
                    {seg.channels.map((ch, j) => (
                      <span key={j} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub, background: C.s2, border: `1px solid ${C.borderSoft}`, padding: '2px 6px', borderRadius: '3px' }}>{ch}</span>
                    ))}
                  </div>
                </Card>

                {empathy && (
                  <>
                    {/* Empathy Profile */}
                    <Divider label="Empathy Profile" />
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
                      <Card style={{ padding: '14px' }}>
                        <Lbl>Daily Life</Lbl>
                        <Body style={{ fontSize: '12px' }}>{empathy.dailyLife}</Body>
                      </Card>
                      <Card style={{ padding: '14px' }}>
                        <Lbl>How They Find Us</Lbl>
                        <Body style={{ fontSize: '12px' }}>{empathy.howTheyFind}</Body>
                      </Card>
                      <Card style={{ padding: '14px' }}>
                        <Lbl>How They Decide</Lbl>
                        <Body style={{ fontSize: '12px' }}>{empathy.howTheyDecide}</Body>
                      </Card>
                      <Card style={{ padding: '14px' }}>
                        <Lbl>What Earns Their Trust</Lbl>
                        {empathy.trustSignals.map((ts, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '2px 0' }}>
                            <span style={{ color: C.success }}>&#x25CF;</span> {ts}
                          </div>
                        ))}
                      </Card>
                    </div>

                    {/* Frustrations */}
                    <Card style={{ marginBottom: '16px', padding: '14px', borderLeft: `3px solid ${C.orange}` }}>
                      <Lbl style={{ color: C.orange }}>What Frustrates Them</Lbl>
                      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4px' }}>
                        {empathy.frustrations.map((f, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                            <span style={{ color: C.orange }}>&#x25CF;</span> {f}
                          </div>
                        ))}
                      </div>
                    </Card>

                    {/* Journey Map */}
                    <Divider label="Decision Journey" />
                    <div style={{ display: 'flex', gap: '0', marginBottom: '16px', overflowX: 'auto' }}>
                      {empathy.journeyStages.map((stage, j) => (
                        <div key={j} style={{ flex: '1 1 0', minWidth: '140px', position: 'relative' }}>
                          {/* Connector arrow */}
                          {j < empathy.journeyStages.length - 1 && (
                            <div style={{ position: 'absolute', right: '-8px', top: '16px', color: C.accent, fontSize: '14px', zIndex: 1 }}>&#9654;</div>
                          )}
                          <div style={{
                            background: stage.leak ? C.orangeGlow : C.accentGlow,
                            border: `1px solid ${stage.leak ? C.orange + '30' : C.accent + '20'}`,
                            borderRadius: '8px',
                            padding: '12px',
                            marginRight: j < empathy.journeyStages.length - 1 ? '16px' : '0',
                            height: '100%',
                          }}>
                            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>{stage.stage}</div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.text, fontWeight: 600, marginBottom: '4px' }}>{stage.action}</div>
                            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.sub, marginBottom: stage.leak ? '6px' : '0' }}>{stage.duininckRole}</div>
                            {stage.leak && (
                              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.orange, fontWeight: 600, borderTop: `1px solid ${C.orange}20`, paddingTop: '4px', marginTop: '4px' }}>
                                Leak: {stage.leak}
                              </div>
                            )}
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Drive Link */}
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginBottom: '16px' }}>
                      Full research: <span style={{ color: C.accent }}>{empathy.driveLink}</span> in Google Drive
                    </div>
                  </>
                )}

                {/* Win/Loss + Funnel Leaks + Content */}
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
                  <Card style={{ padding: '14px' }}>
                    <Lbl>Where Duininck Wins</Lbl>
                    {seg.winFactors.map((w, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: C.accent }}>&#x25B2;</span> {w}
                      </div>
                    ))}
                  </Card>
                  <Card style={{ padding: '14px' }}>
                    <Lbl>Where Duininck Loses</Lbl>
                    {seg.lossFactors.map((l, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: C.orange }}>&#x25BC;</span> {l}
                      </div>
                    ))}
                  </Card>
                  <Card style={{ padding: '14px' }}>
                    <Lbl style={{ color: C.red }}>Funnel Leaks</Lbl>
                    {seg.funnelLeaks.map((leak, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: C.red }}>&#x25CF;</span> {leak}
                      </div>
                    ))}
                  </Card>
                  <Card style={{ padding: '14px' }}>
                    <Lbl style={{ color: '#22C55E' }}>Content That Resonates</Lbl>
                    {seg.contentPreferences.map((cp, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: '#22C55E' }}>&#x25CF;</span> {cp}
                      </div>
                    ))}
                  </Card>
                </div>
              </div>
            );
          })()}
        </div>
      )}

      {tab === 'Pipeline' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Trade School & Vocational Pipeline</Lbl>
          <Body>Duininck needs seasonal workers EVERY year. Instead of competing for experienced operators on Indeed, these programs can build a pipeline of trained talent before competitors recruit them.</Body>

          {TRADE_SCHOOL_PIPELINE.map((school, i) => (
            <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${i === 0 ? C.accent : C.border}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{school.name}</div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{school.location}</span>
              </div>
              <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', margin: '8px 0' }}>
                {school.programs.map((prog, j) => (
                  <span key={j} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub, background: C.s2, border: `1px solid ${C.borderSoft}`, padding: '2px 6px', borderRadius: '3px' }}>{prog}</span>
                ))}
              </div>
              <Block variant={i === 0 ? 'green' : 'default'}>
                <strong>Opportunity:</strong> {school.opportunity}
              </Block>
            </Card>
          ))}

          <Block variant="amber">
            <strong>Competitive context:</strong> Knife River already offers in-house paid CDL training. If Duininck sponsors a Ridgewater College cohort before competitors do, they own the local talent pipeline. Ridgewater is literally in Willmar.
          </Block>
        </div>
      )}

      {tab === 'Priority Matrix' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Audience Priority Matrix</Lbl>
          <Card style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  {['Segment', 'Revenue Impact', 'Brand Impact', 'Effort to Reach', 'Priority'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {[
                  { seg: 'Prospective Employees', rev: 'High', brand: 'High', effort: 'Medium', pri: 'CRITICAL' },
                  { seg: 'Public Works & GCs', rev: 'Highest', brand: 'Medium', effort: 'Low', pri: 'PRIMARY' },
                  { seg: 'Golf Architects', rev: 'Medium', brand: 'Very High', effort: 'Medium', pri: 'PRIMARY' },
                  { seg: 'Current Employees', rev: 'Medium', brand: 'Very High', effort: 'High', pri: 'CRITICAL' },
                  { seg: 'Subcontractors', rev: 'High', brand: 'Medium', effort: 'Low', pri: 'HIGH' },
                  { seg: 'Civil Engineers', rev: 'Medium', brand: 'Medium', effort: 'Medium', pri: 'HIGH' },
                  { seg: 'Communities', rev: 'Low', brand: 'High', effort: 'Low', pri: 'HIGH' },
                  { seg: 'Ag Customers (Prinsco)', rev: 'High', brand: 'Low', effort: 'Separate', pri: 'SEPARATE' },
                ].map((row, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                    <td style={{ padding: '8px', fontWeight: 600 }}>{row.seg}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{row.rev}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{row.brand}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{row.effort}</td>
                    <td style={{ padding: '8px' }}><Chip color={priorityColor(row.pri)}>{row.pri}</Chip></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Card style={{ marginTop: '16px' }}>
            <Lbl>Strategic Implications</Lbl>
            {[
              'Competitive analysis evaluates how Ames, Knife River, McCrossan serve the RECRUITING and GC audiences. That\'s where the battle is.',
              'Content strategy should prioritize recruiting content (job postings, employer brand, Glassdoor activation) and golf portfolio resurrection.',
              'Internal comms platform decision is urgent. 700 potential brand ambassadors are disconnected. Fix before centennial.',
              'The centennial is a cross-segment moment. It matters to recruits (pride), employees (belonging), communities (celebration), and GCs (credibility).',
              'Trade school pipeline is first-mover territory. Ridgewater College partnership could own the local talent pipeline.',
            ].map((imp, i) => (
              <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '5px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: C.accent, fontWeight: 700, fontSize: '10px', marginRight: '8px' }}>{String(i + 1).padStart(2, '0')}</span>
                {imp}
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
