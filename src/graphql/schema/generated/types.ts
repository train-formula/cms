export type Maybe<T> = T | null
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string
  String: string
  Boolean: boolean
  Int: number
  Float: number
  Time: any
}

export type AttachUnitData = {
  numeral?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  unitID: Scalars['ID']
}

export type BlockExercise = {
  __typename?: 'BlockExercise'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  blockID: Scalars['ID']
  exerciseID: Scalars['ID']
  prescriptionID: Scalars['ID']
  order: Scalars['Int']
  exercise?: Maybe<Exercise>
  prescription?: Maybe<Prescription>
}

export type CreateBlockExercise = {
  exerciseID: Scalars['ID']
  prescriptionID: Scalars['ID']
}

export type CreateExercise = {
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  videoURL?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Scalars['ID']>>
}

export type CreatePrescription = {
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  prescriptionCategory: Scalars['String']
  durationSeconds?: Maybe<Scalars['Int']>
  sets?: Maybe<Array<CreatePrescriptionSetData>>
  tags?: Maybe<Array<Scalars['ID']>>
}

export type CreatePrescriptionSet = {
  prescriptionID: Scalars['ID']
  data: CreatePrescriptionSetData
}

export type CreatePrescriptionSetData = {
  setNumber: Scalars['Int']
  primaryParameter: AttachUnitData
  secondaryParameter?: Maybe<AttachUnitData>
}

export type CreateTag = {
  tag: Scalars['String']
  trainerOrganizationID: Scalars['ID']
}

export type CreateWorkout = {
  workoutProgramID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  daysFromStart: Scalars['Int']
  tags?: Maybe<Array<Scalars['ID']>>
}

export type CreateWorkoutBlock = {
  workoutCategoryID: Scalars['ID']
  categoryOrder: Scalars['Int']
  round?: Maybe<AttachUnitData>
  roundRestDuration?: Maybe<Scalars['Int']>
  numberOfRounds?: Maybe<Scalars['Int']>
  durationSeconds?: Maybe<Scalars['Int']>
}

export type CreateWorkoutCategory = {
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  tags?: Maybe<Array<Scalars['ID']>>
}

export type CreateWorkoutProgram = {
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  exactStartDate?: Maybe<Scalars['Time']>
  startsWhenCustomerStarts: Scalars['Boolean']
  numberOfDays?: Maybe<Scalars['Int']>
  tags?: Maybe<Array<Scalars['ID']>>
}

export type EditExercise = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  videoURL?: Maybe<NullableStringEditor>
}

export type EditPrescription = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  prescriptionCategory?: Maybe<Scalars['String']>
  durationSeconds?: Maybe<NullableIntEditor>
}

export type EditWorkout = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
  daysFromStart?: Maybe<Scalars['Int']>
}

export type EditWorkoutBlock = {
  id: Scalars['ID']
  categoryOrder?: Maybe<Scalars['Int']>
  round?: Maybe<NullableAttachUnitData>
  roundRestDuration?: Maybe<NullableIntEditor>
  numberOfRounds?: Maybe<NullableIntEditor>
  durationSeconds?: Maybe<NullableIntEditor>
}

export type EditWorkoutCategory = {
  id: Scalars['ID']
  name?: Maybe<Scalars['String']>
  description?: Maybe<Scalars['String']>
}

export type Exercise = {
  __typename?: 'Exercise'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  videoURL?: Maybe<Scalars['String']>
  tags?: Maybe<Array<Tag>>
}

export type ExerciseConnection = {
  __typename?: 'ExerciseConnection'
  totalCount: Scalars['Int']
  edges: Array<ExerciseEdge>
  pageInfo: PageInfo
}

export type ExerciseEdge = {
  __typename?: 'ExerciseEdge'
  cursor: Scalars['String']
  node: Exercise
}

export type ExerciseSearchRequest = {
  trainerOrganizationID: Scalars['ID']
  tagUUIDs?: Maybe<Array<Scalars['ID']>>
}

export type ExerciseSearchResults = {
  __typename?: 'ExerciseSearchResults'
  tag_facet?: Maybe<TagFacet>
  results: ExerciseConnection
}

export type Mutation = {
  __typename?: 'Mutation'
  health: Scalars['String']
  createExercise?: Maybe<Exercise>
  editExercise?: Maybe<Exercise>
  deleteExercise?: Maybe<Scalars['ID']>
  createPrescription?: Maybe<Prescription>
  editPrescription?: Maybe<Prescription>
  deletePrescription?: Maybe<Scalars['ID']>
  createPrescriptionSet?: Maybe<PrescriptionSet>
  deletePrescriptionSet?: Maybe<Scalars['ID']>
  createTag?: Maybe<Tag>
  createWorkout?: Maybe<Workout>
  editWorkout?: Maybe<Workout>
  deleteWorkout?: Maybe<Scalars['ID']>
  setWorkoutWorkoutCategories?: Maybe<Workout>
  createWorkoutBlock?: Maybe<WorkoutBlock>
  editWorkoutBlock?: Maybe<WorkoutBlock>
  deleteWorkoutBlock?: Maybe<Scalars['ID']>
  setWorkoutBlockExercises?: Maybe<WorkoutBlock>
  createWorkoutCategory?: Maybe<WorkoutCategory>
  editWorkoutCategory?: Maybe<WorkoutCategory>
  createWorkoutProgram?: Maybe<WorkoutProgram>
}

export type MutationCreateExerciseArgs = {
  request: CreateExercise
}

export type MutationEditExerciseArgs = {
  request: EditExercise
}

export type MutationDeleteExerciseArgs = {
  request: Scalars['ID']
}

export type MutationCreatePrescriptionArgs = {
  request: CreatePrescription
}

export type MutationEditPrescriptionArgs = {
  request: EditPrescription
}

export type MutationDeletePrescriptionArgs = {
  request: Scalars['ID']
}

export type MutationCreatePrescriptionSetArgs = {
  request: CreatePrescriptionSet
}

export type MutationDeletePrescriptionSetArgs = {
  request: Scalars['ID']
}

export type MutationCreateTagArgs = {
  request: CreateTag
}

export type MutationCreateWorkoutArgs = {
  request: CreateWorkout
}

export type MutationEditWorkoutArgs = {
  request: EditWorkout
}

export type MutationDeleteWorkoutArgs = {
  request: Scalars['ID']
}

export type MutationSetWorkoutWorkoutCategoriesArgs = {
  request: SetWorkoutWorkoutCategories
}

export type MutationCreateWorkoutBlockArgs = {
  request: CreateWorkoutBlock
}

export type MutationEditWorkoutBlockArgs = {
  request: EditWorkoutBlock
}

export type MutationDeleteWorkoutBlockArgs = {
  request: Scalars['ID']
}

export type MutationSetWorkoutBlockExercisesArgs = {
  request: SetWorkoutBlockExercises
}

export type MutationCreateWorkoutCategoryArgs = {
  request: CreateWorkoutCategory
}

export type MutationEditWorkoutCategoryArgs = {
  request: EditWorkoutCategory
}

export type MutationCreateWorkoutProgramArgs = {
  request: CreateWorkoutProgram
}

export type NullableAttachUnitData = {
  value?: Maybe<AttachUnitData>
}

export type NullableIdEditor = {
  value?: Maybe<Scalars['ID']>
}

export type NullableIntEditor = {
  value?: Maybe<Scalars['Int']>
}

export type NullableStringEditor = {
  value?: Maybe<Scalars['String']>
}

export type Organization = {
  __typename?: 'Organization'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
}

export type PageInfo = {
  __typename?: 'PageInfo'
  startCursor: Scalars['String']
  endCursor: Scalars['String']
  hasNextPage: Scalars['Boolean']
}

export type Prescription = {
  __typename?: 'Prescription'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  prescriptionCategory: Scalars['String']
  durationSeconds?: Maybe<Scalars['Int']>
  sets?: Maybe<Array<PrescriptionSet>>
  tags?: Maybe<Array<Tag>>
}

export type PrescriptionConnection = {
  __typename?: 'PrescriptionConnection'
  totalCount: Scalars['Int']
  edges: Array<PrescriptionEdge>
  pageInfo: PageInfo
}

export type PrescriptionEdge = {
  __typename?: 'PrescriptionEdge'
  cursor: Scalars['String']
  node: Prescription
}

export type PrescriptionSearchRequest = {
  trainerOrganizationID: Scalars['ID']
  tagUUIDs?: Maybe<Array<Scalars['ID']>>
}

export type PrescriptionSearchResults = {
  __typename?: 'PrescriptionSearchResults'
  tag_facet?: Maybe<TagFacet>
  results: PrescriptionConnection
}

export type PrescriptionSet = {
  __typename?: 'PrescriptionSet'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  prescriptionID: Scalars['ID']
  setNumber: Scalars['Int']
  primaryParameter: UnitData
  secondaryParameter?: Maybe<UnitData>
  prescription?: Maybe<Prescription>
}

export type ProgramLevel = 'BEGINNER' | 'INTERMEDIATE' | 'ADVANCED'

export type Query = {
  __typename?: 'Query'
  health: Scalars['String']
  exercise?: Maybe<Exercise>
  exerciseSearch?: Maybe<ExerciseSearchResults>
  organization?: Maybe<Organization>
  organizationAvailableTags?: Maybe<TagConnection>
  prescription?: Maybe<Prescription>
  prescriptionSearch?: Maybe<PrescriptionSearchResults>
  tag?: Maybe<Tag>
  tagByTag?: Maybe<Tag>
  availableUnits?: Maybe<Array<Unit>>
  workout?: Maybe<Workout>
  workoutBlock?: Maybe<WorkoutBlock>
  workoutCategory?: Maybe<WorkoutCategory>
  workoutCategorySearch?: Maybe<WorkoutCategorySearchResults>
  workoutProgram?: Maybe<WorkoutProgram>
  workoutProgramSearch?: Maybe<WorkoutProgramSearchResults>
}

export type QueryExerciseArgs = {
  id: Scalars['ID']
}

export type QueryExerciseSearchArgs = {
  request: ExerciseSearchRequest
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type QueryOrganizationArgs = {
  id: Scalars['ID']
}

export type QueryOrganizationAvailableTagsArgs = {
  id: Scalars['ID']
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type QueryPrescriptionArgs = {
  id: Scalars['ID']
}

export type QueryPrescriptionSearchArgs = {
  request: PrescriptionSearchRequest
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type QueryTagArgs = {
  id: Scalars['ID']
}

export type QueryTagByTagArgs = {
  tag: Scalars['String']
  trainerOrganizationID: Scalars['ID']
}

export type QueryWorkoutArgs = {
  id: Scalars['ID']
}

export type QueryWorkoutBlockArgs = {
  id: Scalars['ID']
}

export type QueryWorkoutCategoryArgs = {
  id: Scalars['ID']
}

export type QueryWorkoutCategorySearchArgs = {
  request: WorkoutCategorySearchRequest
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type QueryWorkoutProgramArgs = {
  id: Scalars['ID']
}

export type QueryWorkoutProgramSearchArgs = {
  request: WorkoutProgramSearchRequest
  first: Scalars['Int']
  after?: Maybe<Scalars['String']>
}

export type SetWorkoutBlockExercises = {
  workoutBlockID: Scalars['ID']
  blockExercises?: Maybe<Array<CreateBlockExercise>>
}

export type SetWorkoutWorkoutCategories = {
  workoutID: Scalars['ID']
  workoutCategoryIDs?: Maybe<Array<Scalars['ID']>>
}

export type Tag = {
  __typename?: 'Tag'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  tag: Scalars['String']
  trainerOrganizationID: Scalars['ID']
}

export type TagConnection = {
  __typename?: 'TagConnection'
  totalCount: Scalars['Int']
  edges: Array<TagEdge>
  pageInfo: PageInfo
}

export type TagEdge = {
  __typename?: 'TagEdge'
  cursor: Scalars['String']
  node: Tag
}

export type TagFacet = {
  __typename?: 'TagFacet'
  tags?: Maybe<Array<Tag>>
}

export type Unit = {
  __typename?: 'Unit'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  name: Scalars['String']
  nameMedium: Scalars['String']
  nameShort: Scalars['String']
  representsTime: Scalars['Boolean']
  representsWeight: Scalars['Boolean']
  representsCounter: Scalars['Boolean']
  representsDistance: Scalars['Boolean']
}

export type UnitData = {
  __typename?: 'UnitData'
  numeral?: Maybe<Scalars['Int']>
  text?: Maybe<Scalars['String']>
  unitID: Scalars['ID']
  unit?: Maybe<Unit>
}

export type Workout = {
  __typename?: 'Workout'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  workoutProgramID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  daysFromStart: Scalars['Int']
  categories?: Maybe<Array<WorkoutCategory>>
}

export type WorkoutBlock = {
  __typename?: 'WorkoutBlock'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  workoutCategoryID: Scalars['ID']
  categoryOrder: Scalars['Int']
  round?: Maybe<UnitData>
  roundRestDuration?: Maybe<Scalars['Int']>
  numberOfRounds?: Maybe<Scalars['Int']>
  durationSeconds?: Maybe<Scalars['Int']>
  trainerOrganization?: Maybe<Organization>
  workoutCategory?: Maybe<WorkoutCategory>
  exercises?: Maybe<Array<BlockExercise>>
}

export type WorkoutCategory = {
  __typename?: 'WorkoutCategory'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description: Scalars['String']
  tags?: Maybe<Array<Tag>>
  trainerOrganization?: Maybe<Organization>
  workoutBlocks?: Maybe<Array<WorkoutBlock>>
}

export type WorkoutCategoryConnection = {
  __typename?: 'WorkoutCategoryConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkoutCategoryEdge>
  pageInfo: PageInfo
}

export type WorkoutCategoryEdge = {
  __typename?: 'WorkoutCategoryEdge'
  cursor: Scalars['String']
  node: WorkoutCategory
}

export type WorkoutCategorySearchRequest = {
  trainerOrganizationID: Scalars['ID']
  tagUUIDs?: Maybe<Array<Scalars['ID']>>
}

export type WorkoutCategorySearchResults = {
  __typename?: 'WorkoutCategorySearchResults'
  tag_facet?: Maybe<TagFacet>
  results: WorkoutCategoryConnection
}

export type WorkoutConnection = {
  __typename?: 'WorkoutConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkoutEdge>
  pageInfo: PageInfo
}

export type WorkoutEdge = {
  __typename?: 'WorkoutEdge'
  cursor: Scalars['ID']
  node: Workout
}

export type WorkoutProgram = {
  __typename?: 'WorkoutProgram'
  id: Scalars['ID']
  createdAt: Scalars['Time']
  updatedAt: Scalars['Time']
  trainerOrganizationID: Scalars['ID']
  name: Scalars['String']
  description?: Maybe<Scalars['String']>
  exactStartDate?: Maybe<Scalars['Time']>
  startsWhenCustomerStarts: Scalars['Boolean']
  numberOfDays?: Maybe<Scalars['Int']>
  trainerOrganization?: Maybe<Organization>
  tags?: Maybe<Array<Tag>>
  workouts: WorkoutConnection
}

export type WorkoutProgramWorkoutsArgs = {
  first?: Maybe<Scalars['Int']>
  after: Scalars['ID']
}

export type WorkoutProgramConnection = {
  __typename?: 'WorkoutProgramConnection'
  totalCount: Scalars['Int']
  edges: Array<WorkoutProgramEdge>
  pageInfo: PageInfo
}

export type WorkoutProgramEdge = {
  __typename?: 'WorkoutProgramEdge'
  cursor: Scalars['String']
  node: WorkoutProgram
}

export type WorkoutProgramSearchRequest = {
  trainerOrganizationID: Scalars['ID']
  tagUUIDs?: Maybe<Array<Scalars['ID']>>
}

export type WorkoutProgramSearchResults = {
  __typename?: 'WorkoutProgramSearchResults'
  tag_facet?: Maybe<TagFacet>
  results: WorkoutProgramConnection
}

export type WorkoutProgramType = 'RELATIVE' | 'STATIC'
