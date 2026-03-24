import { useState } from 'react';
import { BRAND_PERCEPTION, FUNNEL_AUDITS, BEST_IN_CLASS } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, ProgressBar, Divider, C } from '../components/ui';

const TABS = ['Perception', 'Funnels', 'Benchmarks', 'Gaps'];

const GAPS = [
  { gap: 'Content Strategy System', current: 'Excel + Buffer. Designer can shoot but can\'t own strategy. Golf dark.', desired: 'Content SYSTEM for a 3-person team to operate like 10.', severity: 'Critical', source: 'CONFIRMED', whatItMeans: 'Nicole\'s team is producing content without a strategy lens. The volume exists, the direction doesn\'t.', whatWeDo: 'Design a content operating system: capture calendar, AI-assisted production pipeline, carousel templates, measurement framework.' },
  { gap: 'Internal Communications', current: '700+ field employees with no intranet, no app, no email. 83% of frontline workers globally lack corporate email.', desired: 'Mobile-first comms platform reaching every field worker.', severity: 'Critical', source: 'CONFIRMED', whatItMeans: '700 potential brand ambassadors are completely disconnected from the brand story. They can\'t advocate for what they don\'t know.', whatWeDo: 'Evaluate SMS-based and mobile app solutions (Beekeeper, Team Engine). Launch before centennial so employees feel included in the 100-year celebration.' },
  { gap: 'Capture Timing Offset', current: 'Golf beauty shots come a YEAR after construction. 2026 captures feed 2027 content.', desired: 'Seasonal capture calendar mapped to content release dates 6-12 months later.', severity: 'High', source: 'CONFIRMED', whatItMeans: 'Every month without a capture plan is content that won\'t exist 12 months from now. The window is seasonal and irreversible.', whatWeDo: 'Build a construction-season capture calendar (April through November) with specific shot lists for every active project.' },
  { gap: 'Blue-Collar Content', current: 'Workers won\'t go on camera. Graphics get "two likes."', desired: 'Cinematic b-roll, drone, equipment-as-hero content strategy.', severity: 'High', source: 'CONFIRMED', whatItMeans: 'The content strategy must be redesigned around the constraint. Blue-collar camera shyness isn\'t a problem to solve. It\'s a creative parameter to design within.', whatWeDo: 'Equipment-as-hero photography, drone footage, hands-at-work shots (no faces), voiceover narratives, before/during/after carousels.' },
  { gap: 'Golf Social Presence', current: 'Dark. ~600 LinkedIn followers. No Instagram activity. Prestige portfolio invisible.', desired: 'Active presence leading with Hazeltine, Erin Hills, TPC, Ross/Raynor/Tillinghast.', severity: 'Critical', source: 'DISCOVERED', whatItMeans: 'Duininck Golf has world-class pedigree that architects can\'t see. Every day the accounts stay dark, Landscapes Unlimited and Wadsworth Golf capture the narrative.', whatWeDo: 'Instagram-first restart with portfolio photography. One prestige venue per week for the first 12 weeks. Tag the architect on every post.' },
  { gap: 'SEO Visibility', current: 'Not on page 1 for "heavy civil contractor Minnesota." Meta description says "third generation."', desired: 'First page for core service keywords. Accurate, optimized metadata.', severity: 'Critical', source: 'DISCOVERED', whatItMeans: 'Every GC, engineer, and recruit who searches Google for Duininck\'s core services finds competitors first. Discovery-stage prospects never reach the brand.', whatWeDo: 'Fix meta descriptions immediately (5-minute win). Build project portfolio pages for SEO. Add schema markup. Target 2-4 blog posts per month minimum.' },
  { gap: 'Employer Brand', current: '9 Glassdoor reviews. Job postings identical to competitors. No wellbeing framework in recruiting.', desired: '50+ reviews. Differentiated postings. CDL training pipeline.', severity: 'Critical', source: 'DISCOVERED', whatItMeans: 'The "whole person" wellbeing framework is genuinely unique in MN construction and it appears nowhere a recruit would see it. The strongest differentiator is invisible.', whatWeDo: 'Rewrite every job posting with wellbeing framework language. Launch Glassdoor review campaign. Partner with Ridgewater College for CDL pipeline.' },
  { gap: 'Values Conflict', current: 'TWO different value sets on parent site vs. construction site.', desired: 'One unified set (or intentional corporate/operating split).', severity: 'High', source: 'DISCOVERED', whatItMeans: 'If internal teams don\'t know which values are "real," external audiences certainly won\'t. This creates brand confusion at the foundation level.', whatWeDo: 'Discussion Point: Are both value sets intentional (corporate values vs. operating behaviors)? Or has one replaced the other? The answer shapes how we present values across the unified brand.' },
];

export default function GapAnalysisPage() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div>
      <SectionHeader num="07 / Market" title="Gap Analysis" sub="Where Duininck's reality exceeds its reputation, and what to do about each gap." />

      {/* Perception Score Banner: Implication First */}
      <div style={{ background: `linear-gradient(135deg, ${C.accent}, #003554)`, borderRadius: '12px', padding: '24px 28px', marginBottom: '20px' }}>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '26px', fontWeight: 800, color: '#fff', lineHeight: 1.3, marginBottom: '6px' }}>
          A 9/10 company with a {BRAND_PERCEPTION.overallScore}/10 brand.
        </div>
        <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', color: 'rgba(255,255,255,0.8)', lineHeight: 1.6, maxWidth: '640px' }}>
          The gap between who Duininck IS and how the world perceives them defines the entire engagement. Every action item, every content decision, every dollar spent should close this gap.
        </div>
        <div style={{ display: 'flex', gap: '20px', marginTop: '16px' }}>
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '32px', fontWeight: 800, color: '#22C55E' }}>9</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Company Quality</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '32px', fontWeight: 800, color: C.orange }}>{BRAND_PERCEPTION.overallScore}</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Brand Perception</div>
          </div>
          <div style={{ width: '1px', background: 'rgba(255,255,255,0.2)' }} />
          <div style={{ textAlign: 'center' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '32px', fontWeight: 800, color: '#fff' }}>4.3</div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: 'rgba(255,255,255,0.5)', textTransform: 'uppercase', letterSpacing: '0.1em' }}>Point Gap</div>
          </div>
        </div>
      </div>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Perception' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Perception by Dimension</Lbl>
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Each dimension leads with what the score means, not just the number. The implication matters more than the metric.</Body>

          {BRAND_PERCEPTION.dimensions.map((dim, i) => {
            const scoreColor = dim.score >= 6 ? '#22C55E' : dim.score >= 4 ? C.orange : C.red;
            return (
              <Card key={i} style={{ marginBottom: '8px', borderLeft: `3px solid ${scoreColor}` }}>
                {/* Lead with the implication */}
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text, marginBottom: '6px' }}>{dim.note}</div>

                {/* Then the dimension name + score bar */}
                <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.06em', width: '200px', flexShrink: 0 }}>{dim.name}</div>
                  <div style={{ flex: 1 }}>
                    <ProgressBar pct={dim.score * 10} color={scoreColor} />
                  </div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '18px', fontWeight: 700, color: scoreColor, width: '36px', textAlign: 'right' }}>{dim.score}</div>
                </div>

                {/* What this means + what we do */}
                {dim.score < 6 && (
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginTop: '8px', paddingTop: '8px', borderTop: `1px solid ${C.borderSoft}` }}>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '2px' }}>What this means</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>
                        {dim.score <= 3 ? 'Severely underperforming relative to company quality. This dimension actively hurts Duininck with audiences who rely on it.' :
                         dim.score <= 5 ? 'Below where it should be. The company delivers more value than this score reflects. Targeted action would move this quickly.' :
                         'Performing adequately but not at the level the company deserves.'}
                      </div>
                    </div>
                    <div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '2px' }}>What we do about it</div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>
                        {dim.name.includes('Golf') ? 'Restart social accounts. Lead with prestige portfolio (Hazeltine, Erin Hills). 12-week Instagram launch plan.' :
                         dim.name.includes('Employer') ? 'Glassdoor review campaign (target 50+). Rewrite all job postings with wellbeing framework. CDL training pipeline.' :
                         dim.name.includes('Digital') ? 'Fix meta descriptions (immediate). Add project portfolio pages. Schema markup. Blog cadence 2-4x/month.' :
                         dim.name.includes('Industry') ? 'Submit projects to ENR rankings and NAPA awards. Nicole to publish thought leadership on LinkedIn.' :
                         dim.name.includes('Overall') ? 'Every action item in this engagement exists to close this gap. The centennial is the forcing function.' :
                         'Address through the cross-cutting strategy recommendations in the action items.'}
                      </div>
                    </div>
                  </div>
                )}
              </Card>
            );
          })}

          <Divider label="The Perception Gap" />
          <Lbl>What the Family Knows vs. What the World Sees</Lbl>
          <div style={{ display: 'grid', gap: '8px', marginTop: '8px' }}>
            {BRAND_PERCEPTION.perceptionGap.map((gap, i) => (
              <Card key={i} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0' }}>
                <div style={{ padding: '12px 16px', borderRight: `1px solid ${C.border}` }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: '#22C55E', textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>What the family knows</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{gap.familyKnows}</div>
                </div>
                <div style={{ padding: '12px 16px', background: 'rgba(239,68,68,0.03)' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.red, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>What the world sees</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, fontStyle: 'italic' }}>{gap.worldSees}</div>
                </div>
              </Card>
            ))}
          </div>
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
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Each gap includes what it means for Duininck specifically and the action to close it. Sorted by severity.</Body>

          {GAPS.map((gap, i) => (
            <Card key={i} style={{ marginBottom: '12px', borderLeft: `3px solid ${gap.severity === 'Critical' ? C.red : C.orange}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{gap.gap}</div>
                <div style={{ display: 'flex', gap: '6px' }}>
                  <Chip color={gap.severity === 'Critical' ? C.red : C.orange}>{gap.severity}</Chip>
                  <Chip color={gap.source === 'CONFIRMED' ? '#22C55E' : C.accent}>{gap.source}</Chip>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div style={{ padding: '8px 10px', background: 'rgba(239,68,68,0.04)', borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.red, textTransform: 'uppercase', marginBottom: '3px' }}>Current State</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{gap.current}</div>
                </div>
                <div style={{ padding: '8px 10px', background: 'rgba(34,197,94,0.04)', borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: '#22C55E', textTransform: 'uppercase', marginBottom: '3px' }}>Desired State</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{gap.desired}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', paddingTop: '8px', borderTop: `1px solid ${C.borderSoft}` }}>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>What this means</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.text }}>{gap.whatItMeans}</div>
                </div>
                <div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', marginBottom: '3px' }}>What we do about it</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>{gap.whatWeDo}</div>
                </div>
              </div>
            </Card>
          ))}
        </div>
      )}
    </div>
  );
}
