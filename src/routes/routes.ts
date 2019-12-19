import React from 'react'
import { GiFiles } from 'react-icons/gi'
import { MdDns } from 'react-icons/md'
import { FaDumbbell, FaPrescription } from 'react-icons/fa'

import { Programs } from '../pages/Programs'
import { Exercises } from '../pages/Exercises'
import { Categories } from '../pages/Categories'
import { Prescriptions } from '../pages/Prescriptions'

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
