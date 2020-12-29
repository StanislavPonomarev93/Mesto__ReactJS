import React from 'react';
import Card from '../components/Card';
import CurrentUserContext from '../contexts/CurrentUserContext';
import avatarIcon from '../images/avatar-icon.svg';
function Main(props) {
  const currentUser = React.useContext(CurrentUserContext);
  return (
    <>
      <div className="profile root__section">
        <div className="user-info">
          <div className="user-info__photo" style={{ backgroundImage: `url(${currentUser.avatar})` }}>
            <img onClick={props.onEditAvatar} src={avatarIcon} className="user-info__avatar-icon" alt="аватар" />
          </div>
          <div className="user-info__data">
            <h1 className="user-info__name">{currentUser.name}</h1>
            <p className="user-info__job">{currentUser.about}</p>
            <button onClick={props.onEditProfile} className="user-info__edit">Edit</button>
          </div>
          <button onClick={props.onAddPlace} className="button user-info__button">+</button>
        </div>
      </div>

      <div className="places-list root__section"><Card props={props} /></div>
    </>
  )
}
export default Main;