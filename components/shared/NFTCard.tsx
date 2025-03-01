import { motion } from "framer-motion";
import Image from "next/image";
import { NFT } from "../../types/NFT";

interface NFTCardProps {
  nft: NFT;
  animated?: boolean;
}

export default function NFTCard({ nft, animated = false }: NFTCardProps) {
  const cardVariants = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
      },
    },
    hover: {
      y: -10,
      boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.5)",
      transition: {
        duration: 0.3,
      },
    },
  };

  if (!animated) {
    return (
      <div className="bg-gray-800 rounded-xl overflow-hidden">
        <div className="relative h-64 w-full">
          <Image src={nft.image} alt={nft.name} fill className="object-cover" />
        </div>
        <div className="p-5">
          <h3 className="text-xl font-bold mb-1">{nft.name}</h3>
          <p className="text-gray-400">{nft.description}</p>
        </div>
      </div>
    );
  }

  return (
    <motion.div
      className="bg-gray-800 rounded-xl overflow-hidden"
      variants={cardVariants}
      whileHover="hover"
    >
      <div className="relative h-64 w-full overflow-hidden">
        <motion.div
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.5 }}
          className="w-full h-full"
        >
          <Image src={nft.image} alt={nft.name} fill className="object-cover" />
        </motion.div>
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-1">{nft.name}</h3>
        <p className="text-gray-400">{nft.description}</p>
      </div>
    </motion.div>
  );
}
