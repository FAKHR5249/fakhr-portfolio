import { useState } from 'react'
import { Download, Mail, FolderGit2 } from 'lucide-react'
import { profile } from '../data/content'
export default function Hero() {
  const [bad, setBad] = useState(false)
  return (
    <section id="home" className="hero">
      <div className="blob b1" /><div className="blob b2" />
      <div className="wrap hero-in">
        <div>
          <p className="chip">Open to internships and freelance work</p>
          <h1>{profile.name}</h1>
          <p className="headline">{profile.headline}</p>
          <p className="lead">{profile.intro}</p>
          <div className="btns">
            <a className="btn primary" href="#projects"><FolderGit2 size={18} /> View My Projects</a>
            <a className="btn" href={profile.cv} download><Download size={18} /> Download CV</a>
            <a className="btn" href="#contact"><Mail size={18} /> Contact Me</a>
          </div>
        </div>
        <div className="avatar glass">
          {bad ? <span>FI</span> : <img src={profile.photo} alt={`Portrait of ${profile.name}`} onError={() => setBad(true)} width="280" height="280" />}
        </div>
      </div>
    </section>
  )
}
