import gql from 'graphql-tag'

import { BasicProgramFields } from './BasicProgramFields.gql'
import { BasicTagFields } from './BasicTagFields.gql'

export const DetailProgramFields = gql`
  fragment DetailProgramFields on WorkoutProgram {
    ...BasicProgramFields
    tags {
      ...BasicTagFields
    }
  }
  ${BasicProgramFields}
  ${BasicTagFields}
`
