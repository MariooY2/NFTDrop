# Cosmic Voyagers NFT

![Cosmic Voyagers NFT](https://github.com/MariooY2/NFTDrop/tree/main/public/main.png)

A next-generation NFT collection that takes you on an interstellar journey through the cosmos.

## Overview

Cosmic Voyagers NFT is a unique digital collectible project featuring a meticulously curated collection of cosmic explorers. Each NFT represents a distinct voyager with varying rarity traits, backstories, and cosmic abilities.

This repository contains both the frontend application (built with Next.js) and the smart contract development environment (using Hardhat).

## Tech Stack

### Frontend

- **Next.js 15** - React framework for building the web application
- **TailwindCSS** - Utility-first CSS framework for styling
- **RainbowKit** - For wallet connection and Web3 interactions
- **TypeScript** - For type safety and improved developer experience

### Smart Contract

- **Hardhat** - Ethereum development environment
- **Solidity** - Smart contract programming language
- **OpenZeppelin** - Secure smart contract library

## Features

- **Responsive Web Design**: Mobile-first approach for all screen sizes
- **Web3 Integration**: Connect with MetaMask and other popular wallets
- **Live Minting**: Mint NFTs directly from the dApp
- **Collection Gallery**: Browse through the entire collection
- **Stats Dashboard**: View collection statistics in real-time

## Getting Started

### Prerequisites

- Node.js (>= 18.x)
- npm or yarn
- MetaMask or other Web3 wallet

### Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/cosmic-voyagers-nft.git
cd cosmic-voyagers-nft
```

Install dependencies:

```bash
npm install
# or
yarn install
```

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Smart Contract Development

The hardhat folder contains all files related to the smart contract:

```bash
cd hardhat
npm install
```

Compile the contracts:

```bash
npx hardhat compile
```

Run tests:

```bash
npx hardhat test
```

Deploy to a network:

```bash
npx hardhat run scripts/deploy.js --network <network-name>
```

## Project Structure

```
├── app/                # Next.js application pages and components
├── components/         # Reusable React components
├── styles/             # Global styles and Tailwind config
├── public/             # Static assets
├── hardhat/            # Smart contract development
│   ├── contracts/      # Solidity smart contracts
│   ├── scripts/        # Deployment and interaction scripts
│   ├── test/           # Smart contract tests
│   └── hardhat.config.js
└── next.config.ts      # Next.js configuration
```

## Deployment

The frontend can be deployed to Vercel or any other hosting service that supports Next.js applications:

```bash
npm run build
# or
yarn build
```

The smart contract can be deployed to Ethereum testnet or any other EVM-compatible network using Hardhat:

```bash
cd hardhat
npx hardhat run scripts/DeployContract.ts --network sepolia
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Project Link: [Link](https://github.com/MariooY2/NFTDrop)

Created with