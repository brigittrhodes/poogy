'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';
import Lenis from '@studio-freight/lenis'
import NFT from "../nft";
import Ready from "../ready";
import Danger from "../danger";
//import darkBackground from "../../../public/images/bg-2560.png";



export default function Oinks2() {

  useEffect(() => {
    const lenis = new Lenis()

    function raf(time) {
      lenis.raf(time)
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)
  }, [])

  return (
    <main className={`${styles['bottom-bg']}`}>
      <div>
        <div className='container mx-auto px-4'>
          <NFT />
        </div>
        <div>
          <Danger />
        </div>

        <div className='container mx-auto px-4'>
          <Ready />
        </div>

      </div>

    </main>
  );
}
