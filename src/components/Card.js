import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, text }) => {
  return (
    <div className='card'>
      <p>
        <small>{id}</small>
      </p>
      <div>{text}</div>
    </div>
  );
};

Card.propTypes = {
  id: PropTypes.number.isRequired,
  text: PropTypes.string.isRequired,
};

export default Card;
