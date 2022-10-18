---
classes: flex flex-col
---

# Node.js 18.0.0 is finally safe by default

<h4>
  The latest major version of Node.js has finally solved all the issues described.<br/>
  <em>Changing timeout handling has improved performance by 2%.</em>
</h4>

<div class="columns flex flex-1 items-center">
  <Item icon="history" title="Request are checked periodically">
    The HTTP server regularly checks for requests which have not completed in the allowed time.
    <br/><br/>
    See the new option: <br/><code>connectionsCheckingInterval</code>
  </Item>

  <Item icon="license" title="Have safer defaults">
    The timeouts for headers and request
    are finally enabled by default.
    <br/><br/>
    <em>The default Node.js configuration now protects against SlowLoris.</em>
  </Item>
</div>

<!--
Mention that this was possible due to semver major change and thus it will not be backported.
-->
