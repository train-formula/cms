import React from 'react'
import { GiFiles } from 'react-icons/gi'
import { MdDns } from 'react-icons/md'
import { FaDumbbell } from 'react-icons/fa'

import { Programs } from '../pages/Programs'
import { Exercises } from '../pages/Exercises'
import { Categories } from '../pages/Categories'

export type Route = {
  path: string
  component: React.ReactNode
  name: string
  icon: React.ComponentType
  exact?: boolean
}

export const routes: Route[] = [
  {
    path: '/',
    component: Programs,
    name: 'Programs',
    icon: GiFiles,
    exact: true,
  },
  {
    path: '/exercises',
    component: Exercises,
    name: 'Exercises',
    icon: FaDumbbell,
  },
  {
    path: '/categories',
    component: Categories,
    name: 'Categories',
    icon: MdDns,
  },
]
