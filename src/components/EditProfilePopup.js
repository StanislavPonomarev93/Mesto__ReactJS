import React from 'react';
import PopupWithForm from './PopupWithForm';
import CurrentUserContext from '../contexts/CurrentUserContext';

function ProfilePopup(props) {
  const currentUser = React.useContext(CurrentUserContext);
  const nameRef = React.useRef();
  const aboutRef = React.useRef();
  const [name, setName] = React.useState('');
  const [about, setDescription] = React.useState('');
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  function handleChange(e) {
    const error = e.target.nextElementSibling;
    if (!e.target.validity.valid) {
      error.textContent = e.target.validationMessage.split('.')[0];
      e.target.name === 'name' ? setName(e.target.value) : setDescription(e.target.value);
      setButtonDisabled(false);
      return error;
    }
    error.textContent = '';
    e.target.name === 'name' ? setName(e.target.value) : setDescription(e.target.value);
    nameRef.current.form.checkValidity() && setButtonDisabled(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateUser({ name, about, });
  }
  React.useEffect(() => {
    props.isOpen && setButtonDisabled(Boolean(nameRef.current.value || aboutRef.current.value));
  }, [props.isOpen]);
  React.useEffect(() => {
    setName(currentUser.name);
    setDescription(currentUser.about);
  }, [currentUser, props.isOpen]);
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Редактировать профиль"
      nameButton={props.loading ? '...Загрузка' : 'Сохранить'}
      containerInput={
        <>
          <div className="input-container">
            <input
              ref={nameRef}
              type="text"
              required
              className="popup__input popup__input_type_nameProfile"
              placeholder="Имя"
              minLength="2"
              maxLength="32"
              onChange={handleChange}
              name="name"
              value={name}
              autoComplete="off"
            />
            <span className="error">{props.isOpen && ''}</span>
          </div>
          <div className="input-container">
            <input
              ref={aboutRef}
              type="text"
              required
              className="popup__input popup__input_type_aboutMe"
              placeholder="О себе"
              minLength="2"
              maxLength="32"
              onChange={handleChange}
              name="about"
              value={about}
              autoComplete="off"
            />
            <span className="error">{props.isOpen && ''}</span>
          </div>
        </>
      }
    />
  );
}
export default ProfilePopup;