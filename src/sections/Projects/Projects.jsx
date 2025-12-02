import React, { use } from 'react'
import styles from './ProjectsStyles.module.css'
import { useTheme } from '../../common/ThemeContext'
import mblight from '../../assets/mb-light.png'
import mbdark from '../../assets/mb-dark.png'
import fnlight from '../../assets/fn-light.png'
import fndark from '../../assets/fn-dark.png'
import umlight from '../../assets/um-light.png'
import umdark from '../../assets/um-dark.png'
import mpp from '../../assets/mp.png'
import aurumlight from '../../assets/aurum-arts-light.png'
import aurumdark from '../../assets/aurum-arts-dark.png'
import homiq from '../../assets/homiq.png'
import alLight from '../../assets/astralink-light.png'
import alDark from '../../assets/astralink-dark.png'
import psLight from '../../assets/ps-light.png'
import psDark from '../../assets/ps-dark.png'
import ProjectCard from '../../common/ProjectCard'
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

function Projects() {
    const { theme, toggleTheme } = useTheme()
    const fn = theme === "light" ? fnlight : fndark;
    const mb = theme === "light" ? mblight : mbdark;
    const um = theme === "light" ? umlight : umdark;
    const aurum = theme === "light" ? aurumlight : aurumdark;
    const ps = theme === "light" ? psLight : psDark;
    const al = theme === "light" ? alLight : alDark;
    const refTitle = useRef(null);
    const isInViewTitle = useInView(refTitle, {once: true});


    const refHq = useRef(null);
    const isInViewHq = useInView(refHq, {once: true})

    const refAa = useRef(null);
    const isInViewAa = useInView(refAa, {once: true})

    const refPs = useRef(null);
    const isInViewPs = useInView(refPs, {once: true})

    const refMB = useRef(null);
    const isInViewMB = useInView(refMB, {once: true})

    const refFN = useRef(null);
    const isInViewFN = useInView(refFN, {once: true})

    const refUM = useRef(null);
    const isInViewUM = useInView(refUM, {once: true})

    const refMPP = useRef(null);
    const isInViewMPP = useInView(refMPP, {once: true})

    const refAstraLink = useRef(null);
    const isInViewAstraLink = useInView(refAstraLink, {once: true})

    
    
  return (
    <section id='projects' className={styles.container}>
        <motion.h1 
        ref={refTitle}
        initial={{y:-50}} animate={isInViewTitle ? { y:0}: {}}
        transition={{duration:1}}
        className='sectionTitle'>Projects</motion.h1>
        
        <div className={styles.projectContainer}>
            <motion.div
                ref={refAstraLink}
                initial={{opacity:0, y:50}} animate={isInViewAstraLink ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.1}}>

                <ProjectCard 
                    src={al} 
                    ghlink="https://github.com/tidjanioff/astra-link" 
                    ldlink="https://youtu.be/OMstUhgU58c"
                    name= "AstraLink"
                    description="Space Launch Tracker"
                    // techStack="React Native, TypeScript, Expo, NativeWind, Appwrite"
                />
            </motion.div>

            <motion.div
                ref={refHq}
                initial={{opacity:0, y:50}} animate={isInViewHq ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.1}}>

                <ProjectCard 
                    src={homiq} 
                    ghlink="https://github.com/tidjanioff/homiq" 
                    ldlink="https://youtu.be/rdeWqxG-DOU"
                    name= "Homiq"
                    description="Real Estate App"
                    // techStack="React Native, TypeScript, Expo, NativeWind, Appwrite"
                />
            </motion.div>

            <motion.div
                ref={refAa}
                initial={{opacity:0, y:50}} animate={isInViewAa ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.2}}>

                <ProjectCard 
                    src={aurum} 
                    ghlink="https://github.com/tidjanioff/aurum-arts" 
                    ldlink="https://youtu.be/c9bU6j-J728"
                    name= "Aurum Arts"
                    description="Art Auction Platform"
                    // techStack="Django, Python, JavaScript, HTML, CSS, SQLite3"
                />
            </motion.div>
            
            <motion.div
                ref={refPs}
                initial={{opacity:0, y:50}} animate={isInViewPs ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.3}}>

                <ProjectCard 
                    src={ps} 
                    ghlink="https://github.com/tidjanioff/pyrosat" 
                    ldlink="https://youtu.be/2H3iaNIwPcE"
                    name= "PyroSat"
                    description="Wildfire Tracker"
                    // techStack="React, JavaScript, HTML, CSS"
                />
            </motion.div>
            <motion.div
                ref={refMB}
                initial={{opacity:0, y:50}} animate={isInViewMB ? {opacity:1, y:0}:{}}
                transition={{duration:0.8, delay:0.4}}>

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
                transition={{duration:0.8, delay:0.5}}>
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
                transition={{duration:0.8, delay:0.6}}>
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
                 transition={{duration:0.8, delay:0.7}}>
                <ProjectCard 
                    src={mpp} 
                    ghlink="https://github.com/tidjanioff/meal-prep-pro" 
                    ldlink="https://youtu.be/FESq6M0bwow"
                    name= "Meal Prep Pro"
                    description="Meal Assistant"
                />
            </motion.div>

        </div>
    </section>
    )
}

export default Projects