import React from 'react'
import { GiFiles } from 'react-icons/gi'

import { Programs } from '../pages/Programs'
import { Exercises } from '../pages/Exercises'
import { Categories } from '../pages/Categories'

export type Route = {
  path: string
  component: React.ReactNode
  icon: React.ReactNode
  exact?: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    component: Programs,
    icon: GiFiles,
    exact: true,
  },
  {
    path: '/',
    component: Exercises,
    icon: GiFiles,
  },
  {
    path: '/',
    component: Categories,
    icon: GiFiles,
  },
]
