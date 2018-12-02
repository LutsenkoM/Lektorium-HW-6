var slidesArray = [],
    slidesContainer = document.getElementById('slides-container'),
    slideIndex = document.querySelectorAll('.slide'),
    slidesWindow = document.getElementById('slider-window'),
    nextArrow = document.getElementById('next-arrow'),
    prevArrow = document.getElementById('prev-arrow'),
    j = 0,
    left = 0,
    slidesContainerWidth = 0,
    slidesWidthCount = 0;

for (var i = 0; i < slideIndex.length; i++){
    slidesArray.push(slideIndex[i]);
    slidesContainerWidth += slideIndex[i].offsetWidth ;
    slidesWidthCount = slidesContainerWidth -  slideIndex[slideIndex.length - 1].offsetWidth
}

slidesContainer.style.width = slidesContainerWidth + "px";
var slidesCount = slidesArray.length;

function nextSlide() {
    j ++;
    if ( slidesCount == j) {
        j = 0;
    }

    if ( slidesWidthCount <= left){
        left = 0;
    } else {
        left += slidesArray[j].offsetWidth;
    }

    slidesContainer.style.left = - left + 'px';
    console.log(j);
}

function prevSlide() {
    j--;

    if ( j < 0) {
        j = slidesCount - 1;
        left = slidesWidthCount;
    } else {
        left -= slidesWidthCount - slidesArray[j].offsetWidth;
    }

    slidesContainer.style.left = - left + 'px';

    console.log(j);
}



nextArrow.onclick = nextSlide;
slidesWindow.onclick = nextSlide;
prevArrow.onclick = prevSlide;