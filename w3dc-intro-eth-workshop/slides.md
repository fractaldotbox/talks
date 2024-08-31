---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
# background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: W3DevC - Build on ETH Intro Workshop
info: |
 ## Workshop by https://web3dev.community/
# apply unocss classes to the current slide
class: text-center
# https://sli.dev/custom/highlighters.html
highlighter: shiki
# https://sli.dev/guide/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations#slide-transitions
transition: slide-left
# enable MDC Syntax: https://sli.dev/guide/syntax#mdc-syntax
mdc: true
layout: image
image: https://images.lumacdn.com/cdn-cgi/image/format=auto,fit=cover,dpr=2,background=white,quality=75,width=400,height=400/event-covers/2o/49e1bb41-4c13-4577-a7ac-b2c41f6fce5b

backgroundSize: contain
---

<!-- W3DC - Build on ETH Intro Workshop -->

<!-- In-person dev workshop in Singapore before ETHGlobalSG hackathon -->


<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---

# Who is this for

<br>

This workshop is for developers who want to get started with Web3 dApp development on Ethereuem ecosystems. 

Most importantly, you plan to get your hands dirty, perhaps by participating a hackathon like [ETHGlobalSG](https://ethglobal.com/events/singapore2024) in Sep.   

You're likely either

- 🧑‍💻 **Experienced Web2 Developers** - Developer by trade but you have never build on Web3 in production
- 🙆 **Crypto users** - You're native in web3, somewhat technical and trying to learn how things are built 
- 🚀 **Technical Product People** - You don't code much at work but went through basic programming bootcamps, keen to understand more on web3 devs 


<!--
You can have `style` tag in markdown to override the style for the current page.
Learn more: https://sli.dev/guide/syntax#embedded-styles
-->

<style>
h1 {
  background-color: #2B90B6;
  background-image: linear-gradient(45deg, #4EC5D4 10%, #146b8c 20%);
  background-size: 100%;
  -webkit-background-clip: text;
  -moz-background-clip: text;
  -webkit-text-fill-color: transparent;
  -moz-text-fill-color: transparent;
}
</style>

<!--
Here is another comment.
-->

---
level: 2
---

# Hows this workshop different - Goal

<br />

We know. There are numerous resources online that you can just speedrun.

This in-person workshop try to help you to
- gain momentum, know where to start given your background
- identify key fundamentals and trends
- ask questions to senior industry particioners
- find you hackathon teammates perhaps


---

# Hows this workshop different - Format

<br/>

We think a [Flipped classroom](https://en.wikipedia.org/wiki/Flipped_classroom) make sense.
- We will send out reading list and leading questions before the workshop.
- Workshop will prioritize showcase and Q&A to guide your future curriculum
- ideally we will see each other during the hackathon

It will be a after-work 4*30mins sessions with food.

To get most out of it, you would have to spend a few hours on the reading lists, tried to follow a few tutorials, have a brief project idea in mind and prepare for questions!

---


# Guiding Questions


Hopefully you will have better ideas on some of the below questions to continue your dev journey
- What are censorship resistance, provenance, immutability? 
- How do I deploy a contract, test against my dApp, without using real $ (Env & Testnets setup)?
- How's it different to build apps on "L1 vs L2"? 
- What are some notable dApps and how are they being built? Why Smart contract?
- What are EOA, Smart accounts, Multi-sig, MPC wallets? 
- How to improve transactions confirmations UX in Ethereum?
- What are ERC721, 1155, 6551...which EIPs are must-read?
- What are some creative or state-of-art example hackathon projects?

---
---

# What will NOT be covered
- Protocol knowledge except the essential, such as fault proofs, MEV, ZKEVM etc. We recommend materials from https://epf.wiki/
- Particular techstack (of hackathon sponsors). Check ETHGlobal youtube channel for corredsponding quick intro.
- How to launch a token


## Speaker introduction (TODO)

@Vincent
- https://www.linkedin.com/in/vincentlaucy/
- Organizer of Web3Dev.Community
- Founder, Fractal Labs, Dev studio focusing AI-powered on-chain agents and CMS workflows
- 12yr+ Founder/Tech Lead roles at Animoca, Pixelmon (Web3 VC/Game Studio), 5+ startups in EdTech, FinTech, Localization
- 2x ETHGlobal Finalist with 25k+ prize

@Aaron
- https://www.linkedin.com/in/aaronstevensonlee
- Engineering Manager and Dev Lead at Web3 VC, built staking protocols with millions+ TVL
- 12yr+ Tech Lead roles at govTech & various startups

---
---

# Agenda

- #1 Whats dApp?
- Break out session - wwere should I start?
- #2 Typical dApp frontend
- Bonus - Blinklab Demo 
- #3 Solidity Intro
- #4 Starting a project
- Break out session - Q&A & hackathon project ideas 

---
---

# Agenda - Part1 Draft
30min session on "What is a dAPP and how to build one?"
- Dissecting dApp interactions on [Polymarket](https://polymarket.com/)
- Dissecting a simple, past hackathong project such as [Vincent's past project](https://ethglobal.com/showcase/delegative-wwptp)

- Why smart contract?
- Why NFT?
- What Ethereum/Blockchain helps to guarantee?
- What is IPFS and why? 
  - immutability, censorship resistence, security
- What are some buzzwords you hear often and you want to learn more?

- What is a transaciton? 
- What are some frequently talk about primiative such as hash, signatures, attetations?
- What is EOA vs smart account?
- Intuition / Application of Shamir secret sharing, MPC vs Multi-sig
---
---


---


# Agenda - Part2 Draft



30min session to talk about typical dApp frontend
- wagmi / rainbowkit setup
- Checksummed address
- ENS
- Scaffold ETH
- How to use a blockchain explorer
- Try a transaction on testnet
- What is a Oracle?

---
---


# Agenda - Bonus 

- Demo from blinklabs.ai


---
---

# Agenda - Part3 Solidity
30min sesion to show and tell how smart contracts are being built.
Will not cover details of types, gas optimization tips
- Remix
- Setup a local environment with hardhar/foundry
- What is upgradeable contract?
- Openzepplins  
- testnet faucets
- moonshot: understand how to deploy a basic ERC20 staking contract with vesting

---
---

# Agenda - Part4 Draft
- Notable hackathon projects
- 10min on hackathon tips
- Q&A session
- Open mic to talk about potential hackathon project ideas
- 10-20min on networking / teammates matching


---
---

# Reading List

#### Core Reads
- [ScaffoldETH](https://scaffoldeth.io/)
- [Scaffold ETH 🛠️ Building dApps Quickly](https://www.youtube.com/watch?v=Cg4uL6lnf-s)
- What is [Ethereum Name Service](https://docs.ens.domains/learn/protocol)
- [Protocol Foundations 001: Cryptography](https://summerofprotocols.com/wp-content/uploads/2023/12/53-BEIKO-001-2023-12-13.pdf)
- [Ethereum in 30 minutes by Vitalik Buterin](https://www.youtube.com/watch?v=UihMqcj-cqc)
- [How IPFS works](https://docs.ipfs.tech/concepts/how-ipfs-works/)



#### Recommended Reads

- [Vitalik Buterin | Ethereum's Past, Present, Future & Thoughts on Türkiye](https://www.youtube.com/watch?v=MWaNej58Wn0)
  - Vitalik talked about UX problems, Client centralizations, L2 fragmentations, Sharding etc in the video, helpful to get a glance at how the ecosystems is evolving
- [Protocol Wiki](https://epf.wiki/)
- WIP


---
---
# Date & Venue 


- 4th Sep 2024 (Wed)
- AWS (TBC)


- *Subject to venue/speaker availabiliy



---
layout: two-cols
---

## Organizers

- Web3Dev.Community
  - We have hosted 6+ Dev meetups in Singapore with speakers from Filecoin, Coinbase, Chainlink, LiquidX and more web3 companies.

<img border="rounded" style="height: 150px;" src="https://pbs.twimg.com/media/GL79t75bMAAafKb?format=jpg&name=large" alt="">




<!-- <img border="rounded" src="https://pbs.twimg.com/profile_images/1639560056449662977/gyulatO2_400x400.jpg" alt=""> -->


::right::


## Community Partners


<a href="https://talentweb3.co/">

<img border="rounded" style="height: 100px;" src="https://framerusercontent.com/images/i5WDhu5qjzWfi39Bwi6iEHJcuk.svg" alt="">
</a>

<img border="rounded" style="height: 100px;" src="https://assets-global.website-files.com/62428ba0955ccb660b2e7f1f/6452078557541f634286d1ef_Vectors-Wrapper.svg" alt="">


<a href="">
  <img style="height: 100px;" src="https://ethglobal.storage/events/singapore2024/logo/default">
</img></a>

- [Perks applying hackathon via WebDevCommunity](https://docs.google.com/forms/d/1ap40lW7jSZRIKIaFt_Zglt9Ap4DnaxDGlqUbqi_fYuY/edit) 




---
---
