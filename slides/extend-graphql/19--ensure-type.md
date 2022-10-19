---
layout: side-image
classes: extend-graphql__ensure-type
image: /extend-graphql/jsonpath.png
---

<main>
  <h1>Ensuring type information</h1>
  <h4>The enriching algorithm needs type information.<br/> We need <code>__typename</code> to be in all selection sets.</h4>

  <Item icon="tool" title="The added fields are temporary">
  To not to break the spec, these must not be returned to the client.
  </Item>

  <Item icon="replace" title="Leverage field aliasing">
  Use field aliasing to easily spot the fields added from the enriching algorithm.
  </Item>
</main>

<img src="/extend-graphql/type-aliasing.png" class="side"/>
