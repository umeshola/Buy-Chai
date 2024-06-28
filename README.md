# Sample Hardhat Project

This project demonstrates a basic Hardhat use case. It comes with a contract which can ask eth from the user to a single address.

Try running some of the following tasks:

```
npm install
yarn hardhat run scipts/deploy.js
```
if this is working fine then 
deploy on the testnet --sepolia (make sure to add your env file with the sepolia URL and your metamask private key)
```
yarn hardhat deploy .\scripts\finalDeploy.js 
```
copy the contract address and check in on the etherscan.

# Now frontend
```
cd client
npm install
npm start
```
in contractAddress past your add which you have copied above.

