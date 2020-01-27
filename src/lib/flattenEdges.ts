export type FlattenedEdge<T> = T & {
  edgeCursor?: string
}

/**
 * Flattens edges from a connection, extracting nodes into a list of objects with each edge's data + its cursor
 * @param edges
 */
export function flattenEdges<T>(
  edges?: { cursor?: string; node: T }[]
): FlattenedEdge<T>[] {
  if (!edges) {
    return []
  }

  return edges.map(edge => {
    if (edge.cursor === undefined) {
      return edge.node
    }

    return {
      edgeCursor: edge.cursor,
      ...edge.node,
    }
  })
}
