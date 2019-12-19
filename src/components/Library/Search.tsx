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
    // border: '1px solid #909090',
    background: '#f0f2f2',
    color: '#242424',
    borderRadius: '8px',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    // color: '#ffffff',
    color: '#909090',
    opacity: '1',
    fontSize: '1.6rem',
  },
  iconButton: {
    padding: 10,
    color: '#909090',
    // color: 'rgba(255,255,255,0.45)',
  },
}))

export default function CustomizedInputBase() {
  const classes = useStyles()

  return (
    <Paper elevation={0} className={classes.root}>
      <InputBase
        className={classes.input}
        placeholder="Search programs..."
        inputProps={{ 'aria-label': 'search programs' }}
      />
      <IconButton className={classes.iconButton} aria-label="search">
        <MdSearch />
      </IconButton>
    </Paper>
  )
}
