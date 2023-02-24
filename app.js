const input = document.getElementById('input');
const firsth2 = document.querySelector('.firsth2');
const secondh2 = document.querySelector('.secondh2');
input.addEventListener('keyup', submit);

function submit() {
    event.preventDefault();
    if (input.value === '') {
        secondh2.innerText = '0 vowels!';
        firsth2.innerText = input.value;
    }
    else {
        display();
        const text = input.value;
        const redex = /[aeiou]/gi;
        const count = text.match(redex);
        const result = count.length;
        secondh2.innerText = `${result} vowels!`;
    }
};

function display() {
    firsth2.innerText = input.value;
};