import { useEffect, useState } from 'react'
import { ArrowUp, Github, Linkedin } from 'lucide-react'
import { profile } from '../data/content'
export default function Footer() {
  const [show, setShow] = useState(false)
  useEffect(() => { const f = () => setShow(scrollY > 600); addEventListener('scroll', f, { passive: true }); return () => removeEventListener('scroll', f) }, [])
  return (
    <>
      <footer className="footer"><div className="wrap foot">
        <p>&copy; {new Date().getFullYear()} {profile.name}. Built with React and Vite.</p>
        <div className="social">
          <a href={profile.github} aria-label="GitHub" target="_blank" rel="noreferrer"><Github size={20} /></a>
          {profile.linkedin && <a href={profile.linkedin} aria-label="LinkedIn" target="_blank" rel="noreferrer"><Linkedin size={20} /></a>}
        </div></div></footer>
      {show && <button className="top" aria-label="Back to top" onClick={() => scrollTo({ top: 0, behavior: 'smooth' })}><ArrowUp /></button>}
    </>
  )
}
