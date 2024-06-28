// const hre = require("hardhat");
const { ethers } = require("hardhat");

async function getBalances(address) {
    const balance = await hre.ethers.provider.getBalance(address);
    // return hre.ethers.utils.formatEther(balance);
    return ethers.formatEther(balance);
}

async function consoleBalance(addresses) {
    let counter = 0;
    for (const address of addresses) {
        console.log(`Address ${counter} balance:`, await getBalances(address));
        counter++;
    }
}

async function consoleData(datas) {
    for (const data of datas) {
        console.log(`At ${data.time}, name ${data.name}, address ${data.from}, message ${data.message}`);
    }
}

async function main() {
    // console.log("Starting deployment...");
    const [owner, from1, from2, from3] = await ethers.getSigners(); // give us the address
    // const from1Balance = await getBalances(owner.address);
    // console.log(`Balance of from1: ${from1Balance} ETH`);
    const chai = await ethers.getContractFactory("chai");
    console.log("Deploying contract...");
    const contract = await chai.deploy(); // object of contract
    await contract.deploymentTransaction().wait(1);
    console.log("Contract deployed at:", contract.target);

    const addresses = [owner.address, from1.address, from2.address, from3.address];
    console.log("Before buying chai");
    await consoleBalance(addresses);

    const amount = { value: ethers.parseEther("2") };
    console.log("Buying chai...");
    await contract.connect(from1).BuyChai("from1", "Nice chai", amount);
    await contract.connect(from2).BuyChai("from2", "Bad chai", amount);
    await contract.connect(from3).BuyChai("from3", "ok chai", amount);

    console.log("After buying chai");
    await consoleBalance(addresses);
    console.log("Finished.");

    const datas = await contract.getData();
    consoleData(datas);
}

main().catch((error) => {
    console.error(error);
    process.exitCode = 1;
});