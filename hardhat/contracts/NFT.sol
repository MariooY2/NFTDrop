// SPDX-License-Identifier: MIT
pragma solidity ^0.8.22;

import {ERC721} from "@openzeppelin/contracts/token/ERC721/ERC721.sol";
import {Ownable} from "@openzeppelin/contracts/access/Ownable.sol";
import {Strings} from "@openzeppelin/contracts/utils/Strings.sol";

contract NFT is ERC721, Ownable {
    uint256 private _nextTokenId;
    uint256 public constant MAX_SUPPLY = 5;
    uint256 public constant PRICE = 0.1 ether;
    uint256 public constant MAX_PER_WALLET = 2;

    mapping(address => uint256) public mintedPerWallet;

    event NFTMinted(address indexed minter, uint256 tokenId);
    event FundsWithdrawn(address indexed owner, uint256 amount);

    constructor() ERC721("Crypto Cat", "CAT") Ownable(msg.sender) {}

    function _baseURI() internal pure override returns (string memory) {
        return
            "https://bafybeihufv2xsgjxc7x6zu4raluamfom5k5s3hvkp2rshx5c6tbgy2656u.ipfs.w3s.link/";
    }

    function safeMint(address to) public payable returns (uint256) {
        require(tx.origin == msg.sender, "Contracts cannot mint");
        require(_nextTokenId < MAX_SUPPLY, "Max supply reached");
        require(msg.value == PRICE, "Incorrect ETH amount");
        require(
            mintedPerWallet[to] < MAX_PER_WALLET,
            "Max NFTs per wallet reached"
        );

        mintedPerWallet[to]++;
        uint256 tokenId = _nextTokenId++;
        _safeMint(to, tokenId);

        emit NFTMinted(to, tokenId);
        return tokenId;
    }

    function totalMinted() public view returns (uint256) {
        return _nextTokenId;
    }

    function tokenURI(
        uint256 tokenId
    ) public view override returns (string memory) {
        require(_ownerOf(tokenId) != address(0), "Token does not exist");
        return
            string(
                abi.encodePacked(_baseURI(), Strings.toString(tokenId), ".json")
            );
    }

    function withdraw() public onlyOwner {
        uint256 balance = address(this).balance;
        require(balance > 0, "No funds to withdraw");

        payable(owner()).transfer(balance);
        emit FundsWithdrawn(owner(), balance);
    }

    function supportsInterface(
        bytes4 interfaceId
    ) public view override(ERC721) returns (bool) {
        return super.supportsInterface(interfaceId);
    }
}
