export const initialBoard = {
  boards: [
    {
      id: 'board-1',
      columnOrder: ["column-3", "column-2", "column-1", "column-4"],
      columns: [
        {
          id: 'column-1',
          boardId: 'board-1',
          title: 'TO DO',
          cardOrder: ['card-2', 'card-1', 'card-3'],
          cards: [
            {
              id: 'card-1',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn ReactJS',
              cover: null,
            },
            {
              id: 'card-2',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn Vuejs',
              cover: null,
            },
            {
              id: 'card-3',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn Angular',
              cover: null,
            },
          ],
        },

        {
          id: 'column-2',
          boardId: 'board-1',
          title: 'IN PROGRESS',
          cardOrder: ['card-10', 'card-11', 'card-12'],
          cards: [
            {
              id: 'card-10',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn Spring Boost',
              cover: null,
            },
            {
              id: 'card-11',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn Redux',
              cover: null,
            },
            {
              id: 'card-12',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn React Query',
              cover: null,
            },
          ],
        },

        {
          id: 'column-3',
          boardId: 'board-1',
          title: 'REVIEW',
          cardOrder: ['card-21', 'card-22', 'card-23', 'card-34', 'card-35', 'card-36'],
          cards: [
            {
              id: 'card-21',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn HTML',
              cover: null,
            },
            {
              id: 'card-22',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn CSS',
              cover: null,
            },
            {
              id: 'card-23',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn Python',
              cover: null,
            },
            {
              id: 'card-24',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn PHP',
              cover: null,
            },
            {
              id: 'card-25',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn Android',
              cover: null,
            },
            {
              id: 'card-36',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn React Native',
              cover: null,
            },
          ],
        },

        {
          id: 'column-4',
          boardId: 'board-1',
          title: 'DONE',
          cardOrder: ['card-31', 'card-32', 'card-33', 'card-24', 'card-25', 'card-26'],
          cards: [
            {
              id: 'card-31',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn React Query',
              cover: null,
            },
            {
              id: 'card-32',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn Regular Expression',
              cover: null,
            },
            {
              id: 'card-33',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn English',
              cover: null,
            },
            {
              id: 'card-34',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn JavaScript ES6',
              cover: null,
            },
            {
              id: 'card-35',
              boardId: 'board-1',
              columnId: 'column-2',
              name: 'Learn Android',
              cover: null,
            },
            {
              id: 'card-26',
              boardId: 'board-1',
              columnId: 'column-1',
              name: 'Learn React Native',
              cover: null,
            },
          ],
        },
      ],
    },
  ],
}
