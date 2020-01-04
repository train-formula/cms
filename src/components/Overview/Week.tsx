import React, { useState } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Divider from '@material-ui/core/Divider'
import { MdEdit, MdContentCopy, MdRepeat, MdDelete } from 'react-icons/md'

import { Workout } from './Workout'
import { useModal } from '../Modal/context'
import { useDialog } from '../Dialog/context'
import { useSnackbar } from '../Snackbar/context'

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
  .MuiListItem-root {
    && {
      margin-right: 1rem;
      border: 1px solid red;
    }
  }
`
const Schedule = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
  border: 1px solid #0000001f;
  background-color: #0000001f;
  grid-gap: 1px;
  .day {
    padding: 1rem 0.5rem 0;
    background-color: white;
    position: relative;
    .button {
      text-align: left;
    }
    .menu-options {
      position: absolute;
      top: 0;
      left: 0;
      border: 1px solid red;
    }
  }
`
const Labels = styled.div`
  display: grid;
  .labels {
    display: grid;
    &-name,
    &-count {
      display: grid;
      grid-template-columns: repeat(7, 1fr);
    }
  }
  .label-text {
    font-size: 1.2rem;
    font-weight: 300;
  }
  .label {
    font-size: 1.8rem;
    font-weight: 300;
  }
`
const MdEditIcon = styled(MdEdit)`
  margin-right: 1rem;
`
const MdContentCopyIcon = styled(MdContentCopy)`
  margin-right: 1rem;
`
const MdRepeatIcon = styled(MdRepeat)`
  margin-right: 1rem;
`
const MdDeleteIcon = styled(MdDelete)`
  margin-right: 1rem;
`

type Props = {
  selectedWeek: any
}

export const Week: React.FC<Props> = ({ selectedWeek }) => {
  const dayLabels = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']

  const [selectedWorkout, setSelectedWorkout] = useState(0)

  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null)

  const handleClick = (id: number) => (
    event: React.MouseEvent<HTMLButtonElement>
  ) => {
    setSelectedWorkout(id)
    setAnchorEl(event.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  const { openModal } = useModal()
  const { openDialog } = useDialog()
  const { openSnackbar } = useSnackbar()

  const onEditClick = () => {
    setAnchorEl(null)
    openModal({ type: 'workoutForm' })
  }
  const onCopyClick = () => {
    setAnchorEl(null)
    openSnackbar({
      payload: { message: `Workout Day ${selectedWorkout} copied` },
    })
  }
  const onRepeatClick = () => {
    setAnchorEl(null)
    openDialog({
      type: 'repeatForm',
      payload: { title: `Repeat Day ${selectedWorkout} Workout` },
    })
  }
  const onDeleteClick = () => {
    setAnchorEl(null)
    openDialog({
      type: 'deleteForm',
      payload: {
        title: `Delete ${selectedWorkout} Workout?`,
        action: () =>
          openSnackbar({
            payload: { message: `Workout Day ${selectedWorkout} deleted` },
          }),
      },
    })
  }

  return (
    <Container>
      <Labels>
        <div className="labels">
          <div className="labels-name">
            {dayLabels.map(day => (
              <Typography
                variant="overline"
                align="center"
                className="label-text"
              >
                {day}
              </Typography>
            ))}
          </div>
          <div className="labels-count">
            {selectedWeek.workouts.map((workout: any) => (
              <Button size="small" disableRipple={true}>
                <Typography variant="overline" align="center" className="label">
                  {workout.order}
                </Typography>
              </Button>
            ))}
          </div>
        </div>
      </Labels>
      <Schedule>
        {selectedWeek.workouts.map((workout: any) => (
          <div key={workout.id} className="day">
            <Button
              className="button"
              aria-controls="workout-menu"
              aria-haspopup="true"
              onClick={handleClick(workout.id)}
              disableRipple={true}
            >
              <Workout workout={workout} />
            </Button>
          </div>
        ))}
      </Schedule>
      <Menu
        id="workout-menu"
        className="menu-options"
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem onClick={onEditClick}>
          <MdEditIcon />
          Edit
        </MenuItem>
        <MenuItem onClick={onCopyClick}>
          <MdContentCopyIcon />
          Copy
        </MenuItem>
        <MenuItem onClick={onRepeatClick}>
          <MdRepeatIcon />
          Repeat
        </MenuItem>
        <Divider />
        <MenuItem onClick={onDeleteClick}>
          <MdDeleteIcon />
          Delete
        </MenuItem>
      </Menu>
    </Container>
  )
}
