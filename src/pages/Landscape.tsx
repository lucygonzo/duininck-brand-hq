import { useState } from 'react';
import { INDUSTRY_LANDSCAPE } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, C } from '../components/ui';

const TABS = ['Overview', 'IIJA Funding', 'Labor Market', 'Technology', 'Golf Market', 'Timing'];

export default function LandscapePage() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div>
      <SectionHeader num="03 / Foundation" title="Industry Landscape" sub="Macro forces, funding waves, labor dynamics, technology shifts, and timing windows." />

      <Callout>
        Duininck is entering its centennial year at the most favorable market moment in a generation. The IIJA is hitting peak disbursement, Minnesota has $4.8B in highway funding, the golf market is expanding to its highest levels in a decade, and the labor shortage means whoever solves recruiting wins the market.
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

          <Lbl>Parallel Industry Insights</Lbl>
          <Body>Industries that share Duininck's structural DNA: seasonal labor, family ownership, blue-collar workforce, weather dependence.</Body>
          {INDUSTRY_LANDSCAPE.parallelIndustries.map((pi, i) => (
            <Card key={i} style={{ marginBottom: '6px' }}>
              <div style={{ display: 'flex', gap: '12px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent, width: '120px', flexShrink: 0 }}>{pi.industry}</div>
                <Body style={{ fontSize: '12px' }}>{pi.lesson}</Body>
              </div>
            </Card>
          ))}
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
            <strong>Expiration Clock:</strong> {INDUSTRY_LANDSCAPE.iija.expiration}. States are accelerating project lettings to obligate remaining funds. More projects = more bids = more work for Duininck. But only if they have enough crew.
          </Block>

          <Card style={{ marginTop: '12px' }}>
            <Lbl>What This Means for Duininck</Lbl>
            <Body>{INDUSTRY_LANDSCAPE.iija.status}</Body>
            <Body style={{ marginTop: '8px' }}>The pie is getting bigger in 2026-2027. The question is whether Duininck has enough crew to capture their share. This makes the recruiting strategy URGENT, not aspirational.</Body>
          </Card>
        </div>
      )}

      {tab === 'Labor Market' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox label="Worker Gap" value="349K" note={INDUSTRY_LANDSCAPE.laborShortage.gap2026} />
            <StatBox label="Hiring Difficulty" value="80%" note={INDUSTRY_LANDSCAPE.laborShortage.hiringDifficulty} />
            <StatBox label="Operator Pay" value="$54.5K" note={INDUSTRY_LANDSCAPE.laborShortage.equipmentOperatorPay} />
          </div>

          <Card>
            <Lbl>The Labor Landscape</Lbl>
            {[
              { label: 'Broader difficulty', data: INDUSTRY_LANDSCAPE.laborShortage.broader },
              { label: 'Immigration impact', data: INDUSTRY_LANDSCAPE.laborShortage.immigrationImpact },
            ].map((item, i) => (
              <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                <span style={{ fontWeight: 600, color: C.text }}>{item.label}:</span> {item.data}
              </div>
            ))}
          </Card>

          <Block variant="green">
            <strong>Duininck's labor advantages:</strong> "Whole person" wellbeing framework (unique among competitors), rural MN base (less competition), strong Glassdoor culture reviews, Ridgewater College in Willmar, and the centennial as a recruiting anchor. The company that solves the recruiting problem wins the decade.
          </Block>
        </div>
      )}

      {tab === 'Technology' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Construction Technology Status: 2026</Lbl>
          {[
            { area: 'AI', status: INDUSTRY_LANDSCAPE.technology.aiStatus },
            { area: 'Autonomous Equipment', status: INDUSTRY_LANDSCAPE.technology.autonomous },
            { area: 'Drones', status: INDUSTRY_LANDSCAPE.technology.drones },
            { area: 'GPS Machine Control', status: INDUSTRY_LANDSCAPE.technology.gps },
            { area: 'AI Safety Monitoring', status: INDUSTRY_LANDSCAPE.technology.safetyAI },
          ].map((tech, i) => (
            <Card key={i} style={{ marginBottom: '6px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent }}>{tech.area}</div>
              <Body style={{ fontSize: '12px' }}>{tech.status}</Body>
            </Card>
          ))}

          <Block variant="amber">
            <strong>Question for Nicole:</strong> Is Duininck using GPS machine control, drones, or AI safety monitoring? If yes, this is content gold: "100-year company, cutting-edge tools." If no, this is a competitive risk that needs assessment.
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

          <Card>
            <Lbl>Where the Growth Is</Lbl>
            <Body><strong>Hot markets:</strong> {INDUSTRY_LANDSCAPE.golfMarket.hotMarkets}</Body>
            <Body style={{ marginTop: '8px' }}><strong>Renovation boom:</strong> {INDUSTRY_LANDSCAPE.golfMarket.renovationBoom}</Body>
          </Card>

          <Block variant="green">
            <strong>The opportunity for Duininck Golf:</strong> 140+ projects are being awarded NOW while Golf social accounts are dark and the prestige portfolio (Hazeltine, Erin Hills, TPC) is invisible. Architects selecting builders can't find what they can't see.
          </Block>
        </div>
      )}

      {tab === 'Timing' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Time-Sensitive Windows</Lbl>
          {INDUSTRY_LANDSCAPE.timingWindows.map((tw, i) => {
            const isImmediate = tw.deadline.includes('IMMEDIATE') || tw.deadline.includes('NOW');
            return (
              <Card key={i} style={{ marginBottom: '6px', borderLeft: `3px solid ${isImmediate ? C.red : C.orange}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{tw.window}</div>
                  <Chip color={isImmediate ? C.red : C.orange}>{tw.deadline}</Chip>
                </div>
                <Body style={{ fontSize: '11px', marginTop: '4px' }}>{tw.why}</Body>
              </Card>
            );
          })}
        </div>
      )}
    </div>
  );
}
