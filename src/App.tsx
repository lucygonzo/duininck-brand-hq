import { useState } from 'react';
import { C } from './components/ui';

// Pages
import OverviewPage from './pages/Overview';
import CompanyPage from './pages/Company';
import BrandIdentityPage from './pages/BrandIdentity';
import VisualIdentityPage from './pages/VisualIdentity';
import VerbalIdentityPage from './pages/VerbalIdentity';
import BrandArchitecturePage from './pages/BrandArchitecture';
import AudiencePage from './pages/Audience';
import CompetitivePage from './pages/Competitive';
import GapPage from './pages/GapAnalysis';
import LandscapePage from './pages/Landscape';
import NewsFeedPage from './pages/NewsFeed';
import ResearchPipelinePage from './pages/ResearchPipeline';
import ActionsPage from './pages/Actions';
import DecisionsPage from './pages/Decisions';
import ReportCardPage from './pages/ReportCard';

type TabId = string;
type Tab = {
  id: TabId;
  label: string;
  component: React.ComponentType;
  research?: { complete: number; total: number };
};
type Group = { group: string; tabs: Tab[] };

// Research progress per tab.
// Tabs without a 'research' field are fully ready.
// Tabs with research.complete < research.total show muted with progress.
const NAV: Group[] = [
  { group: 'Foundation', tabs: [
    { id: 'overview', label: 'Overview', component: OverviewPage },
    { id: 'company', label: 'Company Profile', component: CompanyPage },
    { id: 'landscape', label: 'Industry Landscape', component: LandscapePage },
    { id: 'newsfeed', label: 'Live News Feed', component: NewsFeedPage, research: { complete: 0, total: 3 } },
  ]},
  { group: 'Brand', tabs: [
    { id: 'identity', label: 'Brand Identity', component: BrandIdentityPage },
    { id: 'architecture', label: 'Brand Architecture', component: BrandArchitecturePage },
    { id: 'visual', label: 'Visual Identity', component: VisualIdentityPage, research: { complete: 3, total: 6 } },
    { id: 'verbal', label: 'Verbal Identity', component: VerbalIdentityPage, research: { complete: 4, total: 5 } },
  ]},
  { group: 'Market', tabs: [
    { id: 'audience', label: 'Audience', component: AudiencePage, research: { complete: 7, total: 8 } },
    { id: 'competitive', label: 'Competitive', component: CompetitivePage, research: { complete: 10, total: 12 } },
    { id: 'gap', label: 'Gap Analysis', component: GapPage },
  ]},
  { group: 'Workspace', tabs: [
    { id: 'pipeline', label: 'Research Pipeline', component: ResearchPipelinePage },
    { id: 'actions', label: 'Action Items', component: ActionsPage },
    { id: 'decisions', label: 'Decision Log', component: DecisionsPage },
    { id: 'reportcard', label: 'Report Card', component: ReportCardPage },
  ]},
];

function ResearchBadge({ complete, total }: { complete: number; total: number }) {
  const pct = Math.round((complete / total) * 100);
  const isZero = complete === 0;

  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '3px',
        fontFamily: "'JetBrains Mono', monospace",
        fontSize: '7px',
        color: isZero ? C.ghost : C.orange,
        marginLeft: 'auto',
        flexShrink: 0,
      }}
    >
      <span
        style={{
          display: 'inline-block',
          width: '20px',
          height: '3px',
          background: `${C.border}`,
          borderRadius: '2px',
          overflow: 'hidden',
          position: 'relative',
        }}
      >
        <span
          style={{
            position: 'absolute',
            left: 0,
            top: 0,
            height: '100%',
            width: `${pct}%`,
            background: isZero ? C.ghost : C.orange,
            borderRadius: '2px',
            transition: 'width 0.3s',
          }}
        />
      </span>
      <span>{complete}/{total}</span>
    </span>
  );
}

export default function App() {
  const [activeTab, setActiveTab] = useState<TabId>('overview');
  const allTabs = NAV.flatMap(g => g.tabs);
  const active = allTabs.find(t => t.id === activeTab) ?? allTabs[0];
  const ActiveComponent = active.component;

  return (
    <div style={{ display: 'flex', height: '100vh', background: C.bg, overflow: 'hidden' }}>
      {/* Sidebar */}
      <nav style={{ width: '220px', flexShrink: 0, background: '#FFFFFF', borderRight: `1px solid ${C.border}`, display: 'flex', flexDirection: 'column', boxShadow: '1px 0 4px rgba(0,0,0,0.04)' }}>
        {/* Logo */}
        <div style={{ padding: '20px 18px', borderBottom: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: C.accent, letterSpacing: '-0.02em' }}>Duininck</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.16em', marginTop: '3px' }}>Brand HQ · Mar 2026</div>
        </div>

        {/* Nav groups */}
        <div style={{ flex: 1, overflowY: 'auto', padding: '10px 0' }}>
          {NAV.map(group => (
            <div key={group.group} style={{ marginBottom: '6px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.18em', padding: '4px 18px 5px' }}>
                {group.group}
              </div>
              {group.tabs.map(tab => {
                const isActive = activeTab === tab.id;
                const needsResearch = tab.research && tab.research.complete < tab.research.total;
                const isGhost = needsResearch && !isActive;

                return (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      width: '100%',
                      textAlign: 'left',
                      padding: '7px 18px',
                      fontFamily: "'Inter', sans-serif",
                      fontSize: '12px',
                      fontWeight: isActive ? 600 : 400,
                      color: isActive ? C.accent : isGhost ? C.ghost : C.sub,
                      background: isActive ? C.accentDim : 'transparent',
                      border: 'none',
                      cursor: 'pointer',
                      borderLeft: `2px solid ${isActive ? C.accent : 'transparent'}`,
                      transition: 'all 0.15s',
                      opacity: isGhost ? 0.6 : 1,
                      gap: '4px',
                    }}
                  >
                    <span style={{ flex: 1 }}>{tab.label}</span>
                    {tab.research && tab.research.complete < tab.research.total && (
                      <ResearchBadge complete={tab.research.complete} total={tab.research.total} />
                    )}
                  </button>
                );
              })}
            </div>
          ))}
        </div>

        {/* Research Progress Summary */}
        <div style={{ padding: '10px 18px', borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
          {(() => {
            const allResearch = NAV.flatMap(g => g.tabs).filter(t => t.research);
            const totalComplete = allResearch.reduce((sum, t) => sum + (t.research?.complete ?? 0), 0);
            const totalAll = allResearch.reduce((sum, t) => sum + (t.research?.total ?? 0), 0);
            const pct = totalAll > 0 ? Math.round((totalComplete / totalAll) * 100) : 0;
            return (
              <>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '4px' }}>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em' }}>Research</span>
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.orange, fontWeight: 600 }}>{pct}%</span>
                </div>
                <div style={{ width: '100%', height: '4px', background: C.border, borderRadius: '2px', overflow: 'hidden' }}>
                  <div style={{ height: '100%', width: `${pct}%`, background: C.orange, borderRadius: '2px', transition: 'width 0.3s' }} />
                </div>
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.ghost, marginTop: '3px' }}>{totalComplete}/{totalAll} tasks across {allResearch.length} sections</div>
              </>
            );
          })()}
        </div>

        {/* Brand Guide Link */}
        <div style={{ padding: '10px 18px', flexShrink: 0 }}>
          <a href="brand-guide.html" target="_blank" rel="noopener noreferrer" style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '8px 12px', background: C.accentDim, border: `1px solid ${C.accent}30`, borderRadius: '8px', textDecoration: 'none', transition: 'border-color 0.2s' }}>
            <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', fontWeight: 600, color: C.accent }}>Brand Guide</span>
            <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginLeft: 'auto' }}>&#8599;</span>
          </a>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.ghost, marginTop: '6px', paddingLeft: '2px' }}>Shareable external reference</div>
        </div>

        {/* Footer */}
        <div style={{ padding: '10px 18px', borderTop: `1px solid ${C.border}`, flexShrink: 0 }}>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted }}>4th Gen · Est. 1926</div>
          <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, marginTop: '1px' }}>duininckcompanies.com</div>
        </div>
      </nav>

      {/* Main content */}
      <main style={{ flex: 1, overflowY: 'auto', padding: '32px 36px' }}>
        <div style={{ maxWidth: '960px' }}>
          <ActiveComponent />
        </div>
      </main>
    </div>
  );
}
