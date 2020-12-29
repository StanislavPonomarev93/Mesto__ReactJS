import React from 'react';
import PopupWithForm from './PopupWithForm';

function PlasePopup(props) {
  const cardName = React.useRef();
  const cardLinck = React.useRef();
  const [buttonDisabled, setButtonDisabled] = React.useState(false);

  function handleChange(e) {
    const error = e.target.nextElementSibling;
    if (!e.target.validity.valid) {
      error.textContent = e.target.validationMessage.split('.')[0];
      setButtonDisabled(false);
      return error;
    }
    error.textContent = '';
    cardName.current.form.checkValidity() && setButtonDisabled(true);
  }
  function handleSubmit(e) {
    e.preventDefault();
    props.onUpdateParce({
      name: cardName.current.value,
      link: cardLinck.current.value
    });
  }
  React.useEffect(() => {
    props.isOpen && setButtonDisabled(Boolean(cardName.current.value && cardLinck.current.value));
    cardName.current.value = '';
    cardLinck.current.value = '';
  }, [props.isOpen]);
  return (
    <PopupWithForm
      onSubmit={handleSubmit}
      buttonDisabled={buttonDisabled}
      isOpen={props.isOpen}
      onClose={props.onClose}
      title="Новое место"
      nameButton={props.loading ? '...Загрузка' : '+'}
      containerInput={
        <>
          <div className="input-container">
            <input
              ref={cardName}
              type="text"
              required
              onChange={handleChange}
              className="popup__input popup__input_type_name"
              placeholder="Название"
              minLength="2"
              maxLength="32"
              autoComplete="off"
            />
            <span className="error">{props.isOpen && ''}</span>
          </div>
          <div className="input-container">
            <input
              ref={cardLinck}
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
export default PlasePopup;