document.addEventListener('DOMContentLoaded', function () {
    const dynamicText = document.querySelector('.dynamic-text');

    const texts = [
        'a Software Engineer',
        'a Web Developer',
        'an Artist',
        'a Gamer'
    ];

    let index = 0;
    let charIndex = 0;
    let isDeleting = false;

    function type() {
        const currentText = texts[index];
        if (isDeleting) {
            dynamicText.textContent = currentText.substring(0, charIndex - 1);
            charIndex--;
        } else {
            dynamicText.textContent = currentText.substring(0, charIndex + 1);
            charIndex++;
        }

        if (!isDeleting && charIndex === currentText.length + 1) {
            isDeleting = true;
            setTimeout(type, 1000);
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            index++;
            if (index === texts.length) {
                index = 0;
            }
            setTimeout(type, 500);
        } else {
            setTimeout(type, 100);
        }
    }

    type();
});
