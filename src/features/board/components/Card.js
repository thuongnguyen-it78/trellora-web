import { Box } from '@mui/material'
import React from 'react'

function Card({ card }) {
  if (card === 4 || card === 6)
    return (
      <Box sx={{ backgroundColor: '#fff' }}>
        <img src="https://i.pinimg.com/236x/24/7d/3a/247d3ae8f0e6b42c9267cfc1e96aa449.jpg" />
      </Box>
    )
  return <Box sx={{ backgroundColor: '#fff' }}>Content 1</Box>
}

Card.propTypes = {}

export default Card
