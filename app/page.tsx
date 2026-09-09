"use client";
import { useEffect, useState } from "react";

const Icon = ({ children, size = 18, stroke = 1.6, ...rest }: any) => (
  <svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth={stroke} strokeLinecap="round" strokeLinejoin="round" {...rest}>{children}</svg>
);
const IconGitHub = (p: any) => (
  <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="currentColor" {...p}>
    <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.39 7.86 10.91.58.1.79-.25.79-.56v-1.96c-3.2.7-3.87-1.54-3.87-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.19 1.77 1.19 1.03 1.77 2.7 1.26 3.36.96.1-.75.4-1.26.73-1.55-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.18-3.09-.12-.29-.51-1.47.11-3.05 0 0 .97-.31 3.17 1.18a11 11 0 0 1 5.78 0c2.2-1.49 3.16-1.18 3.16-1.18.63 1.58.24 2.76.12 3.05.73.8 1.18 1.83 1.18 3.09 0 4.43-2.69 5.41-5.26 5.69.41.36.78 1.06.78 2.15v3.18c0 .31.21.67.8.55C20.22 21.38 23.5 17.07 23.5 12 23.5 5.65 18.35.5 12 .5Z"/>
  </svg>
);
const IconTwitter = (p: any) => (
  <svg viewBox="0 0 24 24" width={p.size||18} height={p.size||18} fill="currentColor" {...p}>
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24h-6.66l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231 5.45-6.231Zm-1.161 17.52h1.833L7.084 4.126H5.117l11.966 15.644Z"/>
  </svg>
);
const IconArrowUpRight = ({ size = 16 }: any) => (<Icon size={size}><path d="M7 17 17 7" /><path d="M8 7h9v9" /></Icon>);
const IconArrowRight = ({ size = 16 }: any) => (<Icon size={size}><path d="M5 12h14" /><path d="m13 6 6 6-6 6" /></Icon>);
const IconCopy = ({ size = 14 }: any) => (<Icon size={size}><rect x="9" y="9" width="11" height="11" rx="2"/><rect x="4" y="4" width="11" height="11" rx="2"/></Icon>);
const IconCheck = ({ size = 14 }: any) => (<Icon size={size}><path d="M5 12l4 4 10-10"/></Icon>);
const IconSpark = ({ size = 18 }: any) => (<Icon size={size}><path d="M12 3v4M12 17v4M3 12h4M17 12h4M5.6 5.6l2.8 2.8M15.6 15.6l2.8 2.8M5.6 18.4l2.8-2.8M15.6 8.4l2.8-2.8"/></Icon>);
const IconBolt = ({ size = 18 }: any) => (<Icon size={size}><path d="M13 2 4 14h7l-1 8 9-12h-7l1-8Z"/></Icon>);
const IconInfinity = ({ size = 18 }: any) => (<Icon size={size}><path d="M6 12c0-2.5 2-4.5 4.5-4.5S15 9.5 17 12s2.5 4.5 4.5 4.5S26 14.5 26 12 24 7.5 21.5 7.5 17 9.5 15 12s-2.5 4.5-4.5 4.5S6 14.5 6 12Z" transform="translate(-3 0)"/></Icon>);
const BrandNext = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none"><circle cx="12" cy="12" r="10.5" stroke="currentColor" strokeWidth="1.2" /><path d="M9 7v10M9 7l8 10" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M15.5 7v4.5" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>);
const BrandReact = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="1.6" fill="currentColor" stroke="none" /><ellipse cx="12" cy="12" rx="10" ry="4" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(60 12 12)" /><ellipse cx="12" cy="12" rx="10" ry="4" transform="rotate(120 12 12)" /></svg>);
const BrandPython = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round"><path d="M8 4h6c1.5 0 2.5 1 2.5 2.5V11H7.5c-1.5 0-2.5 1-2.5 2.5v3c0 1.5 1 2.5 2.5 2.5H10" /><path d="M16 5v6h-6"/><circle cx="10" cy="7" r="0.7" fill="currentColor" stroke="none"/><path d="M16 20h-6c-1.5 0-2.5-1-2.5-2.5V13h9c1.5 0 2.5-1 2.5-2.5v-3"/><circle cx="14" cy="17" r="0.7" fill="currentColor" stroke="none"/></svg>);
const BrandJS = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none"><rect x="2" y="2" width="20" height="20" rx="3" stroke="currentColor" strokeWidth="1.2"/><path d="M10 9v6.5c0 1-.5 1.7-1.7 1.7-.9 0-1.5-.4-1.8-1.2" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/><path d="M17.5 10c-.4-.8-1.2-1.2-2.2-1.2-1.4 0-2.3.8-2.3 1.9 0 2.6 4.8 1.7 4.8 4.3 0 1.2-1 2.2-2.7 2.2-1.3 0-2.3-.5-2.8-1.4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round"/></svg>);
const BrandTailwind = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" strokeLinecap="round"><path d="M7 11c1-3 3-4 6-3 1.5.5 2 1.5 3.5 2 1 .3 1.8.2 2.5-.5-1 3-3 4-6 3-1.5-.5-2-1.5-3.5-2-1-.3-1.8-.2-2.5.5Z"/><path d="M3 17c1-3 3-4 6-3 1.5.5 2 1.5 3.5 2 1 .3 1.8.2 2.5-.5-1 3-3 4-6 3-1.5-.5-2-1.5-3.5-2-1-.3-1.8-.2-2.5.5Z"/></svg>);
const BrandVercel = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor"><path d="M12 4 22 20H2L12 4Z" /></svg>);
const BrandSupabase = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round"><path d="M12 3v9h7L12 21v-9H5L12 3Z" /></svg>);
const BrandClaude = ({ size = 22 }: any) => (<svg viewBox="0 0 24 24" width={size} height={size} fill="none" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round"><path d="M7 17 10.5 7h3L17 17"/><path d="M8.5 13.5h7"/><circle cx="12" cy="12" r="10.2" /></svg>);

function TypedHeadline() {
  const phrases = ["Software Engineer", "Founder", "AI Builder", "Shipper"];
  const [i, setI] = useState(0);
  const [text, setText] = useState("");
  const [phase, setPhase] = useState("typing");
  useEffect(() => {
    const target = phrases[i];
    let t: ReturnType<typeof setTimeout>;
    if (phase === "typing") {
      if (text.length < target.length) t = setTimeout(() => setText(target.slice(0, text.length + 1)), 70);
      else t = setTimeout(() => setPhase("hold"), 1600);
    } else if (phase === "hold") {
      t = setTimeout(() => setPhase("deleting"), 600);
    } else {
      if (text.length > 0) t = setTimeout(() => setText(text.slice(0, -1)), 35);
      else { setI((i + 1) % phrases.length); setPhase("typing"); }
    }
    return () => clearTimeout(t);
  }, [text, phase, i]);
  return <span>{"I'm a "}<span style={{color:"var(--crimson-500)"}}>{text}</span><span style={{display:"inline-block",width:"0.55ch",background:"currentColor",marginLeft:4,height:"0.92em",transform:"translateY(0.1em)",animation:"blink 1.05s steps(1) infinite"}} /></span>;
}

function Monogram({ size = 48, glow = false, stroke = 1.6 }: any) {
  return (
    <svg viewBox="0 0 64 64" width={size} height={size} style={{filter:glow?"drop-shadow(0 0 32px rgba(220,38,38,0.7))":"none"}}>
      <defs><linearGradient id="ec-grad" x1="0" y1="0" x2="1" y2="1"><stop offset="0%" stopColor="#fecaca"/><stop offset="55%" stopColor="#ef4444"/><stop offset="100%" stopColor="#7f1d1d"/></linearGradient></defs>
      <path d="M8 14 H28 M8 14 V50 M8 32 H24 M8 50 H28" fill="none" stroke={glow?"url(#ec-grad)":"currentColor"} strokeWidth={stroke*2} strokeLinecap="square" strokeLinejoin="miter"/>
      <path d="M56 16 A18 18 0 1 0 56 48" fill="none" stroke={glow?"url(#ec-grad)":"currentColor"} strokeWidth={stroke*2} strokeLinecap="square"/>
    </svg>
  );
}

function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const fn = () => setScrolled(window.scrollY > 16);
    fn(); window.addEventListener("scroll", fn, {passive:true});
    return () => window.removeEventListener("scroll", fn);
  }, []);
  const navLinkStyle: any = {fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.08em",padding:"8px 14px",borderRadius:999,color:"var(--bone-dim)",transition:"color .2s, background .25s",textDecoration:"none"};
  return (
    <header style={{position:"fixed",top:0,left:0,right:0,zIndex:50,padding:scrolled?"12px 0":"20px 0",background:scrolled?"rgba(5,5,5,0.65)":"transparent",backdropFilter:scrolled?"blur(18px)":"none",borderBottom:scrolled?"1px solid rgba(255,255,255,0.06)":"1px solid transparent",transition:"all .35s ease"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px",display:"flex",alignItems:"center",justifyContent:"space-between"}}>
        <a href="#top" style={{display:"flex",alignItems:"center",gap:10,color:"var(--crimson-500)",textDecoration:"none"}}>
          <Monogram size={34}/><span style={{fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.2em",color:"var(--bone-mute)"}}>ERAY · CANDAN</span>
        </a>
        <nav style={{display:"flex",alignItems:"center",gap:6}}>
          {[{label:"about",href:"#about"},{label:"building",href:"#building"},{label:"stack",href:"#stack"},{label:"github",href:"https://github.com/Eray-Candan",ext:true}].map((l:any)=>(
            <a key={l.label} href={l.href} target={l.ext?"_blank":undefined} rel={l.ext?"noopener noreferrer":undefined} style={navLinkStyle}
              onMouseEnter={(e:any)=>{e.currentTarget.style.color="var(--bone)";e.currentTarget.style.background="rgba(255,255,255,0.04)";}}
              onMouseLeave={(e:any)=>{e.currentTarget.style.color="var(--bone-dim)";e.currentTarget.style.background="transparent";}}>
              {l.label}{l.ext&&<span style={{opacity:0.6,marginLeft:6}}>↗</span>}
            </a>
          ))}
          <a href="mailto:eraycandan@aevislab.com" style={{display:"inline-flex",alignItems:"center",gap:8,padding:"9px 16px",borderRadius:999,fontFamily:"var(--sans)",fontWeight:500,fontSize:12,background:"var(--bone)",color:"var(--crimson-ink)",textDecoration:"none",marginLeft:8}}>
            get in touch <IconArrowUpRight size={14}/>
          </a>
        </nav>
      </div>
    </header>
  );
}

function Hero() {
  return (
    <section id="top" style={{position:"relative",minHeight:"100vh",paddingTop:120,paddingBottom:80,overflow:"hidden",background:"radial-gradient(ellipse 80% 60% at 50% 0%, #7f1d1d 0%, #4a0e0e 35%, #1a0404 70%, #050505 100%)",color:"var(--bone)"}}>
      <div style={{position:"absolute",inset:0,pointerEvents:"none",background:"radial-gradient(ellipse 50% 40% at 80% 30%, rgba(239,68,68,0.25), transparent 60%)"}}/>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:2}}>
        <div style={{display:"flex",alignItems:"center",justifyContent:"center",gap:14,marginBottom:36}}>
          <span style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.28em",color:"rgba(254,202,202,0.85)",padding:"8px 14px",border:"1px solid rgba(254,202,202,0.3)",borderRadius:999,background:"rgba(0,0,0,0.2)",backdropFilter:"blur(8px)"}}>SOFTWARE ENGINEER &nbsp;·&nbsp; FOUNDER</span>
        </div>
        <h1 style={{margin:0,fontFamily:"var(--sans)",fontWeight:700,letterSpacing:"-0.045em",lineHeight:0.86,fontSize:"clamp(64px, 14vw, 220px)",textAlign:"center",color:"var(--bone)"}}>
          ERAY <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:400,color:"rgba(254,202,202,0.85)"}}>·</span> CANDAN
        </h1>
        <div style={{textAlign:"center",marginTop:36,fontSize:"clamp(22px, 2.6vw, 34px)",fontWeight:500,letterSpacing:"-0.02em",color:"var(--bone)"}}><TypedHeadline/></div>
        <p style={{maxWidth:680,margin:"28px auto 0",textAlign:"center",fontSize:18,lineHeight:1.55,color:"rgba(245,241,232,0.78)"}}>
          I build software at the intersection of <span style={{color:"var(--bone)"}}>AI</span> and product.{" "}
          <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:22,color:"var(--bone)"}}>Not to experiment</span>{" — "}
          <span style={{color:"var(--bone)"}}>to ship.</span>
        </p>
        <div style={{display:"flex",justifyContent:"center",gap:28,flexWrap:"wrap",marginTop:22,fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.16em",color:"rgba(254,202,202,0.7)",textTransform:"uppercase"}}>
          <span>20 Y/O</span><span style={{opacity:0.4}}>·</span><span>SOFTWARE ENGINEERING</span><span style={{opacity:0.4}}>·</span><span>TURKIYE</span>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:12,marginTop:38,flexWrap:"wrap"}}>
          {[{label:"GitHub",href:"https://github.com/Eray-Candan",icon:<IconGitHub size={16}/>,primary:true},{label:"Twitter / X",href:"https://twitter.com/Erayec_",icon:<IconTwitter size={14}/>,primary:false},{label:"See what I'm building",href:"#building",icon:<IconArrowRight size={14}/>,primary:false}].map((b:any)=>(
            <a key={b.label} href={b.href} target={b.href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
              style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 22px",borderRadius:999,fontFamily:"var(--sans)",fontWeight:500,fontSize:14,background:b.primary?"var(--bone)":"transparent",color:b.primary?"var(--crimson-ink)":"var(--bone)",border:b.primary?"1px solid var(--bone)":"1px solid rgba(245,241,232,0.25)",textDecoration:"none",transition:"transform .2s"}}>
              {b.icon} {b.label}
            </a>
          ))}
        </div>
        <div style={{marginTop:72}}>
          <div style={{textAlign:"center",fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.32em",color:"rgba(254,202,202,0.55)",marginBottom:18}}>{"── BUILT WITH ──"}</div>
          <div style={{display:"flex",justifyContent:"center",gap:10,flexWrap:"wrap"}}>
            {["Next.js","React","Tailwind","Vercel"].map((t)=>(
              <span key={t} style={{padding:"8px 14px",borderRadius:999,fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.04em",color:"rgba(245,241,232,0.9)",background:"rgba(0,0,0,0.35)",border:"1px solid rgba(254,202,202,0.18)"}}>{t}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function About() {
  return (
    <section id="about" style={{background:"var(--ink-1)",padding:"140px 0 120px",borderTop:"1px solid var(--ink-line)"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px"}}>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",flexWrap:"wrap",gap:24,marginBottom:56}}>
          <div>
            <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase" as const,color:"var(--crimson-500)",display:"inline-flex",alignItems:"center",gap:10}}><span style={{width:22,height:1,background:"var(--crimson-500)",display:"inline-block"}}/>01 / About</div>
            <h2 style={{margin:"16px 0 0",fontFamily:"var(--sans)",fontWeight:600,fontSize:"clamp(40px, 5vw, 72px)",letterSpacing:"-0.03em",lineHeight:1,color:"var(--bone)"}}>Who <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:400}}>I am</span></h2>
          </div>
          <div style={{maxWidth:280,fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.06em",color:"var(--bone-deep)",lineHeight:1.7,textAlign:"right" as const}}>ERAYCANDAN.DEV<br/>EST. 2005 — TURKIYE<br/>CURRENTLY: BUILDING</div>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1fr 1fr",gap:60,marginBottom:80}}>
          {[{tag:"ORIGIN",text:["I started writing code around ","age 15",". These days most of what I build happens together with AI tools like Claude — ","not instead of learning, but as how I learn."," I don't come from a bootcamp or a big tech background, just curiosity and a habit of finishing what I start."],special:1,specialStyle:{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:24,color:"var(--bone)"}},{tag:"TODAY",text:["Right now I'm in my ","foundation phase"," — a software engineering student building real projects on the side and figuring out what's worth building next. ","I'd rather ship something small and real than plan something big and imaginary."],special:1,specialStyle:{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:24,color:"var(--crimson-400)"}}].map((col:any,idx)=>(
            <div key={idx}>
              <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.2em",color:"var(--crimson-500)",marginBottom:18}}>{"↳ "+col.tag}</div>
              <p style={{fontSize:19,lineHeight:1.65,color:"var(--bone)",margin:0}}>
                {col.text[0]}<span style={idx===0?{borderBottom:"1px solid var(--crimson-600)",paddingBottom:1}:{}}>{col.text[1]}</span>{col.text[2]}<span style={col.specialStyle}>{col.text[3]}</span>{col.text[4]&&<span style={{color:"var(--bone-mute)"}}>{" "+col.text[4]}</span>}
              </p>
            </div>
          ))}
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:16}}>
          {[{big:"5+",suffix:"years",label:"since I started coding",note:"Started age 15, increasingly AI-assisted since."},{big:"20",suffix:"y/o",label:"software engineering student",note:"Building on the side while I study."},{big:"Day 1",suffix:"",label:"of something bigger",note:"The compounding has just begun."}].map((s,idx)=>(
            <div key={idx} style={{padding:32,borderRadius:18,position:"relative",overflow:"hidden",background:"linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",border:"1px solid rgba(255,255,255,0.07)"}}>
              <div style={{position:"absolute",top:16,right:16,fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.16em",color:"var(--bone-deep)"}}>0{idx+1}</div>
              <div style={{display:"flex",alignItems:"baseline",gap:8,marginBottom:14}}>
                <span style={{fontFamily:"var(--sans)",fontWeight:600,fontSize:64,lineHeight:1,letterSpacing:"-0.04em",color:"var(--bone)"}}>{s.big}</span>
                {s.suffix&&<span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:28,color:"var(--crimson-500)"}}>{s.suffix}</span>}
              </div>
              <div style={{fontSize:14,color:"var(--bone)",marginBottom:6,fontWeight:500}}>{s.label}</div>
              <div style={{fontSize:12,color:"var(--bone-deep)",lineHeight:1.5}}>{s.note}</div>
              <div style={{position:"absolute",left:0,bottom:0,height:2,width:"30%",background:"linear-gradient(to right, var(--crimson-600), transparent)"}}/>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function AevisLab() {
  return (
    <section id="building" style={{background:"var(--ink-0)",padding:"140px 0 120px",position:"relative",overflow:"hidden",borderTop:"1px solid var(--ink-line)"}}>
      <div style={{position:"absolute",top:"-20%",right:"-10%",width:720,height:720,background:"radial-gradient(circle, rgba(127,29,29,0.5), transparent 60%)",filter:"blur(60px)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",bottom:"-30%",left:"-15%",width:700,height:700,background:"radial-gradient(circle, rgba(220,38,38,0.18), transparent 60%)",filter:"blur(60px)",pointerEvents:"none"}}/>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:2}}>
        <div style={{marginBottom:80}}>
          <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase" as const,color:"var(--crimson-500)",display:"inline-flex",alignItems:"center",gap:10}}><span style={{width:22,height:1,background:"var(--crimson-500)",display:"inline-block"}}/>02 / The Studio</div>
          <h2 style={{margin:"16px 0 0",fontFamily:"var(--sans)",fontWeight:600,fontSize:"clamp(56px, 8vw, 132px)",letterSpacing:"-0.04em",lineHeight:0.9,color:"var(--bone)"}}>
            Building{" "}<span style={{background:"linear-gradient(90deg, #fecaca, #ef4444 50%, #7f1d1d)",WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent",backgroundClip:"text"}}>AevisLab</span>
            <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:"0.5em",color:"var(--crimson-500)",marginLeft:12}}>↗</span>
          </h2>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"1.1fr 1fr",gap:64,alignItems:"start"}}>
          <div>
            <div style={{fontSize:26,lineHeight:1.4,color:"var(--bone)",letterSpacing:"-0.015em"}}>
              {"AevisLab is the software studio I'm building from the "}<span style={{color:"var(--crimson-400)"}}>ground up</span>.{" The vision is simple: "}
              <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontSize:32,color:"var(--bone)"}}>build AI-native products</span>{" that actually solve problems."}
            </div>
            <div style={{marginTop:28,fontSize:18,lineHeight:1.6,color:"var(--bone-mute)"}}>{"Still early — no big user base yet. "}<span style={{color:"var(--bone)"}}>Built to solve real problems, not just to demo.</span></div>
            <div style={{marginTop:36,padding:"24px 28px",borderLeft:"2px solid var(--crimson-600)",background:"linear-gradient(90deg, rgba(127,29,29,0.18), transparent)",fontSize:18,lineHeight:1.6,color:"var(--bone-dim)",fontFamily:"var(--serif)",fontStyle:"italic"}}>
              {'"We\'re in early days. But early days are exactly when the foundation matters most."'}
            </div>
            <div style={{marginTop:40}}>
              <a href="https://aevislab.com" target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 22px",borderRadius:999,fontFamily:"var(--sans)",fontWeight:500,fontSize:14,background:"var(--bone)",color:"var(--crimson-ink)",textDecoration:"none"}}>
                Visit aevislab.com <IconArrowUpRight size={14}/>
              </a>
            </div>
          </div>
          <div style={{display:"flex",flexDirection:"column",gap:14}}>
            {[{num:"I",title:"AI-Native",icon:<IconSpark/>,body:"AI is central to how I build, not bolted on after the fact."},{num:"II",title:"Ship First",icon:<IconBolt/>,body:"I'd rather build a small working version than plan a perfect one."},{num:"III",title:"Long Game",icon:<IconInfinity/>,body:"It's not a finished company yet — it's the thing I keep coming back to."}].map((c:any,idx)=>(
              <div key={idx} style={{padding:24,borderRadius:16,display:"grid",gridTemplateColumns:"auto 1fr",gap:20,alignItems:"start",background:"linear-gradient(180deg, rgba(220,38,38,0.07), rgba(127,29,29,0.03))",border:"1px solid rgba(220,38,38,0.18)"}}>
                <div style={{width:52,height:52,borderRadius:14,background:"linear-gradient(135deg, rgba(220,38,38,0.35), rgba(127,29,29,0.15))",border:"1px solid rgba(220,38,38,0.4)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--crimson-200)",position:"relative"}}>
                  {c.icon}<span style={{position:"absolute",bottom:-8,right:-8,fontFamily:"var(--serif)",fontStyle:"italic",fontSize:18,color:"var(--crimson-400)",background:"var(--ink-0)",padding:"0 6px"}}>{c.num}</span>
                </div>
                <div><div style={{fontSize:20,fontWeight:600,color:"var(--bone)",marginBottom:8}}>{c.title}</div><div style={{fontSize:15,lineHeight:1.55,color:"var(--bone-mute)"}}>{c.body}</div></div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function MonoDivider() {
  return (
    <section style={{position:"relative",padding:"80px 0 120px",background:"var(--ink-0)",overflow:"hidden"}}>
      <div style={{position:"absolute",inset:0,background:"radial-gradient(circle at 50% 50%, rgba(127,29,29,0.4), transparent 50%)",pointerEvents:"none"}}/>
      <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:560,height:560,borderRadius:"999px",border:"1px solid rgba(220,38,38,0.18)",pointerEvents:"none",animation:"spin-slow 60s linear infinite"}}>
        <div style={{position:"absolute",top:"-4px",left:"50%",width:8,height:8,background:"var(--crimson-500)",borderRadius:"50%",boxShadow:"0 0 16px var(--crimson-500)"}}/>
      </div>
      <div style={{position:"absolute",left:"50%",top:"50%",transform:"translate(-50%,-50%)",width:320,height:320,borderRadius:"999px",border:"1px dashed rgba(220,38,38,0.25)",pointerEvents:"none",animation:"spin-slow 40s linear infinite reverse"}}/>
      <div style={{display:"flex",justifyContent:"center",position:"relative",zIndex:2,animation:"flicker 4s ease-in-out infinite"}}><Monogram size={180} glow stroke={2}/></div>
      <div style={{textAlign:"center",marginTop:38,fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.4em",color:"rgba(254,202,202,0.55)"}}>{"── BUILT IN PUBLIC ──"}</div>
    </section>
  );
}

function StatusBadge({ status }: any) {
  const map: any = {"live":{color:"#22c55e",label:"LIVE",glow:true},"shipped":{color:"#a8a29e",label:"SHIPPED",glow:false},"open-to-work":{color:"#22c55e",label:"OPEN TO WORK",glow:true},"early":{color:"#f59e0b",label:"EARLY STAGE",glow:false}};
  const s = map[status]||map.shipped;
  return <div style={{display:"inline-flex",alignItems:"center",gap:8,fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.2em",color:s.color,padding:"5px 10px",border:`1px solid ${s.color}40`,borderRadius:999,background:`${s.color}10`}}><span style={{width:6,height:6,borderRadius:999,background:s.color,display:"inline-block",boxShadow:s.glow?`0 0 8px ${s.color}`:"none"}}/>{s.label}</div>;
}

function ProjectRow({ tag, title, lede, meta, desc, stack, status, accent, href }: any) {
  const [hover, setHover] = useState(false);
  return (
    <a href={href} target={href.startsWith("http")?"_blank":undefined} rel="noopener noreferrer"
      onMouseEnter={()=>setHover(true)} onMouseLeave={()=>setHover(false)}
      style={{display:"grid",gridTemplateColumns:"180px 1fr auto",gap:32,padding:"32px 28px",borderRadius:18,background:hover?"rgba(255,255,255,0.025)":"rgba(255,255,255,0.012)",border:`${accent?2:1}px solid`,borderColor:accent?"var(--crimson-600)":"rgba(255,255,255,0.07)",borderTopColor:accent?"var(--crimson-600)":"rgba(255,255,255,0.07)",position:"relative",overflow:"hidden",transition:"background .3s, border-color .3s",textDecoration:"none",color:"inherit"}}>
      <div><div style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.25em",color:accent?"var(--crimson-500)":"var(--bone-deep)",marginBottom:14}}>{tag}</div><StatusBadge status={status}/></div>
      <div>
        <h3 style={{margin:0,fontFamily:"var(--sans)",fontSize:36,fontWeight:600,letterSpacing:"-0.025em",color:"var(--bone)",lineHeight:1.05}}>{title}</h3>
        <div style={{marginTop:10,fontSize:18,color:"var(--bone-dim)"}}>{lede}</div>
        <div style={{marginTop:14,fontSize:14,color:"var(--bone-mute)",lineHeight:1.55,maxWidth:620}}>{desc}</div>
        <div style={{display:"flex",flexWrap:"wrap",gap:6,marginTop:18}}>
          {stack.map((s:string)=>(<span key={s} style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.06em",padding:"4px 10px",background:"rgba(0,0,0,0.4)",border:"1px solid rgba(255,255,255,0.07)",borderRadius:999,color:"var(--bone-mute)"}}>{s}</span>))}
        </div>
      </div>
      <div style={{display:"flex",flexDirection:"column",alignItems:"flex-end",gap:10}}>
        <div style={{width:44,height:44,borderRadius:999,border:hover?"1px solid var(--crimson-600)":"1px solid rgba(255,255,255,0.12)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--bone)",transform:hover?"rotate(-45deg)":"rotate(0)",transition:"transform .35s, background .25s, border-color .25s",background:hover?"var(--crimson-700)":"transparent"}}><IconArrowRight size={16}/></div>
        <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",color:"var(--bone-deep)",textAlign:"right" as const}}>{meta.map((m:string,i:number)=>(<div key={i} style={{marginBottom:4}}>{m}</div>))}</div>
      </div>
      {accent&&<div style={{position:"absolute",top:0,left:0,right:0,height:2,background:"linear-gradient(90deg, var(--crimson-700), var(--crimson-400), var(--crimson-700))",opacity:hover?1:0.7,transition:"opacity .3s"}}/>}
    </a>
  );
}

function Projects() {
  const projects = [
    {tag:"STUDIO",title:"AevisLab",lede:"An early-stage studio I co-founded — one project in, still finding its shape.",meta:["Co-founded 2025","early stage"],desc:"The long-term idea: a small studio building AI-assisted web and mobile products. Right now it's one project and a lot of groundwork, not a running company yet.",stack:["Next.js","Vercel","AI-Assisted"],status:"early",accent:true,href:"https://github.com/Eray-Candan"},
    {tag:"MICROSITE",title:"Portfolio v1",lede:"This site — built with Next.js, deployed on Vercel.",meta:["2025"],desc:"My personal site, built to show what I'm actually working on rather than a generic resume page.",stack:["Next.js","Tailwind","Vercel"],status:"shipped",href:"#top"},
    {tag:"NEXT UP",title:"More coming",lede:"Building in public as a student, one project at a time.",meta:["2025-2026"],desc:"Planning more small AI-assisted tools and practice projects as I keep learning — nothing shipped yet, follow along on Twitter/X.",stack:["Python","Supabase","AI-Assisted"],status:"open-to-work",href:"https://twitter.com/Erayec_"},
  ];
  return (
    <section style={{background:"var(--ink-1)",padding:"140px 0 120px",borderTop:"1px solid var(--ink-line)"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px"}}>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",flexWrap:"wrap",gap:24,marginBottom:64}}>
          <div>
            <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase" as const,color:"var(--crimson-500)",display:"inline-flex",alignItems:"center",gap:10}}><span style={{width:22,height:1,background:"var(--crimson-500)",display:"inline-block"}}/>03 / The Work</div>
            <h2 style={{margin:"16px 0 0",fontFamily:"var(--sans)",fontWeight:600,fontSize:"clamp(40px, 5vw, 72px)",letterSpacing:"-0.03em",lineHeight:1,color:"var(--bone)"}}>{"What I'm "}<span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:400}}>working on</span></h2>
          </div>
          <div style={{fontFamily:"var(--mono)",fontSize:12,letterSpacing:"0.12em",color:"var(--bone-deep)",display:"flex",alignItems:"center",gap:10}}>
            <span style={{width:10,height:10,borderRadius:999,background:"#22c55e",boxShadow:"0 0 12px rgba(34,197,94,0.7)",display:"inline-block"}}/><span style={{color:"var(--bone-dim)"}}>OPEN TO WORK</span>
          </div>
        </div>
        <div style={{display:"grid",gap:14}}>{projects.map((p,idx)=>(<ProjectRow key={idx} {...p}/>))}</div>
      </div>
    </section>
  );
}

function Stack() {
  const tools = [{name:"Next.js",brand:<BrandNext/>},{name:"React",brand:<BrandReact/>},{name:"Python",brand:<BrandPython/>},{name:"JavaScript",brand:<BrandJS/>},{name:"Tailwind",brand:<BrandTailwind/>},{name:"Vercel",brand:<BrandVercel/>},{name:"Supabase",brand:<BrandSupabase/>},{name:"Claude",brand:<BrandClaude/>},{name:"GitHub",brand:<IconGitHub size={22}/>}];
  return (
    <section id="stack" style={{background:"var(--ink-0)",padding:"120px 0",borderTop:"1px solid var(--ink-line)"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px"}}>
        <div style={{display:"flex",alignItems:"baseline",justifyContent:"space-between",flexWrap:"wrap",gap:24,marginBottom:56}}>
          <div>
            <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase" as const,color:"var(--crimson-500)",display:"inline-flex",alignItems:"center",gap:10}}><span style={{width:22,height:1,background:"var(--crimson-500)",display:"inline-block"}}/>04 / Stack</div>
            <h2 style={{margin:"16px 0 0",fontFamily:"var(--sans)",fontWeight:600,fontSize:"clamp(40px, 5vw, 72px)",letterSpacing:"-0.03em",lineHeight:1,color:"var(--bone)"}}>Tools I <span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:400}}>work with</span></h2>
          </div>
          <p style={{maxWidth:380,color:"var(--bone-mute)",fontSize:15,lineHeight:1.6,margin:0}}>Pragmatic stack. Modern when it matters, boring when it should be. I pick tools that let me ship faster, not impress devs on Twitter.</p>
        </div>
        <div style={{display:"grid",gridTemplateColumns:"repeat(3, 1fr)",gap:12}}>
          {tools.map((t,idx)=>(
            <div key={t.name} style={{padding:"22px",borderRadius:14,display:"flex",alignItems:"center",gap:16,background:"linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.02))",border:"1px solid rgba(255,255,255,0.07)",transition:"transform .35s, border-color .35s"}}
              onMouseEnter={(e:any)=>{e.currentTarget.style.transform="translateY(-3px)";e.currentTarget.style.borderColor="rgba(220,38,38,0.45)";}}
              onMouseLeave={(e:any)=>{e.currentTarget.style.transform="translateY(0)";e.currentTarget.style.borderColor="rgba(255,255,255,0.07)";}}>
              <div style={{width:48,height:48,borderRadius:12,background:"rgba(220,38,38,0.08)",border:"1px solid rgba(220,38,38,0.18)",display:"flex",alignItems:"center",justifyContent:"center",color:"var(--crimson-200)"}}>{t.brand}</div>
              <div><div style={{fontSize:16,fontWeight:500,color:"var(--bone)"}}>{t.name}</div><div style={{fontFamily:"var(--mono)",fontSize:10,letterSpacing:"0.16em",color:"var(--bone-deep)",marginTop:3}}>0{idx+1}</div></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ContactStrip() {
  const [copied, setCopied] = useState(false);
  const email = "eraycandan@aevislab.com";
  return (
    <section style={{background:"linear-gradient(180deg, var(--ink-0) 0%, #1a0404 70%, var(--crimson-900) 100%)",padding:"140px 0 100px",position:"relative",overflow:"hidden",borderTop:"1px solid var(--ink-line)"}}>
      <div style={{position:"absolute",bottom:-200,left:"50%",transform:"translateX(-50%)",width:"120%",height:500,background:"radial-gradient(ellipse 60% 80% at 50% 100%, rgba(220,38,38,0.4), transparent 60%)",pointerEvents:"none"}}/>
      <div style={{maxWidth:920,margin:"0 auto",padding:"0 32px",position:"relative",zIndex:2,textAlign:"center" as const}}>
        <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.22em",textTransform:"uppercase" as const,color:"var(--crimson-500)",display:"inline-flex",alignItems:"center",gap:10}}><span style={{width:22,height:1,background:"var(--crimson-500)",display:"inline-block"}}/>Get in touch</div>
        <h2 style={{margin:"20px 0 0",fontFamily:"var(--sans)",fontWeight:600,fontSize:"clamp(48px, 7vw, 104px)",letterSpacing:"-0.035em",lineHeight:0.95,color:"var(--bone)"}}>
          Have something <br/><span style={{fontFamily:"var(--serif)",fontStyle:"italic",fontWeight:400,color:"var(--crimson-200)"}}>worth building?</span>
        </h2>
        <p style={{maxWidth:540,margin:"30px auto 0",color:"rgba(245,241,232,0.7)",fontSize:18,lineHeight:1.6}}>{"I'm open to founder collaborations, contract work, and conversations with people building serious things."}</p>
        <div style={{marginTop:44,display:"inline-flex",alignItems:"center",gap:10,padding:8,borderRadius:999,background:"rgba(0,0,0,0.5)",border:"1px solid rgba(254,202,202,0.18)",backdropFilter:"blur(12px)"}}>
          <span style={{padding:"12px 18px",fontFamily:"var(--mono)",fontSize:14,color:"var(--bone)"}}>{email}</span>
          <button onClick={()=>{navigator.clipboard.writeText(email).then(()=>{setCopied(true);setTimeout(()=>setCopied(false),1500);});}} style={{display:"inline-flex",alignItems:"center",gap:8,padding:"10px 16px",borderRadius:999,fontFamily:"var(--sans)",fontWeight:500,fontSize:12,background:"var(--bone)",color:"var(--crimson-ink)",border:"none",cursor:"pointer"}}>
            {copied?<><IconCheck size={14}/> Copied</>:<><IconCopy size={14}/> Copy</>}
          </button>
        </div>
        <div style={{display:"flex",justifyContent:"center",gap:14,marginTop:28,flexWrap:"wrap"}}>
          {[{label:"@Eray-Candan",href:"https://github.com/Eray-Candan",icon:<IconGitHub size={16}/>},{label:"@Erayec_",href:"https://twitter.com/Erayec_",icon:<IconTwitter size={14}/>}].map((l:any)=>(
            <a key={l.label} href={l.href} target="_blank" rel="noopener noreferrer" style={{display:"inline-flex",alignItems:"center",gap:10,padding:"14px 22px",borderRadius:999,fontSize:14,border:"1px solid rgba(254,202,202,0.3)",color:"var(--bone)",textDecoration:"none"}}>{l.icon} {l.label}</a>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer style={{background:"var(--crimson-950)",borderTop:"1px solid rgba(254,202,202,0.1)",padding:"28px 0",color:"var(--bone-mute)"}}>
      <div style={{maxWidth:1180,margin:"0 auto",padding:"0 32px",display:"grid",gridTemplateColumns:"1fr auto 1fr",alignItems:"center",gap:24}}>
        <div style={{fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em",color:"var(--bone-deep)"}}>© 2025 ERAY CANDAN</div>
        <div style={{fontFamily:"var(--sans)",fontWeight:600,fontSize:16,letterSpacing:"0.04em",color:"var(--crimson-400)",display:"flex",alignItems:"center",gap:8}}><span style={{display:"inline-block",width:6,height:6,borderRadius:999,background:"var(--crimson-500)",boxShadow:"0 0 10px var(--crimson-500)"}}/>AEVISLAB</div>
        <div style={{display:"flex",justifyContent:"flex-end",gap:18,fontFamily:"var(--mono)",fontSize:11,letterSpacing:"0.16em"}}>
          <a href="https://github.com/Eray-Candan" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"none"}}>GITHUB</a>
          <a href="https://twitter.com/Erayec_" target="_blank" rel="noopener noreferrer" style={{color:"inherit",textDecoration:"none"}}>TWITTER</a>
        </div>
      </div>
    </footer>
  );
}

const G = `
@import url('https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Space+Grotesk:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
:root{--crimson-50:#fef2f2;--crimson-200:#fecaca;--crimson-400:#f87171;--crimson-500:#ef4444;--crimson-600:#dc2626;--crimson-700:#b91c1c;--crimson-800:#7f1d1d;--crimson-900:#4a0e0e;--crimson-950:#2a0707;--crimson-ink:#1a0404;--ink-0:#050505;--ink-1:#0a0a0a;--ink-2:#111111;--ink-3:#161616;--ink-4:#1f1f1f;--ink-line:#262626;--bone:#f5f1e8;--bone-dim:#d6d3cf;--bone-mute:#a8a29e;--bone-deep:#78716c;--serif:'Instrument Serif','Times New Roman',ui-serif,serif;--sans:'Space Grotesk',ui-sans-serif,system-ui,sans-serif;--mono:'JetBrains Mono',ui-monospace,'SF Mono',Menlo,monospace;}
*{box-sizing:border-box;}html,body{margin:0;padding:0;background:var(--ink-0);color:var(--bone);}
body{font-family:var(--sans);font-weight:400;-webkit-font-smoothing:antialiased;overflow-x:hidden;}
a{color:inherit;text-decoration:none;}::selection{background:var(--crimson-600);color:var(--bone);}
html{scroll-behavior:smooth;}::-webkit-scrollbar{width:10px;}::-webkit-scrollbar-track{background:var(--ink-0);}::-webkit-scrollbar-thumb{background:var(--ink-4);border-radius:8px;}::-webkit-scrollbar-thumb:hover{background:var(--crimson-800);}
@keyframes blink{0%,49%{opacity:1;}50%,100%{opacity:0;}}
@keyframes spin-slow{to{transform:rotate(360deg);}}
@keyframes flicker{0%,100%{opacity:1;}50%{opacity:0.92;}}
@media(max-width:880px){.about-g,.aevis-g,.stack-g{grid-template-columns:1fr!important;}.stat-g,.proj-g{grid-template-columns:1fr!important;}.foot-g{grid-template-columns:1fr!important;text-align:center;}}
`;

export default function Home() {
  return (
    <>
      <style dangerouslySetInnerHTML={{__html:G}}/>
      <Nav/>
      <main>
        <Hero/>
        <About/>
        <AevisLab/>
        <MonoDivider/>
        <Projects/>
        <Stack/>
        <ContactStrip/>
      </main>
      <Footer/>
    </>
  );
}
