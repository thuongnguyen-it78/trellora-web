import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'
import { Container, Draggable } from 'react-smooth-dnd'

function CardList({ cardList }) {
  const onCardDrop = (column, e) => {
    console.log(column, e)
  }

  const getCardPayload = (payload) => {
    console.log(payload)
  }

  return (
    <Stack
      spacing={1}
      sx={{
        overflowY: 'auto',
        pr: 0.5,
        mr: 0.5,
        pl: 1,
        borderRaius: '2px',
        '&::-webkit-scrollbar': {
          width: 8,
        },
        '&::-webkit-scrollbar-track': {
          backgroundColor: '#091e4214',
          borderRadius: 16,
        },
        '&::-webkit-scrollbar-thumb': {
          backgroundColor: '#bfc4ce',
          borderRadius: 16,
        },
        flex: '1',
      }}
    >
      <Container
        groupName="col"
        onDrop={(e) => onCardDrop("column.id", e)}
        getChildPayload={(index) => getCardPayload("column.id", index)}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
        onDragEnter={() => {
          console.log('drag enter:', "column.id")
        }}
        onDragLeave={() => {
          console.log('drag leave:', "column.id")
        }}
        onDropReady={(p) => console.log('Drop ready: ', p)}
        dropPlaceholder={{
          animationDuration: 150,
          showOnTop: true,
          className: 'drop-preview',
        }}
        dropPlaceholderAnimationDuration={200}
      >
        {cardList.map((card) => (
          <Draggable key={card.id}>
            <Card card={card} />
          </Draggable>
        ))}
      </Container>
    </Stack>
  )
}

CardList.propTypes = {}

export default CardList
