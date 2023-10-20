const electronic_filter = document.querySelector('.ele');
const fashion_filter = document.querySelector('.fash');
const food_filter = document.querySelector('.foo');
const kid_filter = document.querySelector('.kid');
const home_filter = document.querySelector('.hom');
const book_filter = document.querySelector('.books');

async function getData() {
    const res = await fetch('./items.json');
    const data = await res.json();
    console.log(data);
}

function init(){
    document.addEventListener('DOMContentLoaded',getData)
}

init()


// // const master_filter = document.querySelectorAll('.ele' ,'.fash','.foo','.kid','.hom','.books')
// const items = document.querySelectorAll('.item');

// const filter = (key) => {
//     items.forEach((item) => {
//         if (!item.classList.contains(key)) {
//             item.style.display = 'none';
//         }
//     });
// };
// const unfilter = (key) => {
//     items.forEach((item) => {
//         if (!item.classList.contains(key)) {
//             item.style.display = 'block';
//         }
//     });
// };
// const filterOutElec = () => {
//     electronic_filter.style.backgroundColor = '#ccc';
//     filter('electronics');
// };
// const unfilterElec = () => {
//     electronic_filter.style.backgroundColor = '#ffffff';
//     unfilter('electronics');
// };
// const filterOutFash = () => {
//     fashion_filter.style.backgroundColor = '#ccc';
//     filter('fashion');
// };
// const unfilterFash = () => {
//     fashion_filter.style.backgroundColor = '#ffffff';
//     unfilter('fashion');
// };
// const filterOutFood = () => {
//     food_filter.style.backgroundColor = '#ccc';
//     filter('food');
// };
// const unfilterFood = () => {
//     food_filter.style.backgroundColor = '#ffffff';
//     unfilter('food');
// };
// const filterOutKid = () => {
//     kid_filter.style.backgroundColor = '#ccc';
//     filter('kids');
// };
// const unfilterKid = () => {
//     kid_filter.style.backgroundColor = '#ffffff';
//     unfilter('kids');
// };
// const filterOutHome = () => {
//     home_filter.style.backgroundColor = '#ccc';
//     filter('home');
// };
// const unfilterHome = () => {
//     home_filter.style.backgroundColor = '#ffffff';
//     unfilter('home');
// };
// const filterOutBook = () => {
//     book_filter.style.backgroundColor = '#ccc';
//     filter('book');
// };
// const unfilterBook = () => {
//     book_filter.style.backgroundColor = '#ffffff';
//     unfilter('book');
// };
// electronic_filter.addEventListener('click', filterOutElec);
// fashion_filter.addEventListener('click', filterOutFash);
// food_filter.addEventListener('click', filterOutFood);
// kid_filter.addEventListener('click', filterOutKid);
// home_filter.addEventListener('click', filterOutHome);
// book_filter.addEventListener('click', filterOutBook);

// electronic_filter.addEventListener('dblclick',unfilterElec);
// fashion_filter.addEventListener('dblclick',unfilterFash);
// food_filter.addEventListener('dblclick',unfilterFood);
// kid_filter.addEventListener('dblclick',unfilterKid);
// home_filter.addEventListener('dblclick',unfilterHome);
// book_filter.addEventListener('dblclick',unfilterBook);

// // console.log(ele)