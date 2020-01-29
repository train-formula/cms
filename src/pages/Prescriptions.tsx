import React from 'react'
import styled from 'styled-components'

import { useGetBasicPrescriptionsQuery } from '../graphql/queries/generated/GetBasicPrescriptions.gql.generated'
import { flattenEdges } from '../lib/flattenEdges'
import { LibraryLayout } from '../components/templates/LibraryLayout'

const Container = styled.div``

export const Prescriptions: React.FC = () => {
  const { data } = useGetBasicPrescriptionsQuery({
    variables: {
      trainerOrganizationID: 'd498fa20-4614-4039-97c6-e14ddc81f04f',
      first: 10,
    },
  })

  if (data && data.prescriptionSearch) {
    console.log(flattenEdges(data.prescriptionSearch.results.edges))
  }

  return (
    <Container>
      {data && data.prescriptionSearch && (
        <LibraryLayout
          ctaText="create a prescription"
          filters={[
            'title',
            'sets',
            'parameter one',
            'parameter two',
            'categories',
          ]}
          type="prescription"
          items={flattenEdges(data.prescriptionSearch.results.edges)}
          // deleteProgram
          // copyProgram
          // count
        />
      )}
    </Container>
  )
}
