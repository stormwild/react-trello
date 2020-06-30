import React, { useEffect, useState } from 'react';

import Board from './components/Board';
import data from './data/sampleData';

const App = () => {
  const initialState = data;
  const [state, setState] = useState(initialState);

  useEffect(() => {
    console.log(`NODE_PATH: ${process.env.REACT_APP_NODE_PATH}`);
    console.log(`NODE_ENV: ${process.env.NODE_ENV}`);
  }, []);

  const { boards } = state;

  return (
    <div className='App'>
      <h1>Boards</h1>
      {boards && boards.map((board) => <Board key={board.id} {...board} />)}
    </div>
  );
};

export default App;
