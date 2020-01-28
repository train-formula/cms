import React from 'react'
import styled from 'styled-components'

import { useGetBasicCategoriesQuery } from '../graphql/queries/generated/GetBasicCategories.gql.generated'
import { flattenEdges } from '../lib/flattenEdges'

const Container = styled.div``

export const Categories: React.FC = () => {
  const { data } = useGetBasicCategoriesQuery({
    variables: {
      trainerOrganizationID: 'd498fa20-4614-4039-97c6-e14ddc81f04f',
      first: 10,
    },
  })

  if (data && data.workoutCategorySearch) {
    console.log(flattenEdges(data.workoutCategorySearch.results.edges))
  }

  return (
    <Container>
      <h1>Categories</h1>
    </Container>
  )
}
