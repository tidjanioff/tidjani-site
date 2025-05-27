import styles from './HeroStyles.module.css'
import tidjaniImg from '../../assets/tidjani-img.png'
import { useTheme } from '../../common/ThemeContext'
import sun from '../../assets/sun.svg'
import moon from '../../assets/moon.svg'
import githubLight from '../../assets/github-light.svg'
import linkedinLight from '../../assets/linkedin-light.svg'
import youtubeLight from '../../assets/youtube-light.svg'
import githubDark from '../../assets/github-dark.svg'
import linkedinDark from '../../assets/linkedin-dark.svg'
import youtubeDark from '../../assets/youtube-dark.svg'
import {easeOut, motion} from "framer-motion"

function Hero() {
    const { theme, toggleTheme } = useTheme()

    const themeIcon = theme === "light" ? sun : moon;

    const linkedinIcon = theme === "light" ? linkedinLight : linkedinDark;

    const githubIcon = theme === "light" ? githubLight : githubDark;

    const youtubeIcon = theme === "light" ? youtubeLight : youtubeDark;



    return (
        <section className={styles.container}>
            <div className={styles.colorModeContainer}>
                <motion.img 
                    className={styles.hero} 
                    initial={{ opacity:0, y:-100 }} animate={{ opacity:1, y:0 }}
                    transition={{ duration:1.2 }}
                    src={tidjaniImg} 
                    alt='Profile picture of Tidjani'
                />
                <motion.img 
                    className={styles.colorMode} 
                    initial={{  opacity:0}} animate={{ opacity:1}}
                    transition={{duration: 1, delay:0.5}}
                    src={themeIcon} 
                    alt='Color mode icon'
                    onClick={toggleTheme}
                />
            </div>
            <div className={styles.info}>
                <motion.h1
                    initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                    transition={{
                        duration:0.6,
                    }}
                >Tidjani</motion.h1>
                <motion.h2
                initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                transition={{duration:0.6}}
                style={{
                    marginBottom:'18px',
                    marginTop:'0px',}}>Aspiring Software Engineer</motion.h2>
                <div className={styles.socials}>
                    <span>
                        <a href='https://www.linkedin.com/in/tidjani-d/' target='_blank'>
                            <motion.img 
                            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.3}}
                            src={linkedinIcon} alt='LinkedIn icon'/>
                        </a>
                    </span>
                    <span>
                        <a href='https://www.github.com/tidjanioff/' target='_blank'>
                            <motion.img 
                            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.4}}
                            src={githubIcon} alt='Github icon'/>
                        </a>
                    </span>
                    {/* <span>
                        <a href='https://www.youtube.com/@tidjani1' target='_blank'>
                            <motion.img 
                            initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                            transition={{duration:0.6, delay:0.7}}
                            src={youtubeIcon} alt='youtube icon'/>
                        </a>
                    </span> */}
                </div>
                <motion.p 
                initial={{opacity:0, y:30}} animate={{opacity:1, y:0}}
                transition={{duration:0.6}}
                className={styles.description}>
                Passionate about Artificial Intelligence, Machine Learning, and building smart solutions that solve real-world problems.
                </motion.p>
                <a href="mailto:tidjanioff@gmail.com">
                    <motion.button 
                    initial={{y:50, opacity:0}} animate={{y:0, opacity:1}}
                    transition={{duration:1}}
                    className='hover'>Get in Touch</motion.button>
                </a>
            </div>
            
        </section>
    )
    }

export default Hero 