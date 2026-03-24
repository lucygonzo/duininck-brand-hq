import { useState } from 'react';
import { BRAND_PERCEPTION, FUNNEL_AUDITS, BEST_IN_CLASS } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, ProgressBar, C } from '../components/ui';

const TABS = ['Perception', 'Funnels', 'Benchmarks', 'Gaps'];

const GAPS = [
  { gap: 'Content Strategy System', current: 'Excel + Buffer. Designer can shoot but can\'t own strategy. Golf dark.', desired: 'Content SYSTEM for a 3-person team to operate like 10.', severity: 'Critical', source: 'CONFIRMED' },
  { gap: 'Internal Communications', current: '700+ field employees with no intranet, no app, no email. 83% of frontline workers globally lack corporate email.', desired: 'Mobile-first comms platform reaching every field worker.', severity: 'Critical', source: 'CONFIRMED' },
  { gap: 'Capture Timing Offset', current: 'Golf beauty shots come a YEAR after construction. 2026 captures feed 2027 content.', desired: 'Seasonal capture calendar mapped to content release dates 6-12 months later.', severity: 'High', source: 'CONFIRMED' },
  { gap: 'Blue-Collar Content', current: 'Workers won\'t go on camera. Graphics get "two likes."', desired: 'Cinematic b-roll, drone, equipment-as-hero content strategy.', severity: 'High', source: 'CONFIRMED' },
  { gap: 'Golf Social Presence', current: 'Dark. ~600 LinkedIn followers. No Instagram activity. Prestige portfolio invisible.', desired: 'Active presence leading with Hazeltine, Erin Hills, TPC, Ross/Raynor/Tillinghast.', severity: 'Critical', source: 'DISCOVERED' },
  { gap: 'SEO Visibility', current: 'Not on page 1 for "heavy civil contractor Minnesota." Meta description says "third generation."', desired: 'First page for core service keywords. Accurate, optimized metadata.', severity: 'Critical', source: 'DISCOVERED' },
  { gap: 'Employer Brand', current: '9 Glassdoor reviews. Job postings identical to competitors. No wellbeing framework in recruiting.', desired: '50+ reviews. Differentiated postings. CDL training pipeline.', severity: 'Critical', source: 'DISCOVERED' },
  { gap: 'Values Conflict', current: 'TWO different value sets on parent site vs. construction site.', desired: 'One unified set (or intentional corporate/operating split).', severity: 'High', source: 'DISCOVERED' },
];

export default function GapAnalysisPage() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div>
      <SectionHeader num="07 / Market" title="Gap Analysis" sub="Brand perception score, leaky funnels, best-in-class benchmarks, and identified gaps." />

      {/* Perception Score Banner */}
      <div style={{ background: `linear-gradient(135deg, ${C.accent}, #003554)`, borderRadius: '10px', padding: '20px 24px', marginBottom: '20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: 'rgba(255,255,255,0.6)', textTransform: 'uppercase', letterSpacing: '0.12em' }}>Brand Perception Score</div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.9)', marginTop: '4px' }}>A 9/10 company with a {BRAND_PERCEPTION.overallScore}/10 brand. The gap between reality and perception is the entire engagement.</div>
        </div>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '48px', fontWeight: 800, color: C.orange }}>{BRAND_PERCEPTION.overallScore}</div>
      </div>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Perception' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Perception Score Breakdown</Lbl>
          {BRAND_PERCEPTION.dimensions.map((dim, i) => (
            <Card key={i} style={{ marginBottom: '6px', display: 'flex', alignItems: 'center', gap: '16px' }}>
              <div style={{ width: '200px', flexShrink: 0 }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{dim.name}</div>
              </div>
              <div style={{ flex: 1 }}>
                <ProgressBar pct={dim.score * 10} color={dim.score >= 6 ? '#22C55E' : dim.score >= 4 ? C.orange : C.red} />
              </div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '16px', fontWeight: 700, color: dim.score >= 6 ? '#22C55E' : dim.score >= 4 ? C.orange : C.red, width: '40px', textAlign: 'right' }}>{dim.score}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted, width: '200px' }}>{dim.note}</div>
            </Card>
          ))}

          <Lbl style={{ marginTop: '20px' }}>The Perception Gap: What the Family Knows vs. What the World Sees</Lbl>
          <Card style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  <th style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: '#22C55E', textTransform: 'uppercase' }}>What the Family Knows</th>
                  <th style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.red, textTransform: 'uppercase' }}>What the World Sees</th>
                </tr>
              </thead>
              <tbody>
                {BRAND_PERCEPTION.perceptionGap.map((gap, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                    <td style={{ padding: '8px', color: C.text }}>{gap.familyKnows}</td>
                    <td style={{ padding: '8px', color: C.sub, fontStyle: 'italic' }}>{gap.worldSees}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>
        </div>
      )}

      {tab === 'Funnels' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Leaky Funnel Audits</Lbl>
          <Body>Every audience has a decision journey. These audits identify exactly where Duininck loses people at each stage.</Body>

          {FUNNEL_AUDITS.map((funnel, fi) => (
            <Card key={fi} style={{ marginBottom: '16px' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.accent, marginBottom: '12px' }}>{funnel.name}</div>
              {funnel.stages.map((stage, si) => {
                const severityColor = stage.severity === 'Critical' ? C.red : stage.severity === 'High' ? C.orange : stage.severity === 'Medium' ? C.amber : '#22C55E';
                return (
                  <div key={si} style={{ display: 'flex', gap: '12px', marginBottom: '8px', padding: '8px', background: stage.severity === 'Critical' ? 'rgba(239,68,68,0.04)' : stage.severity === 'Low' ? 'rgba(34,197,94,0.04)' : 'transparent', borderRadius: '6px', borderLeft: `3px solid ${severityColor}` }}>
                    <div style={{ width: '80px', flexShrink: 0 }}>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, textTransform: 'uppercase' }}>{stage.stage}</div>
                      <Chip color={severityColor}>{stage.severity}</Chip>
                    </div>
                    <div style={{ flex: 1 }}>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.text, marginBottom: '2px' }}>{stage.action}</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, fontStyle: 'italic' }}>{stage.leak}</div>
                    </div>
                  </div>
                );
              })}
            </Card>
          ))}
        </div>
      )}

      {tab === 'Benchmarks' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Best-in-Class Family Company Benchmarks</Lbl>
          <Body>What elite family companies do that Duininck doesn't (yet). Each offers a directly actionable lesson.</Body>

          {BEST_IN_CLASS.map((bic, i) => (
            <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{bic.company}</div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted }}>Est. {bic.founded}</span>
              </div>
              <Body style={{ marginTop: '6px' }}>{bic.lesson}</Body>
              <Block variant="green">
                <strong>Duininck Parallel:</strong> {bic.parallel}
              </Block>
            </Card>
          ))}

          <Card style={{ marginTop: '16px', background: C.accentDim }}>
            <Lbl>The Pattern Across All Benchmarks</Lbl>
            {[
              'Heritage is the HEADLINE, not a footnote. SC Johnson, Edward Jones, Lincoln Electric all lead with their founding story.',
              'The family story creates trust. Every benchmark uses family ownership as a signal: "We\'re not going anywhere."',
              'One signature commitment. Lincoln Electric has guaranteed employment. SC Johnson has transparency. Duininck\'s could be "whole person" wellbeing.',
              'The CEO/leader IS the brand voice. Nicole is perfectly positioned for this, but she\'s not publishing or speaking yet.',
              'Content is about PEOPLE, not capabilities. JE Dunn\'s "100 Stories" works because every story is a person.',
            ].map((pattern, i) => (
              <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '5px 0', borderBottom: `1px solid ${C.border}` }}>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", color: C.accent, fontWeight: 700, fontSize: '10px', marginRight: '8px' }}>{i + 1}.</span>
                {pattern}
              </div>
            ))}
          </Card>
        </div>
      )}

      {tab === 'Gaps' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Identified Brand Gaps</Lbl>
          {GAPS.map((gap, i) => (
            <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${gap.severity === 'Critical' ? C.red : C.orange}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{gap.gap}</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <Chip color={gap.severity === 'Critical' ? C.red : C.orange}>{gap.severity}</Chip>
                  <Chip color={gap.source === 'CONFIRMED' ? '#22C55E' : C.accent}>{gap.source}</Chip>
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                <div>
                  <Lbl>Current State</Lbl>
                  <Body style={{ fontSize: '11px' }}>{gap.current}</Body>
                </div>
                <div>
                  <Lbl>Desired State</Lbl>
                  <Body style={{ fontSize: '11px' }}>{gap.desired}</Body>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
