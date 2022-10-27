---
title: The tale of avoiding a time-based DDOS attack in Node.js
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
main: What do we use everyday?
secondary: Web applications play a very important part of our lives.
sideBackground: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/online-banking.jpg
logo: white
---

#### _They must not go down!_

---
layout: separator
main: We are all vulnerable!
sideBackground: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/hacking.jpg
classes: bg-nf-brunch-pink text-white
logo: white
---

---
main: Denial of Service Attack
items:
  - icon: bug
    title: Denial of Service Attack (DoS)
    text: A network resource is maliciously made unavailable to its intended users.
  - icon: affiliate
    title: Distributed Denial of Service (DDoS)
    text: The incoming flooding traffic originates from many different sources.
  - icon: moneybag
    title: In DDoS the attacker usually uses a lot of resources
    text: <em>Is that still true?</em>
---

<!--
Emphasize the **true** in the last question.
-->

---
layout: separator
main: Fear the real enemy...
sideBackground: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/hacking.jpg
classes: bg-nf-brunch-pink text-white
logo: white
---

---
layout: image
logo: white
image: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/slowloris.jpg
---

<!--
Joke about: **“This talk should have been named Taming Slowlorises in Node.js”** and see people reaction.
-->

---
main: The Slowloris Attack
items:
  - icon: bug
    title: What is it?
    text: A DDoS attack which uses minimal bandwidth.
  - icon: calendar-time
    title: When it was created?
    text: Robert “RSnake” Hansen carved this out on June 2009.
  - icon: transform
    title: It’s not just HTTP!
    text: This attack can be abstracted to similar protocols.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/slowloris-intro.png
---

---
main: Normal HTTP server activity
secondary: Each socket on the server consumes some amount of RAM and other system resources.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/http-1.png
sequence: 1
---

---
main: Normal HTTP server activity
secondary: Clients usually disconnect after receiving the response.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/http-2.png
sequence: 2
---

<!-- Explicitly mention that this is not strictly true for Keep-Alive connections but also that legit clients disconnects very soon. -->

---
main: Normal HTTP server activity
secondary: The amount of resources consumed by the server are relatively stable.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/http-3.png
sequence: 3
---

---
main: Retaining sockets is expensive
items:
  - icon: cpu
    title: The operating system manages low-level operations
    text: Each sockets consumes several kilobytes of RAM.
  - icon: link
    title: Each socket is backed by a file descriptor
    text: Each process has a limited number of descriptor available, managed via <code>ulimit</code>.
  - icon: apps
    title: The application manages high-level operations
    text: The application representation of the socket adds extra memory overhead.
---

---
main: The Slowloris attack
secondary: Each client never finishes a request and stays connected for the longest time possible.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/slowloris-1.png
sequence: 1
---

---
main: The Slowloris attack
secondary: As more clients connect, server resources usage constantly increases over time.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/slowloris-2.png
sequence: 2
---

---
main: The Slowloris attack
secondary: At some point server has no more free resources and cannot accept any new client.
sideImage: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/slowloris-3.png
sequence: 3
---

<br/>

#### _The service is interrupted!_

---
layout: image
main: How do we stop it?
image: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/wall.jpg
---

<!--
Emphasize **“How”** and **“stop it”**?
-->

---
main: Use a reverse proxy
secondary: Never put Node.js as the direct point of contact to the clients.<br/> Servers like Nginx have better protection from DDoS attacks.
icon: traffic-lights
---

---
main: Mitigation strategies
items:
  - icon: lock-access
    title: Limit connections per IP
    text: As the attack is distributed, the attacker can easily switch to another IP.
  - icon: hourglass
    title: Enforce speed or time constraints
    text: It’s hard to establish a connection which will not cut out slow legit clients.
horizontalItems: true
---

#### Distinguish between requests which are legit and requests that belong to the attack is very hard. **None of the strategies below is 100% accurate.**

---
layout: image
main: What about Node.js?
image: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/node.png
imageClasses: -top-2_5gs
---

---
main: http.Server.headersTimeout
items:
  - icon: bug
    title: Partial fix as the body is not considered
    text: Node.js never parses or consume request bodies.
  - icon: license
    title: Body handling is delegated
    text: Applications are responsible for body timeouts.
  - icon: calendar-time
    title: Node.js 10.14.0, November 28th, 2018
    text: <em>Node.js has been completely unprotected for 10 years.</em>
sequence: 10
sequenceClasses: left-auto -right-0_3gs -bottom-1gs font-size-300pt apply text-red-300
---

---
main: Trust the frameworks
sideText: The philosophy behind this choice was to <em>support</em> serverless environments which needed long running connections.
sideTextClasses: bg-nf-midnight-blue text-white
items:
  - icon: hourglass-off
    title: Disable http.Server.timeout by default
    text: The default value has been changed to nothing.
  - icon: calendar-time
    title: Node.js 13.0.0, October 22th, 2019
    text: <em>From now on, attacker can delay transfer indefinitely.</em>
logo: white
---

<!--
* Hapi and Fastify implemented a fix.
* Restify, Express and Koa did not.
-->

---
main: http.Server.requestTimeout
items:
  - icon: shield-check
    title: Complete fix
    text: The client has now limited time to finish.
  - icon: calendar-time
    title: Available on all active Node.js lines
    text: Added to Node.js 14.11.0, released on September 15th, 2020.
  - icon: thumb-down
    title: Disabled by default
    text: Adding a timer for each new request is an expensive operation.
---

---
layout: image
main: Are we safe now?
image: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/safe.jpg
---

---
layout: separator
main: Yes, almost!
sideBackground: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/hacking.jpg
classes: bg-nf-brunch-pink text-white
logo: white
---

---
main: The countermeasures were loose
items:
  - icon: thumb-down
    title: Custom configuration was needed to protect adequately
    text: The attacker could still delay data transfer forever without being rejected.
  - icon: rocket
    title: Performance was prioritized
    text: Whenever a timeout has gone off was checked only after new data was received.
---

---
main: How to protect Node.js 16 and below
items:
  - icon: hourglass
    title: Make sure sockets cannot be idle
    text: <code>http.Server.timeout</code> must be greater than 0 to detect malicious idle sockets.
  - icon: lock-access
    title: Limit the time for each request
    text: <code>http.Server.requestTimeout</code> must be greater than 0 to limit the total time allowed for a client to finish a request.
  - icon: hourglass-low
    title: Have a lower timeout for the headers
    text: <code>http.Server.headersTimeout</code> should also be set to detect a malicious client earlier.
---

---
main: How to protect Node.js 16 and below
image: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/node-16.png
---

---
main: Node.js 18.0.0 is finally safe by default
secondary: The latest major version of Node.js has finally solved all the issues described.<br/><em>Changing timeout handling has improved performance by 2%.</em>
items:
  - icon: history
    title: Request are checked periodically
    text: 'The HTTP server regularly checks for requests which have not completed in the allowed time.<br/><br/>See the new option: <br/><code>connectionsCheckingInterval</code>'
  - icon: license
    title: Have safer defaults
    text: The timeouts for headers and request are finally enabled by default.<br/><br/><em>The default Node.js configuration now protects against SlowLoris.</em>
horizontalItems: true
---

<!--
Mention that this was possible due to semver major change and thus it will not be backported.
-->

---
layout: separator
main: We finally made it!
classes: bg-nf-darkest-blue text-white
sideBackground: /the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs/turtle.jpg
sideBackgroundClasses: w-full !h-auto -mt-1gs
icon: confetti
iconClasses: w-2_5gs h-2_5gs left-1gs -bottom-0_4gs text-white stroke-width-0_3
---

<!--
Do a nice victory gesture and shout!
-->

---
main: Take home lessons
secondary: What can we learn from this long journey?
items:
  - icon: shield-lock
    title: Security, always
    text: Always think about security implication when implementing new features.
  - icon: rocket-off
    title: Sacrifice Performance
    text: Putting performance aside can drive to correct, innovative and eventually performant solutions.
  - icon: history
    title: Validate regularly
    text: During regular activities, always check existing code for hidden flaws.
horizontalItems: true
---

<!--
**Before** talking about the slides, recap what you talked about: **“Today we have seen how atypical attacks can unexpectedly affect our applications and how it can take a very long time to fix them.”**
-->

---
layout: quote
sentence: Never assume the obvious is true.
author: William Safire
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

