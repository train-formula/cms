import gql from 'graphql-tag'

export const BasicTagFields = gql`
  fragment BasicTagFields on Tag {
    id
    tag
  }
`
