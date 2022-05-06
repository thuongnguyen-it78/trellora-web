import { Button } from '@mui/material'
import React from 'react'

function CommonButton({ sx, children, circle, ...rest }) {
  return (
    <Button
      {...rest}
      sx={{
        borderRadius: '99px',
        border: '2px solid #000',
        color: '#000',
        fontWeight: 'bold',
        textTransform: 'uppercase',
        ...sx,
      }}
    >
      {children}
    </Button>
  )
}

export default CommonButton
