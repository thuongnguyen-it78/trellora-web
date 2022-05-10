import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline'
import DoneOutlineOutlinedIcon from '@mui/icons-material/DoneOutlineOutlined'
import MoreHorizOutlinedIcon from '@mui/icons-material/MoreHorizOutlined'
import { Box, IconButton, Input, Stack, Typography } from '@mui/material'
import CommonButton from 'components/CommonButton'
import React, { useState } from 'react'
import { mapOrder } from 'utils'
import CardList from './CardList'

function Column({ column }) {
  const [editName, setEditName] = useState(false)

  const openEditMode = () => {
    setEditName(true)
  }

  const handleBlur = () => {
    setEditName(false)
  }

  return (
    <Stack
      sx={{
        backgroundColor: 'secondary.main',
        borderRadius: 1,
        minWidth: 310,
        width: 310,
        maxHeight: 'calc(100vh - var(--boardbar-height) - var(--header-height) - 5px - 40px)',
        marginRight: 2,
      }}
    >
      <Stack
        sx={{ height: 60, lineHeight: '45px', backgroundColor: column?.color, py: 1, px: 1 }}
        alignItems="center"
        className="column-drag-handle"
        direction="row"
        spacing={0.3}
      >
        <IconButton>
          <DoneOutlineOutlinedIcon />
        </IconButton>
        <Box sx={{ flex: 1 }}>
          {editName ? (
            <Input
              onBlur={handleBlur}
              placeholder="Placeholder"
              inputProps="column-name"
              defaultValue={column.title}
              autoFocus
              sx={{ backgroundColor: '#fff', borderRadius: 1, pl: 0.5 }}
            />
          ) : (
            <Typography
              onClick={openEditMode}
              variant="body1"
              sx={{
                display: 'flex',
                alignItems: 'center',
                borderRadius: 1,
                width: '100%',
                height: 32,
                justifyContent: 'flex-start',
                cursor: 'text',
                transition: 'all 0.2s',
                pl: 0.5,
                '&:hover': {
                  backgroundColor: 'rgba(0, 0, 0, 0.04)',
                },
              }}
            >
              {column.title}
            </Typography>
          )}
        </Box>
        <IconButton>
          <MoreHorizOutlinedIcon />
        </IconButton>
        <Typography
          variant="body1"
          sx={{
            fontSize: 13,
            width: 30,
            height: 30,
            borderRadius: 50,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            backgroundColor: 'default.light',
          }}
        >
          {column?.cards?.length}
        </Typography>
      </Stack>
      <CardList cardList={mapOrder(column.cards, column.cardOrder, 'id')} />
      <Box sx={{ height: 45, lineHeight: '45px', pb: 0.5 }}>
        <CommonButton
          sx={{
            border: 'none',
            width: '100%',
            borderRadius: 1,
          }}
          startIcon={<AddCircleOutlineIcon sx={{ fontSize: 40 }} />}
        >
          Add card
        </CommonButton>
      </Box>
    </Stack>
  )
}

Column.propTypes = {}

export default Column
