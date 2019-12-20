import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import { Paper } from '@material-ui/core'

const Container = styled.div`
  display: grid;
`
const RowLayout = styled(Paper)`
  display: grid;
  grid-template-columns: auto 1fr 1fr 1fr 2fr 1fr;
  align-items: center;
  color: #5f6368;
  padding: 0.5rem 1rem;
  background: rgba(242, 245, 245, 0.8);
  &:hover {
    cursor: pointer;
    z-index: 1;
    background: #fff;
  }
  .title {
    color: #202124;
  }
`
const StyledCheckbox = styled(Checkbox)`
  opacity: 0.25;
  ${RowLayout}:hover & {
    opacity: 1;
  }
`

function Program() {
  const [elevation, setElevation] = useState(0)
  function handleMouseEnter() {
    console.log('hover')
    setElevation(elevation ? 0 : 3)
  }
  return (
    <RowLayout
      square={true}
      elevation={elevation}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseEnter}
    >
      <StyledCheckbox />
      <Typography variant="body1" className="title">
        30 Day Chest Sculpt
      </Typography>
      <Typography variant="body1">beginner</Typography>
      <Typography variant="body1">8 weeks</Typography>
      <Typography variant="body1">chest, strength</Typography>
      <Typography variant="body1">Alexander Saldivar</Typography>
    </RowLayout>
  )
}

type Props = {
  className?: string
}

export const List: React.FC<Props> = () => {
  return (
    <Container>
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <Program />
          <Divider />
        </div>
      ))}
    </Container>
  )
}
