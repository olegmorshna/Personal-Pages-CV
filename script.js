//=================== SLIDER OF IMAGES =====================//

const slides = Array.from(document.querySelectorAll('img')); //массив  слайдов
const next = document.getElementById('next'); //кнопка вперед
const prev = document.getElementById('prev'); //вкнопка назад

let i = 0;

const nextSlide = () => {
    slides[i].classList.remove('active');
    i = i + 1;
    if (i == slides.length) i = 0; //когда счетчик вышел за пределы массива (i=6)то вернуться на 1ый слайд
    slides[i].classList.add('active');
}

const prevSlide = () => {
    slides[i].classList.remove('active');
    i = i - 1;
    if (i < 0) i = slides.length - 1;//когда счетчик вышел за пределы массива (i<0)то вернуться на посл. слайд
    slides[i].classList.add('active');
}

//================== end of SLIDER of IMAGES ============================//
//=================== SLIDER of INFOTEXT ======================================//
const slidesText = Array.from(document.querySelectorAll('.info')); //массив текстовых элементов номер слайда, описание, ссылка

let j = 0;

const nextSlideText = () => {
    slidesText[j].classList.remove('active');
    j = j + 1;
    if (j == slidesText.length) j = 0; //когда счетчик вышел за пределы массива (j=6)то вернуться на 1-ый текст
    slidesText[j].classList.add('active');
}

const prevSlideText = () => {
    slidesText[j].classList.remove('active');
    j = j - 1;
    if (j < 0) j = slidesText.length - 1;//когда счетчик вышел за пределы массива (j<0)то вернуться на посл. текст
    slidesText[j].classList.add('active');
}

prev.addEventListener('click', prevSlide);
prev.addEventListener('click', prevSlideText);
next.addEventListener('click', nextSlide);
next.addEventListener('click', nextSlideText); // синтаксис: только 1 функция call-back  после события)

//========================= end of SLIDER INFOTEXT ==============================//
