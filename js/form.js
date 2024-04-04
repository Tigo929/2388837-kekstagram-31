const pageBody = document.querySelector('body');
const inputUserFile = document.querySelector('.img-upload__input');
const modalBlock = document.querySelector('.img-upload__overlay');
const btnClose = document.querySelector('.img-upload__cancel');
const form = document.querySelector('.img-upload__form');
const userValue = document.querySelector('.text__hashtags');

const pristineHashtag = new Pristine(form, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});

const onAndOffModal = () => {
  inputUserFile.addEventListener('change', () => {
    modalBlock.classList.remove('hidden');
    pageBody.classList.add('modal-open');
    inputUserFile.value = '';
  });

  btnClose.addEventListener('click', () => {
    modalBlock.classList.add('hidden');
    pageBody.classList.remove('modal-open');
  });

  document.addEventListener('keydown', (evt) => {
    if (evt.key === 'Escape') {
      modalBlock.classList.add('hidden');
      pageBody.classList.remove('modal-open');
    }
  });
};
onAndOffModal();

const fnCheckValidUserHashtagValue = (value) => {
  const regex =
    /^#[a-zA-Zа-яА-Я0-9]{1,19}(?:\s#[a-zA-Zа-яА-Я0-9]{1,19}){0,4}$/i;
  return regex.test(value);
};

const fnMassangeError = () => {
  const errorText =
    'Начало строки должно начинаться с "#" хештег не должен превышать до 20 символов';
  return errorText;
};
pristineHashtag.addValidator(
  userValue,
  fnCheckValidUserHashtagValue,
  fnMassangeError
);

pristineHashtag.validate();

const UserValueComment = document.querySelector('.text__description');
const pristineComment = new Pristine(UserValueComment, {
  classTo: 'img-upload__field-wrapper',
  errorClass: 'img-upload__field-wrapper--error',
  errorTextParent: 'img-upload__field-wrapper',
  errorTextTag: 'div',
});

const fnCheckValidUserCommentValue = (value) => {
  const regex = /^.{0,140}$/;
  return regex.test(value);
};

const fnCommentError = () => {
  const error = 'Допустимое количество символов до 140';
  return error;
};
pristineComment.addValidator(
  UserValueComment,
  fnCheckValidUserCommentValue,
  fnCommentError
);

UserValueComment.addEventListener('keydown', (evt) => {
  if (evt.key === 'Escape') {
    evt.stopPropagation();
  }
});
pristineComment.validate();

const btnSmaller = document.querySelector('.scale__control--smaller');
const btnmore = document.querySelector('.scale__control--bigger');
const resultZoom = document.querySelector('.scale__control--value');
const img = document.querySelector('.img-upload__preview img');

let scale = 1;
const SCALE_STEP = 0.25;
const onSmallerClick = () => {
  if (scale > SCALE_STEP) {
    scale = scale - SCALE_STEP;
    img.style.transform = `scale(${scale})`
    resultZoom.value = scale * 100 + '%'
  }
}

const onMoreClick = () => {
  if (scale < 1) {
    scale = scale + SCALE_STEP;
    img.style.transform = `scale(${scale})`
    resultZoom.value = scale * 100 + '%'
  }
}
btnSmaller.addEventListener('click', onSmallerClick);
btnmore.addEventListener('click', onMoreClick);


const slider = document.querySelector('.effect-level__slider');
const valueSlider = document.querySelector('.effect-level__value');
noUiSlider.create(slider, {
  start: 0,
  connect: 'lower',
  range: {
    'min': 0,
    'max': 1,
  },
  format: {
    to: (value) => {
      return Number.isInteger(value) ? value.toFixed(0) : value.toFixed(1);
    },
    from: (value) => {
      return parseFloat(value);
    }
  }
});
slider.noUiSlider.on('update',()=>{
  valueSlider.value= slider.noUiSlider.get();
})
