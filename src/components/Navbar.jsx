import { useState } from 'react'
import { Menu, X } from 'lucide-react'
const links = ['about', 'skills', 'experience', 'projects', 'cybersecurity', 'education', 'github', 'contact']
export default function Navbar() {
  const [open, setOpen] = useState(false)
  return (
    <header className="nav">
      <div className="wrap nav-in">
        <a href="#home" className="brand">Fakhr<span>.</span></a>
        <button className="icon-btn menu" aria-label="Toggle menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        <nav className={open ? 'links open' : 'links'} aria-label="Main">
          {links.map(l => <a key={l} href={`#${l}`} onClick={() => setOpen(false)}>{l[0].toUpperCase() + l.slice(1)}</a>)}
        </nav>
      </div>
    </header>
  )
}
