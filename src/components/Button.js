import React from 'react';
import { CalButton } from '../components/Styles/componentsStyls'

export default function Button({ value,onClick }) {
  return (
    <CalButton onClick={onClick}>
      {value}
    </CalButton>
  )
}
