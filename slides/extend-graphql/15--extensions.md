---
classes: flex flex-col
---

# Meet GraphQL extensions

#### The `extensions` field is already documented in the specification and it's perfect to ensure both compatibility and expandability.

<div class="flex flex-1 columns-container mt-0 items-center">
  <div class="columns flex flex-1 items-center">
  <Item icon="source-code" title="Extensions are for developers">
  The specification specifically states that field is reserved for developers to extend the protocol.
  </Item>

  <Line height="150" class="columns__border stroke-neutral-300"/>

  <Item icon="circuit-changeover" title="Existing clients will ignore them">
  Unless configured to, clients will ignore the field and the server is still specification compliant.
  </Item>
  </div>
</div>
