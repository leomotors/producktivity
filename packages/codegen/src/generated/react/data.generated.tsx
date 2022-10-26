import type * as Types from '../types';

import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
const defaultOptions = {} as const;
export type UserQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', me: { __typename?: 'User', id: string, username: string, registered: boolean, createdAt: any, updatedAt: any } };

export type EventsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type EventsQuery = { __typename?: 'Query', me: { __typename?: 'User', events?: Array<{ __typename?: 'Event', id: string, name: string, dueDate: any, tags?: Array<string> | null, userId: string }> | null } };

export type CreateEventMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  dueDate: Types.Scalars['DateTime'];
  tags: Array<Types.Scalars['String']> | Types.Scalars['String'];
}>;


export type CreateEventMutation = { __typename?: 'Mutation', createEvent: { __typename?: 'Event', id: string, name: string, description?: string | null, dueDate: any, tags?: Array<string> | null, userId: string } };

export type UpdateEventMutationVariables = Types.Exact<{
  updateEventId: Types.Scalars['String'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  dueDate?: Types.InputMaybe<Types.Scalars['DateTime']>;
  tags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type UpdateEventMutation = { __typename?: 'Mutation', updateEvent: { __typename?: 'Event', id: string, name: string, tags?: Array<string> | null, dueDate: any } };

export type DeleteEventMutationVariables = Types.Exact<{
  deleteEventId: Types.Scalars['String'];
}>;


export type DeleteEventMutation = { __typename?: 'Mutation', deleteEvent: { __typename?: 'DeleteEventReturnType', id: string } };

export type TasksQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type TasksQuery = { __typename?: 'Query', me: { __typename?: 'User', tasks?: Array<{ __typename?: 'Task', id: string, name: string, dueDate: any, tags?: Array<string> | null, userId: string, description: string, isCompleted: boolean }> | null } };

export type CreateTaskMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  dueDate: Types.Scalars['DateTime'];
  tags: Array<Types.Scalars['String']> | Types.Scalars['String'];
  description: Types.Scalars['String'];
}>;


export type CreateTaskMutation = { __typename?: 'Mutation', createTask: { __typename?: 'Task', name: string, id: string, dueDate: any, isCompleted: boolean, tags?: Array<string> | null, userId: string } };

export type UpdateTaskMutationVariables = Types.Exact<{
  updateTaskId: Types.Scalars['String'];
  name?: Types.InputMaybe<Types.Scalars['String']>;
  dueDate?: Types.InputMaybe<Types.Scalars['DateTime']>;
  isCompleted?: Types.InputMaybe<Types.Scalars['Boolean']>;
  tags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
}>;


export type UpdateTaskMutation = { __typename?: 'Mutation', updateTask: { __typename?: 'Task', id: string, name: string, dueDate: any, isCompleted: boolean, tags?: Array<string> | null, userId: string } };

export type DeleteTaskMutationVariables = Types.Exact<{
  deleteTaskId: Types.Scalars['String'];
}>;


export type DeleteTaskMutation = { __typename?: 'Mutation', deleteTask: { __typename?: 'DeleteTaskReturnType', id: string } };

export type HabitsQueryVariables = Types.Exact<{ [key: string]: never; }>;


export type HabitsQuery = { __typename?: 'Query', me: { __typename?: 'User', habits?: Array<{ __typename?: 'Habit', id: string, name: string, currentCount?: number | null, targetCount?: number | null, tags?: Array<string> | null, userId: string }> | null } };

export type CreateHabitMutationVariables = Types.Exact<{
  name: Types.Scalars['String'];
  tags: Array<Types.Scalars['String']> | Types.Scalars['String'];
  targetCount?: Types.InputMaybe<Types.Scalars['Float']>;
  currentCount?: Types.InputMaybe<Types.Scalars['Float']>;
}>;


export type CreateHabitMutation = { __typename?: 'Mutation', createHabit: { __typename?: 'Habit', id: string, name: string, tags?: Array<string> | null, currentCount?: number | null, userId: string, targetCount?: number | null } };

export type UpdateHabitMutationVariables = Types.Exact<{
  name?: Types.InputMaybe<Types.Scalars['String']>;
  tags?: Types.InputMaybe<Array<Types.Scalars['String']> | Types.Scalars['String']>;
  currentCount?: Types.InputMaybe<Types.Scalars['Float']>;
  targetCount?: Types.InputMaybe<Types.Scalars['Float']>;
  updateHabitId: Types.Scalars['String'];
}>;


export type UpdateHabitMutation = { __typename?: 'Mutation', updateHabit: { __typename?: 'Habit', name: string, tags?: Array<string> | null, currentCount?: number | null, targetCount?: number | null } };

export type DeleteHabitMutationVariables = Types.Exact<{
  deleteHabitId: Types.Scalars['String'];
}>;


export type DeleteHabitMutation = { __typename?: 'Mutation', deleteHabit: { __typename?: 'DeleteHabitReturnType', id: string } };


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
export const CreateEventDocument = gql`
    mutation CreateEvent($name: String!, $dueDate: DateTime!, $tags: [String!]!) {
  createEvent(name: $name, dueDate: $dueDate, tags: $tags) {
    id
    name
    description
    dueDate
    tags
    userId
  }
}
    `;
export type CreateEventMutationFn = Apollo.MutationFunction<CreateEventMutation, CreateEventMutationVariables>;

/**
 * __useCreateEventMutation__
 *
 * To run a mutation, you first call `useCreateEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createEventMutation, { data, loading, error }] = useCreateEventMutation({
 *   variables: {
 *      name: // value for 'name'
 *      dueDate: // value for 'dueDate'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useCreateEventMutation(baseOptions?: Apollo.MutationHookOptions<CreateEventMutation, CreateEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateEventMutation, CreateEventMutationVariables>(CreateEventDocument, options);
      }
export type CreateEventMutationHookResult = ReturnType<typeof useCreateEventMutation>;
export type CreateEventMutationResult = Apollo.MutationResult<CreateEventMutation>;
export type CreateEventMutationOptions = Apollo.BaseMutationOptions<CreateEventMutation, CreateEventMutationVariables>;
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
export const DeleteEventDocument = gql`
    mutation DeleteEvent($deleteEventId: String!) {
  deleteEvent(id: $deleteEventId) {
    id
  }
}
    `;
export type DeleteEventMutationFn = Apollo.MutationFunction<DeleteEventMutation, DeleteEventMutationVariables>;

/**
 * __useDeleteEventMutation__
 *
 * To run a mutation, you first call `useDeleteEventMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteEventMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteEventMutation, { data, loading, error }] = useDeleteEventMutation({
 *   variables: {
 *      deleteEventId: // value for 'deleteEventId'
 *   },
 * });
 */
export function useDeleteEventMutation(baseOptions?: Apollo.MutationHookOptions<DeleteEventMutation, DeleteEventMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteEventMutation, DeleteEventMutationVariables>(DeleteEventDocument, options);
      }
export type DeleteEventMutationHookResult = ReturnType<typeof useDeleteEventMutation>;
export type DeleteEventMutationResult = Apollo.MutationResult<DeleteEventMutation>;
export type DeleteEventMutationOptions = Apollo.BaseMutationOptions<DeleteEventMutation, DeleteEventMutationVariables>;
export const TasksDocument = gql`
    query Tasks {
  me {
    tasks {
      id
      name
      dueDate
      tags
      userId
      description
      isCompleted
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
export const CreateTaskDocument = gql`
    mutation CreateTask($name: String!, $dueDate: DateTime!, $tags: [String!]!, $description: String!) {
  createTask(
    name: $name
    dueDate: $dueDate
    tags: $tags
    description: $description
  ) {
    name
    id
    dueDate
    isCompleted
    tags
    userId
  }
}
    `;
export type CreateTaskMutationFn = Apollo.MutationFunction<CreateTaskMutation, CreateTaskMutationVariables>;

/**
 * __useCreateTaskMutation__
 *
 * To run a mutation, you first call `useCreateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createTaskMutation, { data, loading, error }] = useCreateTaskMutation({
 *   variables: {
 *      name: // value for 'name'
 *      dueDate: // value for 'dueDate'
 *      tags: // value for 'tags'
 *      description: // value for 'description'
 *   },
 * });
 */
export function useCreateTaskMutation(baseOptions?: Apollo.MutationHookOptions<CreateTaskMutation, CreateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateTaskMutation, CreateTaskMutationVariables>(CreateTaskDocument, options);
      }
export type CreateTaskMutationHookResult = ReturnType<typeof useCreateTaskMutation>;
export type CreateTaskMutationResult = Apollo.MutationResult<CreateTaskMutation>;
export type CreateTaskMutationOptions = Apollo.BaseMutationOptions<CreateTaskMutation, CreateTaskMutationVariables>;
export const UpdateTaskDocument = gql`
    mutation UpdateTask($updateTaskId: String!, $name: String, $dueDate: DateTime, $isCompleted: Boolean, $tags: [String!]) {
  updateTask(
    id: $updateTaskId
    name: $name
    dueDate: $dueDate
    isCompleted: $isCompleted
    tags: $tags
  ) {
    id
    name
    dueDate
    isCompleted
    tags
    userId
  }
}
    `;
export type UpdateTaskMutationFn = Apollo.MutationFunction<UpdateTaskMutation, UpdateTaskMutationVariables>;

/**
 * __useUpdateTaskMutation__
 *
 * To run a mutation, you first call `useUpdateTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useUpdateTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [updateTaskMutation, { data, loading, error }] = useUpdateTaskMutation({
 *   variables: {
 *      updateTaskId: // value for 'updateTaskId'
 *      name: // value for 'name'
 *      dueDate: // value for 'dueDate'
 *      isCompleted: // value for 'isCompleted'
 *      tags: // value for 'tags'
 *   },
 * });
 */
export function useUpdateTaskMutation(baseOptions?: Apollo.MutationHookOptions<UpdateTaskMutation, UpdateTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<UpdateTaskMutation, UpdateTaskMutationVariables>(UpdateTaskDocument, options);
      }
export type UpdateTaskMutationHookResult = ReturnType<typeof useUpdateTaskMutation>;
export type UpdateTaskMutationResult = Apollo.MutationResult<UpdateTaskMutation>;
export type UpdateTaskMutationOptions = Apollo.BaseMutationOptions<UpdateTaskMutation, UpdateTaskMutationVariables>;
export const DeleteTaskDocument = gql`
    mutation DeleteTask($deleteTaskId: String!) {
  deleteTask(id: $deleteTaskId) {
    id
  }
}
    `;
export type DeleteTaskMutationFn = Apollo.MutationFunction<DeleteTaskMutation, DeleteTaskMutationVariables>;

/**
 * __useDeleteTaskMutation__
 *
 * To run a mutation, you first call `useDeleteTaskMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteTaskMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteTaskMutation, { data, loading, error }] = useDeleteTaskMutation({
 *   variables: {
 *      deleteTaskId: // value for 'deleteTaskId'
 *   },
 * });
 */
export function useDeleteTaskMutation(baseOptions?: Apollo.MutationHookOptions<DeleteTaskMutation, DeleteTaskMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteTaskMutation, DeleteTaskMutationVariables>(DeleteTaskDocument, options);
      }
export type DeleteTaskMutationHookResult = ReturnType<typeof useDeleteTaskMutation>;
export type DeleteTaskMutationResult = Apollo.MutationResult<DeleteTaskMutation>;
export type DeleteTaskMutationOptions = Apollo.BaseMutationOptions<DeleteTaskMutation, DeleteTaskMutationVariables>;
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
export const CreateHabitDocument = gql`
    mutation CreateHabit($name: String!, $tags: [String!]!, $targetCount: Float, $currentCount: Float) {
  createHabit(
    name: $name
    tags: $tags
    targetCount: $targetCount
    currentCount: $currentCount
  ) {
    id
    name
    tags
    currentCount
    userId
    targetCount
  }
}
    `;
export type CreateHabitMutationFn = Apollo.MutationFunction<CreateHabitMutation, CreateHabitMutationVariables>;

/**
 * __useCreateHabitMutation__
 *
 * To run a mutation, you first call `useCreateHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCreateHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [createHabitMutation, { data, loading, error }] = useCreateHabitMutation({
 *   variables: {
 *      name: // value for 'name'
 *      tags: // value for 'tags'
 *      targetCount: // value for 'targetCount'
 *      currentCount: // value for 'currentCount'
 *   },
 * });
 */
export function useCreateHabitMutation(baseOptions?: Apollo.MutationHookOptions<CreateHabitMutation, CreateHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CreateHabitMutation, CreateHabitMutationVariables>(CreateHabitDocument, options);
      }
export type CreateHabitMutationHookResult = ReturnType<typeof useCreateHabitMutation>;
export type CreateHabitMutationResult = Apollo.MutationResult<CreateHabitMutation>;
export type CreateHabitMutationOptions = Apollo.BaseMutationOptions<CreateHabitMutation, CreateHabitMutationVariables>;
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
export const DeleteHabitDocument = gql`
    mutation DeleteHabit($deleteHabitId: String!) {
  deleteHabit(id: $deleteHabitId) {
    id
  }
}
    `;
export type DeleteHabitMutationFn = Apollo.MutationFunction<DeleteHabitMutation, DeleteHabitMutationVariables>;

/**
 * __useDeleteHabitMutation__
 *
 * To run a mutation, you first call `useDeleteHabitMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useDeleteHabitMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [deleteHabitMutation, { data, loading, error }] = useDeleteHabitMutation({
 *   variables: {
 *      deleteHabitId: // value for 'deleteHabitId'
 *   },
 * });
 */
export function useDeleteHabitMutation(baseOptions?: Apollo.MutationHookOptions<DeleteHabitMutation, DeleteHabitMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<DeleteHabitMutation, DeleteHabitMutationVariables>(DeleteHabitDocument, options);
      }
export type DeleteHabitMutationHookResult = ReturnType<typeof useDeleteHabitMutation>;
export type DeleteHabitMutationResult = Apollo.MutationResult<DeleteHabitMutation>;
export type DeleteHabitMutationOptions = Apollo.BaseMutationOptions<DeleteHabitMutation, DeleteHabitMutationVariables>;