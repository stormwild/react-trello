import React from 'react';

const Board = ({ id, title, background }) => {
  return (
    <div id={id} style={{ backgroundColor: background }}>
      <h1>{title}</h1>
    </div>
  );
};

export default Board;
