const input = document.getElementById('input');
const firsth2 = document.querySelector('.firsth2');
const secondh2 = document.querySelector('.secondh2');
input.addEventListener('keyup', submit);

function submit() {
    event.preventDefault();
    display();
    const text = input.value;
    const redex = /[aeiou]/gi;
    const count = text.match(redex);
    const result = count.length;
    secondh2.innerText = `${result} vowels!`;
}

function display() {
    firsth2.innerText = input.value;
}