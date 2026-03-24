import { useState } from 'react';
import { AUDIENCE_SEGMENTS_DEEP, TRADE_SCHOOL_PIPELINE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, C } from '../components/ui';

const TABS = ['Segments', 'Pipeline', 'Priority Matrix'];

export default function AudiencePage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expanded, setExpanded] = useState<string | null>(null);

  const priorityColor = (p: string) =>
    p.includes('CRITICAL') ? C.red : p.includes('PRIMARY') || p.includes('Primary') ? C.accent : p.includes('HIGH') ? C.amber : p === 'SEPARATE' ? C.muted : C.blue;

  return (
    <div>
      <SectionHeader num="05 / Market" title="Audience" sub="8 validated segments with deep research: channels, funnel leaks, content preferences, and win/loss factors." />

      <Callout>
        Audience research runs BEFORE competitive analysis. Understanding who we serve defines the playing field. These 8 segments (6 confirmed by Nicole, 2 added through research) cover every audience that affects revenue, recruiting, and brand perception.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Segments' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>All Audience Segments (click to expand)</Lbl>
          {AUDIENCE_SEGMENTS_DEEP.map((seg, i) => {
            const isExpanded = expanded === seg.name;
            return (
              <Card key={i} onClick={() => setExpanded(isExpanded ? null : seg.name)} style={{ marginBottom: '8px', cursor: 'pointer', borderLeft: `3px solid ${priorityColor(seg.priority)}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{seg.name}</span>
                    <Chip color={priorityColor(seg.priority)}>{seg.priority}</Chip>
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: seg.source.includes('CONFIRMED') ? '#22C55E' : C.muted }}>{seg.source}</div>
                </div>

                {/* Channel badges always visible */}
                <div style={{ display: 'flex', gap: '4px', flexWrap: 'wrap', marginTop: '6px' }}>
                  {seg.channels.slice(0, 4).map((ch, j) => (
                    <span key={j} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub, background: C.s2, border: `1px solid ${C.borderSoft}`, padding: '2px 6px', borderRadius: '3px' }}>{ch}</span>
                  ))}
                  {seg.channels.length > 4 && (
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>+{seg.channels.length - 4} more</span>
                  )}
                </div>

                {isExpanded && (
                  <div style={{ marginTop: '14px', borderTop: `1px solid ${C.border}`, paddingTop: '14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px' }}>
                      <div>
                        <Lbl>Where They Leak (Drop-Off Points)</Lbl>
                        {seg.funnelLeaks.map((leak, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                            <span style={{ color: C.red }}>&#x25CF;</span> {leak}
                          </div>
                        ))}
                      </div>
                      <div>
                        <Lbl>Content That Resonates</Lbl>
                        {seg.contentPreferences.map((cp, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                            <span style={{ color: '#22C55E' }}>&#x25CF;</span> {cp}
                          </div>
                        ))}
                      </div>
                    </div>

                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '12px' }}>
                      <div>
                        <Lbl>Where Duininck Wins</Lbl>
                        {seg.winFactors.map((w, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                            <span style={{ color: C.accent }}>&#x25B2;</span> {w}
                          </div>
                        ))}
                      </div>
                      <div>
                        <Lbl>Where Duininck Loses</Lbl>
                        {seg.lossFactors.map((l, j) => (
                          <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                            <span style={{ color: C.orange }}>&#x25BC;</span> {l}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}

          <Block variant="blue">
            <strong>The "Whole Person" Wedge for Recruiting:</strong> No construction company in the Midwest talks about "Career, Family/Social, Finances, Health, Community, Spiritual" wellbeing. When every competitor says "competitive pay and benefits," Duininck can say "we see the whole you." That positioning is genuinely unique across every competitor we researched.
          </Block>
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
