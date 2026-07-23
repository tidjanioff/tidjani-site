import { useState } from 'react'
import { AnimatePresence, motion as Motion } from 'framer-motion'
import styles from './WorkStyles.module.css'

const experiences = [

  {
    organization: 'KNB Food',
    role: 'Software Engineer Intern',
    period: 'May 2025 — August 2025',
    bullets: [
      'Designed and developed a full-stack internal system with Django, JavaScript, and SQL to manage orders and deliveries.',
      'Built a Kanban-style dashboard to track order status in real time.',
      'Implemented an automated accounting module for accurate revenue tracking and reporting.',
      'Containerized the application with Docker to simplify deployment and setup for internal users.',
    ],
    technologies: ['Django', 'JavaScript', 'SQL', 'Docker'],
  },
  {
    organization: 'CADUM',
    role: 'Mobile Application Developer',
    period: 'November 2025 — Present',
    bullets: [
      'Developing cross-platform mobile applications using React Native and TypeScript.',
      'Contributing to the development of StudyBuddy, a productivity app designed for university students.',
      'Designing and implementing features for Pomodoro-based study sessions, academic goal tracking, GPA calculation, and exam revision planning.',
      'Collaborating with a team of student developers throughout the development lifecycle.',
    ],
    technologies: ['React Native', 'TypeScript', 'StudyBuddy'],
  },
  {
    organization: 'Cercle Vinci',
    role: 'Software Developer Lead',
    period: 'September 2025 — Present',
    bullets: [
      'Contributing to the software development of the Veo Project, a research initiative developing artificial retina technology for visually impaired people.',
      'Working on image processing and tactile mapping logic using Python.',
      'Leading the development of the project’s official website.',
      'Implementing responsive layouts and interactive web interfaces to support project presentation using HTML, CSS, and JavaScript.',
    ],
    technologies: ['Veo Project', 'Python', 'HTML', 'CSS', 'JavaScript'],
  },
]

function highlightTechnologies(text, technologies) {
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

function Work() {
  const [activeIndex, setActiveIndex] = useState(0)
  const activeExperience = experiences[activeIndex]

  const handleTabKeyDown = (event) => {
    if (!['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
      return
    }

    event.preventDefault()
    const direction = ['ArrowRight', 'ArrowDown'].includes(event.key) ? 1 : -1
    const nextIndex = (activeIndex + direction + experiences.length) % experiences.length
    setActiveIndex(nextIndex)
    document.getElementById(`experience-tab-${nextIndex}`)?.focus()
  }

  return (
    <Motion.section
      id="work"
      className={styles.work}
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.65, ease: 'easeOut' }}
    >
      <div className={styles.heading}>
        <h1><span>/&nbsp;</span> experience</h1>
        <div className={styles.headingLine} aria-hidden="true" />
      </div>

      <div className={styles.experienceLayout}>
        <div className={styles.tabs} role="tablist" aria-label="Work experience">
          {experiences.map((experience, index) => (
            <button
              key={experience.organization}
              id={`experience-tab-${index}`}
              className={`${styles.tab} ${index === activeIndex ? styles.activeTab : ''}`}
              type="button"
              role="tab"
              aria-selected={index === activeIndex}
              aria-controls={`experience-panel-${index}`}
              tabIndex={index === activeIndex ? 0 : -1}
              onClick={() => setActiveIndex(index)}
              onKeyDown={handleTabKeyDown}
            >
              {experience.organization}
            </button>
          ))}
        </div>

        <AnimatePresence mode="wait">
          <Motion.article
            key={activeExperience.organization}
            id={`experience-panel-${activeIndex}`}
            className={styles.details}
            role="tabpanel"
            aria-labelledby={`experience-tab-${activeIndex}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25, ease: 'easeOut' }}
          >
            <h2 className={styles.roleTitle}>
              {activeExperience.role}{' '}
              &nbsp;<span>@ {activeExperience.organization}</span>
            </h2>
            <p className={styles.period}>{activeExperience.period}</p>

            <ul className={styles.description}>
              {activeExperience.bullets.map((bullet) => (
                <li key={bullet}>
                  {highlightTechnologies(bullet, activeExperience.technologies)}
                </li>
              ))}
            </ul>
          </Motion.article>
        </AnimatePresence>
      </div>
    </Motion.section>
  )
}

export default Work
