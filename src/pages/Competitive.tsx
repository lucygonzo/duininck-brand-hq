import { useState } from 'react';
import { COMPETITOR_PROFILES, COMPETITIVE_LANDSCAPE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, C } from '../components/ui';

const TABS = ['Overview', 'Profiles', 'White Space', 'Unification', 'Heritage'];

export default function CompetitivePage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expandedProfile, setExpandedProfile] = useState<string | null>(null);

  return (
    <div>
      <SectionHeader num="06 / Market" title="Competitive Landscape" sub="7 competitor profiles, white space analysis, unification benchmarks, and heritage context." />

      <Callout>{COMPETITIVE_LANDSCAPE.summary}</Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Overview' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Head-to-Head Comparison</Lbl>
          <Card style={{ overflowX: 'auto', padding: '0' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '11px' }}>
              <thead>
                <tr style={{ background: C.accentDim, borderBottom: `2px solid ${C.accent}20` }}>
                  {['Company', 'Founded', 'Ownership', 'Revenue', 'Employees', 'States', 'Glassdoor', 'Open Roles', 'Heritage Claim'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '10px 10px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                <tr style={{ background: `${C.accent}12`, borderBottom: `1px solid ${C.accent}20` }}>
                  <td style={{ padding: '10px 10px', fontWeight: 700, color: C.accent }}>Duininck</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>1926</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>Family, 4th gen</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>~$100M est.</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>700+</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>5+</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>9 reviews</td>
                  <td style={{ padding: '10px 10px', color: C.accent }}>~25</td>
                  <td style={{ padding: '10px 10px', fontSize: '10px', color: C.accent }}>100 years, 4 gens, portfolio breadth</td>
                </tr>
                {COMPETITOR_PROFILES.map((cp, i) => (
                  <tr key={i} style={{ background: i % 2 === 0 ? 'transparent' : C.accentGlow, borderBottom: `1px solid ${C.borderSoft}` }}>
                    <td style={{ padding: '10px 10px', fontWeight: 600, color: C.text }}>{cp.name}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.founded}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.ownership}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.revenue}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.employees}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.states}</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.glassdoor.rating}/5 ({cp.glassdoor.reviews})</td>
                    <td style={{ padding: '10px 10px', color: C.sub }}>{cp.openPositions}</td>
                    <td style={{ padding: '10px 10px', color: C.sub, fontSize: '10px' }}>{cp.heritageClaim.substring(0, 60)}...</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Lbl style={{ marginTop: '20px' }}>Strategic Recommendations</Lbl>
          {COMPETITIVE_LANDSCAPE.recommendations.map((rec, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}`, fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", color: C.accent, flexShrink: 0, fontWeight: 700, fontSize: '10px' }}>{String(i + 1).padStart(2, '0')}</span>
              {rec}
            </div>
          ))}
        </div>
      )}

      {tab === 'Profiles' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Competitor Deep Profiles (click to expand)</Lbl>
          {COMPETITOR_PROFILES.map((cp, i) => {
            const isExpanded = expandedProfile === cp.name;
            return (
              <Card key={i} onClick={() => setExpandedProfile(isExpanded ? null : cp.name)} style={{ marginBottom: '8px', cursor: 'pointer', borderLeft: `3px solid ${cp.subsidiary === 'Golf' ? C.orange : cp.subsidiary === 'Heavy Civil (Heritage)' ? '#8B6914' : C.accent}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{cp.name}</span>
                    <Chip color={cp.subsidiary === 'Golf' ? C.orange : C.accent}>{cp.subsidiary}</Chip>
                  </div>
                  <div style={{ display: 'flex', gap: '12px' }}>
                    <StatBox label="Revenue" value={cp.revenue} />
                    <StatBox label="Employees" value={cp.employees} />
                    <StatBox label="Glassdoor" value={`${cp.glassdoor.rating}/5`} note={`${cp.glassdoor.reviews} reviews`} />
                  </div>
                </div>

                {isExpanded && (
                  <div style={{ marginTop: '14px', borderTop: `1px solid ${C.border}`, paddingTop: '14px' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '12px' }}>
                      <div>
                        <Lbl>Tagline</Lbl>
                        <Body style={{ fontStyle: 'italic' }}>"{cp.tagline}"</Body>
                      </div>
                      <div>
                        <Lbl>Unique Asset</Lbl>
                        <Body>{cp.uniqueAsset}</Body>
                      </div>
                    </div>

                    <Lbl>Vulnerabilities</Lbl>
                    {cp.vulnerabilities.map((v, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: C.orange }}>&#x25CF;</span> {v}
                      </div>
                    ))}

                    <Lbl style={{ marginTop: '10px' }}>Opportunities for Duininck</Lbl>
                    {cp.opportunities.map((o, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0' }}>
                        <span style={{ color: '#22C55E' }}>&#x25CF;</span> {o}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}
        </div>
      )}

      {tab === 'White Space' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>What NO Competitor Is Doing Well</Lbl>
          <Body>These are opportunities where Duininck can own a position that no competitor currently occupies.</Body>

          {COMPETITIVE_LANDSCAPE.whiteSpace.map((ws, i) => (
            <Card key={i} style={{ marginBottom: '8px', borderLeft: `3px solid #22C55E` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{ws.gap}</div>
              <div style={{ display: 'flex', gap: '8px', marginBottom: '6px' }}>
                <Chip color={C.accent}>{ws.audience}</Chip>
              </div>
              <Body>{ws.note}</Body>
            </Card>
          ))}
        </div>
      )}

      {tab === 'Unification' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Unification Benchmarks</Lbl>
          <Body>Companies that successfully branded diverse subsidiaries under one name. Each offers a lesson directly applicable to Duininck's unification.</Body>

          {COMPETITIVE_LANDSCAPE.unificationBenchmarks.map((ub, i) => (
            <Card key={i} style={{ marginBottom: '8px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{ub.company}</div>
              <div style={{ marginBottom: '8px' }}>
                <Lbl>What They Did</Lbl>
                <Body>{ub.lesson}</Body>
              </div>
              <Block variant="green">
                <strong>Duininck Parallel:</strong> {ub.parallel}
              </Block>
            </Card>
          ))}
        </div>
      )}

      {tab === 'Heritage' && (
        <div>
          <Block variant="amber">
            <strong>{COMPETITIVE_LANDSCAPE.heritageInsight}</strong>
          </Block>

          <Lbl style={{ marginTop: '16px' }}>MN Heavy Civil Centenarians</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px' }}>
            {COMPETITIVE_LANDSCAPE.heritageCompetitors.map((hc, i) => (
              <Card key={i} style={{ textAlign: 'center', borderTop: `3px solid ${hc.name === 'Duininck' ? C.accent : C.orange}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '32px', fontWeight: 800, color: hc.name === 'Duininck' ? C.accent : C.text }}>{hc.age}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginTop: '4px' }}>{hc.name}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginTop: '2px' }}>Founded {hc.founded} | {hc.location}</div>
              </Card>
            ))}
          </div>

          <Card style={{ marginTop: '16px' }}>
            <Lbl>Why This Matters</Lbl>
            <Body>Three MN heavy civil companies share centenarian heritage. Age alone cannot be Duininck's differentiator. The messaging must lead with the COMBINATION of longevity + generational depth (4th generation, actively in the business) + portfolio breadth (roads, golf courses, water systems, real estate). No competitor can match all three.</Body>
            <div style={{ marginTop: '10px', display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
              <div style={{ textAlign: 'center', padding: '8px', background: C.accentDim, borderRadius: '6px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, textTransform: 'uppercase' }}>Ulland Brothers</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '4px' }}>Excavating + paving only. Generational depth unknown. NE Minnesota.</div>
              </div>
              <div style={{ textAlign: 'center', padding: '8px', background: C.accentDim, borderRadius: '6px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, textTransform: 'uppercase' }}>Bolander</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '4px' }}>Heavy civil construction. Celebrated centennial in 2024. Twin Cities area.</div>
              </div>
              <div style={{ textAlign: 'center', padding: '8px', background: C.accentDim, borderRadius: '6px', border: `1px solid ${C.accent}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.accent, textTransform: 'uppercase', fontWeight: 700 }}>Duininck</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '4px' }}>4th gen active. Roads + golf + water + real estate. Rural MN base. Faith-based values.</div>
              </div>
            </div>
          </Card>
        </div>
      )}
    </div>
  );
}
