'use client'
import styles from './style.module.scss'
import { useEffect, useState } from 'react';


export default function MastHead() {

  return (
    <>
      <div className=''>
        <div className="flex flex-col items-center justify-center h-screen relative">
          <div className="w-80 md:w-4/5 relative">
            <img src="images/google.jpg" alt="Image" className="w-full" />
            <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white w-full">
              <p className="relative bottom-0">Text on top border</p>
            </div>
          </div>
        </div>

      </div>      </>
  )
}