# Retaining sockets is expensive

<Item icon="cpu" title="The operating system manages low-level operations">
  Each sockets consumes several kilobytes of RAM.
</Item>

<Item icon="link" title="Each socket is backed by a file descriptor">
  Each process has a limited number of descriptor available, managed via <code>ulimit</code>.
</Item>

<Item icon="apps" title="The application manages high-level operations">
  The application representation of the socket adds extra memory overhead.
</Item>

