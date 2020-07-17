import React from 'react'
import { GiFiles } from 'react-icons/gi'
import { MdDns } from 'react-icons/md'
import { FaDumbbell } from 'react-icons/fa'

import { Programs } from '../pages/Programs'
import { Exercises } from '../pages/Exercises'
import { Exercise } from '../pages/Exercise'
import { Categories } from '../pages/Categories'
import { Category } from '../pages/Category'
import { Workout } from '../pages/Workout'
import { Program } from '../pages/Program'

interface IconProps {
  className?: string
}

export type Route = {
  path: string
  component: React.ReactNode
  name: string
  icon: React.ComponentType<IconProps>
  exact?: boolean
}

export const routes: Route[] = [
  {
    path: '/programs',
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

type DetailViewRoutes = {
  path: string
  component: React.ComponentType
}

export const detailViewRoutes: DetailViewRoutes[] = [
  {
    path: '/program/:id',
    component: Program,
  },
  {
    path: '/exercise/:id',
    component: Exercise,
  },
  {
    path: '/category/:id',
    component: Category,
  },
  {
    path: '/workout/:id',
    component: Workout,
  },
]
