---
classes: dont-break-graphql-extend-it__enriching
---

# How does enriching works?

<Item index="1" title="Analyze the query">
  Parse and validate the query received by the client. In case of request error, stop here.
</Item>

<Item index="2" title="Ensure types information with temporary modifications">
  Each selection set must contain the type to give all information to the enriching handler.
</Item>

<Item index="3" title="Execute the query">
  This can be done directly on the server or we can create an enriching GraphQL proxy server.
</Item>

<Item index="4" title="Fetch the additional data">
  Using a tree traversal algorithm, fetch additional data for each field according to the handler.
</Item>

<Item index="5" title="Enrich the response">
  Store the additional data in the extensions field, using the JSONPath selector as the key.
</Item>
