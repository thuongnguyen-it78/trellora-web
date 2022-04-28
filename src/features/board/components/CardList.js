import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'

function CardList({ cardList = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] }) {
  return (
    <Stack
      spacing={1}
      sx={{
        overflowY: 'auto',
        pr: 0.5,
        mr: 0.5,
        pl: 1,
        borderRaius: '2px',
        '&::-webkit-scrollbar': {
          width: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#091e4214',
          borderRadius: 16
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#bfc4ce',
          borderRadius: 16
        },
        flex: '1',
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
