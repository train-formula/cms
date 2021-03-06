/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types';

import { BasicTagFieldsFragment } from './BasicTagFields.gql.generated';

export type BasicExerciseFieldsFragment = { __typename?: 'Exercise' } & Pick<
  Types.Exercise,
  'id' | 'createdAt' | 'updatedAt' | 'trainerOrganizationID' | 'name' | 'description' | 'videoURL'
> & { tags?: Types.Maybe<Array<{ __typename?: 'Tag' } & BasicTagFieldsFragment>> };
