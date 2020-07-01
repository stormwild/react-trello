import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import Card from './Card';

const List = ({ id, title, board, cards: cardlist }) => {
  const [cards, setCard] = useState(
    cardlist ? cardlist.map((card) => ({ ...card, list: { id, title } })) : []
  );
  const textRef = useRef();

  const getId = () => {
    return cards && cards.length > 0 ? cards[cards.length - 1].id + 1 : 1;
  };

  const newCard = (e) => {
    e.preventDefault();
    const card = {
      id: getId(),
      text: textRef.current.value.trim(),
      list: { id, title },
    };
    if (card && card.text) {
      setCard([...cards, card]);
      textRef.current.value = '';
    }
  };

  return (
    <div className='list'>
      <p>
        <small>{id}</small>
      </p>
      <h1>{title}</h1>
      <div className='cards'>
        {cards && cards.map((card) => <Card key={card.id} {...card} />)}
      </div>
      <form onSubmit={newCard} className='form form-inline mt-1'>
        <input
          className='form-control'
          type='text'
          name='text'
          id='text'
          placeholder='+ New Card'
          ref={textRef}
        />
      </form>
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
