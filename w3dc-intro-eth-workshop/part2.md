# Table of Contents

Part 2

---


## window.ethereum provider


- On [uniswap](https://app.uniswap.org/)
    - Try in Dev Console "window.ethereum"
    - On incognito?
    - Before & after unlocking metamask?


- Try running the sample code in the spec

<code>
ethereum
  .request({ method: 'eth_accounts' })

</code>

- https://eips.ethereum.org/EIPS/eip-1193


---

# Provider
- The Provider is said to be “connected” when it can service RPC requests to at least one chain.


"A JavaScript object made available to a consumer, that provides access to Ethereum by means of a Client."


"viem"
A Client in the context of viem is similar to an Ethers.js Provider.

"interface to "public" JSON-RPC API"


- "Transport" for EIP1193-provider



Debug from etherscan

---
---


## Scaffold - ETH
- https://docs.scaffoldeth.io/#scaffold-eth-2-tech-stack

Hardhat or Foundry (user's choice) for running local networks, deploying and testing smart contracts.
Wagmi for React Hooks to start working with Ethereum.
Viem as low-level interface that provides primitives to interact with Ethereum. The alternative to ethers.js and web3.js.
NextJS for building a frontend, using many useful pre-made hooks.
RainbowKit for adding wallet connection.
DaisyUI for pre-built Tailwind CSS components.


---
---

![alt text](image-8.png)


## SCW
- account abstraction 
- change the flow

![alt text](image-9.png)


## RainbowKit
- high level react components to connect wallet
- try it
- https://www.rainbowkit.com/docs/installation
  - setup config

- Try working examples
  - https://www.rainbowkit.com/docs/installation
  
