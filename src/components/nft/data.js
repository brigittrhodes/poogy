const nftData = [];

for (let i = 1; i <= 15; i++) {
    nftData.push({
        id: i,
        imageUrl: `/images/poogy/${i}.webp`,
        alt: `NFT${i}`,
    });
}

export default nftData;
