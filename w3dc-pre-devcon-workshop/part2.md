



# Outro#1 Account Abstraction. Recap


![alt text](/image-36.png)


---
layout: two-cols
---


# Account abstraction != ERC-4337
- Idea: since ETH inception
- Vitalik work on it since 2016 [History of AA](https://www.youtube.com/watch?v=iLf8qpOmxQc)
  - Ideal = launch Ethereum with All smart contract account, no EOA
- "Kind of AA" - Smart Contract Wallets Safe, Argent...
- [Polymarket uses a Proxy account via Safe (Smart Contract)](https://docs.polymarket.com/#proxy-wallets)

<!-- ![alt text](/image-25.png) -->

::right::

Recap: Abstraction

![alt text](/image-24.png)

---
---

# Account Abstraction

- Logically
  - Use Smart Contract to create powerful Account
  - Make EOA more like a Smart Account


- Recent Work
  - EIP4337 = decentralized AA infra, UserOp, paymaster
      - gasless txn, session keys etc..
  - (Proposing) [EIP-7702 as alternative to EIP-3074](https://www.theblock.co/post/293074/vitalik-buterin-proposes-eip-7702-aiming-to-refine-account-abstraction-on-ethereum?modal=newsletter)

<br />

## Readings

[ELI5: Account Abstraction by Liraz | Devcon Bogotá](https://www.youtube.com/watch?v=QuYZWJj65AY)

[A history of account abstraction by Vitalik](https://www.youtube.com/watch?v=iLf8qpOmxQc)


---
---

# Global state is good, Wt about privacy?

![alt text](/image-41.png)

---
---

# Outro #2 FHE

### Say you're building a onchain IG-ish image filter service..

<img src="/image-39.png" class="h-3/4" />

<footer className="absolute bottom-0">
Credit: [Inco: The modular confidential computing network](https://www.youtube.com/watch?v=UNTYdh3AVBE)
</footer>

---
---
# FHE

## Textbook definition
Fully-homomorphic encryption (FHE) allows us to compute an arbitrary program over someone else’s private data, without learning anything about the data or the output of the computation.

<br />

## Textbook examples
- Hospital encrypt private patient data
- Companies offer service to analyze encrypted data for aggregated statistics

<br />


## Readings
[A 6 minute introduction to Fully Homomorphic Encryption (FHE)](https://www.zama.ai/introduction-to-homomorphic-encryption)


---
---

# Homomorphism

- the Name
  - morph = (form, shape)
  - isomorphism = ~identical
  - homo = ~homogenous, same, similar 
  - isomorphism != homomorphism

- which means..
  - "Structure preserving map"
  - "At more abstract level, form stay unchanged after applying some functions"
  - "Fully" - All types of compute (addition, multiplication), unlimtied # of times 


---
class: bg-white text-black
---

[GSheet](https://docs.google.com/spreadsheets/d/11iz80jFWlHNgt4MSq_uu7guPbj11hPbLy9prOeEik8w/edit?gid=0#gid=0)

---

<!-- # Fully Homorphic Encryption -->

![alt text](/image-26.png)




---
layout: two-cols
---

# You can build today


- Decentralized FHE 
  - [fhEVM by Zama]
  - [Inco](https://www.inco.org/)
    - offer Confidentiality-as-a-Service w/ fhEVM
  - [Nillion](https://nillion.com/)
  
  - [Fhenix](https://docs.fhenix.zone/docs/devdocs/Setting%20Up%20Your%20Environment/intro)
    - L2 rollup on fhEVM 


- Libraries
  - [tFHE-rs by Zama](https://github.com/zama-ai/tfhe-rs)
    - Control flow -> Circuits

- Trends & Latest Startups
 - [The State of FHE: VC Panel Discussion by Zama](https://youtu.be/eU2AUp1vKfc?si=YuUsTm9Zz759V47n)

::right::

![](/image-37.png)

---
---

## Why now
- Privacy preserving apps in AI era
- Blockchain by default = public
- Faster computing
 

- Composable (e.g. prediction market)

[Chips to Compute With Encrypted Data Are Coming](https://spectrum.ieee.org/homomorphic-encryption)

<!-- similar to AI -->


---
---

<!-- # Conclusion

### Know enough

- drand projects: CICD
- "useable" -->


## Outro: the Programmable Cryptography Technology Tree

<br />

<img src="/image.png" class="h-3/4" />


- [Programmable Cryptography by 0xPARC](https://0xparc.org/blog/programmable-cryptography-1)



<!-- 
# use ZK-SNARKs for privacy
"HE is like ZK for arbitrary functions"
- Here’s an output y and an arbitrary function f. I know a secret value x such that f(x) = y”

# - Vitalik: `Blockchains can make state information global, ZK-SNARKs can make state information private, but we don't really have any good way to make state information global and private at the same time.` -->


<!-- 
##  3 color maps
https://docs.google.com/presentation/d/17QuoDRTCNE8-DnFysZCyxpQvUA_1dEo7Hs1rgXhHHKA/edit#slide=id.g102e66aa652_0_257
 -->




