import React from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const List = ({ id, title, board, cards }) => {
  return (
    <div className='list'>
      <p>
        <small>{id}</small>
      </p>
      <h1>{title}</h1>
      <div className='cards'>
        {cards && cards.map((card) => <Card key={card.id} {...card} />)}
      </div>
    </div>
  );
};

List.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  board: PropTypes.number.isRequired,
  cards: PropTypes.array.isRequired,
};

export default List;
