import React from 'react'
import { GiFiles } from 'react-icons/gi'
import { MdDns } from 'react-icons/md'
import { FaDumbbell, FaPrescription } from 'react-icons/fa'

import { Programs } from '../pages/Programs'
import { Program } from '../pages/Program'
import { Exercises } from '../pages/Exercises'
import { Exercise } from '../pages/Exercise'
import { Categories } from '../pages/Categories'
import { Category } from '../pages/Category'
import { Prescriptions } from '../pages/Prescriptions'
import { Workout } from '../pages/Workout'

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
  {
    path: '/prescriptions',
    component: Prescriptions,
    name: 'Prescriptions',
    icon: FaPrescription,
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
