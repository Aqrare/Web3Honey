import { SignerWithAddress } from "@nomiclabs/hardhat-ethers/signers";
import { expect } from "chai";
import { ethers } from "hardhat";

describe("NFT", function () {
  describe("Deployment", function () {
    let signer: SignerWithAddress;
    let mob1: SignerWithAddress;
    let mob2: SignerWithAddress;
    let mob3: SignerWithAddress;
    let mob4: SignerWithAddress;
    let mob5: SignerWithAddress;
    let nft: any;
    beforeEach(async function () {
      [signer, mob1, mob2, mob3, mob4, mob5] = await ethers.getSigners();
      const Web3Honey = await ethers.getContractFactory("Web3Honey");
      nft = await Web3Honey.deploy();
    });

    it("Should mint correctly", async function () {
      const tokenId = "0";
      const tokenId1 = "1";
      const tokenId2 = "2";
      const tokenId3 = "3";
      await nft.connect(signer).mint();
      console.log(await nft.tokenURI(tokenId));
      await nft.connect(mob1).mint();
      console.log(await nft.tokenURI(tokenId1));
      await nft.connect(mob2).mint();
      console.log(await nft.tokenURI(tokenId2));
      await nft.connect(mob3).mint();
      console.log(await nft.tokenURI(tokenId3));
      await nft.connect(mob4).mint();
      console.log(await nft.tokenURI("4"));
      await nft.connect(mob5).mint();
      console.log(await nft.tokenURI("5"));
      expect(await nft.ownerOf(tokenId)).to.equal(signer.address);
    });

    // it("Gacha", async function () {
    //   const tokenId = "0";
    //   await nft.connect(signer).mint();
    //   await nft.connect(signer).gacha(tokenId);
    //   await expect(nft.connect(signer).gacha(tokenId)).to.revertedWith(
    //     "You cannot do gacha twice"
    //   );
    //   await expect(nft.connect(mob1).gacha(tokenId)).to.revertedWith(
    //     "You cannot do gacha"
    //   );
    // });

    it("Should not mint twice", async function () {
      await nft.mint();
      await expect(nft.mint()).to.revertedWith("You cannot mint twice");
    });

    it("setMetadataTypes", async function () {
      console.log(await nft.owner());
      const index = "5";
      await nft.setMetadataTypes(index);
      expect(await nft.getMetadataTypes()).to.equal(index);
    });

    it("setBaseTokenUri", async function () {
      const uri = "https://web3-honey.com";
      await nft.setBaseTokenUri(uri);
      expect(await nft.baseTokenURI()).to.equal(uri);
    });
  });
});
