---
title: Horizontal Scaling of a Web3 system to the sky and beyond in AWS
author:
  name: Paolo Insogna
  description_title: Staff Node.js Core and DX Engineer
  description: Staff Node.js Core and<br/> Developer Experience Team
  email: paolo.insogna@nearform.com
  twitter: p_insogna
  github: ShogunPanda
company:
  count: 300
  npm:
    monthly: 1B
    percentage: 8%
theme: ./theme
---

---
layout: hello
---

---
main: IPFS (InterPlanetary FileSystem)
secondary: A protocol designed with the intention to preserve and grow humanity's knowledge by making the web upgradeable, resilient, and more open.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/ipfs.png
---

---
main: web3.storage
secondary: A service that makes storing files on IPFS easier and more accessible for non-technical people.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/web3-storage.svg
---

---
layout: image
main: What is going wrong?
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/obstacle.jpg
imageClasses: -top-2gs
---

---
main: Previous Challenges
items:
  - icon: world
    title: Increasing traffic
    text: The original web3.storage implementation struggled to handle the massive amount of uploaded data per day, which is in the order of millions.
  - icon: user-plus
    title: Hard to scale
    text: New nodes could not be quickly added on-demand due to the long bootstrap phase.
---

---
layout: image
main: The Problem
image: /theme/questions.jpg
imageClasses: -top-2gs
---

---
layout: quote
main: One simple question
sentence: How can we use AWS services to make the service horizontally scalable with no limits?
icons: false
light: true
---

---
main: Goals
items:
  - icon: user-plus
    title: Handle growth
    text: The system should be able to handle the massive amount of data uploaded on web3.storage.
  - icon: device-floppy
    title: Stateless services
    text: Having stateless services helps horizontal scaling and greatly improves fault tolerance.
  - icon: cloud
    title: Cloud based
    text: The entire architecture should leverage any modern cloud services and try to be affordable.
horizontalItems: true
---

---
layout: image
main: The Solution
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/solution.jpg
---

---
main: Hi, I'm Elastic IPFS!
sideImage: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/eipfs-architecture-complete.png
---

#### The architecture is divided into three independent subsystem, and each of them is stateless.

#### Architecture has been designed with global replication in mind and new nodes can be added or remove at any time.

#### [https://github.com/elastic-ipfs/elastic-ipfs](https://github.com/elastic-ipfs/elastic-ipfs)

---
main: CARs Table Item
secondary: It contains generic information about indexed CAR files, including the S3 full path.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/item-car.png
---

---
main: Blocks Tables Item
secondary: It stores the multihash and the type of the block, used for debugging.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/item-block.png
---

---
main: Blocks Position Item
secondary: It is the most important table in the architecture, as it links blocks to CARs, including offset and length.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/item-block-to-cars.png
---

---
layout: separator
main: Indexing subsystem
classes: bg-nf-orange-split
---

---
main: Overview
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/eipfs-architecture-indexing.png
---

---
main: Indexing flow
items:
  - index: 1
    title: CAR file is copied to S3
    text: The event is recorded on a SQS topic which will later trigger Indexing Lambda executions.
  - index: 2
    title: Indexing Lambda executes
    text: The Lambda processes the CAR file and copies all the relevant informations in the DynamoDB tables showed earlier.
  - index: 3
    title: Blocks are enqueued for publishing
    text: For each block encountered in the CAR file, the Indexer Lambda enqueues its multihash in a SQS topic which will later trigger Publishing Subsystem execution.
---

---
main: Bye, Idempotence!
items:
  - icon: bug
    title: The Lambda was idempotent
    text: It required lots of additional reads on DynamoDB and made batching unavailable.
  - icon: rocket
    title: Indexing has very low failure rate
    text: Idempotence was removed as indexing rarely failed and this brought big performance gain.
horizontalItems: true
---

---
layout: separator
main: Let's talk about DHT
classes: bg-nf-orange-split
---

---
main: DHT Challenges
secondary: IPFS uses the Kademlia DHT for keeping peers and blocks availability information.
items:
  - icon: affiliate
    title: The Elastic IPFS claims to be a single node
    text: Even though internally a lot of resources are used, only one <code>PeerID</code> is used.
  - icon: network-off
    title: No long connection
    text: As all components are stateless, the system cannot maintain long living connection.<br/>E-IPFS cannot directly participate to the DHT since it is not capable to connect to GossipSub.
  - icon: sos
    title: Not self sufficient
    text: In order to advertise content, the E-IPFS systems needs external auxiliary systems.
---

---
main: Hydra Nodes
secondary: The Hydra nodes speed up looking up content in the DHT.
items:
  - icon: search
    title: When
    text: Hydra nodes are created such that there is an high chance to incur into one of them when looking up data.
  - icon: affiliate
    title: What
    text: Content Routing Delegation via shared storage and third party systems as the Indexer Nodes.
  - icon: world
    title: Where
    text: The Hydra nodes are distributed in the DHT sense, not the geographical one.
horizontalItems: true
---

---
main: Indexer Nodes
secondary: A system which maps CID to content providers via libp2p or HTTP API.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/indexer-node.png
---

---
main: What API shall we use?
secondary: E-IPFS uses the HTTP API as GossipSub is not viable for the reasons below.
items:
  - icon: moneybag
    title: E-IPFS is on the cloud
    text: Maintaining long living connection, when possible, is expensive.
  - icon: messages
    title: GossipSub is verbose
    text: A lot of data is exchanged and it will impact costs as well.
  - icon: git-fork
    title: libp2p optimization conflict
    text: Destination host joins multiple streams with the same <code>PeerID</code>.
horizontalItems: true
---

---
main: How does HTTP ingestion works?
secondary: The HTTP Ingest API make the Indexer Nodes choose when to sync.
items:
  - icon: cloud-upload
    title: Upload new advertisements and entries data
    text: The data must available over HTTP.
  - icon: link
    title: Advertisements are strictly ordered
    text: Each is linked to the previous one. The <code>/head</code> one is regularly updated.
  - icon: phone-outgoing
    title: Notify Indexers on <code>/ingest/announce</code> when ready to be queried
    text: <code>HTTP PUT</code> requests will signal that new data has been published.
---

---
main: What will the Indexer Node will do?
secondary: When ready, the Indexer Node will sync via the HTTP server.
items:
  - index: 1
    title: Fetch the latest <code>/head</code> URL
    text: It contains the latest advertisement data CID.
  - index: 2
    title: Fetch the advertisement data and its related entries data.
    text: All the data we are interested into is in these files.
  - index: 3
    title: Repeat the flow
    text: Stop when reaching an already indexed advertisement or the tail of the chain.
---

---
main: Sample head file
secondary: The <code>/head</code> just maintains a link to the latest advertisement.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/head.png
---

---
main: Sample advertisement file
secondary: It contains information about storage provider and entries.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/advertisement.png
---

---
main: Sample entries file
secondary: Is is just a list of CIDs made available by the provider.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/entries.png
---

---
layout: separator
main: Publishing subsystem
classes: bg-nf-orange-split
---

---
main: Overview
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/eipfs-architecture-publishing.png
---

---
main: Concurrency Problem
secondary: Handle the huge load without losing data is challenging.
items:
  - icon: cloud-upload
    title: Several millions of blocks are uploaded every day
    text: The ingestion queue can easily explode.
  - icon: lock-square
    title: No advertisement can be lost
    text: If data is not correctly received by the Indexer, it will be unreachable.
  - icon: traffic-lights
    title: The head of the queue must be updated atomically
    text: Concurrency control must be applied to the processors.
---

---
layout: image
main: What now?
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/dont-panic.jpg
---

---
main: Publishing flow
secondary: The solution was to split the publishing process into two steps in order to reduce the size of the problem. <br/><em>The resulting subsystem is capable to advertise a billion blocks per day.</em>
items:
  - index: 1
    title: Group indexed blocks into entries file
    text: Concurrency is not limited as order does not matter.
  - index: 2
    title: Assign each entries to advertisement, then update the head
    text: Concurrency is limited to <strong>1</strong>, with <strong>10000</strong> advertisement sent per execution.
---

---
layout: separator
main: Peer subsystem
classes: bg-nf-orange-split
---

---
main: Overview
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/eipfs-architecture-peer.png
---

---
main: Peer subsystem characteristic
items:
  - icon: affiliate
    title: Fully automatic
    text: The subsystem is an autoscaling EKS cluster managed by an Elastic Load Balancer.
  - icon: cloud
    title: Stateless and lean
    text: Each node searches for blocks on DynamoDB and forwards them using HTTP Byte-Range S3 fetches.
  - icon: scissors
    title: Simplified BitSwap
    text: No external data is fetched, allowing to access to storage in read-only mode and to remove wantlists and ledgers management.
---

---
layout: separator
main: How does E-IPFS perform?
classes: bg-nf-orange-split
---

---
main: Hit rate went almost to 100%
secondary: The graph shows the hit-rate across <em>200TB</em> of data.
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/hit-rate.png
---

---
main: The average indexing time has dropped
image: /horizontal-scaling-of-a-web3-system-to-the-sky-and-beyond-in-aws/indexing-time.png
---

---
main: Give me the numbers!
secondary: Here are the numbers after <em>six months</em> in production.
items:
  - index: 180M
    title: CARs
  - index: 16B
    title: Blocks
  - index: 24B
    title: Blocks to Cars
horizontalItems: true
---

---
main: Take home lessons
secondary: What can we learn from this long journey?
items:
  - icon: heart
    title: K.I.S.S.
    text: IPFS protocols are very complex. Simplifying is the only way to have viable products.
  - icon: world-www
    title: HTTP is always home
    text: New protocols are very fashionly, but sometimes going back to good old HTTP can be very performant.
  - icon: affiliate
    title: Democracy is good
    text: Being unable to lock in a single cloud provider led to flexible and lean architecture.
horizontalItems: true
---

---
layout: quote
sentence: Keep your eyes on the stars, and your feet on the ground.
author: Theodore Roosevelt
classes: bg-nf-brunch-pink text-white
---

---
layout: hiring
---

---
layout: image
main: Questions?
image: /theme/questions.jpg
imageClasses: -top-2gs
---

