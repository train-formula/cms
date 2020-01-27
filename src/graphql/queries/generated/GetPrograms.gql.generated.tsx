/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types'

import { BasicProgramFieldsFragment } from '../../fragments/generated/BasicProgramFields.gql.generated'
import * as Operations from '../GetPrograms.gql'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'

export type GetProgramsQueryVariables = {
  trainerOrganizationID: Types.Scalars['ID']
  first: Types.Scalars['Int']
}

export type GetProgramsQuery = { __typename?: 'Query' } & {
  workoutProgramSearch: Types.Maybe<
    { __typename?: 'WorkoutProgramSearchResults' } & {
      results: { __typename?: 'WorkoutProgramConnection' } & Pick<
        Types.WorkoutProgramConnection,
        'totalCount'
      > & {
          edges: Array<
            { __typename?: 'WorkoutProgramEdge' } & {
              node: {
                __typename?: 'WorkoutProgram'
              } & BasicProgramFieldsFragment
            }
          >
        }
    }
  >
}

/**
 * __useGetProgramsQuery__
 *
 * To run a query within a React component, call `useGetProgramsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetProgramsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetProgramsQuery({
 *   variables: {
 *      trainerOrganizationID: // value for 'trainerOrganizationID'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetProgramsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetProgramsQuery,
    GetProgramsQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<GetProgramsQuery, GetProgramsQueryVariables>(
    Operations.GetPrograms,
    baseOptions
  )
}
export function useGetProgramsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetProgramsQuery,
    GetProgramsQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetProgramsQuery,
    GetProgramsQueryVariables
  >(Operations.GetPrograms, baseOptions)
}
export type GetProgramsQueryHookResult = ReturnType<typeof useGetProgramsQuery>
export type GetProgramsLazyQueryHookResult = ReturnType<
  typeof useGetProgramsLazyQuery
>
export type GetProgramsQueryResult = ApolloReactCommon.QueryResult<
  GetProgramsQuery,
  GetProgramsQueryVariables
>