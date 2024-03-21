const { ethers } = require("hardhat");
const { run } = require("hardhat");
async function verify(address, constructorArguments) {
    console.log(`verify  ${address} with arguments ${constructorArguments.join(',')}`)
    await run("verify:verify", {
        address,
        constructorArguments
    })
}
async function main() {
  
   
//   const LaunchpadFactoryDeployer = await ethers.deployContract( 'BasicERC20Token' , []);

//   const FirstBasicERC20Token = await ethers.deployContract( 'BasicERC20Token' , [ ]);

//     console.log("Deploying FirstBasicERC20Token...");
//     await FirstBasicERC20Token.waitForDeployment();

//     console.log("FirstBasicERC20Token deployed to:", FirstBasicERC20Token.target);

//     await new Promise(resolve => setTimeout(resolve, 10000));
    verify('0xEd24f481661FB758b510886096B92856BC52CAeD', [])
}
main()