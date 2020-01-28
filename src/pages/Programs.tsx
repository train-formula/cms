import React from 'react'
import styled from 'styled-components'

import { LibraryLayout } from '../components/templates/LibraryLayout'
import { flattenEdges } from '../lib/flattenEdges'
import { useGetDetailProgramsQuery } from '../graphql/queries/generated/GetDetailPrograms.gql.generated'

const Container = styled.div`
  height: 100%;
  .test {
    font-size: 1rem;
  }
`

export const Programs: React.FC = () => {
  const { data } = useGetDetailProgramsQuery({
    variables: {
      trainerOrganizationID: 'd498fa20-4614-4039-97c6-e14ddc81f04f',
      first: 10,
    },
  })

  return (
    <Container>
      {data && data.workoutProgramSearch && (
        <LibraryLayout
          items={flattenEdges(data.workoutProgramSearch.results.edges)}
        />
      )}
    </Container>
  )
}
