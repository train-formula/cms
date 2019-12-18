import React from 'react'
import ReactDOM from 'react-dom'
import { StylesProvider, ThemeProvider } from '@material-ui/core/styles'

import { App } from './App'
import { StyledComponentsGlobalStyles, MuiTheme } from './globalStyles'

ReactDOM.render(
  <StylesProvider injectFirst>
    <ThemeProvider theme={MuiTheme}>
      <StyledComponentsGlobalStyles />
      <App />
    </ThemeProvider>
  </StylesProvider>,
  document.querySelector('#root')
)
