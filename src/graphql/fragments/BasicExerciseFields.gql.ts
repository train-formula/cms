import gql from 'graphql-tag'

export const BasicExerciseFields = gql`
  fragment BasicExerciseFields on Exercise {
    id
    createdAt
    updatedAt
    trainerOrganizationID
    name
    description
    videoURL
  }
`
