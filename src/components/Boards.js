import React from 'react';
import PropTypes from 'prop-types';

import BoardPreview from 'components/BoardPreview';
import BoardCreate from 'components/BoardCreate';

const Boards = ({ boards, addBoard }) => {
  return (
    <>
      <BoardCreate {...{ boards, addBoard }} />
      <div className='boards'>
        {boards &&
          boards.map((board) => <BoardPreview key={board.id} {...board} />)}
      </div>
    </>
  );
};

Boards.propTypes = {
  boards: PropTypes.array.isRequired,
  addBoard: PropTypes.func.isRequired,
};

export default Boards;
