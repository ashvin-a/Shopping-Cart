const electronic_filter = document.querySelector('.ele');
const fashion_filter = document.querySelector('.fash');
const food_filter = document.querySelector('.foo');
const kid_filter = document.querySelector('.kid');
const home_filter = document.querySelector('.home');
const book_filter = document.querySelector('.books');

const items = document.querySelectorAll('.item');

const filterOutElec = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('ele')) {
            item.style.display = 'none';
        }
    });
};
const filterOutFash = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('fash')) {
            item.style.display = 'none';
        }
    });
};
const filterOutFood = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('foo')) {
            item.style.display = 'none';
        }
    });
};
const filterOutKid = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('kids')) {
            item.style.display = 'none';
        }
    });
};
const filterOutHome = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('home')) {
            item.style.display = 'none';
        }
    });
};
const filterOutBook = (e) => {
    items.forEach((item) => {
        if (!item.classList.contains('book')) {
            item.style.display = 'none';
        }
    });
};

electronic_filter.addEventListener('click', filterOutElec);
fashion_filter.addEventListener('click', filterOutFash);
food_filter.addEventListener('click', filterOutFood);
kid_filter.addEventListener('click', filterOutKid);
home_filter.addEventListener('click', filterOutHome);
book_filter.addEventListener('click', filterOutBook);
