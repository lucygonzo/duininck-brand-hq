import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, Divider, C, ResearchRunner } from '../components/ui';

const NEWS_STEPS = [
  {
    id: 'industry-news',
    label: 'Construction & Infrastructure News',
    prompt: 'Research the latest news and developments in heavy civil construction, infrastructure spending (IIJA implementation), and the construction labor market in Minnesota and Texas as of March 2026. Focus on trends that would affect a family-owned regional contractor like Duininck Companies.',
    sources: ['ENR.com', 'ConstructionDive.com', 'AGC.org', 'MNDOT news'],
  },
  {
    id: 'water-news',
    label: 'Water Management & Drainage Industry News',
    prompt: 'Research recent news in agricultural drainage, stormwater management, and plastic pipe manufacturing as of March 2026. Focus on market trends, regulatory changes, and competitive movements relevant to Prinsco (a Duininck Companies subsidiary).',
    sources: ['WaterWorld.com', 'DrainagePipeNews', 'AgWeb.com'],
  },
  {
    id: 'golf-news',
    label: 'Golf Course Construction & Design News',
    prompt: 'Research recent news in golf course construction, renovation, and the golf industry as of March 2026. Focus on trends in historic course restoration, new construction, and the competitive landscape for golf course builders.',
    sources: ['GolfDigest.com', 'GolfCourseTrades.com', 'GCSAA.org'],
  },
  {
    id: 'family-biz',
    label: 'Family Business & Generational Transition News',
    prompt: 'Research recent news and best practices in multi-generational family business management, succession planning, and family business branding as of March 2026. Focus on 3rd/4th generation transitions in construction and manufacturing.',
    sources: ['FamilyBusinessMagazine.com', 'HBR.org', 'FFI.org'],
  },
];

// Sample feed items to demonstrate the intended experience
const SAMPLE_FEED = [
  { date: 'Mar 22, 2026', source: 'Construction Dive', category: 'Labor', headline: 'Construction worker demand drops to 350,000 for 2026, but skilled trades gap persists', relevance: 'Directly affects Duininck seasonal hiring. The 349K gap validates urgency of the trade school pipeline strategy.' },
  { date: 'Mar 20, 2026', source: 'ENR', headline: 'MnDOT accelerates Q3 project lettings ahead of IIJA expiration', category: 'Funding', relevance: 'More MnDOT lettings = more bid opportunities for Duininck Heavy Civil. Crew capacity becomes the constraint.' },
  { date: 'Mar 18, 2026', source: 'Golf Course Architecture', headline: 'Record 143 courses in US construction pipeline, highest since 2008', category: 'Golf', relevance: 'Validates the golf market expansion data. Duininck Golf should be visible to architects selecting builders for these projects.' },
  { date: 'Mar 15, 2026', source: 'AGC of America', headline: 'Immigration enforcement affecting 31% of construction firms, survey finds', category: 'Labor', relevance: 'Compounds the talent shortage. Companies with strong local pipelines (Ridgewater College partnership) gain relative advantage.' },
  { date: 'Mar 12, 2026', source: 'Family Business Magazine', headline: 'Centennial milestones: how 100-year family companies are leveraging heritage for growth', category: 'Strategy', relevance: 'Direct playbook for Duininck centennial. JE Dunn and McCree both leveraged centennials for recruiting, press, and brand repositioning.' },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Labor': C.red, 'Funding': C.success, 'Golf': C.amber, 'Strategy': C.accent, 'Tech': C.blue,
};

export default function NewsFeedPage() {
  return (
    <div>
      <SectionHeader num="10 / Foundation" title="Live News Feed" sub="Real-time industry intelligence across Duininck's operating sectors." />
      <Callout>
        This feed monitors trends, competitors, and market movements across every sector Duininck operates in. Run the research steps below to generate fresh intelligence, or review the sample feed to see the intended experience.
      </Callout>

      {/* SAMPLE FEED */}
      <Divider label="Sample Feed (Demonstrating Format)" />
      <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Below is a sample of what the live feed will surface once connected to real-time sources. Each item includes a relevance note explaining why it matters for Duininck specifically.</Body>

      {SAMPLE_FEED.map((item, i) => (
        <Card key={i} style={{ marginBottom: '6px', padding: '12px 16px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '6px' }}>
            <div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text, lineHeight: 1.4 }}>{item.headline}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '3px' }}>{item.source} · {item.date}</div>
            </div>
            <Chip color={CATEGORY_COLORS[item.category] || C.muted}>{item.category}</Chip>
          </div>
          <div style={{ padding: '6px 10px', background: C.accentGlow, borderRadius: '4px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>
            <strong>Relevance:</strong> {item.relevance}
          </div>
        </Card>
      ))}

      {/* LIVE RESEARCH RUNNER */}
      <Divider label="Live Research (AI-Powered)" />
      <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '8px' }}>Run these steps to generate fresh intelligence using web search. Each step produces a summary focused on what matters for Duininck.</Body>

      <ResearchRunner steps={NEWS_STEPS} context="Duininck Companies is a fourth-generation family business portfolio in Minnesota operating across water management (Prinsco), heavy civil construction, concrete/materials, golf course design, and real estate development." />
    </div>
  );
}
