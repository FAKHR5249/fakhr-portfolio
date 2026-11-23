import useReveal from '../hooks/useReveal'
export default function Section({ id, title, intro, children }) {
  const ref = useReveal()
  return (
    <section id={id} className="section" aria-labelledby={`${id}-t`}>
      <div className="wrap reveal" ref={ref}>
        <h2 id={`${id}-t`}>{title}</h2>
        {intro && <p className="lead">{intro}</p>}
        {children}
      </div>
    </section>
  )
}
