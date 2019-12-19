import React from 'react'
import styled from 'styled-components'

import { LibraryLayout } from '../components/templates/LibraryLayout'

const Container = styled.div`
  height: 100%;
  .test {
    font-size: 1rem;
  }
`

export const Programs: React.FC = () => {
  return (
    <Container>
      <LibraryLayout>
        <h1 className="test">fuck</h1>
      </LibraryLayout>
    </Container>
  )
}
