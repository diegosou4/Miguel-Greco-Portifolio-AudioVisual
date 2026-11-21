import React, { useEffect, useRef, useState } from 'react';
import { createRoot } from 'react-dom/client';
import { projects } from './projects';
import './styles.css';

const whatsapp = 'https://wa.me/5561992508562';
const contactLink = (message = 'Olá, Miguel! Vi seu portfólio e gostaria de conversar sobre um projeto.') => `${whatsapp}?text=${encodeURIComponent(message)}`;
const categories = [{ id: 'todos', label: 'Todos os filmes' }, { id: 'marcas', label: 'Marcas & conteúdo' }, { id: 'casamentos', label: 'Casamentos' }, { id: 'eventos', label: 'Eventos & autorais' }];

// WhatsApp brand glyph: Simple Icons, CC0. https://simpleicons.org/
const whatsappGlyph = 'M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z';

function Icon({ name, ...props }) {
  return <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" {...props}>
    {name === 'whatsapp' && <path d={whatsappGlyph} fill="currentColor" stroke="none" />}
    {name === 'play' && <path d="m9 5 11 7-11 7V5Z" fill="currentColor" stroke="none" />}
    {name === 'pause' && <><path d="M8 5v14M16 5v14" strokeWidth="3" /></>}
    {name === 'menu' && <><path d="M4 8h16M4 16h16" /></>}
    {name === 'close' && <path d="m6 6 12 12M6 18 18 6" />}
    {name === 'external' && <><path d="M14 4h6v6M20 4l-9 9M10 4H4v16h16v-6" /></>}
    {name === 'chevron' && <path d="m7 10 5 5 5-5" />}
  </svg>;
}

function Header({ detail = false }) {
  const [menu, setMenu] = useState(false);
  const toggleRef = useRef(null);
  useEffect(() => {
    const close = () => setMenu(false);
    const escape = e => { if (e.key === 'Escape') { setMenu(false); toggleRef.current?.focus(); } };
    window.addEventListener('hashchange', close);
    window.addEventListener('keydown', escape);
    return () => { window.removeEventListener('hashchange', close); window.removeEventListener('keydown', escape); };
  }, []);
  return <header className={`site-header ${detail ? 'detail-header' : ''}`}>
    <a className="wordmark" href="#inicio" aria-label="Miguel Greco, início">miguel greco<span className="wordmark-period">.</span></a>
    <span className="header-role">Filmmaker & editor<br />Brasília, Brasil</span>
    <nav className="desktop-nav" aria-label="Navegação principal">
      <a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre</a><a className="contact-pill" href="#contato">Vamos conversar</a>
    </nav>
    <a className="header-whatsapp" href={contactLink()} target="_blank" rel="noreferrer" aria-label="Conversar com Miguel no WhatsApp"><Icon name="whatsapp" /></a>
    <button className="menu-toggle" ref={toggleRef} type="button" aria-label={menu ? 'Fechar menu' : 'Abrir menu'} aria-expanded={menu} aria-controls="mobile-menu" onClick={() => setMenu(!menu)}><Icon name={menu ? 'close' : 'menu'} /></button>
    {menu && <nav className="mobile-menu" id="mobile-menu" aria-label="Navegação móvel"><a href="#trabalhos">Trabalhos</a><a href="#sobre">Sobre Miguel</a><a href="#contato">Vamos conversar</a><a href={contactLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" />WhatsApp</a></nav>}
  </header>;
}

function Hero() {
  const ref = useRef(null);
  const frameRef = useRef(null);
  const userPaused = useRef(false);
  const [paused, setPaused] = useState(true);
  const [ready, setReady] = useState(false);
  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const video = ref.current;
    const attempt = () => { if (!media.matches && !userPaused.current && !document.hidden) video?.play().catch(() => {}); };
    attempt();
    const observer = new IntersectionObserver(([entry]) => { if (entry.isIntersecting) attempt(); else video?.pause(); }, { threshold: 0.15 });
    observer.observe(video);
    const visibility = () => { if (document.hidden) video.pause(); else if (video.getBoundingClientRect().bottom > 0) attempt(); };
    const preference = () => { if (media.matches) video.pause(); else attempt(); };
    let ticking = false;
    const scroll = () => {
      if (ticking || media.matches) return;
      ticking = true;
      requestAnimationFrame(() => {
        const progress = Math.min(1, window.scrollY / (window.innerHeight * 0.8));
        frameRef.current?.style.setProperty('--frame', `${progress * 2.7}%`);
        ticking = false;
      });
    };
    document.addEventListener('visibilitychange', visibility);
    media.addEventListener('change', preference);
    window.addEventListener('scroll', scroll, { passive: true });
    return () => { observer.disconnect(); document.removeEventListener('visibilitychange', visibility); media.removeEventListener('change', preference); window.removeEventListener('scroll', scroll); };
  }, []);
  const toggle = () => { const video = ref.current; userPaused.current = !video.paused; if (video.paused) video.play().catch(() => setPaused(true)); else video.pause(); };
  return <section className="hero" id="inicio" aria-label="Apresentação de Miguel Greco">
    <div className={`hero-frame ${ready ? 'video-ready' : ''}`} ref={frameRef}>
      <video ref={ref} className="hero-video" src="/assets/hero.mp4" poster="/assets/hero.jpg" muted loop playsInline preload="metadata" onPlaying={() => { setPaused(false); setReady(true); }} onPause={() => setPaused(true)} aria-label="Imagens de trabalhos do portfólio de Miguel Greco" />
      <div className="hero-shade" />
    </div>
    <div className="hero-content">
      <div className="hero-topline"><span>Captação. Montagem. História.</span><span>Um portfólio em movimento</span></div>
      <div className="hero-statement"><h1>Um olhar.<br />Muitas <em>histórias.</em></h1><p>Filmes para marcas, pessoas<br />e momentos que ficam.</p></div>
      <div className="hero-bottom"><a className="reel-link" href="#filme/em-movimento"><span className="play-circle"><Icon name="play" /></span><span>Entre em cena<span className="reel-sublabel">Veja o filme de abertura</span></span></a><a className="explore-link" href="#trabalhos">Explore os trabalhos<span className="scroll-line" aria-hidden="true" /></a><button type="button" className="motion-button" aria-label={paused ? 'Reproduzir vídeo de fundo' : 'Pausar vídeo de fundo'} onClick={toggle}><Icon name={paused ? 'play' : 'pause'} /><span>{paused ? 'Reproduzir' : 'Pausar'}</span></button></div>
    </div>
  </section>;
}

function ProjectCard({ project, index }) {
  return <article className={`project project-position-${index % 6} ${project.portrait ? 'portrait-project' : ''}`}>
    <a className="project-link" href={`#filme/${project.slug}`} aria-label={`Ver filme: ${project.title}`}>
      <div className="project-image"><img src={project.image} alt={`Cena de ${project.title}`} loading="lazy" width={1600} height={900} /><span className="project-play"><Icon name="play" /><span>Ver filme</span></span><span className="project-category">{project.label}</span></div>
      <div className="project-caption"><h3>{project.title}</h3><span>{project.techDetails.split(' • ')[0]}</span></div>
      <p className="project-line">{project.line}</p>
    </a>
  </article>;
}

function Portfolio({ filter, setFilter }) {
  const [expanded, setExpanded] = useState(false);
  const list = filter === 'todos' ? expanded ? projects : [projects[1], projects[0], projects[3], projects[4], projects[2], projects[8]] : projects.filter(p => p.group === filter);
  return <section className="portfolio section-pad" id="trabalhos" aria-labelledby="work-title">
    <div className="section-intro"><h2 id="work-title">Cada história,<br /><span>um novo olhar.</span></h2><p>Uma seleção de encontros entre imagem, ritmo e intenção.</p></div>
    <div className="portfolio-toolbar"><div className="filters" role="group" aria-label="Filtrar projetos">{categories.map(c => <button key={c.id} type="button" aria-pressed={filter === c.id} className={filter === c.id ? 'active' : ''} onClick={() => setFilter(c.id)}>{c.label}</button>)}</div><span className="film-count" aria-live="polite">{list.length} {list.length === 1 ? 'filme' : 'filmes'}</span></div>
    <div className="project-grid">{list.map((p, index) => <ProjectCard project={p} index={index} key={p.id} />)}</div>
    {filter === 'todos' && <div className="archive-action"><p>{expanded ? 'Você está vendo o acervo completo.' : 'Há mais histórias por aqui.'}</p><button className="outline-button" type="button" aria-expanded={expanded} onClick={() => { setExpanded(!expanded); if (expanded) document.getElementById('trabalhos')?.scrollIntoView({ behavior: 'instant' }); }}>{expanded ? 'Voltar à seleção' : 'Explorar todos os 13 projetos'}</button></div>}
  </section>;
}

function Pathways({ choose }) {
  return <section className="pathways" aria-label="Encontre o filme para a sua história">
    <div className="pathway pathway-brands"><div className="pathway-copy"><h2>Uma marca.<br /><em>Uma presença.</em></h2><p>Publicidade, conteúdo e eventos.<br />Seu universo traduzido em imagem.</p><a href="#trabalhos" className="text-link" onClick={() => choose('marcas')}>Conheça os filmes para marcas</a></div><img src="/assets/project-4.jpg" alt="Detalhe de uma ativação da Amstel Ultra" loading="lazy" width="1600" height="900" /></div>
    <div className="pathway pathway-weddings"><img src="/assets/project-1.jpg" alt="As mãos de Bruno e Ana durante o casamento" loading="lazy" width="1600" height="900" /><div className="pathway-copy"><h2>Um dia.<br /><em>Todos os sentidos.</em></h2><p>O gesto, o abraço, o que passou depressa.<br />Um filme para voltar a sentir.</p><a href="#filme/bruno-e-ana" className="text-link">Conheça o filme de Bruno & Ana</a></div></div>
  </section>;
}

function TrailIcon({ type }) {
  const glyphs = {
    plane: <path d="m17.8 8.6 2.1-2.1a2 2 0 0 0-2.8-2.8L15 5.8 8 3 6 5l5 4-4 4-4-1-1 1 5 3 3 5 1-1-1-4 4-4 4 5 2-2-2.2-6.4Z" />,
    car: <><path d="m5 6 2-3h10l2 3 2 4v8h-3v-3H6v3H3v-8l2-4ZM3 10h18" /><circle cx="7.5" cy="12.5" r=".5" /><circle cx="16.5" cy="12.5" r=".5" /></>,
    camera: <><path d="M3 7h4l2-3h6l2 3h4v13H3V7Z" /><circle cx="12" cy="13" r="4" /></>,
    laptop: <><path d="M5 3h14v13H5V3ZM2 20h20l-3-4H5l-3 4Z" /><path d="m10 8-2 2 2 2m4-4 2 2-2 2" /></>,
    rings: <><circle cx="8.5" cy="14" r="6" /><circle cx="15.5" cy="14" r="6" /><path d="m5 5 3-3 3 3m2 0 3-3 3 3" /></>,
    clapper: <><path d="M3 10h18v11H3V10ZM3 10 1 5l18-4 2 5-18 4Z" /><path d="m6 4 3 4m3-6 3 4M3 14h18" /></>,
    microphone: <><rect x="8" y="2" width="8" height="13" rx="4" /><path d="M5 10v2a7 7 0 0 0 14 0v-2M12 19v3m-4 0h8" /></>,
    course: <><path d="m1 8 11-5 11 5-11 5L1 8Zm4 2v7c4 4 10 4 14 0v-7M23 8v9" /></>,
    film: <><rect x="3" y="2" width="18" height="20" rx="1" /><path d="M7 2v20M17 2v20M3 7h4M3 12h4M3 17h4M17 7h4M17 12h4M17 17h4m-7-10-4 3 4 3V7Z" /></>,
    motion: <><path d="M3 6h6M1 12h6M3 18h6M13 4l9 8-9 8V4Z" /></>,
    boat: <><path d="M12 2v15M12 3 3 14h9m3-8 6 8h-6M2 18h20l-4 4H6l-4-4Z" /></>,
    suitcase: <><rect x="4" y="6" width="16" height="15" rx="2" /><path d="M9 6V3h6v3M8 6v15M16 6v15M8 23v-2m8 2v-2" /></>,
    palms: <><path d="M12 22c2-5 3-10 2-16M14 6C10 1 5 2 3 6c5-1 8-1 11 0Zm0 0c3-5 7-4 9 0-4-1-6-1-9 0Zm0 0c-5-2-8 1-8 5 3-3 5-4 8-5Zm0 0c4 0 7 3 6 7-2-4-4-5-6-7ZM5 22c4-2 9-2 14 0" /></>,
    sun: <><circle cx="12" cy="12" r="4" /><path d="M12 1v2m0 18v2M1 12h2m18 0h2M4.2 4.2l1.4 1.4m12.8 12.8 1.4 1.4M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" /></>
  };
  return <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round">{glyphs[type]}</svg>;
}

function JourneyTrail() {
  const ref = useRef(null);
  const [geometry, setGeometry] = useState(null);
  useEffect(() => {
    const section = ref.current?.closest('.about');
    if (!section) return;
    const measure = () => {
      const bounds = section.getBoundingClientRect();
      const relative = selector => { const r=section.querySelector(selector).getBoundingClientRect(); return {x:r.left-bounds.left,y:r.top-bounds.top,w:r.width,h:r.height,right:r.right-bounds.left,bottom:r.bottom-bounds.top}; };
      const listen=relative('.about-listen'), photo=relative('.about-personal-film'), body=relative('.about-body');
      const width=bounds.width,height=bounds.height,mobile=width<=700;
      const sx=listen.right-12,sy=listen.bottom+18;
      let d;
      if (mobile) {
        const y=body.bottom;
        d=`M${sx} ${sy} C${width-5} ${sy+12} ${width-12} ${photo.y-20} ${width-12} ${photo.y+60} C${width-10} ${photo.bottom+20} ${width-12} ${body.y+40} ${width-12} ${y+25} C${width-16} ${y+85} 40 ${y+45} 38 ${y+128} C30 ${y+225} ${width-44} ${y+225} ${width-40} ${y+135} C${width-28} ${y+40} 13 ${y+42} 13 ${y-70} L13 ${photo.bottom+10} Q13 ${photo.bottom-30} ${photo.x-2} ${photo.bottom-70}`;
      } else {
        const gap=(photo.right+body.x)/2,right=width-45,bottom=height-100;
        d=`M${sx} ${sy} C${sx+95} ${sy+15} ${gap+100} ${sy+65} ${gap} ${sy+145} C${gap-150} ${sy+290} ${body.x+20} ${body.bottom+135} ${right-70} ${body.bottom+85} C${right+20} ${body.bottom+25} ${right+20} ${bottom-70} ${right-55} ${bottom-20} C${right-280} ${bottom+75} ${gap+65} ${bottom+25} ${gap} ${bottom-65} C${gap-85} ${bottom-190} ${photo.right+60} ${photo.bottom-30} ${photo.right+15} ${photo.bottom-100}`;
      }
      const exclusions=['.about-heading h2','.signature','.about-personal-film','.about-body'].map(selector=>relative(selector));
      const path=document.createElementNS('http://www.w3.org/2000/svg','path');path.setAttribute('d',d);
      const length=path.getTotalLength(),points=[];
      const types=['plane','suitcase','car','camera','rings','clapper','microphone','course','film','laptop','motion','boat','palms','sun'];
      const radius=width<=1000?14:22;
      const available=p=>p.x>=radius && p.x<=width-radius && p.y>=radius && p.y<=height-radius && !exclusions.some(r=>p.x>r.x-radius-7&&p.x<r.right+radius+7&&p.y>r.y-radius-7&&p.y<r.bottom+radius+7) && !points.some(q=>Math.hypot(q.x-p.x,q.y-p.y)<radius*2+12);
      types.forEach((type,i)=>{
        const target=(i+.35)/types.length;
        let best=null,score=Infinity;
        for(let step=0;step<=400;step++){const t=step/400,p=path.getPointAtLength(t*length);if(available(p)&&Math.abs(t-target)<score){best={type,x:p.x,y:p.y};score=Math.abs(t-target);}}
        if(best) points.push(best);
      });
      setGeometry({width,height,d,exclusions,points,mobile});
    };
    measure();
    const observer=new ResizeObserver(measure);observer.observe(section);observer.observe(section.querySelector('.about-body'));
    let alive=true;document.fonts.ready.then(()=>{if(alive)measure();});
    return ()=>{alive=false;observer.disconnect();};
  }, []);
  return <div ref={ref} className="about-trail" aria-hidden="true">{geometry && <svg className="trail-route" viewBox={`0 0 ${geometry.width} ${geometry.height}`}>
    <defs><mask id="journey-content-mask" maskUnits="userSpaceOnUse"><rect width={geometry.width} height={geometry.height} fill="white" />{geometry.exclusions.map((r,i)=><rect key={i} x={r.x-8} y={r.y-8} width={r.w+16} height={r.h+16} fill="black" />)}</mask></defs>
    <g mask="url(#journey-content-mask)"><path className="journey-line" d={geometry.d} />{geometry.points.map(p=><g className={`journey-symbol journey-${p.type}`} key={p.type} transform={`translate(${p.x} ${p.y})`}><circle r={geometry.width<=1000?17:23} fill="var(--paper)" /><svg x={geometry.width<=1000?-12:-15} y={geometry.width<=1000?-12:-15} width={geometry.width<=1000?24:30} height={geometry.width<=1000?24:30} viewBox="0 0 30 30"><TrailIcon type={p.type} /></svg></g>)}</g>
  </svg>}</div>;
}

function About() {
  const personalVideoRef = useRef(null);
  const [personalVideoStarted, setPersonalVideoStarted] = useState(false);
  return <section className="about section-pad" id="sobre" aria-labelledby="about-title"><JourneyTrail /><div className="about-heading"><h2 id="about-title">Por trás da câmera,<br />alguém que <em className="about-listen">escuta.</em></h2><span className="signature">Miguel Greco</span><figure className="about-personal-film"><div className="polaroid-media"><video ref={personalVideoRef} poster="/assets/personal-video-poster.jpg" controls={personalVideoStarted} onPlay={() => setPersonalVideoStarted(true)} playsInline preload="metadata" width="576" height="1024" aria-label="Registros pessoais de Miguel Greco" src="/assets/WhatsApp%20Video%202026-11-21%20at%2014.05.14.mp4"><p>Seu navegador não reproduziu o vídeo. <a href="/assets/WhatsApp%20Video%202026-11-21%20at%2014.05.14.mp4">Abrir o vídeo pessoal de Miguel</a>.</p></video>{!personalVideoStarted && <button className="personal-video-play" type="button" aria-label="Reproduzir vídeo pessoal de Miguel" onClick={() => personalVideoRef.current?.play().catch(() => {})}><Icon name="play" /></button>}</div><figcaption>Além da ilha de edição.</figcaption></figure></div><div className="about-body"><p className="about-lead">Sou filmmaker e editor. Encontro na imagem uma forma de contar histórias — e na música, o ritmo para dar vida a elas.</p><p>Há mais de três anos no audiovisual, trabalho com captação e pós-produção em projetos para marcas, eventos e casamentos. A experiência na agência Retriz faz parte desse percurso, construído com diferentes equipes, lugares e maneiras de criar.</p><p>Da câmera à montagem, procuro o detalhe que dá sentido ao conjunto. Fora da edição, o violão, as viagens e a natureza continuam alimentando esse olhar.</p><div className="disciplines"><span>Captação</span><span>Edição & montagem</span><span>Sound design</span><span>Motion graphics</span></div><a className="text-link" href="#contato">Vamos criar a próxima história</a></div></section>;
}

function Contact() {
  const [open, setOpen] = useState(false);
  const [prepared, setPrepared] = useState(false);
  const [href, setHref] = useState('');
  const formRef = useRef(null);
  const submit = event => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    const message = `Olá, Miguel! Sou ${String(data.get('name')).trim()}. Vi seu portfólio e gostaria de conversar.\n\nTipo de projeto: ${data.get('type')}\n${data.get('date') ? `Quando: ${data.get('date')}\n` : ''}\n${String(data.get('message')).trim()}`;
    setHref(contactLink(message));
    setPrepared(true);
  };
  return <section className="contact section-pad" id="contato" aria-labelledby="contact-title"><div className="contact-top"><span>Tem uma ideia em mente?</span><span>Brasília, Brasil · Vamos conversar</span></div><h2 id="contact-title">A próxima história<br />pode ser <em>a sua.</em></h2><div className="contact-bottom"><a className="contact-main" href={contactLink()} target="_blank" rel="noreferrer"><Icon name="whatsapp" /><span>Conversar no WhatsApp</span></a><button className="text-link brief-toggle" type="button" aria-expanded={open} aria-controls="brief-form" onClick={() => { setOpen(!open); setPrepared(false); }}>Prefiro contar um pouco do projeto<Icon name="chevron" /></button></div>{open && <form className="brief-form" id="brief-form" ref={formRef} onSubmit={submit} onChange={() => setPrepared(false)}><div className="form-pair"><label>Seu nome<input name="name" autoComplete="name" maxLength="100" required placeholder="Como posso te chamar?" /></label><label>O que vamos criar?<span className="select-wrap"><select name="type" defaultValue="Filme para marca"><option>Filme para marca</option><option>Casamento</option><option>Evento</option><option>Edição ou outro projeto</option></select><Icon name="chevron" /></span></label></div><label>Data ou prazo <span className="optional">(opcional)</span><input name="date" maxLength="100" placeholder="Ex.: março de 2027 ou ainda em aberto" /></label><label>Conte um pouco da ideia<textarea name="message" rows="3" maxLength="2000" required placeholder="O que você quer registrar ou comunicar?" /></label><div className="form-end"><p>Você revisa e envia a mensagem no WhatsApp.</p><button className="outline-button" type="submit">Preparar mensagem</button></div>{prepared && <div className="message-ready" role="status"><p>Mensagem pronta. Abra o WhatsApp para revisar e enviar.</p><a className="contact-pill" href={href} target="_blank" rel="noreferrer"><Icon name="whatsapp" />Abrir mensagem no WhatsApp</a></div>}</form>}</section>;
}

function WhatsAppShortcut() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const hero = document.getElementById('inicio');
    const blockers = [document.getElementById('contato'), document.querySelector('.site-footer'), document.querySelector('.film-player')].filter(Boolean);
    const states = new Map();
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => states.set(entry.target, entry.target === hero ? entry.intersectionRatio > 0.15 : entry.isIntersecting));
      setVisible((!hero || states.get(hero) === false) && !blockers.some(element => states.get(element)));
    }, { threshold: [0, 0.15] });
    [hero, ...blockers].filter(Boolean).forEach(element => observer.observe(element));
    return () => observer.disconnect();
  }, []);
  return visible ? <a className="whatsapp-shortcut" href={contactLink()} target="_blank" rel="noreferrer" aria-label="Conversar com Miguel no WhatsApp"><Icon name="whatsapp" /><span>WhatsApp</span></a> : null;
}

function Footer() { return <footer className="site-footer"><a className="wordmark" href="#inicio">miguel greco<span className="wordmark-period">.</span></a><p>Filmmaker & editor</p><span>© {new Date().getFullYear()} Miguel Greco</span><a href="#inicio">Voltar ao início</a></footer>; }

function ProjectDetail({ project }) {
  const [playing, setPlaying] = useState(false);
  const headingRef = useRef(null);
  useEffect(() => { setPlaying(false); window.scrollTo({ top: 0, behavior: 'instant' }); headingRef.current?.focus({ preventScroll: true }); document.title = `${project.title} — Miguel Greco`; }, [project.slug]);
  const next = projects[(projects.findIndex(p => p.slug === project.slug) + 1) % projects.length];
  return <><Header detail /><main className="film-detail section-pad"><a className="back-link text-link" href="#trabalhos">Voltar aos trabalhos</a><div className="film-heading"><h1 tabIndex="-1" ref={headingRef}>{project.title}</h1><p>{project.label}</p></div><div className={`film-player ${project.portrait ? 'portrait-player' : ''}`}>
    {playing ? project.local ? <video controls autoPlay playsInline src="/assets/hero.mp4" poster="/assets/hero.jpg" aria-label="Filme de abertura de Miguel Greco" /> : project.isFolder ? <iframe title={`Acervo: ${project.title}`} src={`https://drive.google.com/embeddedfolderview?id=${project.folderId}#grid`} allowFullScreen /> : <iframe title={`Filme: ${project.title}`} src={`https://drive.google.com/file/d/${project.driveId}/preview`} allow="autoplay; fullscreen; encrypted-media" allowFullScreen /> : <button type="button" className="film-poster" onClick={() => setPlaying(true)} aria-label={project.isFolder ? 'Explorar telas do carrossel' : `Reproduzir ${project.title}`}><img src={project.image} alt={`Cena de ${project.title}`} width="1600" height="900" /><span className="film-play-label"><span className="play-circle"><Icon name="play" /></span>{project.isFolder ? 'Explorar acervo' : 'Reproduzir filme'}</span></button>}
  </div><div className="film-notes"><div><h2>{project.line}</h2><p>{project.description}</p></div><dl><div><dt>Participação</dt><dd>{project.techDetails}</dd></div><div><dt>Formato</dt><dd>{project.label}</dd></div></dl></div><div className="film-fallback"><p>{project.local ? 'O vídeo também está disponível no portfólio original.' : 'Se o player não carregar, abra o arquivo original no Google Drive.'}</p><a className="text-link" href={project.local ? 'https://lemu.re/p/Miguel.Greco.Visual/' : project.videoUrl} target="_blank" rel="noreferrer">{project.local ? 'Visitar portfólio original' : 'Abrir arquivo original'}<Icon name="external" /></a></div><div className="film-next"><span>Continue explorando</span><a href={`#filme/${next.slug}`}>{next.title}<Icon name="play" /></a></div></main><Contact /><WhatsAppShortcut /><Footer /></>;
}

const openingFilm = { slug: 'em-movimento', title: 'Um portfólio em movimento', line: 'Entre em cena.', label: 'Filme de abertura', local: true, image: '/assets/hero.jpg', description: 'O filme de abertura do portfólio de Miguel Greco.', techDetails: 'Imagens do portfólio audiovisual' };

function App() {
  const [hash, setHash] = useState(window.location.hash);
  const [filter, setFilter] = useState('todos');
  const homeScroll = useRef(0);
  const previous = useRef(hash);
  const slug = hash.startsWith('#filme/') ? hash.slice(7) : null;
  const project = slug === 'em-movimento' ? openingFilm : projects.find(p => p.slug === slug);
  useEffect(() => {
    const change = () => { if (!window.location.hash.startsWith('#filme/') && !previous.current.startsWith('#filme/')) homeScroll.current = window.scrollY; previous.current = window.location.hash; setHash(window.location.hash); };
    window.addEventListener('hashchange', change);
    return () => window.removeEventListener('hashchange', change);
  }, []);
  useEffect(() => {
    if (slug) return;
    document.title = 'Miguel Greco — Filmmaker & Editor';
    if (hash) requestAnimationFrame(() => document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'instant' }));
  }, [hash, slug]);
  if (slug && !project) return <><Header detail /><main className="not-found section-pad"><h1>Esse filme não está no acervo.</h1><a className="contact-pill" href="#trabalhos">Explorar os trabalhos</a></main><Footer /></>;
  if (project) return <ProjectDetail key={project.slug} project={project} />;
  return <><a className="skip-link" href="#trabalhos">Pular para os trabalhos</a><Header /><main><Hero /><Portfolio filter={filter} setFilter={setFilter} /><Pathways choose={setFilter} /><About /><Contact /></main><WhatsAppShortcut /><Footer /></>;
}

createRoot(document.getElementById('root')).render(<App />);
