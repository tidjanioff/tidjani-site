import { motion as Motion } from 'framer-motion'
import styles from './CapstoneStyles.module.css'

const capstoneBullets = [
  'Developing an Autodesk Revit plug-in in collaboration with BPA to improve the reliability of data exchanges between BIM models and Wi-Fi planning projects created in Ekahau AI Pro.',
  "Refactoring the plug-in's export functionality to reduce its dependency on Ekahau AI Pro, improving long-term maintainability and flexibility.",
  'Designing and improving the user interface with WPF/XAML, clarifying import/export flows and error feedback to support engineering teams using the plug-in.',
]

const technologies = ['Autodesk Revit', 'BPA', 'BIM', 'Wi-Fi', 'Ekahau AI Pro', 'WPF/XAML']

function highlightTechnologies(text) {
  const pattern = new RegExp(`(${technologies.join('|')})`, 'g')

  return text.split(pattern).map((part, index) =>
    technologies.includes(part) ? (
      <strong key={`${part}-${index}`} className={styles.technology}>
        {part}
      </strong>
    ) : (
      part
    ),
  )
}

function Capstone() {
  return (
    <Motion.section
      id="capstone"
      className={styles.capstone}
      initial={{ opacity: 0, y: 28 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
    >
      <div className={styles.heading}>
        <h1><span>/&nbsp;</span> capstone project</h1>
        <div className={styles.headingLine} aria-hidden="true" />
      </div>

      <article className={styles.entry}>
        <div className={styles.meta}>
          <p className={styles.period}>Mar 2026 - Present</p>
          <p className={styles.tech}>C#, .NET, WPF/XAML</p>
        </div>

        <div className={styles.details}>
          <h2>Autodesk Revit Plug-in</h2>

          <ul className={styles.description}>
            {capstoneBullets.map((bullet) => (
              <li key={bullet}>{highlightTechnologies(bullet)}</li>
            ))}
          </ul>

          <a
            className={styles.trackingLink}
            href="https://tidjanioff.github.io/ift3150-suivi/"
            target="_blank"
            rel="noreferrer"
          >
            Project Tracking <span aria-hidden="true">↗</span>
          </a>
        </div>
      </article>
    </Motion.section>
  )
}

export default Capstone
