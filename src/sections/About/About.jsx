import { motion as Motion } from 'framer-motion'
import tidjani from '../../assets/tidjani.jpg'
import styles from './AboutStyles.module.css'

const technologies = [
  'Java',
  'C# / .NET',
  'Python',
  'JavaScript',
  'TypeScript',
  'Django',
  'React.js',
  'React Native',
  
  ,
]

function About() {
  return (
    <Motion.section
      id="about"
      className={styles.about}
      initial={{ opacity: 0, y: 36 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.7, ease: 'easeOut' }}
    >
      <div className={styles.heading}>
        <h1><span>/&nbsp;</span> about me</h1>
        <div className={styles.headingLine} aria-hidden="true" />
      </div>

      <div className={styles.content}>
        <div className={styles.copy}>
          <p>
            I’m <strong>Tidjani</strong>, a Software Developer and CS student at <strong>Université de Montréal</strong>, working toward a career in Software Engineering and 
            building software that solves real-world problems.
          </p>

          <p>
            My work focuses on backend engineering, software systems, and I'm currently expanding into AI integration and software tooling. 
            My main focus right now is <strong>Rekat</strong>, a plug-in developed in collaboration with <strong>BPA</strong> to improve interoperability between BIM models and Wi-Fi 
            planning workflows, making the exchange between Autodesk Revit and Ekahau AI Pro more reliable, maintainable, and usable in real-world engineering contexts.
          </p>

          <p>Here are some technologies I’ve been working with:</p>

          <ul className={styles.technologies}>
            {technologies.map((technology) => (
              <li key={technology}>{technology}</li>
            ))}
          </ul>

          <p>
            Outside of software, I create YouTube content where I share thoughts on technology, learning, and the way digital tools influence our daily lives.
          </p>
        </div>

        <div className={styles.portraitWrapper}>
          <img
            className={styles.portrait}
            src={tidjani}
            alt="Tidjani Diop"
          />
        </div>
      </div>
    </Motion.section>
  )
}

export default About
