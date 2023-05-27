import React from 'react'
import { RotatingBorder } from './utlis/RotatingBorder'

export const Dayplan = ({packageData, days}) => {
  return (
    <div>
      <RotatingBorder clr="black" border="1px" size="100px">
        <h1>Days {days}</h1>
      </RotatingBorder>
    </div>
  )
}
