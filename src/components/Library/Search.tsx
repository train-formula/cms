import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import Paper from '@material-ui/core/Paper'
import InputBase from '@material-ui/core/InputBase'
import IconButton from '@material-ui/core/IconButton'
import { MdSearch } from 'react-icons/md'

const useStyles = makeStyles(theme => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    background: '#f0f2f2',
    color: '#242424',
    borderRadius: '8px',
    width: '30%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    color: '#909090',
    opacity: '1',
    fontSize: '1.6rem',
  },
  iconButton: {
    padding: 10,
    color: '#909090',
  },
}))

export default function CustomizedInputBase() {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="search">
        <MdSearch />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Search programs..."
        inputProps={{ 'aria-label': 'search programs' }}
      />
    </Paper>
  )
}
