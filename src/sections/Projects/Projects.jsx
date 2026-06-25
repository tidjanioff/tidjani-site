import { motion as Motion } from 'framer-motion'
import astralinkPreview from '../../assets/astralink-preview.png'
import cadencePreview from '../../assets/schedule.png'
import styles from './ProjectsStyles.module.css'

const projects = [
  {
    title: 'Cadence',
    subtitle: 'Course Planning Platform',
    description:
      'A course planning platform designed to help students organize their academic path, manage course selections, and plan their degree progression more efficiently.',
    technologies: ['Java', 'React', 'PostgreSQL'],
    image: cadencePreview,
    liveDemo: 'https://cadence-ten-beta.vercel.app/',
    github: 'https://github.com/tidjanioff/cadence',
  },
  {
    title: 'AstraLink',
    subtitle: 'Space Launch Tracker',
    description:
      'A space launch tracker with historical reliability analytics across 700+ launches, per-agency and rocket family success rates, and AI-powered mission briefings generated via the Anthropic API.',
    technologies: ['Django', 'React', 'PostgreSQL'],
    image: astralinkPreview,
    liveDemo: 'https://astralink-pi.vercel.app/',
    github: 'https://github.com/tidjanioff/astra-link',
  },
]

function Projects() {
  return (
    <section id="projects" className={styles.projects}>
      <Motion.div
        className={styles.heading}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <h1><span>/&nbsp;</span> projects</h1>
        <div className={styles.headingLine} aria-hidden="true" />
        <a
          className={styles.allProjectsLink}
          href="https://github.com/tidjanioff"
          target="_blank"
          rel="noreferrer"
        >
          View all projects <span aria-hidden="true">→</span>
        </a>
      </Motion.div>

      <div className={styles.projectList}>
        {projects.map((project) => (
          <Motion.article
            key={project.title}
            className={styles.projectCard}
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.55, ease: 'easeOut' }}
          >
            <div className={styles.preview}>
              <img src={project.image} alt={`${project.title} interface preview`} />
            </div>
            <div className={styles.overlay} aria-hidden="true" />

            <div className={styles.content}>
              <p className={styles.projectTitle}>Featured Project</p>
              <h2>{project.title}</h2>
              <h3>{project.subtitle}</h3>
              <p className={styles.description}>{project.description}</p>

              <ul className={styles.technologies} aria-label={`${project.title} technologies`}>
                {project.technologies.map((technology) => (
                  <li key={technology}>{technology}</li>
                ))}
              </ul>

              <div className={styles.links}>
                <a href={project.liveDemo} target="_blank" rel="noreferrer">
                  Live Demo <span aria-hidden="true">↗</span>
                </a>
                <a href={project.github} target="_blank" rel="noreferrer">
                  GitHub <span aria-hidden="true">↗</span>
                </a>
              </div>
            </div>
          </Motion.article>
        ))}
      </div>
    </section>
  )
}

export default Projects
