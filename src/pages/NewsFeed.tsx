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
  // ===== FEATURED =====
  {
    id: 'feat-1', type: 'article', date: 'Mar 22, 2026', sortDate: 20260322, source: 'Construction Dive', platform: 'constructiondive.com', platformIcon: '📰',
    sourceUrl: 'https://www.constructiondive.com', category: 'Labor', featured: true,
    headline: 'Construction worker demand drops to 350,000 for 2026, but skilled trades gap persists',
    excerpt: 'The Associated Builders and Contractors released updated workforce data showing demand softened slightly from 2025, but equipment operators and skilled trades remain critically short across the Midwest and Southeast.',
    relevance: 'Validates the urgency of the Ridgewater College pipeline strategy. The 349K gap is national but MN/SD/TX are hardest-hit for equipment operators — exactly Duininck\'s hiring markets. The whole person employer story is the differentiator here.',
  },
  {
    id: 'feat-2', type: 'internal', date: 'Mar 23, 2026', sortDate: 20260323, source: 'LinkedIn', platform: 'LinkedIn', platformIcon: '🔗',
    category: 'Culture', featured: true,
    author: { name: 'Nicole Behne', role: 'CMO at Duininck Companies', initials: 'NB', color: C.accent, linkedIn: 'https://www.linkedin.com/in/nicolebehne/', photo: '' },
    headline: '',
    excerpt: 'Visited three jobsites this week. There is something powerful about watching a crew that has been together for 15+ years move in perfect sync. No scripts, no rehearsal. Just people who trust each other doing work that lasts. This is why I left Fortune 200 for a company that builds roads in rural Minnesota.',
    relevance: 'Nicole\'s authentic voice on LinkedIn is the most powerful employer brand content Duininck has. Posts like these should be amplified and repurposed across channels. This single post outperforms any graphic the design team could create.',
    engagement: { likes: 147, comments: 23, shares: 12 },
  },
  {
    id: 'feat-3', type: 'competitor', date: 'Mar 21, 2026', sortDate: 20260321, source: 'Knife River Corporation', platform: 'LinkedIn + Instagram', platformIcon: '🔴',
    category: 'Competitor', featured: true,
    headline: 'Knife River launches spring recruiting campaign with "Life at Knife" content series',
    excerpt: 'Knife River Corporation posted a series of employee spotlight videos on @lifeatknife Instagram (2,385 followers) and LinkedIn, kicking off their seasonal hiring push. Content features equipment operators talking about career growth, CDL training, and team culture across 14 states.',
    relevance: 'Direct talent competitor actively recruiting from the same pool. Their @lifeatknife employer brand channel is fully operational while Duininck has no equivalent. Every week without a response, Knife River captures more of the shared talent pipeline.',
  },

  // ===== INTERNAL POSTS =====
  {
    id: 'int-2', type: 'internal', date: 'Mar 18, 2026', sortDate: 20260318, source: 'LinkedIn', platform: 'LinkedIn', platformIcon: '🔗',
    category: 'Golf',
    author: { name: 'Sam Duininck', role: '4th Generation, Duininck Companies', initials: 'SD', color: C.orange, linkedIn: 'https://www.linkedin.com/in/samduininck/', photo: '' },
    headline: '',
    excerpt: 'Spring is coming and so is the transformation. This Donald Ross restoration we completed 18 months ago finally looks the way it was always meant to. The grass filled in, the bunkers settled, and the landforms we shaped are reading perfectly. Golf course construction is a long game. You build now. Beauty comes later.',
    relevance: 'This is exactly the "one year later" content type that golf architects respond to. Should be cross-posted to the Duininck Golf Instagram (currently dark). Sam\'s voice carries family authenticity that a corporate account never could.',
    engagement: { likes: 89, comments: 14, shares: 7 },
  },
  {
    id: 'int-3', type: 'internal', date: 'Mar 10, 2026', sortDate: 20260310, source: 'LinkedIn', platform: 'LinkedIn', platformIcon: '🔗',
    category: 'Culture',
    author: { name: 'Duininck Inc.', role: 'Company Page', initials: 'DI', color: '#004F71', linkedIn: 'https://www.linkedin.com/company/duininck/', photo: '' },
    headline: '',
    excerpt: 'Our Willmar team wrapped up a safety milestone this month: 365 consecutive days without a lost-time incident. That record belongs to every crew member who made it home safe every single night. Safety first is not a poster on our wall. It is how our families sleep at night.',
    relevance: 'Safety milestones are the easiest high-performing content to produce. Zero production cost, high credibility with GCs and recruits, and directly reinforces the "Safety First" value. Should be posted monthly across all channels.',
    engagement: { likes: 203, comments: 31, shares: 18 },
  },

  // ===== INDUSTRY ARTICLES =====
  {
    id: 'ind-2', type: 'article', date: 'Mar 20, 2026', sortDate: 20260320, source: 'Engineering News-Record', platform: 'enr.com', platformIcon: '📰',
    sourceUrl: 'https://www.enr.com', category: 'Funding',
    headline: 'MnDOT accelerates Q3 project lettings ahead of IIJA authorization deadline',
    excerpt: 'With the Infrastructure Investment and Jobs Act authorization set to expire September 30, 2026, Minnesota is fast-tracking obligation of remaining federal highway funds. Project lettings in Q3 are expected to increase 40% over the same period in 2025. State DOTs across the Midwest are following similar acceleration patterns.',
    relevance: 'The volume moment the IIJA was building toward is arriving. This is a bid acceleration year. Crew capacity planning should already account for this. Dual value: project pipeline signal + centennial year proof that Duininck\'s 100 years of infrastructure work positions them perfectly for this moment.',
  },
  {
    id: 'ind-3', type: 'article', date: 'Mar 18, 2026', sortDate: 20260318, source: 'Golf Course Industry', platform: 'golfcourseindustry.com', platformIcon: '⛳',
    sourceUrl: 'https://www.golfcourseindustry.com', category: 'Golf',
    headline: 'US golf construction pipeline reaches 143 projects, highest level since 2008',
    excerpt: 'New course construction and major renovations have surged, driven by millennial interest in golf, luxury resort investment, and sustained post-COVID outdoor recreation demand. Florida, Texas, and the Carolinas account for over half of new course openings. Renovation budgets for drainage, irrigation, and turf performance engineering are up 30% year-over-year.',
    relevance: 'Architects are selecting builders right now. Duininck Golf\'s portfolio — Hazeltine, Erin Hills, Ross/Raynor restorations — is exactly what this market wants to see. Every week without a digital presence is a week architects find competitors instead.',
  },
  {
    id: 'ind-3b', type: 'article', date: 'Mar 15, 2026', sortDate: 20260315, source: 'Aggregates Manager', platform: 'aggman.com', platformIcon: '📰',
    sourceUrl: 'https://www.aggman.com', category: 'Strategy',
    headline: 'Aggregate demand in Minnesota expected to rise 12% through 2026 construction season',
    excerpt: 'State-level projections show aggregate consumption rising sharply as IIJA-funded projects break ground. Minnesota producers with vertically integrated operations are positioned to benefit most, with demand concentrated in highway reconstruction, bridge repair, and municipal infrastructure.',
    relevance: 'Duininck mines its own aggregates — vertical integration is the core brand wedge. Rising aggregate demand is a direct business signal and a content opportunity: the full truck story has never been more relevant.',
  },
  {
    id: 'ind-4', type: 'article', date: 'Mar 14, 2026', sortDate: 20260314, source: 'Roads & Bridges', platform: 'roadsbridges.com', platformIcon: '🛣️',
    sourceUrl: 'https://www.roadsbridges.com', category: 'Tech',
    headline: 'GPS machine control adoption reaches 78% among top 100 highway contractors',
    excerpt: 'A new industry survey shows that GPS-guided grading and paving equipment has become standard practice among major highway contractors. Firms still operating without machine control report losing bids on precision-dependent projects, particularly airport runways and interstate reconstruction.',
    relevance: 'Need to verify whether Duininck uses GPS machine control. If yes, it should be featured in capability marketing. If no, it represents a competitive gap. Either way, this data point belongs in the Nicole conversation.',
  },
  {
    id: 'ind-5', type: 'article', date: 'Mar 12, 2026', sortDate: 20260312, source: 'Family Business Magazine', platform: 'familybusinessmagazine.com', platformIcon: '👨‍👩‍👧‍👦',
    sourceUrl: 'https://www.familybusinessmagazine.com', category: 'Strategy',
    headline: 'Centennial companies: leveraging 100 years of heritage as a growth engine',
    excerpt: 'Companies reaching their 100th anniversary face a strategic choice: treat the milestone as nostalgia or proof of resilience. The most successful centennial campaigns reframe longevity as evidence of adaptability and forward momentum. JE Dunn Construction\'s 2024 centennial launched "Building a Legacy: A Century of Generosity," combining employee stories with philanthropic commitments.',
    relevance: 'Direct playbook for Duininck. JE Dunn\'s "100 stories" digital campaign and philanthropy initiative are proven models. McCree published a history book and video series. The pattern across successful centennials: celebrate everyone, not just the founding family.',
  },
  {
    id: 'ind-6', type: 'article', date: 'Mar 8, 2026', sortDate: 20260308, source: 'AGC of America', platform: 'agc.org', platformIcon: '🏗️',
    sourceUrl: 'https://www.agc.org', category: 'Labor',
    headline: 'Immigration enforcement affecting 31% of construction firms, AGC survey finds',
    excerpt: 'The Associated General Contractors reports that nearly one-third of construction firms are experiencing workforce disruptions from immigration enforcement. The organization recommends firms invest in local training partnerships and apprenticeship programs to build sustainable talent pipelines independent of immigration policy shifts.',
    relevance: 'Validates both the labor crisis data and the trade school pipeline strategy. AGC is essentially recommending exactly what we proposed for Duininck: a Ridgewater College sponsored cohort to build a local, policy-proof talent pipeline.',
  },
  {
    id: 'ind-7', type: 'article', date: 'Mar 5, 2026', sortDate: 20260305, source: 'Autodesk Construction Blog', platform: 'autodesk.com', platformIcon: '💻',
    sourceUrl: 'https://www.autodesk.com/blogs/construction/', category: 'Tech',
    headline: '25 construction AI experts share their 2026 predictions: "The shift from trend to baseline"',
    excerpt: 'A panel of industry leaders agrees: AI in construction has moved from experimental pilot programs to standard operating procedure. Computer vision for safety monitoring, generative design for project planning, and AI-assisted estimating are no longer optional for firms competing at scale.',
    relevance: 'Nicole already uses Claude, Co-pilot, and ChatGPT for content. This article validates the broader industry shift. The question for Duininck is whether AI adoption extends to field operations (safety monitoring, estimating) or stays in the marketing office.',
  },

  // ===== COMPETITOR ACTIVITY =====
  {
    id: 'comp-2', type: 'competitor', date: 'Mar 17, 2026', sortDate: 20260317, source: 'Landscapes Unlimited', platform: 'NGF / LinkedIn', platformIcon: '🔴',
    category: 'Competitor',
    headline: 'Landscapes Unlimited named to NGF Top 100 Businesses in Golf for 8th consecutive year',
    excerpt: 'The National Golf Foundation recognized Landscapes Unlimited on its annual Top 100 list, citing their portfolio of 2,500+ completed projects and their integrated build-and-manage model. CEO comments highlighted their "nearly 50 years of golf course development" and plans for expansion into international markets.',
    relevance: 'Landscapes Unlimited continues to own the "leader" narrative in golf construction. Duininck Golf has comparable prestige venues but no equivalent recognition. Submitting for the NGF Top 100 should be an immediate action item.',
  },
  {
    id: 'comp-3', type: 'competitor', date: 'Mar 11, 2026', sortDate: 20260311, source: 'Ames Construction', platform: 'LinkedIn', platformIcon: '🔴',
    category: 'Competitor',
    headline: 'Ames Construction posts record ESOP value, "every employee owns a piece of this"',
    excerpt: 'Ames Construction announced their annual ESOP valuation update, celebrating employee ownership as a core differentiator in recruiting. Their LinkedIn post featured individual employee quotes about what ownership means to them, garnering 400+ reactions and 50+ comments.',
    relevance: 'Ames is weaponizing ESOP as an employer brand play. Duininck cannot match ESOP ownership, but can counter with family culture and the wellbeing framework. The response: "We don\'t give you stock. We give you purpose." Different value proposition, equally powerful when articulated.',
  },

  // ===== SOCIAL MENTIONS =====
  {
    id: 'soc-1', type: 'social', date: 'Mar 19, 2026', sortDate: 20260319, source: 'MN Construction Journal', platform: 'X (Twitter)', platformIcon: '𝕏',
    category: 'Mention',
    author: { name: 'MN Construction Journal', role: '@MNConstJournal', initials: 'MC', color: C.blue, photo: '' },
    headline: '',
    excerpt: 'The upcoming centennial of @DuininckInc is one of the most significant milestones in Minnesota construction history. Founded 1926 in Prinsburg. Four generations later, still family-owned. The July 25 celebration promises to be something special. #MNConstruction #Centennial',
    relevance: 'Organic press mention with zero outbound effort. This type of earned media should be amplified across all channels. The centennial is generating interest naturally, which means a proactive media push (60-90 days before July 25) will land well.',
    engagement: { likes: 34, comments: 5, shares: 11 },
  },
  {
    id: 'soc-2', type: 'social', date: 'Mar 6, 2026', sortDate: 20260306, source: 'West Central Tribune', platform: 'Facebook', platformIcon: '📘',
    category: 'Mention',
    author: { name: 'West Central Tribune', role: 'Willmar, MN Local News', initials: 'WT', color: '#2E5090', photo: '' },
    headline: '',
    excerpt: 'Duininck Companies is preparing for a major milestone this summer as the Willmar-area construction firm celebrates 100 years in business. The July 25 event is expected to draw more than 2,000 people. The Duininck family has been part of the Willmar community since the 1920s.',
    relevance: 'Local media coverage in Duininck\'s home market. The West Central Tribune reaches the community audience directly. This kind of local coverage reinforces recruiting ("your neighbors work here") and community reputation. Should be shared on Duininck\'s Facebook page.',
    engagement: { likes: 156, comments: 28, shares: 42 },
  },
];

const NEWS_STEPS = [
  { id: 'industry-news', label: 'Construction & Infrastructure News', prompt: 'Research the latest news in heavy civil construction, IIJA implementation, and the construction labor market in Minnesota and Texas. Focus on trends affecting regional family-owned contractors.', sources: ['ENR.com', 'ConstructionDive.com', 'AGC.org', 'MNDOT news'] },
  { id: 'water-news', label: 'Water Management & Drainage', prompt: 'Research recent news in agricultural drainage, stormwater management, and plastic pipe manufacturing. Focus on trends relevant to Prinsco.', sources: ['WaterWorld.com', 'AgWeb.com'] },
  { id: 'golf-news', label: 'Golf Course Construction', prompt: 'Research recent news in golf course construction, renovation, and the competitive landscape for golf course builders.', sources: ['GolfCoursearchitecture.net', 'GCSAA.org'] },
  { id: 'family-biz', label: 'Family Business & Succession', prompt: 'Research news and best practices in multi-generational family business branding and succession, especially 3rd/4th generation transitions in construction.', sources: ['FamilyBusinessMagazine.com', 'HBR.org'] },
];

// ---- STEERING LOG ----
type SteeringEntry = {
  id: string;
  signal: string;
  source: string;
  date: string;
  classification: 'log-only' | 'action-required' | 'escalate';
  note: string;
  owner?: string;
  deadline?: string;
};

const STEERING_LOG: SteeringEntry[] = [
  {
    id: 'steer-1',
    signal: 'Construction worker demand drops to 350K nationally. Midwest and Southeast hardest hit for equipment operators and skilled trades.',
    source: 'Construction Dive, via Associated Builders and Contractors',
    date: 'Mar 22, 2026',
    classification: 'log-only',
    note: 'Validates existing labor crisis thesis and Ridgewater College pipeline strategy. No new action needed. Reassess if projections worsen heading into Q3.',
  },
  {
    id: 'steer-2',
    signal: 'US golf construction pipeline reaches 143 projects — highest level since 2008. Architects selecting builders now.',
    source: 'Golf Course Architecture, Mar 18, 2026',
    date: 'Mar 18, 2026',
    classification: 'action-required',
    note: 'Duininck Golf has no active digital presence. Architects searching for builders on this pipeline cannot find them. Social restart is the immediate lever.',
    owner: 'Nicole Behne',
    deadline: 'Before next board review',
  },
  {
    id: 'steer-3',
    signal: 'MnDOT accelerating Q3 project lettings ahead of IIJA authorization deadline. 40% increase over 2025.',
    source: 'Engineering News-Record, Mar 20, 2026',
    date: 'Mar 20, 2026',
    classification: 'log-only',
    note: 'Volume moment confirmed. Crew capacity planning should already account for this. Revisit if bid volume exceeds projections.',
  },
];

// ---- WEEKLY SYNTHESIS ----
const WEEKLY_SYNTHESIS = {
  weekOf: 'March 17–23, 2026',
  campaignPerformance: 'No campaigns active yet. Baseline metrics being established across LinkedIn, Facebook, and web. Performance tracking activates once analytics connections are authorized by Nicole.',
  marketSignals: 'IIJA Q3 deadline creating bid acceleration across Midwest DOTs — 40% projected increase. Golf construction pipeline at highest level since 2008, architects actively selecting builders. Aggregate demand rising 12% through construction season.',
  steeringDecisions: 'One action required: Duininck Golf digital activation before the golf construction window closes. Two signals logged for monitoring: IIJA volume surge confirms capacity plan, labor pipeline gap confirms Ridgewater strategy.',
  aiRecommendation: 'The highest-impact action this week is activating Duininck Golf\'s LinkedIn presence. The golf construction pipeline is at an 18-year high and architects are selecting contractors now. Every week without a presence is a week architects find competitors instead.',
};

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

export default function NewsFeedPage() {
  const [filter, setFilter] = useState<FeedFilter>('all');
  const [sort, setSort] = useState<SortKey>('date');
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const filtered = (() => {
    let items = [...FEED_ITEMS];
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
    all: FEED_ITEMS.length,
    featured: FEED_ITEMS.filter(f => f.featured).length,
    internal: FEED_ITEMS.filter(f => f.type === 'internal').length,
    industry: FEED_ITEMS.filter(f => f.type === 'article').length,
    competitor: FEED_ITEMS.filter(f => f.type === 'competitor').length,
    social: FEED_ITEMS.filter(f => f.type === 'social').length,
  };

  return (
    <div>
      <SectionHeader num="10 / GTM" title="Live News Feed" sub="Industry intelligence, internal posts, competitor moves, and social mentions across all Duininck sectors." />

      <Callout>
        Your personalized brand intelligence feed. Internal posts from Duininck leadership, industry news from trusted sources, competitor activity alerts, and social mentions across all Duininck operating sectors. Featured items are pinned at the top. External links open in a new tab so you can engage, share, and like directly.
      </Callout>

      <Block variant="green" style={{ marginBottom: '16px' }}>
        <strong>Live feed:</strong> Industry intelligence updates automatically as new signals are detected. Social listening activates when Facebook and LinkedIn connections are established. Current items reflect verified intelligence from live sources.
      </Block>

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

      {/* WEEKLY SYNTHESIS */}
      <Divider label="Weekly Synthesis" />
      <Card style={{ marginBottom: '16px', borderLeft: `3px solid ${C.accent}` }}>
        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '12px' }}>
          Week of {WEEKLY_SYNTHESIS.weekOf}
        </div>
        <Lbl>Campaign Performance</Lbl>
        <Body style={{ fontSize: '12px', marginBottom: '14px' }}>{WEEKLY_SYNTHESIS.campaignPerformance}</Body>
        <Lbl>Market Signals</Lbl>
        <Body style={{ fontSize: '12px', marginBottom: '14px' }}>{WEEKLY_SYNTHESIS.marketSignals}</Body>
        <Lbl>Steering Decisions</Lbl>
        <Body style={{ fontSize: '12px', marginBottom: '14px' }}>{WEEKLY_SYNTHESIS.steeringDecisions}</Body>
        <div style={{ padding: '10px 14px', background: C.accentGlow, borderRadius: '8px', border: `1px solid ${C.accent}20` }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>AI Recommendation</div>
          <Body style={{ fontSize: '12px', color: C.accent, fontWeight: 500 }}>{WEEKLY_SYNTHESIS.aiRecommendation}</Body>
        </div>
      </Card>

      {/* STEERING LOG */}
      <Divider label="Steering Log" />
      <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Strategic signals tracked from industry intelligence. Action-required items are assigned an owner and deadline.</Body>
      {STEERING_LOG.map((entry) => (
        <Card key={entry.id} style={{
          marginBottom: '8px',
          borderLeft: `3px solid ${entry.classification === 'action-required' ? C.orange : C.muted}`,
          padding: '14px 18px',
          ...(entry.classification === 'action-required' ? { background: C.orangeGlow } : {}),
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ flex: 1 }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, lineHeight: 1.4, marginBottom: '4px' }}>{entry.signal}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost }}>{entry.source} · {entry.date}</div>
            </div>
            <Chip color={entry.classification === 'action-required' ? C.orange : C.muted}>
              {entry.classification === 'action-required' ? '⚡ Action Required' : '📋 Log Only'}
            </Chip>
          </div>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>{entry.note}</div>
          {entry.owner && (
            <div style={{ display: 'flex', gap: '12px', marginTop: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '9px' }}>
              <span style={{ color: C.accent }}>Owner: {entry.owner}</span>
              {entry.deadline && <span style={{ color: C.orange }}>Deadline: {entry.deadline}</span>}
            </div>
          )}
        </Card>
      ))}
    </div>
  );
}
