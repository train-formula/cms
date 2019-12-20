import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Fab from '@material-ui/core/Fab'
import Tooltip from '@material-ui/core/Tooltip'
import { IoMdAdd } from 'react-icons/io'

import Search from './Search'
import { useModal } from '../Modal/context'

const Container = styled.div`
  display: flex;
  padding: 1rem;
  align-items: center;
  position: relative;
  .zIndex1 {
    z-index: 1;
  }
  .add-icon {
    height: 2rem;
    width: 2rem;
    margin-right: 1rem;
  }
  .center {
    position: absolute;
    width: calc(100% - 2rem);
    display: flex;
    justify-content: center;
  }
`
Container.defaultProps = {
  theme: {
    title: '#202124',
  },
}

type Props = {
  className?: string
}

export const Header: React.FC<Props> = () => {
  const { openModal } = useModal()

  return (
    <Container>
      <Fab
        color="primary"
        className="zIndex1"
        variant="extended"
        aria-label="create a program"
        onClick={() => openModal({ type: 'exerciseForm' })}
      >
        <IoMdAdd className="add-icon" />
        Create a program
      </Fab>
      <div className="center">
        <Search />
      </div>
    </Container>
  )
}
