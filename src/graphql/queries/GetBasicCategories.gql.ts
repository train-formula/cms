import gql from 'graphql-tag'

import { BasicCategoryFields } from '../fragments/BasicCategoryFields.gql'

export const GetBasicCategories = gql`
  query GetBasicCategories($trainerOrganizationID: ID!, $first: Int!) {
    workoutCategorySearch(
      request: { trainerOrganizationID: $trainerOrganizationID }
      first: $first
    ) {
      results {
        totalCount
        edges {
          node {
            ...BasicCategoryFields
          }
        }
      }
    }
  }
  ${BasicCategoryFields}
`
