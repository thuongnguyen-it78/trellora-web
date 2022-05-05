import { Box, Stack } from '@mui/material'
import React from 'react'
import { mapOrder } from 'utils'
import CardList from './CardList'

function Column({ column }) {
  return (
    <Stack
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 1,
        minWidth: 310,
        py: 0.5,
        maxHeight: 'calc(100vh - var(--boardbar-height) - var(--header-height) - 5px - 40px)',
      }}
    >
      <Box sx={{ height: 45, lineHeight: '45px', backgroundColor: column?.color }}>{column?.title}</Box>
      <CardList cardList={mapOrder(column.cards, column.cardOrder, 'id')}/>
      <Box sx={{ height: 45, lineHeight: '45px' }}>Footer</Box>
    </Stack>
  )
}

Column.propTypes = {}

export default Column
