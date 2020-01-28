/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types'

import { BasicCategoryFieldsFragment } from '../../fragments/generated/BasicCategoryFields.gql.generated'
import * as Operations from '../GetBasicCategories.gql'
import * as ApolloReactCommon from '@apollo/react-common'
import * as ApolloReactHooks from '@apollo/react-hooks'

export type GetBasicCategoriesQueryVariables = {
  trainerOrganizationID: Types.Scalars['ID']
  first: Types.Scalars['Int']
}

export type GetBasicCategoriesQuery = { __typename?: 'Query' } & {
  workoutCategorySearch: Types.Maybe<
    { __typename?: 'WorkoutCategorySearchResults' } & {
      results: { __typename?: 'WorkoutCategoryConnection' } & Pick<
        Types.WorkoutCategoryConnection,
        'totalCount'
      > & {
          edges: Array<
            { __typename?: 'WorkoutCategoryEdge' } & {
              node: {
                __typename?: 'WorkoutCategory'
              } & BasicCategoryFieldsFragment
            }
          >
        }
    }
  >
}

/**
 * __useGetBasicCategoriesQuery__
 *
 * To run a query within a React component, call `useGetBasicCategoriesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetBasicCategoriesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetBasicCategoriesQuery({
 *   variables: {
 *      trainerOrganizationID: // value for 'trainerOrganizationID'
 *      first: // value for 'first'
 *   },
 * });
 */
export function useGetBasicCategoriesQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<
    GetBasicCategoriesQuery,
    GetBasicCategoriesQueryVariables
  >
) {
  return ApolloReactHooks.useQuery<
    GetBasicCategoriesQuery,
    GetBasicCategoriesQueryVariables
  >(Operations.GetBasicCategories, baseOptions)
}
export function useGetBasicCategoriesLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<
    GetBasicCategoriesQuery,
    GetBasicCategoriesQueryVariables
  >
) {
  return ApolloReactHooks.useLazyQuery<
    GetBasicCategoriesQuery,
    GetBasicCategoriesQueryVariables
  >(Operations.GetBasicCategories, baseOptions)
}
export type GetBasicCategoriesQueryHookResult = ReturnType<
  typeof useGetBasicCategoriesQuery
>
export type GetBasicCategoriesLazyQueryHookResult = ReturnType<
  typeof useGetBasicCategoriesLazyQuery
>
export type GetBasicCategoriesQueryResult = ApolloReactCommon.QueryResult<
  GetBasicCategoriesQuery,
  GetBasicCategoriesQueryVariables
>
