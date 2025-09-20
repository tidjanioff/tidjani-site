import React from 'react'
import styles from './WorkStyles.module.css'
import { useTheme } from '../../common/ThemeContext'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'
import knbLogoLight from '../../assets/logoKNBlight.png'
import knbLogoDark from '../../assets/logoKNBdark.png'

function Work() {
   const { theme, toggleTheme } = useTheme()
   
     const refTitle = useRef(null);
     const IsInViewTitle = useInView(refTitle, {once:true})
   
     const refCard1 = useRef(null);
     const IsInViewCard1 = useInView(refCard1, {once:true})
   
    const knbLogo = theme === "light" ? knbLogoLight : knbLogoDark;
     

  return (
    <section id='work'>
            <motion.h1
            ref={refTitle}
            initial={{y:-50}} animate={IsInViewTitle?{ y:0}:{}}
            transition={{duration:1}}
            style={{
              marginBottom:'50px',
            }}>Work Experience</motion.h1>
            <div className={styles.timelineContainer}>
              <motion.div
              ref={refCard1}
            initial={{y:-50, opacity:0}}
            animate={IsInViewCard1? {y:0, opacity:1}: {}}
            transition={{duration:1}}>
                <div 
            className={styles.timelineSection}>
              <h2 className={styles.timelineTitle}>Software Engineer Intern</h2>
              <h2 className={styles.periodTitle}>MAY 2025 &#x2014; AUGUST 2025</h2>
             
              <div className={styles.logoHead}>
                              <img src={knbLogo} className={styles.logo}
                              style={{width:120,}}/>
                            </div>
              
              <p>
              
         
                <div className={styles.keyFeaturesList}>
                    <span className={styles.bebold}>&#10551;</span> Designed and developed a full-stack internal web application for managing orders and deliveries.<br></br>
                    <span className={styles.bebold}>&#10551;</span> Optimized operations with streamlined order & delivery workflows and an interactive Kanban dashboard for real-time status updates. <br></br>
                    <span className={styles.bebold}>&#10551;</span> Enhanced financial visibility by implementing automated revenue tracking with clear reports by period and payment method.
                    </div>
              </p><br></br>
              <p><span className={styles.techUsed}>Django, JavaScript, HTML/CSS, Docker</span></p><br></br>
              
            </div>
              </motion.div>
     
         
            
            
            </div>
        </section>
  )
}

export default Work