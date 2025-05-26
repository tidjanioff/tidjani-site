import React from 'react'
import styles from './AboutStyles.module.css'
import harvard from '../../assets/harvard.svg.png'
import udemLight from '../../assets/udem-light.png'
import udemDark from '../../assets/udem-dark.png'
import csmh from '../../assets/csmh.png'
import { useTheme } from '../../common/ThemeContext'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'

function About() {
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
  
  const udem = theme === "light" ? udemLight : udemDark;
  return (
    <section id='about'>
        <motion.h1
        ref={refTitle}
        initial={{y:-50}} animate={IsInViewTitle?{ y:0}:{}}
        transition={{duration:1}}
        style={{
          marginBottom:'50px',
        }}>About Me</motion.h1>
        <div className={styles.timelineContainer}>
          <motion.div
          ref={refCard1}
        initial={{y:-50, opacity:0}}
        animate={IsInViewCard1? {y:0, opacity:1}: {}}
        transition={{duration:1}}>
            <div 
        className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>2025 &#x2014; Present</h2>
          <h3 className={styles.timelineDescription}>&#128142; Deepening my knowledge in Software Engineering</h3>
          <p>Currently focused on practical skills in full-stack development, — designing and deploying web, mobile, and desktop applications.<br></br>
              This involves hands-on experience with DevOps workflows, cloud platforms, and UI/UX design.<br></br>
              I'm also exploring more advanced areas, with a strong interest in Artificial Intelligence, Machine Learning, and growing curiosity around cybersecurity and game development.
          </p>
        </div>
          </motion.div>
        <motion.div
        ref={refCard2}
        initial={{opacity:0}}
        animate={IsInViewCard2?{opacity:1}:{}}
        transition={{duration:1, delay:0.2}}
        >
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>January 2024 &#x2014; Present</h2>
          <h3 className={styles.timelineDescription}>&#127891; B.Sc. in Computer Science @ Université de Montréal </h3>
              <p>Building a solid academic foundation in computer science through a balanced mix of programming, systems, math, and user experience.<br></br>
                From writing code and understanding computer architecture to designing intuitive interfaces and modeling real-world problems, every course helps me think more like an engineer.<br></br>
                This blend of theory and hands-on learning is shaping how I approach software: with reliability, scalability, and the user in mind.
              </p>
              <div className={styles.logoHead}>
                <img src={udem} className={styles.logo}
                style={{width:155,}}/>
              </div>
        </div>
        </motion.div>
        <motion.div
        ref={refCard3}
        initial={{y:-50, opacity:0}}
        animate={IsInViewCard3? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.4}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>May 2024 &#x2014; July 2024</h2>
          <h3 className={styles.timelineDescription}>&#128142; Completed CS50P – Introduction to Programming with Python @ Harvard Online</h3>
          <p>Strengthened my programming fundamentals and problem-solving abilities by developing Python-based solutions to real-world problems. 
            Throughout this work, I also improved my algorithmic thinking and wrote clearer, more structured code.
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
        <motion.div
        ref={refCard4}
         initial={{y:100, opacity:0}}
        animate={IsInViewCard4? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.6}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>September 2021 &#x2014; July 2023</h2>
          <h3 className={styles.timelineDescription}>&#127891; High School Diploma – Mathematics and Physics (S1) @ Cours Sainte Marie de Hann</h3>
          <p>Completed a rigorous curriculum in mathematics and physics, which laid the groundwork for logical reasoning and analytical problem-solving.</p>
              <div className={styles.logoHead}>
                <img src={csmh} className={styles.logo}
                />
              </div>
        </div>
        </motion.div>
        
        </div>
    </section>
  )
}

export default About