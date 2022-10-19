---
classes: flex flex-col
---

# Mitigation strategies

#### Distinguish between requests which are legit and requests that belong to the attack is very hard. **None of the strategies below is 100% accurate.**

<div class="flex flex-1 columns-container items-center">
  <div class="columns flex items-center">
  <Item icon="lock-access" title="Limit connections per IP">
    As the attack is distributed, the attacker can easily switch to another IP.
  </Item>

  <Line height="150" class="columns__border stroke-neutral-300"/>

  <Item icon="hourglass" title="Enforce speed or time constraints">
    It’s hard to establish a connection which will not cut out slow legit clients.
  </Item>
  </div>
</div>
