import { useState } from 'react';
import { INDUSTRY_LANDSCAPE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, Divider, C } from '../components/ui';

const TABS = ['Overview', 'IIJA Funding', 'Labor Market', 'Technology', 'Golf Market', 'Timing'];

const INDUSTRY_ICONS: Record<string, string> = {
  'Agriculture': '🌾', 'Mining': '⛏️', 'Commercial Fishing': '🚢', 'Oil & Gas': '🛢️', 'Manufacturing': '🏭',
};

const STATE_CONTEXT = [
  { state: 'Minnesota', role: 'Headquarters and core market. Willmar/Prinsburg base. Deepest relationships, strongest reputation.', differentiator: 'Duininck is a hometown company here. MnDOT relationships span decades. Community rootedness is unmatched.' },
  { state: 'South Dakota', role: 'Hart Ranch Golf Club, real estate development, highway work.', differentiator: 'Hart Ranch is #1 Public Course in SD (Golfweek). Duininck owns infrastructure (water, sewer) in the development.' },
  { state: 'Texas', role: 'Expanding heavy civil operations. Previously managed independently.', differentiator: 'Growth market with massive infrastructure spend. Duininck brings MN values to a high-competition, high-volume market.' },
  { state: 'Georgia', role: 'Duininck Golf operations base (Atlanta area).', differentiator: 'Southeast golf market is the hottest in the country. FL/TX/SC/GA account for half of new course openings.' },
];

export default function LandscapePage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expandedIndustry, setExpandedIndustry] = useState<number | null>(null);
  const [expandedTiming, setExpandedTiming] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader num="03 / Foundation" title="Industry Landscape" sub="Macro forces, funding waves, labor dynamics, technology shifts, and timing windows." />

      <Callout>
        Duininck enters its centennial at the most favorable market moment in a generation. IIJA hitting peak disbursement, $4.8B in MN highway funding, golf construction at decade highs, and a labor shortage that rewards companies who solve recruiting. The pieces are aligned. Execution is the variable.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Overview' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox label="MN Highway Funding" value="$4.8B" note="IIJA 5-year allocation" />
            <StatBox label="Worker Gap (2026)" value="349K" note="New workers needed nationally" />
            <StatBox label="Golf Pipeline" value="140+" note="Courses in planning/construction" />
            <StatBox label="IIJA Expires" value="Sep 30" note="Authorization deadline 2026" />
          </div>

          {/* STATE-BY-STATE */}
          <Divider label="State-by-State Presence" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
            {STATE_CONTEXT.map((s, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.accent}` }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>📍 {s.state}</div>
                <Body style={{ fontSize: '12px', marginBottom: '6px' }}>{s.role}</Body>
                <div style={{ padding: '6px 10px', background: C.accentGlow, borderRadius: '4px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>
                  <strong>Differentiator:</strong> {s.differentiator}
                </div>
              </Card>
            ))}
          </div>

          {/* PARALLEL INDUSTRIES with expandable dropdowns */}
          <Divider label="Parallel Industry Insights" />
          <Body style={{ marginBottom: '12px' }}>Industries that share Duininck's structural DNA: seasonal labor, family ownership, blue-collar workforce, weather dependence. Each carries lessons that apply directly.</Body>

          {INDUSTRY_LANDSCAPE.parallelIndustries.map((pi, i) => {
            const isExpanded = expandedIndustry === i;
            const icon = INDUSTRY_ICONS[pi.industry] || '🏢';
            return (
              <div key={i} style={{ marginBottom: '6px' }}>
                <Card
                  onClick={() => setExpandedIndustry(isExpanded ? null : i)}
                  style={{ cursor: 'pointer', padding: '12px 16px' }}
                >
                  <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <span style={{ fontSize: '20px' }}>{icon}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent }}>{pi.industry}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '2px' }}>{pi.lesson.substring(0, 80)}...</div>
                    </div>
                  </div>
                </Card>
                {isExpanded && (
                  <div style={{ background: C.accentGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 10px 10px', padding: '16px 20px' }}>
                    <Body style={{ fontSize: '13px', marginBottom: '12px' }}>{pi.lesson}</Body>
                    <Lbl>Strengths & Opportunities (SWOT-lite)</Lbl>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
                      <div style={{ padding: '8px 12px', background: C.successDim, borderRadius: '6px' }}>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.success, textTransform: 'uppercase', marginBottom: '4px' }}>What Duininck Can Borrow</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>
                          {pi.industry === 'Agriculture' && 'Brand differentiation over commodity pricing. Direct-to-audience storytelling. Heritage as a premium signal.'}
                          {pi.industry === 'Mining' && 'Equipment-as-hero visual strategy. Employer brand investment as a recruiting advantage over larger competitors.'}
                          {pi.industry === 'Commercial Fishing' && 'Raw, unpolished content authenticity. Letting the work itself tell the story without corporate production.'}
                          {pi.industry === 'Oil & Gas' && 'Culture and stability as retention tools. "Come home safe" messaging. Long-term relationship over short-term pay.'}
                          {pi.industry === 'Manufacturing' && 'Family ownership as a competitive moat against PE-backed rollups. Culture documentation as a retention asset.'}
                        </div>
                      </div>
                      <div style={{ padding: '8px 12px', background: C.warningDim, borderRadius: '6px' }}>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.warning, textTransform: 'uppercase', marginBottom: '4px' }}>Watch Out For</div>
                        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>
                          {pi.industry === 'Agriculture' && 'Commodity trap: if Duininck competes only on price and capability, they become interchangeable. Brand is the escape.'}
                          {pi.industry === 'Mining' && 'Equipment content without human context becomes cold. Duininck needs the family warmth layered onto the machinery.'}
                          {pi.industry === 'Commercial Fishing' && 'Authenticity can tip into amateurism if there is no visual standard. Cinematic b-roll is the floor, not talking heads.'}
                          {pi.industry === 'Oil & Gas' && 'Boom-bust cycle risk applies to construction too. The centennial proves Duininck survives downturns, but messaging should acknowledge cyclicality.'}
                          {pi.industry === 'Manufacturing' && 'Succession risk is real. Documenting culture and values is insurance against generational transition disruption.'}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}

          {/* GROWTH OPPORTUNITIES */}
          <Divider label="Growth Opportunities" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {[
              { area: 'Southeast Golf Market Expansion', timing: '2026-2028', detail: 'FL/TX/SC/GA account for half of new course openings. Duininck Golf already has a GA base. The renovation boom (drainage, irrigation, turf) plays to their restoration expertise.' },
              { area: 'Employer Brand First-Mover', timing: 'NOW', detail: 'No MN heavy civil competitor uses "whole person" language. First to activate the wellbeing framework in recruiting owns the positioning for years. Knife River says "people-first" but can\'t match the specificity of six dimensions.' },
              { area: 'Trade School Pipeline', timing: 'Fall 2026 enrollment', detail: 'Ridgewater College is in Willmar. A sponsored "Duininck Scholars" cohort would create a guaranteed seasonal talent pipeline. No competitor has claimed this relationship.' },
              { area: 'AI-Assisted Content System', timing: '2026', detail: 'Nicole already uses Claude, Co-pilot, and ChatGPT. A systematized AI content pipeline could make her 3-person team produce at 10-person volume. The competitive edge is in the system, not the tools.' },
            ].map((opp, i) => (
              <Card key={i} style={{ borderLeft: `3px solid ${C.success}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{opp.area}</div>
                  <Chip color={opp.timing === 'NOW' ? C.red : C.success}>{opp.timing}</Chip>
                </div>
                <Body style={{ fontSize: '12px', marginBottom: 0 }}>{opp.detail}</Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === 'IIJA Funding' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox label="MN Highways" value="$4.8B" note={INDUSTRY_LANDSCAPE.iija.mnAllocation} />
            <StatBox label="MN Bridges" value="$302M" note={INDUSTRY_LANDSCAPE.iija.bridgeFunding} />
            <StatBox label="Total MN Infrastructure" value="$7.3B" note={INDUSTRY_LANDSCAPE.iija.totalMN} />
          </div>

          <Block variant="red">
            <strong>Expiration Clock:</strong> {INDUSTRY_LANDSCAPE.iija.expiration}. States are accelerating project lettings to obligate remaining funds. More projects = more bids = more work. But only if Duininck has enough crew.
          </Block>

          <Card style={{ marginTop: '12px', marginBottom: '12px' }}>
            <Lbl>What This Means for Duininck</Lbl>
            <Body>{INDUSTRY_LANDSCAPE.iija.status}</Body>
            <Body>The pie is getting bigger in 2026-2027. The constraint is crew capacity, not project availability. This makes recruiting strategy urgent, not aspirational.</Body>
          </Card>

          {/* Additional government funding */}
          <Divider label="Additional Funding Sources" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {[
              { source: 'MnDOT State Aid', detail: 'County State Aid Highway (CSAH) and Municipal State Aid Street (MSAS) programs distribute gas tax revenue to local roads. Duininck competes for these contracts across central MN.' },
              { source: 'USDA Water Infrastructure', detail: 'Rural water and wastewater grants through USDA Rural Development. Relevant for Prinsco products and Duininck underground utilities work.' },
              { source: 'EPA Clean Water State Revolving Fund', detail: 'Low-interest loans for water infrastructure projects. Minnesota receives annual allocations for stormwater, wastewater, and drinking water infrastructure.' },
              { source: 'Airport Improvement Program (AIP)', detail: 'FAA grants for airport construction and rehabilitation. Duininck has airport runway capability per duininck.com.' },
            ].map((f, i) => (
              <Card key={i} style={{ padding: '14px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{f.source}</div>
                <Body style={{ fontSize: '11px', marginBottom: 0 }}>{f.detail}</Body>
              </Card>
            ))}
          </div>
        </div>
      )}

      {tab === 'Labor Market' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr 1fr', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox label="Worker Gap" value="349K" note={INDUSTRY_LANDSCAPE.laborShortage.gap2026} />
            <StatBox label="Hiring Difficulty" value="80%" note={INDUSTRY_LANDSCAPE.laborShortage.hiringDifficulty} />
            <StatBox label="Operator Pay" value="$54.5K" note={INDUSTRY_LANDSCAPE.laborShortage.equipmentOperatorPay} />
            <StatBox label="All Firms" value="92%" note={INDUSTRY_LANDSCAPE.laborShortage.broader} />
          </div>

          <Card style={{ marginBottom: '12px' }}>
            <Lbl>Labor Market Forces</Lbl>
            {[
              { label: 'Hiring difficulty', data: INDUSTRY_LANDSCAPE.laborShortage.hiringDifficulty },
              { label: 'Broader industry', data: INDUSTRY_LANDSCAPE.laborShortage.broader },
              { label: 'Immigration impact', data: INDUSTRY_LANDSCAPE.laborShortage.immigrationImpact },
              { label: 'Gen Z vocational shift', data: 'Vocational program graduates: 75% employment rate vs. 70% for 4-year college graduates. Pipeline is growing.' },
              { label: 'Blue-collar job search', data: '98% of Gen Z workers have smartphones at work. Mobile-first recruiting (Indeed, Facebook) is essential. LinkedIn reaches office roles, not operators.' },
              { label: 'Retention vs. acquisition', data: 'Pay alone doesn\'t retain. Culture, stability, and benefits drive long-term retention. Duininck\'s Glassdoor reviews confirm culture is already a strength.' },
            ].map((item, i) => (
              <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '8px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                <span style={{ fontWeight: 600, color: C.text }}>{item.label}:</span> {item.data}
              </div>
            ))}
          </Card>

          <Block variant="green">
            <strong>Duininck's labor advantages:</strong> "Whole person" wellbeing framework (unique among competitors), rural MN base (less competition), strong Glassdoor culture reviews ("owners are great people"), Ridgewater College in Willmar, and the centennial as a recruiting anchor. The company that solves recruiting wins the decade.
          </Block>
        </div>
      )}

      {tab === 'Technology' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Construction Technology Status: 2026</Lbl>
          <Body style={{ marginBottom: '12px' }}>"Firms that fail to adopt risk losing contracts to competitors who deliver faster, safer, and more sustainably." Early adopters capture disproportionate value as AI scales from pilots to production.</Body>

          {[
            { area: 'AI in Construction', icon: '🤖', status: INDUSTRY_LANDSCAPE.technology.aiStatus, detail: 'AI-powered equipment, drones, and IoT-sensored machinery enable monitoring, hazard detection, autonomous movement, and material tracking. 2026 marks the shift from pilot programs to production deployment across the industry.' },
            { area: 'Autonomous Equipment', icon: '🚜', status: INDUSTRY_LANDSCAPE.technology.autonomous, detail: 'Self-driving excavators, robotic bulldozers, and drone-guided machines are being deployed at scale. The global autonomous construction equipment market is projected to roughly double by the early 2030s.' },
            { area: 'Drone Technology', icon: '🛸', status: INDUSTRY_LANDSCAPE.technology.drones, detail: 'High-resolution cameras and vision technology create real-time 3D maps, track progress against digital models, and support safety inspections in difficult-to-access areas. Now standard operating procedure, not emerging technology.' },
            { area: 'GPS Machine Control', icon: '📡', status: INDUSTRY_LANDSCAPE.technology.gps, detail: 'Already widespread in grading and paving. Firms without GPS-guided equipment face competitive disadvantage on precision-dependent projects. Retrofitting older equipment is common.' },
            { area: 'AI Safety Monitoring', icon: '🛡️', status: INDUSTRY_LANDSCAPE.technology.safetyAI, detail: 'Computer vision from cameras and drones identifies unsafe conditions, PPE non-compliance, and hazardous behaviors in near-real-time. Reduces incident rates and insurance costs simultaneously.' },
          ].map((tech, i) => (
            <Card key={i} style={{ marginBottom: '8px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <span style={{ fontSize: '18px' }}>{tech.icon}</span>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent }}>{tech.area}</div>
              </div>
              <Body style={{ fontSize: '12px', marginBottom: '6px' }}>{tech.detail}</Body>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, padding: '4px 8px', background: C.s2, borderRadius: '4px', display: 'inline-block' }}>Status: {tech.status}</div>
            </Card>
          ))}

          <Block variant="amber">
            <strong>Question for Nicole:</strong> Does Duininck currently use GPS machine control, drone surveying, or AI safety monitoring? If yes, this becomes powerful content: "100-year company using tomorrow's tools." If not, the technology roadmap should be a strategy conversation.
          </Block>
        </div>
      )}

      {tab === 'Golf Market' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox label="Market (2025)" value="$0.7B" note={INDUSTRY_LANDSCAPE.golfMarket.value2025} />
            <StatBox label="Projected (2035)" value="$1.4B" note={INDUSTRY_LANDSCAPE.golfMarket.projected2035} />
            <StatBox label="Pipeline" value="140+" note={INDUSTRY_LANDSCAPE.golfMarket.pipeline} />
          </div>

          <Card style={{ marginBottom: '12px' }}>
            <Lbl>Market Dynamics</Lbl>
            <Body><strong>Hot markets:</strong> {INDUSTRY_LANDSCAPE.golfMarket.hotMarkets}. Duininck Golf already has a GA base, positioning them in the Southeast growth corridor.</Body>
            <Body><strong>Renovation boom:</strong> {INDUSTRY_LANDSCAPE.golfMarket.renovationBoom}. This plays directly to Duininck's restoration expertise (Ross, Raynor, Tillinghast courses).</Body>
            <Body><strong>Driving forces:</strong> Millennial and Gen Z interest in golf (post-COVID outdoor demand), luxury resort development, and aging facilities requiring infrastructure-level renovation (drainage, irrigation, turf engineering).</Body>
          </Card>

          <Block variant="green">
            <strong>The opportunity:</strong> 140+ projects are being awarded while Golf social accounts are dark and the prestige portfolio (Hazeltine, Erin Hills, TPC) remains invisible. Architects selecting builders right now cannot find what they cannot see.
          </Block>
        </div>
      )}

      {tab === 'Timing' && (
        <div>
          <Divider label="Time-Sensitive Windows" />
          {INDUSTRY_LANDSCAPE.timingWindows.map((tw, i) => {
            const isImmediate = tw.deadline.includes('IMMEDIATE') || tw.deadline.includes('NOW');
            const isExpanded = expandedTiming === i;
            return (
              <div key={i} style={{ marginBottom: '6px' }}>
                <Card
                  onClick={() => setExpandedTiming(isExpanded ? null : i)}
                  style={{ borderLeft: `3px solid ${isImmediate ? C.red : C.orange}`, cursor: 'pointer', padding: '12px 16px' }}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, transform: isExpanded ? 'rotate(90deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>&#9654;</span>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{tw.window}</div>
                    </div>
                    <Chip color={isImmediate ? C.red : C.orange}>{tw.deadline}</Chip>
                  </div>
                </Card>
                {isExpanded && (
                  <div style={{ background: isImmediate ? C.errorDim : C.orangeGlow, border: `1px solid ${C.border}`, borderTop: 'none', borderRadius: '0 0 10px 10px', padding: '12px 16px' }}>
                    <Body style={{ fontSize: '12px', marginBottom: '6px' }}>{tw.why}</Body>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>
                      {isImmediate ? 'ACTION REQUIRED: This window is closing or already past due.' : 'PLAN: Build this into the engagement timeline.'}
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
