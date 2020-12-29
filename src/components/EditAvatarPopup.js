import React from 'react';
import PopupWithForm from './PopupWithForm';

function AvatarPopup(props) {
  const linkAvatar = React.useRef();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);
  function handleChange(e) {
    const error = e.target.nextElementSibling;
    if (!e.target.validity.valid) {
      error.textContent = e.target.validationMessage.split('.')[0];
      setButtonDisabled(false);
      return error;
    }
    error.textContent = '';
    setButtonDisabled(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateAvatar({
      avatar: linkAvatar.current.value
    })
  }
  React.useEffect(() => {
    props.isOpen && setButtonDisabled(Boolean(linkAvatar.current.value));
    linkAvatar.current.value = '';
  }, [props.isOpen]);
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Обновить аватар"
      nameButton={props.loading ? '...Загрузка' : 'Сохранить'}
      containerInput={
        <>
          <div className="input-container">
            <input
              ref={linkAvatar}
              type="url"
              required
              onChange={handleChange}
              className="popup__input popup__input_type_link-url"
              placeholder="Ссылка на картинку"
              autoComplete="off"
            />
            <span className="error">{props.isOpen && ''}</span>
          </div>
        </>
      }
    />
  )
}
export default AvatarPopup;