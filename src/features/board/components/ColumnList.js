import { Paper, Stack } from '@mui/material'
import React from 'react'
import Column from './Column'
import { Container, Draggable } from 'react-smooth-dnd'
import CommonButton from 'components/CommonButton'
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'

function ColumnList({ columnList }) {
  const onColumnDrop = () => {}
  return (
    <Stack direction="row" spacing={2} alignItems="flex-start">
      <Container
        orientation="horizontal"
        onDrop={onColumnDrop}
        dragHandleSelector=".column-drag-handle"
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'column-drop-preview',
        }}
      >
        {columnList.map((column) => (
          <Draggable key={column.id}>
            <Column column={column} />
          </Draggable>
        ))}
      </Container>
      <CommonButton
        variant="contained"
        color="secondary"
        sx={{
          backgroundColor: 'secondary.main',
          border: 'none',
          borderRadius: 1,
          height: 45,
          lineHeight: '45px',
          pb: 0.5,
          margin: '0 auto',
          minWidth: 310,
        }}
        startIcon={<AddCircleOutlineIcon sx={{ fontSize: 40 }} />}
      >
        Add column
      </CommonButton>
    </Stack>
  )
}

ColumnList.propTypes = {}

export default ColumnList
