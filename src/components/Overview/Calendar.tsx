import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'

import { Workout } from './Workout'

type ContainerProps = {
  large?: boolean
}
const Container = styled.div<ContainerProps>`
  padding: 1rem 2rem;
  width: ${p => (p.large ? `auto` : `20rem`)};
  .header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 0.5rem;
    .title {
      font-size: 1.2rem;
      font-weight: 700;
    }
    .control {
      cursor: pointer;
    }
  }
  .workout-container {
    margin-top: 2rem;
  }
`
type WeekProps = {
  isActive: boolean
  large?: boolean
}
const Week = styled.div<WeekProps>`
  .week-header {
    font-size: 0.8rem;
    text-transform: uppercase;
    padding-left: 0.5rem;
  }
  .week {
    display: grid;
    grid-template-columns: repeat(7, 1fr);
    background-color: ${p => (p.isActive ? 'rgba(0,0,0,0.05)' : 'white')};
    transition: background-color 0.15s linear;
    .day {
      display: flex;
      justify-content: center;
      align-items: center;
      ${p =>
        p.large
          ? `font-size: 1.6rem;
        height: 4rem;
        width: 4rem;`
          : `font-size: 1.2rem;`}
      cursor: pointer;
      border-radius: 50%;
      &:hover {
        cursor: pointer;
        background-color: #282828;
        color: #ffffff;
        &::after {
          display: none;
        }
      }
    }
  }
`

type Props = {
  programLength: number
  selectedWeek: {
    id: number
  }
  selectWeek: (id: number) => () => void
  weeks: any[]
  large?: boolean
}

export const Calendar: React.FC<Props> = ({
  programLength,
  weeks,
  selectedWeek,
  selectWeek,
  large,
}) => {
  const [pagination, setPagination] = useState(0)
  const [selectedMonth, selectWeeks] = useState(
    weeks.slice(pagination, pagination + 4)
  )
  function forward() {
    setPagination(pagination + 4 <= weeks.length ? pagination + 4 : pagination)
  }
  function backward() {
    setPagination(pagination - 4 >= 0 ? pagination - 4 : 0)
  }
  useEffect(() => {
    selectWeeks(weeks.slice(pagination, pagination + 4))
  }, [pagination, weeks])

  // const [isHidden, hideArrow] = useState(false)
  // useEffect(() => {
  //   // console.log(selectedMonth)
  //   if (selectedMonth[0].week === 1) {
  //     hideArrow('left')
  //   } else if (selectedMonth.length < 4) {
  //     hideArrow('right')
  //   } else {
  //     hideArrow(false)
  //   }
  // }, [selectedMonth])

  const [selectedWorkout, setSelectedWorkout] = useState(null)

  const handleMouseEnter = (workoutId: number) => () => {
    weeks.some(week => {
      const workout = week.workouts.find(
        ({ id }: { id: number }) => id === workoutId
      )
      if (workout) {
        setSelectedWorkout(workout)
        return true
      }
      return false
    })
  }

  const handleMouseLeave = () => {
    setSelectedWorkout(null)
  }

  return (
    <Container large={large}>
      <div className="header">
        <Typography className="title" variant="overline">
          {programLength} week program
        </Typography>
        <div>
          <IconButton
            size="small"
            // disabled={isHidden === 'left'}
            onClick={backward}
          >
            <FiChevronLeft className="control"></FiChevronLeft>
          </IconButton>
          <IconButton
            size="small"
            // disabled={isHidden === 'right'}
            onClick={forward}
          >
            <FiChevronRight className="control"></FiChevronRight>
          </IconButton>
        </div>
      </div>
      {selectedMonth.map(week => (
        <Week
          key={week.id}
          large={large}
          isActive={week.id === selectedWeek.id}
          onClick={selectWeek(week.id)}
        >
          <Typography variant="caption" className="week-header">
            week {week.order}
          </Typography>
          <div className="week">
            {week.workouts.map((workout: { id: number }) => (
              <Typography
                key={workout.id}
                variant="overline"
                className="day"
                onMouseEnter={handleMouseEnter(workout.id)}
                onMouseLeave={handleMouseLeave}
              >
                {workout.id}
              </Typography>
            ))}
          </div>
        </Week>
      ))}
      {!!selectedWorkout && (
        <div className="workout-container">
          <Workout workout={selectedWorkout} showDayTitle={true} />
        </div>
      )}
    </Container>
  )
}
