import gql from 'graphql-tag'
import { BasicProgramFields } from '../fragments/BasicProgramFields.gql'

export const CreateProgram = gql`
  mutation CreateProgram(
    $trainerOrganizationID: ID!
    $name: String!
    $description: String
    $startsWhenCustomerStarts: Boolean!
    $numberOfDays: Int
  ) {
    createWorkoutProgram(
      request: {
        trainerOrganizationID: $trainerOrganizationID
        name: $name
        description: $description
        startsWhenCustomerStarts: $startsWhenCustomerStarts
        numberOfDays: $numberOfDays
      }
    ) {
      ...BasicProgramFields
    }
  }

  ${BasicProgramFields}
`
