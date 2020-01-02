import React from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import { IconButton } from '@material-ui/core'

import { Workout } from './Workout'

const Container = styled.div`
  padding: 0 1rem;
  display: flex;
  flex-direction: column;
`
const Schedule = styled.div`
  display: grid;
  grid-template-columns: repeat(7, 1fr);
  height: 100%;
  border: 1px solid #0000001f;
  background-color: #0000001f;
  grid-gap: 1px;
  .day {
    padding: 1rem 1rem 0;
    background-color: white;
    cursor: pointer;
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

type Props = {
  selectedWeek: any
}

export const Week: React.FC<Props> = ({ selectedWeek }) => {
  const dayLabels = ['sun', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat']
  console.log(selectedWeek)
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
              <Typography variant="overline" align="center" className="label">
                {workout.order}
              </Typography>
            ))}
          </div>
        </div>
      </Labels>
      <Schedule>
        {selectedWeek.workouts.map((workout: any) => (
          <div key={workout.id} className="day">
            <Workout workout={workout} />
          </div>
        ))}
      </Schedule>
    </Container>
  )
}
