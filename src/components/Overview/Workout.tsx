import React from 'react'
import styled from 'styled-components'
import { Typography } from '@material-ui/core'

const Container = styled.div`
  .day-title {
    font-weight: 700;
  }
  .category {
    color: #909090;
  }
  .workout-title {
    font-weight: 700;
  }
`

type Props = {
  workout: any
  showDayTitle?: boolean
}

export const Workout: React.FC<Props> = ({ workout, showDayTitle }) => {
  return (
    <Container>
      {showDayTitle && (
        <Typography variant="subtitle1" className="day-title">
          Day {workout.order}
        </Typography>
      )}
      {workout.blocks.map((block: any) => (
        <div key={block.id}>
          <Typography variant="overline" className="category">
            {block.title}
          </Typography>
          {block.exercises.map((exercise: any) => (
            <div key={exercise.id} className="exercise">
              <Typography variant="body2" className="workout-title">
                {exercise.title}
              </Typography>
            </div>
          ))}
        </div>
      ))}
    </Container>
  )
}
