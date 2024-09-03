---
layout: center
---

## Lets build!


---
---


# But I don't know Solidity!

- Basics isn't that hard (mastering it is hard)

<br />

- Build on others' protocol
- Templates & Libraries
- Work with smart contract dev / AI

---
layout: center
---

the actual bigger problem:
<br />
What to build?

---
---


# What's "dApp"?
- De-Fi?
- Identity?
- on-chain data & activities?
- on top of some protocol?


## Examples

- [Uniswap](https://app.uniswap.org/)

- [Polymarket](https://polymarket.com/)

- [Fileverse](https://fileverse.io/)

<!-- We are going to Dissect -->


---
layout: center
---

## But why dApp?


---
layout: center
---

## Firstly, why blockchain...

---
---


# Why Blockchain

- Double spending problem
  - Imagine you're buying     od from different stores with a offline phone..
  - OK We have entralized banks or VISA/Master...
  - Ok We don't trust them. Lets decentralize

<img border="rounded" style="width: 500px;" src="image-16.png" alt="">


---
layout: two-cols
---

# Blockchain (since 1982)
## 

![alt text](image-7.png)
::right::

## 

<br />
<br />

- BTC = UTXO
- ETH = Account Model

##### [📖Read More - Alchemy](https://docs.alchemy.com/docs/utxo-vs-account-models#:~:text=Ethereum's%20account%2Dbased%20transactions%20must,simple%20and%20stateless%20as%20possible.)

![alt text](image-1.png)

---
layout: center
---

## a decentralized, secure, programmable one?

---
layout: center
---

# Blockchain .. as in distributed systems


#### notes from my uni days (2010...literally Before.ETH.)

<img border="rounded" style="width: 450px;" src="image-1_2.png" alt="">


- Never truly absolute global time across systems

- since 70s - study orders of events happening across systems





---
layout: two-cols
---

## Byzantine Generals Problem (DYOR)

- inaccurate time, failures, dishonest actors etc...


<img border="rounded" style="width: 500px;" src="image-1_7.png" alt="">

<br />


<img border="rounded" style="width: 400px;" src="image-21.png" alt="">
::right::


<br />
<br />
<br />
<div style="color:yellow; width: 300px; padding: 50px;"> But we're not living in Eastern Roman Empire </div>


<!-- More - [Byzantine Generals Problem](https://medium.com/@ayogun/byzantine-generals-problem-a47b33ef87fc) -->

---
layout: two-cols
---

# Age of Empires problem

- inaccurate time, failures, dishonest actors etc...

<img border="rounded" style="width: 400px;" src="image-1_7.png" alt="">

::right::

![alt text](image-18.png)

FoW (Fog of war)...
<br/>
- Is my alliance trustworthy?
- When should you attack?


---
---

## "Byzantine Fault Tolerance"

<img border="rounded" style="width: 500px;" src="image-1_7.png" alt="">

- [algorithms like pBFT - since 90s](https://www.geeksforgeeks.org/practical-byzantine-fault-tolerancepbft/)

- not blockchain specific

- "Reach Concensus"


---
layout: center
---

Both challenge & values of a decentralized blockchain

---
layout: two-cols
---

### Blockchain removes FoW
### adds new ways for coordinations 

## 
![alt text](image-18.png)

- transparent, common world state
- trustless mechanisms
- incentivized actors


::right::

<br />
<br />
<br />

![alt text](image-19.png)

---
---

# in Ethereum we trust

<br />

<img border="rounded" style="width: 600px;" src="image-25.png" alt="">




---
layout: center
---



<a href="https://medium.com/@virgilgr/ethereum-is-game-changing-technology-literally-d67e01a01cf8">

<img border="rounded" style="width: 600px;" src="image-1_3.png" alt="">
</a>

Enabling new game theoretic mechanisms


---
---

## Vitalik's version

<img border="rounded" style="width: 500px;" src="image-1_11.png" alt="" />



---
layout: center
---

Let's put everything on-chain...
Huh?

<!-- 

# We will be fully on-chain...
- e.g. "on-chain game"

- Why farcaster
- polymarket -->

---
layout: center
---

~~Let's put everything on-chain...~~
<br />
What make sense to be on chain?



---
layout: two-cols
---

# Digital Asset

### NFT
- on-chain token (ERC721/1155)
- image usually on IPFS
  - immutable
- censorship resistant

::right::

![alt text](image-27.png)



---
layout: two-cols
---

# Trustless

### Polymarket as an example
- on-chain prediction market
<div style="padding:10px;">

<img border="rounded" style="width: 400px;" src="image-26.png" alt=""> 
</div>
::right::

I trust...
- no one can take away the $ (self-custodial)
- always payout ([Gnosis Conditional Token](https://docs.gnosis.io/conditionaltokens/) design ensure liquidity)
- honest outcome (enforced by smart contract/oracle)
- censorship resistant (everyone can participate)


~~if:~~
- ~~smart contract don't get hacked~~
- ~~smart accounts don;t get locked~~
- ~~fair resolution at UMA oracle~~

---
---


# Back to the Why dApp Q
- Liquidity & Community
- Ecosystems
- New games (mechanisms)

<br />

#### Your call to mix and match
- look at farcaster (decentralized social)
  - not everything "on-chain", separted gossip protocols
- Does a on-chain duolingo make sense?

---
---

<!-- - change trust assumptions
- trustless, transparent 
- enough liqudity -->


<!-- 
- polymarket / trustless
- nft / immutable / ownership  
- autonomous world / agent params and action space
- censorship resistant / tornado cash / someone stop you transfer a to b 
Ofac
- mirror / publishing vs facebook -->


<!-- ![alt text](image-1.png) -->


# OK Now we solved existential crisis

## Time to fall in love with Ethereum!



<img border="rounded" style="width: 300px;" src="image-22.png" alt="">



---
layout: two-cols
---


# Lets talk abt something simple

### Swapping on Uniswap...

1. Connect
2. Select on UI
2. (Approve ERC20 allowance)
3. Sign Transaction!
4. Done, Easy! ignoring how AMM works



::right::

![alt text](image-29.png)

---
layout: center
---

"Connecting wallet" - Wait how my wallet works?


---
layout: two-cols
---


### Recap: Your account lives on the chain

<!-- - EOA
  - external as in blockchain do not run code in it -->

![alt text](image-30.png)

- you signs transactions for it!

---
---

### You signs txn for it!


<img border="rounded" style="width: 500px;" src="image-32.png" alt="">


---
---

## Basics of Private/Public Key (DYOR)
- Assume you know enough about assymetric encryption / cold wallets
-  [HD Wallets](https://www.ledger.com/academy/crypto/what-are-hierarchical-deterministic-hd-wallets)
- Deep Dive
  - [Understanding Cryptography](https://link.springer.com/book/10.1007/978-3-642-04101-3)
  - [Read World Cryptography](https://www.manning.com/books/real-world-cryptography)
<!-- ![alt text](image-8.png)  -->


---
layout: two-cols
---

## "Wallet"
<br />
Case of Metamask Browser extension
<br />

- both wallet UI & key storage
- works with cold wallet too!

::right::


![alt text](image-31.png)

---
---

## Wallets. Wallets everywhere 

![alt text](image-10.png)



---
---

## TSS & SSS
-  Threshold Signature Scheme
  - update 
---
---
## SCW
- account abstraction 
- change the flow

<!-- ![alt text](image-9.png) -->



## SSS
- Matheamtical intutiion

---
layout: center
---
Swapping on Uniswap...
<br /> Wait. How the dApp talk to the blockchain?



---
layout: center
---
APIs!
<br />
specifically, JSON-RPC
<br />
stateless, light-weight remote procedure call (RPC) protocol

---
---
## What happens with a txn

Simplified
<br/>
<img border="rounded" style="width: 500px;" src="image.png" alt="">

---
---

<!-- rpc -->
<!-- ![alt text](image-28.png) -->


# in your browser: window.ethereum 



- On [Uniswap](https://app.uniswap.org/) with metamask
    - Try in Dev Console "window.ethereum"
    - On incognito?
    - Before & after unlocking metamask?

- [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)

- Metamask injected the window.ethereum provider

- Try running the sample code in the spec, e.g.

<code>
ethereum
  .request({ method: 'eth_accounts' })

</code>


---
---

# What happens under the hood

---
---


<!-- ![alt text](image-8.png) -->

# 2 practical types of txn


## Limitations of EOA

### Real world metaphor

Buying a coffee
- Passing your coffee loyalty card to your friend.. OK 
- Passing your whole wallet with all your ATM password.. wait


---
---



---



## Fiat equivalents
- Joint account with spouse (Not financial advice)
- CFO with Company governance / Board of directors 

## Crypto equivalent 
  - Multisig 
  - MPC


---
---


Core intuition is easy

Only with enough points, uniquely determine the curve


### Multisig vs TSS vs MPC
- cost, privacy concern
  - multisig = on-chain 
- upgradability 
  - smart contract upgrade  


![alt text](image-2.png)


## Transactions
![alt text](image-6.png)
![alt text](image-4.png)


## EVM / solidity

![alt text](image-7.png)

![alt text](image-5.png)

## Gas


![alt text](image-3.png)


https://x.com/VitalikButerin/status/1819146290271490403



---
---


I want my team to have control..

Navie way

Split password

- not the most secure ways for some obvious reason 
Unfortunately I hv seen that in prod


## Connect vs Sign


- Web2: Login button

- Web3: 
  - Connect: RPC connection. Client shows on-chain wallet  
  - Login: (Sign-in With Ethereum) SIWE. Signatures sent to server




Wallet Connect provider


https://docs.walletconnect.com/advanced/providers/ethereum



# 
Custodial vs non custodial 
Semi custodial 
Gaming Sequence





---





---
---