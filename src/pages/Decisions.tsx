import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, C } from '../components/ui';

export default function DecisionsPage() {
  return (
    <div>
      <SectionHeader num="12 / Workspace" title="Decision Audit Log" sub="Key brand decisions, their rationale, and status. Updated post-CMO discovery call." />
      <Callout>
        Every brand decision is logged here with context and rationale. <strong>Major update:</strong> The CMO discovery call (March 12, 2026) confirmed several critical decisions that were previously pending. The architecture question is resolved.
      </Callout>

      <Lbl>Confirmed Decisions</Lbl>
      {[
        {
          decision: 'Brand Unification Model',
          context: 'Nicole confirmed: all Duininck-named entities (Heavy Civil Midwest, Heavy Civil Texas, Concrete) are unifying under a single "Duininck" brand. The concrete brand is being eliminated entirely.',
          rationale: '"When a Duininck truck pulls up on a site, we need to represent ALL of it, not just a piece of it." The fragmented sub-brands confused customers and diluted equity.',
          owner: 'Nicole Behne (CMO)',
          dateConfirmed: 'March 12, 2026',
          status: 'CONFIRMED',
        },
        {
          decision: 'Golf Retains Niche Positioning',
          context: 'Duininck Golf keeps its distinct brand positioning with a separate website and content strategy. Fundamentally different audience from construction.',
          rationale: '"Golf still has a bit of a niche because of the architects that come to that site versus general contractors and public works." Architects searching for golf course builders won\'t find them through heavy civil marketing.',
          owner: 'Nicole Behne (CMO)',
          dateConfirmed: 'March 12, 2026',
          status: 'CONFIRMED',
        },
        {
          decision: 'Prinsco Maintains Independence',
          context: 'Prinsco (water management / plastic pipe) stays as an independent brand. Different market, different customers, established equity.',
          rationale: 'Prinsco has its own brand equity in the agricultural drainage and stormwater market. Nicole\'s scope is construction & materials sector.',
          owner: 'Nicole Behne (CMO)',
          dateConfirmed: 'March 12, 2026',
          status: 'CONFIRMED',
        },
        {
          decision: 'Project-Based Engagement (No Retainer)',
          context: 'Nicole explicitly stated she does not want a retainer model. She was burned by agency overhead at previous companies.',
          rationale: '"I\'m not a retainer person. I\'ve been burned." She wants scoped projects with clear deliverables and defined timelines.',
          owner: 'Nicole Behne (CMO)',
          dateConfirmed: 'March 12, 2026',
          status: 'CONFIRMED',
        },
      ].map((d, i) => (
        <Card key={i} style={{ marginBottom: '10px', borderLeft: `3px solid ${C.success}` }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{d.decision}</div>
            <Chip color={C.success}>{d.status}</Chip>
          </div>
          <Body style={{ marginBottom: '8px', fontSize: '12px' }}>{d.context}</Body>
          <div style={{ background: C.successDim, borderRadius: '6px', padding: '10px', marginBottom: '8px' }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.success, textTransform: 'uppercase', marginBottom: '3px' }}>Rationale</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, fontStyle: 'italic' }}>{d.rationale}</div>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px' }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Owner</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{d.owner}</div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Date Confirmed</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.success }}>{d.dateConfirmed}</div>
            </div>
          </div>
        </Card>
      ))}

      <Lbl style={{ marginTop: '24px' }}>Pending Decisions</Lbl>
      {[
        {
          decision: 'Content System Architecture',
          context: 'Nicole needs a content SYSTEM, not just content. Workflow, templates, AI-assisted production, scheduling, and measurement that makes 3 people operate like 10.',
          options: 'Custom workflow design vs. Platform adoption (Sprout, Later) vs. Hybrid (templates + existing tools)',
          owner: 'Lucy (recommendation) + Nicole (approval)',
          status: 'Discovery Complete, Recommendation Needed',
          urgency: 'Critical',
        },
        {
          decision: 'Golf Social Restart Strategy',
          context: 'Golf went dark. Need to decide: start fresh with new content or explain the gap? What voice? What frequency? Who manages day-to-day?',
          options: 'Soft restart (just start posting) vs. Announcement return vs. Season-launch campaign',
          owner: 'Lucy (recommendation) + Nicole + Sam',
          status: 'Needs Recommendation',
          urgency: 'Critical',
        },
        {
          decision: 'Internal Communications Platform',
          context: '700+ field employees are disconnected. No intranet. Need a way to reach blue-collar workers who don\'t sit at desks.',
          options: 'Mobile app (Beekeeper, Staffbase) vs. SMS-based system vs. Simple newsletter/text blast vs. Phased approach',
          owner: 'Nicole (decision) + Lucy (research)',
          status: 'To Research',
          urgency: 'High',
        },
        {
          decision: 'Centennial Brand Launch Timing',
          context: 'Should the unified brand officially launch AT the July 25 centennial event, or before it? The centennial event draws 2,000 people. Maximum visibility.',
          options: 'Launch at centennial event vs. Soft launch before + centennial as celebration vs. Phased rollout',
          owner: 'Nicole + Family Leadership',
          status: 'To Discuss',
          urgency: 'High',
        },
        {
          decision: 'Values-Led vs. Market-Led Positioning',
          context: 'Duininck has strong faith-based values. Need to decide how prominently these are featured in external brand communications vs. internal culture only.',
          options: 'Values-forward externally vs. Values as internal compass only vs. Audience-dependent (recruiting = values-forward, B2B = capability-forward)',
          owner: 'Nicole + Family Leadership',
          status: 'To Discuss',
          urgency: 'Medium',
        },
      ].map((d, i) => (
        <Card key={i} style={{ marginBottom: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '8px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '15px', fontWeight: 700, color: C.text }}>{d.decision}</div>
            <Chip color={d.urgency === 'Critical' ? C.red : d.urgency === 'High' ? C.amber : C.blue}>{d.urgency}</Chip>
          </div>
          <Body style={{ marginBottom: '8px', fontSize: '12px' }}>{d.context}</Body>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '8px' }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Options</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{d.options}</div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Owner</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub }}>{d.owner}</div>
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '3px' }}>Status</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.orange }}>{d.status}</div>
            </div>
          </div>
        </Card>
      ))}
    </div>
  );
}
