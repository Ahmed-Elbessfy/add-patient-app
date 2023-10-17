/* eslint-disable */
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type ListMetadata = {
  __typename?: 'ListMetadata';
  count?: Maybe<Scalars['Int']['output']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  createManyPatient?: Maybe<Array<Maybe<Patient>>>;
  createPatient?: Maybe<Patient>;
  removePatient?: Maybe<Patient>;
  updatePatient?: Maybe<Patient>;
};


export type MutationCreateManyPatientArgs = {
  data?: InputMaybe<Array<InputMaybe<PatientInput>>>;
};


export type MutationCreatePatientArgs = {
  age: Scalars['Int']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  key: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};


export type MutationRemovePatientArgs = {
  id: Scalars['ID']['input'];
};


export type MutationUpdatePatientArgs = {
  age?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  id: Scalars['ID']['input'];
  key?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
};

export type Patient = {
  __typename?: 'Patient';
  age: Scalars['Int']['output'];
  country: Scalars['String']['output'];
  email: Scalars['String']['output'];
  gender: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  key: Scalars['Int']['output'];
  name: Scalars['String']['output'];
  phone: Scalars['String']['output'];
};

export type PatientFilter = {
  age?: InputMaybe<Scalars['Int']['input']>;
  age_gt?: InputMaybe<Scalars['Int']['input']>;
  age_gte?: InputMaybe<Scalars['Int']['input']>;
  age_lt?: InputMaybe<Scalars['Int']['input']>;
  age_lte?: InputMaybe<Scalars['Int']['input']>;
  age_neq?: InputMaybe<Scalars['Int']['input']>;
  country?: InputMaybe<Scalars['String']['input']>;
  country_neq?: InputMaybe<Scalars['String']['input']>;
  email?: InputMaybe<Scalars['String']['input']>;
  email_neq?: InputMaybe<Scalars['String']['input']>;
  gender?: InputMaybe<Scalars['String']['input']>;
  gender_neq?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['ID']['input']>;
  id_neq?: InputMaybe<Scalars['ID']['input']>;
  ids?: InputMaybe<Array<InputMaybe<Scalars['ID']['input']>>>;
  key?: InputMaybe<Scalars['Int']['input']>;
  key_gt?: InputMaybe<Scalars['Int']['input']>;
  key_gte?: InputMaybe<Scalars['Int']['input']>;
  key_lt?: InputMaybe<Scalars['Int']['input']>;
  key_lte?: InputMaybe<Scalars['Int']['input']>;
  key_neq?: InputMaybe<Scalars['Int']['input']>;
  name?: InputMaybe<Scalars['String']['input']>;
  name_neq?: InputMaybe<Scalars['String']['input']>;
  phone?: InputMaybe<Scalars['String']['input']>;
  phone_neq?: InputMaybe<Scalars['String']['input']>;
  q?: InputMaybe<Scalars['String']['input']>;
};

export type PatientInput = {
  age: Scalars['Int']['input'];
  country: Scalars['String']['input'];
  email: Scalars['String']['input'];
  gender: Scalars['String']['input'];
  key: Scalars['Int']['input'];
  name: Scalars['String']['input'];
  phone: Scalars['String']['input'];
};

export type Query = {
  __typename?: 'Query';
  Patient?: Maybe<Patient>;
  _allPatientsMeta?: Maybe<ListMetadata>;
  allPatients?: Maybe<Array<Maybe<Patient>>>;
};


export type QueryPatientArgs = {
  id: Scalars['ID']['input'];
};


export type Query_AllPatientsMetaArgs = {
  filter?: InputMaybe<PatientFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
};


export type QueryAllPatientsArgs = {
  filter?: InputMaybe<PatientFilter>;
  page?: InputMaybe<Scalars['Int']['input']>;
  perPage?: InputMaybe<Scalars['Int']['input']>;
  sortField?: InputMaybe<Scalars['String']['input']>;
  sortOrder?: InputMaybe<Scalars['String']['input']>;
};
