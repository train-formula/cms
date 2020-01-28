import React from 'react'
import styled from 'styled-components'

import { useGetBasicPrescriptionsQuery } from '../graphql/queries/generated/GetBasicPrescriptions.gql.generated'
import { flattenEdges } from '../lib/flattenEdges'

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

  return <Container>Prescriptions</Container>
}
