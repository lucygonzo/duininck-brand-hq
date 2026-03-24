import { SectionHeader, Callout, Card, Lbl, Body, ProgressBar, C } from '../components/ui';

export default function ReportCardPage() {
  const sections = [
    { name: 'Company Profile', pct: 95, note: 'Deep research complete: SOS filings, LinkedIn mapping, press coverage, heritage competitors. One open question on employee count (700+ vs. 1,000 on website).' },
    { name: 'Brand Identity', pct: 80, note: 'Archetype, anchor, wedge validated against competitors. Core narrative drafted (3 versions). Wedge corrected: 3 heritage competitors exist in MN.' },
    { name: 'Visual Identity', pct: 55, note: 'Web audit complete: hex codes, fonts, cross-property consistency documented. Source logo vector files needed to finalize.' },
    { name: 'Verbal Identity', pct: 80, note: 'Full tagline inventory scraped from all properties. TWO conflicting value sets discovered. Language patterns documented. Messaging matrix pending.' },
    { name: 'Brand Architecture', pct: 95, note: 'CONFIRMED + validated with 5 unification case studies (Beldon, Quanta, Virgin, Mars, Hung Thinh).' },
    { name: 'Audience Research', pct: 90, note: '8 segments deep researched with channels, funnel leaks, win/loss factors. Trade school pipeline mapped (5 programs). 2 segments added from research.' },
    { name: 'Competitive Analysis', pct: 85, note: '7 competitor profiles complete. Full landscape synthesis with white space, unification benchmarks, heritage context. Glassdoor/Indeed data pulled.' },
    { name: 'Gap Analysis', pct: 90, note: 'Perception score (4.7/10). 4 leaky funnel audits. 5 best-in-class benchmarks. 8 gaps with severity and source.' },
    { name: 'Content Strategy', pct: 60, note: 'Key insights documented. Content benchmarks researched (4% LinkedIn engagement). System design and templates pending.' },
    { name: 'Industry Landscape', pct: 85, note: 'IIJA $4.8B MN, 349K labor gap, golf market expansion, technology adoption, 5 parallel industries, centennial benchmarks, timing windows.' },
    { name: 'Research Pipeline', pct: 80, note: '31 research files completed. Drive vault synced. Remaining: internal comms platform comparison, content system design.' },
  ];

  const avg = Math.round(sections.reduce((s, v) => s + v.pct, 0) / sections.length);

  return (
    <div>
      <SectionHeader num="13 / Workspace" title="Report Card" sub="Brand HQ completion status across all sections. Updated with 31 deep research files." />
      <Callout>
        Overall brand intelligence: <strong>{avg}%</strong> complete. 31 research files covering company profile, 8 audience segments, 7 competitor profiles, digital ecosystem, SEO/GEO, industry trends, perception scoring, funnel audits, and best-in-class benchmarks. Remaining items: source logo files, content system design, and internal comms platform selection.
      </Callout>

      <Card style={{ marginBottom: '24px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
          <Lbl style={{ marginBottom: 0 }}>Overall Completion</Lbl>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '14px', fontWeight: 600, color: C.accent }}>{avg}%</span>
        </div>
        <ProgressBar pct={avg} />
      </Card>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', marginBottom: '20px' }}>
        <Card style={{ borderLeft: `3px solid ${C.success}` }}>
          <Lbl style={{ color: C.success }}>Biggest Jumps (Post-Discovery)</Lbl>
          {[
            { section: 'Brand Architecture', from: 30, to: 90 },
            { section: 'Gap Analysis', from: 35, to: 75 },
            { section: 'Audience Research', from: 15, to: 65 },
            { section: 'Brand Identity', from: 40, to: 70 },
          ].map((j, i) => (
            <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{j.section}</span>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.success }}>{j.from}% → {j.to}%</span>
            </div>
          ))}
        </Card>
        <Card style={{ borderLeft: `3px solid ${C.orange}` }}>
          <Lbl style={{ color: C.orange }}>Still Needs Work</Lbl>
          {[
            { section: 'Competitive Analysis', pct: 15, need: 'Full employer brand + capability audit' },
            { section: 'Visual Identity', pct: 30, need: 'Need brand assets from Nicole' },
            { section: 'Research Pipeline', pct: 40, need: 'Execute remaining pipeline steps' },
          ].map((n, i) => (
            <div key={i} style={{ padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{n.section}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.orange }}>{n.pct}%</span>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.muted }}>{n.need}</div>
            </div>
          ))}
        </Card>
      </div>

      {sections.map((s, i) => (
        <Card key={i} style={{ marginBottom: '6px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: C.text }}>{s.name}</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: s.pct >= 70 ? C.success : s.pct >= 40 ? C.amber : C.error }}>{s.pct}%</span>
          </div>
          <ProgressBar pct={s.pct} color={s.pct >= 70 ? C.success : s.pct >= 40 ? C.amber : C.error} />
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.muted, marginTop: '6px' }}>{s.note}</div>
        </Card>
      ))}
    </div>
  );
}
