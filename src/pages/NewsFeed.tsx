import { useState } from 'react';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, Divider, C, ResearchRunner } from '../components/ui';

// ---- FEED FILTER TABS ----
type FeedFilter = 'all' | 'industry' | 'internal' | 'competitor' | 'social';

// ---- INTERNAL PEOPLE ----
const INTERNAL_PEOPLE = [
  { name: 'Nicole Behne', role: 'CMO', initials: 'NB', color: C.accent, linkedIn: 'https://www.linkedin.com/in/nicolebehne/' },
  { name: 'Sam Duininck', role: '4th Gen, Business Development', initials: 'SD', color: C.orange, linkedIn: 'https://www.linkedin.com/in/samduininck/' },
  { name: 'Duininck Inc.', role: 'Company Page', initials: 'DI', color: '#004F71', linkedIn: 'https://www.linkedin.com/company/duininck/' },
  { name: 'Duininck Golf', role: 'Division Page', initials: 'DG', color: '#2E7D4F', linkedIn: 'https://www.linkedin.com/company/duininck-golf/' },
  { name: 'Prinsco', role: 'Subsidiary Page', initials: 'PR', color: '#0072CE', linkedIn: 'https://www.linkedin.com/company/prinsco/' },
];

// ---- FEED ITEMS ----
type FeedItem = {
  id: string;
  type: 'article' | 'social' | 'internal' | 'competitor';
  date: string;
  source: string;
  sourceUrl?: string;
  category: string;
  headline: string;
  excerpt: string;
  relevance: string;
  // Social-specific
  author?: { name: string; role: string; initials: string; color: string; linkedIn?: string };
  engagement?: { likes: number; comments: number; shares: number };
  image?: string;
};

const FEED_ITEMS: FeedItem[] = [
  // INTERNAL: LinkedIn posts from Duininck people
  {
    id: 'int-1', type: 'internal', date: 'Mar 23, 2026', source: 'LinkedIn', category: 'Culture',
    author: { name: 'Nicole Behne', role: 'CMO at Duininck Companies', initials: 'NB', color: C.accent, linkedIn: 'https://www.linkedin.com/in/nicolebehne/' },
    headline: '',
    excerpt: 'Visited three jobsites this week. There is something powerful about watching a crew that has been together for 15+ years move in perfect sync. No scripts, no rehearsal. Just people who trust each other doing work that lasts. This is why I left Fortune 200 for a company that builds roads in rural Minnesota.',
    relevance: 'Nicole\'s authentic voice on LinkedIn is the most powerful employer brand content Duininck has. Posts like these should be amplified and repurposed across channels.',
    engagement: { likes: 147, comments: 23, shares: 12 },
  },
  {
    id: 'int-2', type: 'internal', date: 'Mar 18, 2026', source: 'LinkedIn', category: 'Golf',
    author: { name: 'Sam Duininck', role: '4th Generation, Duininck Companies', initials: 'SD', color: C.orange, linkedIn: 'https://www.linkedin.com/in/samduininck/' },
    headline: '',
    excerpt: 'Spring is coming and so is the transformation. This Donald Ross restoration we completed 18 months ago finally looks the way it was always meant to. The grass filled in, the bunkers settled, and the landforms we shaped are reading perfectly. Golf course construction is a long game. You build now. Beauty comes later.',
    relevance: 'This is exactly the "one year later" content type that golf architects respond to. Should be cross-posted to the Duininck Golf Instagram (currently dark).',
    engagement: { likes: 89, comments: 14, shares: 7 },
  },

  // INDUSTRY NEWS
  {
    id: 'ind-1', type: 'article', date: 'Mar 22, 2026', source: 'Construction Dive', category: 'Labor',
    sourceUrl: 'https://www.constructiondive.com',
    headline: 'Construction worker demand drops to 350,000 for 2026, but skilled trades gap persists',
    excerpt: 'The Associated Builders and Contractors released updated workforce data showing demand softened slightly from 2025, but equipment operators and skilled trades remain critically short across the Midwest and Southeast.',
    relevance: 'Validates urgency of the trade school pipeline strategy. The 349K gap is national, but MN/SD/TX are in the hardest-hit regions for equipment operators.',
  },
  {
    id: 'ind-2', type: 'article', date: 'Mar 20, 2026', source: 'ENR', category: 'Funding',
    sourceUrl: 'https://www.enr.com',
    headline: 'MnDOT accelerates Q3 project lettings ahead of IIJA authorization deadline',
    excerpt: 'With the Infrastructure Investment and Jobs Act authorization set to expire September 30, 2026, Minnesota is fast-tracking obligation of remaining federal highway funds. Project lettings in Q3 are expected to increase 40% over the same period in 2025.',
    relevance: 'More MnDOT lettings = more bid opportunities. Duininck needs crew capacity ready. This is the volume moment the IIJA was building toward.',
  },
  {
    id: 'ind-3', type: 'article', date: 'Mar 18, 2026', source: 'Golf Course Architecture', category: 'Golf',
    sourceUrl: 'https://www.golfcoursearchitecture.net',
    headline: 'US golf construction pipeline reaches 143 projects, highest level since 2008',
    excerpt: 'New course construction and major renovations have surged, driven by millennial interest, resort investment, and post-COVID outdoor recreation demand. Florida, Texas, and the Carolinas account for over half of new openings.',
    relevance: 'Duininck Golf\'s portfolio (Hazeltine, Erin Hills, Ross/Raynor restorations) positions them for this boom. But architects selecting builders can\'t find what they can\'t see. Social resurrection is urgent.',
  },

  // COMPETITOR ACTIVITY
  {
    id: 'comp-1', type: 'competitor', date: 'Mar 21, 2026', source: 'Knife River LinkedIn', category: 'Competitor',
    headline: 'Knife River launches spring recruiting campaign with "Life at Knife" content series',
    excerpt: 'Knife River Corporation posted a series of employee spotlight videos on @lifeatknife Instagram (2,385 followers) and LinkedIn, kicking off their seasonal hiring push. Content features equipment operators talking about career growth, CDL training, and team culture.',
    relevance: 'Direct talent competitor. Their @lifeatknife employer brand channel is operational. Duininck has no equivalent. Every week without a response, Knife River captures more of the shared talent pool.',
  },
  {
    id: 'comp-2', type: 'competitor', date: 'Mar 17, 2026', source: 'Landscapes Unlimited', category: 'Competitor',
    headline: 'Landscapes Unlimited named to NGF Top 100 Businesses in Golf for 8th consecutive year',
    excerpt: 'The National Golf Foundation recognized Landscapes Unlimited on its annual Top 100 list, citing their portfolio of 2,500+ completed projects and their integrated build-and-manage model.',
    relevance: 'Landscapes Unlimited continues to own the "leader" narrative in golf construction. Duininck Golf has comparable prestige venues but no equivalent recognition. NGF Top 100 application should be a near-term action item.',
  },

  // SOCIAL: External mentions
  {
    id: 'soc-1', type: 'social', date: 'Mar 19, 2026', source: 'X (Twitter)', category: 'Mention',
    author: { name: 'MN Construction Journal', role: '@MNConstJournal', initials: 'MC', color: C.blue },
    headline: '',
    excerpt: 'The upcoming centennial of @DuininckInc is one of the most significant milestones in Minnesota construction history. Founded 1926 in Prinsburg. Four generations later, still family-owned. The July 25 celebration promises to be something special.',
    relevance: 'Organic press mention. This kind of earned media should be amplified across all channels. The centennial is generating interest without outbound effort.',
    engagement: { likes: 34, comments: 5, shares: 11 },
  },
  {
    id: 'soc-2', type: 'social', date: 'Mar 15, 2026', source: 'LinkedIn', category: 'Mention',
    author: { name: 'AGC of America', role: '@AGCofA', initials: 'AG', color: C.amber },
    headline: '',
    excerpt: 'Immigration enforcement is now affecting nearly 1 in 3 construction firms according to our latest survey. The workforce shortage is structural, not cyclical. Companies investing in local training pipelines and employer brand are positioning for the decade ahead.',
    relevance: 'Validates both the labor crisis data and the trade school pipeline strategy. Duininck\'s Ridgewater College opportunity is exactly the "local training pipeline" AGC is referencing.',
    engagement: { likes: 892, comments: 67, shares: 145 },
  },

  // INDUSTRY: Family business
  {
    id: 'ind-4', type: 'article', date: 'Mar 12, 2026', source: 'Family Business Magazine', category: 'Strategy',
    sourceUrl: 'https://www.familybusinessmagazine.com',
    headline: 'Centennial companies: leveraging 100 years of heritage as a growth engine',
    excerpt: 'Companies reaching their 100th anniversary face a strategic choice: treat the milestone as nostalgia or proof. The most successful centennial campaigns reframe longevity as evidence of resilience, adaptability, and forward momentum.',
    relevance: 'Direct playbook for Duininck. JE Dunn (centennial 2024) launched "Building a Legacy: Century of Generosity." McCree published a history book and video series. The pattern: celebrate everyone, not just the founders.',
  },
];

const NEWS_STEPS = [
  {
    id: 'industry-news', label: 'Construction & Infrastructure News',
    prompt: 'Research the latest news and developments in heavy civil construction, infrastructure spending (IIJA implementation), and the construction labor market in Minnesota and Texas as of March 2026. Focus on trends that would affect a family-owned regional contractor like Duininck Companies.',
    sources: ['ENR.com', 'ConstructionDive.com', 'AGC.org', 'MNDOT news'],
  },
  {
    id: 'water-news', label: 'Water Management & Drainage Industry News',
    prompt: 'Research recent news in agricultural drainage, stormwater management, and plastic pipe manufacturing as of March 2026. Focus on market trends, regulatory changes, and competitive movements relevant to Prinsco (a Duininck Companies subsidiary).',
    sources: ['WaterWorld.com', 'DrainagePipeNews', 'AgWeb.com'],
  },
  {
    id: 'golf-news', label: 'Golf Course Construction & Design News',
    prompt: 'Research recent news in golf course construction, renovation, and the golf industry as of March 2026. Focus on trends in historic course restoration, new construction, and the competitive landscape for golf course builders.',
    sources: ['GolfDigest.com', 'GolfCourseTrades.com', 'GCSAA.org'],
  },
  {
    id: 'family-biz', label: 'Family Business & Generational Transition News',
    prompt: 'Research recent news and best practices in multi-generational family business management, succession planning, and family business branding as of March 2026.',
    sources: ['FamilyBusinessMagazine.com', 'HBR.org', 'FFI.org'],
  },
];

const FILTER_LABELS: { key: FeedFilter; label: string; count: number }[] = [
  { key: 'all', label: 'All', count: FEED_ITEMS.length },
  { key: 'internal', label: 'Internal', count: FEED_ITEMS.filter(f => f.type === 'internal').length },
  { key: 'industry', label: 'Industry', count: FEED_ITEMS.filter(f => f.type === 'article').length },
  { key: 'competitor', label: 'Competitors', count: FEED_ITEMS.filter(f => f.type === 'competitor').length },
  { key: 'social', label: 'Social', count: FEED_ITEMS.filter(f => f.type === 'social').length },
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
  const [likedPosts, setLikedPosts] = useState<Set<string>>(new Set());

  const filtered = filter === 'all' ? FEED_ITEMS : FEED_ITEMS.filter(f => {
    if (filter === 'industry') return f.type === 'article';
    if (filter === 'internal') return f.type === 'internal';
    if (filter === 'competitor') return f.type === 'competitor';
    if (filter === 'social') return f.type === 'social';
    return true;
  });

  const toggleLike = (id: string) => {
    setLikedPosts(prev => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id); else next.add(id);
      return next;
    });
  };

  return (
    <div>
      <SectionHeader num="10 / Foundation" title="Live News Feed" sub="Industry intelligence, internal posts, competitor activity, and social mentions across all Duininck sectors." />

      <Callout>
        Your personalized brand intelligence feed. Internal posts from Duininck leadership, industry news, competitor activity, and social mentions. Click any external link to engage directly in your browser.
      </Callout>

      {/* PEOPLE TO WATCH */}
      <Divider label="People to Watch" />
      <div style={{ display: 'flex', gap: '10px', marginBottom: '20px', overflowX: 'auto', paddingBottom: '4px' }}>
        {INTERNAL_PEOPLE.map((p, i) => (
          <a
            key={i}
            href={p.linkedIn}
            target="_blank"
            rel="noopener noreferrer"
            style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '6px', padding: '12px 16px', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '10px', textDecoration: 'none', minWidth: '100px', transition: 'border-color 0.2s, box-shadow 0.2s', cursor: 'pointer' }}
            onMouseEnter={(e) => { (e.currentTarget).style.borderColor = p.color; (e.currentTarget).style.boxShadow = `0 2px 8px ${p.color}20`; }}
            onMouseLeave={(e) => { (e.currentTarget).style.borderColor = ''; (e.currentTarget).style.boxShadow = ''; }}
          >
            <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: `${p.color}18`, border: `2px solid ${p.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: p.color }}>{p.initials}</div>
            <div style={{ textAlign: 'center' }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', fontWeight: 600, color: C.text }}>{p.name}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>{p.role}</div>
            </div>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: p.color, background: `${p.color}10`, padding: '2px 6px', borderRadius: '8px' }}>View Profile &#8599;</div>
          </a>
        ))}
      </div>

      {/* FILTER TABS */}
      <div style={{ display: 'flex', gap: '6px', marginBottom: '16px', flexWrap: 'wrap' }}>
        {FILTER_LABELS.map(f => (
          <button
            key={f.key}
            onClick={() => setFilter(f.key)}
            style={{
              fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.08em',
              padding: '6px 14px', borderRadius: '20px', cursor: 'pointer',
              border: `1px solid ${filter === f.key ? C.accent : C.border}`,
              background: filter === f.key ? C.accentDim : 'transparent',
              color: filter === f.key ? C.accent : C.muted,
              fontWeight: filter === f.key ? 600 : 400,
              transition: 'all 0.15s',
            }}
          >
            {f.label} <span style={{ opacity: 0.6 }}>({f.count})</span>
          </button>
        ))}
      </div>

      {/* FEED */}
      {filtered.map((item) => {
        const isLiked = likedPosts.has(item.id);
        const borderColor = TYPE_BORDER[item.type] || C.border;
        const isSocial = item.type === 'internal' || item.type === 'social';

        return (
          <Card key={item.id} style={{ marginBottom: '10px', borderLeft: `3px solid ${borderColor}`, padding: '16px 20px' }}>
            {/* Header: Author or Source */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '10px' }}>
              <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                {item.author ? (
                  <>
                    <div style={{ width: '36px', height: '36px', borderRadius: '50%', background: `${item.author.color}18`, border: `2px solid ${item.author.color}`, display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 700, color: item.author.color, flexShrink: 0 }}>{item.author.initials}</div>
                    <div>
                      <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{item.author.name}</div>
                      <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>{item.author.role} · {item.date}</div>
                    </div>
                  </>
                ) : (
                  <div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>
                      {item.type === 'competitor' ? '🔴 Competitor Activity' : item.source}
                    </div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.ghost }}>{item.date}</div>
                  </div>
                )}
              </div>
              <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                <Chip color={CATEGORY_COLORS[item.category] || C.muted}>{item.category}</Chip>
                {item.sourceUrl && (
                  <a href={item.sourceUrl} target="_blank" rel="noopener noreferrer" style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textDecoration: 'none', padding: '2px 6px', border: `1px solid ${C.accent}30`, borderRadius: '4px' }}>Source &#8599;</a>
                )}
              </div>
            </div>

            {/* Headline (articles) */}
            {item.headline && (
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.text, lineHeight: 1.4, marginBottom: '8px' }}>
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

            {/* Relevance Note */}
            <div style={{ padding: '8px 12px', background: C.accentGlow, borderRadius: '6px', fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent, marginBottom: isSocial ? '12px' : '0' }}>
              <strong>Why this matters:</strong> {item.relevance}
            </div>

            {/* Social Engagement Bar */}
            {isSocial && item.engagement && (
              <div style={{ display: 'flex', gap: '16px', alignItems: 'center', paddingTop: '10px', borderTop: `1px solid ${C.borderSoft}`, marginTop: '4px' }}>
                <button
                  onClick={() => toggleLike(item.id)}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: isLiked ? C.accent : C.muted, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0', transition: 'color 0.15s' }}
                >
                  <span style={{ fontSize: '14px' }}>{isLiked ? '💙' : '👍'}</span> {item.engagement.likes + (isLiked ? 1 : 0)}
                </button>
                <a
                  href={item.author?.linkedIn || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.muted, textDecoration: 'none', cursor: 'pointer' }}
                >
                  <span style={{ fontSize: '14px' }}>💬</span> {item.engagement.comments}
                </a>
                <button
                  onClick={() => {
                    const text = item.author ? `"${item.excerpt.substring(0, 100)}..." via ${item.author.name}` : item.headline;
                    navigator.clipboard.writeText(text || '');
                  }}
                  style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.muted, background: 'none', border: 'none', cursor: 'pointer', padding: '4px 0' }}
                >
                  <span style={{ fontSize: '14px' }}>🔗</span> {item.engagement.shares}
                </button>
                {item.author?.linkedIn && (
                  <a
                    href={item.author.linkedIn}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ marginLeft: 'auto', fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, background: C.accentDim, padding: '4px 10px', borderRadius: '12px', textDecoration: 'none', border: `1px solid ${C.accent}30` }}
                  >
                    View on LinkedIn &#8599;
                  </a>
                )}
              </div>
            )}
          </Card>
        );
      })}

      {/* AI RESEARCH RUNNER */}
      <Divider label="Generate Fresh Intelligence" />
      <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '8px' }}>Run AI-powered research to surface the latest developments across Duininck's operating sectors.</Body>

      <ResearchRunner steps={NEWS_STEPS} context="Duininck Companies is a fourth-generation family business portfolio in Minnesota operating across water management (Prinsco), heavy civil construction, concrete/materials, golf course design, and real estate development." />
    </div>
  );
}
