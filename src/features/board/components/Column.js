import { Box, Stack } from '@mui/material'
import React from 'react'
import CardList from './CardList'

function Column(props) {
  return (
    <Stack
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 1,
        width: 300,
        height: 'calc(100vh - var(--boardbar-height) - var(--navbar-height))',
        py: 0.5,
      }}
    >
      <Box sx={{ height: 36, lineHeight: '36px' }}>Header</Box>
      <CardList />
      <Box sx={{ height: 36, lineHeight: '36px' }}>Footer</Box>
    </Stack>
  )
}

Column.propTypes = {}

export default Column
