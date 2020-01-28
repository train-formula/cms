import gql from 'graphql-tag'

export const BasicCategoryFields = gql`
  fragment BasicCategoryFields on WorkoutCategory {
    id
    createdAt
    updatedAt
    trainerOrganizationID
    name
    description
  }
`
