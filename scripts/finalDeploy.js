const { ethers } = require("hardhat");

async function main() {
    const chai = await ethers.getContractFactory("chai");
    const contract = await chai.deploy(); // object of contract
    await contract.deploymentTransaction().wait(2);
    console.log("Address of the contract:", contract.target);
}


main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});