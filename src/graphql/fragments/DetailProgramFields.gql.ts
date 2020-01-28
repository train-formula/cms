import gql from 'graphql-tag'

import { BasicProgramFields } from './BasicProgramFields.gql'

export const DetailProgramFields = gql`
  fragment DetailProgramFields on WorkoutProgram {
    ...BasicProgramFields
  }
  ${BasicProgramFields}
`
