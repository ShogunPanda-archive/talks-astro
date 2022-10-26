# How does a transpiler work?

<h4 class="mb-12">Transpiling time grows proportionally to the source code.</h4>

<Item index="1" title="Parsing">
  The source code is parsed and converted to an Abstract Syntax Tree (AST)
</Item>

<Item index="2" title="Transformation">
  The source language AST is traversed and mapped to the destination language AST.
</Item>

<Item index="3" title="Code generation (codegen)">
  The destination language AST is converted to the destination source code.
</Item>

