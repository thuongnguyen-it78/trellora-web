import { Box } from '@mui/material'
import { initialBoard } from 'data/board'
import React, { useState } from 'react'
import { applyDrag, mapOrder } from 'utils'
import ColumnList from './components/ColumnList'

function Board(props) {
  const [board, setBoard] = useState(initialBoard.boards[0])

  const handleColumnChange = (values) => {
    setBoard({ ...board, columnOrder: applyDrag(board.columnOrder, values) })
  }

  return (
    <Box
      height="100%"
      sx={{
        overflowX: 'auto',
        overflowY: 'hidden',
        borderRadius: '3px',
        height: 'calc(100vh - var(--boardbar-height) - var(--header-height) - 5px)',
        ml: '10px',
        py: '20px',
        pb: '10px',
        '&::-webkit-scrollbar': {
          height: 12,
          height: 12,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#00000026',
          borderRadius: '5px',
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#cacacabf',
          borderRadius: '5px',
        },
      }}
    >
      <ColumnList
        columnList={mapOrder(board.columns, board.columnOrder, 'id')}
        onColumnChange={handleColumnChange}
      />
    </Box>
  )
}

Board.propTypes = {}

export default Board
