import gql from 'graphql-tag';
import { BasicExerciseFields } from '../fragments/BasicExerciseFields.gql';

export const BasicExercise = gql`
  query BasicExercise($id: ID!) {
    exercise(id: $id) {
      ...BasicExerciseFields
    }
  }

  ${BasicExerciseFields}
`;
