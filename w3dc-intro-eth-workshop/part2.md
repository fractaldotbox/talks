

# Recap


---
layout: center
---
Swapping on Uniswap...
Connect Wallet.
<br />
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

## Under the hood

Simplified
<br/>
<img border="rounded" style="width: 500px;" src="/image.png" alt="">

[Reference: Metamask architecture ](https://docs.metamask.io/wallet/concepts/architecture/)




<!-- 
Decentralize version

Running your own nodes and talk to it
Talk to it 

we do have service providerss

-->


---
layout: two-cols
---

<!-- rpc -->
<!-- ![alt text](/image-28.png) -->


# in your browser: window.ethereum 



- On [Uniswap](https://app.uniswap.org/) with metamask
    - Try in Dev Console "window.ethereum"
    - On incognito?
    - Before & after unlocking metamask?
    - Ledger unplugged?

- [EIP-1193](https://eips.ethereum.org/EIPS/eip-1193)

- Metamask injected the window.ethereum provider

- [Wallet Connect provider](https://docs.walletconnect.com/advanced/providers/ethereum)

::right::

- Try running the sample code in the spec, e.g.

```ts
ethereum
  .request({ method: 'eth_accounts' })
```

---
---

## Connect vs Sign


- Web2: Login button

- Web3: 
  - Connect: RPC connection. Client shows on-chain wallet  
  - Login: (Sign-in With Ethereum) SIWE. Signatures sent to server





<!-- - The Provider is said to be “connected” when it can service RPC requests to at least one chain.


"A JavaScript object made available to a consumer, that provides access to Ethereum by means of a Client."


"viem"
A Client in the context of viem is similar to an Ethers.js Provider.

"interface to "public" JSON-RPC API"


- "Transport" for EIP1193-provider -->

---
layout:center
---

# Under the hood - revisited


<img border="rounded" style="width: 600px;" src="/image-47.png" alt="">


[Ref](https://www.reddit.com/r/ethereum/comments/10ug7cs/i_made_a_little_visual_aid_of_what_happens_when/)

---
---


<!-- ![alt text](/image-2.png) -->
<!-- 

## Transactions
![alt text](/image-6.png)
![alt text](/image-4.png)


## EVM / solidity

![alt text](/image-7.png)

![alt text](/image-5.png)
 -->








[Ref](https://www.reddit.com/r/ethereum/comments/10ug7cs/i_made_a_little_visual_aid_of_what_happens_when/)


<!-- continue the metamask journey -->

---
---

# Lets start building


Any template I can reference?

---

## Scaffold ETH v2

- Open source with community
- [Typical techstack](https://docs.scaffoldeth.io/#scaffold-eth-2-tech-stack)

![alt text](/image-52.png)


---
layout: two-cols
---


## RainbowKit
- high level react components to connect wallet
- [just try it here](https://www.rainbowkit.com/docs/installation)
- config the chains and add ```<ConnectButton>```

::right::

<iframe src="https://www.rainbowkit.com/docs/installation" style="height:95%; width: 400px;">
</iframe>


<!-- 

  we mentioned so many wallets out there

 -->

---
layout: two-cols
---

## Wagmi

- React hooks
- base on tanstackquery

![alt text](/image-53.png)

::right::

- [Example](https://wagmi.sh/react/guides/write-to-contract) 

```ts

export function MintNFT() {
  const { 
    data: hash,
    error,   
    isPending, 
    writeContract 
  } = useWriteContract() 

  async function submit(e: React.FormEvent<HTMLFormElement>) { 
    e.preventDefault() 
    const formData = new FormData(e.target as HTMLFormElement) 
    const tokenId = formData.get('tokenId') as string 
    writeContract({
      address: '0xFBA3912Ca04dd458c843e2EE08967fC04f3579c2',
      abi,
      functionName: 'mint',
      args: [BigInt(tokenId)],
    })
  } 

````

---
---

## Viem

- or Ether.js

- remember the window.ethereum provider

- js toolkit to handle typical

- backend too

```ts

const signature = await walletClient.signTypedData({
      account,
      domain: {
        name: 'Ether Mail',
        version: '1',
        chainId: 1,
        verifyingContract: '0x0000000000000000000000000000000000000000',
      },
      types: {
        Person: [
          { name: 'name', type: 'string' },
          { name: 'wallet', type: 'address' },
        ],
        Mail: [
          { name: 'from', type: 'Person' },
          { name: 'to', type: 'Person' },
          { name: 'contents', type: 'string' },
        ],
      },
      primaryType: 'Mail',
      message: {
        from: {
          name: 'Cow',
          wallet: '0xCD2a3d9F938E13CD947Ec05AbC7FE734Df8DD826',
        },
        to: {
          name: 'Bob',
          wallet: '0xbBbBBBBbbBBBbbbBbbBbbbbBBbBbbbbBbBbbBBbB',
        },
        contents: 'Hello, Bob!',
      },
    })
  ```


---
layout: two-cols
---

## ENS
- Centralized = DNS
- instead of `0x963...5883F`, shows `debuggingfuture.eth`
- shown on my Uniswap

![alt text](/image-40.png)

::right::

[anyone can look it up](https://app.ens.domains/debuggingfuture.eth)

![alt text](/image-39.png)

---
---


## Questions?

- latest versions quite stable & easy to use
solid (once you know the flow
)
- usually problems elsewhere


## More to read

- handling topic / events from smart contract 



---
---


## Appendix - How to learn so much EIPs?
- Don't start screening EIP specification
- It's [literally a PR](https://github.com/ethereum/EIPs) & not created equal
- (historic) context matters
- very naturally run into typical ones
  - Tokens ERC20, ERC721, 1155
  - EIP-1559
  - Account abstraction EIP-4337
  - EIP-4844: Proto-Danksharding
  - ERC1967 Proxy
