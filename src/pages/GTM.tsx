import { useState } from 'react';
import { GTM_STRATEGY, GTM_CAMPAIGNS, GTM_STEERING } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, Divider, ProgressBar, C } from '../components/ui';

const TABS = ['Strategy', 'Performance', 'Campaigns', 'Steering Log', 'Weekly Synthesis'];

export default function GTMPage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expandedPillar, setExpandedPillar] = useState<number | null>(null);

  const statusColor = (s: string) =>
    s === 'Active' ? '#22C55E' : s === 'In Progress' ? C.amber : s === 'Not Started' ? C.muted : C.accent;

  return (
    <div>
      <SectionHeader num="09 / GTM" title="Go-to-Market" sub="Strategy pillars, performance tracking, campaign library, and steering decisions." />

      <Callout>
        This is the operational layer that connects research to action. Strategy defines where to go. Performance tracks whether we're getting there. Campaigns log what we've tried. The steering log captures whether insights are worth acting on or just noting.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ===== TAB 1: STRATEGY ===== */}
      {tab === 'Strategy' && (
        <div>
          <Card style={{ borderTop: `3px solid ${C.accent}`, background: C.accentGlow, marginTop: '16px', marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.accent, lineHeight: 1.6 }}>{GTM_STRATEGY.overview}</div>
          </Card>

          <Divider label="Strategic Pillars" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {GTM_STRATEGY.pillars.map((pillar, i) => {
              const isExpanded = expandedPillar === i;
              return (
                <Card key={i} onClick={() => setExpandedPillar(isExpanded ? null : i)} style={{ cursor: 'pointer', borderLeft: `4px solid ${statusColor(pillar.status)}` }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{pillar.name}</div>
                    <Chip color={statusColor(pillar.status)}>{pillar.status}</Chip>
                  </div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5, marginBottom: '8px' }}>{pillar.description}</div>

                  <div style={{ display: 'flex', gap: '8px' }}>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{pillar.timeline}</span>
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent }}>{pillar.owner}</span>
                  </div>

                  {isExpanded && (
                    <div style={{ marginTop: '10px', paddingTop: '10px', borderTop: `1px solid ${C.border}` }}>
                      <Lbl>KPIs</Lbl>
                      {pillar.kpis.map((kpi, j) => (
                        <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '2px 0' }}>
                          <span style={{ color: C.accent }}>&#x25CF;</span> {kpi}
                        </div>
                      ))}
                    </div>
                  )}
                </Card>
              );
            })}
          </div>

          <Divider label="Timing Windows" />
          <div style={{ position: 'relative', paddingLeft: '20px', borderLeft: `2px solid ${C.accent}20` }}>
            {GTM_STRATEGY.timingWindows.map((tw, i) => {
              const urgencyColor = tw.urgency === 'Immediate' ? C.red : tw.urgency === 'Critical' ? C.orange : tw.urgency === 'Milestone' ? '#22C55E' : tw.urgency === 'Market' ? C.amber : C.accent;
              return (
                <div key={i} style={{ position: 'relative', marginBottom: '16px' }}>
                  <div style={{ position: 'absolute', left: '-26px', top: '4px', width: '12px', height: '12px', borderRadius: '50%', background: urgencyColor, border: '2px solid #fff' }} />
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: urgencyColor, marginBottom: '2px' }}>{tw.window}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>{tw.action}</div>
                  <Chip color={urgencyColor}>{tw.urgency}</Chip>
                </div>
              );
            })}
          </div>
        </div>
      )}

      {/* ===== TAB 2: PERFORMANCE ===== */}
      {tab === 'Performance' && (
        <div>
          <Divider label="Performance Dashboard" />
          <Block variant="amber" style={{ marginBottom: '16px' }}>
            <strong>Future state:</strong> This dashboard will connect to Google Analytics, Meta Business Suite, LinkedIn Analytics, and Google Search Console. Live metrics will replace these placeholders once Nicole provides access.
          </Block>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
            {[
              { source: 'Google Analytics', metrics: [['Monthly visitors'], ['Bounce rate'], ['Top pages'], ['Traffic sources'], ['Goal conversions']], status: 'Not Connected', icon: '📊', note: '', lastUpdated: '' },
              { source: 'LinkedIn Analytics', metrics: [['Followers · Duininck Inc.', '2,662'], ['Followers · Duininck Concrete', '446'], ['Post engagement rate'], ['Profile views'], ['Company page clicks']], status: 'Manual Tracking', icon: '💼', note: 'Duininck Concrete: Transitioning followers to main Duininck page', lastUpdated: 'Apr 8, 2026' },
              { source: 'Google Search Console', metrics: [['Keyword impressions'], ['Click-through rate'], ['Average position'], ['Top queries'], ['Index coverage']], status: 'Not Connected', icon: '🔍', note: '', lastUpdated: '' },
            ].map((ds, i) => (
              <Card key={i} style={{ padding: '16px', borderTop: `3px solid ${ds.status === 'Manual Tracking' ? C.amber : C.border}` }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{ds.icon}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{ds.source}</div>
                <Chip color={ds.status === 'Manual Tracking' ? C.amber : C.muted}>{ds.status}</Chip>
                <div style={{ marginTop: '10px' }}>
                  {ds.metrics.map((m, j) => (
                    <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: m[1] ? C.text : C.ghost, padding: '2px 0' }}>
                      {m[0]}: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: m[1] ? C.accent : C.border, fontWeight: m[1] ? 600 : 400 }}>{m[1] || '---'}</span>
                    </div>
                  ))}
                  {ds.note && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '6px', fontStyle: 'italic' }}>{ds.note}</div>}
                  {ds.lastUpdated && <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '4px' }}>Last updated: {ds.lastUpdated}</div>}
                </div>
              </Card>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            {[
              { source: 'Meta Ads Manager', metrics: ['Ad spend', 'Reach', 'Click-through rate', 'Cost per click', 'Conversions'], status: 'Not Connected', icon: '📱' },
              { source: 'Indeed Analytics', metrics: ['Job posting views', 'Application starts', 'Application completions', 'Source tracking', 'Competitor comparison'], status: 'Not Connected', icon: '📋' },
              { source: 'Glassdoor', metrics: ['Rating trend', 'Review count', 'Rating vs competitors', 'CEO approval', 'Recommend to friend %'], status: 'Manual Tracking', icon: '⭐' },
            ].map((ds, i) => (
              <Card key={i} style={{ padding: '16px', borderTop: `3px solid ${C.border}` }}>
                <div style={{ fontSize: '24px', marginBottom: '8px' }}>{ds.icon}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, marginBottom: '4px' }}>{ds.source}</div>
                <Chip color={ds.status === 'Manual Tracking' ? C.amber : C.muted}>{ds.status}</Chip>
                <div style={{ marginTop: '10px' }}>
                  {ds.metrics.map((m, j) => (
                    <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.ghost, padding: '2px 0' }}>
                      {m}: <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.border }}>---</span>
                    </div>
                  ))}
                </div>
              </Card>
            ))}
          </div>
        </div>
      )}

      {/* ===== TAB 3: CAMPAIGNS ===== */}
      {tab === 'Campaigns' && (
        <div>
          <Divider label="Campaign Library" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>
            Every campaign gets logged here with its objective, audience, channels, spend, results, and key learnings. This creates an institutional memory that prevents repeating mistakes and amplifies what works.
          </Body>

          {GTM_CAMPAIGNS.length === 0 ? (
            <Card style={{ padding: '32px', textAlign: 'center', borderStyle: 'dashed', borderWidth: '2px', borderColor: C.border }}>
              <div style={{ fontSize: '32px', marginBottom: '12px', opacity: 0.3 }}>📋</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 600, color: C.muted, marginBottom: '6px' }}>No campaigns logged yet</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.ghost, maxWidth: '400px', margin: '0 auto' }}>
                When campaigns launch, each entry will include: objective, audience targeted, channels used, spend, results, key learnings, and a steering recommendation.
              </div>
            </Card>
          ) : (
            <Card style={{ overflowX: 'auto' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
                <thead>
                  <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                    {['Campaign', 'Channel', 'Audience', 'Goal', 'Spend', 'Results', 'Learnings', 'Status'].map(h => (
                      <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {GTM_CAMPAIGNS.map((c, i) => (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>{c.name}</td>
                      <td style={{ padding: '8px', color: C.sub }}>{c.channel}</td>
                      <td style={{ padding: '8px', color: C.sub }}>{c.audience}</td>
                      <td style={{ padding: '8px', color: C.sub }}>{c.goal}</td>
                      <td style={{ padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px' }}>{c.spend}</td>
                      <td style={{ padding: '8px', color: C.sub }}>{c.results}</td>
                      <td style={{ padding: '8px', color: C.sub }}>{c.learnings}</td>
                      <td style={{ padding: '8px' }}><Chip color={C.accent}>{c.status}</Chip></td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </Card>
          )}

          <Block variant="blue" style={{ marginTop: '16px' }}>
            <strong>Planned first campaigns:</strong> Glassdoor review activation (employer brand), golf Instagram restart (portfolio showcase), and centennial content countdown (pre-event awareness). These will be logged here once launched.
          </Block>
        </div>
      )}

      {/* ===== TAB 4: STEERING LOG ===== */}
      {tab === 'Steering Log' && (
        <div>
          <Divider label="Steering Decision System" />
          <Body style={{ fontSize: '12px', color: C.sub, marginBottom: '12px' }}>
            Every market signal, competitive move, and campaign insight gets classified as either "log only" (worth knowing but no action needed) or "action required" (needs a decision or response). This prevents two failure modes: ignoring important signals and overreacting to noise.
          </Body>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <Card style={{ borderTop: `3px solid ${C.blue}`, padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Chip color={C.blue}>Log Only</Chip>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>Worth knowing</div>
              </div>
              <Body style={{ fontSize: '11px', marginBottom: 0 }}>
                Competitive activity, market trends, industry news, and observations that inform context but don't require a change in strategy. Reviewed weekly. May escalate to "action required" if patterns emerge.
              </Body>
            </Card>
            <Card style={{ borderTop: `3px solid ${C.orange}`, padding: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '6px' }}>
                <Chip color={C.orange}>Action Required</Chip>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>Needs a response</div>
              </div>
              <Body style={{ fontSize: '11px', marginBottom: 0 }}>
                Insights that require a strategic decision, budget allocation, content change, or competitive response. Each action-required item gets assigned an owner and a deadline.
              </Body>
            </Card>
          </div>

          {GTM_STEERING.length === 0 ? (
            <Card style={{ padding: '32px', textAlign: 'center', borderStyle: 'dashed', borderWidth: '2px', borderColor: C.border }}>
              <div style={{ fontSize: '32px', marginBottom: '12px', opacity: 0.3 }}>🧭</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 600, color: C.muted, marginBottom: '6px' }}>No steering decisions logged yet</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.ghost, maxWidth: '400px', margin: '0 auto' }}>
                As the engagement progresses, market signals and campaign results will be logged here with a "log only" or "action required" classification.
              </div>
            </Card>
          ) : (
            GTM_STEERING.map((entry, i) => (
              <Card key={i} style={{ marginBottom: '8px', borderLeft: `3px solid ${entry.type === 'action' ? C.orange : C.blue}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Chip color={entry.type === 'action' ? C.orange : C.blue}>{entry.type === 'action' ? 'Action Required' : 'Log Only'}</Chip>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{entry.date}</span>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text, marginTop: '6px' }}>{entry.insight}</div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '4px' }}>Source: {entry.source}</div>
                {entry.action && <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.orange, marginTop: '4px', fontWeight: 600 }}>Action: {entry.action}</div>}
              </Card>
            ))
          )}
        </div>
      )}

      {/* ===== TAB 5: WEEKLY SYNTHESIS ===== */}
      {tab === 'Weekly Synthesis' && (
        <div>
          <Divider label="Weekly Synthesis View" />
          <Block variant="amber" style={{ marginBottom: '16px' }}>
            <strong>Future state:</strong> This view will aggregate campaign performance, news feed highlights, and steering decisions into a weekly rollup. Eventually, AI-generated recommendations will surface the most important insights, reviewed by humans who classify each as "log only" or "action required."
          </Block>

          <Card style={{ padding: '24px', borderStyle: 'dashed', borderWidth: '2px', borderColor: C.border, marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.muted, marginBottom: '12px' }}>Weekly Synthesis Template</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '12px', marginBottom: '16px' }}>
              <div style={{ padding: '12px', background: C.s2, borderRadius: '8px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '4px' }}>Campaign Performance</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.ghost }}>Which campaigns moved metrics this week? What underperformed? What should scale?</div>
              </div>
              <div style={{ padding: '12px', background: C.s2, borderRadius: '8px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '4px' }}>Market Signals</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.ghost }}>What did competitors do? What industry news matters? What changed in the landscape?</div>
              </div>
              <div style={{ padding: '12px', background: C.s2, borderRadius: '8px' }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '4px' }}>Steering Decisions</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.ghost }}>What needs a decision this week? What should we start, stop, or continue?</div>
              </div>
            </div>

            <div style={{ padding: '12px', background: C.accentGlow, borderRadius: '8px', border: `1px solid ${C.accent}20` }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', marginBottom: '4px' }}>AI-Generated Recommendation (Future)</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.accent }}>
                Based on this week's data, the highest-impact action is [recommendation]. This connects to the [pillar] strategy pillar and would affect [audience segment]. Classified as: [log only / action required].
              </div>
            </div>
          </Card>

          <Card style={{ padding: '16px' }}>
            <Lbl>How the Weekly Cadence Will Work</Lbl>
            {[
              { step: 'Monday', action: 'Auto-pull metrics from connected sources (GA, LinkedIn, Indeed)' },
              { step: 'Tuesday', action: 'AI generates synthesis draft with recommendations' },
              { step: 'Wednesday', action: 'Nicole reviews. Classifies each insight as "log" or "action."' },
              { step: 'Thursday', action: 'Action items assigned to owners with deadlines' },
              { step: 'Friday', action: 'Quick standup: what shipped, what\'s blocked, what\'s next week' },
            ].map((item, i) => (
              <div key={i} style={{ display: 'flex', gap: '12px', padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', fontWeight: 700, color: C.accent, width: '80px', flexShrink: 0 }}>{item.step}</div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>{item.action}</div>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
