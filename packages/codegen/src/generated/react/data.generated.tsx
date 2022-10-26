import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, registered: boolean, createdAt: any, updatedAt: any } };

export type EventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', me: { __typename?: 'User', events?: Array<{ __typename?: 'Event', id: string, name: string, dueDate: any, tags?: Array<string> | null, userId: string }> | null } };

export type UpdateEventMutationVariables = Types.Exact<{
  updateEventId: Types.Scalars['String'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  dueDate?: Types.InputMaybe<Types.Scalars['DateTime']>;
  tags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, name: string, tags?: Array<string> | null, dueDate: any } };

export type TasksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', me: { __typename?: 'User', tasks?: Array<{ __typename?: 'Task', id: string, name: string, dueDate: any, tags?: Array<string> | null, userId: string }> | null } };

export type HabitsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HabitsQuery = { __typename?: 'Query', me: { __typename?: 'User', habits?: Array<{ __typename?: 'Habit', id: string, name: string, currentCount?: number | null, targetCount?: number | null, tags?: Array<string> | null, userId: string }> | null } };

export type UpdateHabitMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
  tags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  currentCount?: Types.InputMaybe<Types.Scalars['Float']>;
  targetCount?: Types.InputMaybe<Types.Scalars['Float']>;
  updateHabitId: Types.Scalars['String'];
}>;


export type UpdateHabitMutation = { __typename?: 'Mutation', updateHabit: { __typename?: 'Habit', name: string, tags?: Array<string> | null, currentCount?: number | null, targetCount?: number | null } };


export const UserDocument = gql`
    query User {
  me {
    id
    username
    registered
    createdAt
    updatedAt
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;
export const EventsDocument = gql`
    query Events {
  me {
    events {
      id
      name
      dueDate
      tags
      userId
    }
  }
}
    `;

/**
 * __useEventsQuery__
 *
 * To run a query within a React component, call `useEventsQuery` and pass it any options that fit your needs.
 * When your component renders, `useEventsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useEventsQuery({
 *   variables: {
 *   },
 * });
 */
export function useEventsQuery(baseOptions?: Apollo.QueryHookOptions<EventsQuery, EventsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
      }
export function useEventsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<EventsQuery, EventsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<EventsQuery, EventsQueryVariables>(EventsDocument, options);
        }
export type EventsQueryHookResult = ReturnType<typeof useEventsQuery>;
export type EventsLazyQueryHookResult = ReturnType<typeof useEventsLazyQuery>;
export type EventsQueryResult = Apollo.QueryResult<EventsQuery, EventsQueryVariables>;
export const UpdateEventDocument = gql`
    mutation UpdateEvent($updateEventId: String!, $name: String, $dueDate: DateTime, $tags: [String!]) {
  updateEvent(id: $updateEventId, name: $name, dueDate: $dueDate, tags: $tags) {
    id
    name
    tags
    dueDate
  }
}
    `;
export type UpdateEventMutationFn = Apollo.MutationFunction<UpdateEventMutation, UpdateEventMutationVariables>;

/**
 * __useUpdateEventMutation__
 *
 * To run a mutation, you first call `useUpdateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateEventMutation, { data, loading, error }] = useUpdateEventMutation({
 *   variables: {
 *      updateEventId: // value for 'updateEventId'
 *      name: // value for 'name'
 *      dueDate: // value for 'dueDate'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateEventMutation(baseOptions?: Apollo.MutationHookOptions<UpdateEventMutation, UpdateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateEventMutation, UpdateEventMutationVariables>(UpdateEventDocument, options);
      }
export type UpdateEventMutationHookResult = ReturnType<typeof useUpdateEventMutation>;
export type UpdateEventMutationResult = Apollo.MutationResult<UpdateEventMutation>;
export type UpdateEventMutationOptions = Apollo.BaseMutationOptions<UpdateEventMutation, UpdateEventMutationVariables>;
export const TasksDocument = gql`
    query Tasks {
  me {
    tasks {
      id
      name
      dueDate
      tags
      userId
    }
  }
}
    `;

/**
 * __useTasksQuery__
 *
 * To run a query within a React component, call `useTasksQuery` and pass it any options that fit your needs.
 * When your component renders, `useTasksQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useTasksQuery({
 *   variables: {
 *   },
 * });
 */
export function useTasksQuery(baseOptions?: Apollo.QueryHookOptions<TasksQuery, TasksQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
      }
export function useTasksLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<TasksQuery, TasksQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<TasksQuery, TasksQueryVariables>(TasksDocument, options);
        }
export type TasksQueryHookResult = ReturnType<typeof useTasksQuery>;
export type TasksLazyQueryHookResult = ReturnType<typeof useTasksLazyQuery>;
export type TasksQueryResult = Apollo.QueryResult<TasksQuery, TasksQueryVariables>;
export const HabitsDocument = gql`
    query Habits {
  me {
    habits {
      id
      name
      currentCount
      targetCount
      tags
      userId
    }
  }
}
    `;

/**
 * __useHabitsQuery__
 *
 * To run a query within a React component, call `useHabitsQuery` and pass it any options that fit your needs.
 * When your component renders, `useHabitsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useHabitsQuery({
 *   variables: {
 *   },
 * });
 */
export function useHabitsQuery(baseOptions?: Apollo.QueryHookOptions<HabitsQuery, HabitsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<HabitsQuery, HabitsQueryVariables>(HabitsDocument, options);
      }
export function useHabitsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<HabitsQuery, HabitsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<HabitsQuery, HabitsQueryVariables>(HabitsDocument, options);
        }
export type HabitsQueryHookResult = ReturnType<typeof useHabitsQuery>;
export type HabitsLazyQueryHookResult = ReturnType<typeof useHabitsLazyQuery>;
export type HabitsQueryResult = Apollo.QueryResult<HabitsQuery, HabitsQueryVariables>;
export const UpdateHabitDocument = gql`
    mutation UpdateHabit($name: String, $tags: [String!], $currentCount: Float, $targetCount: Float, $updateHabitId: String!) {
  updateHabit(
    name: $name
    tags: $tags
    currentCount: $currentCount
    targetCount: $targetCount
    id: $updateHabitId
  ) {
    name
    tags
    currentCount
    targetCount
  }
}
    `;
export type UpdateHabitMutationFn = Apollo.MutationFunction<UpdateHabitMutation, UpdateHabitMutationVariables>;

/**
 * __useUpdateHabitMutation__
 *
 * To run a mutation, you first call `useUpdateHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateHabitMutation, { data, loading, error }] = useUpdateHabitMutation({
 *   variables: {
 *      name: // value for 'name'
 *      tags: // value for 'tags'
 *      currentCount: // value for 'currentCount'
 *      targetCount: // value for 'targetCount'
 *      updateHabitId: // value for 'updateHabitId'
 *   },
 * });
 */
export function useUpdateHabitMutation(baseOptions?: Apollo.MutationHookOptions<UpdateHabitMutation, UpdateHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateHabitMutation, UpdateHabitMutationVariables>(UpdateHabitDocument, options);
      }
export type UpdateHabitMutationHookResult = ReturnType<typeof useUpdateHabitMutation>;
export type UpdateHabitMutationResult = Apollo.MutationResult<UpdateHabitMutation>;
export type UpdateHabitMutationOptions = Apollo.BaseMutationOptions<UpdateHabitMutation, UpdateHabitMutationVariables>;