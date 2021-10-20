let lang = document.querySelectorAll('._lang');
lang.forEach(item => {
  item.addEventListener("click",() => {
    lang.forEach(langItem => {
      langItem.classList.remove('_active')
    })
    item.classList.add('_active')
  })
})