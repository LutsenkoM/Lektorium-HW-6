var elem = document.querySelectorAll('.element'),
    wrap = document.getElementById('dnd-wrap');
    // elemIndex = document.querySelectorAll('.element'),
    // elemArray = [];


// for (var i = 0; i < slideIndex.length; i++){
//     elemArray.push(slideIndex[i]);
//
// }

document.addEventListener('mousedown',function(e) {
    var t = e.target;

    if ( t.classList.contains('element') ){

        t.classList.add('grabbing');

        t.ondragstart = function() {
            return false;
        };
        console.log(t);

        t.style.position = 'absolute';
        moveAt(e);
        document.body.appendChild(t);

        t.style.zIndex = 1000;

        function moveAt(e) {
            t.style.left = e.pageX - t.offsetWidth / 2 + 'px';
            t.style.top = e.pageY - t.offsetHeight / 2 + 'px';
        }

        document.onmousemove = function(e) {
            moveAt(e);
        };

        t.onmouseup = function() {
            t.classList.remove('grabbing');
            document.onmousemove = null;
            t.onmouseup = null;
        }
    }
    
});