import { useState } from 'react';
import { SectionHeader, Callout, Card, Lbl, Body, Chip, Block, C } from '../components/ui';

type ActionItem = {
  text: string;
  owner: string;
  urgency: 'Critical' | 'High' | 'Medium' | 'Low';
  category: string;
  status: 'open' | 'in-progress' | 'done';
};

const INITIAL_ACTIONS: ActionItem[] = [
  // CRITICAL — time-sensitive
  { text: 'Build content capture calendar for 2026 construction season (Apr-Nov) — feeds 2027 content', owner: 'Lucy', urgency: 'Critical', category: 'Content Strategy', status: 'open' },
  { text: 'Restart Golf division social presence BEFORE 2026 golf season starts', owner: 'Lucy + Nicole', urgency: 'Critical', category: 'Social', status: 'open' },
  { text: 'Design social workflow to replace Excel + Buffer process', owner: 'Lucy', urgency: 'Critical', category: 'Workflow', status: 'open' },
  { text: 'Plan centennial content for July 25 event (documentary, social series, internal comms)', owner: 'Nicole + video partner', urgency: 'Critical', category: 'Centennial', status: 'open' },

  // HIGH — strategic
  { text: 'Develop blue-collar content capture playbook (cinematic b-roll, drone, voiceover — no on-camera talent)', owner: 'Lucy', urgency: 'High', category: 'Content Strategy', status: 'open' },
  { text: 'Build carousel templates: project stories (before/during/after), employee spotlights, equipment features', owner: 'Lucy', urgency: 'High', category: 'Templates', status: 'open' },
  { text: 'Create seasonal capture shot list: what to shoot, when, where, why, who is on-site to capture', owner: 'Lucy + Nicole', urgency: 'High', category: 'Content Strategy', status: 'open' },
  { text: 'Develop "whole person" employer brand positioning (Career, Family, Health, Community, Spiritual)', owner: 'Lucy', urgency: 'High', category: 'Employer Brand', status: 'open' },
  { text: 'Audit sub-brand visual consistency post-unification — website, signage, truck wraps, business cards', owner: 'Lucy', urgency: 'High', category: 'Brand Audit', status: 'open' },
  { text: 'Evaluate internal comms solutions for 700+ disconnected field employees (mobile-first)', owner: 'Nicole', urgency: 'High', category: 'Internal', status: 'open' },

  // MEDIUM — important but not urgent
  { text: 'Map competitive employer brand landscape — what are Ames, McCrossan, Knife River saying to recruits?', owner: 'Lucy', urgency: 'Medium', category: 'Research', status: 'open' },
  { text: 'Draft centennial recruiting copy: "Join a company building for 100 years — and just getting started"', owner: 'Lucy', urgency: 'Medium', category: 'Copywriting', status: 'open' },
  { text: 'Research AI-assisted content production tools Nicole\'s team can adopt (she\'s already using Claude)', owner: 'Lucy', urgency: 'Medium', category: 'Tools', status: 'open' },
  { text: 'Complete full verbal identity framework — messaging matrix by audience segment', owner: 'Lucy', urgency: 'Medium', category: 'Brand', status: 'open' },
  { text: 'Develop visual identity recommendations for unified brand', owner: 'Lucy', urgency: 'Medium', category: 'Brand', status: 'open' },

  // COMPLETED
  { text: 'Process CMO discovery meeting transcript and update Brand HQ', owner: 'Lucy', urgency: 'Critical', category: 'Discovery', status: 'done' },
  { text: 'Identify brand architecture decision (unified + niche golf + independent Prinsco)', owner: 'Lucy + Nicole', urgency: 'Critical', category: 'Strategy', status: 'done' },
];

export default function ActionsPage() {
  const [actions, setActions] = useState(INITIAL_ACTIONS);

  const toggle = (idx: number) => {
    setActions(prev => prev.map((a, i) => i === idx ? { ...a, status: a.status === 'done' ? 'open' : a.status === 'open' ? 'in-progress' : 'done' } : a));
  };

  const open = actions.filter(a => a.status !== 'done');
  const done = actions.filter(a => a.status === 'done');

  return (
    <div>
      <SectionHeader num="11 / Workspace" title="Action Items" sub="Tracked tasks, deliverables, and next steps for the Duininck brand engagement — updated post-discovery call." />
      <Callout>
        Click any item to cycle through: Open &#8594; In Progress &#8594; Done. Updated with priorities from Nicole Behne discovery call (March 12, 2026). <strong>Key insight:</strong> Nicole wants a content SYSTEM, not more content. She needs her 3-person team to operate like 10.
      </Callout>

      <Block variant="orange">
        <strong>Time-Sensitive:</strong> Golf season starts soon — golf social must restart NOW. Construction season starts April — capture calendar must be ready. Centennial event is July 25 — all centennial content needs to be planned months ahead.
      </Block>

      <Lbl>Open ({open.length})</Lbl>
      {open.map((a) => {
        const origIdx = actions.indexOf(a);
        return (
          <div key={origIdx} onClick={() => toggle(origIdx)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '10px 14px', background: a.status === 'in-progress' ? C.accentGlow : C.s1, border: `1px solid ${a.status === 'in-progress' ? C.accent : C.border}`, borderRadius: '8px', marginBottom: '4px', cursor: 'pointer', transition: 'all 0.15s' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <div style={{ width: '16px', height: '16px', borderRadius: '4px', border: `2px solid ${a.status === 'in-progress' ? C.accent : C.border}`, background: a.status === 'in-progress' ? C.accentDim : 'transparent' }} />
              <div>
                <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text }}>{a.text}</span>
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginLeft: '8px' }}>{a.category} · {a.owner}</span>
              </div>
            </div>
            <Chip color={a.urgency === 'Critical' ? C.red : a.urgency === 'High' ? C.amber : a.urgency === 'Medium' ? C.blue : C.muted}>{a.urgency}</Chip>
          </div>
        );
      })}

      {done.length > 0 && (
        <>
          <Lbl style={{ marginTop: '24px' }}>Completed ({done.length})</Lbl>
          {done.map((a) => {
            const origIdx = actions.indexOf(a);
            return (
              <div key={origIdx} onClick={() => toggle(origIdx)} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '8px 14px', background: C.successDim, border: `1px solid ${C.success}30`, borderRadius: '8px', marginBottom: '4px', cursor: 'pointer', opacity: 0.7 }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                  <div style={{ width: '16px', height: '16px', borderRadius: '4px', background: C.success, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    <span style={{ color: '#fff', fontSize: '10px' }}>&#10003;</span>
                  </div>
                  <span style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.sub, textDecoration: 'line-through' }}>{a.text}</span>
                </div>
              </div>
            );
          })}
        </>
      )}
    </div>
  );
}
