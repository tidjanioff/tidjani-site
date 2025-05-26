import React from 'react'
import styles from './ContactStyles.module.css'
import mailLight from '../../assets/email-light.png'
import mailDark from '../../assets/email-dark.png'
import { useTheme } from '../../common/ThemeContext'
import {motion, useInView} from "framer-motion"
import { useRef } from "react"

function Contact() {
    const { theme, toggleTheme } = useTheme()
    const mailIcon = theme === "light" ? mailLight : mailDark;
    const refTitle = useRef(null);
    const isInViewTitle = useInView(refTitle, {once: true});

    const refContact = useRef(null);
    const isInViewContact = useInView(refContact, {once: true});

  return (
    <section id='contact' className= {styles.container}>
        <motion.h1 
        ref={refTitle}
        initial={{y:-50}} animate={isInViewTitle ? {y:0} : {}}
        transition={{duration:1}}
        className='sectionTitle'>Contact me</motion.h1>
        <motion.div
        ref={refContact}
         initial={{opacity:0}} animate={isInViewContact ? {opacity:1}: {}}
            transition={{duration:1}}>
              <div className={styles.mailContainer}>
                <img className={styles.mail}  src={mailIcon}/>
                <a href='mailto:tidjanioff@gmail.com'>
                    tidjanioff@gmail.com
                </a>
            </div>
        </motion.div>
            
            
    </section>
  )
}

export default Contact