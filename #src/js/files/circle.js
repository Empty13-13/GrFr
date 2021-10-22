document.addEventListener("DOMContentLoaded", () => {
  let arrows = document.querySelectorAll('._arrow-circle');
  let circle = document.querySelector('.circle')
  let circleItem = document.querySelectorAll('.circle__item div');
  let circleItemLi = document.querySelectorAll('.circle__item');
  let images = document.querySelectorAll('.circle__img');
  let texts = document.querySelectorAll('.texts__li');



//Если нашли элементы
  if (arrows.length && circle) {
    let leftArrow = arrows[0];
    let rightArrow = arrows[1];
    let angleCircle = 0
    let activeIndex = 0
    let oldIndex = 0;

    leftArrow.addEventListener("click", () => goTo(activeIndex + 1));
    rightArrow.addEventListener("click", () => goTo(activeIndex - 1));


    goTo(activeIndex)
    function changeActive(num) {
      circleItemLi.forEach(item => {
        item.classList.remove("_active")
      })

      //Назначаем номера
      circleItem.forEach((item, i) => {
        let index = activeIndex + i;
        index > 9 ? index = index - circleItem.length : null;
        index < 1 ? index = circleItem.length - index : null;

        item.classList.remove('_1', '_2', '_3', '_4', '_5', '_6', '_7', '_8', '_9', '_active')
        item.classList.add(`_${index}`)
      })

      let activeItem = document.querySelector('.circle__btn._9').parentNode;
      activeItem.classList.add("_active")

      images.forEach(item=>{
        item.classList.remove("_active")
      })
      images[circleItemLi.length - activeIndex].classList.add("_active")

      texts.forEach(item=>{
        item.classList.remove("_active")
      })
      texts[circleItemLi.length - activeIndex].classList.add("_active")
    }

    function goTo(num) {
      oldIndex = activeIndex
      activeIndex = num
      if (activeIndex > 9) {
        activeIndex = 1
      }
      if (activeIndex < 1) {
        activeIndex = 9
      }
      changeActive(num)
      rotateTo(num)
    }

    function rotateTo(num, pos = 1) {
      let laterAngle = angleCircle;
      let oldAngle = (pos * 40 * oldIndex)
      let newAngle = (pos * 40 * num);
      let angleMove = oldAngle - newAngle
      let absAngleMove = Math.abs(angleMove)
      if (absAngleMove === 360 || absAngleMove === 0) {
        return
      }

      if (angleMove > 180) {
        angleMove = -(360 - angleMove)
      }
      if (angleMove < -180) {
        angleMove = (360 + angleMove)
      }


      angleCircle = laterAngle - angleMove

      circle.style.transform = `rotate(${angleCircle}deg)`;

      //Переворачиваем надписи
      circleItemLi.forEach(item => {
        item.style.transform = `rotate(${-angleCircle}deg)`;
      })
      images.forEach(item => {
        item.style.transform = `rotate(${-angleCircle}deg)`;
      })
    }


    circleItemLi.forEach((item, index) => {
      item.addEventListener("click", function (e) {
        goTo(circleItemLi.length - (index))
      });
    })
  }
});
