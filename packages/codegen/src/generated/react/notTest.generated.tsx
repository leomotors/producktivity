import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type NotTestsQueryVariables = Types.Exact<{
  where?: Types.InputMaybe<Types.NotTestWhereInput>;
}>;


export type NotTestsQuery = { __typename?: 'Query', notTests: Array<{ __typename?: 'NotTest', id: string }> };


export const NotTestsDocument = gql`
    query NotTests($where: NotTestWhereInput) {
  notTests(where: $where) {
    id
  }
}
    `;

/**
 * __useNotTestsQuery__
 *
 * To run a query within a React component, call `useNotTestsQuery` and pass it any options that fit your needs.
 * When your component renders, `useNotTestsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useNotTestsQuery({
 *   variables: {
 *      where: // value for 'where'
 *   },
 * });
 */
export function useNotTestsQuery(baseOptions?: Apollo.QueryHookOptions<NotTestsQuery, NotTestsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<NotTestsQuery, NotTestsQueryVariables>(NotTestsDocument, options);
      }
export function useNotTestsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<NotTestsQuery, NotTestsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<NotTestsQuery, NotTestsQueryVariables>(NotTestsDocument, options);
        }
export type NotTestsQueryHookResult = ReturnType<typeof useNotTestsQuery>;
export type NotTestsLazyQueryHookResult = ReturnType<typeof useNotTestsLazyQuery>;
export type NotTestsQueryResult = Apollo.QueryResult<NotTestsQuery, NotTestsQueryVariables>;