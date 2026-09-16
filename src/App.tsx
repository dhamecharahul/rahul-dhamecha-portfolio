import { useState } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import {
  ArrowDown, ArrowUpRight, BriefcaseBusiness, Cloud, Code2, Database,
  Download, Github, Linkedin, Mail, Menu, Server, Sparkles, Terminal, X
} from "lucide-react";

const experience = [
  { company: "Synechron Technologies", role: "Lead of Technology", date: "May 2025 – Present", text: "Technology strategy, architecture, scalable applications, technical leadership, DevOps and stakeholder collaboration." },
  { company: "Randstad Digital", role: "Senior Associate", date: "Mar 2025 – May 2025", text: "Scalable APIs, microservices, database design, architecture, code quality and delivery." },
  { company: "Publicis: Resources", role: "Team / Tech Lead", date: "Oct 2023 – Jan 2025", text: "Led a 15-member team across microservices, Python/Django, React, Node.js, databases and AWS." },
  { company: "Infostretch", role: "Tech / Team Lead", date: "Nov 2021 – Oct 2023", text: "Technical guidance, architecture, mentoring, planning, quality and stakeholder communication." },
  { company: "Mobiquity Inc", role: "Principal Engineer", date: "Jun 2018 – Oct 2021", text: "Full-stack architecture, sprint refinement, technical problem solving and delivery." },
  { company: "Sooryen Technologies / Encora", role: "Full Stack Engineer", date: "Dec 2017 – Jun 2018", text: "MEAN/MERN, REST APIs, SQL/NoSQL databases and responsive applications." },
  { company: "Volansys Technologies", role: "Full Stack Engineer", date: "Mar 2015 – Jul 2017", text: "Full-stack development, code reviews, performance, testing and cross-team delivery." },
  { company: "Earlier Experience", role: "Software Engineer / PHP Developer", date: "2011 – 2015", text: "Web development, APIs, SQL, PHP frameworks and application delivery." },
];

const projects = [
  {
    title: "Insurance & Device Protection Platform",
    description: "Customer self-service, policy and plan management, claims workflows, eligibility and partner integrations.",
    stack: ["Python", "Django", "React", "PostgreSQL", "MongoDB", "Redis", "AWS"],
  },
  {
    title: "Enterprise Microservices Platform",
    description: "Scalable services and APIs with cloud deployment, database integrations, observability and CI/CD practices.",
    stack: ["Python", "FastAPI", "NodeJs", "Express", "React", "Angular", "REST", "AWS", "Microservices", "Redis"],
  },
  {
    title: "Printing / Enterprise Solutions",
    description: "Full-stack enterprise applications with technical leadership, workflow integrations and scalable web architecture.",
    stack: ["Python", "Django", "React", "Nodejs", "Javascript", "typescript", "AWS", "PostgreSQL", "Mysql", "MongoDB", "DyanmoDB", "Redis"],
  },
];

const skills = {
  "Backend": ["Python", "Django", "FastAPI", "Nodejs", "Express","REST APIs", "Microservices"],
  "Frontend": ["React.js", "Angular", "TypeScript", "JavaScript", "HTML5", "CSS"],
  "AWS Cloud": ["EC2", "Lambda", "SQS", "SNS", "CloudWatch", "ECS", "EKS", "ECR", "DynamoDB", "Aurora", "IAM"],
  "Data": ["PostgreSQL", "MySQL", "MongoDB", "Redis", "CouchDB", "SQL / NoSQL"],
  "DevOps": ["CI/CD", "Git", "Bitbucket", "Automated Testing", "Deployment", "Release Management"],
  "Architecture": ["System Design", "Distributed Systems", "Cloud-Native", "Scalability", "Security", "Performance"],
};

function App() {
  const [open, setOpen] = useState(false);
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 100, damping: 30 });

  const go = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  return (
    <div className="app">
      <motion.div className="progress" style={{ scaleX }} />
      <header className="nav">
        <button className="brand" onClick={() => go("home")}>RD<span>.</span></button>
        <nav className={open ? "navlinks open" : "navlinks"}>
          {["about","skills","projects","experience","contact"].map(x =>
            <button key={x} onClick={() => go(x)}>{x}</button>
          )}
        </nav>
        <div className="nav-actions">
          <a className="icon-link" href="https://github.com/" target="_blank" aria-label="GitHub"><Github size={18}/></a>
          <button className="menu" onClick={() => setOpen(!open)} aria-label="Menu">{open ? <X/> : <Menu/>}</button>
        </div>
      </header>

      <main>
        <section id="home" className="hero section">
          <div className="hero-copy">
            <motion.div initial={{opacity:0,y:20}} animate={{opacity:1,y:0}} transition={{duration:.6}} className="eyebrow">
              <Sparkles size={15}/> LEAD ENGINEER
            </motion.div>
            <motion.h1 initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.7,delay:.1}}>
              Building scalable<br/><span>Full Stack</span><br/>solutions.
            </motion.h1>
            <p className="lead">14+ years of full-stack engineering experience across Python, Django, FastAPI, Nodejs, React, AWS, DevOps and technical leadership.</p>
            <div className="cta-row">
              <button className="btn primary" onClick={() => go("projects")}>View My Work <ArrowDown size={17}/></button>
              <a className="btn ghost" href="/Rahul_Dhamecha_Technical_Lead.pdf" download>Download Resume <Download size={17}/></a>
            </div>
            <div className="stats">
              <div><strong>14+</strong><span>Years Experience</span></div>
              <div><strong>5+</strong><span>Years Leadership</span></div>
              <div><strong>5–15</strong><span>Team Size</span></div>
            </div>
          </div>

          <div className="architecture-card">
            <div className="grid-bg"/>
            <div className="terminal-top"><span/><span/><span/><small>rahul@engineering:~$</small></div>
            <svg className="lines" viewBox="0 0 520 430" preserveAspectRatio="none">
              <path d="M110 105 C180 105 170 215 260 215 S340 105 420 105" />
              <path d="M110 215 C190 215 210 215 260 215 S330 215 420 215" />
              <path d="M110 325 C180 325 190 215 260 215 S350 325 420 325" />
            </svg>
            <div className="node n1" style={{ left: "5.15%", top: "24.4%" }}><Code2/> Python</div>
            <div className="node n2" style={{ left: "80.77%", top: "24.4%" }}><Server/> Nodejs</div>
            <div className="node n3" style={{ left: "1.15%", top: "50%" }}><Terminal/> Django/FastAPI</div>
            <div className="node n4" style={{ left: "80.77%", top: "50%" , width: "max-content"}}><Terminal/> Express</div>
            <div className="node n5" style={{ left: "5.15%", top: "75.6%", width: "max-content" }}><Cloud/> AWS</div>
            <div className="node n6" style={{ left: "80.77%", top: "75.6%" }}><Database/> Data</div>
            <div className="core"><span>FULL-STACK</span><b>ENGINEERING</b><small>Python · Cloud · DevOps</small></div>
          </div>
        </section>

        <section id="about" className="section">
          <SectionTitle kicker="01 / ABOUT" title="Engineering with a builder's mindset." />
          <div className="about-grid">
            <div className="about-text">
              <p>I am a technology leader focused on building reliable, scalable and maintainable software. My strongest positioning is at the intersection of <b>Python + Nodejs backend engineering, full-stack development, AWS cloud and technical leadership.</b></p>
              <p>I work across architecture, implementation, code reviews, mentoring, Agile delivery, performance, DevOps and stakeholder communication — acting as a hands-on bridge between engineering and business.</p>
            </div>
            <div className="quote-card">
              <span>PLAYER-COACH</span>
              <h3>Technical depth + leadership.</h3>
              <p>Architecture decisions, hands-on development, mentoring and delivery ownership.</p>
            </div>
          </div>
        </section>

        <section id="skills" className="section muted">
          <SectionTitle kicker="02 / EXPERTISE" title="Tools I use to solve problems." />
          <div className="skill-grid">
            {Object.entries(skills).map(([group, items], i) =>
              <motion.div key={group} className="skill-card" initial={{opacity:0,y:25}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.06}}>
                <span className="card-number">0{i+1}</span><h3>{group}</h3>
                <div className="chips">{items.map(x=><span key={x}>{x}</span>)}</div>
              </motion.div>
            )}
          </div>
        </section>

        <section id="projects" className="section">
          <SectionTitle kicker="03 / SELECTED WORK" title="Projects that show the architecture." />
          <div className="project-grid">
            {projects.map((p,i)=>
              <motion.article className="project" key={p.title} initial={{opacity:0,y:30}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.1}}>
                <div className="project-icon"><Server size={22}/></div>
                <span className="project-index">0{i+1}</span>
                <h3>{p.title}</h3><p>{p.description}</p>
                <div className="chips">{p.stack.map(x=><span key={x}>{x}</span>)}</div>
              </motion.article>
            )}
          </div>
        </section>

        <section className="section cloud-section">
          <SectionTitle kicker="04 / CLOUD ARCHITECTURE" title="From API to production." />
          <div className="cloud-flow">
            {["Client","Load Balancer","Django / FastAPI","PostgreSQL / MongoDB","AWS + DevOps"].map((x,i)=>
              <motion.div key={x} className="flow-item" initial={{opacity:0,x:-20}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.12}}>
                <span>{String(i+1).padStart(2,"0")}</span><b>{x}</b>{i<4 && <ArrowUpRight className="flow-arrow"/>}
              </motion.div>
            )}
          </div>
        </section>

        <section id="experience" className="section">
          <SectionTitle kicker="05 / EXPERIENCE" title="A decade-plus of building and leading." />
          <div className="timeline">
            {experience.map((e,i)=>
              <motion.div className="timeline-row" key={e.company} initial={{opacity:0,x:-25}} whileInView={{opacity:1,x:0}} viewport={{once:true}} transition={{delay:i*.06}}>
                <div className="timeline-dot"/>
                <div className="timeline-date">{e.date}</div>
                <div className="timeline-main"><h3>{e.company}</h3><b>{e.role}</b><p>{e.text}</p></div>
              </motion.div>
            )}
          </div>
        </section>

        <section id="contact" className="section contact-section">
          <div className="contact-box">
            <div>
              <span className="eyebrow">06 / CONTACT</span>
              <h2>Let's build something<br/><span>worth shipping.</span></h2>
              <p>Open to Python Lead Engineer, Full-Stack Engineering and technical leadership opportunities.</p>
            </div>
            <div className="contact-links">
              <a href="mailto:errahuldhamecha@gmail.com"><Mail/> Email me <ArrowUpRight/></a>
              <a href="https://www.linkedin.com/in/rahul-r-dhamecha-1571b436" target="_blank"><Linkedin/> LinkedIn <ArrowUpRight/></a>
            </div>
          </div>
        </section>
      </main>

      <footer><span>© {new Date().getFullYear()} Rahul Dhamecha</span><span>Python • AWS • Full-Stack • DevOps</span></footer>
    </div>
  );
}

function SectionTitle({kicker,title}:{kicker:string,title:string}) {
  return <div className="section-title"><span>{kicker}</span><h2>{title}</h2></div>;
}
export default App;