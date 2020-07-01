import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import List from 'components/List';

import data from 'data/sampleData';

const Board = ({ id, title, background }) => {
  const initialState = data.lists;
  const [lists, setLists] = useState(initialState);

  const titleRef = useRef();

  // useEffect(() => {
  //   // console.table(lists);
  // }, [lists]);

  const addList = (e) => {
    e.preventDefault();
    const title = titleRef.current.value.trim();
    if (title) {
      const list = {
        id: lists[lists.length - 1].id + 100,
        title: titleRef.current.value,
        board: id,
        cards: [],
      };
      setLists([...lists, list]);
      titleRef.current.value = '';
    }
  };

  return (
    <div id={id} className='board' style={{ backgroundColor: background }}>
      <p>
        <small>{id}</small>
      </p>
      <h1>{title}</h1>
      <form className='form form-inline' onSubmit={addList}>
        <div className='form-group'>
          <label htmlFor=''>New List</label>
          <input
            className='form-control'
            type='text'
            name='title'
            id='title'
            ref={titleRef}
          />
        </div>
      </form>
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
