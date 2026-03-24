import { useState } from 'react';
import { BRAND_IDENTITY, VERBAL_INVENTORY, MESSAGING_MATRIX } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, DataTable, Divider, C } from '../components/ui';

const TABS = ['Messaging', 'Voice', 'Portfolio Voice', 'Inventory', 'Conflicts', 'Patterns'];

export default function VerbalIdentityPage() {
  const [tab, setTab] = useState(TABS[0]);
  const [activeAudience, setActiveAudience] = useState(MESSAGING_MATRIX.audiences[0].id);

  return (
    <div>
      <SectionHeader num="04 / Brand" title="Verbal Identity" sub="Voice guidelines, tagline inventory, values conflict, and language patterns across all properties." />

      <Callout>
        <strong>Critical finding:</strong> The most powerful positioning from the CMO discovery call ("Built to Last," "The Full Truck," "whole person" wellbeing, the centennial) appears NOWHERE on any live Duininck property. The brand strategy exists only here in Brand HQ, not on the websites customers actually visit.
      </Callout>

      {/* Pinned Quick Reference: visible on all tabs */}
      <Card style={{ background: C.s2, padding: '12px 16px', marginBottom: '16px', border: `1px solid ${C.border}` }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', gap: '20px' }}>
          <div style={{ flex: 1 }}>
            <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '4px' }}>How to Talk About Us (Quick Reference)</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>Brand Anchor: BUILT TO LAST</div>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>Fourth-generation, family-owned. 100 years. People. Values. Growth. When a Duininck truck shows up, it carries six operating companies and a century of earned trust.</div>
          </div>
          <div style={{ display: 'flex', gap: '16px', flexShrink: 0 }}>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: '#22C55E', textTransform: 'uppercase', marginBottom: '3px' }}>Say</div>
              {BRAND_IDENTITY.doSay.slice(0, 4).map((s, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.sub, padding: '1px 0' }}>&#x2713; {s}</div>
              ))}
            </div>
            <div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.red, textTransform: 'uppercase', marginBottom: '3px' }}>Avoid</div>
              {BRAND_IDENTITY.dontSay.slice(0, 4).map((s, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '10px', color: C.ghost, padding: '1px 0' }}>&#x2717; {s}</div>
              ))}
            </div>
          </div>
        </div>
      </Card>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

      {tab === 'Messaging' && (() => {
        const core = MESSAGING_MATRIX.coreMessage;
        const selected = MESSAGING_MATRIX.audiences.find(a => a.id === activeAudience) || MESSAGING_MATRIX.audiences[0];
        return (
          <div>
            {/* Core Message */}
            <Card style={{ marginTop: '16px', borderTop: `3px solid ${C.accent}`, background: C.accentDim, marginBottom: '20px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.12em', marginBottom: '6px' }}>Core Message (Universal)</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '20px', fontWeight: 800, color: C.accent, lineHeight: 1.3, marginBottom: '8px' }}>{core.headline}</div>
              <Body>{core.body}</Body>
              <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginTop: '10px' }}>
                {core.proof.map((p, i) => (
                  <span key={i} style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.accent, background: '#fff', border: `1px solid ${C.accent}30`, padding: '3px 8px', borderRadius: '4px' }}>{p}</span>
                ))}
              </div>
            </Card>

            {/* Taglines at Multiple Lengths */}
            <Divider label="Taglines" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '12px' }}>
              {Object.entries(MESSAGING_MATRIX.taglines).map(([length, text]) => (
                <Card key={length} style={{ padding: '10px 14px', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(text as string)}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase', marginBottom: '4px' }}>{length}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: length === 'short' ? '18px' : length === 'medium' ? '14px' : '12px', fontWeight: length === 'short' ? 800 : length === 'medium' ? 700 : 400, color: C.text, lineHeight: 1.4 }}>{text as string}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.ghost, marginTop: '4px' }}>Click to copy</div>
                </Card>
              ))}
            </div>

            {/* Boilerplate Copy */}
            <Divider label="Boilerplate Copy" />
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              {Object.entries(MESSAGING_MATRIX.boilerplate).map(([type, text]) => (
                <Card key={type} style={{ padding: '10px 14px', cursor: 'pointer' }} onClick={() => navigator.clipboard.writeText(text as string)}>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.accent, textTransform: 'uppercase', marginBottom: '4px' }}>{type.replace(/([A-Z])/g, ' $1').trim()}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{text as string}</div>
                  <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '7px', color: C.ghost, marginTop: '4px' }}>Click to copy</div>
                </Card>
              ))}
            </div>

            {/* Audience Toggles */}
            <Divider label="Audience-Adapted Messaging" />
            <Lbl>Select audience to see how the core message adapts</Lbl>
            <div style={{ display: 'flex', gap: '6px', flexWrap: 'wrap', marginBottom: '16px' }}>
              {MESSAGING_MATRIX.audiences.map(a => (
                <button
                  key={a.id}
                  onClick={() => setActiveAudience(a.id)}
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    fontWeight: activeAudience === a.id ? 700 : 400,
                    color: activeAudience === a.id ? '#fff' : C.sub,
                    background: activeAudience === a.id ? C.accent : '#fff',
                    border: `1px solid ${activeAudience === a.id ? C.accent : C.border}`,
                    borderRadius: '20px',
                    padding: '6px 14px',
                    cursor: 'pointer',
                    transition: 'all 0.15s',
                  }}
                >
                  {a.icon} {a.name}
                </button>
              ))}
            </div>

            {/* Selected Audience Messaging */}
            <Card style={{ borderLeft: `4px solid ${C.accent}`, marginBottom: '16px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.1em', marginBottom: '4px' }}>Adapted for: {selected.icon} {selected.name}</div>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: C.text, lineHeight: 1.3, marginBottom: '6px' }}>{selected.headline}</div>
              <Body style={{ fontSize: '13px', color: C.sub }}>{selected.subline}</Body>
            </Card>

            {/* Value Props */}
            <Divider label="Value Propositions" />
            <div style={{ display: 'grid', gridTemplateColumns: selected.valueProps.length > 4 ? '1fr 1fr' : '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
              {selected.valueProps.map((vp, i) => (
                <Card key={i} style={{ padding: '12px' }}>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', fontWeight: 700, color: C.accent, marginBottom: '4px' }}>{vp.prop}</div>
                  <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, lineHeight: 1.5 }}>{vp.detail}</div>
                </Card>
              ))}
            </div>

            {/* Channels */}
            <Divider label="Recommended Channels" />
            <div style={{ marginBottom: '16px' }}>
              <DataTable
                headers={['Channel', 'How to Use', 'Frequency']}
                colWidths={['18%', '62%', '20%']}
                rows={selected.channels.map(ch => [
                  <span style={{ fontWeight: 600, whiteSpace: 'nowrap' }}>{ch.channel}</span>,
                  ch.how,
                  <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.muted, whiteSpace: 'nowrap' }}>{ch.frequency}</span>,
                ])}
              />
            </div>

            {/* Sample Copy */}
            <Divider label="Sample Copy" />
            <Card style={{ background: C.s2, borderLeft: `3px solid ${C.orange}` }}>
              <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, lineHeight: 1.7, fontStyle: 'italic' }}>"{selected.sampleCopy}"</div>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '8px' }}>Adapt for: {selected.channels.map(c => c.channel).join(' / ')}</div>
            </Card>

            {/* Their Questions / How We Answer (if data exists) */}
            {(selected as any).theirQuestions && (
              <>
                <Divider label="Their Questions & How We Answer" />
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px' }}>
                  <Card style={{ borderTop: `2px solid ${C.amber}` }}>
                    <Lbl style={{ color: C.amber }}>What they ask before engaging</Lbl>
                    {((selected as any).theirQuestions as string[]).map((q, i) => (
                      <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text, padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}`, display: 'flex', gap: '6px' }}>
                        <span style={{ color: C.amber, flexShrink: 0 }}>?</span> {q}
                      </div>
                    ))}
                  </Card>
                  <Card style={{ borderTop: `2px solid ${C.success}` }}>
                    <Lbl style={{ color: C.success }}>How Duininck answers</Lbl>
                    {((selected as any).howWeAnswer as string[]).map((a, i) => (
                      <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '6px 0', borderBottom: `1px solid ${C.borderSoft}`, display: 'flex', gap: '6px' }}>
                        <span style={{ color: C.success, flexShrink: 0 }}>&#10003;</span> {a}
                      </div>
                    ))}
                  </Card>
                </div>
              </>
            )}
          </div>
        );
      })()}

      {tab === 'Voice' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Brand Anchor</Lbl>
          <Card style={{ borderTop: `3px solid ${C.accent}`, marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '24px', fontWeight: 800, color: C.accent, letterSpacing: '0.04em' }}>{BRAND_IDENTITY.brandAnchor}</div>
            <Body style={{ marginTop: '8px' }}>{BRAND_IDENTITY.brandAnchorNote}</Body>
          </Card>

          <Lbl>Voice Personality</Lbl>
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px', marginBottom: '16px' }}>
            {BRAND_IDENTITY.personality.map((p, i) => (
              <Card key={i}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '14px', fontWeight: 700, color: C.accent }}>{p.trait}</div>
                <Body style={{ fontSize: '11px' }}>{p.description}</Body>
              </Card>
            ))}
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '12px', marginBottom: '16px' }}>
            <Card>
              <Lbl style={{ color: '#22C55E' }}>Do Say</Lbl>
              {BRAND_IDENTITY.doSay.map((s, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.text, padding: '3px 0' }}>
                  <span style={{ color: '#22C55E' }}>&#x2713;</span> {s}
                </div>
              ))}
            </Card>
            <Card>
              <Lbl style={{ color: C.red }}>Never Say</Lbl>
              {BRAND_IDENTITY.dontSay.map((s, i) => (
                <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '12px', color: C.sub, padding: '3px 0' }}>
                  <span style={{ color: C.red }}>&#x2717;</span> {s}
                </div>
              ))}
            </Card>
          </div>
        </div>
      )}

      {tab === 'Portfolio Voice' && (
        <div>
          <Callout>Each portfolio company shares the same values DNA but speaks with a calibrated voice for its audience. The Duininck umbrella voice is the default. These are the adjustments for each sub-brand.</Callout>

          {MESSAGING_MATRIX.portfolioVoice.map((pv, i) => (
            <Card key={i} style={{ marginBottom: '12px', borderLeft: `4px solid ${C.accent}` }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '8px' }}>
                <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 800, color: C.accent }}>{pv.brand}</div>
                <Chip color={C.muted}>{pv.audienceFocus}</Chip>
              </div>

              <Body style={{ fontSize: '12px', marginBottom: '12px' }}>{pv.voiceShift}</Body>

              <Lbl>Tone Adjustments</Lbl>
              <div style={{ marginBottom: '12px' }}>
                {pv.toneAdjustments.map((adj, j) => (
                  <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '3px 0', display: 'flex', gap: '6px' }}>
                    <span style={{ color: C.accent, flexShrink: 0 }}>&#9656;</span> {adj}
                  </div>
                ))}
              </div>

              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px' }}>
                <div style={{ background: 'rgba(34,197,94,0.04)', borderRadius: '6px', padding: '10px' }}>
                  <Lbl style={{ color: '#22C55E' }}>Say</Lbl>
                  {pv.doSay.map((s, j) => (
                    <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.sub, padding: '2px 0' }}>&#x2713; {s}</div>
                  ))}
                </div>
                <div style={{ background: 'rgba(239,68,68,0.04)', borderRadius: '6px', padding: '10px' }}>
                  <Lbl style={{ color: C.red }}>Avoid</Lbl>
                  {pv.dontSay.map((s, j) => (
                    <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '11px', color: C.ghost, padding: '2px 0' }}>&#x2717; {s}</div>
                  ))}
                </div>
              </div>
            </Card>
          ))}

          <Block variant="blue">
            <strong>Prinsco operates independently.</strong> Its voice, content hub ("The Water Table"), and audience are distinct from the Duininck construction brand. The connection adds trust ("family-owned responsiveness") but should not dominate the messaging.
          </Block>
        </div>
      )}

      {tab === 'Inventory' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Taglines Scraped From Live Properties</Lbl>
          <Body>Every tagline, headline, and positioning statement currently live across all Duininck websites.</Body>

          {VERBAL_INVENTORY.taglinesByProperty.map((prop, i) => (
            <Card key={i} style={{ marginBottom: '8px' }}>
              <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '10px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.08em', marginBottom: '6px' }}>{prop.property}</div>
              {prop.taglines.map((t, j) => (
                <div key={j} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                  "{t}"
                </div>
              ))}
            </Card>
          ))}

          <Lbl style={{ marginTop: '16px' }}>Voice Comparison Across Properties</Lbl>
          <Card style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  {['Property', 'Voice', 'Tone', 'Focus'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VERBAL_INVENTORY.voiceComparison.map((vc, i) => (
                  <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}` }}>
                    <td style={{ padding: '8px', fontWeight: 600 }}>{vc.property}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{vc.voice}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{vc.tone}</td>
                    <td style={{ padding: '8px', color: C.sub }}>{vc.focus}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </Card>

          <Block variant="amber">
            <strong>Three different companies, three different voices.</strong> The parent site sounds corporate and warm. The construction site sounds operational and practical. The golf site sounds premium and confident. Some variation is expected (different audiences), but there is currently no connective tissue linking them as one family.
          </Block>
        </div>
      )}

      {tab === 'Conflicts' && (
        <div>
          <div style={{ background: 'rgba(254,80,0,0.06)', border: `2px solid ${C.orange}`, borderRadius: '10px', padding: '20px', marginTop: '16px', marginBottom: '16px' }}>
            <div style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 700, color: C.orange, marginBottom: '8px' }}>&#x26A0; Values Conflict: Two Different Value Sets on Two Websites</div>
            <Body>{VERBAL_INVENTORY.valuesConflict.issue}</Body>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginTop: '16px' }}>
              <Card style={{ borderTop: `3px solid ${C.accent}` }}>
                <Lbl>{VERBAL_INVENTORY.valuesConflict.parentSite.source}</Lbl>
                {VERBAL_INVENTORY.valuesConflict.parentSite.values.map((v, i) => (
                  <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                    {i + 1}. {v}
                  </div>
                ))}
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '8px' }}>Legacy/faith-based values</div>
              </Card>

              <Card style={{ borderTop: `3px solid ${C.orange}` }}>
                <Lbl>{VERBAL_INVENTORY.valuesConflict.constructionSite.source}</Lbl>
                {VERBAL_INVENTORY.valuesConflict.constructionSite.values.map((v, i) => (
                  <div key={i} style={{ fontFamily: "'Inter', sans-serif", fontSize: '13px', color: C.text, padding: '4px 0', borderBottom: `1px solid ${C.borderSoft}` }}>
                    {i + 1}. {v}
                  </div>
                ))}
                <div style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '9px', color: C.muted, marginTop: '8px' }}>Operational/cultural values</div>
              </Card>
            </div>
          </div>

          <Block variant="red">
            <strong>This needs resolution before brand unification works externally.</strong> A customer who visits duininckcompanies.com sees "Stewardship, Integrity, Servant Leadership." The same customer on duininck.com sees "Safety First, Team Duininck, Mind The Gap." Are these complementary (corporate values + operating behaviors)? Or has one set replaced the other? Nicole should clarify.
          </Block>
        </div>
      )}

      {tab === 'Patterns' && (
        <div>
          <Lbl style={{ marginTop: '16px' }}>Language Frequency Across All Properties</Lbl>
          <Card style={{ overflowX: 'auto' }}>
            <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: "'Inter', sans-serif", fontSize: '12px' }}>
              <thead>
                <tr style={{ borderBottom: `2px solid ${C.accent}` }}>
                  {['Word/Phrase', 'Frequency', 'Where'].map(h => (
                    <th key={h} style={{ textAlign: 'left', padding: '8px', fontFamily: "'JetBrains Mono', monospace", fontSize: '8px', color: C.muted, textTransform: 'uppercase' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {VERBAL_INVENTORY.languagePatterns.map((lp, i) => {
                  const isZero = lp.frequency === 'Zero';
                  return (
                    <tr key={i} style={{ borderBottom: `1px solid ${C.borderSoft}`, background: isZero ? 'rgba(239,68,68,0.04)' : 'transparent' }}>
                      <td style={{ padding: '8px', fontWeight: 600 }}>{lp.word}</td>
                      <td style={{ padding: '8px', color: isZero ? C.red : C.sub, fontWeight: isZero ? 700 : 400 }}>{lp.frequency}</td>
                      <td style={{ padding: '8px', color: isZero ? C.red : C.sub, fontStyle: isZero ? 'italic' : 'normal' }}>{lp.where}</td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </Card>

          <Block variant="red">
            <strong>{VERBAL_INVENTORY.missingLanguage}</strong>
          </Block>
        </div>
      )}
    </div>
  );
}
