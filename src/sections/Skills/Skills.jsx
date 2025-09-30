import React from 'react'
import styles from './SkillsStyles.module.css'
import python from '../../assets/python.png'
import java from '../../assets/java.png'
import javascript from '../../assets/javascript.png'
import html5 from '../../assets/html5.png'
import css3 from '../../assets/css3.png'
import sql from '../../assets/sql.png'
import django from '../../assets/django.png'
import reactlogo from '../../assets/react.png'

import git from '../../assets/git.png'
import github from '../../assets/github.png'
import nodejs from '../../assets/nodejs.png'
import figma from '../../assets/figma.png'
import vscode from '../../assets/vscode.png'


import docker from '../../assets/docker.png'
import {motion, useInView} from 'framer-motion'
import { useRef } from 'react'



function Skills() {
    const refTitle = useRef(null)
    const IsInViewTitle = useInView(refTitle, {once: true})

    const refSubTitlePL = useRef(null)
    const IsInViewSubTitlePL = useInView(refSubTitlePL, {once: true})

    const refSubTitleBRPL = useRef(null)
    const IsInViewSubtitleBRPL = useInView(refSubTitlePL, {once: true})

    const refSubTitleFL= useRef(null)
    const IsInViewSubTitleFL = useInView(refSubTitleFL, {once: true})

    const refSubTitleBRFL = useRef(null)
    const IsInViewSubtitleBRFL = useInView(refSubTitleFL, {once: true})

    const refSubTitleDT= useRef(null)
    const IsInViewSubTitleDT = useInView(refSubTitleDT, {once: true})

    const refSubTitleBRDT = useRef(null)
    const IsInViewSubtitleBRDT = useInView(refSubTitleDT, {once: true})

    const refSubTitleDP= useRef(null)
    const IsInViewSubTitleDP = useInView(refSubTitleDP, {once: true})

    const refSubTitleBRDP = useRef(null)
    const IsInViewSubtitleBRDP = useInView(refSubTitleDP, {once: true})

    const refPython = useRef(null)
    const IsInViewPython = useInView(refPython, {once: true})

    const refJava = useRef(null)
    const IsInViewJava = useInView(refJava, {once: true})

    const refJavascript = useRef(null)
    const IsInViewJavascript = useInView(refJavascript, {once: true})

    const refHTML = useRef(null)
    const IsInViewHTML = useInView(refHTML, {once: true})

    const refCSS = useRef(null)
    const IsInViewCSS = useInView(refCSS, {once: true})

    const refDocker = useRef(null)
    const IsInViewDocker = useInView(refDocker, {once: true})

    const refSQL = useRef(null)
    const IsInViewSQL = useInView(refSQL, {once: true})

    const refDjango = useRef(null)
    const IsInViewDjango = useInView(refDjango, {once: true})

    const refReact = useRef(null)
    const IsInViewReact = useInView(refReact, {once: true})



    

    const refNodejs = useRef(null)
    const IsInViewNodejs = useInView(refNodejs, {once: true})


    const refGit = useRef(null)
    const IsInViewGit = useInView(refGit, {once: true})

    const refGitHub = useRef(null)
    const IsInViewGitHub = useInView(refGitHub, {once: true})

    const refVSCode = useRef(null)
    const IsInViewVSCode = useInView(refVSCode, {once: true})





    const refFigma = useRef(null)
    const IsInViewFigma = useInView(refFigma, {once: true})
  return (
    <section id='skills' className={styles.container}>
        <motion.h1
            ref={refTitle}
            initial={{y:-50}} animate={IsInViewTitle?{ y:0 }:{}}
            transition={{duration:1}}
            style={{
             marginBottom:'20px',
        }}>What I work <br/>with</motion.h1>
        <div>
            <motion.h2
                ref={refSubTitlePL}
                initial={{y:50, opacity:0}} animate={IsInViewSubTitlePL ? {y:0, opacity:1}: {}}
                transition={{duration:1}}>Programming Languages</motion.h2>
            <motion.hr
            ref={refSubTitleBRPL}
            initial={{y:50, opacity:0}} animate={IsInViewSubtitleBRPL?{y:0, opacity:1}:{}}
            transition={{duration:1}}></motion.hr>
            <div className={styles.skillSection}>
                <motion.div 
                ref={refPython}
                initial={{opacity:0}} animate={IsInViewPython?{ opacity:1}:{}}
                transition={{duration:2}}
                className={styles.skill}>
                    <img src={python}/>
                    <p>Python</p>
                </motion.div>

                <motion.div 
                ref={refJava}
                initial={{opacity:0}} animate={IsInViewJava? { opacity:1}: {}}
                transition={{duration:2, delay:0.1}}
                className={styles.skill}>
                    <img src={java}/>
                    <p>Java</p>
                </motion.div>
                <motion.div 
                ref={refJavascript}
                initial={{opacity:0}} animate={IsInViewJavascript?{ opacity:1}: {}}
                transition={{duration:2, delay:0.2}}
                className={styles.skill}>
                    <img src={javascript}/>
                    <p>Javascript</p>
                </motion.div>
                <motion.div 
                ref={refHTML}
                initial={{opacity:0}} animate={IsInViewHTML?{ opacity:1}: {}}
                transition={{duration:2, delay:0.3}}
                className={styles.skill}>
                    <img src={html5}/>
                    <p>HTML</p>
                </motion.div>
                <motion.div 
                ref={refCSS}
                initial={{opacity:0}} animate={IsInViewCSS?{ opacity:1}:{}}
                transition={{duration:2, delay:0.4}}
                className={styles.skill}>
                    <img src={css3}/>
                    <p>CSS</p>
                </motion.div>
                <motion.div 
                ref={refSQL}
                initial={{opacity:0}} animate={IsInViewSQL?{ opacity:1}:{}}
                transition={{duration:2, delay:0.5}}
                className={styles.skill}>
                    <img src={sql}/>
                    <p>SQL</p>
                </motion.div>
            </div>
            <motion.h2
                ref={refSubTitleFL}
                initial={{y:-50, opacity:0}} animate={IsInViewSubTitleFL ?{y:0, opacity:1}: {}}
                transition={{duration:1}}>Frameworks & Libraries</motion.h2>
            <motion.hr
            ref={refSubTitleBRFL}
            initial={{y:-50, opacity:0}} animate={IsInViewSubtitleBRPL?{y:0, opacity:1}:{}}
            transition={{duration:1}}></motion.hr>
            <div className={styles.skillSection}>
                
                <motion.div 
                ref={refDjango}
                initial={{opacity:0}} animate={IsInViewDjango?{ opacity:1}:{}}
                transition={{duration:1}}
                className={styles.skill}>
                    <img src={django}/>
                    <p>Django</p>
                </motion.div>
                <motion.div 
                ref={refReact}
                initial={{opacity:0}} animate={IsInViewReact?{ opacity:1}:{}}
                transition={{duration:1, delay:0.1}}
                className={styles.skill}>
                    <img src={reactlogo}/>
                    <p>React</p>
                </motion.div>
     
                <motion.div 
                ref={refNodejs}
                initial={{opacity:0}} animate={IsInViewNodejs?{ opacity:1}:{}}
                transition={{duration:1, delay:0.2}}
                className={styles.skill}>
                    <img src={nodejs}/>
                    <p>Node.js</p>
                </motion.div>

            </div>
            <motion.h2
                ref={refSubTitleDT}
                initial={{y:50, opacity:0}} animate={IsInViewSubTitleDT? {y:0, opacity:1}: {}}
                transition={{duration:1}}>Development Tools</motion.h2>
            <motion.hr
            ref={refSubTitleBRDT}
            initial={{y:50, opacity:0}} animate={IsInViewSubtitleBRDT? {y:0, opacity:1}: {}}
            transition={{duration:1}}></motion.hr>
            <div className={styles.skillSection}>
                
                <motion.div 
                ref={refGit}
                initial={{opacity:0}} animate={IsInViewGit?{ opacity:1}:{}}
                transition={{duration:1}}
                className={styles.skill}>
                    <img src={git}/>
                    <p>Git</p>
                </motion.div>
                <motion.div 
                ref={refGitHub}
                initial={{opacity:0}} animate={IsInViewGitHub?{ opacity:1}:{}}
                transition={{duration:1, delay:0.1}}
                className={styles.skill}>
                    <img src={github}/>
                    <p>GitHub</p>
                </motion.div>

                <motion.div 
                ref={refDocker}
                initial={{opacity:0}} animate={IsInViewDocker? { opacity:1}: {}}
                transition={{duration:1, delay:0.2}}
                className={styles.skill}>
                    <img src={docker}/>
                    <p>Docker</p>
                </motion.div>

                <motion.div 
                ref={refVSCode}
                initial={{opacity:0}} animate={IsInViewVSCode? { opacity:1}: {}}
                transition={{duration:1, delay:0.3}}
                className={styles.skill}>
                    <img src={vscode}/>
                    <p>VS Code</p>
                </motion.div>
 

             
            </div>
            <motion.h2
                ref={refSubTitleDP}
                initial={{y:-50, opacity:0}} animate={IsInViewSubTitleDP? {y:0, opacity:1}: {}}
                transition={{duration:1}}>Design & Prototyping</motion.h2>
            <motion.hr
            ref={refSubTitleBRDP}
            initial={{y:-50, opacity:0}} animate={IsInViewSubtitleBRDP? {y:0, opacity:1}:{}}
            transition={{duration:1}}></motion.hr>
            <div className={styles.skillSection}>
                <motion.div 
                ref={refFigma}
                initial={{opacity:0}} animate={IsInViewFigma?{ opacity:1}: {}}
                transition={{duration:1}}
                className={styles.skill}>
                    <img src={figma}/>
                    <p>Figma</p>
                </motion.div>
            </div>
        </div>
    </section>
  )
}

export default Skills