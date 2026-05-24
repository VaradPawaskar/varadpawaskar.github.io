import './App.css'
import heroImg from './assets/hero.png'

const skills = [
  ['Languages', ['Python', 'Java', 'SQL', 'C++', 'Bash']],
  ['AI / ML / Data', ['PyTorch', 'Computer Vision', 'Diffusion Models', 'Deep Learning', 'scikit-learn', 'Data Analysis']],
  ['Robotics & Simulation', ['ROS / ROS2', 'Gazebo', 'SLAM', 'OpenCV', 'Motion Planning']],
  ['Backend & DevOps', ['Spring Boot', 'Spring Batch', 'REST APIs', 'Microservices', 'Docker', 'AWS', 'Git', 'PostgreSQL']],
]

const projects = [
  {
    icon: '🧠',
    title: 'Diffusion Models for Face Generation (DDPM & DDIM)',
    description:
      'Gathered and interpreted large-scale image data (CelebA) to train generative models using PyTorch. Compared DDPM and DDIM sampling methods to optimize quality and compute efficiency.',
    tags: ['PyTorch', 'DDPM', 'DDIM', 'CelebA', 'Generative Models'],
  },
  {
    icon: '🤖',
    title: 'ROS Obstacle Avoidance Robot',
    description:
      'Built an autonomous robot in ROS/Gazebo capable of real-time obstacle detection and avoidance using laser scan data and reactive navigation logic.',
    tags: ['ROS', 'Gazebo', 'Python', 'Sensor Fusion'],
  },
  {
    icon: '❤️',
    title: 'AI Healthguard',
    description:
      'Heart disease prediction system using classical ML and deep learning models, focused on feature engineering, interpretability, and a web-based screening workflow.',
    tags: ['scikit-learn', 'Python', 'Classification', 'Healthcare AI'],
  },
]

const experiences = [
  {
    role: 'Software Engineer',
    date: 'April 2023 - March 2025',
    company: 'Capgemini · Pune, India',
    bullets: [
      'Designed and delivered REST APIs and microservices using Java and Spring Boot for enterprise-scale applications.',
      'Deployed and managed services on AWS (EC2, S3, RDS), leveraging Docker for containerisation and consistent environments.',
      'Collaborated in Agile teams on end-to-end feature delivery, including requirements analysis, development, and production support.',
      'Optimised SQL queries and database schemas in PostgreSQL, improving query performance for high-volume data workloads.',
    ],
  },
]

const education = [
  {
    degree: 'Master of Science – Artificial Intelligence and Robotics',
    school: 'Hof University of Applied Sciences',
    meta: 'Hof, Germany · 15/03/2025 – Current',
  },
  {
    degree: 'Bachelor of Engineering – Electronics and Telecommunications Engineering',
    school: "Modern Education Society's College of Engineering (MESCOE)",
    meta: 'Pune, India · 08/2018 – 08/2022 · CGPA: 9.49',
  },
]

function App() {
  return (
    <div className="portfolio-shell">
      <style>{`
        :root {
          --navy: #16284d;
          --navy-light: #1e3460;
          --accent: #c07d35;
          --accent-hover: #a86a28;
          --text: #1c1c1c;
          --muted: #6b7280;
          --bg: #f7f6f2;
          --white: #ffffff;
          --border: #e2e0da;
          --card-bg: #ffffff;
          --tag-bg: #eef0f7;
          --tag-text: #2a3e6e;
          --radius: 8px;
          --radius-lg: 14px;
          --section-pad: 5rem 0;
          --max-w: 960px;
        }

        * { box-sizing: border-box; margin: 0; padding: 0; }
        html { scroll-behavior: smooth; font-size: 16px; }
        body { font-family: Inter, "Segoe UI", sans-serif; background: var(--bg); color: var(--text); line-height: 1.7, overflow-x: hidden; }
        a { text-decoration: none; }

        nav {
          position: sticky;
          top: 0;
          z-index: 100;
          background: var(--navy);
          padding: 0 2rem;
          display: flex;
          align-items: center;
          justify-content: space-between;
          height: 58px;
          box-shadow: 0 1px 0 rgba(255,255,255,0.06);
        }
        .nav-logo { color: #fff; font-size: 1.25rem; font-weight: 700; letter-spacing: 0.01em; }
        .nav-links { display: flex; gap: 1.75rem; list-style: none; }
        .nav-links a { color: rgba(255,255,255,0.72); font-size: 0.875rem; font-weight: 500; letter-spacing: 0.02em; text-transform: uppercase; }
        .nav-links a:hover { color: #fff; }

        .container { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; }
        section { padding: var(--section-pad); }
        .section-label { font-size: 0.75rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; color: var(--accent); margin-bottom: 0.5rem; }
        .section-title { font-size: 2rem; color: var(--navy); margin-bottom: 2.5rem; }
        .divider { width: 40px; height: 3px; background: var(--accent); border-radius: 2px; margin: 0.75rem 0 2.5rem; }

        #hero { background: var(--navy); padding: 6rem 0 5rem; position: relative; overflow: hidden; }
        #hero::before { content: ''; position: absolute; inset: 0; background: radial-gradient(ellipse 70% 60% at 85% 40%, rgba(192,125,53,0.12) 0%, transparent 70%), radial-gradient(ellipse 50% 80% at 10% 80%, rgba(255,255,255,0.03) 0%, transparent 60%); pointer-events: none; }
        .hero-inner { max-width: var(--max-w); margin: 0 auto; padding: 0 2rem; display: grid; grid-template-columns: 1fr auto; align-items: center; gap: 3rem; position: relative; }
        .hero-eyebrow { font-size: 0.8rem; font-weight: 700; letter-spacing: 0.12em; text-transform: uppercase; color: var(--accent); margin-bottom: 1rem; }
        .hero-name { font-size: clamp(2.5rem, 5vw, 3.75rem); color: #fff; font-weight: 700; line-height: 1.1; margin-bottom: 0.5rem; }
        .hero-title { font-size: 1.2rem; color: rgba(255,255,255,0.6); font-weight: 300; margin-bottom: 1.5rem; }
        .hero-desc { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 520px; line-height: 1.75; margin-bottom: 2rem; }
        .hero-ctas { display: flex; gap: 0.875rem; flex-wrap: wrap; }
        .btn-primary, .btn-outline { display: inline-block; padding: 0.65rem 1.5rem; border-radius: var(--radius); font-size: 0.9rem; font-weight: 600; transition: background 0.2s, border-color 0.2s, color 0.2s, transform 0.15s; }
        .btn-primary { background: var(--accent); color: #fff; }
        .btn-primary:hover { background: var(--accent-hover); transform: translateY(-1px); }
        .btn-outline { border: 1px solid rgba(255,255,255,0.25); color: rgba(255,255,255,0.8); }
        .btn-outline:hover { border-color: rgba(255,255,255,0.55); color: #fff; transform: translateY(-1px); }
        .hero-right { display: flex; flex-direction: column; align-items: center; gap: 1.25rem; }
        .hero-photo-wrapper { width: 260px; height: 260px; border-radius: 50%; border: 3px solid var(--accent); padding: 4px; background: rgba(255,255,255,0.05); }
        .hero-photo-wrapper img { width: 100%; height: 100%; border-radius: 50%; object-fit: cover; display: block; }
        .hero-badge-stack { display: flex; flex-direction: column; gap: 0.75rem; opacity: 0.85; }
        .hero-badge { background: rgba(255,255,255,0.07); border: 1px solid rgba(255,255,255,0.1); border-radius: var(--radius); padding: 0.6rem 1rem; font-size: 0.8rem; color: rgba(255,255,255,0.7); white-space: nowrap; text-align: center; }
        .hero-badge span { display: block; font-size: 1rem; font-weight: 700; color: #fff; }

        #skills { background: var(--white); }
        .skills-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 1.25rem; }
        .skill-category { background: var(--bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.25rem 1.4rem; }
        .skill-category-title { font-size: 0.72rem; font-weight: 700; letter-spacing: 0.09em; text-transform: uppercase; color: var(--navy); margin-bottom: 0.9rem; padding-bottom: 0.6rem; border-bottom: 1px solid var(--border); }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 0.4rem; }
        .tag { background: var(--tag-bg); color: var(--tag-text); font-size: 0.8rem; font-weight: 500; padding: 0.25rem 0.65rem; border-radius: 20px; }

        #projects { background: var(--bg); }
        .projects-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.4rem; }
        .project-card { background: var(--card-bg); border: 1px solid var(--border); border-radius: var(--radius-lg); padding: 1.5rem; display: flex; flex-direction: column; min-height: 100%; }
        .project-card:hover { transform: translateY(-3px); box-shadow: 0 8px 24px rgba(22,40,77,0.09); }
        .project-icon { width: 40px; height: 40px; border-radius: var(--radius); background: var(--navy); display: flex; align-items: center; justify-content: center; margin-bottom: 1rem; font-size: 1.1rem; }
        .project-title { font-size: 1.1rem; font-weight: 700; color: var(--navy); margin-bottom: 0.5rem; }
        .project-desc { font-size: 0.9rem; color: var(--muted); line-height: 1.65; flex: 1; margin-bottom: 1.1rem; }
        .project-tags { display: flex; flex-wrap: wrap; gap: 0.35rem; }
        .project-tag { background: #eef0f7; color: var(--tag-text); font-size: 0.75rem; font-weight: 700; padding: 0.2rem 0.6rem; border-radius: 20px; }

        #experience { background: var(--white); }
        .timeline { position: relative; }
        .timeline::before { content: ''; position: absolute; left: 7px; top: 8px; bottom: 0; width: 2px; background: var(--border); }
        .timeline-item { position: relative; padding-left: 2.5rem; margin-bottom: 2.5rem; }
        .timeline-item:last-child { margin-bottom: 0; }
        .timeline-dot { position: absolute; left: 0; top: 6px; width: 16px; height: 16px; border-radius: 50%; background: var(--accent); border: 3px solid var(--white); box-shadow: 0 0 0 2px var(--accent); }
        .exp-header { display: flex; align-items: flex-start; justify-content: space-between; gap: 1rem; margin-bottom: 0.4rem; flex-wrap: wrap; }
        .exp-role { font-size: 1.15rem; font-weight: 700; color: var(--navy); }
        .exp-date { font-size: 0.8rem; font-weight: 700; color: var(--accent); background: #fdf2e6; padding: 0.2rem 0.65rem; border-radius: 20px; white-space: nowrap; }
        .exp-company { font-size: 0.95rem; font-weight: 700; color: var(--muted); margin-bottom: 0.75rem; }
        .exp-list { list-style: none; }
        .exp-list li { font-size: 0.9rem; color: var(--text); padding-left: 1.1rem; position: relative; margin-bottom: 0.35rem; line-height: 1.65; }
        .exp-list li::before { content: '▸'; position: absolute; left: 0; color: var(--accent); font-size: 0.75rem; top: 3px; }

        #education { background: var(--bg); }
        .edu-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 1.25rem; }
        .edu-card { background: var(--white); border: 1px solid var(--border); border-left: 4px solid var(--accent); border-radius: var(--radius); padding: 1.35rem 1.5rem; }
        .edu-degree { font-size: 1.05rem; font-weight: 700; color: var(--navy); margin-bottom: 0.25rem; }
        .edu-school { font-size: 0.95rem; font-weight: 700; color: var(--text); margin-bottom: 0.2rem; }
        .edu-meta { font-size: 0.82rem; color: var(--muted); }

        #contact { background: var(--navy); padding: 5rem 0; text-align: center; }
        #contact .section-title { color: #fff; margin-bottom: 0.5rem; }
        #contact .divider { margin: 0.75rem auto 1.75rem; }
        #contact .section-label { color: var(--accent); }
        .contact-tagline { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 440px; margin: 0 auto 2.25rem; }
        .contact-links { display: flex; gap: 1rem; justify-content: center; flex-wrap: wrap; }
        .contact-link { display: flex; align-items: center; gap: 0.5rem; color: rgba(255,255,255,0.75); font-size: 0.95rem; font-weight: 500; padding: 0.65rem 1.4rem; border: 1px solid rgba(255,255,255,0.18); border-radius: var(--radius); }
        .contact-link:hover { background: rgba(255,255,255,0.1); color: #fff; border-color: rgba(255,255,255,0.35); }

        footer { background: #0f1e3a; text-align: center; padding: 1.2rem; font-size: 0.8rem; color: rgba(255,255,255,0.3); }

        // @media (max-width: 680px) {
        //   .hero-inner { grid-template-columns: 1fr; }
        //   .hero-right { display: none; }
        //   nav { padding: 0 1rem; }
        //   .nav-links { gap: 1rem; }
        //   .nav-links a { font-size: 0.78rem; }
        // }
        @media (max-width: 680px) {
          /* Navbar fixes */
          nav { 
            flex-direction: column; 
            height: auto; 
            padding: 1rem; 
            gap: 1rem; 
          }
          .nav-links { 
            flex-wrap: wrap; 
            justify-content: center; 
            gap: 0.75rem 1rem; 
          }
          .nav-links a { font-size: 0.78rem; }

          /* Hero section fixes */
          .hero-inner { 
            grid-template-columns: 1fr; 
            text-align: center; /* Centers the text on mobile */
            gap: 1.5rem;
          }
          
          /* Move the photo above the text on mobile */
          .hero-right { 
            order: -1; 
            margin-bottom: 1rem;
          }
          
          /* Shrink the photo slightly so it doesn't take up the whole screen */
          .hero-photo-wrapper { 
            width: 200px; 
            height: 200px; 
          }

          /* Center the buttons on mobile */
          .hero-ctas { 
            justify-content: center; 
          }
        }
      `}</style>

      <nav>
        <a href="#hero" className="nav-logo">About Me</a>
        <ul className="nav-links">
          <li><a href="#skills">Skills</a></li>
          <li><a href="#projects">Projects</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#education">Education</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </nav>

      <section id="hero">
        <div className="hero-inner">
          <div>
            <p className="hero-eyebrow">AI & Robotics Engineer</p>
            <h1 className="hero-name">Varad<br />Pawaskar</h1>
            <p className="hero-title">MSc Artificial Intelligence & Robotics · Hof University of Applied Sciences, Germany</p>
            <p className="hero-desc">
              Software engineer turned AI researcher — with 2 years of production experience at Capgemini and a strong focus on deep learning, computer vision, and robotic systems. Seeking AI/ML & Robotics internships in Germany.
            </p>
            <div className="hero-ctas">
              <a href="#projects" className="btn-primary">View Projects</a>
              <a href="#contact" className="btn-outline">Get in Touch</a>
            </div>
          </div>
          <div className="hero-right">
            <div className="hero-photo-wrapper">
              <img src={heroImg} alt="Varad Pawaskar" />
            </div>
            <div className="hero-badge-stack">
              <div className="hero-badge"><span>2+</span>Years Industry Exp.</div>
              <div className="hero-badge"><span>3</span>AI/ML Projects</div>
              <div className="hero-badge"><span>MSc</span>AI & Robotics</div>
            </div>
          </div>
        </div>
      </section>

      <section id="skills">
        <div className="container">
          <p className="section-label">Technical Skills</p>
          <div className="divider" />
          <div className="skills-grid">
            {skills.map(([title, tags]) => (
              <div className="skill-category" key={title}>
                <p className="skill-category-title">{title}</p>
                <div className="skill-tags">
                  {tags.map((tag) => (
                    <span className="tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="projects">
        <div className="container">
          <p className="section-label">Projects</p>
          <h2 className="section-title">What I've Built</h2>
          <div className="projects-grid">
            {projects.map((project) => (
              <div className="project-card" key={project.title}>
                <div className="project-icon">{project.icon}</div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-desc">{project.description}</p>
                <div className="project-tags">
                  {project.tags.map((tag) => (
                    <span className="project-tag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="experience">
        <div className="container">
          <p className="section-label">Work Experience</p>
          <h2 className="section-title">Professional History</h2>
          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={exp.role}>
                <div className="timeline-dot" />
                <div className="exp-header">
                  <p className="exp-role">{exp.role}</p>
                  <span className="exp-date">{exp.date}</span>
                </div>
                <p className="exp-company">{exp.company}</p>
                <ul className="exp-list">
                  {exp.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education">
        <div className="container">
          <p className="section-label">Education</p>
          <h2 className="section-title">Academic Background</h2>
          <div className="edu-grid">
            {education.map((item) => (
              <div className="edu-card" key={item.degree}>
                <p className="edu-degree">{item.degree}</p>
                <p className="edu-school">{item.school}</p>
                <p className="edu-meta">{item.meta}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contact">
        <div className="container">
          <p className="section-label">Get in Touch</p>
          <h2 className="section-title">Let's Connect</h2>
          <div className="divider" />
          <p className="contact-tagline">
            Open to AI/ML and Robotics internship opportunities in Germany. Feel free to reach out!
          </p>
          <div className="contact-links">
            <a href="tel:+4915510826707" className="contact-link">📞 +49 155 1082 6707</a>
            <a href="mailto:varadpawaskar@gmail.com" className="contact-link">✉️ varadpawaskar@gmail.com</a>
            <a href="https://linkedin.com/in/varad-pawaskar" target="_blank" rel="noreferrer" className="contact-link">🔗 LinkedIn</a>
            <a href="https://github.com/VaradPawaskar" target="_blank" rel="noreferrer" className="contact-link">🐙 GitHub</a>
          </div>
        </div>
      </section>

      <footer>
        © 2025 Varad Pawaskar · Built with React and Vite
      </footer>
    </div>
  )
}

export default App
