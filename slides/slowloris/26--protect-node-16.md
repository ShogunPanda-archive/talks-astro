# How to protect Node.js 16 and below

<Item icon="hourglass" title="Make sure sockets cannot be idle">
  <code>http.Server.timeout</code> must be greater than 0 to detect malicious idle sockets.
</Item>

<Item icon="lock-access" title="Limit the time for each request">
  <code>http.Server.requestTimeout</code> must be greater than 0 to limit the total time allowed for a client to finish a request.
</Item>

<Item icon="hourglass-low" title="Have a lower timeout for the headers">
  <code>http.Server.headersTimeout</code> should also be set to detect a malicious client earlier.
</Item>
