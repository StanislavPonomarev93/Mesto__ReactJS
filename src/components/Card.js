import React from 'react';
import CurrentUserContext from '../contexts/CurrentUserContext';

function Card(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    props.props.cards.map((card) =>
      <div key={card._id.toString()} className="place-card">
        <div onClick={() => props.props.onCardClick(card.link)} className="place-card__image" style={{ backgroundImage: `url(${card.link})` }}>
          {card.owner._id === currentUser._id && <button className="place-card__delete-icon" onClick={(e) => {
            e.stopPropagation();
            props.props.onCardDelete(card);
          }}></button>}
        </div>
        <div className="place-card__description">
          <h3 className="place-card__name">{card.name}</h3>
          <div className="place-card__like-container">
            <button
            className={`place-card__like-icon ${card.likes.some(i => i._id === currentUser._id) && "place-card__like-icon_liked"}`}
            onClick={() => props.props.onCardLike(card)}>
            </button>
            <p className="place-card__like-number">{card.likes.length}</p>
          </div>
        </div>
      </div>
    )
  )
}
export default Card;