let lang = document.querySelectorAll('._lang');
lang.forEach(item => {
  item.addEventListener("click", () => {
    lang.forEach(langItem => {
      langItem.classList.remove('_active')
    })
    item.classList.add('_active')
  })
})

let menuLinks = document.querySelectorAll('.menu__list li a');
if (!!menuLinks) {
  menuLinks[0].classList.add('_active')
}

let langs = document.querySelectorAll('._lang');
let deBtn, frBtn;
if (langs) {
  deBtn = langs[0]
  frBtn = langs[1]
  let lang = window.location.pathname.split('/')[1]

  langs.forEach(item => {
    item.classList.remove('_active')
  })

  if (lang === "de") {
    deBtn.classList.add('_active')
  } else if (lang === "fr") {
    frBtn.classList.add('_active')
  }
}

// region question
document.addEventListener("DOMContentLoaded", () => {
  let textsAnswer = document.querySelectorAll('.list-question__answer');
  if (!!textsAnswer) {
    textsAnswer.forEach(item => {
      let heightItem = window.getComputedStyle(item).height.replaceAll('px', '')
      let lineHeight = window.getComputedStyle(item).lineHeight.replaceAll('px', '')
      let heightLike = window.getComputedStyle(item.querySelector('.like')).height.replaceAll('px', '')
      if (lineHeight * 2 + heightLike > heightItem) {
        item.classList.add('_more')
        item.style.cssText = "height:" + lineHeight * 2 + "px"
        item.addEventListener("click", function (e) {
          if (item.classList.contains('_active')) {
            item.classList.remove('_active')
            item.style.cssText = "height:" + lineHeight * 2 + "px"
          } else {
            item.classList.add('_active')
            item.style.cssText = "height:" + heightItem + "px"
          }
        });
      }

      let likes = item.querySelectorAll('.like__btn');
      if (!!likes) {
        likes.forEach(like => {
          like.addEventListener("click", function (e) {
            item.querySelector('.like__btn._active')?.classList.remove('_active');
            like.classList.add('_active')
          });
        })
      }
    })
  }

});

// endregion

// region checkbox Instrument
let checkOriginal = document.querySelector('#checkboxInstruments');
let checkFake = document.querySelector('.form-instruments__checkbox');
if (!!checkOriginal) {
  checkFake.addEventListener("click",function(e) {
    checkFake.classList.toggle('_active')
    checkOriginal.checked = !checkOriginal.checked
  });
}
// endregion