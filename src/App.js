import React from 'react';
import CurrentUserContext from './contexts/CurrentUserContext';
import Header from './components/Header';
import Main from './components/Main';
import EditProfilePopup from './components/EditProfilePopup';
import EditAvatarPopup from './components/EditAvatarPopup';
import AddPlacePopup from './components/AddPlacePopup';
import ImagePopup from './components/ImagePopup';
import api from './components/Api';

function App() {
  const [isEditProfilePopupOpen, setPopupProfile] = React.useState(false);
  const [isAddPlacePopupOpen, setPopupPlace] = React.useState(false);
  const [isEditAvatarPopupOpen, setPopupAvatar] = React.useState(false);
  const [selectedCard, setSelectedCard] = React.useState();
  const [currentUser, setCurrentUser] = React.useState({
    name: '',
    avatar: '',
    about: '',
    _id: '',
  });
  const [cards, setCards] = React.useState([]);
  const [loading, setLoading] = React.useState(false);

  const onEditProfile = () => setPopupProfile(!isEditProfilePopupOpen);
  const onAddPlace = () => setPopupPlace(!isAddPlacePopupOpen);
  const onEditAvatar = () => setPopupAvatar(!isEditAvatarPopupOpen);
  const handleCardClick = (link) => setSelectedCard(link);
  const closeAllPopups = () => {
    setPopupProfile(false);
    setPopupPlace(false);
    setPopupAvatar(false);
    setSelectedCard();
  };
  const handleUpdateUser = (obj) => {
    setLoading(true);
    api.sendUserInfo(obj.name, obj.about)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => setLoading(false));

  }
  const handleUpdateAvatar = (obj) => {
    setLoading(true);
    api.changeAvatar(obj.avatar)
    .then((res) => {
      setCurrentUser(res);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => setLoading(false));
  }
  const handleCardLike = (card) => {
    const isLiked = card.likes.some(i => i._id === currentUser._id);
    api.editLike(card._id, !isLiked).then((newCard) => {
      const newCards = cards.map((c) => c._id === card._id ? newCard : c);
      setCards(newCards);
    })
  }
  const handleCardDelete = (card) => {
    api.deleteCard(card._id).then(() => {
      const newCards = cards.filter((c) => c._id !== card._id);
      setCards(newCards);
    })
  }
  const handleAddPlaceSubmit = (newCard) => {
    setLoading(true);
    api.addCard(newCard)
    .then((res) => {
      setCards([...cards, res]);
      closeAllPopups();
    })
    .catch(err => console.log(`Ошибка: ${err}`))
    .finally(() => setLoading(false));
  }
  React.useEffect(() => {
    api.getUserInfo().then((res) => setCurrentUser(res))
    api.getInitialCards().then(res => setCards(res));
  }, []);
  return (
    <div className="App">
      <CurrentUserContext.Provider value={currentUser}>
        <Header />
        <Main
          onEditProfile={onEditProfile}
          onAddPlace={onAddPlace}
          onEditAvatar={onEditAvatar}
          onCardClick={handleCardClick}
          cards={cards}
          onCardLike={handleCardLike}
          onCardDelete={handleCardDelete}
        />
        <ImagePopup
          card={selectedCard}
          onClose={closeAllPopups}
        />
        <EditProfilePopup
          onUpdateUser={handleUpdateUser}
          isOpen={isEditProfilePopupOpen}
          onClose={closeAllPopups}
          loading={loading}
        />
        <AddPlacePopup
          onUpdateParce={handleAddPlaceSubmit}
          isOpen={isAddPlacePopupOpen}
          onClose={closeAllPopups}
          loading={loading}
        />
        <EditAvatarPopup
          onUpdateAvatar={handleUpdateAvatar}
          isOpen={isEditAvatarPopupOpen}
          onClose={closeAllPopups}
          loading={loading}
        />
      </CurrentUserContext.Provider>
    </div>
  );
}
export default App;