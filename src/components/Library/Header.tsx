import React from 'react'
import styled from 'styled-components'
import Fab from '@material-ui/core/Fab'
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

export type HeaderProps = {
  ctaText: string;
  ctaOnClick: () => void;
}

export const Header: React.FC<HeaderProps> = ({ ctaText, ctaOnClick }) => {
  return (
    <Container>
      <Fab
        color="primary"
        className="zIndex1"
        variant="extended"
        aria-label="create a program"
        onClick={ctaOnClick}
      >
        <IoMdAdd className="add-icon" />
        {ctaText}
      </Fab>
      <div className="center">
        <Search />
      </div>
    </Container>
  )
}
