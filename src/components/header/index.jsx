'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Nav from './nav';
import { AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

export default function Home() {

  const [isActive, setIsActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    if (isActive) setIsActive(false)
  }, [pathname])

  return (
    <>
      <div className={`${styles.main} lg:hidden sm:block`}>
        <div className={styles.left}>
          <svg width="69" height="53" viewBox="0 0 69 53" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clipPath="url(#clip0_190_1677)">
              <circle cx="24.495" cy="26.4998" r="5.865" fill="white" />
              <circle cx="43.8151" cy="26.4998" r="5.865" fill="white" />
              <path d="M68 26.4998C68 30.9967 64.5436 35.3039 58.4269 38.5457C52.3547 41.764 43.8969 43.7848 34.5 43.7848C25.1031 43.7848 16.6453 41.764 10.5731 38.5457C4.45642 35.3039 1 30.9967 1 26.4998C1 22.0029 4.45642 17.6958 10.5731 14.454C16.6453 11.2357 25.1031 9.21484 34.5 9.21484C43.8969 9.21484 52.3547 11.2357 58.4269 14.454C64.5436 17.6958 68 22.0029 68 26.4998Z" stroke="white" strokeWidth="2" />
            </g>
            <defs>
              <clipPath id="clip0_190_1677">
                <rect width="69" height="53" fill="white" />
              </clipPath>
            </defs>
          </svg>

        </div>
        <div className={styles.header}>
          <div onClick={() => { setIsActive(!isActive) }} className={styles.button}>
            <div className={`${styles.burger} ${isActive ? styles.burgerActive : ""}`}></div>
          </div>
        </div>

      </div>
      <AnimatePresence mode="wait">
        {isActive && <Nav isActive={isActive} setIsActive={setIsActive} />}
      </AnimatePresence>
    </>
  )
}
