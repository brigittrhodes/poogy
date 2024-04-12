import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import nftData from "./data";
import styles from './style.module.scss';
import Image from "next/image";

const DesktopNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % Math.ceil(nftData.length / 3));
  };

  useEffect(() => {
    const interval = setInterval(nextGroup, 4000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden hidden lg:block" id="nft">
      <div className="">
        <h1 className="heading2 mt-80">NFT&apos;s</h1>
        <div className="flex flex-row justify-center px-12 pb-6">
          {nftData.slice(currentGroup * 3, currentGroup * 3 + 3).map((nft) => (
            <motion.div
              className={`w-1/3 p-4 pt-12 relative ${styles['flip-container']}`}
              key={nft.id}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <motion.div className={styles.flipper}>
                <Image
                  src={nft.imageUrl}
                  alt={nft.alt}
                  width={'500'}
                  height={'500'}
                  className="w-full h-auto border-2 rounded-xl"
                />
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};


const TabNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Function to advance to the next group of NFTs
  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % nftData.length);
  };

  // Automatically switch to the next group every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextGroup, 3000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden mt-40 hidden lg:hidden md:block" id="nft">
      <div className="mt-40">
        <h1 className="heading2">NFT&apos;s</h1>
        <div className="flex justify-center">
          {/* Display two NFTs at a time */}
          {[currentGroup, (currentGroup + 1) % nftData.length].map((group) => (
            <div className={`p-4 pt-12 relative ${styles['flip-container']} hidden md:block`} key={nftData[group].id}>
              <div className={styles.flipper}>
                <Image
                  src={nftData[group].imageUrl}
                  alt={nftData[group].alt}
                  width={'500'}
                  height={'500'}
                  className="w-full h-auto border-2 rounded-xl"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

const MobileNFT = () => {
  const [currentGroup, setCurrentGroup] = useState(0);

  // Function to advance to the next group of NFTs
  const nextGroup = () => {
    setCurrentGroup((currentGroup + 1) % nftData.length);
  };

  // Automatically switch to the next group every 3 seconds
  useEffect(() => {
    const interval = setInterval(nextGroup, 3000);
    return () => clearInterval(interval);
  }, [currentGroup]);

  return (
    <div className="text-center overflow-hidden lg:hidden md:hidden" id="nft">
      <div className="">
        <h1 className="heading2 mt-40">NFT&apos;s</h1>
        <div className="flex justify-center">
          {/* Display the current NFT */}
          <div className={`p-4 pt-12 relative ${styles['flip-container']}`} key={nftData[currentGroup].id}>
            <div className={styles.flipper}>
              <Image
                src={nftData[currentGroup].imageUrl}
                alt={nftData[currentGroup].alt}
                width={'500'}
                height={'500'}
                className="w-full h-auto border-2 rounded-xl"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function Main() {



  return (
    <div >
      <DesktopNFT />
      <TabNFT />
      <MobileNFT />
    </div>
  )
}

