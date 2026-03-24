import { useState } from 'react';
import { BRAND_IDENTITY, VERBAL_INVENTORY } from '../data/brandData';
import { SectionHeader, Callout, Card, Lbl, Body, Block, Chip, SubTabs, C } from '../components/ui';

const TABS = ['Voice', 'Inventory', 'Conflicts', 'Patterns'];

export default function VerbalIdentityPage() {
  const [tab, setTab] = useState(TABS[0]);

  return (
    <div>
      <SectionHeader num="04 / Brand" title="Verbal Identity" sub="Voice guidelines, tagline inventory, values conflict, and language patterns across all properties." />

      <Callout>
        <strong>Critical finding:</strong> The most powerful positioning from the CMO discovery call ("Built to Last," "The Full Truck," "whole person" wellbeing, the centennial) appears NOWHERE on any live Duininck property. The brand strategy exists only here in Brand HQ, not on the websites customers actually visit.
      </Callout>

      <SubTabs tabs={TABS} active={tab} onChange={setTab} />

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
