export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
  /** A date-time string at UTC, such as 2019-12-03T09:54:33Z, compliant with the date-time format. */
  DateTime: any;
};

export type AllowedCredentials = {
  __typename?: 'AllowedCredentials';
  id: Scalars['String'];
  type: Scalars['String'];
};

export type Authenticator = {
  __typename?: 'Authenticator';
  counter: Scalars['Int'];
  createdAt: Scalars['DateTime'];
  credentialId: Scalars['String'];
  fmt: Scalars['String'];
  id: Scalars['ID'];
  publicKey: Scalars['String'];
  user: User;
  userId: Scalars['String'];
};

export type AuthenticatorChallenge = {
  __typename?: 'AuthenticatorChallenge';
  challenge: Scalars['String'];
  relyingParty: RelyingParty;
  userId: Scalars['String'];
};

export type AuthorizationToken = {
  __typename?: 'AuthorizationToken';
  token: Scalars['String'];
};

export type Challenge = {
  __typename?: 'Challenge';
  challenge: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['String'];
};

export type DeleteEventReturnType = {
  __typename?: 'DeleteEventReturnType';
  id: Scalars['String'];
};

export type DeleteHabitReturnType = {
  __typename?: 'DeleteHabitReturnType';
  id: Scalars['String'];
};

export type DeleteTaskReturnType = {
  __typename?: 'DeleteTaskReturnType';
  id: Scalars['String'];
};

export type Event = {
  __typename?: 'Event';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  dueDate: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type Habit = {
  __typename?: 'Habit';
  createdAt: Scalars['DateTime'];
  currentCount?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  name: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  targetCount?: Maybe<Scalars['Int']>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type LoginChallenge = {
  __typename?: 'LoginChallenge';
  allowedCredentials: Array<AllowedCredentials>;
  challenge: Scalars['String'];
};

export type LoginResponse = {
  authenticatorData: Scalars['String'];
  clientDataJSON: Scalars['String'];
  signature: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createEvent: Event;
  createHabit: Habit;
  createNotification: Notification;
  createTask: Task;
  deleteEvent: DeleteEventReturnType;
  deleteHabit: DeleteHabitReturnType;
  deleteNotification: Scalars['String'];
  deleteTask: DeleteTaskReturnType;
  requestLogin: LoginChallenge;
  requestRegister: AuthenticatorChallenge;
  updateEvent: Event;
  updateHabit: Habit;
  updateNotification: Notification;
  updateTask: Task;
  verifyLogin: AuthorizationToken;
  verifyRegister: AuthorizationToken;
};


export type MutationCreateEventArgs = {
  description?: InputMaybe<Scalars['String']>;
  dueDate: Scalars['DateTime'];
  name: Scalars['String'];
  tags: Array<Scalars['String']>;
};


export type MutationCreateHabitArgs = {
  currentCount?: InputMaybe<Scalars['Float']>;
  name: Scalars['String'];
  tags: Array<Scalars['String']>;
  targetCount?: InputMaybe<Scalars['Float']>;
};


export type MutationCreateNotificationArgs = {
  description?: InputMaybe<Scalars['String']>;
  name: Scalars['String'];
};


export type MutationCreateTaskArgs = {
  description: Scalars['String'];
  dueDate: Scalars['DateTime'];
  name: Scalars['String'];
  tags: Array<Scalars['String']>;
};


export type MutationDeleteEventArgs = {
  id: Scalars['String'];
};


export type MutationDeleteHabitArgs = {
  id: Scalars['String'];
};


export type MutationDeleteNotificationArgs = {
  id: Scalars['String'];
};


export type MutationDeleteTaskArgs = {
  id: Scalars['String'];
};


export type MutationRequestLoginArgs = {
  username: Scalars['String'];
};


export type MutationRequestRegisterArgs = {
  username: Scalars['String'];
};


export type MutationUpdateEventArgs = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationUpdateHabitArgs = {
  currentCount?: InputMaybe<Scalars['Float']>;
  id: Scalars['String'];
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
  targetCount?: InputMaybe<Scalars['Float']>;
};


export type MutationUpdateNotificationArgs = {
  description?: InputMaybe<Scalars['String']>;
  id: Scalars['String'];
  isVisited?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
};


export type MutationUpdateTaskArgs = {
  description?: InputMaybe<Scalars['String']>;
  dueDate?: InputMaybe<Scalars['DateTime']>;
  id: Scalars['String'];
  isCompleted?: InputMaybe<Scalars['Boolean']>;
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};


export type MutationVerifyLoginArgs = {
  id: Scalars['String'];
  response: LoginResponse;
};


export type MutationVerifyRegisterArgs = {
  id: Scalars['String'];
  rawId: Scalars['String'];
  response: RegisterResponse;
  type: Scalars['String'];
};

export type NotVisitedReturnType = {
  __typename?: 'NotVisitedReturnType';
  notifications: Array<Notification>;
};

export type Notification = {
  __typename?: 'Notification';
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVisited: Scalars['Boolean'];
  name: Scalars['String'];
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  events: Array<Event>;
  me: User;
  notVisitedNotifications: NotVisitedReturnType;
};


export type QueryEventsArgs = {
  name?: InputMaybe<Scalars['String']>;
  tags?: InputMaybe<Array<Scalars['String']>>;
};

export type RegisterResponse = {
  attestationObject: Scalars['String'];
  clientDataJSON: Scalars['String'];
};

export type RelyingParty = {
  __typename?: 'RelyingParty';
  id: Scalars['String'];
  name: Scalars['String'];
};

export type Task = {
  __typename?: 'Task';
  createdAt: Scalars['DateTime'];
  description: Scalars['String'];
  dueDate: Scalars['DateTime'];
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  name: Scalars['String'];
  tags?: Maybe<Array<Scalars['String']>>;
  updatedAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  authenticators?: Maybe<Array<Authenticator>>;
  challenge?: Maybe<Challenge>;
  createdAt: Scalars['DateTime'];
  events?: Maybe<Array<Event>>;
  habits?: Maybe<Array<Habit>>;
  id: Scalars['ID'];
  notifications?: Maybe<Array<Notification>>;
  registered: Scalars['Boolean'];
  tasks?: Maybe<Array<Task>>;
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  authenticators: Scalars['Int'];
  events: Scalars['Int'];
  habits: Scalars['Int'];
  notifications: Scalars['Int'];
  tasks: Scalars['Int'];
};
