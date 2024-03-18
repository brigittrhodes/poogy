'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import About from "../about";
import pinkBackground from "../../../public/images/bg/pink/bg-1440-pink.png";

export default function Oinks() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (


    <main className={`${styles['top-bg']}`}>
      <About />

    </main>
  );
}

