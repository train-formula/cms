import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Tooltip from '@material-ui/core/Tooltip'
import { IoMdAdd } from 'react-icons/io'

import Search from './Search'
import { useModal } from '../Modal/context'

const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  padding: 1rem;
  .left {
    display: flex;
    .title {
      color: ${p => p.theme.title};
      font-weight: 300;
      letter-spacing: 0.15rem;
    }
  }
  .right {
    display: flex;
    justify-self: flex-end;
  }
  .left,
  .right {
    align-items: center;
  }
  .MuiButton-root {
    height: 4rem;
    width: 4rem;
    padding: 0;
    border-radius: 50%;
    min-width: inherit;
    margin-left: 1rem;
    svg {
      height: 1.8rem;
      width: 1.8rem;
    }
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
      <div className="left">
        <Typography variant="h4" className="title">
          Programs
        </Typography>
        <Tooltip
          title="create a program"
          onClick={() => openModal({ type: 'exerciseForm' })}
        >
          <Button variant="outlined">
            <IoMdAdd />
          </Button>
        </Tooltip>
      </div>
      <div className="right">
        <Search />
      </div>
    </Container>
  )
}
