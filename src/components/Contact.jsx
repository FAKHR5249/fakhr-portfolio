import { useState } from 'react'
import { Mail, Github, Linkedin, Send, Phone } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/content'
const FORM_ID = import.meta.env.VITE_FORMSPREE_ID
export default function Contact() {
  const [status, setStatus] = useState('idle')
  async function submit(e) {
    e.preventDefault()
    const f = e.currentTarget, d = Object.fromEntries(new FormData(f))
    if (!FORM_ID) { // fallback: open the visitor's email app
      location.href = `mailto:${profile.email}?subject=${encodeURIComponent(d.subject)}&body=${encodeURIComponent(`${d.message}\n\nFrom: ${d.name} (${d.email})`)}`
      return
    }
    setStatus('sending')
    try {
      const r = await fetch(`https://formspree.io/f/${FORM_ID}`, { method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' }, body: JSON.stringify(d) })
      if (!r.ok) throw new Error()
      setStatus('sent'); f.reset()
    } catch { setStatus('error') }
  }
  return (
    <Section id="contact" title="Contact me" intro="Send a message about internships, projects or collaboration.">
      <div className="contact">
        <ul className="info">
          <li><Mail size={18} /> <a href={`mailto:${profile.email}`}>{profile.email}</a></li>
          <li><Phone size={18} /> <a href="tel:+923215719833">+92 321 5719833</a> · <a href="https://wa.me/923215719833" target="_blank" rel="noreferrer">WhatsApp</a></li>
          <li><Linkedin size={18} /> <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn</a></li>
          <li><Github size={18} /> <a href={profile.github} target="_blank" rel="noreferrer">github.com/{profile.githubUser}</a></li>
        </ul>
        <form className="glass form" onSubmit={submit}>
          <label>Name<input name="name" required autoComplete="name" /></label>
          <label>Email<input name="email" type="email" required autoComplete="email" /></label>
          <label>Subject<input name="subject" required /></label>
          <label>Message<textarea name="message" rows="5" required /></label>
          <button className="btn primary" disabled={status === 'sending'}><Send size={16} /> {status === 'sending' ? 'Sending...' : 'Send message'}</button>
          <p role="status" className="muted">
            {status === 'sent' && 'Message sent. Thank you.'}
            {status === 'error' && 'Message failed to send. Please try again or use email.'}
          </p>
        </form>
      </div>
    </Section>
  )
}
