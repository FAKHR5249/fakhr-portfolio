import { useEffect, useState } from 'react'
import { Github, Star } from 'lucide-react'
import Section from './Section'
import { profile } from '../data/content'
export default function GitHubRepos() {
  const [repos, setRepos] = useState(null)
  const [err, setErr] = useState(false)
  useEffect(() => {
    fetch(`https://api.github.com/users/${profile.githubUser}/repos?sort=updated&per_page=6`)
      .then(r => (r.ok ? r.json() : Promise.reject())).then(setRepos).catch(() => setErr(true))
  }, [])
  return (
    <Section id="github" title="GitHub" intro="Latest repositories, loaded live from my profile.">
      {!repos && !err && <p className="muted">Loading repositories...</p>}
      {err && <p className="muted">Could not load repositories right now. Visit the profile directly.</p>}
      {repos && repos.length === 0 && <p className="muted">No public repositories yet.</p>}
      <div className="grid">
        {repos?.map(r => (
          <a className="card glass repo" key={r.id} href={r.html_url} target="_blank" rel="noreferrer">
            <h3>{r.name}</h3><p className="body">{r.description || 'No description.'}</p>
            <p className="muted">{r.language || 'n/a'} <Star size={13} /> {r.stargazers_count}</p>
          </a>
        ))}
      </div>
      <p><a className="btn primary" href={profile.github} target="_blank" rel="noreferrer"><Github size={18} /> View GitHub profile</a></p>
    </Section>
  )
}
