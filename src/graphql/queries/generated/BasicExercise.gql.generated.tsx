/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types';

import { BasicExerciseFieldsFragment } from '../../fragments/generated/BasicExerciseFields.gql.generated';
import * as Operations from '../BasicExercise.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type BasicExerciseQueryVariables = Types.Exact<{
  id: Types.Scalars['ID'];
}>;

export type BasicExerciseQuery = { __typename?: 'Query' } & {
  exercise?: Types.Maybe<{ __typename?: 'Exercise' } & BasicExerciseFieldsFragment>;
};

/**
 * __useBasicExerciseQuery__
 *
 * To run a query within a React component, call `useBasicExerciseQuery` and pass it any options that fit your needs.
 * When your component renders, `useBasicExerciseQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useBasicExerciseQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useBasicExerciseQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<BasicExerciseQuery, BasicExerciseQueryVariables>
) {
  return ApolloReactHooks.useQuery<BasicExerciseQuery, BasicExerciseQueryVariables>(
    Operations.BasicExercise,
    baseOptions
  );
}
export function useBasicExerciseLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<BasicExerciseQuery, BasicExerciseQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<BasicExerciseQuery, BasicExerciseQueryVariables>(
    Operations.BasicExercise,
    baseOptions
  );
}
export type BasicExerciseQueryHookResult = ReturnType<typeof useBasicExerciseQuery>;
export type BasicExerciseLazyQueryHookResult = ReturnType<typeof useBasicExerciseLazyQuery>;
export type BasicExerciseQueryResult = ApolloReactCommon.QueryResult<BasicExerciseQuery, BasicExerciseQueryVariables>;
