import { SectionHeader, Callout, Card, Lbl, Body, Block, C, ResearchRunner } from '../components/ui';

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

export default function NewsFeedPage() {
  return (
    <div>
      <SectionHeader num="10 / Foundation" title="Live News Feed" sub="Real-time industry intelligence across Duininck's operating sectors." />
      <Callout>
        Stay current on trends, competitors, and market movements across all sectors Duininck operates in. Run research steps below to generate fresh intelligence.
      </Callout>

      <ResearchRunner steps={NEWS_STEPS} context="Duininck Companies is a fourth-generation family business portfolio in Minnesota operating across water management (Prinsco), heavy civil construction, concrete/materials, golf course design, and real estate development." />
    </div>
  );
}
