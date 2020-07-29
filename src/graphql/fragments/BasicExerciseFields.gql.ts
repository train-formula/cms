import gql from 'graphql-tag';
import { BasicTagFields } from './BasicTagFields.gql';

export const BasicExerciseFields = gql`
  fragment BasicExerciseFields on Exercise {
    id
    createdAt
    updatedAt
    trainerOrganizationID
    name
    description
    videoURL

    tags {
      ...BasicTagFields
    }
  }

  ${BasicTagFields}
`;
