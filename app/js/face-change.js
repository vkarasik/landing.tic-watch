window.addEventListener('DOMContentLoaded', function () {
    // Change Face TicPro
    function changeFace() {
        var faces = document.querySelectorAll('.ticpro-faces__face');

        if (faces == null) return;

        var random = Math.round(Math.random() * (faces.length - 1));
        var positionX = Math.round(Math.random() * 6) * (-100);
        var positionY = Math.round(Math.random() * 5) * (-100);
        var positionXY = positionX + 'px ' + positionY + 'px';
        faces[random].style.backgroundPosition = positionXY;

        setTimeout(changeFace, 1500);
    }

    changeFace();
})