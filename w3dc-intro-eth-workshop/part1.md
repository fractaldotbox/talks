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
  - Imagine you're buying food from different stores with a offline phone..
  - OK We have entralized banks or VISA/Master...
  - Ok We don't trust them. Lets decentralize

<img border="rounded" style="width: 500px;" src="/image-16.png" alt="">


---
layout: two-cols
---

# Blockchain (since 1982)
## 

![alt text](/image-7.png)
::right::

## 

<br />
<br />

- BTC = UTXO
- ETH = Account Model

##### [📖Read More - Alchemy](https://docs.alchemy.com/docs/utxo-vs-account-models#:~:text=Ethereum's%20account%2Dbased%20transactions%20must,simple%20and%20stateless%20as%20possible.)

![alt text](/image-1.png)

---
layout: center
---

## a decentralized, secure, programmable one?


## with a culture / community?


<!-- Try not to ask eth vs sol -->

---
layout: center
---

# Blockchain .. as in distributed systems


#### notes from my uni days (2010...literally Before.ETH.)

<img border="rounded" style="width: 450px;" src="/image-1_2.png" alt="">


- Never truly absolute global time across systems

- since 70s - study orders of events happening across systems





---
layout: two-cols
---

## Byzantine Generals Problem (DYOR)

- inaccurate time, failures, dishonest actors etc...


<img border="rounded" style="width: 500px;" src="/image-1_7.png" alt="">

<br />


<img border="rounded" style="width: 400px;" src="/image-21.png" alt="">
::right::


<br />
<br />
<br />
<div style="color:yellow; width: 300px; padding: 50px;"> But we're not living in Eastern Roman Empire </div>


<!-- More - [Byzantine Generals Problem](https://medium.com/@ayogun/byzantine-generals-problem-a47b33ef87fc) -->

---
layout: two-cols
---

# Laggy Age of Empires problem

- inaccurate time, failures, dishonest actors etc...

<img border="rounded" style="width: 400px;" src="/image-1_7.png" alt="">

::right::

![alt text](/image-18.png)

FoW (Fog of war)...
<br/>
- Is my alliance trustworthy?
- When should you attack?


---
---

## "Byzantine Fault Tolerance"

<img border="rounded" style="width: 500px;" src="/image-1_7.png" alt="">

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
![alt text](/image-18.png)

- transparent, common world state
- trustless mechanisms
- incentivized actors


::right::

<br />
<br />
<br />

![alt text](/image-19.png)

---
---

# in Ethereum we trust

<br />

<img border="rounded" style="width: 600px;" src="/image-25.png" alt="">




---
layout: center
---



<a href="https://medium.com/@virgilgr/ethereum-is-game-changing-technology-literally-d67e01a01cf8">

<img border="rounded" style="width: 600px;" src="/image-1_3.png" alt="">
</a>

Enabling new game theoretic mechanisms

<!-- 

hanging out with core devs 
spent lots of time talking abt mevs etc

 -->

---
---

## Vitalik's version

<img border="rounded" style="width: 500px;" src="/image-1_11.png" alt="" />

<!-- 
Vitalik on usefulness
https://x.com/VitalikButerin/status/1819146290271490403 -->


---
layout: center
---

Let's put everything on-chain...
Huh?

<!-- 

Go to Biz meetings

Technical architect pov

Delete new games

Highlight network effects

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
- Trustless royalties..can we?
  - Short ans: not on L1


::right::

![alt text](/image-27.png)



---
layout: two-cols
---

# Trustless

### Polymarket as an example
- on-chain prediction market
<div style="padding:10px;">

<img border="rounded" style="width: 400px;" src="/image-26.png" alt=""> 
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


<!-- ![alt text](/image-1.png) -->


# OK Now we solved existential crisis

## Time to fall in love with Ethereum!



<img border="rounded" style="width: 300px;" src="/image-22.png" alt="">



---
layout: two-cols
---


# Let's talk sth "simple"

### Swapping on Uniswap(DEX)...

1. Connect
2. Select on UI

3. Sign Transaction!
4. Done, Easy! 
...ignoring how AMM works



::right::

![alt text](/image-29.png)

<!-- Ask: who tried on DEX?

native eth so no Approve ERC20 allowance)
 -->

---
layout: center
---
Swapping on Uniswap...
Sign Transaction
<br />
<br /> Wait. We have to pay gas.

---
layout: image-right
image: /image-50.png
---

# What Gas? Why? 

### Compute resource is finite 
- Gas mechanism helps to secure the network & avoid spam

- [Pay for what you compute/store](https://ethereum.org/en/developers/docs/gas/)
- EVM opcode and "gas price tag" https://www.evm.codes/

- [EIP-1559 = fee market mechanisms](https://consensys.io/blog/what-is-eip-1559-how-will-it-change-ethereum)
  - [📖Inevitable Ethereum](https://inevitableeth.com/home/ethereum/network/consensus/eip-1559)

<!-- 
Reading the yello paper
You will find a menu like a cafe

A lot of technical implications
 -->


---
layout: image-right
image: /image-49.png
---

# Gas on L2 are quite low


[l2fees.info](https://l2fees.info/)

L1 base fee + L2 (sequencer fee)

<!-- <img border="rounded" style="width: 300px;" src="/image-49.png" alt=""> -->




---
layout: center
---
Swapping on Uniswap...
"Connecting wallet" - Wait. how my wallet works?


---
layout: two-cols
---


### Recap: Your account lives on the chain

<!-- - EOA
  - external as in blockchain do not run code in it -->

![alt text](/image-30.png)

- you signs transactions for it!

<small>  we have both for some historical reasons <br/>- [📖Vitalik Buterin - a history of account abstraction](https://www.youtube.com/watch?v=iLf8qpOmxQc) </small>

<!-- 
## Limitations of EOA

### Real world metaphor

Buying a coffee
- Passing your coffee loyalty card to your friend.. OK 
- Passing your whole wallet with all your ATM password.. wait
 
For now imagine smart contract is a microservices

 -->




---
---

### You signs txn for it!


<img border="rounded" style="width: 500px;" src="/image-32.png" alt="">


---
---

## Basics of Private/Public Key (DYOR)
- Assume you know enough about assymetric encryption / cold wallets
-  [HD Wallets](https://www.ledger.com/academy/crypto/what-are-hierarchical-deterministic-hd-wallets)
- Deep Dive
  - [Understanding Cryptography](https://link.springer.com/book/10.1007/978-3-642-04101-3)
  - [Read World Cryptography](https://www.manning.com/books/real-world-cryptography)
<!-- ![alt text](/image-8.png)  -->


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


![alt text](/image-31.png)

---
---
# Custodial vs non custodial (DYOR)

- custodial..defeat the purpose?

- semi-custodial
![alt text](/image-51.png)


---
layout: center
---

"Connect Wallet" - Which wallets are supported?




---
---

## Wallets. Wallets everywhere 

- (and no perfect way to categorize them)

<img border="rounded" style="width: 600px;" src="/image-10.png" alt="">


<!-- 
we have some wallet expert here...
 -->


---
---

## Jargons. Jargons everywhere 
- SCW
- TSS
- SSS
- MPC
- Multi-sig
- HSM
- DKG

warning: slippy definitions


---
---

# SCW - Smart Contract Wallet
- Supported.. if they align the standard
- [ERC-1271: Standard Signature Validation Method for Contracts](https://eips.ethereum.org/EIPS/eip-1271)
  - [📖EIP-1271 Explained](https://cow.fi/learn/eip-1271-explained)

- Opens lots of possibiltiies / Quite different flows (DYOR)
<img border="rounded" style="width: 500px;" src="/image-9.png" alt="">

---
layout: two-cols
---

# Multi-sig
## 
<b style="color:yellow;"> 1 Acc | M signature | M Key | M Parties </b>

<br />

#### Fiat
- Joint account with spouse (Not financial advice)
 - 1-of-2 / 2-of-2



::right::

<br/>
<br/>
<br/>
<br/>

#### Crypto
  - Multiple signatures from multiple keys to control a SCW (Smart Contract Wallet)


![alt text](/image-34.png)


---
---

# TSS - __Threshold__ Signature Scheme
## 
<b style="color:yellow;"> 1 Acc | 1 signature | M Key | N Parties </b>



K/N parties to produce 1 signature

Fiat ~ - Company Treasury with motion from Board of directors

- More an umbrella term


- [Ref](https://medium.com/keepnetwork/threshold-ecdsa-safer-more-private-multi-signatures-51153f3e9ed2)


---
layout: two-cols
---

## ok you want 1 key M parties

<br />

Naively... sharing a password 
<br />
(🙅‍♂️Don't do that in production!)


<code>
wB9V | EqJ_.yq | wdqPk 
</code>

<br />
<br />
Ok. Better ways with Cryptography™️


::right::


<img border="rounded" style="width: 400px;" src="/image-48.png" alt="">




<!-- 
I want my team to have control..

- not the most secure ways for some obvious reason 
Unfortunately I hv seen that in prod in some big VC -->

---
<!-- layout: two-cols -->
---

# SSS - Shamir's Secret Sharing (scheme)
## 
<b style="color:yellow;"> 1 Acc | 1 signature | 1 Key | N Parties </b>

![alt text](/image-35.png)

- possible to replace key shard

- Easier to understand from maths perspective

::right::



---
---

# SSS - "K points to find polynomial" (DYOR)

<SlidevVideo style="height:400px;" v-click autoplay controls>
  <!-- Anything that can go in an HTML video element. -->
  <source src="https://cdn.sanity.io/files/r000fwn3/production/b9cb032732f564764e341a4969099c43bf08959a.mp4
  " type="video/mp4" />

  <p>
    Your browser does not support videos. You may download it
  </p>
</SlidevVideo>



[Visualized by Evervault](https://evervault.com/blog/shamir-secret-sharing)

<!-- 
Core intuition is easy

If and only if sufficient points, uniquely determine the curve & secrets -->

---
---

# MPC

## 
<b style="color:yellow;"> 1 Acc | 1 signature | 0 Key | N Parties </b>

- "the key" never appears = more secure

- used not only in wallet signing
  - e.g. calculate sum of a teams salaries without sharing their salaries explicitly
  - e.g. [TLSNotary](https://tlsnotary.org/)

- ~~magic~~ just cryptography. Since 1982
  - Fast enough now
  - [📖 MPC 101](https://www.fireblocks.com/what-is-mpc/)
  - [📖 MPC by Evervault](https://evervault.com/blog/multi-party-computation)



<!-- ![alt text](/image-9.png) -->



  <!-- https://mmasmoudi.medium.com/an-overview-of-multi-party-computation-mpc-threshold-signatures-tss-and-mpc-tss-wallets-4253adacd1b2 -->



---
layout: two-cols
---

# Good to deep dive for hackathon


### Wallets ain't created equal
- cost, privacy concern
  - multisig = on-chain 
- upgradability 
  - smart contract upgrade  

### Many ideas around
  - Improving Ethereum UX
  - Innovation with Programmable wallet/keys 
- =Wallet innovations
- =use case from Signing primitives (attestation too)


::right::

<br />

<div style="display:flex;align-items:center;flex-direction:column;">
<div style="">

<img border="rounded" style="width: 400px;" src="/image-36.png" alt="">
</div>
<div>
<img border="rounded" style="width: 200px;" src="/image-37.png" alt="">
</div>

</div>

### often bounties from infra
- most likley you need one anyway

<!-- 
hackathons projects 

social logins
 -->
