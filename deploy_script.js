deployedContract = new web3.eth.Contract(abi)
listOfCandidates = ['Rama', 'Nick', 'Jose']
deployedContract.deploy({
data: bytecode,
arguments: [listOfCandidates.map(name => web3.utils.asciiToHex(name))]
}).send({
from: "0x956f06A96D19d1A9Eb8DF311F157789C87A66F36",
gas: 1500000,
gasPrice: web3.utils.toWei('0.00003', 'ether')
}).then((newContractInstance) => {
deployedContract.options.address = newContractInstance.options.address
console.log(newContractInstance.options.address)
});