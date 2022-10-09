// Typing effect - Header

const heading = ['których potrzebujesz!', 'których pragniesz!', 'które zarabiają!', 'które przyciągają!', 'które działają!'];
const title = document.querySelector('.write-script');
let iterator = 0
let index = 0
let currentPhrase = []
let isDelete = false
let isEnd = false


const typeMachine = () => {
    isEnd = false;
    title.textContent = currentPhrase.join('')

    if (iterator < heading.length) {

        if (!isDelete && index <= heading[iterator].length) {
            currentPhrase.push(heading[iterator][index])
            index++
            title.textContent = currentPhrase.join('');
        }

        if (isDelete && index <= heading[iterator].length) {
            currentPhrase.pop(heading[iterator][index])
            index--
            title.textContent = currentPhrase.join('');
        }

        if (index === heading[iterator].length) {
            isEnd = true;
            isDelete = true;
        }

        if (isDelete && index === 0) {
            currentPhrase = [];
            isDelete = false
            iterator++
            if (iterator === heading.length)
                iterator = 0
        }
    }

    const speedUp = Math.random() * (80 - 50) + 50
    const normalSpeed = Math.random() * (300 - 200) + 200
    const time = isEnd ? 2000 : isDelete ? speedUp : normalSpeed;
    setTimeout(typeMachine, time);
}

typeMachine()

// Menu 

const menuEl = document.querySelectorAll('.menu');
const burger = document.querySelector('.burger');
const allNavItems = document.querySelectorAll('.nav-item')

const handleMenu = () => {
    menuEl.forEach(el => {
        el.classList.toggle('active')
    })

    handleNavItemsAnimation()
}

const handleNavItemsAnimation = () => {
    let delayTime = 0;

    allNavItems.forEach((item) => {
        item.classList.toggle("nav-items-animation");
        item.style.animationDelay = `.${delayTime}s`;
        delayTime++;
        item.addEventListener('click', handleMenu)
    });
};

burger.addEventListener('click', handleMenu)