function typeWriter(string, location) {
    let textLocation = document.getElementById(location);
    let letters = String(string).split("");
    for (let step = 0; step < letters.length; step++) {
        setTimeout(function() {
            textLocation.innerHTML += letters[step];
            if (step === letters.length - 1) {
                setTimeout(function() {
                    clearText(location);
                }, 4000);
            }
        }, 100 * step);
    }
}

function clearText(location) {
    let textLocation = document.getElementById(location);
    textLocation.innerHTML = "";
}

const carouselText = ["Programmer.", "Graphic Designer.", "Web Developer.", "Photographer."];
function writeAndClear(array, location) {
    let step = 0;

    function loop() {
        setTimeout(function() {
            typeWriter(array[step], location);
            step++;
            if (step >= array.length) {
                step = 0;
                setTimeout(function() {
                    clearText(location);
                }, 4000);
            }
            loop();
        }, 6000);
    }

    loop();
}

window.addEventListener('load', function() {
    writeAndClear(carouselText, 'typeWriter');
});
