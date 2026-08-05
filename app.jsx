import React from 'react';
import ReactDOM from 'react-dom/client';
const { useState, useRef, useEffect } = React;

// Iconos propios en SVG (reemplazan a lucide-react para no depender de
// ningún paquete externo vía import): mismo estilo "outline", sin
// dependencias.
function Icon({ size = 20, color, className = '', style, strokeWidth = 2, children }) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke={color || 'currentColor'}
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      style={style}
    >
      {children}
    </svg>
  );
}
function Move(props) {
  return (
    <Icon {...props}>
      <polyline points="5 9 2 12 5 15" />
      <polyline points="9 5 12 2 15 5" />
      <polyline points="15 19 12 22 9 19" />
      <polyline points="19 9 22 12 19 15" />
      <line x1="2" y1="12" x2="22" y2="12" />
      <line x1="12" y1="2" x2="12" y2="22" />
    </Icon>
  );
}
function Pencil(props) {
  return (
    <Icon {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.12 2.12 0 0 1 3 3L7 19l-4 1 1-4Z" />
    </Icon>
  );
}
function Play(props) {
  return (
    <Icon {...props}>
      <polygon points="6 3 20 12 6 21 6 3" />
    </Icon>
  );
}
function RotateCcw(props) {
  return (
    <Icon {...props}>
      <path d="M3 12a9 9 0 1 0 3-6.7" />
      <polyline points="3 3 3 8 8 8" />
    </Icon>
  );
}
function Trash2(props) {
  return (
    <Icon {...props}>
      <polyline points="3 6 5 6 21 6" />
      <path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
      <path d="M19 6l-1 14a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2L5 6" />
      <line x1="10" y1="11" x2="10" y2="17" />
      <line x1="14" y1="11" x2="14" y2="17" />
    </Icon>
  );
}
function Save(props) {
  return (
    <Icon {...props}>
      <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2Z" />
      <polyline points="17 21 17 13 7 13 7 21" />
      <polyline points="7 3 7 8 15 8" />
    </Icon>
  );
}
function Undo2(props) {
  return (
    <Icon {...props}>
      <path d="M9 14 4 9l5-5" />
      <path d="M4 9h10.5a5.5 5.5 0 0 1 0 11H11" />
    </Icon>
  );
}
function History(props) {
  return (
    <Icon {...props}>
      <path d="M3 3v6h6" />
      <path d="M3.5 9a9 9 0 1 0 2-6" />
      <polyline points="12 7 12 12 16 14" />
    </Icon>
  );
}
function X(props) {
  return (
    <Icon {...props}>
      <line x1="6" y1="6" x2="18" y2="18" />
      <line x1="18" y1="6" x2="6" y2="18" />
    </Icon>
  );
}
function Download(props) {
  return (
    <Icon {...props}>
      <path d="M12 3v12" />
      <polyline points="7 10 12 15 17 10" />
      <path d="M5 21h14" />
    </Icon>
  );
}
function ArrowUpDown(props) {
  return (
    <Icon {...props}>
      <line x1="7" y1="21" x2="7" y2="3" />
      <polyline points="4 6 7 3 10 6" />
      <line x1="17" y1="3" x2="17" y2="21" />
      <polyline points="14 18 17 21 20 18" />
    </Icon>
  );
}
function Loader2(props) {
  return (
    <Icon {...props}>
      <path d="M21 12a9 9 0 1 1-9-9" />
    </Icon>
  );
}
function Users(props) {
  return (
    <Icon {...props}>
      <path d="M17 21v-2a4 4 0 0 0-4-4H7a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </Icon>
  );
}
function Redo2(props) {
  return (
    <Icon {...props}>
      <path d="M15 14l5-5-5-5" />
      <path d="M20 9H9.5A5.5 5.5 0 0 0 4 14.5v0" />
    </Icon>
  );
}
function RefreshCw(props) {
  return (
    <Icon {...props}>
      <path d="M3 12a9 9 0 0 1 15-6.7L21 8" />
      <path d="M21 3v5h-5" />
      <path d="M21 12a9 9 0 0 1-15 6.7L3 16" />
      <path d="M3 21v-5h5" />
    </Icon>
  );
}
function WifiOff(props) {
  return (
    <Icon {...props}>
      <line x1="2" y1="2" x2="22" y2="22" />
      <path d="M8.5 16.5a5 5 0 0 1 7 0" />
      <path d="M5 12.5a10 10 0 0 1 3.5-2.4" />
      <path d="M19 12.5a10 10 0 0 0-1.8-1.6" />
      <path d="M2 8.8a15 15 0 0 1 4.2-2.9" />
      <path d="M15.5 5.5A15 15 0 0 1 22 8.8" />
      <line x1="12" y1="20" x2="12.01" y2="20" />
    </Icon>
  );
}
function DownloadCloud(props) {
  return (
    <Icon {...props}>
      <path d="M8 17a5 5 0 0 1-1-9.9A6 6 0 0 1 18 8a4 4 0 0 1-1 7.9" />
      <path d="M12 12v7" />
      <polyline points="9 16 12 19 15 16" />
    </Icon>
  );
}
function Monitor(props) {
  return (
    <Icon {...props}>
      <rect x="2" y="4" width="20" height="14" rx="2" />
      <line x1="8" y1="21" x2="16" y2="21" />
      <line x1="12" y1="17" x2="12" y2="21" />
    </Icon>
  );
}
function Copy(props) {
  return (
    <Icon {...props}>
      <rect x="9" y="9" width="13" height="13" rx="2" />
      <path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1" />
    </Icon>
  );
}
function Search(props) {
  return (
    <Icon {...props}>
      <circle cx="11" cy="11" r="8" />
      <line x1="21" y1="21" x2="16.65" y2="16.65" />
    </Icon>
  );
}
function Share2(props) {
  return (
    <Icon {...props}>
      <circle cx="18" cy="5" r="3" />
      <circle cx="6" cy="12" r="3" />
      <circle cx="18" cy="19" r="3" />
      <line x1="8.6" y1="10.6" x2="15.4" y2="6.4" />
      <line x1="8.6" y1="13.4" x2="15.4" y2="17.6" />
    </Icon>
  );
}
function Keyboard(props) {
  return (
    <Icon {...props}>
      <rect x="2" y="5" width="20" height="14" rx="2" />
      <line x1="6" y1="9" x2="6" y2="9.01" />
      <line x1="10" y1="9" x2="10" y2="9.01" />
      <line x1="14" y1="9" x2="14" y2="9.01" />
      <line x1="18" y1="9" x2="18" y2="9.01" />
      <line x1="6" y1="13" x2="6" y2="13.01" />
      <line x1="18" y1="13" x2="18" y2="13.01" />
      <path d="M8 13h8" />
    </Icon>
  );
}

const BOARD_BG = '#0b1220';
const INK = '#0a1424';
const PITCH_LIGHT = '#1f7a3f';
const PITCH_DARK = '#186b34';
const CHALK = '#f4f7fb';
const TEAM_A = '#ffc400';
const TEAM_B = '#3fa9f5';
const MONO = "'Oswald', sans-serif";
const HAND = "'Oswald', sans-serif";

const ARROW_TYPES = {
  run: { color: '#ff7a1a', dash: '0.2,3', label: 'Carrera' },
  pass: { color: '#ffcc00', dash: '2.6,2.2', label: 'Pase' },
  mark: { color: '#ff3b30', dash: '0.5,2', label: 'Marca' },
};

const FORMATIONS = {
  '3-3-1': { label: '3-3-1 · Sólido atrás', lines: [3, 3, 1] },
  '3-2-2': { label: '3-2-2 · Equilibrado', lines: [3, 2, 2] },
  '2-3-2': { label: '2-3-2 · Control medio', lines: [2, 3, 2] },
  '2-2-3': { label: '2-2-3 · Ofensivo', lines: [2, 2, 3] },
  '3-1-3': { label: '3-1-3 · Por bandas', lines: [3, 1, 3] },
};

function spreadX(n) {
  if (n <= 1) return [0.5];
  const margin = 0.14;
  const usable = 1 - margin * 2;
  return Array.from({ length: n }, (_, i) => margin + (usable * i) / (n - 1));
}

function buildLineup(team, key, prevPlayers) {
  const { lines } = FORMATIONS[key];
  const isTop = team === 'B';
  const lineDefs = [
    { count: lines[0], yFrac: 0.2 },
    { count: lines[1], yFrac: 0.44 },
    { count: lines[2], yFrac: 0.68 },
  ];
  const raw = [{ num: 1, role: 'gk', xFrac: 0.5, yFrac: 0.035 }];
  let num = 2;
  lineDefs.forEach(({ count, yFrac }) => {
    spreadX(count).forEach((xFrac) => raw.push({ num: num++, role: 'out', xFrac, yFrac }));
  });
  const built = raw.map((p, slot) => ({
    slot,
    num: p.num,
    role: p.role,
    name: '',
    x: 10 + p.xFrac * 80,
    y: isTop ? 6 + p.yFrac * 69 : 144 - p.yFrac * 69,
  }));
  // Si veníamos de una alineación previa (cambio de formación o reinicio de
  // posiciones), conservamos los dorsales y nombres ya cargados en vez de
  // perderlos: el arquero mantiene su dato, y el resto de jugadores se
  // reasigna en orden a los puestos de campo disponibles en la formación nueva.
  if (prevPlayers && prevPlayers.length) {
    const prevGk = prevPlayers.find((p) => p.role === 'gk');
    const prevOut = prevPlayers.filter((p) => p.role !== 'gk');
    let outIdx = 0;
    return built.map((p) => {
      if (p.role === 'gk') {
        return prevGk ? { ...p, num: prevGk.num, name: prevGk.name } : p;
      }
      const prev = prevOut[outIdx++];
      return prev ? { ...p, num: prev.num, name: prev.name } : p;
    });
  }
  return built;
}

// Distancia mínima de un punto a un segmento (para hit-test de flechas).
function distToSegment(p, a, b) {
  const dx = b.x - a.x;
  const dy = b.y - a.y;
  const lenSq = dx * dx + dy * dy;
  let t = lenSq === 0 ? 0 : ((p.x - a.x) * dx + (p.y - a.y) * dy) / lenSq;
  t = Math.max(0, Math.min(1, t));
  const projX = a.x + t * dx;
  const projY = a.y + t * dy;
  return Math.hypot(p.x - projX, p.y - projY);
}

function distToPolyline(p, points) {
  let best = Infinity;
  for (let i = 1; i < points.length; i++) {
    const d = distToSegment(p, points[i - 1], points[i]);
    if (d < best) best = d;
  }
  return best;
}

function hasStorage() {
  return typeof window !== 'undefined' && !!window.storage;
}

function clampPoint(x, y) {
  return { x: Math.min(94, Math.max(6, x)), y: Math.min(144, Math.max(6, y)) };
}

function buildPathD(points) {
  if (!points || points.length === 0) return '';
  return points.reduce((acc, p, i) => acc + (i === 0 ? `M ${p.x} ${p.y}` : ` L ${p.x} ${p.y}`), '');
}

function pathLengths(points) {
  const cum = [0];
  for (let i = 1; i < points.length; i++) {
    cum.push(cum[i - 1] + Math.hypot(points[i].x - points[i - 1].x, points[i].y - points[i - 1].y));
  }
  return cum;
}

function pointAtDistance(points, cum, dist) {
  const total = cum[cum.length - 1];
  if (dist <= 0) return points[0];
  if (dist >= total) return points[points.length - 1];
  let i = 1;
  while (cum[i] < dist) i++;
  const segStart = cum[i - 1];
  const segEnd = cum[i];
  const segT = segEnd === segStart ? 0 : (dist - segStart) / (segEnd - segStart);
  const p0 = points[i - 1];
  const p1 = points[i];
  return { x: p0.x + (p1.x - p0.x) * segT, y: p0.y + (p1.y - p0.y) * segT };
}

const utilBtnClass = 'flex items-center justify-center p-2 rounded-full text-[#8a93b0] hover:text-[#eef1f8] transition-colors';
const pillBtnClass = (active) =>
  `flex items-center justify-center px-4 py-2 ${active ? 'bg-[#eef1f8] text-[#0a1424]' : 'text-[#8a93b0]'}`;

function TeamCard({ color, name, onName, value, onChange }) {
  return (
    <div className="flex items-center gap-2 py-1.5">
      <span className="w-2 h-2 rounded-full shrink-0" style={{ background: color }} />
      <input
        value={name}
        onChange={(e) => onName(e.target.value)}
        onBlur={(e) => { const t = e.target.value.trim(); if (t !== e.target.value) onName(t); }}
        maxLength={16}
        className="w-16 shrink-0 bg-transparent text-[11px] outline-none text-[#eef1f8]"
        style={{ fontFamily: MONO }}
      />
      <div className="flex-1 min-w-0 flex items-center gap-1 overflow-x-auto chip-row">
        {Object.entries(FORMATIONS).map(([key, f]) => (
          <button
            key={key}
            onClick={() => onChange(key)}
            title={f.label}
            className="shrink-0 px-1.5 py-1 rounded-sm text-[9px] font-bold"
            style={{
              fontFamily: MONO,
              color: value === key ? '#0a1424' : '#8a93b0',
              background: value === key ? '#f4f7fb' : 'transparent',
              border: value === key ? 'none' : '1px solid #2c3e5c',
            }}
          >
            {key}
          </button>
        ))}
      </div>
    </div>
  );
}

function RosterPanel({ color, teamKey, teamName, onTeamName, players, formation, onFormation, onNameChange, onNumberChange, dimmed, dupNums }) {
  return (
    <div className="rounded-md p-4" style={{ background: '#111c33', border: '1px solid #22314d', opacity: dimmed ? 0.5 : 1 }}>
      <div className="flex items-center gap-2 mb-3">
        <span className="w-2.5 h-2.5 rounded-full shrink-0" style={{ background: color }} />
        <input
          value={teamName}
          onChange={(e) => onTeamName(e.target.value)}
          onBlur={(e) => { const t = e.target.value.trim(); if (t !== e.target.value) onTeamName(t); }}
          maxLength={20}
          className="flex-1 min-w-0 bg-transparent text-[13px] font-bold outline-none text-[#eef1f8]"
          style={{ fontFamily: MONO }}
        />
        <Users size={14} className="text-[#5f6b8a] shrink-0" />
      </div>

      <div className="flex flex-wrap gap-1 mb-3">
        {Object.entries(FORMATIONS).map(([key, f]) => (
          <button
            key={key}
            onClick={() => onFormation(key)}
            title={f.label}
            className="px-1.5 py-1 rounded-sm text-[9px] font-bold"
            style={{
              fontFamily: MONO,
              color: formation === key ? '#0a1424' : '#8a93b0',
              background: formation === key ? '#f4f7fb' : 'transparent',
              border: formation === key ? 'none' : '1px solid #2c3e5c',
            }}
          >
            {key}
          </button>
        ))}
      </div>

      {dupNums && dupNums.size > 0 && (
        <p className="text-[9px] text-[#ff3b30] mb-2 uppercase tracking-wide" style={{ fontFamily: MONO }}>
          ⚠ Dorsales repetidos: {[...dupNums].sort((a, b) => a - b).join(', ')}
        </p>
      )}
      <div className="space-y-1.5">
        {players.map((p) => {
          const isDup = dupNums && dupNums.has(p.num);
          return (
            <div key={p.slot} className="roster-row flex items-center gap-2">
              <input
                type="number"
                min="1"
                max="99"
                value={p.num}
                onChange={(e) => onNumberChange(teamKey, p.slot, e.target.value)}
                className="w-9 shrink-0 text-center rounded-sm text-[10px] font-bold py-0.5 outline-none border"
                style={{
                  fontFamily: MONO,
                  background: p.role === 'gk' ? '#0a1424' : color,
                  color: p.role === 'gk' ? color : '#0a1424',
                  borderColor: isDup ? '#ff3b30' : p.role === 'gk' ? color : 'transparent',
                  borderWidth: isDup ? 2 : 1,
                }}
              />
              <input
                value={p.name}
                onChange={(e) => onNameChange(teamKey, p.slot, e.target.value)}
                onBlur={(e) => { const t = e.target.value.trim(); if (t !== e.target.value) onNameChange(teamKey, p.slot, t); }}
                maxLength={18}
                placeholder={p.role === 'gk' ? 'Arquero' : 'Nombre'}
                className="flex-1 min-w-0 bg-transparent border-b border-transparent text-[11px] outline-none text-[#eef1f8]"
                style={{ fontFamily: MONO }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}

function App() {
  const [teamNameA, setTeamNameA] = useState('Equipo A');
  const [teamNameB, setTeamNameB] = useState('Equipo B');
  const [teamA, setTeamA] = useState(() => buildLineup('A', '3-2-2'));
  const [teamB, setTeamB] = useState(() => buildLineup('B', '2-3-2'));
  const [formA, setFormA] = useState('3-2-2');
  const [formB, setFormB] = useState('2-3-2');
  const [showA, setShowA] = useState(true);
  const [showB, setShowB] = useState(true);
  const [ball, setBall] = useState({ x: 50, y: 75 });

  const [mode, setMode] = useState('move');
  const [arrowType, setArrowType] = useState('run');
  const [arrows, setArrows] = useState([]);
  const [ghosts, setGhosts] = useState([]);
  const [showGhosts, setShowGhosts] = useState(true);
  const [drawingArrow, setDrawingArrow] = useState(null);
  const [dragId, setDragId] = useState(null);
  const [isSimulating, setIsSimulating] = useState(false);
  const [dust, setDust] = useState([]);
  const [editingPlayer, setEditingPlayer] = useState(null);

  const [showLibrary, setShowLibrary] = useState(false);
  const [savedPlays, setSavedPlays] = useState([]);
  const [saveName, setSaveName] = useState('');
  const [librarySearch, setLibrarySearch] = useState('');
  const [libBusy, setLibBusy] = useState(false);
  const [libError, setLibError] = useState('');
  const [confirmDeleteId, setConfirmDeleteId] = useState(null);
  const [confirmNewBoard, setConfirmNewBoard] = useState(false);
  const [confirmOverwrite, setConfirmOverwrite] = useState(null);
  const [exporting, setExporting] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);
  const [canUndo, setCanUndo] = useState(false);
  const [canRedo, setCanRedo] = useState(false);
  const [showShortcuts, setShowShortcuts] = useState(false);

  const [toast, setToast] = useState(null);
  const [isOffline, setIsOffline] = useState(typeof navigator !== 'undefined' && 'onLine' in navigator ? !navigator.onLine : false);
  const [installPrompt, setInstallPrompt] = useState(null);
  const [swUpdateAvailable, setSwUpdateAvailable] = useState(false);

  const svgRef = useRef(null);
  const animRef = useRef(null);
  const historyRef = useRef([]);
  const redoRef = useRef([]);
  const dragCandidateRef = useRef(null);
  const dustTimeouts = useRef([]);
  const draftReadyRef = useRef(false);
  const toastTimeoutRef = useRef(null);

  function showToast(message) {
    if (toastTimeoutRef.current) clearTimeout(toastTimeoutRef.current);
    setToast(message);
    toastTimeoutRef.current = setTimeout(() => setToast(null), 2600);
  }

  useEffect(() => {
    async function init() {
      if (hasStorage()) {
        await refreshIndex();
        try {
          const res = await window.storage.get('draft');
          if (res && res.value) {
            const data = JSON.parse(res.value);
            const fA = data.formA || '3-2-2';
            const fB = data.formB || '2-3-2';
            setTeamNameA(data.teamNameA || 'Equipo A');
            setTeamNameB(data.teamNameB || 'Equipo B');
            setFormA(fA);
            setFormB(fB);
            setTeamA(data.teamA || buildLineup('A', fA));
            setTeamB(data.teamB || buildLineup('B', fB));
            setBall(data.ball || { x: 50, y: 75 });
            setArrows(data.arrows || []);
            setGhosts(data.ghosts || []);
            setShowA(data.showA !== false);
            setShowB(data.showB !== false);
          }
        } catch (e) {
          // no había un borrador previo válido, seguimos con el estado inicial
        }
      }
      draftReadyRef.current = true;
    }
    init();
    return () => {
      if (animRef.current) cancelAnimationFrame(animRef.current);
      dustTimeouts.current.forEach((t) => clearTimeout(t));
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    if (!draftReadyRef.current || !hasStorage()) return;
    const data = { teamNameA, teamNameB, formA, formB, teamA, teamB, ball, arrows, ghosts, showA, showB };
    const t = setTimeout(() => {
      window.storage.set('draft', JSON.stringify(data)).catch(() => {});
    }, 700);
    return () => clearTimeout(t);
  }, [teamNameA, teamNameB, formA, formB, teamA, teamB, ball, arrows, ghosts, showA, showB]);

  useEffect(() => {
    if (typeof window === 'undefined' || !window.matchMedia) return;
    const mq = window.matchMedia('(min-width: 1024px)');
    const update = () => setIsDesktop(mq.matches);
    update();
    if (mq.addEventListener) mq.addEventListener('change', update);
    else mq.addListener(update);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', update);
      else mq.removeListener(update);
    };
  }, []);

  useEffect(() => {
    function onKeyDown(e) {
      const tag = (e.target && e.target.tagName) || '';
      const inField = tag === 'INPUT' || tag === 'SELECT' || tag === 'TEXTAREA';
      // Escape debe cerrar los modales aunque el cursor esté en un campo de texto.
      if (e.key === 'Escape') {
        if (editingPlayer) setEditingPlayer(null);
        else if (showShortcuts) setShowShortcuts(false);
        else if (showLibrary) { setShowLibrary(false); setConfirmOverwrite(null); }
        return;
      }
      // Ctrl/Cmd+S abre el panel de guardado sin disparar el "Guardar página"
      // del navegador, incluso con el foco dentro de un campo de texto.
      if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 's') {
        e.preventDefault();
        setShowLibrary(true);
        return;
      }
      if (inField) return;
      const key = e.key.toLowerCase();
      if ((e.ctrlKey || e.metaKey) && key === 'z' && e.shiftKey) {
        e.preventDefault();
        handleRedo();
      } else if ((e.ctrlKey || e.metaKey) && key === 'y') {
        e.preventDefault();
        handleRedo();
      } else if ((e.ctrlKey || e.metaKey) && key === 'z') {
        e.preventDefault();
        handleUndo();
      } else if (key === 'm') {
        setMode('move');
      } else if (key === 'd') {
        setMode('draw');
      } else if (key === 'g') {
        setShowGhosts((v) => !v);
      } else if (key === 'f') {
        flipBoard();
      } else if (key === '?' || (e.shiftKey && key === '/')) {
        setShowShortcuts((v) => !v);
      }
    }
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [editingPlayer, showLibrary, showShortcuts]);

  // Estado de conexión: muestra un aviso cuando se pierde/recupera internet.
  useEffect(() => {
    function goOnline() {
      setIsOffline(false);
      showToast('Conexión recuperada');
    }
    function goOffline() {
      setIsOffline(true);
      showToast('Sin conexión: seguís pudiendo trabajar');
    }
    window.addEventListener('online', goOnline);
    window.addEventListener('offline', goOffline);
    return () => {
      window.removeEventListener('online', goOnline);
      window.removeEventListener('offline', goOffline);
    };
  }, []);

  // Captura el evento de instalación de la PWA para ofrecer un botón propio.
  useEffect(() => {
    function onBeforeInstall(e) {
      e.preventDefault();
      setInstallPrompt(e);
    }
    function onInstalled() {
      setInstallPrompt(null);
      showToast('App instalada');
    }
    window.addEventListener('beforeinstallprompt', onBeforeInstall);
    window.addEventListener('appinstalled', onInstalled);
    return () => {
      window.removeEventListener('beforeinstallprompt', onBeforeInstall);
      window.removeEventListener('appinstalled', onInstalled);
    };
  }, []);

  // Aviso de que hay una versión nueva de la app (el service worker cambió).
  useEffect(() => {
    function onSwUpdate() {
      setSwUpdateAvailable(true);
    }
    window.addEventListener('pizarra8-update-available', onSwUpdate);
    return () => window.removeEventListener('pizarra8-update-available', onSwUpdate);
  }, []);

  async function handleInstallClick() {
    if (!installPrompt) return;
    installPrompt.prompt();
    try {
      await installPrompt.userChoice;
    } catch (e) {
      // el usuario cerró el diálogo sin elegir, no hacemos nada especial
    }
    setInstallPrompt(null);
  }

  function handleReloadForUpdate() {
    window.location.reload();
  }

  const combinedPlayers = [
    ...(showA ? teamA.map((p) => ({ ...p, id: `A-${p.slot}`, team: 'A' })) : []),
    ...(showB ? teamB.map((p) => ({ ...p, id: `B-${p.slot}`, team: 'B' })) : []),
  ];

  function svgPoint(e) {
    const svg = svgRef.current;
    const pt = svg.createSVGPoint();
    pt.x = e.clientX;
    pt.y = e.clientY;
    return pt.matrixTransform(svg.getScreenCTM().inverse());
  }

  function hitTestPlayer(pt) {
    const all = [...combinedPlayers, { id: 'ball', x: ball.x, y: ball.y }];
    let best = null;
    let bestD = Infinity;
    all.forEach((p) => {
      const d = Math.hypot(p.x - pt.x, p.y - pt.y);
      if (d < bestD) {
        bestD = d;
        best = p;
      }
    });
    return bestD <= 6.5 ? best : null;
  }

  function updatePlayerPosition(id, x, y) {
    if (id === 'ball') {
      setBall({ x, y });
      return;
    }
    const [team, slotStr] = id.split('-');
    const slot = Number(slotStr);
    if (team === 'A') setTeamA((prev) => prev.map((p) => (p.slot === slot ? { ...p, x, y } : p)));
    else setTeamB((prev) => prev.map((p) => (p.slot === slot ? { ...p, x, y } : p)));
  }

  function snapshotState() {
    return {
      arrows: JSON.parse(JSON.stringify(arrows)),
      ghosts: JSON.parse(JSON.stringify(ghosts)),
      teamA: JSON.parse(JSON.stringify(teamA)),
      teamB: JSON.parse(JSON.stringify(teamB)),
      ball: { ...ball },
    };
  }

  function pushHistory() {
    historyRef.current.push(snapshotState());
    if (historyRef.current.length > 20) historyRef.current.shift();
    // Cualquier cambio nuevo invalida la pila de "Rehacer".
    redoRef.current = [];
    setCanUndo(true);
    setCanRedo(false);
  }

  function handleUndo() {
    const prev = historyRef.current.pop();
    if (!prev) return;
    redoRef.current.push(snapshotState());
    if (redoRef.current.length > 20) redoRef.current.shift();
    setArrows(prev.arrows);
    setGhosts(prev.ghosts);
    if (prev.teamA) setTeamA(prev.teamA);
    if (prev.teamB) setTeamB(prev.teamB);
    if (prev.ball) setBall(prev.ball);
    setCanUndo(historyRef.current.length > 0);
    setCanRedo(true);
  }

  function handleRedo() {
    const next = redoRef.current.pop();
    if (!next) return;
    historyRef.current.push(snapshotState());
    if (historyRef.current.length > 20) historyRef.current.shift();
    setArrows(next.arrows);
    setGhosts(next.ghosts);
    if (next.teamA) setTeamA(next.teamA);
    if (next.teamB) setTeamB(next.teamB);
    if (next.ball) setBall(next.ball);
    setCanUndo(true);
    setCanRedo(redoRef.current.length > 0);
  }

  function flipBoard() {
    pushHistory();
    const flipY = (y) => 150 - y;
    setTeamA((prev) => prev.map((p) => ({ ...p, y: flipY(p.y) })));
    setTeamB((prev) => prev.map((p) => ({ ...p, y: flipY(p.y) })));
    setBall((b) => ({ ...b, y: flipY(b.y) }));
    setArrows((prev) => prev.map((a) => ({ ...a, points: a.points.map((pt) => ({ x: pt.x, y: flipY(pt.y) })) })));
    setGhosts((prev) => prev.map((g) => ({ ...g, points: g.points.map((pt) => ({ x: pt.x, y: flipY(pt.y) })) })));
  }

  function downloadBlob(blob, filename) {
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.download = filename;
    link.href = url;
    link.click();
    setTimeout(() => URL.revokeObjectURL(url), 4000);
  }

  async function exportImage() {
    const svg = svgRef.current;
    if (!svg || exporting) return;
    setExporting(true);
    try {
      const clone = svg.cloneNode(true);
      clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
      clone.setAttribute('width', '1000');
      clone.setAttribute('height', '1500');
      // El clon se rasteriza fuera del documento (como <img>), así que no
      // hereda el @import de la tipografía cargado en la página: lo
      // incrustamos dentro del propio SVG para que el número/nombre de los
      // jugadores no caigan a la fuente por defecto en la imagen exportada.
      const fontStyle = document.createElementNS('http://www.w3.org/2000/svg', 'style');
      fontStyle.textContent = "@import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;700;800&display=swap');";
      clone.insertBefore(fontStyle, clone.firstChild);
      const svgStr = new XMLSerializer().serializeToString(clone);
      const svgBlob = new Blob([svgStr], { type: 'image/svg+xml;charset=utf-8' });
      const url = URL.createObjectURL(svgBlob);
      const img = new Image();
      await new Promise((resolve, reject) => {
        img.onload = resolve;
        img.onerror = () => reject(new Error('img-load-failed'));
        img.src = url;
      });
      // Pequeña espera para dar tiempo a que la fuente importada se aplique
      // antes de rasterizar (si ya estaba en caché, no cuesta casi nada).
      if (document.fonts && document.fonts.ready) {
        try { await document.fonts.ready; } catch (e) { /* seguimos igual */ }
      }
      const canvas = document.createElement('canvas');
      canvas.width = 1000;
      canvas.height = 1500;
      const ctx = canvas.getContext('2d');
      ctx.fillStyle = BOARD_BG;
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(img, 0, 0, canvas.width, canvas.height);
      URL.revokeObjectURL(url);

      const filename = `pizarra-futbol8-${Date.now()}.png`;
      const blob = await new Promise((resolve) => canvas.toBlob(resolve, 'image/png'));
      if (!blob) throw new Error('no-blob');

      // En celular, si el navegador soporta compartir archivos, ofrecemos
      // mandar la imagen directo a WhatsApp/mensajes en vez de solo bajarla.
      let shared = false;
      if (navigator.canShare && navigator.share) {
        const file = new File([blob], filename, { type: 'image/png' });
        if (navigator.canShare({ files: [file] })) {
          try {
            await navigator.share({ files: [file], title: 'Pizarra 8' });
            shared = true;
            showToast('Jugada compartida');
          } catch (shareErr) {
            if (shareErr && shareErr.name === 'AbortError') {
              // La persona canceló el diálogo de compartir a propósito: no
              // hace falta forzar además la descarga ni mostrar un error.
              shared = true;
            }
          }
        }
      }
      if (!shared) {
        downloadBlob(blob, filename);
        showToast('Imagen descargada');
      }
    } catch (e) {
      showToast('No se pudo exportar la imagen. Probá de nuevo.');
    } finally {
      setExporting(false);
    }
  }

  function handleClearDrawings() {
    if (arrows.length === 0 && ghosts.length === 0) return;
    pushHistory();
    setArrows([]);
    setGhosts([]);
  }

  function openNumberEditor(id) {
    const player = combinedPlayers.find((p) => p.id === id);
    if (!player) return;
    setEditingPlayer({ id, value: String(player.num), name: player.name || '' });
  }

  function confirmEditNumber() {
    if (!editingPlayer) return;
    const n = Math.max(1, Math.min(99, parseInt(editingPlayer.value, 10) || 1));
    const [team, slotStr] = editingPlayer.id.split('-');
    const slot = Number(slotStr);
    const setter = team === 'A' ? setTeamA : setTeamB;
    setter((prev) => prev.map((p) => (p.slot === slot ? { ...p, num: n, name: editingPlayer.name.trim() } : p)));
    setEditingPlayer(null);
  }

  function updatePlayerName(team, slot, name) {
    const setter = team === 'A' ? setTeamA : setTeamB;
    setter((prev) => prev.map((p) => (p.slot === slot ? { ...p, name } : p)));
  }

  function updatePlayerNumber(team, slot, value) {
    const n = Math.max(1, Math.min(99, parseInt(value, 10) || 1));
    const setter = team === 'A' ? setTeamA : setTeamB;
    setter((prev) => prev.map((p) => (p.slot === slot ? { ...p, num: n } : p)));
  }

  function handlePointerDown(e) {
    if (isSimulating) return;
    e.currentTarget.setPointerCapture(e.pointerId);
    const pt = svgPoint(e);
    const hit = hitTestPlayer(pt);
    if (mode === 'move') {
      if (hit) dragCandidateRef.current = { id: hit.id, startX: pt.x, startY: pt.y, isDragging: false, startTime: Date.now() };
    } else {
      const start = hit ? { x: hit.x, y: hit.y } : clampPoint(pt.x, pt.y);
      setDrawingArrow({ points: [start], type: arrowType });
    }
  }

  function handlePointerMove(e) {
    const pt = svgPoint(e);
    if (mode === 'move') {
      const cand = dragCandidateRef.current;
      if (!cand) return;
      const dist = Math.hypot(pt.x - cand.startX, pt.y - cand.startY);
      if (!cand.isDragging && dist > 1.5) {
        cand.isDragging = true;
        setDragId(cand.id);
      }
      if (cand.isDragging) {
        updatePlayerPosition(cand.id, Math.min(93, Math.max(7, pt.x)), Math.min(143, Math.max(7, pt.y)));
      }
    } else if (drawingArrow) {
      setDrawingArrow((prev) => {
        if (!prev) return prev;
        const last = prev.points[prev.points.length - 1];
        const d = Math.hypot(pt.x - last.x, pt.y - last.y);
        if (d < 1.0 || prev.points.length >= 250) return prev;
        return { ...prev, points: [...prev.points, clampPoint(pt.x, pt.y)] };
      });
    }
  }

  function handlePointerUp() {
    if (mode === 'move') {
      const cand = dragCandidateRef.current;
      if (cand) {
        if (!cand.isDragging && cand.id !== 'ball' && Date.now() - cand.startTime < 500) {
          openNumberEditor(cand.id);
        }
        dragCandidateRef.current = null;
      }
      setDragId(null);
    } else if (drawingArrow) {
      const cum = pathLengths(drawingArrow.points);
      const total = cum[cum.length - 1] || 0;
      if (total > 4) {
        pushHistory();
        setArrows((prev) => [...prev, { ...drawingArrow, id: `arr-${Date.now()}-${Math.random().toString(36).slice(2, 7)}` }]);
      } else {
        // Fue un toque, no un trazo: si cayó sobre una flecha existente, la borramos.
        const tapPt = drawingArrow.points[0];
        let hitId = null;
        let bestD = Infinity;
        arrows.forEach((a) => {
          const d = distToPolyline(tapPt, a.points);
          if (d < bestD) {
            bestD = d;
            hitId = a.id;
          }
        });
        if (hitId && bestD <= 3) {
          pushHistory();
          setArrows((prev) => prev.filter((a) => a.id !== hitId));
        }
      }
      setDrawingArrow(null);
    }
  }

  function resetPositions() {
    if (animRef.current) cancelAnimationFrame(animRef.current);
    pushHistory();
    setIsSimulating(false);
    setTeamA((prev) => buildLineup('A', formA, prev));
    setTeamB((prev) => buildLineup('B', formB, prev));
    setBall({ x: 50, y: 75 });
    showToast('Posiciones reiniciadas');
  }

  function handleFormA(key) {
    pushHistory();
    setFormA(key);
    setTeamA((prev) => buildLineup('A', key, prev));
  }

  function handleFormB(key) {
    pushHistory();
    setFormB(key);
    setTeamB((prev) => buildLineup('B', key, prev));
  }

  function handleSimulate() {
    if (isSimulating) return;
    const runnable = arrows.filter((a) => a.type !== 'mark' && a.points.length >= 2);
    if (runnable.length === 0) return;

    const entities = [
      ...teamA.map((p) => ({ id: `A-${p.slot}`, x: p.x, y: p.y })),
      ...teamB.map((p) => ({ id: `B-${p.slot}`, x: p.x, y: p.y })),
      { id: 'ball', x: ball.x, y: ball.y },
    ];
    const usedIds = new Set();
    const moves = [];
    runnable.forEach((arrow) => {
      const start = arrow.points[0];
      let best = null;
      let bestD = Infinity;
      entities.forEach((p) => {
        if (usedIds.has(p.id)) return;
        const d = Math.hypot(p.x - start.x, p.y - start.y);
        if (d < bestD) {
          bestD = d;
          best = p;
        }
      });
      if (best && bestD < 8) {
        usedIds.add(best.id);
        const cum = pathLengths(arrow.points);
        moves.push({ id: best.id, points: arrow.points, cum, total: cum[cum.length - 1] });
      }
    });
    if (moves.length === 0) return;

    const bursts = moves.map((m) => ({ id: `d-${Date.now()}-${m.id}`, x: m.points[0].x, y: m.points[0].y }));
    setDust((prev) => [...prev, ...bursts]);
    bursts.forEach((b) => {
      const tId = setTimeout(() => setDust((prev) => prev.filter((d) => d.id !== b.id)), 650);
      dustTimeouts.current.push(tId);
    });

    setIsSimulating(true);
    const duration = 1200;
    const t0 = performance.now();

    function tick(now) {
      const t = Math.min(1, (now - t0) / duration);
      const eased = t < 0.5 ? 2 * t * t : -1 + (4 - 2 * t) * t;
      moves.forEach((m) => {
        const p = pointAtDistance(m.points, m.cum, eased * m.total);
        updatePlayerPosition(m.id, p.x, p.y);
      });
      if (t < 1) {
        animRef.current = requestAnimationFrame(tick);
      } else {
        setIsSimulating(false);
        pushHistory();
        setGhosts((prevG) => {
          const phase = prevG.length ? Math.max(...prevG.map((g) => g.phase)) + 1 : 1;
          const newGhosts = runnable.map((a) => ({ ...a, id: `g-${a.id}`, phase }));
          return [...prevG, ...newGhosts];
        });
        setArrows((prev) => prev.filter((a) => a.type === 'mark'));
      }
    }
    animRef.current = requestAnimationFrame(tick);
  }

  async function refreshIndex() {
    try {
      const res = await window.storage.get('play-index');
      const idx = res && res.value ? JSON.parse(res.value) : [];
      setSavedPlays(idx);
    } catch (e) {
      setSavedPlays([]);
    }
  }

  // Guarda de verdad (ya sin preguntar): crea la jugada o reemplaza la
  // existente si se pasa un id.
  async function performSave(trimmedName, existingId) {
    setLibBusy(true);
    setLibError('');
    try {
      const id = existingId || `p${Date.now()}`;
      const data = { teamNameA, teamNameB, formA, formB, teamA, teamB, ball, arrows, ghosts, showA, showB };
      const setRes = await window.storage.set(`plays:${id}`, JSON.stringify(data));
      if (!setRes) throw new Error('save-failed');
      let newIdx;
      if (existingId) {
        newIdx = savedPlays.map((p) => (p.id === id ? { ...p, name: trimmedName, createdAt: Date.now() } : p));
      } else {
        const entry = { id, name: trimmedName, createdAt: Date.now() };
        newIdx = [entry, ...savedPlays];
      }
      await window.storage.set('play-index', JSON.stringify(newIdx));
      setSavedPlays(newIdx);
      setSaveName('');
      showToast(existingId ? 'Jugada reemplazada' : 'Jugada guardada');
    } catch (e) {
      setLibError('No se pudo guardar. Probá de nuevo.');
    } finally {
      setLibBusy(false);
    }
  }

  function handleSaveCurrent() {
    const trimmedName = saveName.trim();
    if (!trimmedName) return;
    if (!hasStorage()) {
      showToast('El guardado no está disponible en este entorno');
      return;
    }
    // Si ya existe una jugada con ese nombre, ofrecemos reemplazarla en vez
    // de crear un duplicado. Se pide confirmación con la UI propia (en vez
    // de window.confirm, que no es confiable en apps instaladas en la
    // pantalla de inicio de iOS) en lugar de crear un duplicado sin avisar.
    const existing = savedPlays.find((p) => p.name.trim().toLowerCase() === trimmedName.toLowerCase());
    if (existing) {
      // Nos aseguramos de que el panel esté visible para que la persona vea
      // la pregunta, sin importar desde qué atajo de guardado se disparó.
      setShowLibrary(true);
      setConfirmOverwrite({ id: existing.id, name: existing.name, trimmedName });
      return;
    }
    performSave(trimmedName, null);
  }

  function playPayload() {
    return { teamNameA, teamNameB, formA, formB, teamA, teamB, ball, arrows, ghosts, showA, showB };
  }

  // Exporta la jugada actual como un archivo .json descargable, para poder
  // pasarla a otro dispositivo sin depender del almacenamiento del navegador.
  function handleExportPlayFile() {
    try {
      const data = { kind: 'pizarra8-play', version: 1, name: saveName.trim() || 'jugada', payload: playPayload() };
      const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `${(data.name || 'jugada').replace(/[^a-z0-9-_]+/gi, '_')}.json`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      showToast('Jugada exportada');
    } catch (e) {
      setLibError('No se pudo exportar la jugada.');
    }
  }

  // Importa una jugada individual desde un archivo .json exportado antes.
  async function handleImportPlayFile(file) {
    if (!file || !hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      const text = await file.text();
      const parsed = JSON.parse(text);
      const payload = parsed && parsed.payload ? parsed.payload : parsed;
      if (!payload || !payload.teamA || !payload.teamB) throw new Error('formato-invalido');
      const id = `p${Date.now()}`;
      const name = (parsed.name || file.name.replace(/\.json$/i, '') || 'Jugada importada').slice(0, 40);
      await window.storage.set(`plays:${id}`, JSON.stringify(payload));
      const entry = { id, name, createdAt: Date.now() };
      const newIdx = [entry, ...savedPlays];
      await window.storage.set('play-index', JSON.stringify(newIdx));
      setSavedPlays(newIdx);
      showToast('Jugada importada');
    } catch (e) {
      setLibError('No se pudo importar ese archivo.');
    } finally {
      setLibBusy(false);
    }
  }

  // Copia de resguardo completa: exporta todas las jugadas guardadas en un
  // único archivo .json.
  async function handleBackupExport() {
    if (!hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      const plays = [];
      for (const entry of savedPlays) {
        const res = await window.storage.get(`plays:${entry.id}`);
        if (res && res.value) plays.push({ id: entry.id, name: entry.name, createdAt: entry.createdAt, payload: JSON.parse(res.value) });
      }
      const backup = { kind: 'pizarra8-backup', version: 1, exportedAt: Date.now(), plays };
      const blob = new Blob([JSON.stringify(backup, null, 2)], { type: 'application/json' });
      const url = URL.createObjectURL(blob);
      const link = document.createElement('a');
      link.download = `pizarra8-backup-${Date.now()}.json`;
      link.href = url;
      link.click();
      URL.revokeObjectURL(url);
      showToast('Copia de resguardo descargada');
    } catch (e) {
      setLibError('No se pudo generar la copia de resguardo.');
    } finally {
      setLibBusy(false);
    }
  }

  // Restaura una copia de resguardo completa, agregando las jugadas al índice actual.
  async function handleBackupImport(file) {
    if (!file || !hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      const text = await file.text();
      const backup = JSON.parse(text);
      const plays = Array.isArray(backup.plays) ? backup.plays : [];
      if (plays.length === 0) throw new Error('backup-vacio');
      const newEntries = [];
      for (const p of plays) {
        const id = `p${Date.now()}-${Math.random().toString(36).slice(2, 6)}`;
        await window.storage.set(`plays:${id}`, JSON.stringify(p.payload));
        newEntries.push({ id, name: p.name || 'Jugada restaurada', createdAt: p.createdAt || Date.now() });
      }
      const newIdx = [...newEntries, ...savedPlays];
      await window.storage.set('play-index', JSON.stringify(newIdx));
      setSavedPlays(newIdx);
      showToast(`${newEntries.length} jugada(s) restaurada(s)`);
    } catch (e) {
      setLibError('No se pudo restaurar esa copia de resguardo.');
    } finally {
      setLibBusy(false);
    }
  }

  async function handleLoadPlay(id) {
    if (!hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      const res = await window.storage.get(`plays:${id}`);
      if (!res) throw new Error('not-found');
      const data = JSON.parse(res.value);
      setTeamNameA(data.teamNameA || 'Equipo A');
      setTeamNameB(data.teamNameB || 'Equipo B');
      setFormA(data.formA || '3-2-2');
      setFormB(data.formB || '2-3-2');
      setTeamA(data.teamA || buildLineup('A', data.formA || '3-2-2'));
      setTeamB(data.teamB || buildLineup('B', data.formB || '2-3-2'));
      setBall(data.ball || { x: 50, y: 75 });
      setArrows(data.arrows || []);
      setGhosts(data.ghosts || []);
      setShowA(data.showA !== false);
      setShowB(data.showB !== false);
      historyRef.current = [];
      redoRef.current = [];
      setCanUndo(false);
      setCanRedo(false);
      setShowLibrary(false);
      showToast('Jugada cargada');
    } catch (e) {
      setLibError('No se pudo cargar esa jugada.');
    } finally {
      setLibBusy(false);
    }
  }

  // Duplica una jugada guardada (misma cancha, distinto nombre) para poder
  // partir de una variante sin perder el original.
  async function handleDuplicatePlay(id) {
    if (!hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      const res = await window.storage.get(`plays:${id}`);
      if (!res) throw new Error('not-found');
      const original = savedPlays.find((p) => p.id === id);
      const newId = `p${Date.now()}`;
      await window.storage.set(`plays:${newId}`, res.value);
      const entry = { id: newId, name: `${(original && original.name) || 'Jugada'} (copia)`, createdAt: Date.now() };
      const newIdx = [entry, ...savedPlays];
      await window.storage.set('play-index', JSON.stringify(newIdx));
      setSavedPlays(newIdx);
      showToast('Jugada duplicada');
    } catch (e) {
      setLibError('No se pudo duplicar esa jugada.');
    } finally {
      setLibBusy(false);
    }
  }

  async function handleDeletePlay(id) {
    if (!hasStorage()) return;
    setLibBusy(true);
    setLibError('');
    try {
      await window.storage.delete(`plays:${id}`);
      const newIdx = savedPlays.filter((p) => p.id !== id);
      await window.storage.set('play-index', JSON.stringify(newIdx));
      setSavedPlays(newIdx);
      showToast('Jugada borrada');
    } catch (e) {
      setLibError('No se pudo borrar.');
    } finally {
      setLibBusy(false);
      setConfirmDeleteId(null);
    }
  }

  function handleNewBoard() {
    setTeamNameA('Equipo A');
    setTeamNameB('Equipo B');
    setFormA('3-2-2');
    setFormB('2-3-2');
    setTeamA(buildLineup('A', '3-2-2'));
    setTeamB(buildLineup('B', '2-3-2'));
    setBall({ x: 50, y: 75 });
    setArrows([]);
    setGhosts([]);
    setShowA(true);
    setShowB(true);
    historyRef.current = [];
    redoRef.current = [];
    setCanUndo(false);
    setCanRedo(false);
    setShowLibrary(false);
    setConfirmNewBoard(false);
    if (hasStorage()) window.storage.delete('draft').catch(() => {});
  }

  const hasRunnable = arrows.some((a) => a.type !== 'mark');

  function findDupNums(players) {
    const counts = {};
    players.forEach((p) => { counts[p.num] = (counts[p.num] || 0) + 1; });
    return new Set(Object.keys(counts).filter((n) => counts[n] > 1).map(Number));
  }
  const dupNumsA = findDupNums(teamA);
  const dupNumsB = findDupNums(teamB);

  const playerEditorModal = editingPlayer && (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Editar jugador"
      className="w-full rounded-md p-4 space-y-3"
      style={{ background: '#111c33', border: '1px solid #f4b400' }}
    >
      <div className="flex items-center justify-between">
        <p className="text-[11px] tracking-widest uppercase text-[#f4b400] font-bold" style={{ fontFamily: MONO }}>
          Editar jugador
        </p>
        <button onClick={() => setEditingPlayer(null)} className="text-[#8a93b0]" aria-label="Cerrar edición de jugador">
          <X size={15} />
        </button>
      </div>
      <div className="flex gap-3">
        <div className="w-20 shrink-0">
          <label className="text-[9px] text-[#5f6b8a] block mb-1 uppercase" style={{ fontFamily: MONO }}>
            Número
          </label>
          <input
            type="number"
            min="1"
            max="99"
            value={editingPlayer.value}
            onChange={(e) => setEditingPlayer((v) => ({ ...v, value: e.target.value }))}
            onKeyDown={(e) => { if (e.key === 'Enter') confirmEditNumber(); }}
            className="w-full bg-transparent border-b-2 border-[#3a4a6b] px-1 py-1.5 text-[15px] font-bold text-[#eef1f8] outline-none"
            style={{ fontFamily: MONO }}
            autoFocus
          />
        </div>
        <div className="flex-1 min-w-0">
          <label className="text-[9px] text-[#5f6b8a] block mb-1 uppercase" style={{ fontFamily: MONO }}>
            Nombre del jugador
          </label>
          <input
            value={editingPlayer.name}
            onChange={(e) => setEditingPlayer((v) => ({ ...v, name: e.target.value }))}
            onKeyDown={(e) => { if (e.key === 'Enter') confirmEditNumber(); }}
            maxLength={18}
            placeholder="Opcional"
            className="w-full bg-transparent border-b-2 border-[#3a4a6b] px-1 py-1.5 text-[15px] text-[#eef1f8] outline-none"
            style={{ fontFamily: MONO }}
          />
        </div>
      </div>
      {editingPlayer && (() => {
        const teamKey = editingPlayer.id.split('-')[0];
        const teamPlayers = teamKey === 'A' ? teamA : teamB;
        const n = parseInt(editingPlayer.value, 10);
        const isDup = teamPlayers.some((p) => `${teamKey}-${p.slot}` !== editingPlayer.id && p.num === n);
        return isDup ? (
          <p className="text-[9px] text-[#ff3b30] uppercase" style={{ fontFamily: MONO }}>
            ⚠ Ese dorsal ya lo usa otro jugador de este equipo
          </p>
        ) : null;
      })()}
      <div className="flex gap-2 pt-1">
        <button
          onClick={confirmEditNumber}
          className="flex-1 text-[11px] font-bold py-2 rounded-sm uppercase tracking-wide"
          style={{ background: '#f4b400', color: '#0a1424', fontFamily: MONO }}
        >
          Guardar
        </button>
        <button
          onClick={() => setEditingPlayer(null)}
          className="text-[11px] text-[#8a93b0] px-3 uppercase"
          style={{ fontFamily: MONO }}
        >
          Cancelar
        </button>
      </div>
    </div>
  );

  const libraryModalContent = (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Jugadas guardadas"
      className="w-full rounded-md p-4 space-y-3"
      style={{ background: '#111c33', border: '1px solid #2c3e5c', fontFamily: MONO }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[#eef1f8] text-[13px] font-bold uppercase tracking-wide">Jugadas guardadas</h2>
        <button
          onClick={() => { setShowLibrary(false); setConfirmOverwrite(null); }}
          className="text-[#8a93b0]"
          aria-label="Cerrar jugadas guardadas"
        >
          <X size={16} />
        </button>
      </div>

      <div className="flex gap-2">
        <input
          value={saveName}
          onChange={(e) => setSaveName(e.target.value)}
          onKeyDown={(e) => { if (e.key === 'Enter' && saveName.trim() && !libBusy) handleSaveCurrent(); }}
          placeholder="Nombre de la jugada"
          className="flex-1 min-w-0 bg-transparent border-b-2 border-[#3a4a6b] px-1 py-1.5 text-[12px] text-[#eef1f8] outline-none"
        />
        <button
          onClick={handleSaveCurrent}
          disabled={!saveName.trim() || libBusy}
          className="px-3 rounded-sm text-[11px] font-bold uppercase disabled:opacity-30"
          style={{ background: '#f4b400', color: '#0a1424' }}
        >
          Guardar
        </button>
      </div>

      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[9px] uppercase" style={{ color: '#8a93b0' }}>
        <button onClick={handleExportPlayFile} className="underline decoration-dotted">
          Exportar jugada actual (.json)
        </button>
        <label className="underline decoration-dotted cursor-pointer">
          Importar jugada (.json)
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) handleImportPlayFile(f); e.target.value = ''; }}
          />
        </label>
      </div>
      <div className="flex flex-wrap items-center gap-x-3 gap-y-1.5 text-[9px] uppercase pb-1" style={{ color: '#8a93b0', borderBottom: '1px solid #22314d' }}>
        <button onClick={handleBackupExport} disabled={libBusy || savedPlays.length === 0} className="underline decoration-dotted disabled:opacity-30">
          Descargar copia de resguardo
        </button>
        <label className="underline decoration-dotted cursor-pointer">
          Restaurar copia de resguardo
          <input
            type="file"
            accept="application/json"
            className="hidden"
            onChange={(e) => { const f = e.target.files && e.target.files[0]; if (f) handleBackupImport(f); e.target.value = ''; }}
          />
        </label>
      </div>

      {confirmOverwrite && (
        <div className="flex items-center gap-2 flex-wrap">
          <span className="text-[10px] text-[#f4b400] normal-case">
            Ya existe una jugada llamada "{confirmOverwrite.name}". ¿Reemplazarla?
          </span>
          <button
            onClick={() => { const c = confirmOverwrite; setConfirmOverwrite(null); performSave(c.trimmedName, c.id); }}
            disabled={libBusy}
            className="text-[10px] font-bold text-[#f4b400] uppercase disabled:opacity-30"
          >
            Sí, reemplazar
          </button>
          <button onClick={() => setConfirmOverwrite(null)} className="text-[10px] text-[#8a93b0] uppercase">
            Cancelar
          </button>
        </div>
      )}

      {confirmNewBoard ? (
        <div className="flex items-center gap-2">
          <span className="text-[10px] text-[#ff3b30]">¿Empezar de cero? Se perderá lo actual.</span>
          <button onClick={handleNewBoard} className="text-[10px] font-bold text-[#ff3b30] uppercase">
            Sí
          </button>
          <button onClick={() => setConfirmNewBoard(false)} className="text-[10px] text-[#8a93b0] uppercase">
            No
          </button>
        </div>
      ) : (
        <button onClick={() => setConfirmNewBoard(true)} className="text-[10px] text-[#8a93b0] underline">
          Empezar una pizarra nueva
        </button>
      )}

      {libError && <p className="text-[10px] text-[#ff3b30]">{libError}</p>}
      {!hasStorage() && <p className="text-[10px] text-[#ff3b30]">El guardado no está disponible en este entorno.</p>}

      {savedPlays.length === 0 ? (
        <p className="text-[10px] text-[#5f6b8a]">Todavía no guardaste ninguna jugada.</p>
      ) : (
        <>
          {savedPlays.length > 4 && (
            <div className="flex items-center gap-1.5" style={{ color: '#5f6b8a' }}>
              <Search size={12} className="shrink-0" />
              <input
                value={librarySearch}
                onChange={(e) => setLibrarySearch(e.target.value)}
                placeholder="Buscar jugada…"
                className="flex-1 min-w-0 bg-transparent border-b border-[#22314d] px-1 py-1 text-[10px] text-[#eef1f8] outline-none normal-case"
              />
            </div>
          )}
          {(() => {
            const q = librarySearch.trim().toLowerCase();
            const filtered = q ? savedPlays.filter((p) => p.name.toLowerCase().includes(q)) : savedPlays;
            if (filtered.length === 0) {
              return <p className="text-[10px] text-[#5f6b8a]">Ninguna jugada coincide con "{librarySearch}".</p>;
            }
            return (
              <ul className="space-y-0 max-h-56 overflow-y-auto desk-panel">
                {filtered.map((sp) => (
                  <li key={sp.id} className="flex items-center justify-between py-2" style={{ borderBottom: '1px solid #22314d' }}>
                    <div className="min-w-0">
                      <p className="text-[11px] text-[#eef1f8] truncate">{sp.name}</p>
                      <p className="text-[9px] text-[#5f6b8a]">{new Date(sp.createdAt).toLocaleDateString()}</p>
                    </div>
                    {confirmDeleteId === sp.id ? (
                      <div className="flex items-center gap-1.5 shrink-0 ml-2">
                        <span className="text-[9px] text-[#ff3b30]">¿Borrar?</span>
                        <button onClick={() => handleDeletePlay(sp.id)} disabled={libBusy} className="text-[9px] font-bold text-[#ff3b30] disabled:opacity-30 uppercase">
                          Sí
                        </button>
                        <button onClick={() => setConfirmDeleteId(null)} className="text-[9px] text-[#8a93b0] uppercase">
                          No
                        </button>
                      </div>
                    ) : (
                      <div className="flex items-center gap-2.5 shrink-0 ml-2">
                        <button
                          onClick={() => handleLoadPlay(sp.id)}
                          disabled={libBusy}
                          className="text-[10px] text-[#c7d0e0] disabled:opacity-30 uppercase font-bold"
                        >
                          Cargar
                        </button>
                        <button
                          onClick={() => handleDuplicatePlay(sp.id)}
                          disabled={libBusy}
                          className="text-[#8a93b0] disabled:opacity-30 hover:text-[#eef1f8]"
                          aria-label={`Duplicar jugada ${sp.name}`}
                          title="Duplicar"
                        >
                          <Copy size={13} />
                        </button>
                        <button
                          onClick={() => setConfirmDeleteId(sp.id)}
                          disabled={libBusy}
                          className="text-[#ff3b30] disabled:opacity-30"
                          aria-label={`Borrar jugada ${sp.name}`}
                        >
                          <Trash2 size={13} />
                        </button>
                      </div>
                    )}
                  </li>
                ))}
              </ul>
            );
          })()}
        </>
      )}
    </div>
  );

  const sharedStyleTag = (
    <style>{`
      @import url('https://fonts.googleapis.com/css2?family=Oswald:wght@400;500;600;700&display=swap');
      @keyframes dustPop { 0% { r: 1; opacity: 0.9; } 100% { r: 6.5; opacity: 0; } }
      .dust-pop { animation: dustPop 0.6s ease-out forwards; }
      input[type=number]::-webkit-inner-spin-button { opacity: 1; }
      .chip-row::-webkit-scrollbar { display: none; }
      .chip-row { scrollbar-width: none; -ms-overflow-style: none; }
      .roster-row input:focus { border-color: #f4b400; }
      .desk-panel::-webkit-scrollbar { width: 6px; }
      .desk-panel::-webkit-scrollbar-thumb { background: #2c3e5c; border-radius: 3px; }
      button:focus-visible, a:focus-visible, [role="button"]:focus-visible {
        outline: 2px solid #f4b400; outline-offset: 2px; border-radius: 2px;
      }
      input:focus-visible { outline: none; }
    `}</style>
  );

  const shortcutsList = [
    ['M', 'Modo mover'],
    ['D', 'Modo dibujar'],
    ['G', 'Mostrar/ocultar huellas'],
    ['F', 'Voltear la cancha'],
    ['Ctrl/⌘ + Z', 'Deshacer'],
    ['Ctrl/⌘ + Shift + Z', 'Rehacer'],
    ['Ctrl/⌘ + S', 'Abrir jugadas guardadas'],
    ['?', 'Mostrar/ocultar esta ayuda'],
    ['Esc', 'Cerrar ventanas emergentes'],
  ];

  const shortcutsModal = showShortcuts && (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Atajos de teclado"
      className="w-full rounded-md p-4 space-y-3"
      style={{ background: '#111c33', border: '1px solid #2c3e5c', fontFamily: MONO }}
    >
      <div className="flex items-center justify-between">
        <h2 className="text-[#eef1f8] text-[13px] font-bold uppercase tracking-wide flex items-center gap-2">
          <Keyboard size={14} /> Atajos de teclado
        </h2>
        <button onClick={() => setShowShortcuts(false)} className="text-[#8a93b0]" aria-label="Cerrar atajos">
          <X size={16} />
        </button>
      </div>
      <ul className="space-y-1.5">
        {shortcutsList.map(([key, label]) => (
          <li key={key} className="flex items-center justify-between text-[11px]">
            <span className="text-[#c7d0e0]">{label}</span>
            <kbd
              className="px-1.5 py-0.5 rounded-sm text-[9px] font-bold"
              style={{ background: '#0a1424', color: '#f4b400', border: '1px solid #2c3e5c' }}
            >
              {key}
            </kbd>
          </li>
        ))}
      </ul>
    </div>
  );

  const pitchSvg = (
    <svg
      ref={svgRef}
      viewBox="0 0 100 150"
      style={{ width: '100%', height: 'auto', maxHeight: '100%', touchAction: 'none' }}
      onPointerDown={handlePointerDown}
      onPointerMove={handlePointerMove}
      onPointerUp={handlePointerUp}
      onPointerCancel={handlePointerUp}
    >
      <defs>
        <pattern id="grass" x="0" y="0" width="12.5" height="150" patternUnits="userSpaceOnUse">
          <rect width="12.5" height="150" fill={PITCH_LIGHT} />
          <rect width="6.25" height="150" fill={PITCH_DARK} />
        </pattern>
        <filter id="chalkTexture" x="-5%" y="-5%" width="110%" height="110%">
          <feTurbulence type="fractalNoise" baseFrequency="0.9" numOctaves="2" result="noise" seed="7" />
          <feDisplacementMap in="SourceGraphic" in2="noise" scale="0.5" />
        </filter>
        <marker id="arrowHead" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={ARROW_TYPES.run.color} />
        </marker>
        <marker id="arrowHeadPass" viewBox="0 0 10 10" refX="8" refY="5" markerWidth="4.2" markerHeight="4.2" orient="auto-start-reverse">
          <path d="M0,0 L10,5 L0,10 z" fill={ARROW_TYPES.pass.color} />
        </marker>
      </defs>

      <rect x="0" y="0" width="100" height="150" fill="url(#grass)" />

      <g filter="url(#chalkTexture)" stroke={CHALK} strokeWidth="0.75" fill="none" strokeLinecap="round" strokeLinejoin="round" opacity="0.95">
        <rect x="5" y="5" width="90" height="140" />
        <line x1="5" y1="75" x2="95" y2="75" />
        <circle cx="50" cy="75" r="11" />
        <circle cx="50" cy="75" r="0.7" fill={CHALK} />
        <rect x="25" y="5" width="50" height="20" />
        <rect x="37" y="5" width="26" height="8" />
        <rect x="44" y="2" width="12" height="3" />
        <circle cx="50" cy="19" r="0.7" fill={CHALK} />
        <path d="M 40,25 A 11,11 0 0 0 60,25" />
        <rect x="25" y="125" width="50" height="20" />
        <rect x="37" y="137" width="26" height="8" />
        <rect x="44" y="145" width="12" height="3" />
        <circle cx="50" cy="131" r="0.7" fill={CHALK} />
        <path d="M 40,125 A 11,11 0 0 1 60,125" />
        <path d="M 5,7 A 2,2 0 0 1 7,5" />
        <path d="M 93,5 A 2,2 0 0 1 95,7" />
        <path d="M 95,143 A 2,2 0 0 1 93,145" />
        <path d="M 7,145 A 2,2 0 0 1 5,143" />
      </g>

      {showGhosts &&
        ghosts.map((g) => {
          const mid = g.points[Math.floor(g.points.length / 2)];
          return (
            <g key={g.id} opacity={0.35}>
              <path d={buildPathD(g.points)} stroke={CHALK} strokeWidth={0.9} strokeDasharray="0.2,2.6" fill="none" strokeLinecap="round" />
              <circle cx={mid.x} cy={mid.y} r={2.6} fill="#05070f" stroke={CHALK} strokeWidth={0.4} />
              <text x={mid.x} y={mid.y} textAnchor="middle" dominantBaseline="central" fontSize={2.6} fill={CHALK} fontFamily={MONO}>
                {g.phase}
              </text>
            </g>
          );
        })}

      {arrows.map((a) => {
        const style = ARROW_TYPES[a.type];
        const last = a.points[a.points.length - 1];
        return (
          <g key={a.id}>
            <path
              d={buildPathD(a.points)}
              stroke={style.color}
              strokeWidth={1.3}
              strokeDasharray={style.dash}
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              markerEnd={a.type === 'run' ? 'url(#arrowHead)' : a.type === 'pass' ? 'url(#arrowHeadPass)' : undefined}
              opacity={0.95}
            />
            {a.type === 'mark' && <circle cx={last.x} cy={last.y} r={2.2} fill="none" stroke={style.color} strokeWidth={0.8} />}
          </g>
        );
      })}
      {drawingArrow && (
        <path
          d={buildPathD(drawingArrow.points)}
          stroke={ARROW_TYPES[drawingArrow.type].color}
          strokeWidth={1.3}
          strokeDasharray={ARROW_TYPES[drawingArrow.type].dash}
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
          opacity={0.6}
        />
      )}

      {dust.map((d) => (
        <circle key={d.id} cx={d.x} cy={d.y} r={1} fill={CHALK} className="dust-pop" />
      ))}

      {combinedPlayers.map((p) => {
        const isDrag = dragId === p.id;
        const color = p.team === 'A' ? TEAM_A : TEAM_B;
        return (
          <g
            key={p.id}
            transform={`translate(${p.x} ${p.y})`}
            style={{ transition: isDrag || isSimulating ? 'none' : 'transform 0.15s ease' }}
          >
            <circle
              r={isDrag ? 5.0 : 4.3}
              fill={p.role === 'gk' ? '#0a1424' : color}
              stroke={p.role === 'gk' ? color : '#0a1424'}
              strokeWidth={p.role === 'gk' ? 1.1 : 0.5}
            />
            <text
              textAnchor="middle"
              dominantBaseline="central"
              fontSize={4.4}
              fontFamily={MONO}
              fontWeight={800}
              fill={p.role === 'gk' ? color : '#0a1424'}
              stroke={p.role === 'gk' ? 'rgba(10,20,36,0.85)' : 'rgba(255,255,255,0.65)'}
              strokeWidth={0.45}
              paintOrder="stroke"
            >
              {p.num}
            </text>
            {p.name && (
              <text
                y={isDesktop ? 8.4 : 7.6}
                textAnchor="middle"
                fontSize={isDesktop ? 3.1 : 2.7}
                fontFamily={MONO}
                fontWeight={700}
                fill={CHALK}
                stroke={INK}
                strokeWidth={0.5}
                paintOrder="stroke"
              >
                {p.name.length > 12 ? `${p.name.slice(0, 12)}…` : p.name}
              </text>
            )}
          </g>
        );
      })}

      <g transform={`translate(${ball.x} ${ball.y})`} style={{ transition: dragId === 'ball' || isSimulating ? 'none' : 'transform 0.15s ease' }}>
        <circle r={dragId === 'ball' ? 3.0 : 2.6} fill="#f5f5f0" stroke="#0a1424" strokeWidth={0.4} />
        <path d="M-1.1,-0.3 L0,-1.3 L1.1,-0.3 L0.6,1 L-0.6,1 Z" fill="#0a1424" opacity={0.85} />
      </g>
    </svg>
  );

  const toastEl = toast && (
    <div
      role="status"
      className="fixed left-1/2 z-50 px-4 py-2 rounded-full text-[11px] font-bold"
      style={{
        bottom: 18,
        transform: 'translateX(-50%)',
        background: '#eef1f8',
        color: '#0a1424',
        fontFamily: MONO,
        boxShadow: '0 8px 24px rgba(0,0,0,0.35)',
        animation: 'toastPop 0.18s ease-out',
      }}
    >
      {toast}
    </div>
  );

  const updateBannerEl = swUpdateAvailable && (
    <div
      className="w-full flex items-center justify-center gap-3 py-1.5 px-3 text-[11px] font-bold"
      style={{ background: '#f4b400', color: '#0a1424', fontFamily: MONO }}
    >
      <RefreshCw size={13} />
      <span>Hay una versión nueva de la app</span>
      <button onClick={handleReloadForUpdate} className="underline uppercase">
        Recargar
      </button>
    </div>
  );

  const offlineBadgeEl = isOffline && (
    <span
      className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold uppercase"
      style={{ background: '#2c1a1a', color: '#ff9a8a', fontFamily: MONO }}
      title="Sin conexión"
    >
      <WifiOff size={11} /> Sin conexión
    </span>
  );

  const installButtonEl = installPrompt && (
    <button
      onClick={handleInstallClick}
      className="flex items-center gap-1 px-2 py-1 rounded-full text-[9px] font-bold uppercase"
      style={{ background: '#1a2c1f', color: '#8affb0', fontFamily: MONO }}
      title="Instalar app"
    >
      <DownloadCloud size={11} /> Instalar app
    </button>
  );

  if (isDesktop) {
    return (
      <div className="w-full" style={{ minHeight: '100dvh', background: '#070c18' }}>
        {sharedStyleTag}
        <style>{`
          @keyframes rulesFade { from { opacity: 0; transform: translateY(-4px); } to { opacity: 1; transform: translateY(0); } }
          @keyframes toastPop { from { opacity: 0; transform: translate(-50%, 6px); } to { opacity: 1; transform: translate(-50%, 0); } }
        `}</style>
        {updateBannerEl}
        {toastEl}
        <div className="mx-auto" style={{ maxWidth: 1400 }}>
          <header
            className="flex items-center justify-between px-8 py-5"
            style={{ borderBottom: '1px solid #22314d' }}
          >
            <div className="flex items-center gap-3">
              <div
                className="w-9 h-9 rounded-full flex items-center justify-center"
                style={{ background: '#f4b400' }}
              >
                <Monitor size={17} color="#0a1424" />
              </div>
              <div>
                <h1
                  style={{ fontFamily: HAND, fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.02em' }}
                  className="text-3xl text-[#eef1f8] leading-none uppercase"
                >
                  Pizarra 8 <span style={{ color: '#f4b400' }}>Escritorio</span>
                </h1>
                <div className="flex items-center gap-2 mt-1.5 mb-0.5">
                  <div className="h-[3px] w-16" style={{ background: '#f4b400' }} />
                  <span className="text-[9px] text-[#5f6b8a] tracking-widest" style={{ fontFamily: MONO }}>V2</span>
                </div>
                <p className="text-[11px] text-[#5f6b8a] mt-0.5" style={{ fontFamily: MONO }}>
                  Panel táctico completo · arrastrá, dibujá y simulá jugadas
                </p>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {offlineBadgeEl}
              {installButtonEl}
              <button
                onClick={() => setShowShortcuts((v) => !v)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-[11px] font-bold"
                style={{ fontFamily: MONO, color: '#c7d0e0', border: '1px solid #2c3e5c' }}
                title="Atajos de teclado"
              >
                <Keyboard size={14} /> Atajos
              </button>
              <button
                onClick={exportImage}
                disabled={exporting}
                className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-[11px] font-bold disabled:opacity-40"
                style={{ fontFamily: MONO, color: '#c7d0e0', border: '1px solid #2c3e5c' }}
                title="Exportar o compartir imagen"
              >
                {exporting ? <Loader2 size={14} className="animate-spin" /> : <Download size={14} />} Exportar
              </button>
              <button
                onClick={() => setShowLibrary(true)}
                className="flex items-center gap-1.5 px-3 py-2 rounded-sm text-[11px] font-bold"
                style={{ fontFamily: MONO, background: '#eef1f8', color: '#0a1424' }}
              >
                <Save size={14} /> Jugadas guardadas
              </button>
            </div>
          </header>

          <div className="grid gap-6 px-8 py-6" style={{ gridTemplateColumns: '280px minmax(0,1fr) 280px' }}>
            {/* LEFT: rosters */}
            <aside
              className="desk-panel space-y-5 overflow-y-auto pr-1"
              style={{ maxHeight: 'calc(100dvh - 160px)' }}
            >
              <div className="flex items-center justify-center gap-1.5 pb-1">
                <button
                  onClick={() => { setShowA(true); setShowB(false); }}
                  className="px-3 py-1 rounded-full text-[10px] font-bold"
                  style={{
                    fontFamily: MONO,
                    color: showA && !showB ? '#0a1424' : TEAM_A,
                    background: showA && !showB ? TEAM_A : 'transparent',
                    border: showA && !showB ? 'none' : `1px solid ${TEAM_A}`,
                  }}
                >
                  Solo A
                </button>
                <button
                  onClick={() => { setShowA(true); setShowB(true); }}
                  className="px-3 py-1 rounded-full text-[10px] font-bold"
                  style={{
                    fontFamily: MONO,
                    color: showA && showB ? '#0a1424' : '#8a93b0',
                    background: showA && showB ? CHALK : 'transparent',
                    border: showA && showB ? 'none' : '1px solid #2c3e5c',
                  }}
                >
                  Ambos
                </button>
                <button
                  onClick={() => { setShowA(false); setShowB(true); }}
                  className="px-3 py-1 rounded-full text-[10px] font-bold"
                  style={{
                    fontFamily: MONO,
                    color: showB && !showA ? '#0a1424' : TEAM_B,
                    background: showB && !showA ? TEAM_B : 'transparent',
                    border: showB && !showA ? 'none' : `1px solid ${TEAM_B}`,
                  }}
                >
                  Solo B
                </button>
              </div>

              <RosterPanel
                color={TEAM_A}
                teamKey="A"
                teamName={teamNameA}
                onTeamName={setTeamNameA}
                players={teamA}
                formation={formA}
                onFormation={handleFormA}
                onNameChange={updatePlayerName}
                onNumberChange={updatePlayerNumber}
                dimmed={!showA}
                dupNums={dupNumsA}
              />
              <RosterPanel
                color={TEAM_B}
                teamKey="B"
                teamName={teamNameB}
                onTeamName={setTeamNameB}
                players={teamB}
                formation={formB}
                onFormation={handleFormB}
                onNameChange={updatePlayerName}
                onNumberChange={updatePlayerNumber}
                dimmed={!showB}
                dupNums={dupNumsB}
              />
            </aside>

            {/* CENTER: pitch */}
            <main className="flex flex-col items-center gap-4">
              {playerEditorModal}
              {!editingPlayer && showShortcuts && <div className="w-full" style={{ maxWidth: 380 }}>{shortcutsModal}</div>}
              <div className="flex items-center gap-3 flex-wrap justify-center">
                <div className="flex rounded-full overflow-hidden border border-[#2c3e5c] shrink-0">
                  <button onClick={() => setMode('move')} className={`${pillBtnClass(mode === 'move')} gap-1.5 px-4`} title="Mover">
                    <Move size={15} /> <span className="text-[10px] font-bold" style={{ fontFamily: MONO }}>Mover</span>
                  </button>
                  <button onClick={() => setMode('draw')} className={`${pillBtnClass(mode === 'draw')} gap-1.5 px-4`} title="Dibujar">
                    <Pencil size={15} /> <span className="text-[10px] font-bold" style={{ fontFamily: MONO }}>Dibujar</span>
                  </button>
                </div>
                {mode === 'draw' && (
                  <div className="flex items-center gap-2">
                    {Object.entries(ARROW_TYPES).map(([key, t]) => (
                      <button
                        key={key}
                        onClick={() => setArrowType(key)}
                        className="flex items-center gap-1.5 px-2.5 py-1.5 rounded-full"
                        style={{ border: arrowType === key ? `1.5px solid ${t.color}` : '1.5px solid #2c3e5c' }}
                        title={t.label}
                      >
                        <span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                        <span className="text-[10px] font-bold text-[#c7d0e0]" style={{ fontFamily: MONO }}>{t.label}</span>
                      </button>
                    ))}
                  </div>
                )}
              </div>

              <div
                className="w-full flex items-center justify-center rounded-md p-3"
                style={{ background: '#0a1220', border: '1px solid #22314d', maxWidth: 560, boxShadow: '0 20px 60px rgba(0,0,0,0.45)' }}
              >
                {pitchSvg}
              </div>

              <button
                onClick={handleSimulate}
                disabled={!hasRunnable || isSimulating}
                className="flex items-center justify-center gap-2 rounded-sm py-2.5 px-8 text-xs font-bold tracking-wide disabled:opacity-30"
                style={{ fontFamily: MONO, background: '#f4b400', color: '#0a1424' }}
              >
                <Play size={15} /> {isSimulating ? 'SIMULANDO…' : 'SIMULAR JUGADA'}
              </button>

              <div className="flex items-center justify-center gap-4">
                <button
                  onClick={handleUndo}
                  disabled={!canUndo}
                  className={`${utilBtnClass} flex-col gap-1 disabled:opacity-30`}
                  title="Deshacer"
                >
                  <Undo2 size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Deshacer</span>
                </button>
                <button
                  onClick={handleRedo}
                  disabled={!canRedo}
                  className={`${utilBtnClass} flex-col gap-1 disabled:opacity-30`}
                  title="Rehacer"
                >
                  <Redo2 size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Rehacer</span>
                </button>
                <button onClick={handleClearDrawings} className={`${utilBtnClass} flex-col gap-1`} title="Borrar dibujos">
                  <Trash2 size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Borrar</span>
                </button>
                <button onClick={resetPositions} className={`${utilBtnClass} flex-col gap-1`} title="Posición inicial">
                  <RotateCcw size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Reiniciar</span>
                </button>
                <button onClick={flipBoard} className={`${utilBtnClass} flex-col gap-1`} title="Voltear cancha">
                  <ArrowUpDown size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Voltear</span>
                </button>
                <button
                  onClick={() => setShowGhosts((v) => !v)}
                  className={`${utilBtnClass} flex-col gap-1`}
                  style={{ color: showGhosts ? '#8a93b0' : '#44567a' }}
                  title="Huellas"
                >
                  <History size={17} />
                  <span className="text-[9px]" style={{ fontFamily: MONO }}>Huellas</span>
                </button>
              </div>
            </main>

            {/* RIGHT: notes / legend / recent plays */}
            <aside
              className="desk-panel space-y-5 overflow-y-auto pl-1"
              style={{ maxHeight: 'calc(100dvh - 160px)' }}
            >
              <div className="rounded-md p-4" style={{ background: '#111c33', border: '1px solid #22314d' }}>
                <p className="text-[10px] tracking-widest uppercase text-[#8a93b0] mb-3" style={{ fontFamily: MONO }}>
                  Cómo dibujar
                </p>
                <ul className="space-y-2.5">
                  {Object.entries(ARROW_TYPES).map(([key, t]) => (
                    <li key={key} className="flex items-start gap-2">
                      <span className="w-2.5 h-2.5 rounded-full mt-0.5 shrink-0" style={{ background: t.color }} />
                      <span className="text-[11px] text-[#c7d0e0]" style={{ fontFamily: MONO }}>{t.label}</span>
                    </li>
                  ))}
                </ul>
                <p className="text-[10px] text-[#5f6b8a] mt-3 leading-relaxed" style={{ fontFamily: MONO }}>
                  Clic en una esfera para editar su número y nombre. Arrastrá para mover jugadores o la pelota.
                </p>
              </div>

              <div className="rounded-md p-4" style={{ background: '#111c33', border: '1px solid #22314d' }}>
                <div className="flex items-center justify-between mb-3">
                  <p className="text-[10px] tracking-widest uppercase text-[#8a93b0]" style={{ fontFamily: MONO }}>
                    Jugadas guardadas
                  </p>
                  <button onClick={() => setShowLibrary((v) => !v)} className="text-[9px] text-[#f4b400] font-bold" style={{ fontFamily: MONO }}>
                    {showLibrary ? 'Ocultar' : 'Ver todas'}
                  </button>
                </div>
                {savedPlays.length === 0 ? (
                  <p className="text-[10px] text-[#5f6b8a]" style={{ fontFamily: MONO }}>Todavía no guardaste ninguna jugada.</p>
                ) : (
                  <ul className="space-y-2">
                    {savedPlays.slice(0, 5).map((sp) => (
                      <li key={sp.id} className="flex items-center justify-between">
                        <span className="text-[11px] text-[#eef1f8] truncate" style={{ fontFamily: MONO }}>{sp.name}</span>
                        <button
                          onClick={() => handleLoadPlay(sp.id)}
                          disabled={libBusy}
                          className="text-[9px] text-[#c7d0e0] font-bold shrink-0 ml-2 disabled:opacity-30"
                          style={{ fontFamily: MONO }}
                        >
                          Cargar
                        </button>
                      </li>
                    ))}
                  </ul>
                )}
                <div className="flex gap-2 mt-3 pt-3" style={{ borderTop: '1px solid #22314d' }}>
                  <input
                    value={saveName}
                    onChange={(e) => setSaveName(e.target.value)}
                    onKeyDown={(e) => { if (e.key === 'Enter' && saveName.trim() && !libBusy) handleSaveCurrent(); }}
                    placeholder="Nombre de la jugada"
                    className="flex-1 min-w-0 bg-transparent border-b border-[#3a4a6b] px-1 py-1.5 text-[11px] text-[#eef1f8] outline-none"
                    style={{ fontFamily: MONO }}
                  />
                  <button
                    onClick={handleSaveCurrent}
                    disabled={!saveName.trim() || libBusy}
                    className="px-3 rounded-sm text-[11px] font-bold disabled:opacity-30"
                    style={{ background: '#f4b400', color: '#0a1424' }}
                  >
                    Guardar
                  </button>
                </div>
              </div>

              {showLibrary && <div className="pt-1">{libraryModalContent}</div>}
            </aside>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="w-full flex justify-center" style={{ minHeight: '100dvh', background: '#05070f' }}>
      {sharedStyleTag}
      <style>{`
        @keyframes toastPop { from { opacity: 0; transform: translate(-50%, 6px); } to { opacity: 1; transform: translate(-50%, 0); } }
      `}</style>
      {toastEl}
      <div className="w-full max-w-md flex flex-col" style={{ minHeight: '100dvh', background: BOARD_BG }}>
        {updateBannerEl}
        {(isOffline || installPrompt) && (
          <div className="px-4 pt-2 flex items-center gap-2">
            {offlineBadgeEl}
            {installButtonEl}
          </div>
        )}
        <header className="px-4 pt-4 pb-3 flex items-center justify-between">
          <div>
            <h1
              style={{ fontFamily: HAND, fontStyle: 'italic', fontWeight: 700, letterSpacing: '0.02em' }}
              className="text-2xl text-[#eef1f8] leading-none uppercase"
            >
              Pizarra <span style={{ color: '#f4b400' }}>8</span>
            </h1>
            <div className="flex items-center gap-1.5 mt-1">
              <div className="h-[2.5px] w-11" style={{ background: '#f4b400' }} />
              <span className="text-[8px] text-[#5f6b8a] tracking-widest" style={{ fontFamily: MONO }}>V2</span>
            </div>
          </div>
          <div className="flex items-center gap-3.5">
            <button
              onClick={() => setShowShortcuts((v) => !v)}
              className="text-[#8a93b0] hover:text-[#eef1f8] transition-colors"
              aria-label="Mostrar atajos de teclado"
              title="Atajos"
            >
              <Keyboard size={18} />
            </button>
            <button
              onClick={exportImage}
              disabled={exporting}
              className="text-[#8a93b0] hover:text-[#eef1f8] disabled:opacity-40 transition-colors"
              aria-label="Exportar o compartir la pizarra como imagen"
              title="Exportar / compartir imagen"
            >
              {exporting ? <Loader2 size={18} className="animate-spin" /> : <Share2 size={18} />}
            </button>
            <button
              onClick={() => setShowLibrary((v) => !v)}
              className="text-[#8a93b0] hover:text-[#eef1f8] transition-colors"
              aria-label="Mostrar jugadas guardadas"
              title="Jugadas guardadas"
            >
              <Save size={18} />
            </button>
          </div>
        </header>

        <div className="flex-1 min-h-0 flex items-center justify-center px-3">
          {pitchSvg}
        </div>

        <div className="px-3 pb-4 pt-3 space-y-3 shrink-0" style={{ borderTop: '1px solid #22314d' }}>
          {playerEditorModal}
          {!editingPlayer && showShortcuts && shortcutsModal}
          {showLibrary && libraryModalContent}
          <div className="flex items-center gap-3">
            <div className="flex rounded-full overflow-hidden border border-[#2c3e5c] shrink-0">
              <button onClick={() => setMode('move')} className={pillBtnClass(mode === 'move')} aria-label="Modo mover" title="Mover">
                <Move size={15} />
              </button>
              <button onClick={() => setMode('draw')} className={pillBtnClass(mode === 'draw')} aria-label="Modo dibujar" title="Dibujar">
                <Pencil size={15} />
              </button>
            </div>

            {mode === 'draw' && (
              <div className="flex items-center gap-2">
                {Object.entries(ARROW_TYPES).map(([key, t]) => (
                  <button
                    key={key}
                    onClick={() => setArrowType(key)}
                    className="w-6 h-6 rounded-full flex items-center justify-center shrink-0"
                    style={{ border: arrowType === key ? `1.5px solid ${t.color}` : '1.5px solid transparent' }}
                    aria-label={t.label}
                    title={t.label}
                  >
                    <span className="w-2.5 h-2.5 rounded-full" style={{ background: t.color }} />
                  </button>
                ))}
              </div>
            )}
          </div>

          <button
            onClick={handleSimulate}
            disabled={!hasRunnable || isSimulating}
            className="w-full flex items-center justify-center gap-1.5 rounded-sm py-2.5 text-xs font-bold tracking-wide disabled:opacity-30"
            style={{ fontFamily: MONO, background: '#f4b400', color: '#0a1424' }}
          >
            <Play size={15} /> {isSimulating ? 'SIMULANDO…' : 'SIMULAR JUGADA'}
          </button>

          <div className="flex items-center justify-between px-1">
            <button
              onClick={handleUndo}
              disabled={!canUndo}
              className={`${utilBtnClass} disabled:opacity-30`}
              aria-label="Deshacer último cambio"
              title="Deshacer"
            >
              <Undo2 size={16} />
            </button>
            <button
              onClick={handleRedo}
              disabled={!canRedo}
              className={`${utilBtnClass} disabled:opacity-30`}
              aria-label="Rehacer"
              title="Rehacer"
            >
              <Redo2 size={16} />
            </button>
            <button onClick={handleClearDrawings} className={utilBtnClass} aria-label="Borrar dibujos" title="Borrar dibujos">
              <Trash2 size={16} />
            </button>
            <button onClick={resetPositions} className={utilBtnClass} aria-label="Reiniciar posiciones" title="Posición inicial">
              <RotateCcw size={16} />
            </button>
            <button onClick={flipBoard} className={utilBtnClass} aria-label="Voltear la cancha" title="Voltear cancha">
              <ArrowUpDown size={16} />
            </button>
            <button
              onClick={() => setShowGhosts((v) => !v)}
              className={utilBtnClass}
              style={{ color: showGhosts ? '#8a93b0' : '#44567a' }}
              aria-label={showGhosts ? 'Ocultar huellas' : 'Mostrar huellas'}
              title="Huellas"
            >
              <History size={16} />
            </button>
          </div>

          <div className="pt-1" style={{ borderTop: '1px solid #22314d' }}>
            <div className="flex items-center justify-center gap-1 py-2">
              <button
                onClick={() => { setShowA(true); setShowB(false); }}
                className="px-3 py-1 rounded-full text-[10px] font-bold"
                style={{
                  fontFamily: MONO,
                  color: showA && !showB ? '#0a1424' : TEAM_A,
                  background: showA && !showB ? TEAM_A : 'transparent',
                  border: showA && !showB ? 'none' : `1px solid ${TEAM_A}`,
                }}
                aria-label="Mostrar solo el equipo A"
                title="Solo equipo A"
              >
                Solo A
              </button>
              <button
                onClick={() => { setShowA(true); setShowB(true); }}
                className="px-3 py-1 rounded-full text-[10px] font-bold"
                style={{
                  fontFamily: MONO,
                  color: showA && showB ? '#0a1424' : '#8a93b0',
                  background: showA && showB ? CHALK : 'transparent',
                  border: showA && showB ? 'none' : '1px solid #2c3e5c',
                }}
                aria-label="Mostrar ambos equipos"
                title="Ambos equipos"
              >
                Ambos
              </button>
              <button
                onClick={() => { setShowA(false); setShowB(true); }}
                className="px-3 py-1 rounded-full text-[10px] font-bold"
                style={{
                  fontFamily: MONO,
                  color: showB && !showA ? '#0a1424' : TEAM_B,
                  background: showB && !showA ? TEAM_B : 'transparent',
                  border: showB && !showA ? 'none' : `1px solid ${TEAM_B}`,
                }}
                aria-label="Mostrar solo el equipo B"
                title="Solo equipo B"
              >
                Solo B
              </button>
            </div>
            <div style={{ opacity: showA ? 1 : 0.45 }}>
              <TeamCard color={TEAM_A} name={teamNameA} onName={setTeamNameA} value={formA} onChange={handleFormA} />
            </div>
            <div style={{ opacity: showB ? 1 : 0.45 }}>
              <TeamCard color={TEAM_B} name={teamNameB} onName={setTeamNameB} value={formB} onChange={handleFormB} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}


ReactDOM.createRoot(document.getElementById('root')).render(<App />);
