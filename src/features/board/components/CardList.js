import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'

function CardList({ cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  return (
    <Stack
      spacing={0.5}
      sx={{
        overflowY: 'auto',
        pr: 0.5,
        mr: 0.5,
        borderRaius: "3px",
        '&::-webkit-scrollbar': {
          height: 8,
          width: 8,
        },
        '&::-webkit-scrollbar-track-piece': {
          backgroundColor: '#091e4214',
        },
        flex: "1"
      }}
    >
      {cardList.map((card) => (
        <Card card={card} />
      ))}
    </Stack>
  )
}

CardList.propTypes = {}

export default CardList
