// lib/mockData.ts
import { NFT } from "@/types/NFT";

export const fetchMockNFTs = (): Promise<NFT[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const mockNFTs = Array.from({ length: 50 }, (_, i) => {
        const id = i + 1;
        const rarityTypes = ["Common", "Uncommon", "Rare", "Epic", "Legendary"];
        const rarity =
          rarityTypes[Math.floor(Math.random() * rarityTypes.length)];

        return {
          id,
          name: `Cosmic Voyager #${id.toString().padStart(3, "0")}`,
          description: `A unique explorer of the digital cosmos with rare ${rarity.toLowerCase()} attributes.`,
          image: `/api/placeholder/400/400`,
          price: `${(Math.random() * 0.5 + 0.2).toFixed(2)} ETH`,
          owner: `0x${Math.random()
            .toString(16)
            .substring(2, 10)}...${Math.random().toString(16).substring(2, 6)}`,
          rarity,
          attributes: [
            {
              trait_type: "Background",
              value: [
                "Nebula",
                "Deep Space",
                "Galactic Core",
                "Stardust",
                "Void",
              ][Math.floor(Math.random() * 5)],
            },
            {
              trait_type: "Suit",
              value: ["Titanium", "Quantum", "Plasma", "Cosmic", "Void"][
                Math.floor(Math.random() * 5)
              ],
            },
            {
              trait_type: "Helmet",
              value: ["Classic", "Futuristic", "Alien", "Steampunk", "Crystal"][
                Math.floor(Math.random() * 5)
              ],
            },
            {
              trait_type: "Accessory",
              value: [
                "Laser Sword",
                "Gravity Gun",
                "Star Map",
                "Energy Shield",
                "None",
              ][Math.floor(Math.random() * 5)],
            },
          ],
        };
      });

      resolve(mockNFTs);
    }, 1500);
  });
};
