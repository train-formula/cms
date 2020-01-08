import React from 'react'
import styled from 'styled-components'
import {
  createStyles,
  makeStyles,
  withStyles,
  Theme,
} from '@material-ui/core/styles'
import MenuItem from '@material-ui/core/MenuItem'
import FormControl from '@material-ui/core/FormControl'
import Select from '@material-ui/core/Select'
import InputBase from '@material-ui/core/InputBase'

const BootstrapInput = withStyles((theme: Theme) =>
  createStyles({
    root: {
      'label + &': {
        marginTop: theme.spacing(3),
      },
      display: 'grid',
    },
    input: {
      position: 'relative',
      border: 'none',
      fontSize: '1.4rem',
      color: '#808080',
      fontWeight: 'bold',
      transition: theme.transitions.create(['border-color', 'box-shadow']),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        background: 'none',
        // borderRadius: 4,
        // borderColor: '#80bdff',
        // boxShadow: '0 0 0 0.2rem rgba(0,123,255,.25)',
      },
    },
  })
)(InputBase)

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      padding: '0 1rem',
    },
  })
)

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`

type ParameterProps = {
  value: any
  updateParameterValue: (value: string) => void
  parameterOptions: {
    value: string | number
    label: string | number
    type?: string
  }[]
}

export const Parameter: React.FC<ParameterProps> = props => {
  const classes = useStyles()
  const [parameterValue, setParameterValue] = React.useState(props.value)
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    const value = event.target.value as string
    setParameterValue(value)
    props.updateParameterValue(value)
  }

  return (
    <Container>
      <FormControl className={classes.root}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={parameterValue}
          onChange={handleChange}
          input={<BootstrapInput />}
          placeholder="sets"
        >
          {props.parameterOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  )
}
