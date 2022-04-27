import { Box } from '@mui/material'
import Boardbar from 'components/Boardbar'
import Navbar from 'components/Navbar'
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
      }}
    >
      <Navbar />
      <Boardbar />
      <Board />
    </Box>
  )
}

MainLayout.propTypes = {}

export default MainLayout
