import React from 'react'
import Select, { components } from 'react-select'
import styled from 'styled-components'
import Divider from '@material-ui/core/Divider'
import Checkbox from '@material-ui/core/Checkbox'

// import { useModal } from '../Modal/context'

const options = [
  {
    value: 'Air Squat',
    label: 'Air Squat',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Back Extensions',
    label: 'Back Extensions',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Box Jump',
    label: 'Box Jump',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Burpee',
    label: 'Burpee',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Handstand Push-Up',
    label: 'Handstand Push-Up',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Jump Rope',
    label: 'Jump Rope',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Knees-to-Elbows',
    label: 'Knees-to-Elbows',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Lunge',
    label: 'Lunge',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Muscle-Up',
    label: 'Muscle-Up',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Ring Dip',
    label: 'Ring Dip',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Pull-Up',
    label: 'Pull-Up',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Push-Up',
    label: 'Push-Up',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Sit-Up',
    label: 'Sit-Up',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
  {
    value: 'Rope-Climb',
    label: 'Rope-Climb',
    tags: [
      'accessory lifts',
      'agility',
      'ambulation',
      'assessment',
      'band',
      'barbell',
      'bodyweight',
      'unilateral',
      'upper',
      'plyometrics',
      'mobility',
    ],
  },
]

const CreateExerciseButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
`
const FilterMenu = styled(components.Menu)`
  transform: translateX(102%);
`
const selectStyles = {
  control: base => ({
    ...base,
    border: 'none',
    fontWeight: '700',
    fontFamily: 'Roboto, Helvetica, Arial, sans-serif',
    backgroundColor: '#F0F2F2',
    '.react-select__single-value': {
      lineHeight: '1.2',
    },
  }),
  menuList: base => ({
    ...base,
    height: '30rem',
    minHeight: '30rem',
  }),
}

//////////////////////////////
const FilterLabel = styled.div`
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  padding: 0.5rem 0;
  font-size: 1rem;
  font-weight: 700;
`
function FilterOption(props) {
  const test = data => {
    // console.log(data)
  }

  return (
    <div>
      <Checkbox
        checked={false}
        onChange={test(`${props.tag}`)}
        value={props.tag}
      />
      {props.tag}
    </div>
  )
}
function ExerciseFilters(props) {
  function handleClick() {
    console.log('click')
  }
  const tags = props.options.reduce((acc, cur) => {
    cur.tags.forEach(tag => acc.add(tag))
    return acc
  }, new Set())

  return (
    <FilterMenu {...props}>
      <FilterLabel>5 filters applied</FilterLabel>
      <Divider />
      <components.MenuList {...props}>
        {Array.from(tags).map(tag => (
          <FilterOption {...props} tag={tag}>
            {tag}
          </FilterOption>
        ))}
      </components.MenuList>
      <Divider />
      <CreateExerciseButton onClick={handleClick}>
        clear filters
      </CreateExerciseButton>
    </FilterMenu>
  )
}
//////////////////////////////

//////////////////////////////
function ExerciseList(props) {
  // const { openModal } = useModal()

  // function openDetails() {
  //   console.log('click')
  //   openModal('exercise form data goes here', 'exerciseForm')
  // }

  return (
    <components.Menu {...props}>
      <FilterLabel>45 exercises shown</FilterLabel>
      <Divider />
      {props.children}
      <Divider />
      <CreateExerciseButton>
        {/* <CreateExerciseButton onClick={openDetails}> */}
        create exercise
      </CreateExerciseButton>
      {/* <Modal open={open} handleClose={handleClose}></Modal> */}
    </components.Menu>
  )
}
//////////////////////////////
function CustomMenu(props) {
  return (
    <>
      <ExerciseList {...props} />
      <ExerciseFilters {...props} />
    </>
  )
}

export default function SelectExercise() {
  function handleChange(newValue, actionMeta) {
    // save exercise here
    // snack
  }
  return (
    <Select
      onChange={handleChange}
      options={options}
      classNamePrefix="react-select"
      placeholder="Select an Exercise"
      styles={selectStyles}
      components={{ Menu: CustomMenu }}
    />
  )
}
