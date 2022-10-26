---
classes: compiling-and-bundling-js-the-painless-way__transpile-where flex flex-col
---

# Where we do we (mostly) run?

#### There are few known runtimes and browsers, way less than in the past.

<div class="flex flex-1 columns-container items-center">
  <div class="columns flex items-center w-full">
  <div class="grid flex-1">
    <img src="/compiling-and-bundling-js-the-painless-way/chrome.png"/>
    <img src="/compiling-and-bundling-js-the-painless-way/firefox.png"/>
    <img src="/compiling-and-bundling-js-the-painless-way/safari.png"/>
    <img src="/compiling-and-bundling-js-the-painless-way/edge.png"/>
  </div>

  <Line height="150" class="columns__border stroke-neutral-300"/>

  <div class="flex flex-1">
    <img src="/compiling-and-bundling-js-the-painless-way/node.png"/>
    <img src="/compiling-and-bundling-js-the-painless-way/deno.png"/>
    <img src="/compiling-and-bundling-js-the-painless-way/bun.png"/>
  </div>
  </div>
</div>

<!--
Firefox usa SpiderMonkey, le feature vengono implementate più velocemente.

La tail-call funge solo su JSC - Menziona che gli env possono essere molto diversi.
-->
