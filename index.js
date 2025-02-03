document.addEventListener("DOMContentLoaded", function () {
    var bnWrong = document.getElementById('wrong-answer');
    var bnRight = document.getElementById('correct-answer');
    
    function initBn() {
        let btnRect = bnWrong.getBoundingClientRect();
        let spaceWidth = window.innerHeight - btnRect.height;
        let spaceHeight = window.innerWidth - btnRect.width;

        bnWrong.addEventListener('click', function moveCircle() {
            bnWrong.style.position = "absolute"; 
            bnWrong.style.top = Math.round(Math.random() * spaceWidth) + 'px';
            bnWrong.style.left = Math.round(Math.random() * spaceHeight) + 'px';

            let currentWidth = bnWrong.offsetWidth;
            let currentHeight = bnWrong.offsetHeight;

            let newWidth = currentWidth * 0.9; 
            let newHeight = currentHeight * 0.9;

            if (newWidth > 20 && newHeight > 10) {
                bnWrong.style.width = newWidth + 'px';
                bnWrong.style.height = newHeight + 'px';
                bnWrong.style.fontSize = (parseFloat(window.getComputedStyle(bnWrong).fontSize) * 0.9) + 'px';
            }

            let currentWidth2 = bnRight.offsetWidth;
            let currentHeight2 = bnRight.offsetHeight;

            let newWidth2 = currentWidth2 * 1.1;
            let newHeight2 = currentHeight2 * 1.1;

            if (newWidth2 < 500 && newHeight2 < 500) {
                bnRight.style.width = newWidth2 + 'px';
                bnRight.style.height = newHeight2 + 'px';

                let currentTop = parseFloat(window.getComputedStyle(bnRight).top) || 0;
                let currentLeft = parseFloat(window.getComputedStyle(bnRight).left) || 0;

                bnRight.style.top = (currentTop - newHeight2 * 0.05) + 'px'; 
                bnRight.style.left = (currentLeft - newWidth2 * 0.05) + 'px'; 

                bnRight.style.fontSize = (parseFloat(window.getComputedStyle(bnRight).fontSize) * 1.1) + 'px';
            }
        });
    }

    initBn();
});

