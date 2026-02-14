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
        transition={{duration:1, delay:0.1}}
        >
        <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>January 2024 &#x2014; Present</h2>
          <h3 className={styles.timelineDescription}>B.Sc. in Computer Science @ UMontreal</h3>
              <p>Strengthening my engineering foundations through rigorous coursework in algorithms, data structures, databases, 
                operating systems, and software design. 

              </p>
              <div className={styles.logoHead}>
                <img src={udem} className={styles.logo}
                style={{width:135,}}/>
              </div>
        </div>
        </motion.div>

        <motion.div
        ref={refCard2}
        initial={{opacity:0}}
        animate={IsInViewCard2?{opacity:1}:{}}
        transition={{duration:0.8, delay:0.1}}
        >
        <div className={styles.timelineSection}>
            <div className={styles.logoHead}>
                <img src={tidjani} className={styles.tidjani}
                />
              </div>
          <h2 className={styles.timelineTitle}>TIDJANI D.</h2>
          <h3 className={styles.timelineDescription}>Software Engineer in Training</h3>
        
              <p>Focused on designing, architecting & building reliable and scalable software systems.
              </p>
              
        </div>
        </motion.div>

        <motion.div
        ref={refCard4}
         initial={{y:100, opacity:0}}
        animate={IsInViewCard4? {y:0, opacity:1}:{}}
        transition={{duration:0.8, delay:0.1}}
        >
          <div className={styles.timelineSection}>
          <h2 className={styles.timelineTitle}>September 2021 &#x2014; July 2023</h2>
          <h3 className={styles.timelineDescription}>High School Diploma in Maths & Physics <br></br>@ Cours Sainte Marie de Hann</h3>
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