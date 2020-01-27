import gql from 'graphql-tag'
import { BasicProgramFields } from '../fragments/BasicProgramFields.gql'

export const GetPrograms = gql`
  query GetPrograms($trainerOrganizationID: ID!, $first: Int!) {
    workoutProgramSearch(
      request: { trainerOrganizationID: $trainerOrganizationID }
      first: $first
    ) {
      results {
        totalCount
        edges {
          node {
            ...BasicProgramFields
          }
        }
      }
    }
  }

  ${BasicProgramFields}
`
