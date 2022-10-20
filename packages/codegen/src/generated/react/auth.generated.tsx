import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type RequestRegisterMutationVariables = Types.Exact<{
  username: Types.Scalars['String'];
}>;


export type RequestRegisterMutation = { __typename?: 'Mutation', requestRegister: { __typename?: 'AuthenticatorChallenge', userId: string, challenge: string, relyingParty: { __typename?: 'RelyingParty', name: string, id: string } } };

export type VerifyRegisterMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  rawId: Types.Scalars['String'];
  type: Types.Scalars['String'];
  response: Types.RegisterResponse;
}>;


export type VerifyRegisterMutation = { __typename?: 'Mutation', verifyRegister: { __typename?: 'AuthorizationToken', token: string } };

export type RequestLoginMutationVariables = Types.Exact<{
  username: Types.Scalars['String'];
}>;


export type RequestLoginMutation = { __typename?: 'Mutation', requestLogin: { __typename?: 'LoginChallenge', challenge: string, allowedCredentials: Array<{ __typename?: 'AllowedCredentials', type: string, id: string }> } };

export type VerifyLoginMutationVariables = Types.Exact<{
  id: Types.Scalars['String'];
  response: Types.LoginResponse;
}>;


export type VerifyLoginMutation = { __typename?: 'Mutation', verifyLogin: { __typename?: 'AuthorizationToken', token: string } };


export const RequestRegisterDocument = gql`
    mutation requestRegister($username: String!) {
  requestRegister(username: $username) {
    userId
    challenge
    relyingParty {
      name
      id
    }
  }
}
    `;
export type RequestRegisterMutationFn = Apollo.MutationFunction<RequestRegisterMutation, RequestRegisterMutationVariables>;

/**
 * __useRequestRegisterMutation__
 *
 * To run a mutation, you first call `useRequestRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestRegisterMutation, { data, loading, error }] = useRequestRegisterMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRequestRegisterMutation(baseOptions?: Apollo.MutationHookOptions<RequestRegisterMutation, RequestRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestRegisterMutation, RequestRegisterMutationVariables>(RequestRegisterDocument, options);
      }
export type RequestRegisterMutationHookResult = ReturnType<typeof useRequestRegisterMutation>;
export type RequestRegisterMutationResult = Apollo.MutationResult<RequestRegisterMutation>;
export type RequestRegisterMutationOptions = Apollo.BaseMutationOptions<RequestRegisterMutation, RequestRegisterMutationVariables>;
export const VerifyRegisterDocument = gql`
    mutation verifyRegister($id: String!, $rawId: String!, $type: String!, $response: RegisterResponse!) {
  verifyRegister(id: $id, rawId: $rawId, type: $type, response: $response) {
    token
  }
}
    `;
export type VerifyRegisterMutationFn = Apollo.MutationFunction<VerifyRegisterMutation, VerifyRegisterMutationVariables>;

/**
 * __useVerifyRegisterMutation__
 *
 * To run a mutation, you first call `useVerifyRegisterMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyRegisterMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyRegisterMutation, { data, loading, error }] = useVerifyRegisterMutation({
 *   variables: {
 *      id: // value for 'id'
 *      rawId: // value for 'rawId'
 *      type: // value for 'type'
 *      response: // value for 'response'
 *   },
 * });
 */
export function useVerifyRegisterMutation(baseOptions?: Apollo.MutationHookOptions<VerifyRegisterMutation, VerifyRegisterMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyRegisterMutation, VerifyRegisterMutationVariables>(VerifyRegisterDocument, options);
      }
export type VerifyRegisterMutationHookResult = ReturnType<typeof useVerifyRegisterMutation>;
export type VerifyRegisterMutationResult = Apollo.MutationResult<VerifyRegisterMutation>;
export type VerifyRegisterMutationOptions = Apollo.BaseMutationOptions<VerifyRegisterMutation, VerifyRegisterMutationVariables>;
export const RequestLoginDocument = gql`
    mutation requestLogin($username: String!) {
  requestLogin(username: $username) {
    challenge
    allowedCredentials {
      type
      id
    }
  }
}
    `;
export type RequestLoginMutationFn = Apollo.MutationFunction<RequestLoginMutation, RequestLoginMutationVariables>;

/**
 * __useRequestLoginMutation__
 *
 * To run a mutation, you first call `useRequestLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useRequestLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [requestLoginMutation, { data, loading, error }] = useRequestLoginMutation({
 *   variables: {
 *      username: // value for 'username'
 *   },
 * });
 */
export function useRequestLoginMutation(baseOptions?: Apollo.MutationHookOptions<RequestLoginMutation, RequestLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<RequestLoginMutation, RequestLoginMutationVariables>(RequestLoginDocument, options);
      }
export type RequestLoginMutationHookResult = ReturnType<typeof useRequestLoginMutation>;
export type RequestLoginMutationResult = Apollo.MutationResult<RequestLoginMutation>;
export type RequestLoginMutationOptions = Apollo.BaseMutationOptions<RequestLoginMutation, RequestLoginMutationVariables>;
export const VerifyLoginDocument = gql`
    mutation verifyLogin($id: String!, $response: LoginResponse!) {
  verifyLogin(id: $id, response: $response) {
    token
  }
}
    `;
export type VerifyLoginMutationFn = Apollo.MutationFunction<VerifyLoginMutation, VerifyLoginMutationVariables>;

/**
 * __useVerifyLoginMutation__
 *
 * To run a mutation, you first call `useVerifyLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useVerifyLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [verifyLoginMutation, { data, loading, error }] = useVerifyLoginMutation({
 *   variables: {
 *      id: // value for 'id'
 *      response: // value for 'response'
 *   },
 * });
 */
export function useVerifyLoginMutation(baseOptions?: Apollo.MutationHookOptions<VerifyLoginMutation, VerifyLoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<VerifyLoginMutation, VerifyLoginMutationVariables>(VerifyLoginDocument, options);
      }
export type VerifyLoginMutationHookResult = ReturnType<typeof useVerifyLoginMutation>;
export type VerifyLoginMutationResult = Apollo.MutationResult<VerifyLoginMutation>;
export type VerifyLoginMutationOptions = Apollo.BaseMutationOptions<VerifyLoginMutation, VerifyLoginMutationVariables>;