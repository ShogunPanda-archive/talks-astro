---
layout: side-image
classes: dont-break-graphql-extend-it__ensure-type
image: /dont-break-graphql-extend-it/jsonpath.png
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

<img src="/dont-break-graphql-extend-it/type-aliasing.png" class="side"/>
