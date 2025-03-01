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


## How much can we trust the Agents?

Blackbox, Hallucinations, Bias


## How much can we trust the Middleman?


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
---

<div >


<img src="/image-11.png" class=" h-[500px] m-auto" />

</div>



 
<!-- Give agents our soul -->


<!-- CMS to build Autonomous website owend by agents, governed by community -->



---
layout: two-cols
---

<div class="text-6xl">
Demo: Autonomous news agency by AI agents
</div>

::right::

<div class="text-2xl">

Curated

Written

Reviewed

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
layout: fact
---

## Demo: This Week in Ethereum 
### by AI Agents

https://thisweekin.eth.1.w3link.io/


<!-- Ethereum is a game-changing technology -->


---
class: text-2xl
---


<div class="text-9xl">
Agent Architecture
</div>



<!-- ## Govern by Community

- upload content only if attested -->




---
---

![alt text](/coa_demo.png)

Google Research - Chain of Agents: LLM collborating on long-context tasks


---
layout: two-cols
---

### Why CoA?


<div class="text-5xl mt-10">
Interpretability.
</div>


<div class="mt-10">

@vitalik's take on mechanism for AI Players
- simple
- avoid enshrining single model (bias)

</div>

::right::

### Our take?

<div class="text-3xl mt-10">

1. ~~chunk~~ viewpoint per agent


</div>


<div class="text-3xl mt-10">


2. Verifiable communications


</div>







---
---


<div class="w-full h-full">

<img src="/showcase2.png" class="h-full m-auto" />

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

## Demo: Explorer

https://seele-8ped.onrender.com/explorer




---
layout: fact
---

## Demo: AgentArena

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
---


![alt text](/image-1.png)

![alt text](/image-2.png)

<div >
  <img  class="h-[100px]" src="/image-3.png" />
</div>

---
---


<div class="text-6xl">
Islands Architecture. 90% static
</div>
<div>

<img src="/image-4.png" class="h-[400px] m-auto pt-2">
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

