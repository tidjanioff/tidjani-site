import { motion as Motion } from 'framer-motion'
import styles from './ContactStyles.module.css'

function Contact() {
  return (
    <Motion.section
      id="contact"
      className={styles.contact}
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.4 }}
      transition={{ duration: 0.55, ease: 'easeOut' }}
    >
      <h1>Let’s build something.</h1>
      <p className={styles.skillsLine}>Java · Python · C#/.NET · React</p>
      <p>
        CS student building full-stack systems, from backend logic to the interfaces people use.
      </p>
      <a className={styles.contactButton} href="mailto:tidjanioff@gmail.com">
        Get in touch
      </a>
    </Motion.section>
  )
}

export default Contact
