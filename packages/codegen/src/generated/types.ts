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
};

export type AllowedCredentials = {
  __typename?: 'AllowedCredentials';
  id: Scalars['String'];
  type: Scalars['String'];
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

export type Query = {
  __typename?: 'Query';
  notTests: Array<NotTest>;
};


export type QueryNotTestsArgs = {
  cursor?: InputMaybe<NotTestWhereUniqueInput>;
  distinct?: InputMaybe<Array<NotTestScalarFieldEnum>>;
  orderBy?: InputMaybe<Array<NotTestOrderByWithRelationInput>>;
  skip?: InputMaybe<Scalars['Int']>;
  take?: InputMaybe<Scalars['Int']>;
  where?: InputMaybe<NotTestWhereInput>;
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
