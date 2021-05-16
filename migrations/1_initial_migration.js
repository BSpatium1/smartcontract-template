const MyToken = artifacts.require("../contracts/MyToken.sol");


const PresaleCrowdsale = artifacts.require("../contracts/PresaleCrowdsale.sol");

module.exports = (deployer, network, [owner]) => {
  return deployer
    .then(() => deployer.deploy(MyToken, "Tooploox", "TPX", 18, 21000000))
    .then(() => deployer.deploy(PresaleCrowdsale, 10000, owner, MyToken.address, owner))
    .then(() => MyToken.deployed())
    .then(token => token.increaseApproval(PresaleCrowdsale.address, 10000000000000));
};