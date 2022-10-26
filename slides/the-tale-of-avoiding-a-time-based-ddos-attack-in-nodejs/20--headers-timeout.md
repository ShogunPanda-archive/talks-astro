---
classes: the-tale-of-avoiding-a-time-based-ddos-attack-in-nodejs__headers-timeout
---

# http.Server.headersTimeout

<Item icon="bug" title="Partial fix as the body is not considered">
  Node.js never parses or consume request bodies.
</Item>

<Item icon="license" title="Body handling is delegated">
  Applications are responsible for body timeouts.
</Item>

<Item icon="calendar-time" title="Node.js 10.14.0, November 28th, 2018">
  <em>Node.js has been completely unprotected for 10 years.</em>
</Item>

<h2 class="sequence">10</h2>
