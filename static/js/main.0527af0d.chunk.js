(this["webpackJsonpmesto-react"]=this["webpackJsonpmesto-react"]||[]).push([[0],{14:function(e,t,n){},15:function(e,t,n){"use strict";n.r(t);var a=n(0),c=n(1),o=n.n(c),r=n(6),i=n.n(r),s=(n(14),n(8)),u=n(2),l=o.a.createContext(),p=n.p+"static/media/logo.fad4f8a5.svg";var d=function(){return Object(a.jsx)("header",{className:"header root__section",children:Object(a.jsx)("img",{src:p,alt:"mesto logo",className:"logo"})})};var f=function(e){var t=o.a.useContext(l);return e.props.cards.map((function(n){return Object(a.jsxs)("div",{className:"place-card",children:[Object(a.jsx)("div",{onClick:function(){return e.props.onCardClick(n.link)},className:"place-card__image",style:{backgroundImage:"url(".concat(n.link,")")},children:n.owner._id===t._id&&Object(a.jsx)("button",{className:"place-card__delete-icon",onClick:function(t){t.stopPropagation(),e.props.onCardDelete(n)}})}),Object(a.jsxs)("div",{className:"place-card__description",children:[Object(a.jsx)("h3",{className:"place-card__name",children:n.name}),Object(a.jsxs)("div",{className:"place-card__like-container",children:[Object(a.jsx)("button",{className:"place-card__like-icon ".concat(n.likes.some((function(e){return e._id===t._id}))&&"place-card__like-icon_liked"),onClick:function(){return e.props.onCardLike(n)}}),Object(a.jsx)("p",{className:"place-card__like-number",children:n.likes.length})]})]})]},n._id.toString())}))},j=n.p+"static/media/avatar-icon.1a05233d.svg";var m=function(e){var t=o.a.useContext(l);return Object(a.jsxs)(a.Fragment,{children:[Object(a.jsx)("div",{className:"profile root__section",children:Object(a.jsxs)("div",{className:"user-info",children:[Object(a.jsx)("div",{className:"user-info__photo",style:{backgroundImage:"url(".concat(t.avatar,")")},children:Object(a.jsx)("img",{onClick:e.onEditAvatar,src:j,className:"user-info__avatar-icon",alt:"\u0430\u0432\u0430\u0442\u0430\u0440"})}),Object(a.jsxs)("div",{className:"user-info__data",children:[Object(a.jsx)("h1",{className:"user-info__name",children:t.name}),Object(a.jsx)("p",{className:"user-info__job",children:t.about}),Object(a.jsx)("button",{onClick:e.onEditProfile,className:"user-info__edit",children:"Edit"})]}),Object(a.jsx)("button",{onClick:e.onAddPlace,className:"button user-info__button",children:"+"})]})}),Object(a.jsx)("div",{className:"places-list root__section",children:Object(a.jsx)(f,{props:e})})]})},h=n.p+"static/media/close.8a65f75d.svg";var b=function(e){return Object(a.jsx)("div",{className:"popup popup__".concat(e.name," ").concat(e.isOpen&&"popup_is-opened"),children:Object(a.jsxs)("div",{className:"popup__content",children:[Object(a.jsx)("img",{onClick:e.onClose,src:h,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043f\u043e\u043f\u0430\u043f",className:"popup__close popup__close-".concat(e.name)}),Object(a.jsx)("h3",{className:"popup__title",children:e.title}),Object(a.jsxs)("form",{className:"popup__form",name:e.name,onSubmit:e.onSubmit,children:[e.containerInput,Object(a.jsx)("button",{className:"popup__button popup__button-".concat(e.name," ").concat(!e.buttonDisabled&&"button__disabled"),children:e.nameButton})]})]})})};var _=function(e){var t=o.a.useContext(l),n=o.a.useRef(),c=o.a.useRef(),r=o.a.useState(""),i=Object(u.a)(r,2),s=i[0],p=i[1],d=o.a.useState(""),f=Object(u.a)(d,2),j=f[0],m=f[1],h=o.a.useState(!1),_=Object(u.a)(h,2),O=_[0],g=_[1];function v(e){var t=e.target.nextElementSibling;if(!e.target.validity.valid)return t.textContent=e.target.validationMessage.split(".")[0],"name"===e.target.name?p(e.target.value):m(e.target.value),g(!1),t;t.textContent="","name"===e.target.name?p(e.target.value):m(e.target.value),n.current.form.checkValidity()&&g(!0)}return o.a.useEffect((function(){e.isOpen&&g(Boolean(n.current.value||c.current.value))}),[e.isOpen]),o.a.useEffect((function(){p(t.name),m(t.about)}),[t,e.isOpen]),Object(a.jsx)(b,{onSubmit:function(t){t.preventDefault(),e.onUpdateUser({name:s,about:j})},buttonDisabled:O,isOpen:e.isOpen,onClose:e.onClose,title:"\u0420\u0435\u0434\u0430\u043a\u0442\u0438\u0440\u043e\u0432\u0430\u0442\u044c \u043f\u0440\u043e\u0444\u0438\u043b\u044c",nameButton:e.loading?"...\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",containerInput:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{ref:n,type:"text",required:!0,className:"popup__input popup__input_type_nameProfile",placeholder:"\u0418\u043c\u044f",minLength:"2",maxLength:"32",onChange:v,name:"name",value:s,autoComplete:"off"}),Object(a.jsx)("span",{className:"error",children:e.isOpen&&""})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{ref:c,type:"text",required:!0,className:"popup__input popup__input_type_aboutMe",placeholder:"\u041e \u0441\u0435\u0431\u0435",minLength:"2",maxLength:"32",onChange:v,name:"about",value:j,autoComplete:"off"}),Object(a.jsx)("span",{className:"error",children:e.isOpen&&""})]})]})})};var O=function(e){var t=o.a.useRef(),n=o.a.useState(!1),c=Object(u.a)(n,2),r=c[0],i=c[1];return o.a.useEffect((function(){e.isOpen&&i(Boolean(t.current.value)),t.current.value=""}),[e.isOpen]),Object(a.jsx)(b,{onSubmit:function(n){n.preventDefault(),e.onUpdateAvatar({avatar:t.current.value})},buttonDisabled:r,isOpen:e.isOpen,onClose:e.onClose,title:"\u041e\u0431\u043d\u043e\u0432\u0438\u0442\u044c \u0430\u0432\u0430\u0442\u0430\u0440",nameButton:e.loading?"...\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430":"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c",containerInput:Object(a.jsx)(a.Fragment,{children:Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{ref:t,type:"url",required:!0,onChange:function(e){var t=e.target.nextElementSibling;if(!e.target.validity.valid)return t.textContent=e.target.validationMessage.split(".")[0],i(!1),t;t.textContent="",i(!0)},className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),Object(a.jsx)("span",{className:"error",children:e.isOpen&&""})]})})})};var g=function(e){var t=o.a.useRef(),n=o.a.useRef(),c=o.a.useState(!1),r=Object(u.a)(c,2),i=r[0],s=r[1];function l(e){var n=e.target.nextElementSibling;if(!e.target.validity.valid)return n.textContent=e.target.validationMessage.split(".")[0],s(!1),n;n.textContent="",t.current.form.checkValidity()&&s(!0)}return o.a.useEffect((function(){e.isOpen&&s(Boolean(t.current.value&&n.current.value)),t.current.value="",n.current.value=""}),[e.isOpen]),Object(a.jsx)(b,{onSubmit:function(a){a.preventDefault(),e.onUpdateParce({name:t.current.value,link:n.current.value})},buttonDisabled:i,isOpen:e.isOpen,onClose:e.onClose,title:"\u041d\u043e\u0432\u043e\u0435 \u043c\u0435\u0441\u0442\u043e",nameButton:e.loading?"...\u0417\u0430\u0433\u0440\u0443\u0437\u043a\u0430":"+",containerInput:Object(a.jsxs)(a.Fragment,{children:[Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{ref:t,type:"text",required:!0,onChange:l,className:"popup__input popup__input_type_name",placeholder:"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435",minLength:"2",maxLength:"32",autoComplete:"off"}),Object(a.jsx)("span",{className:"error",children:e.isOpen&&""})]}),Object(a.jsxs)("div",{className:"input-container",children:[Object(a.jsx)("input",{ref:n,type:"url",required:!0,onChange:l,className:"popup__input popup__input_type_link-url",placeholder:"\u0421\u0441\u044b\u043b\u043a\u0430 \u043d\u0430 \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",autoComplete:"off"}),Object(a.jsx)("span",{className:"error",children:e.isOpen&&""})]})]})})};var v=function(e){return Object(a.jsx)("div",{className:"popup popup__image ".concat(e.card&&"popup_is-opened"),children:Object(a.jsxs)("div",{className:"popup__container",children:[Object(a.jsx)("img",{onClick:e.onClose,src:h,alt:"\u0437\u0430\u043a\u0440\u044b\u0442\u044c \u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0443",className:"popup__close popup__close-image"}),Object(a.jsx)("img",{src:e.card,alt:"\u043a\u0430\u0440\u0442\u0438\u043d\u043a\u0430",className:"popup__image-big"})]})})},x=n(7),C=new function e(){Object(x.a)(this,e),this.getUserInfo=function(){return fetch("https://nomoreparties.co/cohort12/users/me",{headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.getInitialCards=function(){return fetch("https://nomoreparties.co/cohort12/cards",{headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.sendUserInfo=function(e,t){return fetch("https://nomoreparties.co/cohort12/users/me",{method:"PATCH",headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0","Content-Type":"application/json"},body:JSON.stringify({name:e,about:t})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.addCard=function(e){return fetch("https://nomoreparties.co/cohort12/cards",{method:"POST",headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0","Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.editLike=function(e,t){return fetch("https://nomoreparties.co/cohort12/cards/like/".concat(e),{method:t?"PUT":"DELETE",headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.deleteCard=function(e){return fetch("https://nomoreparties.co/cohort12/cards/".concat(e),{method:"DELETE",headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0"}}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))},this.changeAvatar=function(e){return fetch("https://nomoreparties.co/cohort12/users/me/avatar",{method:"PATCH",headers:{authorization:"d4572fc5-fe6c-4e19-8131-2e629bd6f3d0","Content-Type":"application/json"},body:JSON.stringify({avatar:e})}).then((function(e){return e.ok?e.json():Promise.reject(e.status)})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))}))}};var N=function(){var e=o.a.useState(!1),t=Object(u.a)(e,2),n=t[0],c=t[1],r=o.a.useState(!1),i=Object(u.a)(r,2),p=i[0],f=i[1],j=o.a.useState(!1),h=Object(u.a)(j,2),b=h[0],x=h[1],N=o.a.useState(),k=Object(u.a)(N,2),y=k[0],S=k[1],P=o.a.useState({name:"",avatar:"",about:"",_id:""}),E=Object(u.a)(P,2),I=E[0],L=E[1],U=o.a.useState([]),D=Object(u.a)(U,2),A=D[0],T=D[1],B=o.a.useState(!1),F=Object(u.a)(B,2),z=F[0],q=F[1],J=function(){c(!1),f(!1),x(!1),S()};return o.a.useEffect((function(){C.getUserInfo().then((function(e){return L(e)})),C.getInitialCards().then((function(e){return T(e)}))}),[]),Object(a.jsx)("div",{className:"App",children:Object(a.jsxs)(l.Provider,{value:I,children:[Object(a.jsx)(d,{}),Object(a.jsx)(m,{onEditProfile:function(){return c(!n)},onAddPlace:function(){return f(!p)},onEditAvatar:function(){return x(!b)},onCardClick:function(e){return S(e)},cards:A,onCardLike:function(e){var t=e.likes.some((function(e){return e._id===I._id}));C.editLike(e._id,!t).then((function(t){var n=A.map((function(n){return n._id===e._id?t:n}));T(n)}))},onCardDelete:function(e){C.deleteCard(e._id).then((function(){var t=A.filter((function(t){return t._id!==e._id}));T(t)}))}}),Object(a.jsx)(v,{card:y,onClose:J}),Object(a.jsx)(_,{onUpdateUser:function(e){q(!0),C.sendUserInfo(e.name,e.about).then((function(e){L(e),J()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return q(!1)}))},isOpen:n,onClose:J,loading:z}),Object(a.jsx)(g,{onUpdateParce:function(e){q(!0),C.addCard(e).then((function(e){T([].concat(Object(s.a)(A),[e])),J()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return q(!1)}))},isOpen:p,onClose:J,loading:z}),Object(a.jsx)(O,{onUpdateAvatar:function(e){q(!0),C.changeAvatar(e.avatar).then((function(e){L(e),J()})).catch((function(e){return console.log("\u041e\u0448\u0438\u0431\u043a\u0430: ".concat(e))})).finally((function(){return q(!1)}))},isOpen:b,onClose:J,loading:z})]})})},k=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,16)).then((function(t){var n=t.getCLS,a=t.getFID,c=t.getFCP,o=t.getLCP,r=t.getTTFB;n(e),a(e),c(e),o(e),r(e)}))};i.a.render(Object(a.jsx)(o.a.StrictMode,{children:Object(a.jsx)(N,{})}),document.getElementById("root")),k()}},[[15,1,2]]]);
//# sourceMappingURL=main.0527af0d.chunk.js.map