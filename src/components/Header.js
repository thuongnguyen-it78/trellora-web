import { Box } from '@mui/material'
import React from 'react'

function Header(props) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        backgroundColor: 'primary.dark',
        fontSize: '1.5rem',
        pl: '10px',
        height: "var(--header-height)"
      }}
    >
      Header
    </Box>
  )
}

Header.propTypes = {}

export default Header
