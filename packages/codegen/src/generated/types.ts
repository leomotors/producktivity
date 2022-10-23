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

export type AuthenticatorListRelationFilter = {
  every?: InputMaybe<AuthenticatorWhereInput>;
  none?: InputMaybe<AuthenticatorWhereInput>;
  some?: InputMaybe<AuthenticatorWhereInput>;
};

export type AuthenticatorOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type AuthenticatorWhereInput = {
  AND?: InputMaybe<Array<AuthenticatorWhereInput>>;
  NOT?: InputMaybe<Array<AuthenticatorWhereInput>>;
  OR?: InputMaybe<Array<AuthenticatorWhereInput>>;
  counter?: InputMaybe<IntFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  credentialId?: InputMaybe<StringFilter>;
  fmt?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  publicKey?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type AuthorizationToken = {
  __typename?: 'AuthorizationToken';
  token: Scalars['String'];
};

export type BoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type Case = {
  __typename?: 'Case';
  _count: CaseCount;
  createdAt: Scalars['DateTime'];
  event?: Maybe<Event>;
  filter?: Maybe<Array<Filter>>;
  habit?: Maybe<Habit>;
  id: Scalars['ID'];
  task?: Maybe<Task>;
  updateAt: Scalars['DateTime'];
  user: User;
  userId: Scalars['String'];
};

export type CaseCount = {
  __typename?: 'CaseCount';
  filter: Scalars['Int'];
};

export type CaseListRelationFilter = {
  every?: InputMaybe<CaseWhereInput>;
  none?: InputMaybe<CaseWhereInput>;
  some?: InputMaybe<CaseWhereInput>;
};

export type CaseOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type CaseRelationFilter = {
  is?: InputMaybe<CaseWhereInput>;
  isNot?: InputMaybe<CaseWhereInput>;
};

export type CaseWhereInput = {
  AND?: InputMaybe<Array<CaseWhereInput>>;
  NOT?: InputMaybe<Array<CaseWhereInput>>;
  OR?: InputMaybe<Array<CaseWhereInput>>;
  createdAt?: InputMaybe<DateTimeFilter>;
  event?: InputMaybe<EventRelationFilter>;
  filter?: InputMaybe<FilterListRelationFilter>;
  habit?: InputMaybe<HabitRelationFilter>;
  id?: InputMaybe<StringFilter>;
  task?: InputMaybe<TaskRelationFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Challenge = {
  __typename?: 'Challenge';
  challenge: Scalars['String'];
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  user: User;
  userId: Scalars['String'];
};

export type ChallengeOrderByWithRelationInput = {
  challenge?: InputMaybe<SortOrder>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  user?: InputMaybe<UserOrderByWithRelationInput>;
  userId?: InputMaybe<SortOrder>;
};

export type ChallengeRelationFilter = {
  is?: InputMaybe<ChallengeWhereInput>;
  isNot?: InputMaybe<ChallengeWhereInput>;
};

export type ChallengeWhereInput = {
  AND?: InputMaybe<Array<ChallengeWhereInput>>;
  NOT?: InputMaybe<Array<ChallengeWhereInput>>;
  OR?: InputMaybe<Array<ChallengeWhereInput>>;
  challenge?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  user?: InputMaybe<UserRelationFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type DateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type Event = {
  __typename?: 'Event';
  case: Case;
  caseId: Scalars['String'];
  description?: Maybe<Scalars['String']>;
  dueDate: Scalars['DateTime'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type EventRelationFilter = {
  is?: InputMaybe<EventWhereInput>;
  isNot?: InputMaybe<EventWhereInput>;
};

export type EventWhereInput = {
  AND?: InputMaybe<Array<EventWhereInput>>;
  NOT?: InputMaybe<Array<EventWhereInput>>;
  OR?: InputMaybe<Array<EventWhereInput>>;
  case?: InputMaybe<CaseRelationFilter>;
  caseId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringNullableFilter>;
  dueDate?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type Filter = {
  __typename?: 'Filter';
  FilterDefinition: FilterDefinition;
  case: Case;
  caseId: Scalars['String'];
  createdAt: Scalars['DateTime'];
  filterDefinitionId: Scalars['String'];
  id: Scalars['ID'];
};

export type FilterDefinition = {
  __typename?: 'FilterDefinition';
  _count: FilterDefinitionCount;
  filter?: Maybe<Array<Filter>>;
  id: Scalars['ID'];
  label: Scalars['String'];
  order: Scalars['Int'];
};

export type FilterDefinitionCount = {
  __typename?: 'FilterDefinitionCount';
  filter: Scalars['Int'];
};

export type FilterDefinitionRelationFilter = {
  is?: InputMaybe<FilterDefinitionWhereInput>;
  isNot?: InputMaybe<FilterDefinitionWhereInput>;
};

export type FilterDefinitionWhereInput = {
  AND?: InputMaybe<Array<FilterDefinitionWhereInput>>;
  NOT?: InputMaybe<Array<FilterDefinitionWhereInput>>;
  OR?: InputMaybe<Array<FilterDefinitionWhereInput>>;
  filter?: InputMaybe<FilterListRelationFilter>;
  id?: InputMaybe<StringFilter>;
  label?: InputMaybe<StringFilter>;
  order?: InputMaybe<IntFilter>;
};

export type FilterListRelationFilter = {
  every?: InputMaybe<FilterWhereInput>;
  none?: InputMaybe<FilterWhereInput>;
  some?: InputMaybe<FilterWhereInput>;
};

export type FilterWhereInput = {
  AND?: InputMaybe<Array<FilterWhereInput>>;
  FilterDefinition?: InputMaybe<FilterDefinitionRelationFilter>;
  NOT?: InputMaybe<Array<FilterWhereInput>>;
  OR?: InputMaybe<Array<FilterWhereInput>>;
  case?: InputMaybe<CaseRelationFilter>;
  caseId?: InputMaybe<StringFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  filterDefinitionId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
};

export type Habit = {
  __typename?: 'Habit';
  case: Case;
  caseId: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type HabitRelationFilter = {
  is?: InputMaybe<HabitWhereInput>;
  isNot?: InputMaybe<HabitWhereInput>;
};

export type HabitWhereInput = {
  AND?: InputMaybe<Array<HabitWhereInput>>;
  NOT?: InputMaybe<Array<HabitWhereInput>>;
  OR?: InputMaybe<Array<HabitWhereInput>>;
  case?: InputMaybe<CaseRelationFilter>;
  caseId?: InputMaybe<StringFilter>;
  id?: InputMaybe<StringFilter>;
  name?: InputMaybe<StringFilter>;
};

export type IntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
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
  requestLogin: LoginChallenge;
  requestRegister: AuthenticatorChallenge;
  verifyLogin: AuthorizationToken;
  verifyRegister: AuthorizationToken;
};


export type MutationRequestLoginArgs = {
  username: Scalars['String'];
};


export type MutationRequestRegisterArgs = {
  username: Scalars['String'];
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

export type NestedBoolFilter = {
  equals?: InputMaybe<Scalars['Boolean']>;
  not?: InputMaybe<NestedBoolFilter>;
};

export type NestedDateTimeFilter = {
  equals?: InputMaybe<Scalars['DateTime']>;
  gt?: InputMaybe<Scalars['DateTime']>;
  gte?: InputMaybe<Scalars['DateTime']>;
  in?: InputMaybe<Array<Scalars['DateTime']>>;
  lt?: InputMaybe<Scalars['DateTime']>;
  lte?: InputMaybe<Scalars['DateTime']>;
  not?: InputMaybe<NestedDateTimeFilter>;
  notIn?: InputMaybe<Array<Scalars['DateTime']>>;
};

export type NestedIntFilter = {
  equals?: InputMaybe<Scalars['Int']>;
  gt?: InputMaybe<Scalars['Int']>;
  gte?: InputMaybe<Scalars['Int']>;
  in?: InputMaybe<Array<Scalars['Int']>>;
  lt?: InputMaybe<Scalars['Int']>;
  lte?: InputMaybe<Scalars['Int']>;
  not?: InputMaybe<NestedIntFilter>;
  notIn?: InputMaybe<Array<Scalars['Int']>>;
};

export type NestedStringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NestedStringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type NotTest = {
  __typename?: 'NotTest';
  id: Scalars['String'];
};

export type NotTestOrderByWithRelationInput = {
  id?: InputMaybe<SortOrder>;
};

export enum NotTestScalarFieldEnum {
  Id = 'id'
}

export type NotTestWhereInput = {
  AND?: InputMaybe<Array<NotTestWhereInput>>;
  NOT?: InputMaybe<Array<NotTestWhereInput>>;
  OR?: InputMaybe<Array<NotTestWhereInput>>;
  id?: InputMaybe<StringFilter>;
};

export type NotTestWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
};

export type Notification = {
  __typename?: 'Notification';
  User: User;
  createdAt: Scalars['DateTime'];
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  isVisited: Scalars['Boolean'];
  name: Scalars['String'];
  updateAt: Scalars['DateTime'];
  userId: Scalars['String'];
};

export type NotificationListRelationFilter = {
  every?: InputMaybe<NotificationWhereInput>;
  none?: InputMaybe<NotificationWhereInput>;
  some?: InputMaybe<NotificationWhereInput>;
};

export type NotificationOrderByRelationAggregateInput = {
  _count?: InputMaybe<SortOrder>;
};

export type NotificationWhereInput = {
  AND?: InputMaybe<Array<NotificationWhereInput>>;
  NOT?: InputMaybe<Array<NotificationWhereInput>>;
  OR?: InputMaybe<Array<NotificationWhereInput>>;
  User?: InputMaybe<UserRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  description?: InputMaybe<StringNullableFilter>;
  id?: InputMaybe<StringFilter>;
  isVisited?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
  updateAt?: InputMaybe<DateTimeFilter>;
  userId?: InputMaybe<StringFilter>;
};

export type Query = {
  __typename?: 'Query';
  notTests: Array<NotTest>;
  user: User;
  users: Array<User>;
};


export type QueryNotTestsArgs = {
  cursor?: InputMaybe<NotTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotTestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotTestWhereInput>;
};


export type QueryUserArgs = {
  where: UserWhereUniqueInput;
};


export type QueryUsersArgs = {
  cursor?: InputMaybe<UserWhereUniqueInput>;
  distinct?: InputMaybe<Array<UserScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<UserOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<UserWhereInput>;
};

export enum QueryMode {
  Default = 'default',
  Insensitive = 'insensitive'
}

export type RegisterResponse = {
  attestationObject: Scalars['String'];
  clientDataJSON: Scalars['String'];
};

export type RelyingParty = {
  __typename?: 'RelyingParty';
  id: Scalars['String'];
  name: Scalars['String'];
};

export enum SortOrder {
  Asc = 'asc',
  Desc = 'desc'
}

export type StringFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type StringNullableFilter = {
  contains?: InputMaybe<Scalars['String']>;
  endsWith?: InputMaybe<Scalars['String']>;
  equals?: InputMaybe<Scalars['String']>;
  gt?: InputMaybe<Scalars['String']>;
  gte?: InputMaybe<Scalars['String']>;
  in?: InputMaybe<Array<Scalars['String']>>;
  lt?: InputMaybe<Scalars['String']>;
  lte?: InputMaybe<Scalars['String']>;
  mode?: InputMaybe<QueryMode>;
  not?: InputMaybe<NestedStringNullableFilter>;
  notIn?: InputMaybe<Array<Scalars['String']>>;
  startsWith?: InputMaybe<Scalars['String']>;
};

export type Task = {
  __typename?: 'Task';
  case: Case;
  caseId: Scalars['String'];
  description: Scalars['String'];
  due_date: Scalars['DateTime'];
  id: Scalars['ID'];
  isCompleted: Scalars['Boolean'];
  name: Scalars['String'];
};

export type TaskRelationFilter = {
  is?: InputMaybe<TaskWhereInput>;
  isNot?: InputMaybe<TaskWhereInput>;
};

export type TaskWhereInput = {
  AND?: InputMaybe<Array<TaskWhereInput>>;
  NOT?: InputMaybe<Array<TaskWhereInput>>;
  OR?: InputMaybe<Array<TaskWhereInput>>;
  case?: InputMaybe<CaseRelationFilter>;
  caseId?: InputMaybe<StringFilter>;
  description?: InputMaybe<StringFilter>;
  due_date?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  isCompleted?: InputMaybe<BoolFilter>;
  name?: InputMaybe<StringFilter>;
};

export type User = {
  __typename?: 'User';
  _count: UserCount;
  authenticators?: Maybe<Array<Authenticator>>;
  case?: Maybe<Array<Case>>;
  challenge?: Maybe<Challenge>;
  createdAt: Scalars['DateTime'];
  id: Scalars['ID'];
  notification?: Maybe<Array<Notification>>;
  registered: Scalars['Boolean'];
  updatedAt: Scalars['DateTime'];
  username: Scalars['String'];
};

export type UserCount = {
  __typename?: 'UserCount';
  authenticators: Scalars['Int'];
  case: Scalars['Int'];
  notification: Scalars['Int'];
};

export type UserOrderByWithRelationInput = {
  authenticators?: InputMaybe<AuthenticatorOrderByRelationAggregateInput>;
  case?: InputMaybe<CaseOrderByRelationAggregateInput>;
  challenge?: InputMaybe<ChallengeOrderByWithRelationInput>;
  createdAt?: InputMaybe<SortOrder>;
  id?: InputMaybe<SortOrder>;
  notification?: InputMaybe<NotificationOrderByRelationAggregateInput>;
  registered?: InputMaybe<SortOrder>;
  updatedAt?: InputMaybe<SortOrder>;
  username?: InputMaybe<SortOrder>;
};

export type UserRelationFilter = {
  is?: InputMaybe<UserWhereInput>;
  isNot?: InputMaybe<UserWhereInput>;
};

export enum UserScalarFieldEnum {
  CreatedAt = 'createdAt',
  Id = 'id',
  Registered = 'registered',
  UpdatedAt = 'updatedAt',
  Username = 'username'
}

export type UserWhereInput = {
  AND?: InputMaybe<Array<UserWhereInput>>;
  NOT?: InputMaybe<Array<UserWhereInput>>;
  OR?: InputMaybe<Array<UserWhereInput>>;
  authenticators?: InputMaybe<AuthenticatorListRelationFilter>;
  case?: InputMaybe<CaseListRelationFilter>;
  challenge?: InputMaybe<ChallengeRelationFilter>;
  createdAt?: InputMaybe<DateTimeFilter>;
  id?: InputMaybe<StringFilter>;
  notification?: InputMaybe<NotificationListRelationFilter>;
  registered?: InputMaybe<BoolFilter>;
  updatedAt?: InputMaybe<DateTimeFilter>;
  username?: InputMaybe<StringFilter>;
};

export type UserWhereUniqueInput = {
  id?: InputMaybe<Scalars['String']>;
  username?: InputMaybe<Scalars['String']>;
};
