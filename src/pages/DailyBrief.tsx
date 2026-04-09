import { SectionHeader, Card, Chip, Divider, C } from '../components/ui';

// ---- SPARKLINE ----
const Spark = ({ bars, color }: { bars: number[]; color: string }) => (
  <div style={{ display: 'flex', gap: '2px', alignItems: 'flex-end', height: '20px' }}>
    {bars.map((h, i) => (
      <div key={i} style={{ width: '6px', height: `${h}%`, background: color, borderRadius: '2px 2px 0 0', opacity: 0.15 + (i / bars.length) * 0.85 }} />
    ))}
  </div>
);

// ---- STRATEGY TENETS ----
const TENETS = [
  { name: 'Centennial Awareness', status: 'BUILDING MOMENTUM', color: C.success, bars: [25, 35, 40, 55, 70, 85], insight: 'Community is already telling the centennial story unprompted — before the campaign launches.', signals: '11 signals · 3 centennial flags' },
  { name: 'Employer Brand', status: 'NEEDS ATTENTION', color: C.amber, bars: [30, 28, 32, 30, 29, 31], insight: "No employer sentiment signals this week. Knife River posted 4 hiring content pieces. Duininck's whole person story is silent.", signals: '0 signals · competitor active' },
  { name: 'Golf Social Restart', status: 'AT RISK', color: C.red, bars: [5, 5, 5, 5, 5, 5], insight: 'Golf pipeline at 18-year high. Architects selecting builders now. Zero Duininck Golf digital presence detected this week.', signals: '0 signals · window closing' },
  { name: 'Construction Season', status: 'ON TRACK', color: C.success, bars: [30, 35, 40, 42, 50, 58], insight: 'Season kickoff posts landing well. NSDM safety content on-register. Community mentions of active projects starting to appear.', signals: '6 signals · 2 crew mentions' },
  { name: 'Brand Unification', status: 'MONITORING', color: C.blue, bars: [40, 42, 40, 41, 40, 42], insight: 'Duininck Concrete page actively redirecting 446 followers to main Duininck page. Green rebrand rollout proceeding without confusion signals.', signals: '4 signals · 0 concern flags' },
];

// ---- SENTIMENT ----
const SENTIMENTS = [
  { tone: 'Community Pride', count: 7, pct: 100, color: C.success, snippet: '"That company has been doing roads around here as long as I can remember."' },
  { tone: 'Brand Trust', count: 4, pct: 57, color: C.success, snippet: '"Showed up exactly when they said, cleaned up completely after."' },
  { tone: 'Gratitude', count: 3, pct: 43, color: C.teal, snippet: '"Very accommodating crew — 5 stars."' },
  { tone: 'Employer Sentiment', count: 2, pct: 29, color: C.blue, snippet: '"Wondering if Duininck is hiring CDL drivers this spring."' },
  { tone: 'Concern', count: 1, pct: 14, color: C.amber, snippet: '"Construction on Hwy 12 causing delays."', note: 'LOW REACH' },
  { tone: 'Neutral/Informational', count: 2, pct: 29, color: C.muted, snippet: '"Does anyone know the Duininck project timeline for the CR 10 work?"' },
];

// ---- RECOMMENDATIONS ----
const RECS = [
  { urgency: 'HIGH — Do this week', color: C.red, title: 'Activate Duininck Golf on LinkedIn', rationale: "Golf construction pipeline at 18-year high. Architects selecting builders now. Every week without presence is a week competitors get found first.", action: 'Write activation post →', secondary: 'View golf pipeline intelligence' },
  { urgency: 'HIGH — Do this week', color: C.red, title: 'Post employer brand content before Knife River owns the conversation', rationale: "Knife River posted 4 hiring pieces this week. Duininck has the better story — whole person, four generations, Willmar roots. But silence loses the comparison.", action: 'Write employer brand post →', secondary: 'View competitor activity' },
  { urgency: 'MEDIUM — This month', color: C.amber, title: 'Pitch the centennial story to MinnPost before July 25 window closes', rationale: "Organic heritage signals already building in the community. Pre-event coverage amplifies the July 25 launch. 8–10 week lead time for features.", action: 'Draft MinnPost pitch →', secondary: 'View centennial signals' },
  { urgency: 'MEDIUM — This month', color: C.amber, title: 'Respond to the crew professionalism Google Review from Willmar', rationale: "5-star review with specific crew behavior language. Responding signals active community engagement and surfaces the review for other readers.", action: 'Draft response →', secondary: 'View full review' },
];

// ---- AGENTS ----
const AGENTS = [
  { name: 'Brand Mention Collector', status: 'Done', time: 'Apr 8 · 5:02 AM', items: '23 items' },
  { name: 'Filter Agent', status: 'Done', time: 'Apr 8 · 5:04 AM', items: '13 kept' },
  { name: 'Analysis Agent', status: 'Done', time: 'Apr 8 · 5:06 AM', items: 'Digest ready' },
  { name: 'Competitor Agent', status: 'Done', time: 'Apr 8 · 5:08 AM', items: '5 competitors' },
  { name: 'Spike Detection', status: 'Done', time: 'Apr 8 · 4:00 AM', items: '0 alerts fired' },
];

const F = { body: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace" };
const actionBtn = { fontFamily: F.mono, fontSize: '9px', color: '#fff', background: C.success, border: 'none', padding: '6px 14px', borderRadius: '6px', cursor: 'pointer', fontWeight: 600 as const, letterSpacing: '0.02em' };
const ghostBtn = { fontFamily: F.mono, fontSize: '8px', color: C.accent, background: 'none', border: `1px solid ${C.accent}30`, padding: '4px 10px', borderRadius: '6px', cursor: 'pointer' };

export default function DailyBriefPage() {
  return (
    <div>
      {/* HEADER */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '28px' }}>
        <div>
          <SectionHeader num="Intelligence" title="Daily Intelligence Brief" sub="April 8, 2026 · Updated overnight by StartSuite agents · Next refresh: Tomorrow 5:00 AM CT" />
        </div>
        <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.success, background: C.successDim, padding: '4px 10px', borderRadius: '8px', border: `1px solid ${C.success}30`, whiteSpace: 'nowrap', marginTop: '4px', textTransform: 'uppercase', letterSpacing: '0.08em', fontWeight: 600 }}>
          Agents Active · 5 running
        </div>
      </div>

      {/* ===== SECTION 1: STRATEGY HEALTH ===== */}
      <Divider label="Strategy Tenet Health" />
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>How each active priority is tracking against signal volume, sentiment, and momentum.</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '24px' }}>
        {TENETS.map((t, i) => (
          <Card key={i} style={{ padding: '16px', borderLeft: `3px solid ${t.color}` }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontFamily: F.body, fontSize: '14px', fontWeight: 700, color: C.text }}>{t.name}</div>
              <Chip color={t.color}>{t.status}</Chip>
            </div>
            <Spark bars={t.bars} color={t.color} />
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, lineHeight: 1.5, marginTop: '8px' }}>{t.insight}</div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginTop: '8px' }}>
              <span style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted }}>{t.signals}</span>
              <span style={{ fontFamily: F.mono, fontSize: '8px', color: C.accent, cursor: 'pointer' }}>View signals &#8599;</span>
            </div>
          </Card>
        ))}
      </div>

      {/* ===== SECTION 2: SENTIMENT ===== */}
      <Divider label="Emotional Tone This Week" />
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>How the community is talking about Duininck. Not positive vs. negative — what they actually feel.</div>

      <Card style={{ padding: '20px', marginBottom: '10px' }}>
        {SENTIMENTS.map((s, i) => (
          <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '12px', padding: '8px 0', borderBottom: i < SENTIMENTS.length - 1 ? `1px solid ${C.borderSoft}` : 'none' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', fontWeight: 600, color: C.text, width: '140px', flexShrink: 0 }}>{s.tone}</div>
            <div style={{ flex: 1, height: '10px', background: C.s2, borderRadius: '4px', overflow: 'hidden' }}>
              <div style={{ height: '100%', width: `${s.pct}%`, background: s.color, borderRadius: '4px', transition: 'width 0.3s' }} />
            </div>
            <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.text, width: '80px', flexShrink: 0, textAlign: 'right' }}>
              {s.count} mention{s.count !== 1 ? 's' : ''}
              {s.note && <span style={{ color: C.amber, marginLeft: '4px', fontSize: '7px' }}>{s.note}</span>}
            </div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, fontStyle: 'italic', flex: 1.5, minWidth: 0 }}>{s.snippet}</div>
          </div>
        ))}
      </Card>

      <Card style={{ padding: '14px 18px', background: `${C.success}06`, border: `1px solid ${C.success}20`, marginBottom: '24px' }}>
        <div style={{ fontFamily: F.body, fontSize: '12px', color: C.success, lineHeight: 1.6 }}>
          <strong>Centennial signal detected:</strong> 2 mentions used organic heritage language this week before any campaign was active. This is a strong leading indicator that the July 25 messaging will land.
        </div>
      </Card>

      {/* ===== SECTION 3: OPPORTUNITIES ===== */}
      <Divider label="Opportunities to Act On" />

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '24px' }}>
        {/* Col 1: Mentions */}
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Mentions Worth Amplifying</div>

          <Card style={{ padding: '14px', marginBottom: '8px', borderLeft: `3px solid ${C.success}` }}>
            <Chip color={C.success}>Community Pride</Chip>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '6px' }}>Google Reviews · Willmar location</div>
            <div style={{ fontFamily: F.body, fontSize: '12px', color: C.text, fontStyle: 'italic', lineHeight: 1.5, margin: '8px 0' }}>"Very accommodating crew! They worked around our schedule and cleaned up after themselves. Would hire again."</div>
            <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.amber, marginBottom: '8px' }}>★★★★★</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginBottom: '8px' }}>Crew professionalism in the wild. This is gratitude language that feeds directly into the employer brand story.</div>
            <button style={actionBtn}>Use as content inspiration →</button>
          </Card>

          <Card style={{ padding: '14px', borderLeft: `3px solid ${C.orange}` }}>
            <Chip color={C.orange}>Centennial Signal</Chip>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '6px' }}>Facebook comment</div>
            <div style={{ fontFamily: F.body, fontSize: '12px', color: C.text, fontStyle: 'italic', lineHeight: 1.5, margin: '8px 0' }}>"That company has been doing roads around here as long as I can remember. Good people."</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginBottom: '8px' }}>Unprompted community heritage language — the kind of organic signal that validates the centennial campaign direction.</div>
            <button style={actionBtn}>Flag for Nicole →</button>
          </Card>
        </div>

        {/* Col 2: Publications */}
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Publications to Partner With</div>

          {[
            { pub: 'Construction Dive', reach: '225,000+ readers', coverage: "Just published workforce demand report directly relevant to Duininck's hiring market — MN/SD/TX hardest hit regions.", angle: 'Employer brand story + whole person framework is a compelling counter-narrative to the labor shortage coverage.' },
            { pub: 'Golf Course Industry', reach: 'Golf course operators and architects', coverage: '140+ project pipeline coverage — architects actively selecting builders.', angle: "Duininck Golf's Hazeltine, Erin Hills portfolio is exactly what this audience wants to see. Case study pitch." },
            { pub: 'MinnPost', reach: 'Minnesota business and civic audience', coverage: 'Regional infrastructure and workforce coverage.', angle: 'Centennial story has strong regional angle — 100 years of Minnesota infrastructure. Perfect for pre-July 25 coverage.' },
          ].map((p, i) => (
            <Card key={i} style={{ padding: '14px', marginBottom: '8px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 700, color: C.text }}>{p.pub}</div>
              <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '2px' }}>{p.reach}</div>
              <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, margin: '8px 0' }}><strong>Recent:</strong> {p.coverage}</div>
              <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, marginBottom: '8px' }}><strong>Angle:</strong> {p.angle}</div>
              <button style={actionBtn}>Draft outreach email →</button>
            </Card>
          ))}
        </div>

        {/* Col 3: Content Gaps */}
        <div>
          <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '8px' }}>Content Gap Alerts</div>

          <Card style={{ padding: '14px', marginBottom: '8px', borderLeft: `3px solid ${C.amber}` }}>
            <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 700, color: C.amber }}>Employer Brand — 3 days without a post</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, margin: '8px 0' }}><strong>Signal:</strong> 2 prospective employee mentions on Reddit and Facebook this week — they're looking.</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, marginBottom: '8px' }}><strong>Recommendation:</strong> Post the whole person framework story. Show what a career at Duininck actually looks like beyond job listings.</div>
            <button style={actionBtn}>Write this post →</button>
          </Card>

          <Card style={{ padding: '14px', borderLeft: `3px solid ${C.red}` }}>
            <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 700, color: C.red }}>Golf — 0 posts in 6 weeks</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, margin: '8px 0' }}><strong>Signal:</strong> Golf pipeline at 18-year high. Architects choosing builders now.</div>
            <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, lineHeight: 1.5, marginBottom: '8px' }}><strong>Recommendation:</strong> Share one completed course from the portfolio. No talking head needed — just the course, the craft, the result.</div>
            <button style={actionBtn}>Write this post →</button>
          </Card>
        </div>
      </div>

      {/* ===== SECTION 4: RECOMMENDATIONS ===== */}
      <Divider label="What to Do Today" />
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>Agent-generated recommendations ranked by strategic urgency.</div>

      {RECS.map((r, i) => (
        <Card key={i} style={{ padding: '16px', marginBottom: '8px', borderLeft: `3px solid ${r.color}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <Chip color={r.color}>{r.urgency}</Chip>
          </div>
          <div style={{ fontFamily: F.body, fontSize: '15px', fontWeight: 700, color: C.text, marginBottom: '6px' }}>{r.title}</div>
          <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '12px' }}>{r.rationale}</div>
          <div style={{ display: 'flex', gap: '8px', alignItems: 'center' }}>
            <button style={actionBtn}>{r.action}</button>
            <button style={ghostBtn}>{r.secondary}</button>
          </div>
        </Card>
      ))}

      {/* ===== SECTION 5: AGENT STATUS ===== */}
      <Divider label="Overnight Agent Activity" />

      <Card style={{ padding: '16px', marginBottom: '8px', overflowX: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F.body, fontSize: '12px' }}>
          <thead>
            <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
              {['Agent', 'Status', 'Last Run', 'Items'].map(h => (
                <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {AGENTS.map((a, i) => (
              <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                <td style={{ padding: '8px', fontWeight: 600 }}>{a.name}</td>
                <td style={{ padding: '8px' }}><span style={{ color: C.success }}>✅</span> {a.status}</td>
                <td style={{ padding: '8px', fontFamily: F.mono, fontSize: '10px', color: C.muted }}>{a.time}</td>
                <td style={{ padding: '8px', fontFamily: F.mono, fontSize: '10px', color: C.sub }}>{a.items}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </Card>
      <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.ghost, marginBottom: '24px' }}>
        Agents run nightly at 5:00 AM CT. Spike detection runs every 4 hours. Next full run: Apr 9 · 5:00 AM CT
      </div>

      {/* FOOTER */}
      <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.ghost, textAlign: 'center', padding: '16px 0', borderTop: `1px solid ${C.borderSoft}` }}>
        This brief is generated by StartSuite agents reading from your monitored sources. Recommendations are calibrated to Duininck's active brand strategy and condensed brief. · Powered by StartSuite
      </div>
    </div>
  );
}
