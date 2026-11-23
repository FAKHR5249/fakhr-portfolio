import Navbar from './components/Navbar'
import Hero from './components/Hero'
import { About, Skills, Experience, Projects, Cyber, Education } from './components/Content'
import GitHubRepos from './components/GitHubRepos'
import Contact from './components/Contact'
import Footer from './components/Footer'
export default function App() {
  return (<><a className="skip" href="#about">Skip to content</a><Navbar /><main><Hero /><About /><Skills /><Experience /><Projects /><Cyber /><Education /><GitHubRepos /><Contact /></main><Footer /></>)
}
