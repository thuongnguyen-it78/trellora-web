import { Stack } from '@mui/material'
import React from 'react'
import Card from './Card'
import { Container, Draggable } from 'react-smooth-dnd'

function CardList({ cardList, columnId }) {

  const onCardDrop = (columnId, values) => {
    console.log({columnId, values})
  }

  const getCardPayload = (columnId, payload) => {
    console.log({columnId, payload})
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
        onDrop={(e) => onCardDrop(columnId, e)}
        getChildPayload={(e) => getCardPayload(columnId, e)}
        dragClass="card-ghost"
        dropClass="card-ghost-drop"
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
