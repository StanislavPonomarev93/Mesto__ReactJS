import closePopupIcon from '../images/close.svg';

function ImagePopup(props) {
  return (
    <div className={`popup popup__image ${props.card && 'popup_is-opened'}`}>
      <div className="popup__container">
        <img
          onClick={props.onClose}
          src={closePopupIcon}
          alt="закрыть картинку"
          className="popup__close popup__close-image"
        />
        <img
          src={props.card}
          alt="картинка"
          className="popup__image-big"
        />
      </div>
    </div>
  );
}
export default ImagePopup;