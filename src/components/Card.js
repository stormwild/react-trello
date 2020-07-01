import React from 'react';
import PropTypes from 'prop-types';

const Card = ({ id, text, list: { id: listId, title } }) => {
  return (
    <div className='card'>
      <p>
        <small>
          {listId} {title} - {id}
        </small>
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
