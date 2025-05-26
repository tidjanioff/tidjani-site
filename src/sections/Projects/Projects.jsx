import React from 'react'
import styles from './ProjectsStyles.module.css'
import { useTheme } from '../../common/ThemeContext'
import mblight from '../../assets/mb-light.png'
import mbdark from '../../assets/mb-dark.png'
import fnlight from '../../assets/fn-light.png'
import fndark from '../../assets/fn-dark.png'
import umlight from '../../assets/um-light.png'
import umdark from '../../assets/um-dark.png'
import mpp from '../../assets/mp.png'
import dna from '../../assets/dna.png'
import ProjectCard from '../../common/ProjectCard'
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

function Projects() {
    const { theme, toggleTheme } = useTheme()
    const fn = theme === "light" ? fnlight : fndark;
    const mb = theme === "light" ? mblight : mbdark;
    const um = theme === "light" ? umlight : umdark;
    const refTitle = useRef(null);
    const isInViewTitle = useInView(refTitle, {once: true});

    const refMB = useRef(null);
    const isInViewMB = useInView(refMB, {once: true})

    const refFN = useRef(null);
    const isInViewFN = useInView(refFN, {once: true})

    const refUM = useRef(null);
    const isInViewUM = useInView(refUM, {once: true})

    const refMPP = useRef(null);
    const isInViewMPP = useInView(refMPP, {once: true})

    const refDNA = useRef(null);
    const isInViewDNA = useInView(refDNA, {once: true})
    
  return (
    <section id='projects' className={styles.container}>
        <motion.h1 
        ref={refTitle}
        initial={{y:-50}} animate={isInViewTitle ? { y:0}: {}}
        transition={{duration:1}}
        className='sectionTitle'>Projects</motion.h1>
        <div className={styles.projectContainer}>
            <motion.div
                ref={refMB}
                initial={{opacity:0, y:50}} animate={isInViewMB ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.1}}>

                <ProjectCard 
                    src={mb} 
                    ghlink="https://github.com/tidjanioff/mystery-boxes" 
                    ldlink="https://mystery-boxes.netlify.app/mb"
                    name= "Mystery Boxes™"
                    description="Grid game"
                />
            </motion.div>
            <motion.div
                ref={refFN}   
                initial={{opacity:0, y:50}} animate={isInViewFN ? {opacity:1, y:0}: {}}
                transition={{duration:0.8, delay:0.2}}>
                <ProjectCard 
                    src={fn} 
                    ghlink="https://github.com/tidjanioff/finTrack" 
                    ldlink="https://youtu.be/k4D-Yvv9-KU"
                    name= "FinTrack"
                    description="Finance Tracker"
                />
            </motion.div>
            <motion.div
                ref={refUM}
                initial={{opacity:0, y:50}} animate={isInViewUM ? {opacity:1, y:0}: {}}
                transition={{duration:0.8, delay:0.3}}>
                <ProjectCard 
                    src={um} 
                    ghlink="https://github.com/tidjanioff/umontreal-infoboard" 
                    ldlink="https://youtu.be/-JBr8QRUFIU"
                    name= "UMontreal InfoBoard"
                    description="Campus Dashboard"
                />
            </motion.div>
            <motion.div
                ref={refMPP}
                initial={{opacity:0, y:50}} animate={isInViewMPP ? {opacity:1, y:0}: {}}
                 transition={{duration:0.8, delay:0.4}}>
                <ProjectCard 
                    src={mpp} 
                    ghlink="https://github.com/tidjanioff/meal-prep-pro" 
                    ldlink="https://youtu.be/FESq6M0bwow"
                    name= "Meal Prep Pro"
                    description="Meal Assistant"
                />
            </motion.div>
            <motion.div
                ref={refDNA}
                initial={{opacity:0, y:50}} animate={isInViewDNA ? {opacity:1, y:0}: {}}
                transition={{duration:0.8, delay:0.5}}>
                <ProjectCard 
                    src={dna} 
                    ghlink="https://github.com/tidjanioff/DNA2Protein" 
                    ldlink="https://dna2protein.netlify.app/livedemo.html"
                    name= "DNA2Protein"
                    description="DNA Translation Tool"
                />
            </motion.div>
        </div>
    </section>
    )
}

export default Projects