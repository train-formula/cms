/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types';

import { BasicExerciseFieldsFragment } from '../../fragments/generated/BasicExerciseFields.gql.generated';
import * as Operations from '../CreateExercise.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateExerciseMutationVariables = Types.Exact<{
  input: Types.CreateExercise;
}>;

export type CreateExerciseMutation = { __typename?: 'Mutation' } & {
  createExercise?: Types.Maybe<{ __typename?: 'Exercise' } & BasicExerciseFieldsFragment>;
};

export type CreateExerciseMutationFn = ApolloReactCommon.MutationFunction<
  CreateExerciseMutation,
  CreateExerciseMutationVariables
>;

/**
 * __useCreateExerciseMutation__
 *
 * To run a mutation, you first call `useCreateExerciseMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateExerciseMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createExerciseMutation, { data, loading, error }] = useCreateExerciseMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateExerciseMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateExerciseMutation, CreateExerciseMutationVariables>
) {
  return ApolloReactHooks.useMutation<CreateExerciseMutation, CreateExerciseMutationVariables>(
    Operations.CreateExercise,
    baseOptions
  );
}
export type CreateExerciseMutationHookResult = ReturnType<typeof useCreateExerciseMutation>;
export type CreateExerciseMutationResult = ApolloReactCommon.MutationResult<CreateExerciseMutation>;
export type CreateExerciseMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateExerciseMutation,
  CreateExerciseMutationVariables
>;
