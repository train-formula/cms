import React, { useState } from 'react'
import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'

import { Calendar } from '../../Overview/Calendar'

const Container = styled.div`
  display: grid;
  grid-template-columns: min-content 1fr;
`
const StyledPaper = styled(Paper)`
  height: 100vh;
  border-radius: 0;
`

export const WorkoutForm: React.FC = () => {
  // get program workouts
  const workouts = Array.from({ length: 53 }, (_, i) => ({
    id: i + 1,
    program: i % 2 === 0 ? true : false,
    order: i + 1,
    blocks: [
      {
        title: 'Warmup',
        exercises: [
          {
            id: i,
            title: 'Air Squats',
          },
          {
            id: i + 1,
            title: 'Jumping Jacks',
            description:
              'A physical exercise performed by jumping to a position with the legs spread wide and the hands touching overhead',
          },
        ],
      },
      {
        title: 'Strength',
        exercises: [
          {
            id: i,
            title: 'KB Front Rack Lunges',
          },
        ],
      },
      {
        title: 'Metcon',
        exercises: [
          {
            id: i,
            title: 'Air Squats',
          },
          {
            id: i + 1,
            title: 'DB Step Ups',
          },
          {
            id: i + 2,
            title: 'DB Hang Clean + Press',
          },
          {
            id: i + 3,
            title: 'Strict Pull Ups',
            description: 'can substitute with ring rows',
          },
        ],
      },
    ],
  }))
  // organize workouts into weeks
  function convertToWeeks(workouts: { id: number; program: boolean }[]) {
    let counter = 0
    let weeks = []
    while (counter < workouts.length) {
      weeks.push({
        id: counter + 1,
        order: Math.floor(counter / 7) + 1,
        workouts: workouts.slice(counter, counter + 7),
      })
      counter += 7
    }
    return weeks
  }
  const weeks = convertToWeeks(workouts)
  // select first week
  const [selectedWeek, setSelectedWeek] = useState<any>(weeks[0])
  const selectWeek = (weekId: number) => () => {
    const week = weeks.find(({ id }) => id === weekId)
    setSelectedWeek(week)
  }
  // pass selected week to macro calendar and week view

  return (
    <Container>
      <StyledPaper>
        <Calendar
          programLength={weeks.length}
          weeks={weeks}
          selectedWeek={selectedWeek}
          selectWeek={selectWeek}
          large={true}
        />
      </StyledPaper>
      <div>WorkoutForm</div>
    </Container>
  )
}
