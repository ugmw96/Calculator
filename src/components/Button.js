import React from 'react';
import { CalButton } from '../components/Styles/componentsStyls'

export default function Button({ value,onClick,className }) {
  return (
    <CalButton onClick={onClick} className={className}>
      {value}
    </CalButton>
  )
}
