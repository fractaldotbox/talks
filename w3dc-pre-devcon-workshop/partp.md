---
layout: center
---

# Common dApps dev patterns and primitives by @debuggingfuture


---
---

### Disclaimers

- We position as tutors
  - so you can learn from the gigabrains!
- I'm
  - Application Developer
  - Geek who study CS/Maths
- I'm not
  - Protocol / Zk Engineer
  - Cryptographer



---
layout: center
---

# Where to Start?
- 2 Opionated Take(Rant)s


---
layout: two-cols
---

## Going to a crypto conference

- WTF is Appchain & Superchain
- WTF is FHE
- WTF is AA & ERC4337
- WTF is EIP7702
- WTF is pre-confirmations

::right::

<img src="/image-13.png" style="height:350px" />

<!-- Don't take my words, 2 takeaways from Vitalik -->

---
layout: two-cols
---

## Learning Art history
- WTF is Baroque
- WTF is Art Deco
- WTF is Renaissance 
- WTF is Brutalism
- WTF is Modernism

::right::

<v-click>
What builders actually learn

<img src="https://www.researchgate.net/publication/378111967/figure/fig2/AS:11431281223068755@1707568768574/Bauhaus-curriculum-wheel.png" style="height: 300px; margin-bottom:10px " />


<img src="/image-31.png"  style="height: 100px;"/>
</v-click>

---
layout: two-cols
---

## ~~Going to a crypto conference~~

- ~~WTF is Appchain & Superchain~~
- ~~WTF is FHE~~
- ~~WTF is AA & ERC4337~~
- ~~WTF is EIP7702~~
- ~~WTF is pre-confirmations~~

::right::

## What you need to know 

- Ecliptic Curve
- Modulus 
- Finite Field
- Signing signatures
- Security guarantee
<!-- metaphor: Talking SSG, SSR, ISG to devops. basic ideas not hard. Mastering them hard.  -->


---
layout: center
---
# Devcon has a track!

<img src="/image-3.png" style="height:400px" />


---
layout: center
---

# on Maths


<img src="/image-33.png" style="height:400px !important; "/>




---
layout: two-cols
---
# Premier #1: Maths that sounds complicated

## 🤔Don't know WTF is `Residue class`
<hr />

## 👌But you know `modular arithmetic` already

- `5 % 3 === 2` 

::right::

![alt text](/image-2.png)


<!-- Spent 15 years of our lives learn about it and finally learn to fear and avoid it -->


---
layout: two-cols
---

# Field. Field everywhere

<img src="/image-27.png" style="height:150px"/>
<br />
<img src="/image-5.png" style="height:150px"/>

![alt text](image-7.png)


---
---

## 🤔Don't know WTF is group theory / rings

## 👌But you know what is Set

<div class="center">
    <img src="/image-12.png" style="height: 400px" />

</div>





---
layout: two-cols
---

## 👌You know traits in programming

- Traits/Mixins `implements Vehicle`
  - `move(x:int, y: int)`

- `implements Field`
  - `divide(x: int)-> int`

::right::

<img src="/image-24.png" style="height:400px"/>


---
layout: two-cols
---


## Counter Example
- Integers ℤ is NOT a field

<br />

## Examples
- Real Numbers ℝ
- Complex Number ℂ
  - specifically: as ℝ(i) field extension of ℝ by adjoining _i_.
  - s.t. we have a solution for _i_^2 =1 

- field of modulus prime p...`Prime field`
- which has finite elements....`Finite Field`

::right::

# Field Axioms

## 

![alt text](image-1.png)
---
class: bg-white whiteboard
---


---
---


## One Way, Trap door function   
<div class="center">

<img src="/image-19.png" style="height: 400px" />
</div>

<v-click>
- prime factorization 1093*1039=1,135,627
</v-click>
---
---


# Themes

- We want something hard (to attack)
  - Quantum computing? 

- easy to verify

- Size matters!
   - compact (Field) numbers to do fancy calculations on (via Field extension)


- Vitalik actually wrote very great premiers
  - [Finite field](https://vitalik.eth.limo/general/2024/04/29/binius.html#recap1)

<!-- I learn more from them than from my university -->

<!-- - works well with zk circuits? "SNARK-friendly?" -->