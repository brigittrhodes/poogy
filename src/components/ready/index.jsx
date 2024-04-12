import React from "react";
import styles from './style.module.scss'
import Scroll from '../scroll'
import Image from "next/image";


export default function Main() {


  return (
    <div>
      <Ready />
      <Snuggle />
    </div>
  )
}

const Ready = () => {
  return (
    <div className="text-center overflow-hidden lg:px-12 pb-12 md:pb-24" id="ready">
      <h1 className={`heading2 ${styles['half-heading']}`}>ARE U READY?</h1>
      <div className="pink-bg border-white border-2 p-4 relative rounded-2xl mt-8 md:mt-16">
        <div className="flex flex-col md:flex-row">
          <div className="flex items-stretch w-full md:w-1/2 lg:p-4 py-2">
            <img src="/images/are_you_ready.webp" className="mx-auto rounded-2xl" alt="" srcSet="" />
          </div>
          <div className="flex items-stretch w-full md:w-1/2 lg:p-4 py-2">
          {/* <Scroll /> */}
            <img src="/images/ready_right.webp" className="mx-auto rounded-2xl" alt="" srcSet="" />
          </div>
        </div>
      </div>
    </div>
  )
}

const Snuggle = () => {
  return (
    <div className="text-center overflow-hidden mt-4 lg:mt-12 lg:px-12">
      <h1 className="heading2">SNUGGLE UP,</h1>
      <p className="subtext2 text-white md:mt-12 mt-4">
        XPLORE OUR COLLECTION, AND GET READY
        <br /> TO BE CHARMED!
      </p>

      <div className="md:my-8 my-4 flex justify-center">
        <svg width="495" height="28" viewBox="0 0 495 28" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path fillRule="evenodd" clipRule="evenodd" d="M437.867 3.61898C372.221 0.453609 244.951 -0.96758 178.279 0.712007C114.92 2.32699 40.3577 7.75337 8.24426 7.75337C-0.198283 7.75337 -0.750679 7.81795 0.511757 8.85155C2.40541 10.4019 17.8703 10.7249 45.1707 9.75593C66.3165 9.04534 66.79 9.04536 70.1039 10.3373C73.4178 11.6293 73.9701 11.6293 93.8534 10.9833C132.673 9.69135 159.737 8.27016 170.783 8.33476C180.804 8.39936 182.461 9.56215 163.761 10.2727C120.365 12.0169 119.891 12.0815 122.732 14.3425C123.994 15.3761 125.651 15.5053 140.327 15.3115C156.423 15.1177 155.871 14.7947 157.764 16.2805C159.027 17.2495 160.684 17.7663 162.419 17.8309C175.754 17.9601 213.311 18.6707 213.311 18.6707C203.054 18.9291 190.509 19.7689 189.877 20.2857C187.037 22.6112 190.745 22.805 237.929 23.3864C291.03 23.9678 331.27 26.1642 336.32 27.7146C337.582 28.1022 338.293 27.327 337.425 26.4226C334.426 23.451 284.166 22.482 263.414 21.5777C259.154 21.3839 256.471 20.2211 267.833 19.8981C294.817 19.1875 285.112 16.9265 282.193 16.7327C278.248 16.4743 269.174 16.5389 246.766 16.2159C235.956 16.0867 240.217 14.9885 247.239 14.9239C312.097 14.2133 321.486 14.6655 321.486 14.3425C321.486 12.2107 319.198 11.9523 290.557 11.6293C265.229 11.3063 270.989 10.0143 287.164 9.94974C310.992 9.88515 356.677 10.5311 357.308 9.75593C358.57 8.01175 355.257 6.91357 347.603 6.46138C335.61 5.75078 383.898 6.52596 418.852 7.55956C484.104 9.49754 494.992 11.6939 494.992 9.49754C495.15 6.46136 493.336 6.26756 437.867 3.61898Z" fill="white" />
        </svg>
      </div>

      <p className="subtext text-white">
        PS. DONT FORGET TO JOIN OUR DISCORD AND FOLLOW US ON <br /> TWITTER FOR EXCITING UPCOMING ADVENTURES AND SURPRISES!
      </p>

      <div className="flex items-center justify-center space-x-4 md:mt-8 mt-4">
        <a href="https://twitter.com/Poogy_nfts" target="_blank">
          <svg style={{ width: "70px", height: "70px" }} className="w-6 h-6 lg:mx-6 mx-2 sm-hw" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 25">
            <path fill="white" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"></path>
          </svg>
        </a>
        <a href="https://discord.com/invite/JGhuBtjtfu">
          <svg style={{ width: "70px", height: "70px" }} className="w-6 h-6 lg:mx-6 mx-2 sm-hw" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
            <path fill="white" d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
          </svg>
        </a>
      </div>


      <div className="flex flex-row items-center justify-center lg:my-16 my-8">

        <img className="lg:mt-10 rounded-3xl border-pink" src="/images/snuggle.webp" alt="" srcSet="" />



      </div>

      <div className="">
                        <p className={` ${styles['bottom-heading']}`}>P.P.S. Oinks!</p>
          </div>

    </div>

  )
}

