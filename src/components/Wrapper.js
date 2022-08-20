import React from 'react';
import { CalWrapper } from '../components/Styles/componentsStyls'

export default function Wrapper({children}) {
  return (
    <CalWrapper>
      {children}
    </CalWrapper>
  )
}
