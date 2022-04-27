import { Box, Stack } from '@mui/material'
import React from 'react'
import Column from './Column'

function ColumnList({ columnList = [1, 2, 3, 4, 5, 6, 7, 8, 9] }) {
  return (
    <Stack direction="row" spacing={2} sx={{ pl: "10px" }}>
      {columnList.map((column) => (
        <Column key={column} coumn={column} />
      ))}
    </Stack>
  )
}

ColumnList.propTypes = {}

export default ColumnList
