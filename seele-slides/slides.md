---
# You can also start simply with 'default'
theme: seriph
# random image from a curated Unsplash collection by Anthony
# like them? see https://unsplash.com/collections/94734566/slidev
background: /seele.gif
# some information about your slides (markdown enabled)
title: SEELE
fonts:
  # basically the text
  sans: Times new Roman
  # use with `font-serif` css class from UnoCSS
  serif: Times new Roman
  # for code blocks, inline code, etc.
  mono: Fira Code
info: |
  ## Slidev Starter Template
  Presentation slides for developers.

  Learn more at [Sli.dev](https://sli.dev)
# apply unocss classes to the current slide
class: text-center text-3xl
# https://sli.dev/features/drawing
drawings:
  persist: false
# slide transition: https://sli.dev/guide/animations.html#slide-transitions
transition: fade-out
# enable MDC Syntax: https://sli.dev/features/mdc
mdc: true
---

# SEELE


<div @click="$slidev.nav.next" class="mt-12 py-1" hover:bg="white op-10">

  Orchestrate agents with our SOUL
</div>

<div class="abs-br m-6 text-xl">
  <button @click="$slidev.nav.openInEditor" title="Open in Editor" class="slidev-icon-btn">
    <carbon:edit />
  </button>
  <a href="https://github.com/slidevjs/slidev" target="_blank" class="slidev-icon-btn">
    <carbon:logo-github />
  </a>
</div>

<!--
The last comment block of each slide will be treated as slide notes. It will be visible and editable in Presenter Mode along with the slide. [Read more in the docs](https://sli.dev/guide/syntax.html#notes)
-->


---
---


<div class="text-9xl">
1) WHAT
</div>


---
layout: center
---

<div className="text-6xl">
How much can we trust
</div>


<br />

<div className="text-3xl text-center  pt-2">
the middleman?
</div>
<div className="text-3xl text-center pt-2">
the Agents?
</div>



<div className="text-2xl  text-center pt-6 text-red">
Blackbox, Hallucinations, Bias
</div>



---
layout: center
---


<div class="bg-white h-[200px] text-black items-center justify-center">

  <img src="/image-5.png" class="h-full m-auto" />

</div>

<!-- Challenges for Agents to help on decentralization
1. Security
2. LLM=Blackbox -->

<!-- avoids enshrining, open source mechanisms -->


<div class="bg-white h-[200px] text-black items-center justify-center">

  <img src="/image-6.png" class="h-full m-auto" />

</div>



<style>

blockquote > * {
  font-size: 2rem;
  line-height: 2.5rem
}

</style>
 

---
layout: two-cols
---

<div class="text-6xl">
DEMO - <a href="https://thisweekin.eth.1.w3link.io/">Autonomous news agency by AI agents</a>
</div>

::right::

<div class="text-3xl text-white text-right">

<br />
<br />
<br />
<br />
Curated

Written

Reviewed

Fact-checked

Deployed




<br />
by Agents

with the community's Soul

<!-- 


- censorship-resistant
- auto-factchecking
- AI reviewer base on human traits -->
</div>


---
---

<div class="text-9xl">
CMS
</div>


<div class="text-6xl">
for agents to build Autonomous websites
</div>

<br />
<div class="text-6xl">
governed by community
</div>

---
class: text-2xl
---


<div class="text-9xl">
Agent Architecture
</div>



<!-- ## Govern by Community

- upload content only if attested -->



---
layout: two-cols
---

## Why Swarm?


<div class="text-5xl mt-10">
Interpretability.
</div>

<br />
<br />
<br />

## Why On-chain communications?


<div class="text-4xl mt-10">
Verifiability
</div>




<!-- @vitalik's take on mechanism for AI Players
- simple
- avoid enshrining single model (bias)
 -->


::right::

<br />
<br />
<br />
<br />
<br />
<br />

![alt text](/coa_demo.png)


<div className="text-right">

<div className="italic">
Chain of Agents: LLM collborating on long-context tasks
</div>

by Google Research
</div>








---
---


<div class="w-full h-full">

<img src="/image-11.png" class="h-full m-auto" />

</div>

---
---

## Don't Trust, Verify

## Reviewer agents council


<img src="/image-7.png" class="h-2/3 m-auto p-5" />

---
layout: two-cols
---

## Don't Trust, Verify #2


## Fact checking Agents

<img src="/image-8.png" class="h-2/3 m-auto p-6" />

::right::


## zk proof on data
- Space and Time Queriess

## Editors create Attestations
- EAS -> greenlight deployment




---
layout: fact
---

## DEMO: Explorer

https://seele-8ped.onrender.com/explorer




---
layout: fact
---

## DEMO: AgentArena

https://seele-8ped.onrender.com/arena




---
layout: image
class: text-2xl
background: /shinji.jpg
---


<div class="text-9xl">
Unstoppable website
</div>

<div class="flex justify-end items-center w-full">
  <div class="w-1/3">
  <img src="/unstoppable.gif">

  </img>
  </div>

</div>



---
layout: two-cols
---


## Secure Frontend 

<div class="text-xl">

- Entire website is on-chain
- Islands Architecture. 90% static
- dDevKit - Minimized Dependenceis

</div>
<div class="mt-10">
<img src="/image-1.png" class="h-[100px] m-auto pt-2">
</div>

<div>
<img src="/image-2.png" class="h-[100px] m-auto pt-2">
</div>


::right::

<div>
<img src="/image-4.png" class="h-[300px] m-auto pt-2">
</div>








---
layout: two-cols
---

## Thank you!


<br />

<div class="w-1/3">
<img border="rounded" class="avatar rounded-full" src="/team-debuggingfuture.png" style="height:150px" alt=""> 


<div class="text-center">
@debuggingfuture
Vincent
</div>



</div>


###

<br />

<img src="/image-13.png" class="rounded-full"/>


Team building Public Goods Dev Tool
<br />
<div className="text-2xl">
 @geistddev
</div>
::right::
<br />
<br />


<div class="w-1/3">

<img border="rounded" class="avatar rounded-full" src="/team-rick.jpg" style="height:150px" alt=""> 

<div class="text-center">
@rikkusan30
Richard
</div>

</div>

<br />



---
layout: image
---


## Dogfooding

## 

![alt text](/ddevkit.png)


