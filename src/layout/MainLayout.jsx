import { Box } from '@mui/material'
import Boardbar from 'components/Boardbar'
import Header from 'components/Header'
import Board from 'features/board'
import React from 'react'

function MainLayout({ children }) {
  return (
    <Box
      sx={{
        height: '100vh',
        display: 'grid',
        gridTemplateRows: '40px 50px 1fr',
        backgroundColor: 'primary.main',
        overflowY: 'hidden',
      }}
    >
      <Header />
      <Boardbar />
      <Board />
    </Box>
  )
}

MainLayout.propTypes = {}

export default MainLayout
