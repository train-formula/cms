import gql from 'graphql-tag'

export const BasicProgramFields = gql`
  fragment BasicProgramFields on WorkoutProgram {
    id
    createdAt
    updatedAt
    trainerOrganizationID
    name
    description
    exactStartDate
    startsWhenCustomerStarts
    numberOfDays
  }
`
