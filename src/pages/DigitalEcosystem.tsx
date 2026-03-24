import { useState } from 'react';
import { DIGITAL_ECOSYSTEM, SEO_BASELINE, CONTENT_INTEL, VISUAL_IDENTITY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, StatBox, Divider, ProgressBar, C } from '../components/ui';

const TABS = ['Overview', 'Web Properties', 'Social Media', 'Content Strategy', 'SEO & Search'];
const DE = DIGITAL_ECOSYSTEM;
const SEO = SEO_BASELINE;

export default function DigitalEcosystemPage() {
  const [tab, setTab] = useState(TABS[0]);
  const [expandedProperty, setExpandedProperty] = useState<number | null>(null);

  return (
    <div>
      <SectionHeader num="08 / GTM" title="Digital Ecosystem" sub="All digital properties, social presence, content strategy, and search visibility across the Duininck portfolio." />

      <Callout>
        Duininck operates 6 websites, 8+ social accounts, and zero shared visual or verbal identity across them. {DE.fragmentationScore}. This tab maps everything that exists, identifies what's broken, and prioritizes what to fix first.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {/* ===== TAB 1: OVERVIEW ===== */}
      {tab === 'Overview' && (
        <div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: '10px', marginTop: '16px', marginBottom: '16px' }}>
            <StatBox value="6" label="Web Properties" note="Zero visual connection between them" />
            <StatBox value="1,800" label="LinkedIn Followers" note="vs. Ames at 35,000" />
            <StatBox value="4.0%" label="Industry Avg Engagement" note="LinkedIn (highest of any industry)" />
            <StatBox value="0" label="First-Page Rankings" note="For core service keywords" />
          </div>

          <Divider label="Digital Fragmentation" />
          <Card style={{ borderLeft: `4px solid ${C.orange}`, marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.orange, marginBottom: '6px' }}>The Core Problem</div>
            <Body style={{ fontSize: '12px' }}>
              Duininck's digital presence looks like 6 different companies. A GC visiting duininck.com has no idea the company also builds championship golf courses. A golf architect on duininckgolf.com has no idea they're backed by a 100-year, vertically integrated family company. Prinsco customers don't know Prinsco is part of a family portfolio at all. Every property operates in isolation, and every audience sees only one fragment of the whole.
            </Body>
          </Card>

          <Divider label="Social Presence Comparison" />
          <Card style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  {['Company', 'LinkedIn', 'Instagram', 'Facebook'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {DE.socialComparison.map((row, i) => {
                  const isDuininck = row.company.includes('Duininck');
                  return (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}`, background: isDuininck ? C.accentGlow : 'transparent' }}>
                      <td style={{ padding: '8px', fontWeight: isDuininck ? 700 : 400, color: isDuininck ? C.accent : C.text }}>{row.company}</td>
                      <td style={{ padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: C.sub }}>{row.linkedin}</td>
                      <td style={{ padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: row.instagram.includes('Dark') ? C.red : C.sub }}>{row.instagram}</td>
                      <td style={{ padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '11px', color: row.facebook.includes('Dark') ? C.red : C.sub }}>{row.facebook}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>

          <Block variant="amber" style={{ marginTop: '16px' }}>
            <strong>Key gap:</strong> Ames has 35,000 LinkedIn followers. Duininck has 1,800. Knife River has a dedicated employer brand Instagram (@lifeatknife) with 2,385 followers and 696 posts. Duininck Golf is dark on every platform. The visibility gap is not about content quality. Duininck simply isn't showing up.
          </Block>
        </div>
      )}

      {/* ===== TAB 2: WEB PROPERTIES ===== */}
      {tab === 'Web Properties' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>All Duininck Web Properties</Lbl>
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Click any property to see the SEO audit detail. Issues highlighted in red need immediate attention.</Body>

          {DE.properties.map((prop, i) => {
            const audit = SEO.propertyAudits.find(a => prop.url.includes(a.url.replace('www.', '')));
            const isExpanded = expandedProperty === i;
            return (
              <Card key={i} onClick={() => setExpandedProperty(isExpanded ? null : i)} style={{ marginBottom: '8px', cursor: 'pointer', borderLeft: `3px solid ${prop.url.includes('Legacy') ? C.red : C.accent}` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.text }}>{prop.url}</div>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '2px' }}>{prop.purpose}</div>
                  </div>
                  <div style={{ display: 'flex', gap: '6px', alignItems: 'center' }}>
                    {prop.linkedIn !== 'N/A' && (
                      <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.sub }}>{prop.linkedIn}</span>
                    )}
                    {prop.url.includes('Legacy') && <Chip color={C.red}>Retiring</Chip>}
                    <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', color: C.muted }}>{isExpanded ? '▾' : '▸'}</span>
                  </div>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginTop: '4px' }}>{prop.connection}</div>

                {isExpanded && audit && (
                  <div style={{ marginTop: '12px', paddingTop: '12px', borderTop: `1px solid ${C.border}` }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                      <div>
                        <Lbl>Meta Title</Lbl>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.sub }}>{audit.metaTitle}</div>
                      </div>
                      <div>
                        <Lbl>Meta Description</Lbl>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: audit.metaDesc.includes('third generation') ? C.red : C.sub }}>{audit.metaDesc}</div>
                      </div>
                      <div>
                        <Lbl>H1</Lbl>
                        <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.sub }}>{audit.h1}</div>
                      </div>
                    </div>
                    <Lbl style={{ color: C.red }}>Issues</Lbl>
                    {audit.issues.map((issue, j) => (
                      <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '2px 0' }}>
                        <span style={{ color: C.red }}>&#x25CF;</span> {issue}
                      </div>
                    ))}
                  </div>
                )}
              </Card>
            );
          })}

          <Divider label="Quick Wins (This Week)" />
          {SEO.quickWins.map((win, i) => (
            <div key={i} style={{ display: 'flex', gap: '8px', alignItems: 'flex-start', padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
              <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.accent, fontWeight: 700, flexShrink: 0 }}>{String(i + 1).padStart(2, '0')}</span>
              <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>{win}</span>
            </div>
          ))}
        </div>
      )}

      {/* ===== TAB 3: SOCIAL MEDIA ===== */}
      {tab === 'Social Media' && (
        <div>
          <Divider label="Platform Strategy" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>Companies focusing on 2-3 platforms outperform those spread across all platforms. Duininck should focus on LinkedIn, Instagram, and Facebook with distinct roles for each.</Body>

          {VISUAL_IDENTITY.socialStandards.platforms.map((p, i) => (
            <Card key={i} style={{ marginBottom: '12px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.accent, marginBottom: '8px' }}>{p.platform}</div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px', marginBottom: '10px' }}>
                <div style={{ padding: '8px 10px', background: C.s2, borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Audience</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.text }}>
                    {p.platform === 'LinkedIn' ? 'GCs, engineers, industry peers, office recruiting' :
                     p.platform === 'Instagram' ? 'Golf architects, recruits, brand building, visual storytelling' :
                     'Community, blue-collar recruiting, events, employee sharing'}
                  </div>
                </div>
                <div style={{ padding: '8px 10px', background: C.s2, borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Tone</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.text }}>
                    {p.platform === 'LinkedIn' ? 'Professional, authoritative, industry thought leadership' :
                     p.platform === 'Instagram' ? 'Visual-first, aspirational, craft-focused, authentic' :
                     'Warm, community-oriented, approachable, celebratory'}
                  </div>
                </div>
                <div style={{ padding: '8px 10px', background: C.accentGlow, borderRadius: '6px' }}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.accent, textTransform: 'uppercase', marginBottom: '3px' }}>Color Emphasis</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.accent }}>{p.colorEmphasis}</div>
                </div>
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div>
                  <Lbl>Profile Picture</Lbl>
                  <Body style={{ fontSize: '11px', marginBottom: 0 }}>{p.profilePic}</Body>
                </div>
                <div>
                  <Lbl>Post Dimensions</Lbl>
                  <Body style={{ fontSize: '11px', marginBottom: 0 }}>{p.postDimensions}</Body>
                </div>
              </div>
            </Card>
          ))}

          <Divider label="Content Type Templates" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
            {VISUAL_IDENTITY.socialStandards.contentTemplates.map((ct, i) => (
              <Card key={i} style={{ padding: '14px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '6px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{ct.type}</div>
                  <Chip color={C.accent}>{ct.slides}</Chip>
                </div>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5, marginBottom: '6px' }}>{ct.structure}</div>
                <div style={{ padding: '4px 8px', background: C.accentGlow, borderRadius: '4px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.accent }}>{ct.colors}</div>
                </div>
              </Card>
            ))}
          </div>

          <Divider label="Engagement Benchmarks" />
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '10px' }}>
            <Card style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '28px', fontWeight: 800, color: C.accent }}>4.0%</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>LinkedIn avg engagement</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '4px' }}>Highest of any industry</div>
            </Card>
            <Card style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '28px', fontWeight: 800, color: C.orange }}>5.02%</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>Instagram avg engagement</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '4px' }}>Construction/industrial sector</div>
            </Card>
            <Card style={{ textAlign: 'center', padding: '16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '28px', fontWeight: 800, color: C.sub }}>2.31%</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub }}>Facebook avg engagement</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '4px' }}>Construction sector</div>
            </Card>
          </div>
        </div>
      )}

      {/* ===== TAB 4: CONTENT STRATEGY ===== */}
      {tab === 'Content Strategy' && (
        <div>
          <Divider label="Content Strategy by Channel" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '12px' }}>This view reorganizes the messaging matrix by platform instead of by audience. Each channel has a specific role, tone, and content mix.</Body>

          {[
            {
              channel: 'LinkedIn',
              role: 'Industry authority and professional credibility. Where GCs, engineers, and industry peers validate Duininck.',
              cadence: '3-4 posts per week',
              contentMix: [
                { type: 'Project completions', pct: 30, detail: 'Specs, timeline adherence, before/after. Tag the GC and county engineer.' },
                { type: 'Thought leadership', pct: 20, detail: 'Nicole publishing on construction industry trends, centennial reflections, values in business.' },
                { type: 'Team/hiring', pct: 20, detail: 'New hires, promotions, Glassdoor-worthy culture moments.' },
                { type: 'Industry engagement', pct: 15, detail: 'Comment on ENR articles, NAPA awards, AGC events. Be visible in the conversation.' },
                { type: 'Centennial content', pct: 15, detail: 'Countdown to July 25. Historic milestones. "This week in our 100 years" series.' },
              ],
            },
            {
              channel: 'Instagram',
              role: 'Visual storytelling and portfolio showcase. Where golf architects see the work, and recruits see the culture.',
              cadence: '4-5 posts per week (feed + stories)',
              contentMix: [
                { type: 'Project photography', pct: 35, detail: 'Equipment hero shots, drone footage, golden hour captures. The work as protagonist.' },
                { type: 'Golf portfolio', pct: 25, detail: 'Prestige venues in their mature beauty phase. Tag the architect. Before/during/after carousels.' },
                { type: 'Culture/recruiting', pct: 20, detail: 'Employee spotlights (photo + caption story, not video). "Hands at work" imagery.' },
                { type: 'Behind the scenes', pct: 10, detail: 'Equipment maintenance, morning crew meetups, jobsite prep. Stories format.' },
                { type: 'Centennial', pct: 10, detail: 'Historic photos, then vs. now comparisons, family story moments.' },
              ],
            },
            {
              channel: 'Facebook',
              role: 'Community connection and blue-collar recruiting. Where employees and their families encounter the brand.',
              cadence: '2-3 posts per week',
              contentMix: [
                { type: 'Community impact', pct: 30, detail: 'Completed projects in local communities. "We built the road your kids take to school."' },
                { type: 'Recruiting', pct: 25, detail: 'Job posts with pay ranges, wellbeing framework, and "We see the whole you" messaging.' },
                { type: 'Employee celebrations', pct: 20, detail: 'Safety milestones, work anniversaries, crew photos. Content employees share with their families.' },
                { type: 'Events', pct: 15, detail: 'Centennial event promotion. Career fairs. Community sponsorships.' },
                { type: 'Centennial', pct: 10, detail: 'Countdown posts. Family history. Event details as July 25 approaches.' },
              ],
            },
          ].map((ch, i) => (
            <Card key={i} style={{ marginBottom: '14px', borderLeft: `3px solid ${C.accent}` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{ch.channel}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, marginBottom: '4px' }}>{ch.role}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, marginBottom: '10px' }}>Recommended cadence: {ch.cadence}</div>

              <Lbl>Content Mix</Lbl>
              {ch.contentMix.map((mix, j) => (
                <div key={j} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start', marginBottom: '6px' }}>
                  <div style={{ width: '40px', flexShrink: 0 }}>
                    <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 700, color: C.accent }}>{mix.pct}%</div>
                  </div>
                  <div style={{ flex: 1 }}>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{mix.type}</div>
                    <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{mix.detail}</div>
                  </div>
                  <div style={{ width: '80px', flexShrink: 0 }}>
                    <ProgressBar pct={mix.pct} color={C.accent} />
                  </div>
                </div>
              ))}
            </Card>
          ))}

          <Block variant="amber">
            <strong>Status:</strong> This content strategy will be refined once Nicole confirms tool selection (Buffer replacement), team capacity, and seasonal capture timing. The cadences above assume the 3-person team plus AI-assisted content production.
          </Block>
        </div>
      )}

      {/* ===== TAB 5: SEO & SEARCH ===== */}
      {tab === 'SEO & Search' && (
        <div>
          <Card style={{ borderTop: `3px solid ${C.red}`, background: 'rgba(239,68,68,0.03)', marginTop: '16px', marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.red, marginBottom: '6px' }}>{SEO.headline}</div>
            <Body style={{ fontSize: '12px' }}>
              Brand search works (people who already know the name find them). Discovery search fails completely. A GC searching for "heavy civil contractor Minnesota" lands on Ames, McCrossan, or Park Construction. Duininck is invisible to new prospects.
            </Body>
          </Card>

          <Divider label="GEO: AI Visibility" />
          <Body style={{ fontSize: '11px', color: C.muted, marginBottom: '10px' }}>{SEO.geoInsight}</Body>
          <Card style={{ overflowX: 'auto', marginBottom: '16px' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  {['Query', 'Duininck Appears?', 'Who Shows Up Instead'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.08em' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {SEO.geoFindings.map((finding, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                    <td style={{ padding: '8px', color: C.text }}>{finding.query}</td>
                    <td style={{ padding: '8px' }}>
                      <Chip color={finding.duininckAppears === true ? '#22C55E' : finding.duininckAppears === false ? C.red : C.amber}>
                        {finding.duininckAppears === true ? 'Yes' : finding.duininckAppears === false ? 'No' : 'Maybe'}
                      </Chip>
                    </td>
                    <td style={{ padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.sub }}>{finding.whoAppears}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Divider label="GEO Action Plan" />
          {[
            { action: 'Create Wikipedia/Wikidata entry', impact: 'Highest impact GEO action. AI models heavily reference Wikipedia for company information.', effort: 'Medium (requires notability criteria met)', priority: 'Critical' },
            { action: 'Add Organization schema (JSON-LD) to all sites', impact: 'Structured data helps search engines and AI models understand what Duininck does.', effort: 'Low (developer adds to header)', priority: 'High' },
            { action: 'Build detailed project case study pages', impact: 'Each project page is a ranking opportunity and an AI-citable source.', effort: 'Medium (content creation per project)', priority: 'High' },
            { action: 'Ensure accurate industry directory listings', impact: 'AGC, NAPA, GCBAA, ENR databases feed AI training data.', effort: 'Low (verify and update)', priority: 'High' },
            { action: 'Increase content publishing to 2-4x monthly', impact: 'Freshness signals for Google. Topical authority for AI. Current: twice per year.', effort: 'Medium (requires content system)', priority: 'High' },
          ].map((item, i) => (
            <Card key={i} style={{ marginBottom: '8px', borderLeft: `3px solid ${item.priority === 'Critical' ? C.red : C.orange}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.text }}>{item.action}</div>
                <Chip color={item.priority === 'Critical' ? C.red : C.orange}>{item.priority}</Chip>
              </div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, marginBottom: '4px' }}>{item.impact}</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted }}>Effort: {item.effort}</div>
            </Card>
          ))}

          <Block variant="blue" style={{ marginTop: '16px' }}>
            <strong>Live data connection:</strong> Connect Google Analytics and Google Search Console for real-time traffic, keyword, and ranking data. Currently using estimates from SimilarWeb and manual search testing. Nicole has been asked for GA4 viewer access.
          </Block>
        </div>
      )}
    </div>
  );
}
