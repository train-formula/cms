/* THIS FILE WAS GENERATED BY GRAPHQL CODE GENERATOR. DO NOT EDIT. */
import * as Types from '../../schema/generated/types';

import { BasicTagFieldsFragment } from '../../fragments/generated/BasicTagFields.gql.generated';
import * as Operations from '../GetOrganizationTags.gql';
import * as ApolloReactCommon from '@apollo/react-common';
import * as ApolloReactHooks from '@apollo/react-hooks';

export type GetOrganizationTagsQueryVariables = Types.Exact<{
  trainerOrganizationID: Types.Scalars['ID'];
}>;

export type GetOrganizationTagsQuery = { __typename?: 'Query' } & {
  organizationAvailableTags?: Types.Maybe<
    { __typename?: 'TagConnection' } & {
      edges: Array<{ __typename?: 'TagEdge' } & { node: { __typename?: 'Tag' } & BasicTagFieldsFragment }>;
    }
  >;
};

/**
 * __useGetOrganizationTagsQuery__
 *
 * To run a query within a React component, call `useGetOrganizationTagsQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetOrganizationTagsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetOrganizationTagsQuery({
 *   variables: {
 *      trainerOrganizationID: // value for 'trainerOrganizationID'
 *   },
 * });
 */
export function useGetOrganizationTagsQuery(
  baseOptions?: ApolloReactHooks.QueryHookOptions<GetOrganizationTagsQuery, GetOrganizationTagsQueryVariables>
) {
  return ApolloReactHooks.useQuery<GetOrganizationTagsQuery, GetOrganizationTagsQueryVariables>(
    Operations.GetOrganizationTags,
    baseOptions
  );
}
export function useGetOrganizationTagsLazyQuery(
  baseOptions?: ApolloReactHooks.LazyQueryHookOptions<GetOrganizationTagsQuery, GetOrganizationTagsQueryVariables>
) {
  return ApolloReactHooks.useLazyQuery<GetOrganizationTagsQuery, GetOrganizationTagsQueryVariables>(
    Operations.GetOrganizationTags,
    baseOptions
  );
}
export type GetOrganizationTagsQueryHookResult = ReturnType<typeof useGetOrganizationTagsQuery>;
export type GetOrganizationTagsLazyQueryHookResult = ReturnType<typeof useGetOrganizationTagsLazyQuery>;
export type GetOrganizationTagsQueryResult = ApolloReactCommon.QueryResult<
  GetOrganizationTagsQuery,
  GetOrganizationTagsQueryVariables
>;