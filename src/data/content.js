// ====== EDIT YOUR CONTENT HERE ======
export const profile = {
  name: 'Fakhr Ul Islam',
  headline: 'Software Engineer | AI/ML Enthusiast | Cybersecurity Learner',
  intro: 'BS Software Engineering student building practical software and learning how to make it intelligent and secure.',
  about: [
    'I am a Software Engineering student at COMSATS University Islamabad, Attock Campus, expecting to graduate in 2028. I enjoy turning ideas into working software, from web interfaces to the data and logic behind them.',
    'My interests sit at three points: software development, AI/ML (data analysis, feature engineering, model development) and cybersecurity (web and network security, OWASP Top 10, vulnerability assessment). I am an intern at AI Lab 99, where I am applying what I study to real work.',
    'I am early in my career and focused on learning in public: building projects, documenting what I learn, and improving every semester.'
  ],
  github: 'https://github.com/FAKHR5249',
  githubUser: 'FAKHR5249',
  email: 'your.email@example.com', // PLACEHOLDER
  linkedin: '', // PLACEHOLDER: e.g. https://www.linkedin.com/in/your-handle
  cv: '/Fakhr_Ul_Islam_CV.pdf',     // replace the file in /public
  photo: '/profile.jpg'             // add public/profile.jpg; initials show until then
}

// level: 0-100, label: shown on the card. Adjust to honestly reflect your current level.
export const skills = [
  { title: 'Programming', items: [
    { name: 'Python', level: 60, label: 'Intermediate' }, { name: 'Java', level: 50, label: 'Intermediate' },
    { name: 'JavaScript', level: 55, label: 'Intermediate' }, { name: 'PHP', level: 35, label: 'Learning' }] },
  { title: 'Web Development', items: [
    { name: 'HTML', level: 70, label: 'Comfortable' }, { name: 'CSS', level: 60, label: 'Intermediate' },
    { name: 'JavaScript', level: 55, label: 'Intermediate' }, { name: 'React', level: 45, label: 'Learning' }] },
  { title: 'Database', items: [
    { name: 'SQL', level: 50, label: 'Intermediate' }, { name: 'MongoDB', level: 35, label: 'Learning' }] },
  { title: 'AI & Machine Learning', items: [
    { name: 'Machine Learning Fundamentals', level: 40, label: 'Learning' }, { name: 'Data Analysis', level: 45, label: 'Learning' },
    { name: 'Feature Engineering', level: 35, label: 'Learning' }, { name: 'Scikit-learn', level: 40, label: 'Learning' },
    { name: 'Pandas', level: 45, label: 'Learning' }, { name: 'Model Development', level: 35, label: 'Learning' }] },
  { title: 'Cybersecurity', items: [
    { name: 'Cybersecurity Fundamentals', level: 40, label: 'Learning' }, { name: 'Network Security', level: 30, label: 'Learning' },
    { name: 'Web Security', level: 35, label: 'Learning' }, { name: 'OWASP Top 10', level: 35, label: 'Learning' },
    { name: 'Ethical Hacking Fundamentals', level: 30, label: 'Learning' }, { name: 'Vulnerability Assessment', level: 30, label: 'Learning' }] }
]

export const experience = [{
  role: 'Intern', company: 'AI Lab 99',
  dates: '[Start date] - [End date / Present]', // PLACEHOLDER
  responsibilities: ['[Add a responsibility]', '[Add a task you worked on]'], // PLACEHOLDER
  achievements: ['[Add a real, verifiable outcome, or delete this list]']
}]

// category: 'Machine Learning' | 'AI' | 'Web Development' | 'Cybersecurity'
// Replace placeholders with real projects. Set placeholder:false when real.
export const projects = [
  { category: 'Machine Learning', title: 'Machine Learning Project', placeholder: true,
    description: '[Placeholder] Describe the problem, dataset and result.', tech: ['Python', 'Scikit-learn', 'Pandas'], github: '', demo: '', image: '' },
  { category: 'AI', title: 'AI Project', placeholder: true,
    description: '[Placeholder] Describe what you built at AI Lab 99 or on your own, if shareable.', tech: ['Python'], github: '', demo: '', image: '' },
  { category: 'Web Development', title: 'Web Development Project', placeholder: true,
    description: '[Placeholder] Describe the app, your role and the stack.', tech: ['React', 'JavaScript', 'CSS'], github: '', demo: '', image: '' },
  { category: 'Cybersecurity', title: 'Cybersecurity Project', placeholder: true,
    description: '[Placeholder] A lab, tool or write-up. Mark honestly as in progress if unfinished.', tech: ['OWASP', 'Linux'], github: '', demo: '', image: '' }
]

export const cyberTopics = ['Network Security', 'Web Application Security', 'OWASP Top 10', 'Vulnerability Assessment', 'Ethical Hacking Fundamentals', 'Security Research and Learning']
export const cyberWork = [
  { type: 'Labs', status: 'In progress', note: '[Add lab platform and rooms you complete]' },
  { type: 'Tools', status: 'Learning', note: '[Add tools you have used, e.g. Nmap, Wireshark, Burp Suite]' },
  { type: 'Write-ups', status: 'Coming soon', note: '[Link write-ups once published]' },
  { type: 'Practical projects', status: 'Coming soon', note: '[Add projects here]' }
]
export const education = { degree: 'BS Software Engineering', school: 'COMSATS University Islamabad, Attock Campus', grad: 'Expected graduation: 2028' }
