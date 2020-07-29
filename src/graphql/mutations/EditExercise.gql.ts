import gql from 'graphql-tag';
import { BasicExerciseFields } from '../fragments/BasicExerciseFields.gql';

export const EditExercise = gql`
  mutation EditExercise($input: EditExercise!) {
    editExercise(request: $input) {
      ...BasicExerciseFields
    }
  }

  ${BasicExerciseFields}
`;
