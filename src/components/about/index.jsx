import React, { useEffect, useRef } from "react";
import { useScroll, transform, useTransform, motion } from 'framer-motion';
import Danger from "../danger";
import styles from './style.module.scss'

const Head = () => {
    return (
        <div className="hidden lg:block">
            <header className=" text-white px-16 py-8 flex items-center justify-between">

                <div className="flex items-center">
                    <svg className="logo" viewBox="0 0 100 53" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g clipPath="url(#clip0_181_1302)">
                            <circle cx="35.5" cy="26.5" r="8.5" fill="white" />
                            <circle cx="63.5" cy="26.5" r="8.5" fill="white" />
                            <path d="M98.5 26.5C98.5 32.9892 93.5113 39.218 84.6529 43.913C75.8613 48.5725 63.6122 51.5 50 51.5C36.3878 51.5 24.1387 48.5725 15.3471 43.913C6.48875 39.218 1.5 32.9892 1.5 26.5C1.5 20.0108 6.48875 13.782 15.3471 9.08703C24.1387 4.42746 36.3878 1.5 50 1.5C63.6122 1.5 75.8613 4.42746 84.6529 9.08703C93.5113 13.782 98.5 20.0108 98.5 26.5Z" stroke="white" strokeWidth="3" />
                        </g>
                        <defs>
                            <clipPath id="clip0_181_1302">
                                <rect width="100" height="53" fill="white" />
                            </clipPath>
                        </defs>
                    </svg>

                </div>

                <nav className="flex justify-center">
                    <a href="#about" className="px-4 py-1 pt-2 mx-2 border-2 border-white rounded-lg text-white blue-bg hover:text-white menu-text">ABOUT POOGY</a>
                    <a href="#features" className="px-4 py-1 pt-2 mx-2 border-2 border-white rounded-lg text-white blue-bg hover:text-white menu-text">FEATURES</a>
                    <a href="#nft" className="px-4 py-1 pt-2 mx-2 border-2 border-white rounded-lg text-white blue-bg hover:text-white menu-text">NFT&apos;s</a>
                    <a href="#ready" className="px-4 py-1 pt-2 mx-2 border-2 border-white rounded-lg text-white blue-bg hover:text-white menu-text">ARE YOU READY</a>
                    {/* <a href="#" className="px-4 py-2 mx-2 border-2 border-white rounded-lg text-white blue-bg hover:text-white menu-text">CONTACTS</a> */}
                </nav>

                <div className="flex items-center">
                    <a href="https://twitter.com/Poogy_nfts" target="_blank">
                        <svg style={{ width: "35px", height: "26px" }} className="w-6 h-6 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 25">
                            <path className="blue-bg" fill="white" d="M13.8 10.5 20.7 2h-3l-5.3 6.5L7.7 2H1l7.8 11-7.3 9h3l5.7-7 5.1 7H22l-8.2-11.5Zm-2.4 3-1.4-2-5.6-7.9h2.3l4.5 6.3 1.4 2 6 8.5h-2.3l-4.9-7Z"></path>
                        </svg>
                    </a>
                    <a href="https://discord.com/invite/JGhuBtjtfu">
                        <svg style={{ width: "35px", height: "26px" }} className="w-6 h-6 mx-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                            <path className="blue-bg" fill="white" d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"></path>
                        </svg>
                    </a>
                </div>
            </header>

        </div>
    )
}




const MastHead = () => {
    return (
        <div className=" ">
            <div className="flex flex-col items-center justify-center relative lg:mt-28 ">
                <div className="w-80 md:w-4/5 relative lg:mt-0 mt-36">
                    <img src="images/beach.webp" alt="Image" className="w-full rounded-xl border-white-500 border-2	" />
                    <div className="absolute top-0 left-1/2 transform -translate-x-1/2 text-center text-white w-full">
                        <p className="relative bottom-0 hero-heading">WELCOME TO POOGY</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default function Main() {
    const container = useRef();
    const paths = useRef([]);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start end', 'end end']
    })

    useEffect(() => {
        scrollYProgress.on("change", e => {
            paths.current.forEach((path, i) => {
                const value = transform(e, [0, 1], [-40 + (i * 40), (i * 40)])
                path.setAttribute("startOffset", value + "%");
            })
        })
    }, [scrollYProgress])


    return (
        <div ref={container}>
            <Head />
            <MastHead />

            <Danger />





            <About />
            <Features />
        </div>
    )
}

const About = () => {
    return (
        <div className="text-center overflow-hidden" id="about">
            <h1 className="heading1">ABOUT POOGY</h1>
            <div className="w-full md:w-1/2 mx-auto">
                <p className="subtext uppercase md:p-0 p-4">
                    Get ready to squeeeeee with delight! Poogy is your one-stop shop for all things adorable, calm, fun, and vibin&apos;. We&apos;re a collection of unique piglet NFTs inspired by the simple joys of life: soft cuddles, sunny naps, and playful muddles.
                </p>
            </div>
            <div className="md:mt-10">
                <img src="/images/about_poogy.webp" className="mx-auto" style={{ maxWidth: "80%" }} alt="" />
            </div>
        </div>
    );
};



const Features = () => {
    return (
        <div className="text-center overflow-hidden mb-12 lg:mt-40 mt-24" id="features">
            <h1 className="heading1">FEATURES</h1>

            <div className={`flex flex-col md:flex-row items-center justify-center ${styles['features']}`}>
                <div className="w-full md:w-1/3 p-4 md:p-8 md:block hidden">
                    <img src="/images/features.webp" alt="" className="w-full h-auto" />
                </div>
                <div className="w-full md:w-1/2 text-left p-4 md:p-16 flex flex-col justify-center">
                    <p className="subtext uppercase">
                        But Poogy isn&apos;t just about cuteness overload (although there&apos;s plenty of that!). We&apos;re also a community built on good vibes and positive energy. Each Poogy piglet represents a unique personality, ready to bring a smile to your face and warmth to your heart.
                    </p>
                    <div className="my-4 flex justify-center hidden lg:flex">
                        <svg width="1062" height="28" viewBox="0 0 1062 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M939.201 3.6428C798.492 0.456594 525.698 -0.973948 382.79 0.716693C246.985 2.34231 87.1652 7.8044 18.3322 7.8044C0.236127 7.8044 -0.947899 7.86941 1.75805 8.9098C5.81697 10.4704 38.965 10.7955 97.4817 9.82015C142.806 9.10487 143.821 9.10489 150.924 10.4054C158.027 11.7059 159.211 11.7059 201.83 11.0556C285.038 9.75514 343.047 8.32459 366.724 8.38962C388.202 8.45464 391.754 9.62508 351.672 10.3404C258.655 12.096 257.64 12.161 263.728 14.4369C266.434 15.4773 269.986 15.6073 301.443 15.4123C335.943 15.2172 334.76 14.8921 338.818 16.3876C341.524 17.363 345.076 17.8832 348.797 17.9482C377.378 18.0783 457.88 18.7936 457.88 18.7936C435.894 19.0537 409.004 19.899 407.651 20.4192C401.563 22.7601 409.511 22.9551 510.646 23.5404C624.465 24.1256 710.717 26.3364 721.541 27.897C724.247 28.2872 725.769 27.5069 723.909 26.5965C717.482 23.6054 609.752 22.63 565.273 21.7197C556.14 21.5246 550.39 20.3541 574.743 20.029C632.583 19.3138 611.781 17.0379 605.524 16.8428C597.067 16.5827 577.618 16.6477 529.588 16.3226C506.418 16.1926 515.551 15.0871 530.603 15.0221C669.621 14.3068 689.746 14.762 689.746 14.4369C689.746 12.2911 684.842 12.031 623.45 11.7059C569.162 11.3808 581.508 10.0803 616.178 10.0152C667.253 9.95021 765.175 10.6004 766.528 9.82015C769.233 8.06448 762.13 6.95908 745.726 6.5039C720.019 5.78863 823.522 6.56892 898.443 7.60931C1038.31 9.56005 1061.65 11.7709 1061.65 9.56005C1061.98 6.50389 1058.09 6.30881 939.201 3.6428Z" fill="white" />
                        </svg>
                    </div>
                    <div className="my-4 flex justify-center lg:hidden">
                        <svg width="337" height="28" viewBox="0 0 337 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M298.104 3.6428C253.411 0.456594 166.765 -0.973948 121.374 0.716693C78.2387 2.34231 27.4759 7.8044 5.61276 7.8044C-0.134992 7.8044 -0.511069 7.86941 0.348408 8.9098C1.63762 10.4704 12.1663 10.7955 30.7526 9.82015C45.1488 9.10487 45.4711 9.10489 47.7273 10.4054C49.9834 11.7059 50.3594 11.7059 63.8962 11.0556C90.3251 9.75514 108.75 8.32459 116.271 8.38962C123.093 8.45464 124.221 9.62508 111.49 10.3404C81.9452 12.096 81.6229 12.161 83.5567 14.4369C84.4162 15.4773 85.5443 15.6073 95.5357 15.4123C106.494 15.2172 106.118 14.8921 107.407 16.3876C108.267 17.363 109.395 17.8832 110.577 17.9482C119.655 18.0783 145.224 18.7936 145.224 18.7936C138.241 19.0537 129.7 19.899 129.27 20.4192C127.336 22.7601 129.861 22.9551 161.984 23.5404C198.136 24.1256 225.532 26.3364 228.969 27.897C229.829 28.2872 230.312 27.5069 229.721 26.5965C227.68 23.6054 193.462 22.63 179.335 21.7197C176.434 21.5246 174.608 20.3541 182.343 20.029C200.714 19.3138 194.107 17.0379 192.119 16.8428C189.433 16.5827 183.256 16.6477 168 16.3226C160.641 16.1926 163.542 15.0871 168.323 15.0221C212.478 14.3068 218.871 14.762 218.871 14.4369C218.871 12.2911 217.313 12.031 197.813 11.7059C180.57 11.3808 184.492 10.0803 195.504 10.0152C211.726 9.95021 242.828 10.6004 243.258 9.82015C244.118 8.06448 241.862 6.95908 236.651 6.5039C228.486 5.78863 261.361 6.56892 285.158 7.60931C329.582 9.56005 336.995 11.7709 336.995 9.56005C337.102 6.50389 335.867 6.30881 298.104 3.6428Z" fill="white" />
                        </svg>
                    </div>

                    <p className="subtext uppercase">
                        Owning a Poogy isn&apos;t just about owning an NFT, it&apos;s about joining a family. A family that celebrates the little things, embraces positivity, and finds joy in the simple pleasures of life.
                    </p>
                </div>
            </div>
        </div>
    );
}


