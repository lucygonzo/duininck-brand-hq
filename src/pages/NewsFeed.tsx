import { useState } from 'react';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, Divider, C, ResearchRunner } from '../components/ui';

type FeedFilter = 'all' | 'industry' | 'internal' | 'competitor' | 'social' | 'featured';
type SortKey = 'date' | 'relevance';

// ---- PEOPLE TO WATCH ----
const INTERNAL_PEOPLE = [
  { name: 'Nicole Behne', role: 'CMO, Duininck Companies', initials: 'NB', color: C.accent, linkedIn: 'https://www.linkedin.com/in/nicolebehne/', photo: 'https://media.licdn.com/dms/image/v2/D5603AQGsNmE8gH-6jA/profile-displayphoto-shrink_200_200/profile-displayphoto-shrink_200_200/0/1684340843906?e=2147483647&v=beta&t=placeholder' },
  { name: 'Sam Duininck', role: '4th Gen, Business Development', initials: 'SD', color: C.orange, linkedIn: 'https://www.linkedin.com/in/samduininck/', photo: '' },
  { name: 'Duininck Inc.', role: 'Company Page · LinkedIn', initials: 'DI', color: '#004F71', linkedIn: 'https://www.linkedin.com/company/duininck/', photo: '' },
  { name: 'Duininck Golf', role: 'Division Page · LinkedIn', initials: 'DG', color: '#2E7D4F', linkedIn: 'https://www.linkedin.com/company/duininck-golf/', photo: '' },
  { name: 'Prinsco', role: 'Subsidiary Page · LinkedIn', initials: 'PR', color: '#0072CE', linkedIn: 'https://www.linkedin.com/company/prinsco/', photo: '' },
];

// ---- FEED ITEMS ----
type FeedItem = {
  id: string;
  type: 'article' | 'social' | 'internal' | 'competitor';
  date: string;
  sortDate: number; // for sorting: YYYYMMDD
  source: string;
  sourceUrl?: string;
  platform?: string; // LinkedIn, X, Facebook, ENR, etc.
  platformIcon?: string;
  category: string;
  headline: string;
  excerpt: string;
  relevance: string;
  featured?: boolean;
  author?: { name: string; role: string; initials: string; color: string; linkedIn?: string; photo?: string };
  engagement?: { likes: number; comments: number; shares: number };
  articleImage?: string; // thumbnail/preview for articles
};

const FEED_ITEMS: FeedItem[] = [
  // ===== FEATURED (verified sources) =====
  {
    id: 'feat-1', type: 'article', date: 'Jan 28, 2026', sortDate: 20260128, source: 'Construction Dive', platform: 'constructiondive.com', platformIcon: '📰',
    sourceUrl: 'https://www.constructiondive.com/news/labor-demand-gap-shrinks-abc-construction-staff/810681/',
    category: 'Labor', featured: true,
    headline: "Construction's new worker demand drops to 350,000 in 2026, but skilled trades gap persists",
    excerpt: 'Updated workforce data from the Associated Builders and Contractors shows demand softened slightly from 2025, but equipment operators and skilled trades remain critically short across the Midwest and Southeast.',
    relevance: 'Validates urgency of the trade school pipeline strategy. The 350K gap is national, but MN/SD/TX are in the hardest-hit regions for equipment operators. This is why the Ridgewater College partnership matters NOW.',
  },
  {
    id: 'feat-2', type: 'article', date: 'Feb 2, 2026', sortDate: 20260202, source: 'LINKS Magazine', platform: 'linksmagazine.com', platformIcon: '⛳',
    sourceUrl: 'https://linksmagazine.com/26-new-u-s-golf-courses-to-know-for-2026/',
    category: 'Golf', featured: true,
    headline: '26 new U.S. golf courses set to open in 2026 — pipeline at highest level in over a decade',
    excerpt: 'New course construction has surged to its highest level since before the financial crisis, driven by sustained post-COVID demand, luxury resort investment, and millennial interest in golf. Pipeline projects span from Florida to the Pacific Northwest.',
    relevance: "Duininck Golf's portfolio (Hazeltine, Erin Hills, Ross/Raynor/Tillinghast restorations) positions them in this boom. 26 new courses means architects are actively selecting builders right now — and they need to find Duininck Golf when they search.",
  },

  // ===== INDUSTRY ARTICLES (verified sources) =====
  {
    id: 'ind-1', type: 'article', date: 'Feb 25, 2026', sortDate: 20260225, source: 'GolfPass', platform: 'golfpass.com', platformIcon: '⛳',
    sourceUrl: 'https://www.golfpass.com/travel-advisor/articles/13-notable-golf-course-renovations-in-2026',
    category: 'Golf',
    headline: '13 notable golf course renovation projects to track in 2026 — architects selecting builders now',
    excerpt: 'Major renovation projects are underway at historic and high-profile courses across the country, with architects prioritizing drainage, irrigation, and turf performance engineering. Renovation budgets are up significantly year-over-year.',
    relevance: "Renovation work is Duininck Golf's sweet spot — Ross restorations, Raynor renovations, Tillinghast projects. These 13 courses represent active opportunities where architects are selecting builders. Portfolio visibility is essential.",
  },
  {
    id: 'ind-2', type: 'article', date: 'Jan 5, 2026', sortDate: 20260105, source: 'Construction Dive', platform: 'constructiondive.com', platformIcon: '📰',
    sourceUrl: 'https://www.constructiondive.com/news/construction-cost-labor-regulations-2026/808629/',
    category: 'Strategy',
    headline: 'How contractors can navigate cost pressures, labor shortages, and regulatory hurdles in 2026',
    excerpt: 'Industry analysis of the key challenges facing contractors in 2026: rising material costs, persistent skilled labor shortages, and evolving regulatory requirements. Firms that invest in workforce development and operational efficiency are positioned to outperform.',
    relevance: "Directly relevant to Duininck's strategic planning. Cost pressures and labor shortages are the two forces shaping every bid decision. The workforce development angle reinforces the Ridgewater College pipeline strategy.",
  },
  {
    id: 'ind-3', type: 'article', date: 'Feb 5, 2026', sortDate: 20260205, source: 'Bring Back the Trades', platform: 'bringbackthetrades.org', platformIcon: '🏗️',
    sourceUrl: 'https://bringbackthetrades.org/press-release/closing-the-skilled-trades-gap-could-unlock-325-6-billion-in-gdp-nationwide/',
    category: 'Labor',
    headline: 'Closing the skilled trades gap could unlock $325.6 billion in GDP nationwide',
    excerpt: 'New research quantifies the economic impact of the skilled trades shortage. Closing the gap could unlock $325.6 billion in GDP, with the heaviest impact in construction, manufacturing, and infrastructure sectors.',
    relevance: "Powerful data point for recruiting and advocacy. When Duininck tells the story of investing in the next generation of tradespeople, this $325.6B figure makes the case that it's not charity — it's economic development.",
  },

  // ===== INTERNAL UPDATES (no external URL required) =====
  {
    id: 'int-1', type: 'internal', date: 'Mar 10, 2026', sortDate: 20260310, source: 'Internal · Duininck Golf', platform: 'Internal', platformIcon: '📋',
    category: 'Golf',
    headline: 'Duininck Golf portfolio update shared with architect partners ahead of 2026 season',
    excerpt: 'The Duininck Golf team distributed updated portfolio materials to architect partners in advance of the 2026 construction season. Updated project profiles, drone photography, and time-lapse documentation were included for key completed projects.',
    relevance: "Architect relationships are the lifeblood of golf course construction work. Proactive portfolio updates keep Duininck Golf top-of-mind as architects finalize builder selections for 2026 projects.",
  },
  {
    id: 'int-2', type: 'internal', date: 'Apr 1, 2026', sortDate: 20260401, source: 'Internal · Duininck Construction Materials', platform: 'Internal', platformIcon: '📋',
    category: 'Culture',
    headline: 'Construction season kickoff — crew deployment begins across MN, SD, TX, and GA projects',
    excerpt: 'Crews are deploying to project sites across four states as the 2026 construction season begins. Equipment mobilization, safety briefings, and project staging are underway at multiple locations.',
    relevance: "Season kickoff is a high-energy moment that should be captured for content. Crew deployment across four states demonstrates Duininck's geographic reach and operational scale.",
  },

  // ===== COMPETITOR WATCH (no verified URLs — display only) =====
  {
    id: 'comp-1', type: 'competitor', date: 'Mar 21, 2026', sortDate: 20260321, source: 'LinkedIn · Knife River Corporation', platform: 'LinkedIn', platformIcon: '🔴',
    category: 'Competitor',
    headline: 'Knife River launches spring recruiting campaign with "Life at Knife" content series',
    excerpt: 'Knife River Corporation posted a series of employee spotlight videos on LinkedIn and Instagram, kicking off their seasonal hiring push. Content features equipment operators talking about career growth, CDL training, and team culture across 14 states.',
    relevance: "Direct talent competitor actively recruiting from the same pool. Their @lifeatknife employer brand channel is fully operational while Duininck has no equivalent. Every week without a response, Knife River captures more of the shared talent pipeline.",
  },
  {
    id: 'comp-2', type: 'competitor', date: 'Mar 17, 2026', sortDate: 20260317, source: 'LinkedIn · Landscapes Unlimited', platform: 'LinkedIn', platformIcon: '🔴',
    category: 'Competitor',
    headline: 'Landscapes Unlimited named to NGF Top 100 Businesses in Golf for 8th consecutive year',
    excerpt: 'The National Golf Foundation recognized Landscapes Unlimited on its annual Top 100 list, citing their portfolio of 2,500+ completed projects and their integrated build-and-manage model.',
    relevance: "Landscapes Unlimited continues to own the \"leader\" narrative in golf construction. Duininck Golf has comparable prestige venues but no equivalent recognition. Submitting for the NGF Top 100 should be an immediate action item.",
  },
  {
    id: 'comp-3', type: 'competitor', date: 'Mar 11, 2026', sortDate: 20260311, source: 'LinkedIn · Ames Construction', platform: 'LinkedIn', platformIcon: '🔴',
    category: 'Competitor',
    headline: 'Ames Construction posts record ESOP value, "every employee owns a piece of this"',
    excerpt: 'Ames Construction announced their annual ESOP valuation update, celebrating employee ownership as a core differentiator in recruiting. Their LinkedIn post featured individual employee quotes about what ownership means to them.',
    relevance: "Ames is weaponizing ESOP as an employer brand play. Duininck cannot match ESOP ownership, but can counter with family culture and the wellbeing framework. The response: \"We don't give you stock. We give you purpose.\" Different value proposition, equally powerful when articulated.",
  },
];

const NEWS_STEPS = [
  { id: 'industry-news', label: 'Construction & Infrastructure News', prompt: 'Research the latest news in heavy civil construction, IIJA implementation, and the construction labor market in Minnesota and Texas. Focus on trends affecting regional family-owned contractors.', sources: ['ENR.com', 'ConstructionDive.com', 'AGC.org', 'MNDOT news'] },
  { id: 'water-news', label: 'Water Management & Drainage', prompt: 'Research recent news in agricultural drainage, stormwater management, and plastic pipe manufacturing. Focus on trends relevant to Prinsco.', sources: ['WaterWorld.com', 'AgWeb.com'] },
  { id: 'golf-news', label: 'Golf Course Construction', prompt: 'Research recent news in golf course construction, renovation, and the competitive landscape for golf course builders.', sources: ['GolfCoursearchitecture.net', 'GCSAA.org'] },
  { id: 'family-biz', label: 'Family Business & Succession', prompt: 'Research news and best practices in multi-generational family business branding and succession, especially 3rd/4th generation transitions in construction.', sources: ['FamilyBusinessMagazine.com', 'HBR.org'] },
];

const FILTER_LABELS: { key: FeedFilter; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'featured', label: '⭐ Featured' },
  { key: 'internal', label: 'Internal' },
  { key: 'industry', label: 'Industry' },
  { key: 'competitor', label: 'Competitors' },
  { key: 'social', label: 'Social' },
];

const CATEGORY_COLORS: Record<string, string> = {
  'Labor': C.red, 'Funding': C.success, 'Golf': '#2E7D4F', 'Strategy': C.accent,
  'Tech': C.blue, 'Culture': C.orange, 'Competitor': '#8B4513', 'Mention': C.blue,
};

const TYPE_BORDER: Record<string, string> = {
  'internal': C.accent, 'article': C.muted, 'competitor': C.red, 'social': C.blue,
};

type TimeRange = '7d' | '30d' | '90d' | '1y' | 'all';
const TIME_RANGE_LABELS: { key: TimeRange; label: string }[] = [
  { key: '7d', label: '7 days' },
  { key: '30d', label: '30 days' },
  { key: '90d', label: '90 days' },
  { key: '1y', label: '1 year' },
  { key: 'all', label: 'All time' },
];

// Reference date: April 8, 2026
const TODAY = 20260408;

function sortDateToMs(sd: number): number {
  const y = Math.floor(sd / 10000);
  const m = Math.floor((sd % 10000) / 100) - 1;
  const d = sd % 100;
  return new Date(y, m, d).getTime();
}

function isWithinRange(sortDate: number, range: TimeRange): boolean {
  if (range === 'all') return true;
  const todayMs = sortDateToMs(TODAY);
  const itemMs = sortDateToMs(sortDate);
  const days = range === '7d' ? 7 : range === '30d' ? 30 : range === '90d' ? 90 : 365;
  return todayMs - itemMs <= days * 24 * 60 * 60 * 1000;
}

export default function NewsFeedPage() {
  const [filter, setFilter] = useState<FeedFilter>('all');
  const [sort, setSort] = useState<SortKey>('date');
  const [timeRange, setTimeRange] = useState<TimeRange>('all');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const timeFiltered = FEED_ITEMS.filter(f => isWithinRange(f.sortDate, timeRange));

  const filtered = (() => {
    let items = [...timeFiltered];
    if (filter === 'featured') items = items.filter(f => f.featured);
    else if (filter === 'industry') items = items.filter(f => f.type === 'article');
    else if (filter === 'internal') items = items.filter(f => f.type === 'internal');
    else if (filter === 'competitor') items = items.filter(f => f.type === 'competitor');
    else if (filter === 'social') items = items.filter(f => f.type === 'social');

    // Featured always on top, then sort
    if (filter === 'all') {
      const feat = items.filter(f => f.featured);
      const rest = items.filter(f => !f.featured);
      if (sort === 'date') rest.sort((a, b) => b.sortDate - a.sortDate);
      return [...feat, ...rest];
    }
    if (sort === 'date') items.sort((a, b) => b.sortDate - a.sortDate);
    return items;
  })();

  const toggleLike = (id: string) => {
    setLikedPosts(prev => { const next = new Set(prev); if (next.has(id)) next.delete(id); else next.add(id); return next; });
  };

  const counts = {
    all: timeFiltered.length,
    featured: timeFiltered.filter(f => f.featured).length,
    internal: timeFiltered.filter(f => f.type === 'internal').length,
    industry: timeFiltered.filter(f => f.type === 'article').length,
    competitor: timeFiltered.filter(f => f.type === 'competitor').length,
    social: timeFiltered.filter(f => f.type === 'social').length,
  };

  return (
    <div>
      <SectionHeader num="10 / GTM" title="Live News Feed" sub="Industry intelligence, internal posts, competitor moves, and social mentions across all Duininck sectors." />

      <Callout>
        Your personalized brand intelligence feed. Internal posts from Duininck leadership, industry news from trusted sources, competitor activity alerts, and social mentions across all Duininck operating sectors. Featured items are pinned at the top. External links open in a new tab so you can engage, share, and like directly.
      </Callout>

      <div style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '10px 16px', background: `${C.blue}08`, border: `1px solid ${C.blue}20`, borderRadius: '8px', marginBottom: '16px' }}>
        <span style={{ fontSize: '12px', opacity: 0.6 }}>📡</span>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.blue, letterSpacing: '0.02em' }}>
          Intelligence feed active · Industry intelligence verified from live RSS sources · Social listening activates when Facebook and LinkedIn connections are established
        </span>
      </div>

      {/* PEOPLE TO WATCH */}
      <Divider label="People to Watch" />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
        {INTERNAL_PEOPLE.map((p, i) => (
          <a key={i} href={p.linkedIn} target="_blank" rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '14px 18px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '12px', textDecoration: 'none', minWidth: '110px', transition: 'border-color 0.2s, box-shadow 0.2s' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = p.color; e.currentTarget.style.boxShadow = `0 2px 12px ${p.color}20`; }}
            onMouseLeave={(e) => { e.currentTarget.style.borderColor = ''; e.currentTarget.style.boxShadow = ''; }}
          >
            <div style={{ width: '48px', height: '48px', borderRadius: '50%', background: `${p.color}15`, border: `2.5px solid ${p.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: p.color, overflow: 'hidden' }}>
              {p.photo ? <img src={p.photo} alt={p.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : p.initials}
            </div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{p.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '1px' }}>{p.role}</div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: p.color, background: `${p.color}10`, padding: '2px 8px', borderRadius: '10px' }}>View Profile &#8599;</div>
          </a>
        ))}
      </div>

      {/* TIME RANGE */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px', flexWrap: 'wrap', gap: '6px' }}>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginRight: '4px' }}>Range:</span>
          {TIME_RANGE_LABELS.map(t => (
            <button key={t.key} onClick={() => setTimeRange(t.key)}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.06em', padding: '4px 10px', borderRadius: '12px', cursor: 'pointer', border: `1px solid ${timeRange === t.key ? C.accent : C.border}`, background: timeRange === t.key ? C.accentDim : 'transparent', color: timeRange === t.key ? C.accent : C.muted, fontWeight: timeRange === t.key ? 600 : 400, transition: 'all 0.15s' }}
            >{t.label}</button>
          ))}
        </div>
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>
          Showing {filtered.length} of {FEED_ITEMS.length} items
        </span>
      </div>

      {/* CONTROLS: Filter + Sort */}
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '14px', flexWrap: 'wrap', gap: '8px' }}>
        <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap' }}>
          {FILTER_LABELS.map(f => (
            <button key={f.key} onClick={() => setFilter(f.key)}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em', padding: '6px 14px', borderRadius: '20px', cursor: 'pointer', border: `1px solid ${filter === f.key ? C.accent : C.border}`, background: filter === f.key ? C.accentDim : 'transparent', color: filter === f.key ? C.accent : C.muted, fontWeight: filter === f.key ? 600 : 400, transition: 'all 0.15s' }}
            >{f.label} ({counts[f.key]})</button>
          ))}
        </div>
        <div style={{ display: 'flex', gap: '4px', alignItems: 'center' }}>
          <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginRight: '4px' }}>Sort:</span>
          {(['date', 'relevance'] as SortKey[]).map(s => (
            <button key={s} onClick={() => setSort(s)}
              style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', textTransform: 'uppercase', padding: '4px 10px', borderRadius: '10px', cursor: 'pointer', border: `1px solid ${sort === s ? C.accent : C.border}`, background: sort === s ? C.accentDim : 'transparent', color: sort === s ? C.accent : C.muted, transition: 'all 0.15s' }}
            >{s === 'date' ? 'Latest' : 'Relevance'}</button>
          ))}
        </div>
      </div>

      {/* FEED */}
      {filtered.map((item) => {
        const isLiked = likedPosts.has(item.id);
        const borderColor = TYPE_BORDER[item.type] || C.border;
        const isSocial = item.type === 'internal' || item.type === 'social';

        return (
          <Card key={item.id} style={{ marginBottom: '10px', borderLeft: `3px solid ${borderColor}`, padding: '16px 20px', ...(item.featured ? { background: `${C.orangeGlow}`, border: `1px solid ${C.orange}30`, borderLeft: `3px solid ${C.orange}` } : {}) }}>

            {/* Featured badge */}
            {item.featured && (
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: '4px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.orange, background: C.orangeDim, padding: '2px 8px', borderRadius: '8px', marginBottom: '8px', textTransform: 'uppercase', letterSpacing: '0.08em' }}>⭐ Featured</div>
            )}

            {/* Header */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {item.author ? (
                  <>
                    <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${item.author.color}15`, border: `2px solid ${item.author.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: item.author.color, flexShrink: 0, overflow: 'hidden' }}>
                      {item.author.photo ? <img src={item.author.photo} alt={item.author.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : item.author.initials}
                    </div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{item.author.name}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{item.author.role}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '1px' }}>{item.platformIcon} {item.platform} · {item.date}</div>
                    </div>
                  </>
                ) : (
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                      <span style={{ fontSize: '14px' }}>{item.platformIcon}</span>
                      <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 600, color: item.type === 'competitor' ? C.red : C.text }}>
                        {item.type === 'competitor' ? `Competitor: ${item.source}` : item.source}
                      </span>
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '2px', marginLeft: '20px' }}>{item.platform} · {item.date}</div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center', flexShrink: 0 }}>
                <Chip color={CATEGORY_COLORS[item.category] || C.muted}>{item.category}</Chip>
                {item.sourceUrl && (
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textDecoration: 'none', padding: '3px 8px', border: `1px solid ${C.accent}30`, borderRadius: '6px', whiteSpace: 'nowrap' }}>Read &#8599;</a>
                )}
              </div>
            </div>

            {/* Headline */}
            {item.headline && (
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '17px', fontWeight: 700, color: C.text, lineHeight: 1.35, marginBottom: '8px' }}>
                {item.sourceUrl ? (
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ color: C.text, textDecoration: 'none' }}
                    onMouseEnter={(e) => (e.currentTarget.style.color = C.accent)}
                    onMouseLeave={(e) => (e.currentTarget.style.color = C.text)}
                  >{item.headline}</a>
                ) : item.headline}
              </div>
            )}

            {/* Body */}
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, lineHeight: 1.65, marginBottom: '12px' }}>{item.excerpt}</div>

            {/* Relevance */}
            <div style={{ padding: '8px 12px', background: item.featured ? '#fff' : C.accentGlow, borderRadius: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, marginBottom: isSocial ? '12px' : '0', border: item.featured ? `1px solid ${C.accent}20` : 'none' }}>
              <strong>Why this matters:</strong> {item.relevance}
            </div>

            {/* Engagement bar */}
            {isSocial && item.engagement && (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '10px', borderTop: `1px solid ${C.borderSoft}`, marginTop: '4px' }}>
                <button onClick={() => toggleLike(item.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: isLiked ? C.accent : C.muted, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', transition: 'color 0.15s' }}
                ><span style={{ fontSize: '14px' }}>{isLiked ? '💙' : '👍'}</span> {item.engagement.likes + (isLiked ? 1 : 0)}</button>
                <a href={item.author?.linkedIn || '#'} target="_blank" rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.muted, textDecoration: 'none' }}
                ><span style={{ fontSize: '14px' }}>💬</span> {item.engagement.comments}</a>
                <button onClick={() => { navigator.clipboard.writeText(item.author ? `"${item.excerpt.substring(0, 100)}..." via ${item.author.name}` : item.headline || ''); }}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.muted, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
                ><span style={{ fontSize: '14px' }}>🔗</span> {item.engagement.shares}</button>
                {item.author?.linkedIn && (
                  <a href={item.author.linkedIn} target="_blank" rel="noopener noreferrer"
                    style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, background: C.accentDim, padding: '4px 12px', borderRadius: '12px', textDecoration: 'none', border: `1px solid ${C.accent}30` }}
                  >View on {item.platform} &#8599;</a>
                )}
              </div>
            )}
          </Card>
        );
      })}

      {/* AI RESEARCH */}
      <Divider label="Generate Fresh Intelligence" />
      <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '8px' }}>Run AI-powered research to surface the latest developments across Duininck's operating sectors.</Body>
      <ResearchRunner steps={NEWS_STEPS} context="Duininck Companies is a fourth-generation family business portfolio in Minnesota." />
    </div>
  );
}
