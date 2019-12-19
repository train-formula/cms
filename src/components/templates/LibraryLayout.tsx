import React from 'react'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'

import { Header } from '../Library/Header'
import { Actions } from '../Library/Actions'
import { Filters } from '../Library/Filters'
import { List } from '../Library/List'

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  .scroll {
    flex: 1;
    overflow: auto;
  }
`

type Props = {
  children: React.ReactNode
}

export const LibraryLayout: React.FC<Props> = ({ children }) => {
  return (
    <Container>
      <Header />
      <Divider />
      <Actions />
      <Divider />
      <Filters />
      <Divider />
      <List className="scroll" />
    </Container>
  )
}
