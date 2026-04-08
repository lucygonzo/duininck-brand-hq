import { useState } from 'react';
import { SectionHeader, Callout, Card, Divider, C } from '../components/ui';

type SettingsTab = 'sources' | 'filters' | 'brand-context' | 'digest';

const TABS: { key: SettingsTab; label: string; icon: string }[] = [
  { key: 'sources', label: 'Sources', icon: '📡' },
  { key: 'filters', label: 'Filters', icon: '🔍' },
  { key: 'brand-context', label: 'Brand Context', icon: '🧭' },
  { key: 'digest', label: 'Digest Schedule', icon: '📬' },
];

export default function IntelligenceSettingsPage() {
  const [tab, setTab] = useState<SettingsTab>('sources');

  return (
    <div>
      <SectionHeader num="11 / Intelligence" title="Intelligence Settings" sub="Configure feed sources, noise filters, brand context, and digest delivery." />

      <Callout>
        Control what intelligence surfaces in the Live News Feed. Add RSS sources, toggle social channels, set competitor watchlists, tune noise filters, and schedule digest delivery.
      </Callout>

      {/* Tab bar */}
      <div style={{ display: 'flex', gap: '4px', marginBottom: '20px', borderBottom: `1px solid ${C.border}`, paddingBottom: '0' }}>
        {TABS.map(t => (
          <button key={t.key} onClick={() => setTab(t.key)}
            style={{
              fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: tab === t.key ? 600 : 400,
              color: tab === t.key ? C.accent : C.muted, background: 'none', border: 'none', cursor: 'pointer',
              padding: '8px 16px', borderBottom: `2px solid ${tab === t.key ? C.accent : 'transparent'}`,
              transition: 'all 0.15s', display: 'flex', alignItems: 'center', gap: '6px',
            }}
          >
            <span style={{ fontSize: '13px' }}>{t.icon}</span> {t.label}
          </button>
        ))}
      </div>

      {/* Sources */}
      {tab === 'sources' && (
        <div>
          <Divider label="Channel Toggles" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '12px' }}>RSS Feed Sources</div>
            {['Construction Dive', 'LINKS Magazine', 'GolfPass'].map((src, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{src}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.success, background: `${C.success}10`, padding: '2px 8px', borderRadius: '8px' }}>Active</span>
              </div>
            ))}
          </Card>

          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '12px' }}>Social Channels</div>
            {[
              { name: 'LinkedIn', status: 'Pending connection' },
              { name: 'Facebook', status: 'Pending connection' },
              { name: 'X (Twitter)', status: 'Pending connection' },
            ].map((ch, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{ch.name}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.ghost, background: `${C.ghost}10`, padding: '2px 8px', borderRadius: '8px' }}>{ch.status}</span>
              </div>
            ))}
          </Card>

          <Divider label="Competitor Watchlist" />
          <Card style={{ padding: '20px' }}>
            {['Knife River Corporation', 'Landscapes Unlimited', 'Ames Construction'].map((comp, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text }}>{comp}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.red, background: `${C.red}10`, padding: '2px 8px', borderRadius: '8px' }}>Watching</span>
              </div>
            ))}
          </Card>
        </div>
      )}

      {/* Filters */}
      {tab === 'filters' && (
        <div>
          <Divider label="Noise Filter Rules" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>Relevance Thresholds</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.6 }}>
              Configure minimum relevance scores, keyword filters, and deduplication rules to reduce noise in the intelligence feed. Only items meeting the threshold appear in the main feed.
            </div>
          </Card>
          <Card style={{ padding: '24px', borderStyle: 'dashed', borderWidth: '2px', borderColor: C.border, textAlign: 'center' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.muted }}>Filter rules configuration will be available once RSS ingestion is live.</div>
          </Card>
        </div>
      )}

      {/* Brand Context */}
      {tab === 'brand-context' && (
        <div>
          <Divider label="Brand Context Brief" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>Active Brief</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '12px' }}>
              The brand context brief tells the AI relevance engine what matters to Duininck. It influences how articles are scored, which competitor signals get flagged, and what context appears in the "Why this matters" analysis.
            </div>
            <div style={{ padding: '12px', background: C.s1, borderRadius: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.text, lineHeight: 1.7 }}>
              Duininck Companies is a fourth-generation family business portfolio based in Prinsburg, MN. Operating divisions include heavy civil construction, golf course construction (Duininck Golf), and plastic pipe manufacturing (Prinsco). Key strategic priorities: centennial celebration (July 25, 2026), employer brand development, trade school pipeline, and digital presence for Duininck Golf.
            </div>
          </Card>
          <Card style={{ padding: '24px', borderStyle: 'dashed', borderWidth: '2px', borderColor: C.border, textAlign: 'center' }}>
            <button style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.accent, background: C.accentDim, border: `1px solid ${C.accent}30`, padding: '8px 20px', borderRadius: '8px', cursor: 'pointer' }}>
              Propose Update to Brief
            </button>
          </Card>
        </div>
      )}

      {/* Digest Schedule */}
      {tab === 'digest' && (
        <div>
          <Divider label="Delivery Configuration" />
          <Card style={{ padding: '20px', marginBottom: '12px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 600, color: C.text, marginBottom: '8px' }}>Digest Delivery</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, lineHeight: 1.6, marginBottom: '12px' }}>
              Configure how and when intelligence digests are delivered. Options include email summaries, Slack notifications, and in-app digest views.
            </div>
            {[
              { label: 'Daily digest', desc: 'Top 5 items each morning at 7:00 AM CT', status: 'Off' },
              { label: 'Weekly synthesis', desc: 'Full rollup every Monday at 8:00 AM CT', status: 'Off' },
              { label: 'Alert: Action Required', desc: 'Immediate notification for action-required signals', status: 'Off' },
            ].map((d, i) => (
              <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 0', borderBottom: i < 2 ? `1px solid ${C.borderSoft}` : 'none' }}>
                <div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.text }}>{d.label}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '2px' }}>{d.desc}</div>
                </div>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.ghost, background: `${C.ghost}10`, padding: '2px 8px', borderRadius: '8px' }}>{d.status}</span>
              </div>
            ))}
          </Card>
        </div>
      )}
    </div>
  );
}
