import gql from 'graphql-tag'
import { DetailProgramFields } from '../fragments/DetailProgramFields.gql'

export const GetDetailPrograms = gql`
  query GetDetailPrograms($trainerOrganizationID: ID!, $first: Int!) {
    workoutProgramSearch(
      request: { trainerOrganizationID: $trainerOrganizationID }
      first: $first
    ) {
      results {
        totalCount
        edges {
          node {
            ...DetailProgramFields
          }
        }
      }
    }
  }
  ${DetailProgramFields}
`
