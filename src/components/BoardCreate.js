import React, { useState, useEffect } from 'react';

const BoardCreate = ({ boards, addBoard }) => {
  const [state, setState] = useState({
    id: boards[boards.length - 1]?.id + 1000,
    title: 'New Title',
    background: '#cccccc',
  });

  // const effectHandler = () => {
  //   setState({ ...state, id: boards[boards.length - 1]?.id + 1000 });
  // };

  useEffect(() => {
    setState({ ...state, id: boards[boards.length - 1]?.id + 1000 });
  }, [boards]);

  const handleSubmit = (e) => {
    e.preventDefault();
    addBoard(state);
  };

  return (
    <div>
      <h1>Board Create </h1>
      <form className='form form-inline' onSubmit={handleSubmit}>
        <div className='form-group'>
          <label htmlFor='title'>Title</label>
          <input
            className='form-control'
            type='text'
            name='title'
            id='title'
            onChange={(e) => setState({ ...state, title: e.target.value })}
            value={state.title}
          />
        </div>
        <div className='form-group mx-1'>
          <label htmlFor='background'>Background Color</label>
          <input
            className='form-control'
            type='color'
            name='color'
            id='color'
            onChange={(e) => setState({ ...state, background: e.target.value })}
            value={state.background}
          />
        </div>
        <div className='form-group'>
          <button type='submit' className='btn btn-inline-adjust'>
            Add New Board
          </button>
        </div>
      </form>
    </div>
  );
};

export default BoardCreate;
