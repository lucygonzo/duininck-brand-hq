import { useState, ReactNode } from 'react';

// ============================================================
// UI TOKENS — Duininck Companies Brand HQ
// Palette derived from duininckcompanies.com:
//   Primary: Teal #004F71 · Accent: Orange #FE5000 · Warm neutrals
//   Clean, professional, family-business warmth
// ============================================================
export const C = {
  // Backgrounds — Clean white/warm gray
  bg:         '#F7F6F3',
  s1:         '#FFFFFF',
  s2:         '#F0EEEB',
  s3:         '#E8E5E0',
  s4:         '#DDD9D3',

  // Borders
  border:     'rgba(0,79,113,0.10)',
  borderHov:  'rgba(0,79,113,0.18)',
  borderAct:  'rgba(0,79,113,0.25)',
  borderSoft: 'rgba(0,79,113,0.05)',

  // Text
  text:    '#1A1A1A',
  sub:     'rgba(26,26,26,0.65)',
  muted:   'rgba(26,26,26,0.40)',
  ghost:   'rgba(26,26,26,0.22)',

  // Teal — PRIMARY BRAND (headers, nav, brand elements)
  accent:     '#004F71',
  accentDim:  'rgba(0,79,113,0.08)',
  accentGlow: 'rgba(0,79,113,0.04)',
  accentLight:'#0A6E9A',

  // Orange — SECONDARY ACCENT (CTAs, highlights, urgency)
  orange:     '#FE5000',
  orangeDim:  'rgba(254,80,0,0.08)',
  orangeGlow: 'rgba(254,80,0,0.04)',

  // Semantic
  success:    '#2E7D4F',
  successDim: 'rgba(46,125,79,0.10)',
  warning:    '#D4880B',
  warningDim: 'rgba(212,136,11,0.10)',
  error:      '#C03A2B',
  errorDim:   'rgba(192,58,43,0.10)',
  info:       '#2B7CB0',
  infoDim:    'rgba(43,124,176,0.10)',

  // Convenience aliases
  amber:    '#D4880B',
  amberDim: 'rgba(212,136,11,0.10)',
  blue:     '#2B7CB0',
  blueDim:  'rgba(43,124,176,0.10)',
  teal:     '#2E7D4F',
  tealDim:  'rgba(46,125,79,0.10)',
  red:      '#C03A2B',
  redDim:   'rgba(192,58,43,0.10)',
} as const;

const F = {
  display: "'Inter', system-ui, sans-serif",
  body:    "'Inter', system-ui, sans-serif",
  mono:    "'JetBrains Mono', 'SF Mono', 'Fira Code', monospace",
} as const;

const COLOR_KEYS: Record<string, string> = {
  accent: C.accent, blue: C.blue, teal: C.teal, amber: C.amber,
  red: C.red, muted: C.muted, sub: C.sub, orange: C.orange,
  success: C.success, warning: C.warning, error: C.error,
};
export const colorKey = (k: string) => COLOR_KEYS[k] ?? C.sub;

// ---- BASE COMPONENTS ----

export const SectionHeader = ({ num, title, sub }: { num: string; title: string; sub?: string }) => (
  <div style={{ marginBottom: '28px' }}>
    <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.accent, letterSpacing: '0.18em', textTransform: 'uppercase', marginBottom: '8px' }}>{num}</div>
    <h1 style={{ fontFamily: F.display, fontSize: '26px', fontWeight: 800, color: C.text, margin: '0 0 8px', letterSpacing: '-0.02em', lineHeight: 1.15 }}>{title}</h1>
    {sub && <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, margin: 0, lineHeight: 1.65 }}>{sub}</p>}
  </div>
);

export const Callout = ({ children }: { children: ReactNode }) => (
  <div style={{ background: C.accentGlow, borderLeft: `3px solid ${C.accent}`, borderRadius: '0 6px 6px 0', padding: '14px 18px', marginBottom: '24px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.65 }}>
    {children}
  </div>
);

type BlockVariant = 'default' | 'green' | 'amber' | 'blue' | 'red' | 'orange';
const BLOCK_STYLES: Record<BlockVariant, { bg: string; b: string }> = {
  default: { bg: C.s2,          b: 'rgba(0,79,113,0.15)' },
  green:   { bg: C.successDim,  b: C.success },
  amber:   { bg: C.warningDim,  b: C.warning },
  blue:    { bg: C.infoDim,     b: C.info },
  red:     { bg: C.errorDim,    b: C.error },
  orange:  { bg: C.orangeDim,   b: C.orange },
};
export const Block = ({ variant = 'default', children }: { variant?: BlockVariant; children: ReactNode }) => {
  const v = BLOCK_STYLES[variant];
  return (
    <div style={{ background: v.bg, borderLeft: `2px solid ${v.b}`, borderRadius: '0 6px 6px 0', padding: '10px 14px', marginBottom: '10px', fontFamily: F.body, fontSize: '13px', color: C.text, lineHeight: 1.6 }}>{children}</div>
  );
};

export const Dot = () => (
  <span title="Needs confirmation" style={{ display: 'inline-block', width: '5px', height: '5px', borderRadius: '50%', background: C.warning, marginLeft: '5px', verticalAlign: 'middle', cursor: 'help' }} />
);

export const Card = ({ children, style = {}, onClick }: { children: ReactNode; style?: React.CSSProperties; onClick?: () => void }) => (
  <div onClick={onClick} style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '10px', padding: '20px', cursor: onClick ? 'pointer' : undefined, transition: 'border-color 0.2s, box-shadow 0.2s', boxShadow: '0 1px 4px rgba(0,0,0,0.05)', ...style }}
    onMouseEnter={onClick ? (e) => { (e.currentTarget as HTMLDivElement).style.borderColor = C.borderHov; (e.currentTarget as HTMLDivElement).style.boxShadow = '0 2px 8px rgba(0,0,0,0.08)'; } : undefined}
    onMouseLeave={onClick ? (e) => { (e.currentTarget as HTMLDivElement).style.borderColor = ''; (e.currentTarget as HTMLDivElement).style.boxShadow = ''; } : undefined}
  >{children}</div>
);

export const Lbl = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.14em', marginBottom: '6px', ...style }}>{children}</div>
);

export const Body = ({ children, style = {} }: { children: ReactNode; style?: React.CSSProperties }) => (
  <p style={{ fontFamily: F.body, fontSize: '13px', color: C.sub, lineHeight: 1.65, margin: '0 0 10px', ...style }}>{children}</p>
);

export const Chip = ({ children, color }: { children: ReactNode; color: string }) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', background: `${color}14`, color, border: `1px solid ${color}30`, borderRadius: '9999px', padding: '2px 8px', marginRight: '4px', marginBottom: '4px', display: 'inline-block', letterSpacing: '0.04em', textTransform: 'uppercase' }}>{children}</span>
);

export const Threat = ({ level }: { level: string }) => {
  const m = level === 'High' ? { bg: C.errorDim, b: C.error, c: C.error } : level === 'Medium' ? { bg: C.warningDim, b: C.warning, c: C.warning } : { bg: C.s2, b: C.border, c: C.muted };
  return <span style={{ fontFamily: F.mono, fontSize: '9px', letterSpacing: '0.1em', textTransform: 'uppercase', background: m.bg, border: `1px solid ${m.b}`, color: m.c, padding: '2px 7px', borderRadius: '9999px' }}>{level}</span>;
};

export const StatBox = ({ label, value, note }: { label: string; value: string; note?: string }) => (
  <div style={{ background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', padding: '14px 16px', boxShadow: '0 1px 3px rgba(0,0,0,0.04)' }}>
    <div style={{ fontFamily: F.display, fontSize: '22px', fontWeight: 800, color: C.accent, lineHeight: 1, marginBottom: '4px' }}>{value}</div>
    <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.sub, textTransform: 'uppercase', letterSpacing: '0.1em' }}>{label}</div>
    {note && <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted, marginTop: '3px' }}>{note}</div>}
  </div>
);

export const StatusChip = ({ status, color }: { status: string; color: string }) => (
  <span style={{ fontFamily: F.mono, fontSize: '9px', color, marginTop: '2px', display: 'block' }}>{status}</span>
);

export const SubTabs = ({ tabs, active, onChange }: { tabs: string[]; active: string; onChange: (t: string) => void }) => (
  <div style={{ display: 'flex', gap: '4px', marginBottom: '24px', borderBottom: `2px solid ${C.border}`, paddingBottom: '0' }}>
    {tabs.map(t => (
      <button key={t} onClick={() => onChange(t)} style={{ fontFamily: F.mono, fontSize: '9px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '10px 16px', background: active === t ? C.accentDim : 'none', border: 'none', borderBottom: `2px solid ${active === t ? C.accent : 'transparent'}`, borderRadius: active === t ? '6px 6px 0 0' : '0', cursor: 'pointer', color: active === t ? C.accent : C.muted, fontWeight: active === t ? 600 : 400, marginBottom: '-2px', transition: 'all 0.15s' }}>{t}</button>
    ))}
  </div>
);

export const ProgressBar = ({ pct, color = C.accent }: { pct: number; color?: string }) => (
  <div style={{ height: '3px', background: C.s3, borderRadius: '2px' }}>
    <div style={{ height: '3px', width: `${pct}%`, background: color, borderRadius: '2px', transition: 'width 0.4s ease' }} />
  </div>
);

export const CopyHex = ({ hex, name, role }: { hex: string; name: string; role: string }) => {
  const [copied, setCopied] = useState(false);
  const handleCopy = () => { navigator.clipboard.writeText(hex); setCopied(true); setTimeout(() => setCopied(false), 1400); };
  return (
    <div onClick={handleCopy} style={{ cursor: 'pointer', background: C.s1, border: `1px solid ${C.border}`, borderRadius: '8px', overflow: 'hidden' }}>
      <div style={{ height: '40px', background: hex, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        {copied && <span style={{ fontFamily: F.mono, fontSize: '9px', background: 'rgba(0,0,0,0.75)', color: '#fff', padding: '2px 6px', borderRadius: '3px' }}>Copied!</span>}
      </div>
      <div style={{ padding: '7px 9px' }}>
        <div style={{ fontFamily: F.mono, fontSize: '10px', color: C.text }}>{hex}</div>
        <div style={{ fontFamily: F.body, fontSize: '10px', color: C.muted }}>{name} · {role}</div>
      </div>
    </div>
  );
};

export const Divider = ({ label }: { label?: string }) => (
  <div style={{ display: 'flex', alignItems: 'center', gap: '12px', margin: '28px 0 20px' }}>
    <div style={{ flex: 1, height: '1px', background: C.border }} />
    {label && <span style={{ fontFamily: F.mono, fontSize: '8px', color: C.muted, textTransform: 'uppercase', letterSpacing: '0.14em', flexShrink: 0 }}>{label}</span>}
    <div style={{ flex: 1, height: '1px', background: C.border }} />
  </div>
);

export const DataTable = ({ headers, rows, compact = false, colWidths }: { headers: string[]; rows: (string | ReactNode)[][]; compact?: boolean; colWidths?: string[] }) => (
  <Card style={{ padding: '0', overflow: 'hidden' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', fontFamily: F.body, fontSize: compact ? '11px' : '12px', tableLayout: colWidths ? 'fixed' : 'auto' }}>
      {colWidths && (
        <colgroup>
          {colWidths.map((w, i) => <col key={i} style={{ width: w }} />)}
        </colgroup>
      )}
      <thead>
        <tr style={{ background: C.accentDim }}>
          {headers.map((h, i) => (
            <th key={i} style={{ textAlign: 'left', padding: compact ? '8px 10px' : '10px 14px', fontFamily: F.mono, fontSize: '8px', color: C.accent, textTransform: 'uppercase', letterSpacing: '0.1em', fontWeight: 600, borderBottom: `2px solid ${C.accent}20` }}>{h}</th>
          ))}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, ri) => (
          <tr key={ri} style={{ background: ri % 2 === 0 ? 'transparent' : C.accentGlow, borderBottom: `1px solid ${C.borderSoft}` }}>
            {row.map((cell, ci) => (
              <td key={ci} style={{ padding: compact ? '7px 10px' : '10px 14px', color: ci === 0 ? C.text : C.sub, fontWeight: ci === 0 ? 500 : 400, verticalAlign: 'top', lineHeight: 1.5 }}>{cell}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  </Card>
);

export const Placeholder = ({ title, num, note }: { title: string; num: string; note?: string }) => (
  <div>
    <SectionHeader num={num} title={title} sub={note || 'Research and data pending.'} />
    <Block variant="amber"><Dot /> This section is queued for population. Complete the corresponding research pipeline step and update the Google Drive markdown file.</Block>
  </div>
);

export const ResearchRunner = ({ steps, context }: { steps: { id: string; label: string; prompt: string; sources: string[] }[]; context: string }) => {
  const [stepStates, setStepStates] = useState<Record<string, { status: string; result?: string }>>({});
  const [currentStep, setCurrentStep] = useState<number | null>(null);
  const [globalRunning, setGlobalRunning] = useState(false);

  const runStep = async (step: { id: string; label: string; prompt: string; sources: string[] }, idx: number) => {
    setCurrentStep(idx);
    setStepStates(s => ({ ...s, [step.id]: { status: 'running' } }));
    try {
      const res = await fetch('https://api.anthropic.com/v1/messages', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          model: 'claude-sonnet-4-20250514',
          max_tokens: 1000,
          system: `You are a brand strategist working on Duininck Companies Brand HQ. Research context: "${context}". Be specific, concise, commercially relevant. Format with headers.`,
          messages: [{ role: 'user', content: `${step.prompt}\n\nSources: ${step.sources.join(', ')}\n\nDeliver 300-500 words. Use headers. Be direct.` }],
          tools: [{ type: 'web_search_20250305', name: 'web_search' }],
        }),
      });
      const data = await res.json();
      const text = data.content?.filter((b: { type: string }) => b.type === 'text').map((b: { text: string }) => b.text).join('\n') || 'No results returned.';
      setStepStates(s => ({ ...s, [step.id]: { status: 'done', result: text } }));
    } catch {
      setStepStates(s => ({ ...s, [step.id]: { status: 'error', result: 'Research failed. Check API connection.' } }));
    }
  };

  const runAll = async () => {
    setGlobalRunning(true);
    for (let i = 0; i < steps.length; i++) await runStep(steps[i], i);
    setCurrentStep(null);
    setGlobalRunning(false);
  };

  const allDone = steps.every(s => stepStates[s.id]?.status === 'done');

  return (
    <div style={{ marginTop: '24px' }}>
      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '16px' }}>
        <div>
          <Lbl style={{ marginBottom: '2px' }}>Research Pipeline</Lbl>
          <div style={{ fontFamily: F.body, fontSize: '12px', color: C.sub }}>{steps.length} steps · web search enabled</div>
        </div>
        {!allDone && (
          <button onClick={runAll} disabled={globalRunning} style={{ fontFamily: F.mono, fontSize: '10px', textTransform: 'uppercase', letterSpacing: '0.12em', padding: '8px 16px', background: globalRunning ? C.s3 : C.accentDim, border: `1px solid ${globalRunning ? C.border : C.accent}`, color: globalRunning ? C.muted : C.accent, borderRadius: '9999px', cursor: globalRunning ? 'not-allowed' : 'pointer', transition: 'all 0.2s' }}>
            {globalRunning ? 'Running...' : 'Run All Steps'}
          </button>
        )}
      </div>
      {steps.map((step, i) => {
        const state = stepStates[step.id] ?? { status: 'idle' };
        const isRunning = state.status === 'running';
        const isDone = state.status === 'done';
        const isError = state.status === 'error';
        return (
          <div key={step.id} style={{ marginBottom: '8px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '12px 14px', background: isRunning ? C.accentGlow : isDone ? C.successDim : C.s1, border: `1px solid ${isRunning ? C.accent : isDone ? C.success : C.border}`, borderRadius: isDone && state.result ? '8px 8px 0 0' : '8px', transition: 'all 0.2s' }}>
              <div style={{ width: '20px', height: '20px', borderRadius: '50%', background: isRunning ? C.accentDim : isDone ? C.successDim : isError ? C.errorDim : C.s3, border: `1px solid ${isRunning ? C.accent : isDone ? C.success : isError ? C.error : C.border}`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                {isDone && <span style={{ color: C.success, fontSize: '10px' }}>&#10003;</span>}
                {isRunning && <span style={{ color: C.accent, fontSize: '8px', fontFamily: F.mono }}>{currentStep === i ? '...' : '·'}</span>}
                {isError && <span style={{ color: C.error, fontSize: '10px' }}>&#10007;</span>}
                {state.status === 'idle' && <span style={{ color: C.muted, fontSize: '9px', fontFamily: F.mono }}>{i + 1}</span>}
              </div>
              <div style={{ flex: 1 }}>
                <div style={{ fontFamily: F.body, fontSize: '13px', color: isDone || isRunning ? C.text : C.sub }}>{step.label}</div>
                <div style={{ fontFamily: F.mono, fontSize: '9px', color: C.muted, marginTop: '2px' }}>Sources: {step.sources.join(' · ')}</div>
              </div>
              {!isDone && !isRunning && (
                <button onClick={() => runStep(step, i)} style={{ fontFamily: F.mono, fontSize: '8px', textTransform: 'uppercase', letterSpacing: '0.1em', padding: '4px 10px', background: C.s3, border: `1px solid ${C.border}`, color: C.sub, borderRadius: '9999px', cursor: 'pointer' }}>Run</button>
              )}
            </div>
            {(isDone || isError) && state.result && (
              <div style={{ background: isDone ? 'rgba(46,125,79,0.04)' : C.errorDim, border: `1px solid ${isDone ? C.success : C.error}`, borderTop: 'none', borderRadius: '0 0 8px 8px', padding: '16px', fontFamily: F.body, fontSize: '12px', color: C.sub, lineHeight: 1.7, whiteSpace: 'pre-wrap' }}>
                {state.result}
              </div>
            )}
          </div>
        );
      })}
    </div>
  );
};
