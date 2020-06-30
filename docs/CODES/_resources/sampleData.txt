const boards = [
  {
    id: 1000,
    title: 'Course Ideas',
    background: '#ffad33',
  },
  {
    id: 2000,
    title: 'House Ideas',
    background: '#80ccff',
  },
  {
    id: 3000,
    title: 'Garden Ideas',
    background: '#ff3300',
  },
]

const lists = [
  {
    id: 100,
    title: 'House ideas',
    board: 1000,
    cards: [
      {
        id: 1,
        text: 'card 1',
      },
      {
        id: 2,
        text: 'card 2',
      },
    ],
  },
  {
    id: 200,
    title: 'Travel ideas',
    board: 1000,
    cards: [
      {
        id: 11,
        text: 'card 11',
      },
      {
        id: 22,
        text: 'card 22',
      },
    ],
  },
  {
    id: 200,
    title: 'Travel ideas 2',
    board: 2000,
    cards: [
      {
        id: 11,
        text: 'card 11',
      },
      {
        id: 22,
        text: 'card 22',
      },
    ],
  },
]

const data = {
  boards,
  lists,
}

export default data

