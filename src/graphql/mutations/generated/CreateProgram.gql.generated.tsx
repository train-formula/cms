/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types';

import { BasicProgramFieldsFragment } from '../../fragments/generated/BasicProgramFields.gql.generated';
import * as Operations from '../CreateProgram.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type CreateProgramMutationVariables = Types.Exact<{
  input: Types.CreateWorkoutProgram;
}>;

export type CreateProgramMutation = { __typename?: 'Mutation' } & {
  createWorkoutProgram?: Types.Maybe<{ __typename?: 'WorkoutProgram' } & BasicProgramFieldsFragment>;
};

export type CreateProgramMutationFn = ApolloReactCommon.MutationFunction<
  CreateProgramMutation,
  CreateProgramMutationVariables
>;

/**
 * __useCreateProgramMutation__
 *
 * To run a mutation, you first call `useCreateProgramMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateProgramMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createProgramMutation, { data, loading, error }] = useCreateProgramMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCreateProgramMutation(
  baseOptions?: ApolloReactHooks.MutationHookOptions<CreateProgramMutation, CreateProgramMutationVariables>
) {
  return ApolloReactHooks.useMutation<CreateProgramMutation, CreateProgramMutationVariables>(
    Operations.CreateProgram,
    baseOptions
  );
}
export type CreateProgramMutationHookResult = ReturnType<typeof useCreateProgramMutation>;
export type CreateProgramMutationResult = ApolloReactCommon.MutationResult<CreateProgramMutation>;
export type CreateProgramMutationOptions = ApolloReactCommon.BaseMutationOptions<
  CreateProgramMutation,
  CreateProgramMutationVariables
>;
