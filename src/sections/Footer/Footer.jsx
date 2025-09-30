import React from 'react'
import styles from './FooterStyles.module.css'

function Footer() {
  return (
    <section id='footer' className={styles.container}>
        <p>Copyright &copy; {new Date().getFullYear()}. Built by Tidjani. <br/> All rights reserved.</p>
    </section>
  )
}

export default Footer