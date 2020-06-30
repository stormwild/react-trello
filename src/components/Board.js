import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';

import data from 'data/sampleData';

const Board = ({ id, title, background }) => {
  const initialState = data.lists;
  const [lists, setLists] = useState(initialState);

  useEffect(() => {
    // console.table(lists);
  }, [lists]);

  const addList = () => {
    const list = {
      id: lists[lists.length - 1].id + 100,
      title: 'New List',
      board: id,
      cards: [],
    };
    setLists([...lists, list]);
  };

  return (
    <div id={id} className='board' style={{ backgroundColor: background }}>
      <p>
        <small>{id}</small>
      </p>
      <h1>{title}</h1>
      <div className='form'>
        <button className='btn' onClick={addList}>
          Add New List
        </button>
      </div>
      <div className='lists'>
        {lists && lists.map((list) => <List key={list.id} {...list} />)}
      </div>
    </div>
  );
};

Board.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default Board;
