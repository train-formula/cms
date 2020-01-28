import gql from 'graphql-tag'

export const BasicPrescriptionFields = gql`
  fragment BasicPrescriptionFields on Prescription {
    id
    createdAt
    updatedAt
    trainerOrganizationID
    name
    prescriptionCategory
    durationSeconds
  }
`
