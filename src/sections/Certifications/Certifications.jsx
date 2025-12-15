import React from 'react'
import styles from './CertificationsStyles.module.css'
import harvard from '../../assets/harvard.svg.png'
import google from '../../assets/google.png'
import { useTheme } from '../../common/ThemeContext'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'

function Certifications() {
  const { theme, toggleTheme } = useTheme()

  const refTitle = useRef(null);
  const IsInViewTitle = useInView(refTitle, {once:true})

  const refCard1 = useRef(null);
  const IsInViewCard1 = useInView(refCard1, {once:true})

  const refCard2 = useRef(null);
  const IsInViewCard2 = useInView(refCard2, {once:true})

  const refCard3 = useRef(null);
  const IsInViewCard3 = useInView(refCard3, {once:true})

  const refCard4 = useRef(null);
  const IsInViewCard4 = useInView(refCard4, {once:true})
  
  
  return (
    <section id='certifications'>
        <motion.h1
        ref={refTitle}
        initial={{y:-50}} animate={IsInViewTitle?{ y:0}:{}}
        transition={{duration:1}}
        style={{
          marginBottom:'50px',
        }}>Certifications</motion.h1>
        <div className={styles.timelineContainer}>

        <motion.div
        ref={refCard3}
        initial={{y:-50, opacity:0}}
        animate={IsInViewCard3? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.1}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>July 2024 &#x2014; December 2025</h2>
          <h3 className={styles.timelineDescription}>&#128142; Completed CS50W – Web Programming with Python and JavaScript @ Harvard Online</h3>
          <p> Developed solid web development skills by building full-stack applications with Python and JavaScript. 
  This experience improved my understanding of backend logic, data persistence, and application structure.
            </p>
          <div className={styles.logoHead}>
            <img src={harvard} className={styles.logo}/>
          </div>
          <div className={styles.linkHead}>
            <a href='https://cs50.harvard.edu/certificates/6308ebbe-0551-47c4-a698-ec30cc543875' target='_blank' className={styles.link}>
              <button>View Certificate</button>
            </a>
          </div>
        </div>
        </motion.div>
          
        <motion.div
        ref={refCard1}
        initial={{y:-50, opacity:0}}
        animate={IsInViewCard1? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.2}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>June 2025 &#x2014; August 2025</h2>
          <h3 className={styles.timelineDescription}>&#128142; Certified in Foundations of Project Management @ Google</h3>
          <p>Built a solid grounding in project management by exploring the full project life cycle, from initiation to closure. 
            Enhanced my skills in setting priorities, coordinating tasks, and communicating clearly with stakeholders.
            </p>
          <div className={styles.logoHead}>
            <img src={google} className={styles.logo}/>
          </div>
          <div className={styles.linkHead}>
            <a href='https://coursera.org/share/fa7840e51b9d45592beb40b11b068e83' target='_blank' className={styles.link}>
              <button>View Certificate</button>
            </a>
          </div>
        </div>
        </motion.div>

        <motion.div
        ref={refCard2}
        initial={{y:-50, opacity:0}}
        animate={IsInViewCard2? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.3}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>May 2024 &#x2014; July 2024</h2>
          <h3 className={styles.timelineDescription}>&#128142; Completed CS50P – Introduction to Programming with Python @ Harvard Online</h3>
          <p>Strengthened my programming fundamentals and problem-solving skills by building Python solutions to real-world problems. 
            Along the way, I also sharpened my algorithmic thinking and wrote clearer, more structured code.
            </p>
          <div className={styles.logoHead}>
            <img src={harvard} className={styles.logo}/>
          </div>
          <div className={styles.linkHead}>
            <a href='https://certificates.cs50.io/2972b467-23f1-4fc2-b79f-5e17b623817f.pdf' target='_blank' className={styles.link}>
              <button>View Certificate</button>
            </a>
          </div>
        </div>
        </motion.div>

        
 
        
        </div>
    </section>
  )
}

export default Certifications