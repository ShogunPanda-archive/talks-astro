---
layout: side-text
logo: white
---

<main>
  <h1>Trust the frameworks</h1>

  <Item icon="hourglass-off" title="Disable http.Server.timeout by default">
    The default value has been changed to nothing.
  </Item>

  <Item icon="calendar-time" title="Node.js 13.0.0, October 22th, 2019">
    <em>From now on, attacker can delay transfer indefinitely.</em>
  </Item>
</main>

<aside class="bg-nf-midnight-blue text-white">
  <h4>The philosophy behind this choice was to <em>support</em> serverless environments which needed long running connections.</h4>
</aside>

<!--
* Hapi and Fastify implemented a fix.
* Restify, Express and Koa did not.
-->
