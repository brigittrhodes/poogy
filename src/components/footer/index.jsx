import React from "react";
import styles from './style.module.scss'


export default function Footer() {

  return (
    <div className={styles.footer}>
      <div className="container mx-auto px-4 py-3 flex justify-between text-white">
        <div className={`p-4 text-left flex-1 ${styles['footer-text']}`}>All Rights Reserved @Poogy</div>
        <div className={`p-4 text-right flex-1 ${styles['footer-text']}`}>Designed by <a href="https://www.behance.net/anastazie">Anastasia Khavrik</a></div>
      </div>
    </div>

  )
}

