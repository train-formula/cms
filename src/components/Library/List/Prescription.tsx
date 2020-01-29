import React, { useState } from 'react'
import styled from 'styled-components'
import Checkbox from '@material-ui/core/Checkbox'
import Typography from '@material-ui/core/Typography'
import Tooltip from '@material-ui/core/Tooltip'
import IconButton from '@material-ui/core/IconButton'
import { Paper } from '@material-ui/core'
import { MdContentCopy, MdDelete, MdSettings } from 'react-icons/md'

const RowLayout = styled(Paper)`
  position: relative;
  display: grid;
  grid-template-columns: auto 1fr 2fr 1fr;
  align-items: center;
  color: #5f6368;
  padding: 0.5rem 1rem;
  background: rgba(242, 245, 245, 0.8);
  .title {
    color: #202124;
  }
  &:hover {
    cursor: pointer;
    z-index: 1;
    // background: #fff;
    .author {
      display: none;
    }
  }
`

const StyledCheckbox = styled(Checkbox)`
  opacity: 0.25;
  ${RowLayout}:hover & {
    opacity: 1;
  }
`

const ActionsContainer = styled.div`
  display: none;
  ${RowLayout}:hover & {
    display: block;
  }
  .MuiIconButton-root {
    padding: 0.8rem;
  }
`

type ActionProps = {}
const Actions: React.FC<ActionProps> = () => {
  return (
    <ActionsContainer>
      <Tooltip title="copy">
        <IconButton>
          <MdContentCopy />
        </IconButton>
      </Tooltip>
      <Tooltip title="delete">
        <IconButton>
          <MdDelete />
        </IconButton>
      </Tooltip>
      <Tooltip title="settings">
        <IconButton>
          <MdSettings />
        </IconButton>
      </Tooltip>
    </ActionsContainer>
  )
}

type PrescriptionProps = {
  item: { [key: string]: any }
}
export const Prescription: React.FC<PrescriptionProps> = ({ item }) => {
  const [elevation, setElevation] = useState(0)
  function handleMouseEnter() {
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
        {item.name}
      </Typography>
      <Typography variant="body1">
        Prescription, Prescription, Prescription
      </Typography>
      <Typography className="author" variant="body1">
        Alexander Saldivar
      </Typography>
      <Actions />
    </RowLayout>
  )
}
