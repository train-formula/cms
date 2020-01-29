/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types'

import { BasicExerciseFieldsFragment } from '../../fragments/generated/BasicExerciseFields.gql.generated'
import * as Operations from '../GetBasicExercises.gql'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'

export type GetBasicExercisesQueryVariables = {
  trainerOrganizationID: Types.Scalars['ID']
  first: Types.Scalars['Int']
}

export type GetBasicExercisesQuery = { __typename?: 'Query' } & {
  exerciseSearch: Types.Maybe<
    { __typename?: 'ExerciseSearchResults' } & {
      results: { __typename?: 'ExerciseConnection' } & {
        edges: Array<
          { __typename?: 'ExerciseEdge' } & {
            node: { __typename?: 'Exercise' } & BasicExerciseFieldsFragment
          }
        >
      }
    }
  >
}

/**
 * __useGetBasicExercisesQuery__
 *
 * To run a query within a React component, call `useGetBasicExercisesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBasicExercisesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBasicExercisesQuery({
 *   variables: {
 *      trainerOrganizationID: // value for 'trainerOrganizationID'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetBasicExercisesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetBasicExercisesQuery,
    GetBasicExercisesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetBasicExercisesQuery,
    GetBasicExercisesQueryVariables
  >(Operations.GetBasicExercises, baseOptions)
}
export function useGetBasicExercisesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetBasicExercisesQuery,
    GetBasicExercisesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetBasicExercisesQuery,
    GetBasicExercisesQueryVariables
  >(Operations.GetBasicExercises, baseOptions)
}
export type GetBasicExercisesQueryHookResult = ReturnType<
  typeof useGetBasicExercisesQuery
>
export type GetBasicExercisesLazyQueryHookResult = ReturnType<
  typeof useGetBasicExercisesLazyQuery
>
export type GetBasicExercisesQueryResult = ApolloReactCommon.QueryResult<
  GetBasicExercisesQuery,
  GetBasicExercisesQueryVariables
>