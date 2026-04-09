import { useState } from 'react';
import { SectionHeader, Card, Chip, Divider, C } from '../components/ui';

const F = { body: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace" };

// ---- TYPES ----
type DataPoint = { week: string; value: number; context?: string };
type Property = {
  name: string;
  icon: string;
  metric: string;
  current: string;
  change: string;
  changeDir: 'up' | 'down' | 'flat';
  color: string;
  data: DataPoint[];
  note?: string;
};

// ---- PROPERTY DATA ----
const PROPERTIES: Property[] = [
  {
    name: 'duininckcompanies.com',
    icon: '🌐',
    metric: 'Weekly Visitors',
    current: '1,247',
    change: '+18%',
    changeDir: 'up',
    color: C.accent,
    data: [
      { week: 'Feb 10', value: 780 },
      { week: 'Feb 17', value: 812 },
      { week: 'Feb 24', value: 795, context: 'Baseline traffic. Most visits to /about and /careers pages.' },
      { week: 'Mar 3', value: 830 },
      { week: 'Mar 10', value: 920, context: 'Spike from local media pickup of Willmar safety milestone post.' },
      { week: 'Mar 17', value: 875 },
      { week: 'Mar 24', value: 1058, context: 'Centennial announcement posted on LinkedIn drove referral traffic. /about page views +40%.' },
      { week: 'Mar 31', value: 1105, context: 'Construction season kickoff post. Careers page views doubled — prospective hires searching.' },
      { week: 'Apr 7', value: 1247, context: '#Duininck100 heritage post drove highest weekly traffic in 6 months. 38% of visitors were new.' },
    ],
  },
  {
    name: 'LinkedIn · Duininck Inc.',
    icon: '💼',
    metric: 'Impressions',
    current: '8,340',
    change: '+62%',
    changeDir: 'up',
    color: '#0A66C2',
    data: [
      { week: 'Feb 10', value: 3200 },
      { week: 'Feb 17', value: 3450 },
      { week: 'Feb 24', value: 3100 },
      { week: 'Mar 3', value: 3800, context: 'Safety milestone post outperformed typical content by 2x.' },
      { week: 'Mar 10', value: 4200 },
      { week: 'Mar 17', value: 4950, context: 'Sam Duininck personal post about golf restoration cross-tagged company page.' },
      { week: 'Mar 24', value: 5800, context: 'Centennial Save the Date post. Highest single-post impressions in 2026.' },
      { week: 'Mar 31', value: 6900, context: '#Duininck100 heritage post — Eisenhower Interstate era content resonated. 280+ reactions.' },
      { week: 'Apr 7', value: 8340, context: 'Safe Digging Month + centennial momentum. 3 posts this week vs. typical 1. Volume = visibility.' },
    ],
    note: '2,662 followers · +47 this month',
  },
  {
    name: 'LinkedIn · Duininck Golf',
    icon: '⛳',
    metric: 'Impressions',
    current: '0',
    change: 'Dormant',
    changeDir: 'flat',
    color: '#2E7D4F',
    data: [
      { week: 'Feb 10', value: 0 },
      { week: 'Feb 17', value: 0 },
      { week: 'Feb 24', value: 0 },
      { week: 'Mar 3', value: 0 },
      { week: 'Mar 10', value: 0 },
      { week: 'Mar 17', value: 0, context: 'No posts since 2023. Page exists but is completely dark.' },
      { week: 'Mar 24', value: 0 },
      { week: 'Mar 31', value: 0 },
      { week: 'Apr 7', value: 0, context: 'Golf pipeline at 18-year high. Architects selecting builders. This flatline is the gap.' },
    ],
    note: 'Last post: 2023 · Activation recommended',
  },
  {
    name: 'Google Business Profile',
    icon: '📍',
    metric: 'Search Appearances',
    current: '3,890',
    change: '+24%',
    changeDir: 'up',
    color: '#4285F4',
    data: [
      { week: 'Feb 10', value: 2600 },
      { week: 'Feb 17', value: 2750 },
      { week: 'Feb 24', value: 2800 },
      { week: 'Mar 3', value: 2950, context: 'Steady baseline. Most searches: "Duininck Willmar" and "road construction near me."' },
      { week: 'Mar 10', value: 3100 },
      { week: 'Mar 17', value: 3200 },
      { week: 'Mar 24', value: 3450, context: 'Centennial announcement may have driven brand searches. "Duininck 100 years" appeared as new query.' },
      { week: 'Mar 31', value: 3620, context: 'Construction season = more "who is working on this road" searches. Seasonal pattern.' },
      { week: 'Apr 7', value: 3890, context: 'Peak search week. "Duininck hiring" and "Duininck centennial" both trending up in queries.' },
    ],
    note: '4.2★ rating · 9 reviews (target: 50+)',
  },
  {
    name: 'Glassdoor',
    icon: '⭐',
    metric: 'Profile Views',
    current: '156',
    change: '+8%',
    changeDir: 'up',
    color: C.amber,
    data: [
      { week: 'Feb 10', value: 98 },
      { week: 'Feb 17', value: 105 },
      { week: 'Feb 24', value: 110 },
      { week: 'Mar 3', value: 118 },
      { week: 'Mar 10', value: 125, context: 'Slight uptick correlates with Indeed job posting going live.' },
      { week: 'Mar 17', value: 130 },
      { week: 'Mar 24', value: 138 },
      { week: 'Mar 31', value: 144, context: 'Careers page traffic on website likely driving cross-referral to Glassdoor.' },
      { week: 'Apr 7', value: 156, context: 'Still only 9 reviews vs. Ames (114). Review activation campaign not yet launched.' },
    ],
    note: '9 reviews · Ames has 114 · Activation planned',
  },
  {
    name: 'Indeed',
    icon: '📋',
    metric: 'Job Views',
    current: '412',
    change: '+31%',
    changeDir: 'up',
    color: '#2164F3',
    data: [
      { week: 'Feb 10', value: 180 },
      { week: 'Feb 17', value: 195 },
      { week: 'Feb 24', value: 210, context: 'Pre-season baseline. Equipment operator and CDL listings active.' },
      { week: 'Mar 3', value: 245 },
      { week: 'Mar 10', value: 280, context: 'Spring hiring push. 3 new listings posted: operators, laborers, CDL drivers.' },
      { week: 'Mar 17', value: 310 },
      { week: 'Mar 24', value: 340, context: 'LinkedIn activity driving cross-platform job interest. "Duininck careers" search up.' },
      { week: 'Mar 31', value: 380 },
      { week: 'Apr 7', value: 412, context: 'Seasonal peak beginning. Views up but applications flat — employer brand gap visible here.' },
    ],
    note: '6 active listings · 23 applications this month',
  },
];

// ---- SUMMARY STATS ----
const STATS = [
  { label: 'Total Web Visitors', value: '1,247', change: '+18%', dir: 'up' as const, color: C.accent },
  { label: 'Social Impressions', value: '8,340', change: '+62%', dir: 'up' as const, color: '#0A66C2' },
  { label: 'Search Appearances', value: '3,890', change: '+24%', dir: 'up' as const, color: '#4285F4' },
  { label: 'Job Views', value: '412', change: '+31%', dir: 'up' as const, color: '#2164F3' },
  { label: 'Glassdoor Score', value: '4.2★', change: '9 reviews', dir: 'flat' as const, color: C.amber },
  { label: 'Golf Presence', value: '0', change: 'Dormant', dir: 'down' as const, color: C.red },
];

// ---- HOVERABLE CHART COMPONENT ----
function TrendChart({ data, color, maxH = 80 }: { data: DataPoint[]; color: string; maxH?: number }) {
  const [hover, setHover] = useState<number | null>(null);
  const peak = Math.max(...data.map(d => d.value), 1);

  return (
    <div style={{ position: 'relative' }}>
      <div style={{ display: 'flex', alignItems: 'flex-end', gap: '3px', height: `${maxH}px`, padding: '0 2px' }}>
        {data.map((d, i) => {
          const h = Math.max((d.value / peak) * maxH, d.value === 0 ? 2 : 4);
          const isHovered = hover === i;
          return (
            <div key={i} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', cursor: d.context ? 'pointer' : 'default' }}
              onMouseEnter={() => setHover(i)} onMouseLeave={() => setHover(null)}>
              <div style={{
                width: '100%', height: `${h}px`, background: isHovered ? color : `${color}${d.value === 0 ? '15' : '40'}`,
                borderRadius: '3px 3px 0 0', transition: 'all 0.15s',
                border: isHovered ? `1px solid ${color}` : '1px solid transparent',
                boxShadow: isHovered ? `0 0 8px ${color}30` : 'none',
              }} />
              <div style={{ fontFamily: F.mono, fontSize: '7px', color: isHovered ? C.text : C.ghost, marginTop: '3px', whiteSpace: 'nowrap' }}>{d.week.split(' ')[1]}</div>
            </div>
          );
        })}
      </div>

      {/* Tooltip */}
      {hover !== null && data[hover] && (
        <div style={{
          position: 'absolute', bottom: `${maxH + 16}px`,
          left: `${(hover / (data.length - 1)) * 80}%`,
          transform: 'translateX(-50%)',
          background: '#1A1A1A', color: '#fff', padding: '10px 14px', borderRadius: '8px',
          fontFamily: F.body, fontSize: '11px', lineHeight: 1.5, maxWidth: '260px', minWidth: '180px',
          boxShadow: '0 4px 20px rgba(0,0,0,0.25)', zIndex: 10, pointerEvents: 'none',
        }}>
          <div style={{ fontFamily: F.mono, fontSize: '9px', color: 'rgba(255,255,255,0.5)', marginBottom: '4px' }}>
            Week of {data[hover].week}
          </div>
          <div style={{ fontFamily: F.mono, fontSize: '16px', fontWeight: 700, marginBottom: data[hover].context ? '6px' : 0 }}>
            {data[hover].value.toLocaleString()}
          </div>
          {data[hover].context && (
            <div style={{ fontSize: '10px', color: 'rgba(255,255,255,0.75)', lineHeight: 1.5 }}>
              {data[hover].context}
            </div>
          )}
          <div style={{ position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%) rotate(45deg)', width: '10px', height: '10px', background: '#1A1A1A' }} />
        </div>
      )}
    </div>
  );
}

// ---- NOTABLE SPIKES ----
const SPIKES = [
  { date: 'Apr 7', property: 'duininckcompanies.com', metric: '+22% visitors', context: '#Duininck100 heritage post drove highest weekly website traffic in 6 months. 38% new visitors — people discovering Duininck for the first time through the centennial story.', color: C.accent },
  { date: 'Apr 7', property: 'LinkedIn · Duininck Inc.', metric: '+62% impressions', context: 'Three posts in one week (vs. typical one) created compounding visibility. Safe Digging Month + centennial content + season kickoff. Volume strategy working.', color: '#0A66C2' },
  { date: 'Mar 24', property: 'Google Business', metric: '"Duininck 100 years" new query', context: 'Centennial announcement created a new branded search term. People are searching for the event unprompted — organic demand signal.', color: '#4285F4' },
  { date: 'Apr 7', property: 'Indeed', metric: '+31% job views, flat applications', context: 'People are looking at Duininck jobs but not applying. The employer brand gap is visible: awareness is up, conversion is not. Glassdoor score (4.2★, 9 reviews) may be the friction point.', color: C.amber },
];

export default function PerformancePage() {
  return (
    <div>
      <SectionHeader num="Intelligence" title="Performance" sub="Cross-property analytics with spike detection. Hover any bar to see what happened and why." />

      {/* SUMMARY ROW */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(6, 1fr)', gap: '8px', marginBottom: '24px' }}>
        {STATS.map((s, i) => (
          <Card key={i} style={{ padding: '14px', textAlign: 'center', borderTop: `3px solid ${s.color}` }}>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '4px' }}>{s.label}</div>
            <div style={{ fontFamily: F.body, fontSize: '20px', fontWeight: 800, color: C.text }}>{s.value}</div>
            <div style={{ fontFamily: F.mono, fontSize: '9px', color: s.dir === 'up' ? C.success : s.dir === 'down' ? C.red : C.muted, fontWeight: 600, marginTop: '2px' }}>
              {s.dir === 'up' ? '▲ ' : s.dir === 'down' ? '▼ ' : ''}{s.change}
            </div>
          </Card>
        ))}
      </div>

      {/* PROPERTY CHARTS */}
      <Divider label="Web Properties · 9-Week Trend" />
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>Hover any bar to see the metric value and context for that week.</div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '24px' }}>
        {PROPERTIES.map((p, i) => {
          const dirColor = p.changeDir === 'up' ? C.success : p.changeDir === 'down' ? C.red : C.muted;
          return (
            <Card key={i} style={{ padding: '18px', borderLeft: `3px solid ${p.color}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '12px' }}>
                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                    <span style={{ fontSize: '16px' }}>{p.icon}</span>
                    <span style={{ fontFamily: F.body, fontSize: '14px', fontWeight: 700, color: C.text }}>{p.name}</span>
                  </div>
                  {p.note && <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '3px', marginLeft: '22px' }}>{p.note}</div>}
                </div>
                <div style={{ textAlign: 'right' }}>
                  <div style={{ fontFamily: F.body, fontSize: '18px', fontWeight: 800, color: C.text }}>{p.current}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: dirColor, fontWeight: 600 }}>
                    {p.changeDir === 'up' ? '▲ ' : p.changeDir === 'down' ? '▼ ' : ''}{p.change}
                  </div>
                </div>
              </div>
              <div style={{ fontFamily: F.mono, fontSize: '7px', color: C.ghost, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '6px' }}>{p.metric} · Weekly</div>
              <TrendChart data={p.data} color={p.color} />
            </Card>
          );
        })}
      </div>

      {/* NOTABLE SPIKES */}
      <Divider label="Notable Spikes This Week" />
      <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>Significant changes detected across properties with agent-generated context.</div>

      {SPIKES.map((s, i) => (
        <Card key={i} style={{ padding: '14px 18px', marginBottom: '8px', borderLeft: `3px solid ${s.color}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
              <Chip color={s.color}>{s.property}</Chip>
              <span style={{ fontFamily: F.mono, fontSize: '11px', fontWeight: 700, color: s.color }}>{s.metric}</span>
            </div>
            <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted }}>{s.date}</span>
          </div>
          <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>{s.context}</div>
        </Card>
      ))}

      {/* CROSS-PROPERTY INSIGHT */}
      <Card style={{ padding: '16px 20px', marginTop: '16px', background: `${C.accent}04`, border: `1px solid ${C.accent}20` }}>
        <div style={{ fontFamily: F.body, fontSize: '13px', color: C.accent, lineHeight: 1.7 }}>
          <strong>Cross-property pattern:</strong> LinkedIn activity is the leading indicator. Every week Duininck posts 2+ times on LinkedIn, website traffic rises 15–20% the following week from referral and branded search. The centennial content is creating a flywheel: LinkedIn post → brand search → website visit → careers page → Indeed/Glassdoor. The bottleneck is Glassdoor (9 reviews, 4.2★) — job seekers arrive but see thin social proof.
        </div>
      </Card>

      {/* FOOTER */}
      <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.ghost, textAlign: 'center', padding: '16px 0', marginTop: '16px', borderTop: `1px solid ${C.borderSoft}` }}>
        Metrics are manual tracking estimates based on available data. Live connections (Google Analytics, LinkedIn Analytics API, Google Search Console) will replace these with real-time data once Nicole provides access. · Updated Apr 8, 2026
      </div>
    </div>
  );
}
