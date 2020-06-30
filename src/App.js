import React, { useEffect, useState } from 'react';

import Boards from 'components/Boards';
import Board from 'components/Board';

import data from './data/sampleData';

const App = () => {
  const initialState = data.boards;
  const [boards, setState] = useState(initialState);

  const addBoard = (board) => {
    setState([...boards, board]);
  };

  return (
    <div className='app'>
      <h1 className='title'>Boards</h1>
      <Boards {...{ boards, addBoard }} />
      <div>
        <h2>Sample Board</h2>
        <Board {...boards[0]} />
      </div>
    </div>
  );
};

export default App;
