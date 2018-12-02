var elem = document.querySelectorAll('.element'),
    wrap = document.getElementById('dnd-wrap'),
    elemIndex = document.querySelectorAll('.element'),
    elemArray = [];

for (var i = 0; i < elemIndex.length; i++){
    var topPadding = Math.floor(Math.random() * 300) + 1;
        leftPadding = Math.floor(Math.random() * 300) + 1;

    elemIndex[i].style.top = topPadding + 'px';
    elemIndex[i].style.left = leftPadding + 'px';
    elemArray.push(elemIndex[i]);
}

document.addEventListener('mousedown',function(e) {
    var t = e.target;

    if ( t.classList.contains('close') ){
        var indexEl = elemArray.indexOf(t.parentNode);
        elemArray.splice(indexEl, 1);
        t.parentNode.remove();
    }

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
        };

        console.log(t.childNodes[1].classList.toggle('display'));
    }
    
});