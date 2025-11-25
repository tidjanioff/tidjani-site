import React from 'react'
import styles from './AboutStyles.module.css'
import udemLight from '../../assets/udem-light.png'
import udemDark from '../../assets/udem-dark.png'
import csmh from '../../assets/csmh.png'
import tidjani from '../../assets/tidjani.jpg'
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
        ref={refCard2}
        initial={{y:-100, opacity:0}}
        animate={IsInViewCard2?{y:0, opacity:1}:{}}
        transition={{duration:1}}
        >
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>January 2024 &#x2014; Present</h2>
          <h3 className={styles.timelineDescription}>&#127891; B.Sc. in Computer Science @ Université de Montréal </h3>
              <p>Building a strong foundation in computer science through programming, systems, math, and user experience, every course helps me think more like an engineer.  
This mix of theory and practice is shaping how I approach software: reliable, scalable, and user-focused.

              </p>
              <div className={styles.logoHead}>
                <img src={udem} className={styles.logo}
                style={{width:155,}}/>
              </div>
        </div>
        </motion.div>

        <motion.div
        ref={refCard2}
        initial={{opacity:0}}
        animate={IsInViewCard2?{opacity:1}:{}}
        transition={{duration:1, delay:0.1}}
        >
        <div className={styles.timelineSection}>
            <div className={styles.logoHead}>
                <img src={tidjani} className={styles.tidjani}
                />
              </div>
          <h2 className={styles.timelineTitle}>TIDJANI D.</h2>
          <h3 className={styles.timelineDescription}>&#128104;&#127998;&#8205;&#128187; Aspiring Software Engineer</h3>
        
              <p>Focused on building smart, well-designed, and user-centered solutions, with an academic emphasis on 
                Software Engineering and Artificial Intelligence, complemented by ongoing training in Project Management.
              </p>
              
        </div>
        </motion.div>

        <motion.div
        ref={refCard4}
         initial={{y:100, opacity:0}}
        animate={IsInViewCard4? {y:0, opacity:1}:{}}
        transition={{duration:1, delay:0.2}}
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