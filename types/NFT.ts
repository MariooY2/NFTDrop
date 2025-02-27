export interface NFT {
  id: number;
  name: string;
  description: string;
  image: string;
  price?: string;
  owner?: string;
  rarity?: string;
  attributes?: {
    trait_type: string;
    value: string;
  }[];
}

export interface Stats {
  totalNFTs: number;
  totalOwners: number;
  floorPrice: string;
  totalVolume: string;
}
export type SortOption = "id" | "price" | "rarity";
export type SortDirection = "asc" | "desc";
export type RarityFilter =
  | "all"
  | "common"
  | "uncommon"
  | "rare"
  | "epic"
  | "legendary";
