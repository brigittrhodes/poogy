import React, { useState } from 'react'
import styles from './style.module.scss';
import { motion } from 'framer-motion';
import { usePathname } from 'next/navigation';
import { menuSlide } from '../anim';
import Link from './Link';
import Curve from './Curve';
import Footer from './Footer';

const navItems = [
  {
    title: "ABOUT POOGY",
    href: "#about",
  },
  {
    title: "FEATURES",
    href: "#features",
  },
  {
    title: "NFT's",
    href: "#nft",
  },
  {
    title: "ARE YOU READY",
    href: "#ready",
  },
  ,
  // {
  //   title: "CONTACTS",
  //   href: "#contact",
  // },
]

export default function Nav({ isActive, setIsActive }) {

  const pathname = usePathname();
  const [selectedIndicator, setSelectedIndicator] = useState(pathname);

  return (
    <motion.div variants={menuSlide} initial="initial" animate="enter" exit="exit" className={styles.menu}>
      <div className={styles.body}>
        <div onMouseLeave={() => { setSelectedIndicator(pathname) }} className={`${styles.nav} mobile-menu-text`}>
          {
            navItems.map((data, index) => {
              return <Link key={index} data={{ ...data, index }} isActive={selectedIndicator == data.href} setSelectedIndicator={setSelectedIndicator} setIsActive={setIsActive}></Link>
            })
          }
        </div>
        <Footer />
      </div>
      <Curve />
    </motion.div>
  )
}