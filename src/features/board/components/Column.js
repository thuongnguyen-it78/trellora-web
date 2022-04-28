import { Box, Stack } from '@mui/material'
import React from 'react'
import CardList from './CardList'

function Column(props) {
  return (
    <Stack
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 1,
        minWidth: 310,
        py: 0.5,
        maxHeight: 'calc(100vh - var(--boardbar-height) - var(--header-height) - 5px - 40px)'
      }}
    >
      <Box sx={{ height: 45, lineHeight: '45px' }}>Header</Box>
      <CardList />
      <Box sx={{ height: 45, lineHeight: '45px' }}>Footer</Box>
    </Stack>
  )
}

Column.propTypes = {}

export default Column
