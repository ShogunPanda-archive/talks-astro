---
classes: flex flex-col
---

# Cache the queries

#### Parsing and executing GraphQL is expensive. Cache them when possible.

<div class="flex flex-1 columns-container mt-0 items-center">
  <div class="columns flex flex-1 items-center">
  <Item icon="cloud-upload" title="Cache the original query…">
  This also includes invalid queries as it will speed up the handling of misbehaving clients.
  </Item>

  <Line height="150" class="columns__border stroke-neutral-300"/>

  <Item icon="replace" title="…and the enriched query">
  Traversing a complex query to ensure types information can be time consuming.
  </Item>
  </div>
</div>
