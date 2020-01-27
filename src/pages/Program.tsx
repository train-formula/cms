import React, { useState } from 'react'
import styled from 'styled-components'
import { useParams } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'
import Divider from '@material-ui/core/Divider'
import IconButton from '@material-ui/core/IconButton'
import { FiChevronLeft, FiChevronRight } from 'react-icons/fi'
import { MdSettings } from 'react-icons/md'
import { useQuery } from '@apollo/react-hooks'
import gql from 'graphql-tag'

import { Calendar } from '../components/Overview/Calendar'
import { Week } from '../components/Overview/Week'

const GET_PROGRAMS = gql`
  query getPrograms($id: ID!) {
    workoutProgram(id: $id) {
      name
      numberOfDays
    }
  }
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`
const Content = styled.div`
  height: 100%;
  display: grid;
  margin-top: 2rem;
  grid-template-columns: min-content 1fr;
`
const Header = styled.div`
  display: grid;
  grid-template-columns: auto 1fr 1fr;
  align-items: center;
  padding: 2rem;
  letter-spacing: 0.15rem;
  .MuiTypography-root {
    font-weight: 300;
  }
  .week-name {
    font-size: 2.4rem;
  }
  .controls {
    display: flex;
    align-items: center;
    margin-left: 4rem;
  }
  .settings {
    display: flex;
    justify-self: flex-end;
  }
`

export const Program: React.FC = () => {
  const { id } = useParams()

  const { data } = useQuery(GET_PROGRAMS, {
    variables: { id },
  })

  // console.log('data:', data)

  // const [weeks, setWeeks] = useState(0)
  // useEffect(() => {

  // }, [data])

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
      <Header>
        <Typography variant="h4">{data && data.workoutProgram.name}</Typography>
        <div className="controls">
          <Typography variant="h4" className="week-name">
            Week {selectedWeek.order}
          </Typography>
          <IconButton>
            <FiChevronLeft className="control"></FiChevronLeft>
          </IconButton>
          <IconButton>
            <FiChevronRight className="control"></FiChevronRight>
          </IconButton>
        </div>
        <IconButton className="settings">
          <MdSettings />
        </IconButton>
      </Header>
      <Divider />
      <Content>
        <Calendar
          programLength={weeks.length}
          weeks={weeks}
          selectedWeek={selectedWeek}
          selectWeek={selectWeek}
        />
        <Week selectedWeek={selectedWeek} />
      </Content>
    </Container>
  )
}
