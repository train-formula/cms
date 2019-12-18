import React from 'react'
import { Route as RouterRoute } from 'react-router-dom'
import nprogress from 'nprogress'
import './nprogress.css'

export class Route extends React.Component {
  componentWillMount() {
    nprogress.start()
  }

  componentDidMount() {
    nprogress.done()
  }

  render() {
    return <RouterRoute {...this.props} />
  }
}
