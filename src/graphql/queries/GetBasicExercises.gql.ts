import gql from 'graphql-tag'

import { BasicExerciseFields } from '../fragments/BasicExerciseFields.gql'

export const GetBasicExercises = gql`
  query GetBasicExercises($trainerOrganizationID: ID!, $first: Int!) {
    exerciseSearch(
      request: { trainerOrganizationID: $trainerOrganizationID }
      first: $first
    ) {
      results {
        edges {
          node {
            ...BasicExerciseFields
          }
        }
      }
    }
  }
  ${BasicExerciseFields}
`
