import { Paper, Typography } from '@mui/material'
import React from 'react'

function Card({ card }) {
  return (
    <Paper
      sx={{
        backgroundColor: '#fff',
        borderRadius: '3px',
        minHeight: '70px',
        overflow: 'hidden',
        padding: 2,
        mb: 1,
        cursor: 'pointer',
      }}
    >
      <Typography variant="body-1" sx={{ cursor: 'text' }}>
        {card.name}
      </Typography>
    </Paper>
  )
}

Card.propTypes = {}

export default Card
