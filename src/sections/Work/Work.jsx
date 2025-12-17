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
                    <div className={styles.keyFeaturesItem}><span className={styles.bebold}>&#8594;</span> Designed and developed a full-stack internal system with <span className={styles.techUsed}>Django</span>, <span className={styles.techUsed}>Javascript</span> and <span className={styles.techUsed}>SQL</span> to manage orders and deliveries<br></br></div>
                    <div className={styles.keyFeaturesItem}><span className={styles.bebold}>&#8594;</span> Built a Kanban-style dashboard to track order status in real time <br></br></div>
                    <div className={styles.keyFeaturesItem}><span className={styles.bebold}>&#8594;</span> Implemented an automated accounting module for accurate revenue tracking and reporting <br></br></div>
                    <div><span className={styles.bebold}>&#8594;</span> Containerized the application with  <span className={styles.techUsed}>Docker</span> to simplify deployment and setup for internal users</div>
                    </div>
              </p><br></br>
              {/* <p><span className={styles.techUsed}>Django, JavaScript, HTML/CSS, SQL, Docker</span></p><br></br> */}
              
            </div>
              </motion.div>
     
         
            
            
            </div>
        </section>
  )
}

export default Work