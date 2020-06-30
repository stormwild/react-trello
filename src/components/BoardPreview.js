import React from 'react';
import PropTypes from 'prop-types';

const BoardPreview = ({ id, title, background }) => {
  return (
    <div
      id={id}
      className='board-preview'
      style={{ backgroundColor: background }}
    >
      <p>
        <small>{id}</small>
      </p>
      <h1>{title}</h1>
    </div>
  );
};

BoardPreview.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  background: PropTypes.string.isRequired,
};

export default BoardPreview;
