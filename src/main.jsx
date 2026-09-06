import React, {useEffect, useState} from 'react';
import {createRoot} from 'react-dom/client';
import {ArrowRight, Check, ChevronDown, ChevronRight, CirclePlay, Menu, Moon, Sparkles, Sun, X, Zap, ShieldCheck, Brain, BarChart3, Users, Workflow, Target, Twitter, Linkedin, Github} from 'lucide-react';
import './styles.css';

const features=[
 {icon:Brain,title:'AI Project Copilot',text:'Turn scattered ideas into clear plans, priorities and next actions in seconds.'},
 {icon:Workflow,title:'Smart Automations',text:'Automate repetitive workflows so your team can focus on work that moves the needle.'},
 {icon:Users,title:'Team Collaboration',text:'Keep conversations, decisions and files together without the meeting overload.'},
 {icon:BarChart3,title:'Live Insights',text:'See momentum, bottlenecks and team capacity through simple real-time dashboards.'},
 {icon:Target,title:'Focus Mode',text:'Protect deep-work time with intelligent priorities and distraction-free views.'},
 {icon:ShieldCheck,title:'Enterprise Security',text:'Built with privacy-first controls, role-based access and secure team workspaces.'}
];

const steps=[
 ['01','Capture','Drop an idea, task or goal into NOVA.'],
 ['02','Plan','NOVA turns it into an actionable workflow with smart priorities.'],
 ['03','Execute','Collaborate, automate and track progress from one calm workspace.']
];

const testimonials=[
 ['Maya Chen','VP Product, Northstar','“NOVA replaced three disconnected tools for us. The team finally knows what matters today.”','MC'],
 ['Arjun Mehta','Founder, Flux Labs','“The AI planning is ridiculously useful. We went from messy Monday meetings to a five-minute check-in.”','AM'],
 ['Sofia Williams','Design Lead, Orbit','“It feels less like software and more like having an extra project manager on the team.”','SW']
];

const faqs=[
 ['What is NOVA?','NOVA is a fictional AI-powered productivity platform designed for this front-end assignment. It helps teams plan projects, automate repetitive tasks and collaborate efficiently.'],
 ['Can I try NOVA for free?','Yes. The Starter plan is designed for small teams and includes the core workspace, tasks and AI planning features.'],
 ['Does NOVA work for remote teams?','Absolutely. Shared workspaces, comments, activity and live project visibility are designed for distributed teams.'],
 ['Can I connect my existing tools?','The product concept supports integrations with common communication, calendar and project tools.'],
 ['Is my team data secure?','NOVA is designed around privacy-first access controls, encrypted data handling and enterprise-grade security practices.']
];

function App(){
 const [menu,setMenu]=useState(false),[dark,setDark]=useState(false),[open,setOpen]=useState(0),[annual,setAnnual]=useState(true),[modal,setModal]=useState(false),[email,setEmail]=useState(''),[sent,setSent]=useState(false);

 useEffect(()=>{
   document.documentElement.dataset.theme=dark?'dark':'light'
 },[dark]);

 useEffect(()=>{
   const reveal=()=>{
     document.querySelectorAll('.reveal').forEach(el=>{
       if(el.getBoundingClientRect().top<window.innerHeight*.88)
         el.classList.add('visible')
     })
   };
   reveal();
   window.addEventListener('scroll',reveal);
   return()=>window.removeEventListener('scroll',reveal)
 },[]);

 const nav=['Features','Product','Solutions','Pricing','FAQ'];

 const scroll=id=>{
   setMenu(false);
   document.getElementById(id)?.scrollIntoView({behavior:'smooth'})
 };

 return <div className="app">

  <header className="nav-wrap">
   <nav className="nav container">
    <a className="brand" href="#top" onClick={()=>scroll('top')}>
     <span className="brand-mark"><Sparkles size={17}/></span>NOVA
    </a>

    <div className={'nav-links '+(menu?'open':'')}>
     {nav.map(n=>
       <button key={n} onClick={()=>scroll(n.toLowerCase())}>{n}</button>
     )}
     <button className="mobile-close" onClick={()=>setMenu(false)}>
       <X/>
     </button>
    </div>

    <div className="nav-actions">
     <button className="icon-btn" aria-label="Toggle theme" onClick={()=>setDark(!dark)}>
      {dark?<Sun size={18}/>:<Moon size={18}/>}
     </button>

     <button className="login" onClick={()=>setModal(true)}>Sign in</button>

     <button className="nav-cta" onClick={()=>scroll('pricing')}>
      Start free <ArrowRight size={16}/>
     </button>

     <button className="hamb" onClick={()=>setMenu(!menu)} aria-label="Open menu">
      {menu?<X/>:<Menu/>}
     </button>
    </div>
   </nav>
  </header>

  <main id="top">

   <section className="hero">
    <div className="container hero-grid">

     <div className="hero-copy reveal">
      <div className="eyebrow">
       <span className="pulse"></span>
       The AI workspace for ambitious teams
      </div>

      <h1>Build better.<br/><em>Work smarter.</em></h1>

      <p>
       NOVA brings projects, people and AI into one beautifully simple workspace —
       so your team can spend less time managing work and more time creating impact.
      </p>

      <div className="hero-actions">
       <button className="primary" onClick={()=>scroll('pricing')}>
        Start building free <ArrowRight size={18}/>
       </button>

       <button className="secondary" onClick={()=>setModal(true)}>
        <CirclePlay size={18}/> See how it works
       </button>
      </div>

      <div className="trust-note">
       <div className="avatars">
        <span>MC</span><span>AM</span><span>SW</span><span>+</span>
       </div>
       <div>
        <strong>Loved by 2,000+ teams</strong>
        <small>4.9/5 average rating</small>
       </div>
      </div>
     </div>

     <div className="hero-visual reveal">
      <div className="glow"></div>

      <div className="dashboard">

       <div className="dash-top">
        <div className="dots"><i></i><i></i><i></i></div>
        <span>Workspace / Q4 Launch</span>
        <span className="live"><b></b> Live</span>
       </div>

       <div className="dash-body">

        <aside>
         <div className="mini-logo"><Sparkles size={13}/></div>
         <span className="side-active">Overview</span>
         <span>Projects</span>
         <span>AI Copilot</span>
         <span>Calendar</span>
         <span>Insights</span>
         <span>Settings</span>
        </aside>

        <div className="board">

         <div className="board-head">
          <div>
           <small>MONDAY, OCT 14</small>
           <h3>Good morning, Maya <span>✦</span></h3>
          </div>
          <div className="tiny-btn">+ New task</div>
         </div>

         <div className="metric-row">

          <div>
           <small>Team focus</small>
           <strong>86%</strong>
           <div className="progress"><i style={{width:'86%'}}></i></div>
          </div>

          <div>
           <small>Tasks done</small>
           <strong>24 <small>/ 31</small></strong>
           <div className="progress"><i style={{width:'77%'}}></i></div>
          </div>

          <div>
           <small>AI assists</small>
           <strong>142</strong>
           <div className="sparkline">╱╲╱╱╲╱</div>
          </div>

         </div>

         <div className="task-panel">
          <div className="task-title">
           <strong>Today’s priorities</strong>
           <span>AI sorted</span>
          </div>

          {[
           ['Launch campaign assets','Design','Done'],
           ['Review onboarding flow','Product','In progress'],
           ['Sync with growth team','Meeting','11:30 AM']
          ].map((x,i)=>
           <div className="task" key={i}>
            <div className={'check '+(i===0?'done':'')}>
             {i===0&&<Check size={11}/>}
            </div>
            <span>{x[0]}</span>
            <label>{x[1]}</label>
            <small>{x[2]}</small>
           </div>
          )}
         </div>

         <div className="ai-card">
          <span className="ai-icon"><Sparkles size={15}/></span>
          <div>
           <strong>AI insight</strong>
           <p>Your team has 3.5h of protected focus time today. Keep meetings after 2 PM.</p>
          </div>
          <ChevronRight size={16}/>
         </div>

        </div>
       </div>
      </div>
     </div>

    </div>
   </section>

   <section className="logos">
    <div className="container">
     <span>Trusted by teams at</span>
     <div className="logo-row">
      <b>northstar</b><b>orbit</b><b>flux</b><b>vertex</b><b>luma</b><b>arc</b>
     </div>
    </div>
   </section>

   <section id="features" className="section">
    <div className="container">

     <div className="section-head reveal">
      <div>
       <span className="kicker">Everything in one place</span>
       <h2>Powerful enough to scale.<br/><span>Simple enough to love.</span></h2>
      </div>
      <p>From first idea to final delivery, NOVA keeps your team aligned without adding more complexity.</p>
     </div>

     <div className="feature-grid">
      {features.map((f,i)=>
       <article className="feature-card reveal" key={f.title}>
        <div className="feature-icon"><f.icon size={21}/></div>
        <span className="number">0{i+1}</span>
        <h3>{f.title}</h3>
        <p>{f.text}</p>
        <a href="#product" onClick={e=>{e.preventDefault();scroll('product')}}>
         Explore <ArrowRight size={15}/>
        </a>
       </article>
      )}
     </div>

    </div>
   </section>

   <section id="product" className="section product">
    <div className="container product-grid">

     <div className="product-copy reveal">
      <span className="kicker">Meet your AI copilot</span>
      <h2>A second brain for your entire team.</h2>

      <p>
       NOVA understands your projects, priorities and patterns.
       Ask questions in plain English, get instant summaries, or let AI handle the busywork.
      </p>

      <ul>
       {[
        'Turn meeting notes into action items',
        'Generate project plans in seconds',
        'Spot blockers before they become problems',
        'Summarize any project with one click'
       ].map(x=>
        <li key={x}><span><Check size={14}/></span>{x}</li>
       )}
      </ul>

      <button className="text-btn" onClick={()=>setModal(true)}>
       Explore AI Copilot <ArrowRight size={17}/>
      </button>
     </div>

     <div className="copilot reveal">

      <div className="copilot-head">
       <span><Sparkles size={15}/> NOVA Copilot</span>
       <small>● Online</small>
      </div>

      <div className="chat user">
       <span>Summarize the Q4 launch and tell me what needs attention.</span>
      </div>

      <div className="chat bot">
       <div className="bot-avatar"><Sparkles size={13}/></div>
       <div>
        <strong>Here’s the pulse.</strong>
        <p>
         Launch is <b>82% on track</b>.
         The biggest risk is the mobile QA milestone, currently 2 days behind.
        </p>

        <div className="insight-box">
         <BarChart3 size={15}/>
         <span>
          <b>Suggested action</b>
          <small>Move QA review to Tuesday + assign Dev team.</small>
         </span>
        </div>
       </div>
      </div>

      <div className="chat-input">
       Ask NOVA anything… <span>⌘ ↵</span>
      </div>

     </div>
    </div>
   </section>

   <section id="solutions" className="section dark-section">
    <div className="container">

     <div className="center-head reveal">
      <span className="kicker">How NOVA fits your world</span>
      <h2>One workspace.<br/><span>Every kind of team.</span></h2>
     </div>

     <div className="solutions">

      <div className="solution-main reveal">
       <div className="solution-tag">01 / PRODUCT</div>
       <h3>Ship products<br/>without the chaos.</h3>
       <p>Align roadmaps, engineering and design in one living workspace.</p>
       <a href="#pricing">See product workflows <ArrowRight size={16}/></a>

       <div className="solution-art">
        <div className="orbit-ring"></div>
        <div className="floating-card">
         <Zap size={15}/>
         <span><b>Release 4.2</b><small>Ready to ship</small></span>
        </div>
       </div>
      </div>

      <div className="solution-side">

       <div className="side-solution reveal">
        <div>
         <span className="solution-tag">02 / MARKETING</span>
         <h3>Make every campaign count.</h3>
         <p>Briefs, content calendars and approvals — all in sync.</p>
        </div>
        <span className="round-arrow"><ArrowRight size={18}/></span>
       </div>

       <div className="side-solution reveal">
        <div>
         <span className="solution-tag">03 / OPERATIONS</span>
         <h3>Turn busywork into workflows.</h3>
         <p>Automate the repetitive so your team can focus.</p>
        </div>
        <span className="round-arrow"><ArrowRight size={18}/></span>
       </div>

      </div>
     </div>
    </div>
   </section>

   <section className="stats">
    <div className="container stat-grid">
     {[
      ['2K+','Teams building with NOVA'],
      ['38%','Less time spent in meetings'],
      ['4.9/5','Average customer rating'],
      ['24/7','AI assistance, always on']
     ].map(([a,b])=>
      <div className="stat reveal" key={a}>
       <strong>{a}</strong>
       <span>{b}</span>
      </div>
     )}
    </div>
   </section>

   <section className="section process">
    <div className="container">

     <div className="section-head reveal">
      <div>
       <span className="kicker">A calmer way to work</span>
       <h2>Three steps.<br/><span>Zero busywork.</span></h2>
      </div>
      <p>NOVA is designed around how teams actually work — not around adding another tool to manage.</p>
     </div>

     <div className="steps">
      {steps.map(([n,t,p],i)=>
       <div className="step reveal" key={n}>
        <span>{n}</span>
        <div className="step-line"></div>
        <h3>{t}</h3>
        <p>{p}</p>
        {i<2&&<ChevronRight className="step-arrow" size={19}/>}
       </div>
      )}
     </div>

    </div>
   </section>

   <section className="section testimonials">
    <div className="container">

     <div className="center-head reveal">
      <span className="kicker">People love NOVA</span>
      <h2>Less managing.<br/><span>More making.</span></h2>
     </div>

     <div className="testimonial-grid">
      {testimonials.map(([n,r,q,ini])=>
       <article className="quote reveal" key={n}>
        <div className="stars">★★★★★</div>
        <p>{q}</p>
        <div className="person">
         <span>{ini}</span>
         <div><strong>{n}</strong><small>{r}</small></div>
        </div>
       </article>
      )}
     </div>

    </div>
   </section>

   <section id="pricing" className="section pricing">
    <div className="container">

     <div className="center-head reveal">
      <span className="kicker">Simple, transparent pricing</span>
      <h2>Start free.<br/><span>Scale when ready.</span></h2>

      <div className="billing">
       <button className={annual?'active':''} onClick={()=>setAnnual(true)}>
        Annual <em>Save 20%</em>
       </button>
       <button className={!annual?'active':''} onClick={()=>setAnnual(false)}>
        Monthly
       </button>
      </div>
     </div>

     <div className="price-grid">
      <Price
       title="Starter"
       price={annual?0:0}
       desc="For individuals and tiny teams."
       features={['Up to 5 members','AI planning','Unlimited tasks','3 projects']}
      />

      <Price
       featured
       title="Growth"
       price={annual?16:20}
       desc="For teams ready to move faster."
       features={['Up to 25 members','Advanced AI Copilot','Unlimited projects','Automations','Analytics']}
      />

      <Price
       title="Scale"
       price={annual?39:49}
       desc="For growing organizations."
       features={['Unlimited members','Advanced permissions','Priority AI','Custom workflows','Dedicated support']}
      />
     </div>

    </div>
   </section>

   <section id="faq" className="section faq">
    <div className="container faq-grid">

     <div className="faq-intro reveal">
      <span className="kicker">Questions, answered</span>
      <h2>Good to know.</h2>
      <p>Still curious? Our team is one click away.</p>
      <button className="secondary" onClick={()=>setModal(true)}>
       Talk to us <ArrowRight size={16}/>
      </button>
     </div>

     <div className="faq-list">
      {faqs.map(([q,a],i)=>
       <div className={'faq-item reveal '+(open===i?'active':'')} key={q}>
        <button onClick={()=>setOpen(open===i?-1:i)}>
         <span>{q}</span>
         <ChevronDown size={18}/>
        </button>

        {open===i&&
         <div className="answer">
          <p>{a}</p>
         </div>
        }
       </div>
      )}
     </div>

    </div>
   </section>

   <section className="cta">
    <div className="container cta-inner reveal">

     <div>
      <span className="kicker">Ready when you are</span>
      <h2>Your best work is<br/><i>waiting.</i></h2>
     </div>

     <div>
      <p>Join thousands of teams building a smarter way to work.</p>
      <button className="primary light" onClick={()=>scroll('pricing')}>
       Start for free <ArrowRight size={18}/>
      </button>
      <small>No credit card required.</small>
     </div>

    </div>
   </section>

  </main>

  <footer>
   <div className="container footer-top">

    <div>
     <a className="brand" href="#top">
      <span className="brand-mark"><Sparkles size={17}/></span>NOVA
     </a>
     <p>Build better. Work smarter.</p>
    </div>

    <div className="footer-links">

     <div>
      <b>Product</b>
      <a href="#features">Features</a>
      <a href="#product">AI Copilot</a>
      <a href="#pricing">Pricing</a>
     </div>

     <div>
      <b>Company</b>
      <a href="#top">About</a>
      <a href="#top">Careers</a>
      <a href="#top">Contact</a>
     </div>

     <div>
      <b>Resources</b>
      <a href="#faq">FAQ</a>
      <a href="#top">Blog</a>
      <a href="#top">Guides</a>
     </div>

    </div>
   </div>

   <div className="container footer-bottom">
    <span>© 2026 NOVA. Fictional company for demonstration.</span>

    <div>
     <a href="#top"><Twitter size={16}/></a>
     <a href="#top"><Linkedin size={16}/></a>
     <a href="#top"><Github size={16}/></a>
    </div>
   </div>
  </footer>

  {modal&&
   <div className="modal-backdrop" onClick={()=>setModal(false)}>
    <div className="modal" onClick={e=>e.stopPropagation()}>

     <button className="modal-close" onClick={()=>setModal(false)}>
      <X/>
     </button>

     <div className="modal-icon"><Sparkles/></div>

     <h3>See NOVA in action</h3>
     <p>Enter your email and we'll send a product demo preview.</p>

     {sent?
      <div className="success">
       <Check/>
       <strong>You're on the list.</strong>
       <span>Thanks for your interest in NOVA.</span>
      </div>
      :
      <>
       <input
        value={email}
        onChange={e=>setEmail(e.target.value)}
        placeholder="you@company.com"
       />
       <button className="primary full" onClick={()=>email&&setSent(true)}>
        Request demo <ArrowRight size={17}/>
       </button>
      </>
     }

    </div>
   </div>
  }

 </div>
}

function Price({title,price,desc,features,featured}){
 return <article className={'price-card '+(featured?'featured':'')}>

  <div className="price-head">
   <span>{title}</span>
   {featured&&<em>Most popular</em>}
  </div>

  <p>{desc}</p>

  <div className="price">
   <strong>${price}</strong>
   <span>/ user / month</span>
  </div>

  <button className={featured?'primary full':'secondary full'}>
   Choose {title} <ArrowRight size={16}/>
  </button>

  <ul>
   {features.map(x=>
    <li key={x}><Check size={14}/>{x}</li>
   )}
  </ul>

 </article>
}

createRoot(document.getElementById('root')).render(<App/>);
