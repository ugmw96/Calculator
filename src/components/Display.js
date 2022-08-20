import React from 'react';
import { Textfit } from 'react-textfit';
import { CalDisplay } from '../components/Styles/componentsStyls'

export default function Display({value}) {
  return (
    <CalDisplay>
      <Textfit mode="single" max={70}>
        {value}
      </Textfit>
    </CalDisplay>
  )
}
