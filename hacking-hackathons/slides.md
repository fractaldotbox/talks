---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: https://cover.sli.dev
# some information about your slides (markdown enabled)
title: Hacking Hackathons
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
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
---

# Hacking Hackathons

Reflections after hacking 10+ Web3 hackathons

<div class="pt-12">
  <span @click="$slidev.nav.next" class="px-2 py-1 rounded cursor-pointer" hover="bg-white bg-opacity-10">
    By @debuggingfuture
  </span>
</div>

<div class="abs-br m-6 flex gap-2">
  <button @click="$slidev.nav.openInEditor()" title="Open in Editor" class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" alt="GitHub" title="Open in GitHub"
    class="text-xl slidev-icon-btn opacity-50 !border-none !hover:text-white">
    <carbon-logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->

---
transition: fade-out
---


# Agenda



- Sharing my projects & hacking expereinces below
- Some Takeaways on Hackathon, if that helps
- (Ask me) tech challenges I faced

|     |  |     |    |   | |
| --- | --- | --- |--- |--- |--- |
| 2024-05 | EthGlobal Scaling Ethereum 2024 | (Online) | [Ethereum L10n Service](https://web.ethglobal.com/showcase/ethereuml10nservice-v65cs) | 🏆🏆🏆 Finalist, Filecoin 2nd | $1.2k + Ledger + Flight credits 🧑‍💻
| 2024-06 | EthGlobal HackFs 2024 | (Online) | [Civ AI](https://ethglobal.com/showcase/civ-ai-miwn2)  | 🏆🏆🏆 Finalist, CoopHive 2nd  | $1.2k + Ledger + Flight credits 🧑‍💻🧑‍💻

![Local Image](/ethglobal_hackfs.jpg)



<style>
.slidev-layout td {
  padding: 0.5rem;
  font-size: 0.75rem;
}
img {
  max-height: 12rem;
}
</style>

---

# More Hacks I did recently
|     |  |     |    |   | |
| --- | --- | --- |--- |--- |--- |
| 2023-05 | EthGlobal Tokyo | (IRL) | Shingo |  🏆 Best Use (Nem) | $1.5k 🧑‍💻🧑‍💻🧑‍💻🧑‍💻
| 2023-07 | EthGlobal Paris | (IRL) | [Delegative](https://ethglobal.com/showcase/delegative-wwptp) |  🏆 Best Integration (Apecoin), sismo | $3.5k 🧑‍💻🧑‍💻🧑‍💻🧑‍💻
| 2023-06 | EthGlobal HackFs 2023 | (Online) |  [Tentai](https://ethglobal.com/showcase/tentai-ub5xn) |🏆 Best Use (Bacalhau) | $3k 🧑‍💻
| 2023-09 | EthSeoul 23 | (Online) | ContactusDao |  🏆 Best Filecoin | $2k 🧑‍💻
| 2024-05 | Filecoin Data Hackathon | (Online) |  [DeRag](https://dorahacks.io/buidl/11166) |🏆 Filecoin/ Tableland Runners Up  | $1.3k 🧑‍💻
| 2024-05 | EthGlobal Scaling Ethereum 2024 | (Online) | [Ethereum L10n Service](https://web.ethglobal.com/showcase/ethereuml10nservice-v65cs) | 🏆🏆🏆 Finalist, Filecoin 2nd | $1.2k + Ledger + Flight credits 🧑‍💻
| 2024-06 | EthGlobal HackFs 2024 | (Online) | [Civ AI](https://ethglobal.com/showcase/civ-ai-miwn2)  | 🏆🏆🏆 Finalist, CoopHive 2nd  | $1.2k + Ledger + Flight credits 🧑‍💻🧑‍💻
| 2024-06 | ZuBerlin | (IRL) | ZuBerlin Pilot | 🏆 2nd + Mantle | $3k 🧑‍💻

<p class="note">
Actually - 3 more
</p>

<style>
.slidev-layout td {
  padding: 0.5rem;
  font-size: 0.75rem;
}
.note {
  font-size: 0.6rem;
}
</style>

---




# Experience #1 - CIV AI

## EthGlobal HackFs 2024 (Online) | [Civ AI](https://ethglobal.com/showcase/civ-ai-miwn2)  | 🏆🏆🏆 Finalist  | $1.2k + Finalist pack 🧑‍💻🧑‍💻

- [Slides](https://docs.google.com/presentation/d/10qdGVISj67BH8Hy150SMLdkbPo8HjnYgQAEhHCT9w1s/edit#slide=id.g272b9419a73_0_27)


---


# 1. You need a motiv

- We're Builders after all!

- Spend time learning & building sth Useful, Fun, challenging 

- Be a creator for a weekend (vs your day job)

<!-- what are you passionate about  -->

![image](https://i.makeagif.com/media/7-11-2018/u86vUT.gif)

---



|     |  |     |    |    |  
| --- | --- | --- |--- |--- |
|     |  |     | Story   | Motiv   
| 2023-07 | EthGlobal Paris | [Delegative](https://ethglobal.com/showcase/delegative-wwptp) | Liquid democracy to improve DAO voting rate |  I'm joining a team building DAO tool, I want to learn about on/off-chain voting
| 2023-06 | EthGlobal HackFs 2023 | TENTAI | Decentralized version of Hugging Face Space / Gradio | Explore applications of Bacalhau at decentralize AI 
| 2024-06 | EthGlobal HackFs 2024 |[Civ AI](https://ethglobal.com/showcase/civ-ai-miwn2) | Autonomous (DeAI) Agents collaborate | Explore deAI co-operations / swarm intelligence meanwhile a working solid use cases -- more flexible to build a game perhaps
| 2024-05 | EthGlobal Scaling Ethereum 2024 | [Ethereum L10n Service](https://web.ethglobal.com/showcase/ethereuml10nservice-v65cs) | Ethereum for next billions | Prototype my side project and get feedback, with ETHGlobal as a usecase 

<style>
.slidev-layout td {
  padding: 0.5rem;
  font-size: 0.9rem;
}
.note {
  font-size: 0.6rem;
}
</style>
---



# 2. It's more than hacking

Great that you can hack on your ideas and win some prizes..

While 

- Why are they organizing the hackathon?

- What are some themes organizers/judges looking for?

- Showcase for Techstack? Tools for Decentralizeation/Privacy/Identity? 

- What are other teams building? 

---


# Attention is all you need

![Local Image](/image3.jpg)

---

# You need a story


- ETHGlobal as an example
  - Live juding. 15 teams for each judge, 4mins video + 2mins Q/A
- WOW Factor, Visionary but something working
  - How to resonates with the audience/theme.
  - Is your judge Phd / VC / Technical?

- Don't focus on details but end up with this (TLDR of Game of Thrones on Reddit)
   ![alt text](/image.png)
---

# You need a story, really

- Work backwards
  - does it sounds like a good Twitter post?
  - start demo/slides as soon as possible

- I spent 35%+ time getting the narrative right & confirming things should work
  - okay to be uncertain on parts but back to drawing board if it isnt clear


<!-- It is uncommon to find hackathons reward great engineering challenge -->



---
layout: image
image: /image4.gif
---
# 3. Improvise. Adapt. Overcome.




<!-- - It's a brief time and commitments will popup 
- Things just won't work as expected
- But that's what you've signed up for! -->


---

# My favourite interview question at startups

<br />
Imagine 2 of us are in a hackathon

(After 10mins of Planning & discussion)

What if I got sick & now you're by yourself to submit it. How will you change the scope?


<!-- Some perspectives are like doing startup -->

---

# Improvise
- 80-20 rule. Which is that 20%?

- Listing the bounties/features... Which are must-hv/nice-to-hv?

- Which is most risky? Study & Proof of concept on Day 1?

- Techstack X not working... Change the architecture / narrative? 

- Any out-of-the-box solution for my end-to-end while hinting we could also use component X ?

- ok things actually don't work, how can I make my point?

- Too much external factors
  - Many of my winning projects contain critical bugs

<!-- example: deadline updated after planned winner announcement -->

---

# 4. Yes it's far from perfect

###  Hackathons varies a lot

- Competition

- "Shiny UI seeking"

- Randomness in judging criteria

- Yes it feels bad if you spent hours to build but not hearing about it for weeks

---

# Sometimes. Solns finding pbm

- Engineering Training = Find soln to a problem

- Constraints drives creativity

- Proof of concept. Whats unlocked by latest tech/stack?

- You still need to identify Problem

---



# Experience - 2

##  EthGlobal Scaling Ethereum 2024 (Online)
-  [Ethereum L10n Service](https://web.ethglobal.com/showcase/ethereuml10nservice-v65cs)

- [Slides](https://docs.google.com/presentation/d/1V6rBTyLeF2eGzEFFHQ_eLj2kJzUUNmo71MlyFnanVGI/edit#slide=id.g4dfce81f19_0_45)

---

# Hacking Context
  - I built web-based subtitles streaming before
  - First time writing solidJS, Build with ViteJS & meaningful chrome extension 
  - OpenAI whisper is quite powerful
  - Challenges
    - Lit protocol-> hardcode wallet
    - Video processing is hard to scale -> Limit to 1 short video

---
layout: two-cols
---

# 5. Coordination is fundamentally hard

## What you think your team will do


![Local Image](/image1.gif)

::right::

## What your team actually do
- Do you really know your teammates?

![Local Image](https://giffiles.alphacoders.com/815/81502.gif)


- I worked with PhD, 15 year old...

- usually took 40% time to onboard team to a pre-defined idea

- Integrating Fragile components = Fragile Systems

---

# on the flip side

- Established team is a Huge advantage
 
- OR Fullstack dev go 85% solo with very specific support request 

---


# 6. It's not just abt what you build

- but what others build!

- Check out presentations

- Web3, probably 30% ideas already some mature products out there

- Learn not just the techstack but where the industry is heading


![Local Image](/shoot.gif)

---

# 7. Pick your battlefield


- Join Hackathons of Ecosystems 
  - if you're bullish 
- Join some communities hackathon
  - some got hackers's popular choice
- Join IRL hackathons
  - Wanna Network
  - Get feedback from judges / audience
  - Want the push
- Join Online hackathon
  - Want more maintainability
  - Flexibility
- Know the Rules. Freshcode?

<!-- 6. Don't work for hackathons
Make hackathons work for you -->

<!-- 

Continuity

Ecosystem - some teams more committed

Gitcoin -->

<p>
Good news - 10+ hackathons to join... OR not!
</p>

---



# 8. Hackathon ~ Marathon.. Sign up to stay FIT


- Push yourself to build & learn

- Win or not.. Count what you build & learn
  - Make hackathon work for you! "I'm building this anyway"

- I learnt a ton! Prizes are like cashback.

- streamline your workflows!
  - Templates, LLM Code generations, AI image, Slides, Loom

---

- some Sportsmanship. Try to complete! That's the point
  - I hacked UI & Slides on my long-haul Flight to SG
  - recorded the demo in Changi when I land
- Best thing about hackathon
  - it's going to end!

---
layout: two-cols
---

# 9. Continuity


- Hackathon Winner pitching to VCs

- Akindo / WavePool

- Gitcoin / Alumini

::right::
# some went on to be successful companies

<Tweet id="1789037721580958030" />

<style>
.twitter-tweet {
  height: 10rem;
}
</style>

---

# Thank you!


<PoweredBySlidev mt-10 />
