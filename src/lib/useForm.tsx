import React, { useState } from 'react'

type FormArgs = {
  [key: string]: string | number
}

export const useForm = (initialValues: any) => {
  const [values, setValues] = useState(initialValues)

  return [
    values,
    (e: React.ChangeEvent<HTMLInputElement>) => {
      setValues({ ...values, [e.target.name]: e.target.value })
    },
  ]
}
