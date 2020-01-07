import React, { useState } from 'react'
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
    tags: ['accessory lifts', 'agility'],
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

const CreatePrescriptionButton = styled.div`
  display: flex;
  justify-content: center;
  padding: 1rem;
  font-weight: 600;
  text-transform: uppercase;
  font-size: 1.4rem;
  cursor: pointer;
`
const FilterMenu = styled(components.Menu)`
  transform: translateX(-102%);
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
const Option = styled.div`
  ${p => p.defaultStyles}
  cursor: pointer;
  &:hover,
  &:active {
    // background: rgba(0, 82, 204, 0.1);
    // background: #b2d4ff;
    background: rgba(178, 212, 255, 0.4);
  }
`
function FilterOption(props) {
  const defaultStyles = props.getStyles('option', props)
  console.log(defaultStyles)
  return (
    <Option {...props} defaultStyles={defaultStyles}>
      {props.prescription}
    </Option>
  )
}
function PrescriptionFilters(props) {
  // function handleClick() {
  //   console.log('click')
  // }
  // const tags = props.options.reduce((acc, cur) => {
  //   cur.tags.forEach(tag => acc.add(tag))
  //   return acc
  // }, new Set())
  // console.log(props)
  return (
    <FilterMenu {...props}>
      {/* <FilterLabel>7 filters applied</FilterLabel> */}
      {/* <Divider /> */}
      <components.MenuList {...props} isOptionDisabled={true} isDisabled={true}>
        {props.prescriptions.map(prescription => (
          // <FilterOption {...props} tag={tag}>
          // <div>{prescription}</div>
          <FilterOption {...props} prescription={prescription}>
            {prescription}
          </FilterOption>
          // </FilterOption>
        ))}
      </components.MenuList>
      {/* <Divider />
      <CreatePrescriptionButton onClick={handleClick}>
        clear filters
      </CreatePrescriptionButton> */}
    </FilterMenu>
  )
}
//////////////////////////////

//////////////////////////////
function PrescriptionOption(props) {
  function handleHover() {
    props.selectProps.setSelectedOptionValues(props.data.tags)
  }

  return (
    <div onMouseEnter={handleHover} {...props}>
      <components.Option isDisabled={true} isOptionDisabled={true} {...props} />
    </div>
  )
}
//////////////////////////////

//////////////////////////////
function PrescriptionList(props) {
  // const { openModal } = useModal()

  // function openDetails() {
  //   console.log('click')
  //   openModal('prescription form data goes here', 'prescriptionForm')
  // }

  return (
    <components.Menu {...props} isDisabled={true} isOptionDisabled={true}>
      <FilterLabel>45 prescriptions shown</FilterLabel>
      <Divider />
      {props.children}
      <Divider />
      <CreatePrescriptionButton>
        {/* <CreatePrescriptionButton onClick={openDetails}> */}
        create prescription
      </CreatePrescriptionButton>
      {/* <Modal open={open} handleClose={handleClose}></Modal> */}
    </components.Menu>
  )
}
//////////////////////////////
function CustomMenu(props) {
  // console.log('props:', props)
  return (
    <>
      <PrescriptionList {...props} />
      <PrescriptionFilters
        {...props}
        prescriptions={props.selectProps.prescriptions}
      />
    </>
  )
}

export default function SelectPrescription() {
  function handleChange(newValue, actionMeta) {
    // save prescription here
    // snack
  }
  const [prescriptions, setPrescriptions] = useState([])
  function setSelectedOptionValues(values) {
    // console.log('values:', values)
    setPrescriptions(values)
  }
  return (
    <Select
      onChange={handleChange}
      options={options}
      classNamePrefix="react-select"
      placeholder="Select a Prescription"
      styles={selectStyles}
      setSelectedOptionValues={setSelectedOptionValues}
      prescriptions={prescriptions}
      isOptionDisabled={true}
      components={{
        Menu: CustomMenu,
        Option: PrescriptionOption,
      }}
    />
  )
}
