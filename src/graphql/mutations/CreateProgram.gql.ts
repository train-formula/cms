import gql from 'graphql-tag'
import { BasicProgramFields } from '../fragments/BasicProgramFields.gql'

export const CreateProgram = gql`
  mutation CreateProgram($input: CreateWorkoutProgram!) {
    createWorkoutProgram(request: $input) {
      ...BasicProgramFields
    }
  }

  ${BasicProgramFields}
`
