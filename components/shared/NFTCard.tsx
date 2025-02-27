import Image from "next/image";
import { NFT } from "../../types/NFT";

type NFTCardProps = {
  nft: NFT;
};

export default function NFTCard({ nft }: NFTCardProps) {
  return (
    <div className="bg-gray-800 rounded-xl overflow-hidden hover:shadow-lg hover:shadow-purple-500/20 transition-shadow">
      <div className="relative h-64 w-full">
        <Image src={nft.image} alt={nft.name} fill className="object-cover" />
      </div>
      <div className="p-5">
        <h3 className="text-xl font-bold mb-2">{nft.name}</h3>
        <p className="text-gray-400 text-sm mb-4">{nft.description}</p>
        <div className="flex justify-between items-center">
          <div>
            {nft.price && (
              <>
                <div className="text-sm text-gray-500">Price</div>
                <div className="font-bold text-purple-400">{nft.price}</div>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
