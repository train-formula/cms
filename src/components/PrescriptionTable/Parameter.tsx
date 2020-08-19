import React from 'react';
import styled from 'styled-components';
import { createStyles, makeStyles, withStyles, Theme } from '@material-ui/core/styles';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import InputBase from '@material-ui/core/InputBase';

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
)(InputBase);

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      width: '100%',
      padding: '0 1rem',
    },
  })
);

const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  text-align: center;
`;

export type ParameterOption = {
  value: string | number;
  label: string | number;
  type?: string;
};

type ParameterProps = {
  value: string | number | undefined;
  updateParameterValue: (value: string) => void;
  parameterOptions: ParameterOption[];
};

export const Parameter: React.FC<ParameterProps> = (props) => {
  const classes = useStyles();
  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    console.log(event);
    const value = event.target.value as string;
    props.updateParameterValue(value);
  };

  return (
    <Container>
      <FormControl className={classes.root}>
        <Select
          labelId="demo-customized-select-label"
          id="demo-customized-select"
          value={props.value ? props.value : '0'}
          onChange={handleChange}
          input={<BootstrapInput />}
          placeholder="sets"
        >
          <MenuItem key={'0'} value={'0'} disabled>
            Select a unit
          </MenuItem>
          {props.parameterOptions.map(({ value, label }) => (
            <MenuItem key={value} value={value}>
              {label}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </Container>
  );
};
