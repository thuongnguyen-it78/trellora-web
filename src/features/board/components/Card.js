import { Paper } from '@mui/material'
import React from 'react'

function Card({ card }) {
  return <Paper sx={{ backgroundColor: '#fff', borderRadius: "3px", minHeight: "70px", overflow: 'hidden', padding: 2 }}>{card.name}</Paper>
}

Card.propTypes = {}

export default Card
