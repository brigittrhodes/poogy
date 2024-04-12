import styles from './style.module.scss';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { slide, scale } from '../../anim';

export default function Index({ data, isActive, setIsActive, setSelectedIndicator }) {

  const { title, href, index } = data;

  const handleClick = () => {
    setIsActive(false); 
  };

  return (
    <motion.div className={styles.link} onClick={handleClick} onMouseEnter={() => { setSelectedIndicator(href) }} custom={index} variants={slide} initial="initial" animate="enter" exit="exit">
      <motion.div variants={scale} animate={isActive ? "open" : "closed"} className={styles.indicator}></motion.div>
      <a href={href}>{title}</a>
    </motion.div>
  )
}