interface Block {
  multihash: string
  createdAt: Date
  type: 'raw' | 'dag-cbor' | 'dag-json'
}
