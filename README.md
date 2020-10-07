# Voting App

## What is it?
After many struggles, trials and errors, we were finaly able to create a voting application that allows for users to vote securely with the help of CodeXpert. 

## How it works?
This voting app currently has two candidates, Alice and Bob. To vote, one can use Metamask to connect to the ethereum blockchain. This enables the encryption of 
online wallets while using gas to vote for the two candidates. Our contract is set up so that only one vote can be cast per ethereum account, blocking anyone from 
voting more than once, or for more than one candidate.

## How it was built?
We used Remix ide to build our smart contracts in Solidity, and deploy them to our blockchain for front-end use.

## Process of creation?
First we had to decide what kind of app we wanted to build, and ended up choosing a voting app.Then we had to find something online that had the most current updates 
for Solidity i.e. pragma version, and wasn’t deprecated. Afterwards we started testing a variety of tutorials, filtering out out-dated material and information.
Finally, we found CodeXpert's tutorial on a Voting Dapp using Solidity and Etheruem, and all our wishes came true.

## How to use it?
1. git pull from the repo
2. Run npm install and run node index.js in terminal
3. Make sure user’s MetaMask is connected to the website, is on the Ropsten Test Network, and has enough ether for gas
4. Click on either of the two Vote Buttons, wait for MetaMask window to open
5. Click confirm on bottom left of MetaMask window to allow for gas consumption of vote
6. Wait for confirmation from MetaMask
7. Refresh page to see your vote be reflected on the site!

Note: each voter gets exactly one vote, any additional vote requires a different Metamask account

