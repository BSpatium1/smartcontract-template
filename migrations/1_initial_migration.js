const token = artifacts.require("../contracts/MyToken.sol");

// const crowdsale = artifacts.require("../contracts/MyCrowdsale.sol")


module.exports = (deployer) => {
  deployer.deploy(token, "Tooploox", "TPX", 18, 21000000);
};