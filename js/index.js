'use strict';

// 1) По нажатию на кнопку изменить текст самой кнопки (см. textContent).

const btn = document.querySelector('.js-btn');
btn.addEventListener('click', function() {
  if(btn.innerText.toLowerCase() === 'less') {
    btn.innerText = 'More';
  }
  else {
    btn.innerText = 'Less';
  }
});

// 2) При нажатии на кнопку меняйте рандомно ее цвет.
const btnColor = document.querySelector('.js-btn-color');
btnColor.addEventListener('click', function () {
  this.style.background = randomColors();
})
function randomColors() {
  return '#' + Math.floor( Math.random() * 16777215).toString(16);
}

// 3) Отобразить картинку. Сделать так, что бы при появлении страницы отображалась одна картинка, а при наведении мыши на неё отображалась другая.
const slides = [
  {
    src: 'https://photar.ru/wp-content/uploads/2021/04/Zak-van-Biljon-17.jpg',
    alt: 'lanscape 1',
  },
  {
    src: 'https://i.pinimg.com/originals/cc/11/66/cc11665c0f6565ab973907a73fa7d8b5.jpg',
    alt: 'lanscape 2',
  },
  {
    src: 'https://cameralabs.org/media/k2/items/cache/b19561bfe5acb7716f4100f417429700_L.jpg',
    alt: 'lanscape 3',
  },
  {
    src: 'https://7oom.ru/wp-content/uploads/peizaji-01.jpg',
    alt: 'lanscape 4',
  },
];

const imgChange = document.querySelector('.js-change-picture');
imgChange.src = slides[0].src
imgChange.addEventListener('mouseover', function (e) {
  this.src = slides[1].src;

  setTimeout(function() {
    e.target.src = slides[0].src;
  }, 500);

}, false)

// 4) Дан элемент #elem. Реализуйте:
// При клике на него, меняйте у него последовательно три класса (для красного, желтого и синего цветов)
// (https://developer.mozilla.org/ru/docs/Web/API/Element/classList).


const myColors = ['red' , 'green' , 'blue' ];
let counter = 0;

document.querySelector('#elem').addEventListener('click', function(){
  if(counter >= myColors.length) counter = 0;
    for (let i = 0; i < myColors.length; i++) {
      this.classList.remove(myColors[i])
    } 
    this.classList.add(myColors[counter]);
    this.style.color = 'white';
    counter++;
})

// 5) Добавить слайду описание (description).
// *Advanced:
// Доделать анимацию появления следующего кадра в слайдере или добавить по бокам от основной картинки предыдущую и следующую по схеме.
// Пример анимации на сайте внизу:
// https://pixelbuddha.net/livepreview/activebox/
// Пример расположения 3-х картинок в слайдере в прикрепленном файле.


try {
  const slider = new Slider(slides, 0);

  const imgEl = document.querySelector('.img-wrapper>img');
  const [prevBtn, nextBtn] = document.querySelectorAll('.btn-slider');

  updateSlide(slider.currentSlide);

  nextBtn.onclick = () => {
    slider.incSlideIndex();

    updateSlide(slider.currentSlide);
  };

  prevBtn.onclick = () => {
    slider.decSlideIndex();

    updateSlide(slider.currentSlide);
  };

  function updateSlide(currentSlide) {
    imgEl.src = currentSlide.src;
    imgEl.alt = currentSlide.alt;
  }
} catch (e) {
  console.log('e :>> ', e);
  const imgEl = document.querySelector('.img-wrapper>img');
  imgEl.src =
    'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSOVvXR57AwEbzurnmhGSOfeW-xxviWubWn5Q&usqp=CAU';
}