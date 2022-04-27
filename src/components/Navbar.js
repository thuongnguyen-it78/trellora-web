import { Box, Typography } from '@mui/material'
import React from 'react'

function Navbar(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.dark',
        fontSize: '1.5rem',
        pl: '10px',
        height: "var(--navbar-height)"
      }}
    >
      Navbar
    </Box>
  )
}

Navbar.propTypes = {}

export default Navbar
