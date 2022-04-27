import { Box } from '@mui/material'
import React from 'react'

function Boardbar(props) {
  return (
    <Box
      sx={{
        backgroundColor: 'primary.dark',
        fontSize: '1.1rem',
        pl: '10px',
        display: 'flex',
        alignItems: 'center',
        height: "var(--boardbar-height)"
      }}
    >
      Boardbar
    </Box>
  )
}

Boardbar.propTypes = {}

export default Boardbar
