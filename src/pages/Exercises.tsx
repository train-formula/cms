import React from 'react'
import styled from 'styled-components'

import { useGetBasicExercisesQuery } from '../graphql/queries/generated/GetBasicExercises.gql.generated'
import { flattenEdges } from '../lib/flattenEdges'
import { LibraryLayout } from '../components/templates/LibraryLayout'

const Container = styled.div``

export const Exercises: React.FC = () => {
  const { data } = useGetBasicExercisesQuery({
    variables: {
      trainerOrganizationID: 'd498fa20-4614-4039-97c6-e14ddc81f04f',
      first: 10,
    },
  })
  if (data && data.exerciseSearch) {
    console.log(flattenEdges(data.exerciseSearch.results.edges))
  }
  return (
    <Container>
      {data && data.exerciseSearch && (
        <LibraryLayout
          ctaText="create an exercise"
          filters={['title', 'tags', 'created by']}
          type="exercise"
          items={flattenEdges(data.exerciseSearch.results.edges)}
          // deleteProgram
          // copyProgram
          // count
        />
      )}
    </Container>
  )
}
