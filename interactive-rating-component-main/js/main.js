const mainCard = document.getElementById('main-card');
const thankCard = document.getElementById('thank-card');
const submitButtom = document.getElementById('rating-submit');
const radioButtons = document.getElementsByClassName('rating-radio');
const ratingSpan = document.getElementById('rating');

let rating = -1;

submitButtom.addEventListener('click', (e) => {
    e.preventDefault();
    if (rating != -1) {
        mainCard.style.display = 'none';
        thankCard.style.display = 'flex';
        ratingSpan.innerText = rating;
    }
});

for (let radioItem  of radioButtons) {
    const val = radioItem.value;
    radioItem.addEventListener('click', () => {
        rating = +val;
    })
}
