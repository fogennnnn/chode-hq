var __defProp = Object.defineProperty;
var __name = (target, value) => __defProp(target, "name", { value, configurable: true });

// chode-hq-worker.js
var PAGE = `<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<meta name="theme-color" content="#0a0a0a">
<title>chode \u2014 The Self-Healing Coding Harness</title>
<meta name="description" content="chode is the world's most resilient AI coding harness. 33 providers, automatic fallback, production output. Never stops.">
<meta name="robots" content="index,follow">
<meta property="og:type" content="website">
<meta property="og:title" content="chode \u2014 Never stops coding">
<meta property="og:description" content="33 AI providers. Auto-fallback. Production output. The last coding harness you'll ever need.">
<link rel="preconnect" href="https://fonts.googleapis.com">
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500;600;700&display=swap" rel="stylesheet">
<style>
:root{--g:#22dd55;--g2:#3dffa0;--g3:#1aaf44;--bg:#0a0a0a;--surface:rgba(13,26,18,.6);--border:rgba(34,221,85,.12);--border-hover:rgba(34,221,85,.3);--text:#e8f5e9;--text-dim:#a5d6a7;--muted:#5c9e68;--radius:16px;--radius-sm:10px;--fm:'IBM Plex Mono',ui-monospace,SFMono-Regular,Menlo,monospace;}
*,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
html{scroll-behavior:smooth;background:#000}
body{background:#000;color:var(--text);font-family:var(--fm);overflow-x:hidden;-webkit-font-smoothing:antialiased;position:relative;min-height:100vh}

/* \u2500\u2500 Background \u2500\u2500 */
.bg-canvas{position:fixed;inset:0;z-index:0;pointer-events:none;background:#000}
@media(prefers-reduced-motion:reduce){.bg-canvas{display:none}}

/* \u2500\u2500 Layout \u2500\u2500 */
.page{position:relative;z-index:2;max-width:1100px;margin:0 auto;padding:0 24px}
section{padding:100px 0}

/* \u2500\u2500 Header \u2500\u2500 */
.site-header{position:fixed;top:0;left:0;right:0;z-index:100;height:72px;display:flex;align-items:center;justify-content:space-between;padding:0 32px;background:rgba(10,16,10,.6);backdrop-filter:blur(20px);-webkit-backdrop-filter:blur(20px);border-bottom:1px solid var(--border)}
.header-brand{display:flex;align-items:center;gap:12px;text-decoration:none;color:var(--text)}
.header-logo{width:36px;height:36px;border-radius:50%;background:linear-gradient(135deg,var(--g),var(--g3));display:flex;align-items:center;justify-content:center;font-weight:700;font-size:14px;color:#000}
.header-title{font-size:18px;font-weight:600;letter-spacing:-.02em}
.header-nav{display:flex;align-items:center;gap:28px}
.header-nav a{color:var(--muted);text-decoration:none;font-size:13px;font-weight:500;transition:color .2s}
.header-nav a:hover{color:var(--g)}
.header-cta{display:flex;align-items:center;gap:12px}
.btn{display:inline-flex;align-items:center;gap:8px;padding:10px 20px;border-radius:99px;font-size:13px;font-weight:600;text-decoration:none;transition:all .2s;font-family:inherit;cursor:pointer;border:none}
.btn-ghost{background:transparent;color:var(--text-dim);border:1px solid var(--border)}
.btn-ghost:hover{border-color:var(--border-hover);color:var(--text)}
.btn-primary{background:var(--g);color:#000;border:1px solid var(--g)}
.btn-primary:hover{background:var(--g2);transform:translateY(-1px);box-shadow:0 8px 32px rgba(34,221,85,.3)}
.btn-lg{padding:14px 28px;font-size:14px}

/* \u2500\u2500 Hero \u2500\u2500 */
.hero{min-height:100vh;display:flex;flex-direction:column;justify-content:center;padding:120px 0 80px;position:relative}
.hero-badge{display:inline-flex;align-items:center;gap:8px;background:var(--surface);border:1px solid var(--border);border-radius:99px;padding:6px 16px;font-size:12px;color:var(--text-dim);width:fit-content;margin-bottom:32px}
.hero-badge .dot{width:6px;height:6px;border-radius:50%;background:var(--g);animation:pulse 2s infinite}
@keyframes pulse{0%,100%{opacity:1}50%{opacity:.3}}
.hero h1{font-size:clamp(48px,8vw,96px);font-weight:700;line-height:.95;letter-spacing:-.04em;margin-bottom:24px}
.hero h1 .accent{color:var(--g)}
.hero-sub{font-size:clamp(16px,2vw,20px);color:var(--text-dim);line-height:1.6;max-width:600px;margin-bottom:40px}
.hero-actions{display:flex;gap:16px;flex-wrap:wrap;margin-bottom:64px}
.hero-stats{display:flex;gap:48px;flex-wrap:wrap}
.stat{display:flex;flex-direction:column;gap:4px}
.stat-value{font-size:32px;font-weight:700;color:var(--text)}
.stat-label{font-size:12px;color:var(--muted);letter-spacing:.08em;text-transform:uppercase}

/* \u2500\u2500 Terminal \u2500\u2500 */
.terminal{background:rgba(0,0,0,.7);border:1px solid var(--border);border-radius:var(--radius);overflow:hidden;margin:0 auto;max-width:720px}
.terminal-header{display:flex;align-items:center;gap:8px;padding:14px 18px;border-bottom:1px solid var(--border);background:rgba(255,255,255,.02)}
.terminal-dot{width:12px;height:12px;border-radius:50%}
.terminal-dot.red{background:#ff5f57}
.terminal-dot.yellow{background:#febc2e}
.terminal-dot.green{background:#28c840}
.terminal-title{font-size:12px;color:var(--muted);margin-left:8px}
.terminal-body{padding:20px;font-size:14px;line-height:1.8;overflow-x:auto}
.terminal-body .prompt{color:var(--g)}
.terminal-body .cmd{color:var(--text)}
.terminal-body .out{color:var(--muted)}
.terminal-body .success{color:var(--g2)}
.terminal-body .routed{color:#ffd700}

/* \u2500\u2500 Features \u2500\u2500 */
.features-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:20px;margin-top:48px}
.feature-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px;transition:all .3s}
.feature-card:hover{border-color:var(--border-hover);transform:translateY(-2px)}
.feature-icon{width:44px;height:44px;border-radius:var(--radius-sm);background:rgba(34,221,85,.1);border:1px solid rgba(34,221,85,.2);display:flex;align-items:center;justify-content:center;font-size:20px;margin-bottom:16px}
.feature-card h3{font-size:17px;font-weight:600;margin-bottom:8px;color:var(--text)}
.feature-card p{font-size:14px;color:var(--muted);line-height:1.6}

/* \u2500\u2500 Providers \u2500\u2500 */
.providers-section{padding:80px 0}
.providers-header{text-align:center;margin-bottom:48px}
.providers-header h2{font-size:clamp(28px,4vw,42px);font-weight:700;margin-bottom:12px}
.providers-header p{color:var(--muted);font-size:16px}
.providers-grid{display:grid;grid-template-columns:repeat(auto-fit,minmax(140px,1fr));gap:12px;max-width:800px;margin:0 auto}
.provider-chip{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius-sm);padding:12px 16px;font-size:13px;color:var(--text-dim);transition:all .2s;text-align:center}
.provider-chip:hover{border-color:var(--border-hover);color:var(--text)}
.provider-chip .count{font-size:11px;color:var(--muted);margin-top:2px}

/* \u2500\u2500 Install \u2500\u2500 */
.install-section{padding:80px 0}
.install-cards{display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;margin-top:48px}
.install-card{background:var(--surface);border:1px solid var(--border);border-radius:var(--radius);padding:28px}
.install-card h3{font-size:17px;font-weight:600;margin-bottom:12px;color:var(--text)}
.install-card p{font-size:14px;color:var(--muted);margin-bottom:16px;line-height:1.6}
.code-block{background:rgba(0,0,0,.5);border:1px solid var(--border);border-radius:var(--radius-sm);padding:16px;font-size:13px;color:var(--g2);overflow-x:auto;line-height:1.7}
.code-block .copy-btn{float:right;background:none;border:none;color:var(--muted);cursor:pointer;font-size:12px;padding:4px 8px;border-radius:4px;font-family:inherit}
.code-block .copy-btn:hover{color:var(--text);background:rgba(255,255,255,.05)}

/* \u2500\u2500 CTA \u2500\u2500 */
.cta-section{text-align:center;padding:120px 0}
.cta-section h2{font-size:clamp(32px,5vw,56px);font-weight:700;margin-bottom:16px}
.cta-section p{font-size:18px;color:var(--text-dim);margin-bottom:40px;max-width:500px;margin-left:auto;margin-right:auto}

/* \u2500\u2500 Footer \u2500\u2500 */
footer{border-top:1px solid var(--border);padding:40px 0;background:rgba(10,16,10,.5)}
.footer-inner{max-width:1100px;margin:0 auto;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;gap:16px}
.footer-links{display:flex;gap:24px}
.footer-links a{color:var(--muted);text-decoration:none;font-size:13px;transition:color .2s}
.footer-links a:hover{color:var(--g)}
.footer-copy{font-size:12px;color:var(--muted)}

/* \u2500\u2500 Animations \u2500\u2500 */
.reveal{opacity:0;transform:translateY(24px);transition:opacity .7s cubic-bezier(.16,1,.3,1),transform .7s cubic-bezier(.16,1,.3,1)}
.reveal.in{opacity:1;transform:none}
.reveal-delay-1{transition-delay:.1s}
.reveal-delay-2{transition-delay:.2s}
.reveal-delay-3{transition-delay:.3s}

@media(max-width:768px){
  .site-header{padding:0 16px;height:64px}
  .header-nav{display:none}
  .hero{padding:100px 0 60px}
  .hero-stats{gap:24px}
  .footer-inner{flex-direction:column;text-align:center}
  .footer-links{flex-direction:column;gap:12px}
}
</style>
</head>
<body>
<style id="z6-logo-style">
  #logo-wrapper{position:fixed;top:1.2rem;left:1.2rem;width:44px;height:44px;border-radius:50%;overflow:hidden;z-index:9999;box-shadow:0 0 20px rgba(192,132,252,.15);border:1px solid rgba(168,85,247,.25);background:#010102;pointer-events:none}
  canvas#logo{width:100%;height:100%;display:block}
  @media(max-width:768px){#logo-wrapper{width:36px;height:36px;top:.8rem;left:.8rem}}
</style>
<div id="logo-wrapper"><canvas id="logo"></canvas></div>
<script src="/logo.js"><\/script>
<canvas id="space" class="bg-canvas"></canvas>
<script src="/shared-bg-client.js"><\/script>
<div class="page">
<header class="site-header">
  <a href="/" class="header-brand">
    <div class="header-logo">c</div>
    <span class="header-title">chode</span>
  </a>
  <nav class="header-nav">
    <a href="#features">Features</a>
    <a href="#providers">Providers</a>
    <a href="#install">Install</a>
    <a href="https://github.com/fogennnnn/chode" target="_blank">GitHub</a>
  </nav>
  <div class="header-cta">
    <a href="#install" class="btn btn-ghost">Get started</a>
  </div>
</header>

<section class="hero">
  <div class="hero-badge reveal"><span class="dot"></span> 33 providers \xB7 auto-fallback \xB7 zero lock-in</div>
  <h1 class="reveal reveal-delay-1">The coding<br>harness that<br><span class="accent">never stops</span></h1>
  <p class="hero-sub reveal reveal-delay-2">When one AI provider dies, chode is already gone. 33 endpoints. Exponential backoff. Checkpoint recovery. Your session keeps moving.</p>
  <div class="hero-actions reveal reveal-delay-3">
    <a href="#install" class="btn btn-primary btn-lg">Install chode &rarr;</a>
    <a href="https://github.com/fogennnnn/chode" target="_blank" class="btn btn-ghost btn-lg">View on GitHub</a>
  </div>
  <div class="hero-stats reveal reveal-delay-3">
    <div class="stat"><span class="stat-value">33</span><span class="stat-label">Providers</span></div>
    <div class="stat"><span class="stat-value">22</span><span class="stat-label">Free tiers</span></div>
    <div class="stat"><span class="stat-value">5</span><span class="stat-label">Retry attempts</span></div>
    <div class="stat"><span class="stat-value">\u221E</span><span class="stat-label">Uptime</span></div>
  </div>
</section>

<div class="terminal reveal" style="margin:0 24px">
  <div class="terminal-header">
    <span class="terminal-dot red"></span>
    <span class="terminal-dot yellow"></span>
    <span class="terminal-dot green"></span>
    <span class="terminal-title">chode \u2014 terminal</span>
  </div>
  <div class="terminal-body">
    <div><span class="prompt">$</span> <span class="cmd">chode ai "build me a Cloudflare Worker that caches API responses"</span></div>
    <div class="out">&#9733; Probing 33 providers...</div>
    <div class="out">&#9733; OmniRoute Best Free \u2014 score 93, 142ms</div>
    <div class="routed">&#9733; Routed to: OmniRoute Best Free</div>
    <div class="success">\u2713 Generated worker.js (864 bytes)</div>
    <div class="success">\u2713 Scaffolded wrangler.toml</div>
    <div class="out">Run: cd my-worker && npx wrangler dev</div>
  </div>
</div>

<section class="providers-section" id="providers">
  <div class="providers-header">
    <h2 class="reveal">33 AI providers.<br>One command.</h2>
    <p class="reveal">Auto-routes to the best available. Falls back silently when one fails.</p>
  </div>
  <div class="providers-grid reveal">
    <div class="provider-chip">OmniRoute Auto<span class="count">136 models</span></div>
    <div class="provider-chip">DeepSeek Free<span class="count">no key</span></div>
    <div class="provider-chip">OpenRouter Free<span class="count">no key</span></div>
    <div class="provider-chip">HuggingChat<span class="count">no key</span></div>
    <div class="provider-chip">AI Horde<span class="count">no key</span></div>
    <div class="provider-chip">Auggie AI<span class="count">no key</span></div>
    <div class="provider-chip">The Old LLM<span class="count">no key</span></div>
    <div class="provider-chip">OpenCode Free<span class="count">no key</span></div>
    <div class="provider-chip">AgentRouter<span class="count">no key</span></div>
    <div class="provider-chip">Felo AI<span class="count">no key</span></div>
    <div class="provider-chip">DuckDuckGo AI<span class="count">no key</span></div>
    <div class="provider-chip">Claude<span class="count">API key</span></div>
    <div class="provider-chip">GPT-4o mini<span class="count">API key</span></div>
    <div class="provider-chip">Groq<span class="count">API key</span></div>
    <div class="provider-chip">Gemini<span class="count">API key</span></div>
    <div class="provider-chip">Mistral<span class="count">API key</span></div>
    <div class="provider-chip">Perplexity<span class="count">API key</span></div>
    <div class="provider-chip">Cloudflare AI<span class="count">API key</span></div>
    <div class="provider-chip">Cerebras<span class="count">API key</span></div>
    <div class="provider-chip">NVIDIA NIM<span class="count">API key</span></div>
    <div class="provider-chip">Scaleway<span class="count">API key</span></div>
    <div class="provider-chip">Ollama<span class="count">local</span></div>
  </div>
</section>

<section id="features">
  <div class="features-grid">
    <div class="feature-card reveal">
      <div class="feature-icon">&#9889;</div>
      <h3>Never stops</h3>
      <p>5 retries with exponential backoff. When one provider rate-limits, chode switches to the next \u2014 silently. Your session continues as if nothing happened.</p>
    </div>
    <div class="feature-card reveal reveal-delay-1">
      <div class="feature-icon">&#9733;</div>
      <h3>Live intelligence</h3>
      <p>30-second health scans across all providers. Composite scoring weights quality, reliability, speed, and recency. The leaderboard updates continuously.</p>
    </div>
    <div class="feature-card reveal reveal-delay-2">
      <div class="feature-icon">&#9830;</div>
      <h3>Checkpoint recovery</h3>
      <p>Crash your terminal? Run chode with --resume and pick up exactly where you left off. Full message history preserved.</p>
    </div>
    <div class="feature-card reveal reveal-delay-1">
      <div class="feature-icon">&#9776;</div>
      <h3>Scaffold anything</h3>
      <p>One command creates production Cloudflare Workers with secz6 glass layout, boundaries-bg animation, and self-healing AI routing built in.</p>
    </div>
    <div class="feature-card reveal reveal-delay-2">
      <div class="feature-icon">&#9881;</div>
      <h3>OmniRoute gateway</h3>
      <p>136 models through one endpoint. Kiro, Qoder, LongCat, and more \u2014 no individual API keys. Just run omniroute and go.</p>
    </div>
    <div class="feature-card reveal reveal-delay-3">
      <div class="feature-icon">&#9744;</div>
      <h3>Zero lock-in</h3>
      <p>MIT licensed. Works offline with Ollama. No vendor lock-in, no required accounts. Free tiers are the default.</p>
    </div>
  </div>
</section>

<section class="install-section" id="install">
  <div class="providers-header">
    <h2 class="reveal">Get started in 30 seconds</h2>
    <p class="reveal">No accounts. No config. Just code.</p>
  </div>
  <div class="install-cards">
    <div class="install-card reveal">
      <h3>npm global</h3>
      <p>Install once, use anywhere. chode adds itself to your PATH.</p>
      <div class="code-block"><button class="copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.textContent)">copy</button>npm install -g chode</div>
    </div>
    <div class="install-card reveal reveal-delay-1">
      <h3>Start coding</h3>
      <p>Run chode bare for interactive mode, or pass a prompt directly.</p>
      <div class="code-block"><button class="copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.textContent)">copy</button>chode
chode ai "build me a worker"</div>
    </div>
    <div class="install-card reveal reveal-delay-2">
      <h3>From source</h3>
      <p>Clone and run directly. Good for contributing or development.</p>
      <div class="code-block"><button class="copy-btn" onclick="navigator.clipboard.writeText(this.parentElement.textContent)">copy</button>git clone https://github.com/fogennnnn/chode.git
cd chode
node chode.js ai "hello"</div>
    </div>
  </div>
</section>

<section class="cta-section">
  <h2 class="reveal">Ready to build?</h2>
  <p class="reveal">The best coding harness doesn't exist yet. Let's build it together.</p>
  <div class="reveal">
    <a href="https://github.com/fogennnnn/chode" target="_blank" class="btn btn-primary btn-lg">Star on GitHub &rarr;</a>
  </div>
</section>

<footer>
  <div class="footer-inner">
    <div class="footer-links">
      <a href="https://github.com/fogennnnn/chode" target="_blank">GitHub</a>
      <a href="https://github.com/fogennnnn/chode#readme">Docs</a>
      <a href="https://github.com/fogennnnn/hemo-skills">Skills</a>
      <a href="mailto:inf@oooooooooo.se">Contact</a>
    </div>
    <span class="footer-copy">chode &middot; MIT &middot; 2026</span>
  </div>
</footer>
</div>
<script>
const io=new IntersectionObserver(function(es){es.forEach(function(e){if(e.isIntersecting){e.target.classList.add('in');io.unobserve(e.target)}})},{threshold:0.1});
document.querySelectorAll('.reveal').forEach(function(el){io.observe(el)});
addEventListener('DOMContentLoaded',function(){
  var w=document.getElementById('logo-wrapper');
  var s=document.querySelector('.hero h1 .accent');
  if(w&&s&&w.parentElement!==s){s.style.position='relative';var span=document.createElement('span');span.style.cssText='position:absolute;top:50%;left:50%;transform:translate(-50%,-50%);width:.8em;height:.8em;z-index:0';span.appendChild(w);s.appendChild(span)}
});
<\/script>
</body>
</html>`;
var CLIENT_JS = `(function () {
  const canvas = document.getElementById("space");
  if (!canvas) return;

  const ctx = canvas.getContext("2d", { alpha: true, desynchronized: true });
  if (!ctx) return;

  const query = new URLSearchParams(window.location.search);
  const configuredRadius = Number(query.get("radius"));
  const reducedMotion = Boolean(window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches);
  const CELL_SIZE = 12;
  const NORMAL_COLOR = "#27ff8e";
  const SPECIAL_COLORS = ["#ff4fd8", "#b56cff", "#55b8ff"];
  const DEFAULT_SANCTUARY_RADIUS = 38;

  let width = 1;
  let height = 1;
  let dpr = 1;
  let cols = 1;
  let rows = 1;
  let generation = 0;
  let visualTime = 0;
  let currentAliveIndices = [];
  let tentacleCells = [];
  let sanctuaryRadius = Number.isFinite(configuredRadius) && configuredRadius > 0
    ? Math.max(18, Math.min(80, configuredRadius))
    : DEFAULT_SANCTUARY_RADIUS;

  let ws = null;
  let reconnectAttempts = 0;
  const MAX_RECONNECT_ATTEMPTS = 10;
  const RECONNECT_DELAY = 2000;

  function clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  function sanctuary() {
    return {
      x: width * 0.5,
      y: height * 0.5,
      radius: sanctuaryRadius
    };
  }

  function draw() {
    ctx.clearRect(0, 0, width, height);
    const area = sanctuary();

    const glow = ctx.createRadialGradient(
      area.x, area.y, area.radius * 0.2,
      area.x, area.y, area.radius * 2.4
    );
    glow.addColorStop(0, "rgba(255, 79, 216, 0.08)");
    glow.addColorStop(0.42, "rgba(181, 108, 255, 0.05)");
    glow.addColorStop(1, "rgba(0, 0, 0, 0)");
    ctx.fillStyle = glow;
    ctx.beginPath();
    ctx.arc(area.x, area.y, area.radius * 2.4, 0, Math.PI * 2);
    ctx.fill();

    ctx.strokeStyle = "rgba(181, 108, 255, 0.14)";
    ctx.lineWidth = 1;
    ctx.setLineDash([2, 5]);
    ctx.beginPath();
    ctx.arc(area.x, area.y, area.radius + 1, 0, Math.PI * 2);
    ctx.stroke();
    ctx.setLineDash([]);

    const inset = Math.max(1, Math.floor(CELL_SIZE * 0.16));
    const size = CELL_SIZE - inset * 2;
    ctx.fillStyle = NORMAL_COLOR;
    ctx.globalAlpha = 0.7;
    for (const index of currentAliveIndices) {
      const x = (index % cols) * CELL_SIZE + inset;
      const y = Math.floor(index / cols) * CELL_SIZE + inset;
      ctx.fillRect(x, y, size, size);
    }
    ctx.globalAlpha = 1;

    for (let i = 0; i < tentacleCells.length; i += 1) {
      const cell = tentacleCells[i];
      const color = SPECIAL_COLORS[cell.color % SPECIAL_COLORS.length];
      ctx.fillStyle = color;
      ctx.fillRect(cell.col * CELL_SIZE, cell.row * CELL_SIZE, size, size);
      if (cell.thick >= 2) {
        if (cell.col + 1 < cols) ctx.fillRect((cell.col + 1) * CELL_SIZE, cell.row * CELL_SIZE, size, size);
        if (cell.row + 1 < rows) ctx.fillRect(cell.col * CELL_SIZE, (cell.row + 1) * CELL_SIZE, size, size);
      }
      if (cell.thick === 3) {
        if (cell.col + 1 < cols && cell.row + 1 < rows) {
          ctx.fillRect((cell.col + 1) * CELL_SIZE, (cell.row + 1) * CELL_SIZE, size, size);
        }
      }
    }
  }

  function applyState(state) {
    width = state.width;
    height = state.height;
    dpr = state.dpr;
    cols = state.cols;
    rows = state.rows;
    generation = state.generation;
    visualTime = state.visualTime;
    sanctuaryRadius = state.sanctuary?.radius || DEFAULT_SANCTUARY_RADIUS;

    const rect = canvas.getBoundingClientRect();
    const cssWidth = rect.width;
    const cssHeight = rect.height;

    canvas.width = Math.round(cssWidth * dpr);
    canvas.height = Math.round(cssHeight * dpr);
    canvas.style.width = cssWidth + "px";
    canvas.style.height = cssHeight + "px";

    const oSlot = document.querySelector('.hero h1 .accent');
    let targetX = cssWidth / 2;
    let targetY = cssHeight * 0.4;
    if (oSlot) {
      const oRect = oSlot.getBoundingClientRect();
      targetX = oRect.left + oRect.width / 2 - rect.left;
      targetY = oRect.top + oRect.height / 2 - rect.top;
    }

    const sanctuary = state.sanctuary || { x: width / 2, y: height / 2, radius: sanctuaryRadius };
    const scaleX = cssWidth / width;
    const scaleY = cssHeight / height;
    const scale = Math.min(scaleX, scaleY);

    ctx.setTransform(scale * dpr, 0, 0, scale * dpr,
      targetX - sanctuary.x * scale, targetY - sanctuary.y * scale);

    currentAliveIndices = state.aliveIndices || [];
    tentacleCells = state.tentacleCells || [];
    draw();
  }

  function connect() {
    const wsUrl = 'wss://shared-bg-v2.fogeboro.workers.dev/websocket';
    ws = new WebSocket(wsUrl);

    ws.onopen = () => {
      reconnectAttempts = 0;
      sendResize();
    };

    ws.onmessage = (event) => {
      try {
        const state = JSON.parse(event.data);
        if (state.type === 'init' || state.type === 'state' || state.type === 'resize_ack') {
          applyState(state);
        }
      } catch (e) {
      }
    };

    ws.onclose = () => {
      if (reconnectAttempts < MAX_RECONNECT_ATTEMPTS) {
        reconnectAttempts++;
        setTimeout(connect, RECONNECT_DELAY * Math.min(reconnectAttempts, 5));
      }
    };

    ws.onerror = () => {
    };
  }

  function sendResize() {
    if (ws && ws.readyState === WebSocket.OPEN) {
      const rect = canvas.getBoundingClientRect();
      ws.send(JSON.stringify({
        type: 'resize',
        width: Math.max(1, rect.width),
        height: Math.max(1, rect.height),
        dpr: Math.min(window.devicePixelRatio || 1, 2.5)
      }));
    }
  }

  let resizeFrame = 0;
  function onResize() {
    if (resizeFrame) cancelAnimationFrame(resizeFrame);
    resizeFrame = requestAnimationFrame(() => {
      resizeFrame = 0;
      sendResize();
    });
  }

  connect();
  addEventListener("resize", onResize, { passive: true });
  document.addEventListener("visibilitychange", () => {
    if (!document.hidden) sendResize();
  });
})();`;
function json(o, s) {
  return new Response(JSON.stringify(o), { status: s || 200, headers: { "content-type": "application/json; charset=utf-8", "access-control-allow-origin": "*" } });
}
__name(json, "json");
var chode_hq_worker_default = {
  async fetch(request) {
    const url = new URL(request.url);
    const p = url.pathname;
    if (p === "/shared-bg-client.js") return new Response(CLIENT_JS, { headers: { "content-type": "application/javascript; charset=utf-8", "cache-control": "public, max-age=3600" } });
    if (p === "/" || p === "/index.html") return new Response(PAGE, { headers: { "content-type": "text/html; charset=utf-8" } });
    if (p === "/api/status") return json({ ok: true, service: "chode-hq", ts: Date.now(), providers: 33 });
    return json({ ok: false, error: "not found" }, 404);
  }
};
export {
  chode_hq_worker_default as default
};
//# sourceMappingURL=chode-hq-worker.js.map