import { Stack } from '@mui/material'
import React from 'react'
import Column from './Column'

function ColumnList({ columnList }) {
  return (
    <Stack
      direction="row"
      spacing={2}
      alignItems="flex-start"
    >
      {columnList.map((column) => (
        <Column key={column.id} column={column} />
      ))}
    </Stack>
  )
}

ColumnList.propTypes = {}

export default ColumnList
