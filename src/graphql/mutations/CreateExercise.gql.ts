import gql from 'graphql-tag';
import { BasicExerciseFields } from '../fragments/BasicExerciseFields.gql';

export const CreateExercise = gql`
  mutation CreateExercise($input: CreateExercise!) {
    createExercise(request: $input) {
      ...BasicExerciseFields
    }
  }
  ${BasicExerciseFields}
`;
