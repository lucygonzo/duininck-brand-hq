import { useState } from 'react';
import { SectionHeader, Callout, Card, Chip, Divider, C } from '../components/ui';

type SettingsTab = 'sources' | 'filters' | 'brand-context' | 'digest';
const F = { body: "'Inter', sans-serif", mono: "'JetBrains Mono', monospace" };

const TABS: { key: SettingsTab; label: string; icon: string }[] = [
  { key: 'sources', label: 'Sources', icon: '📡' },
  { key: 'filters', label: 'Filters', icon: '🔍' },
  { key: 'brand-context', label: 'Brand Context', icon: '🧭' },
  { key: 'digest', label: 'Digest Schedule', icon: '📬' },
];

const statusBadge = (status: string, color: string) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', color, background: `${color}10`, padding: '2px 8px', borderRadius: '8px' }}>{status}</span>
);
const needsBadge = (text: string) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', color: C.amber, background: C.amberDim, padding: '2px 8px', borderRadius: '8px' }}>{text}</span>
);
const row = (left: React.ReactNode, right: React.ReactNode, border = true) => (
  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: border ? `1px solid ${C.borderSoft}` : 'none' }}>{left}{right}</div>
);

export default function IntelligenceSettingsPage() {
  const [tab, setTab] = useState<SettingsTab>('sources');

  return (
    <div>
      <SectionHeader num="Intelligence" title="Intelligence Settings" sub="Configure feed sources, noise filters, brand context, and digest delivery." />

      <Callout>
        Control what intelligence surfaces in the Daily Brief and Live News Feed. Green items are active and collecting data. Amber items need Nicole's access or credentials to connect.
      </Callout>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', borderBottom: `1px solid ${C.border}`, paddingBottom: '0' }}>
        {TABS.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            style={{
              fontFamily: F.body, fontSize: '12px', fontWeight: tab === t.key ? 600 : 400,
              color: tab === t.key ? C.accent : C.muted, background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 16px', borderBottom: `2px solid ${tab === t.key ? C.accent : 'transparent'}`,
              transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            <span style={{ fontSize: '13px' }}>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* ===== SOURCES ===== */}
      {tab === 'sources' && (
        <div>
          {/* RSS Feeds */}
          <Divider label="RSS Feed Sources" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>Industry publications monitored for articles relevant to Duininck's operating sectors. New articles appear in the Live News Feed automatically.</div>
            {[
              { name: 'Construction Dive', url: 'constructiondive.com/feeds/news/', last: 'Apr 8 · 5:02 AM', items: '23 articles this week' },
              { name: 'LINKS Magazine', url: 'linksmagazine.com/feed/', last: 'Apr 8 · 5:02 AM', items: '8 articles this week' },
              { name: 'GolfPass', url: 'golfpass.com/feed/', last: 'Apr 8 · 5:02 AM', items: '12 articles this week' },
            ].map((src, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: C.text }}>{src.name}</span>
                    <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '2px' }}>{src.url}</div>
                  </div>
                  {statusBadge('Active', C.success)}
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.ghost, marginTop: '4px' }}>Last fetch: {src.last} · {src.items}</div>
              </div>
            ))}
            <div style={{ marginTop: '12px', padding: '10px', background: C.s2, borderRadius: '6px' }}>
              <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Recommended additions</div>
              {['Engineering News-Record (enr.com/feed/)', 'Roads & Bridges (roadsbridges.com/rss)', 'Golf Course Architecture (golfcoursearchitecture.net/feed/)'].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                  <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{r}</span>
                  {statusBadge('Add →', C.accent)}
                </div>
              ))}
            </div>
          </Card>

          {/* Social Channels */}
          <Divider label="Social Channels" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>Social platform connections for monitoring mentions, engagement, and competitor activity.</div>
            {[
              { name: 'LinkedIn · Duininck Inc.', handle: 'linkedin.com/company/duininck', status: 'Manual tracking', statusColor: C.amber, detail: 'Follower count (2,662) and post URLs tracked manually. API connection requires LinkedIn Marketing Developer Platform access.', action: 'Nicole to request API access' },
              { name: 'LinkedIn · Duininck Golf', handle: 'linkedin.com/company/duininck-golf', status: 'Dormant', statusColor: C.red, detail: 'Page exists but no posts since 2023. Activation recommended before connecting.', action: 'Reactivate page first' },
              { name: 'Facebook · Duininck', handle: 'Estimated 500+ followers', status: 'Not connected', statusColor: C.ghost, detail: 'Facebook page exists but analytics access requires admin role on the page.', action: 'Nicole to grant page admin access' },
              { name: 'Google Business Profile', handle: '4.2★ · 9 reviews · Willmar, MN', status: 'Manual tracking', statusColor: C.amber, detail: 'Review count and rating tracked manually. API connection requires Google Business Profile API verification.', action: 'Nicole to verify business ownership' },
              { name: 'X (Twitter)', handle: 'No active account identified', status: 'Not applicable', statusColor: C.ghost, detail: 'Duininck does not appear to have an active X/Twitter account. Not a priority channel.', action: 'Skip for now' },
            ].map((ch, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < 4 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <span style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: C.text }}>{ch.name}</span>
                    <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, marginTop: '2px' }}>{ch.handle}</div>
                  </div>
                  {statusBadge(ch.status, ch.statusColor)}
                </div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '4px', lineHeight: 1.5 }}>{ch.detail}</div>
                {ch.action && ch.statusColor !== C.ghost && (
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.amber, marginTop: '4px', fontWeight: 600 }}>→ {ch.action}</div>
                )}
              </div>
            ))}
          </Card>

          {/* Search Monitoring */}
          <Divider label="Search & Mention Monitoring" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>Keywords and phrases being monitored across Google, social platforms, and review sites.</div>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Active search queries</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
              {['"Duininck"', '"Duininck Companies"', '"Duininck Golf"', '"Duininck Concrete"', '#Duininck100', '#TheDuininckWay', '"Prinsco"', '"Willmar construction"', '"Prinsburg MN"'].map((q, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, background: C.accentDim, padding: '4px 10px', borderRadius: '12px', border: `1px solid ${C.accent}20` }}>{q}</span>
              ))}
            </div>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Tracked hashtags</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '14px' }}>
              {['#Duininck100', '#TeamDuininck', '#BuildingStrongCommunities', '#TheDuininckWay', '#SafeDigging', '#MNConstruction'].map((h, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.orange, background: C.orangeDim, padding: '4px 10px', borderRadius: '12px', border: `1px solid ${C.orange}20` }}>{h}</span>
              ))}
            </div>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Review sites monitored</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Google Reviews', 'Glassdoor', 'Indeed', 'Facebook Reviews'].map((r, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.teal, background: C.tealDim, padding: '4px 10px', borderRadius: '12px', border: `1px solid ${C.teal}20` }}>{r}</span>
              ))}
            </div>
          </Card>

          {/* Competitor Watchlist */}
          <Divider label="Competitor Watchlist" />
          <Card style={{ padding: '20px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>Companies monitored for hiring activity, content strategy, awards, and market positioning.</div>
            {[
              { name: 'Knife River Corporation', channels: 'LinkedIn, Instagram (@lifeatknife)', focus: 'Employer brand, seasonal hiring campaigns, CDL recruiting', last: '4 posts detected this week', color: C.red },
              { name: 'Ames Construction', channels: 'LinkedIn', focus: 'ESOP messaging, employee ownership brand play, heavy civil bids', last: '2 posts detected this week', color: C.red },
              { name: 'Landscapes Unlimited', channels: 'LinkedIn, NGF listings', focus: 'Golf construction portfolio, NGF Top 100, international expansion', last: '1 post detected this week', color: C.red },
            ].map((comp, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: C.text }}>{comp.name}</span>
                  <Chip color={comp.color}>Watching</Chip>
                </div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '4px' }}>Channels: {comp.channels}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '2px' }}>Focus: {comp.focus}</div>
                <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.ghost, marginTop: '4px' }}>{comp.last}</div>
              </div>
            ))}
            <div style={{ marginTop: '12px', padding: '10px', background: C.s2, borderRadius: '6px' }}>
              <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>Recommended additions</div>
              {['Dunn Construction (MN regional)', 'Bolander & Sons (family-owned MN)', 'Wadsworth Golf Construction'].map((r, i) => (
                <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '4px 0' }}>
                  <span style={{ fontFamily: F.body, fontSize: '11px', color: C.sub }}>{r}</span>
                  {statusBadge('Add →', C.accent)}
                </div>
              ))}
            </div>
          </Card>
        </div>
      )}

      {/* ===== FILTERS ===== */}
      {tab === 'filters' && (
        <div>
          <Divider label="Relevance Scoring" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>Items are scored 0–100 based on keyword match, source authority, and strategic alignment. Only items above the threshold appear in the Daily Brief.</div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '16px' }}>
              {[
                { label: 'Minimum Score', value: '40', note: 'Items below 40 are filtered out' },
                { label: 'Featured Threshold', value: '75', note: 'Items 75+ auto-flagged as featured' },
                { label: 'Alert Threshold', value: '90', note: 'Items 90+ trigger immediate alert' },
              ].map((t, i) => (
                <div key={i} style={{ padding: '12px', background: C.s2, borderRadius: '8px', textAlign: 'center' }}>
                  <div style={{ fontFamily: F.body, fontSize: '24px', fontWeight: 800, color: C.accent }}>{t.value}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginTop: '2px' }}>{t.label}</div>
                  <div style={{ fontFamily: F.body, fontSize: '9px', color: C.ghost, marginTop: '4px' }}>{t.note}</div>
                </div>
              ))}
            </div>
          </Card>

          <Divider label="Keyword Rules" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.success, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Boost keywords (+15 relevance score each)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {['centennial', '100 years', 'Duininck', 'golf course construction', 'employer brand', 'skilled trades', 'CDL', 'equipment operator', 'family business', 'IIJA', 'MnDOT', 'Hazeltine', 'Erin Hills', 'Willmar'].map((k, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.success, background: C.successDim, padding: '3px 10px', borderRadius: '10px' }}>+{k}</span>
              ))}
            </div>

            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.red, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Suppress keywords (-30 relevance score each)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px', marginBottom: '16px' }}>
              {['crypto', 'NFT', 'stock market', 'residential housing', 'real estate investing', 'political campaign', 'press release template'].map((k, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.red, background: C.redDim, padding: '3px 10px', borderRadius: '10px' }}>−{k}</span>
              ))}
            </div>

            <div style={{ fontFamily: F.mono, fontSize: '8px', color: C.amber, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '8px' }}>Competitor alert keywords (auto-flag as competitor activity)</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '6px' }}>
              {['Knife River', 'Ames Construction', 'Landscapes Unlimited', '@lifeatknife', 'ESOP construction', 'NGF Top 100'].map((k, i) => (
                <span key={i} style={{ fontFamily: F.mono, fontSize: '10px', color: C.amber, background: C.amberDim, padding: '3px 10px', borderRadius: '10px' }}>⚡{k}</span>
              ))}
            </div>
          </Card>

          <Divider label="Deduplication & Noise" />
          <Card style={{ padding: '20px' }}>
            {[
              { rule: 'Duplicate URL suppression', status: 'Active', desc: 'Same article URL from multiple RSS feeds shows once' },
              { rule: 'Headline similarity (>85%)', status: 'Active', desc: 'Nearly identical headlines from different outlets are grouped' },
              { rule: 'Low-engagement social filter', status: 'Active', desc: 'Social mentions with <5 interactions suppressed unless from tracked accounts' },
              { rule: 'Press release filter', status: 'Active', desc: 'Wire service press releases de-prioritized unless keyword match >2' },
              { rule: 'Stale content filter', status: 'Active', desc: 'Articles older than 14 days suppressed from Daily Brief (still in feed)' },
            ].map((r, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 4 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 600, color: C.text }}>{r.rule}</div>
                  <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '2px' }}>{r.desc}</div>
                </div>
                {statusBadge(r.status, C.success)}
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* ===== BRAND CONTEXT ===== */}
      {tab === 'brand-context' && (
        <div>
          <Divider label="Brand Context Brief" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
              <div style={{ fontFamily: F.body, fontSize: '14px', fontWeight: 600, color: C.text }}>Active Brief</div>
              {statusBadge('Live · Scoring active', C.success)}
            </div>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, lineHeight: 1.6, marginBottom: '12px' }}>
              This brief tells the AI relevance engine what matters to Duininck. It influences how articles are scored, which competitor signals get flagged, and what context appears in "Why this matters" analysis.
            </div>
            <div style={{ padding: '14px', background: C.s2, borderRadius: '8px', fontFamily: F.mono, fontSize: '10px', color: C.text, lineHeight: 1.8, border: `1px solid ${C.border}` }}>
              <strong>Company:</strong> Duininck Companies — fourth-generation family business portfolio based in Prinsburg, MN. Est. 1926. Fourth generation active in leadership (Sam Duininck, business development). CMO: Nicole Behne (ex-Polaris, ex-Hormel).<br /><br />
              <strong>Divisions:</strong> Heavy civil construction (roads, bridges, utilities), Duininck Golf (championship course construction — Hazeltine, Erin Hills), Prinsco (plastic pipe manufacturing), Duininck Concrete (transitioning to main brand).<br /><br />
              <strong>Strategic priorities (2026):</strong><br />
              1. Centennial celebration — July 25, 2026 at Willmar Civic Center. Target 2,000+ attendees.<br />
              2. Employer brand development — whole person framework, crew professionalism stories, Ridgewater College pipeline.<br />
              3. Duininck Golf social restart — dormant since 2023, architects actively selecting builders.<br />
              4. Brand unification — consolidate Duininck Concrete into main brand, green rebrand.<br />
              5. Digital visibility — SEO, GEO foundation, Google Business optimization.<br /><br />
              <strong>Geography:</strong> MN, SD, TX, GA (active project states).<br />
              <strong>Competitors:</strong> Knife River (employer brand), Ames Construction (ESOP), Landscapes Unlimited (golf).
            </div>
          </Card>

          <Divider label="Tenet Definitions" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>Strategy tenets used to classify signals in the Daily Brief. Each tenet maps to a strategic priority.</div>
            {[
              { tenet: 'Centennial Awareness', maps: 'July 25 event, heritage content, community response, #Duininck100', keywords: 'centennial, 100 years, heritage, founding, Prinsburg, celebration' },
              { tenet: 'Employer Brand', maps: 'Recruiting, retention, Glassdoor, Indeed, crew stories, whole person', keywords: 'hiring, careers, CDL, operator, safety record, benefits, culture' },
              { tenet: 'Golf Social Restart', maps: 'Duininck Golf digital presence, architect relationships, portfolio', keywords: 'golf course, renovation, Hazeltine, Erin Hills, architect, builder' },
              { tenet: 'Construction Season', maps: 'Active project mentions, crew deployment, safety, MnDOT, IIJA', keywords: 'construction season, road work, bridge, paving, grading, MnDOT' },
              { tenet: 'Brand Unification', maps: 'Duininck Concrete transition, green rebrand, sub-brand consolidation', keywords: 'Duininck Concrete, rebrand, logo, brand architecture, Prinsco' },
            ].map((t, i) => (
              <div key={i} style={{ padding: '10px 0', borderBottom: i < 4 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: C.text }}>{t.tenet}</div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '2px' }}>Maps to: {t.maps}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '4px' }}>Keywords: {t.keywords}</div>
              </div>
            ))}
          </Card>

          <Card style={{ padding: '14px 18px', background: `${C.accent}04`, border: `1px solid ${C.accent}20` }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.accent, lineHeight: 1.6 }}>
              <strong>Last updated:</strong> Apr 8, 2026 · Brief was built from CMO discovery call (Mar 12), 31 research files, and live website audit. Next review recommended after centennial event (July 25).
            </div>
          </Card>
        </div>
      )}

      {/* ===== DIGEST SCHEDULE ===== */}
      {tab === 'digest' && (
        <div>
          <Divider label="Delivery Configuration" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '14px' }}>Configure how and when intelligence digests are delivered. Active deliveries run automatically.</div>
            {[
              { label: 'Daily Brief', desc: 'Full intelligence digest generated at 5:00 AM CT daily', status: 'Active', statusColor: C.success, detail: 'Delivered to in-app Daily Brief page. Email delivery available once Nicole provides recipient list.' },
              { label: 'Weekly Synthesis', desc: 'Consolidated rollup every Monday at 8:00 AM CT', status: 'Configured', statusColor: C.amber, detail: 'Template built in Go-to-Market → Weekly Synthesis tab. Awaiting first full week of data to generate.' },
              { label: 'Spike Alerts', desc: 'Immediate notification when signal volume exceeds 3x baseline', status: 'Active', statusColor: C.success, detail: 'Running every 4 hours. 0 alerts fired this week (no spikes above threshold). Centennial announcement came close (2.4x).' },
              { label: 'Competitor Alert', desc: 'Flagged when a watched competitor posts 3+ items in a day', status: 'Active', statusColor: C.success, detail: 'Knife River triggered 1 alert this week (4 hiring posts on Apr 5). Alert visible in Daily Brief.' },
              { label: 'Email Digest', desc: 'Morning summary to nicole@duininckcompanies.com', status: 'Needs setup', statusColor: C.ghost, detail: 'Requires SMTP configuration or email service connection. Ready to activate once Nicole confirms preferred email.' },
              { label: 'Slack Integration', desc: '#brand-intelligence channel notifications', status: 'Not applicable', statusColor: C.ghost, detail: 'Duininck does not currently use Slack. Revisit if team communication tools change.' },
            ].map((d, i) => (
              <div key={i} style={{ padding: '12px 0', borderBottom: i < 5 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: F.body, fontSize: '13px', fontWeight: 600, color: C.text }}>{d.label}</div>
                    <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '2px' }}>{d.desc}</div>
                  </div>
                  {statusBadge(d.status, d.statusColor)}
                </div>
                <div style={{ fontFamily: F.body, fontSize: '10px', color: C.sub, marginTop: '6px', lineHeight: 1.5 }}>{d.detail}</div>
              </div>
            ))}
          </Card>

          <Divider label="Agent Schedule" />
          <Card style={{ padding: '20px' }}>
            <div style={{ fontFamily: F.body, fontSize: '11px', color: C.sub, marginBottom: '12px' }}>StartSuite agents run on a fixed schedule. All times Central.</div>
            {[
              { agent: 'Brand Mention Collector', schedule: 'Daily · 5:00 AM CT', status: 'Active' },
              { agent: 'Filter Agent', schedule: 'Daily · 5:03 AM CT (after collector)', status: 'Active' },
              { agent: 'Analysis Agent', schedule: 'Daily · 5:05 AM CT (after filter)', status: 'Active' },
              { agent: 'Competitor Agent', schedule: 'Daily · 5:07 AM CT', status: 'Active' },
              { agent: 'Spike Detection', schedule: 'Every 4 hours (6x daily)', status: 'Active' },
            ].map((a, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '6px 0', borderBottom: i < 4 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div>
                  <div style={{ fontFamily: F.body, fontSize: '12px', fontWeight: 600, color: C.text }}>{a.agent}</div>
                  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '1px' }}>{a.schedule}</div>
                </div>
                {statusBadge(a.status, C.success)}
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
