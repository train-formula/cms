import gql from 'graphql-tag'

import { BasicPrescriptionFields } from '../fragments/BasicPrescriptionFields.gql'

export const GetBasicPrescriptions = gql`
  query GetBasicPrescriptions($trainerOrganizationID: ID!, $first: Int!) {
    prescriptionSearch(
      request: { trainerOrganizationID: $trainerOrganizationID }
      first: $first
    ) {
      results {
        edges {
          node {
            ...BasicPrescriptionFields
          }
        }
      }
    }
  }
  ${BasicPrescriptionFields}
`
