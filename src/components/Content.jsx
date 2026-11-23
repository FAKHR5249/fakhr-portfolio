import { useState } from 'react'
import { ExternalLink, Github, Shield } from 'lucide-react'
import Section from './Section'
import { profile, skills, experience, projects, cyberTopics, cyberWork, education } from '../data/content'

export const About = () => (
  <Section id="about" title="About me">{profile.about.map((p, i) => <p key={i} className="body">{p}</p>)}</Section>
)

export const Skills = () => (
  <Section id="skills" title="Technical skills" intro="Levels are honest self-assessments. Most areas are still being learned.">
    <div className="grid">
      {skills.map(c => (
        <div className="card glass" key={c.title}>
          <h3>{c.title}</h3>
          {c.items.map(s => (
            <div className="skill" key={s.name}>
              <div className="skill-top"><span>{s.name}</span><em>{s.label}</em></div>
              <div className="bar" role="progressbar" aria-valuenow={s.level} aria-valuemin="0" aria-valuemax="100" aria-label={`${s.name}: ${s.label}`}><i style={{ '--w': `${s.level}%` }} /></div>
            </div>
          ))}
        </div>
      ))}
    </div>
  </Section>
)

export const Experience = () => (
  <Section id="experience" title="Experience">
    {experience.map(e => (
      <article className="card glass" key={e.company}>
        <h3>{e.role}, {e.company}</h3>
        <p className="muted">{e.dates}</p>
        <h4>Responsibilities</h4><ul>{e.responsibilities.map(r => <li key={r}>{r}</li>)}</ul>
        <h4>Achievements</h4><ul>{e.achievements.map(r => <li key={r}>{r}</li>)}</ul>
      </article>
    ))}
  </Section>
)

const cats = ['All', 'Machine Learning', 'AI', 'Web Development', 'Cybersecurity']
export function Projects() {
  const [cat, setCat] = useState('All')
  const list = projects.filter(p => cat === 'All' || p.category === cat)
  return (
    <Section id="projects" title="Projects">
      <div className="filters" role="group" aria-label="Filter projects">
        {cats.map(c => <button key={c} className={c === cat ? 'pill on' : 'pill'} aria-pressed={c === cat} onClick={() => setCat(c)}>{c}</button>)}
      </div>
      <div className="grid">
        {list.map(p => (
          <article className="card glass proj" key={p.title}>
            <div className="shot">{p.image ? <img src={p.image} alt={`${p.title} screenshot`} loading="lazy" /> : <span>Screenshot placeholder</span>}</div>
            <p className="muted">{p.category}{p.placeholder && ' (placeholder)'}</p>
            <h3>{p.title}</h3><p className="body">{p.description}</p>
            <div className="tags">{p.tech.map(t => <span key={t}>{t}</span>)}</div>
            <div className="btns sm">
              {p.github && <a className="btn" href={p.github} target="_blank" rel="noreferrer"><Github size={16} /> Code</a>}
              {p.demo && <a className="btn" href={p.demo} target="_blank" rel="noreferrer"><ExternalLink size={16} /> Live demo</a>}
            </div>
          </article>
        ))}
      </div>
    </Section>
  )
}

export const Cyber = () => (
  <Section id="cybersecurity" title="Cybersecurity" intro="Areas I am studying. Nothing here is claimed as professional experience.">
    <div className="tags big">{cyberTopics.map(t => <span key={t}><Shield size={14} /> {t}</span>)}</div>
    <div className="grid">
      {cyberWork.map(w => (
        <div className="card glass" key={w.type}><h3>{w.type}</h3><p className="muted">{w.status}</p><p className="body">{w.note}</p></div>
      ))}
    </div>
  </Section>
)

export const Education = () => (
  <Section id="education" title="Education">
    <div className="card glass"><h3>{education.degree}</h3><p className="body">{education.school}</p><p className="muted">{education.grad}</p></div>
  </Section>
)
