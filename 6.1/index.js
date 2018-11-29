var slidesArray = [],
    slideIndex = document.querySelectorAll('.slide'),
    nextArrow = document.getElementById('next-arrow'),
    prevArrow = document.getElementById('prev-arrow'),
    j = 0 ;

for (var i = 0; i < slideIndex.length; i++){
    slidesArray.push(slideIndex[i]);
    if ( i !==0 ) {
        slideIndex[i].classList.add('d-none');
    }
}

var slidesCount = slidesArray.length;

function nextSlide() {
    j ++;

    if ( slidesCount == j) {
        j = 0;
        slidesArray[slidesCount-1].classList.add('d-none');
    }
    slidesArray[j].classList.remove('d-none');

    if ( j !==0 ) {
        slidesArray[j-1].classList.add('d-none');
    }
    console.log(j);
}

function prevSlide() {
    j--;

    if ( j < 0) {
        j = slidesCount;
        // slidesArray[0].classList.add('d-none');
    }

    // if ( j == slidesCount - 1 ) {
    //     // slidesArray[0].classList.add('d-none');
    //     // slidesArray[slidesCount - 1].classList.add('d-none');
    //     slidesArray[0].classList.add('d-none');
    // }
    //
    // // if ( j !== slidesCount) {
    //     slidesArray[j].classList.remove('d-none');
    //     slidesArray[j+1].classList.add('d-none');
    // // }

    console.log(j);
}



nextArrow.onclick = nextSlide;
prevArrow.onclick = prevSlide;

// console.log(slidesCount);
