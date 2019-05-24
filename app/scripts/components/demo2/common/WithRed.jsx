import React from 'react'


export const withRed = Component => props => (
  <div style={{ color: 'red'}}>
    <Component {...props} />
  </div>
)


