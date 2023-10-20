const grid = document.querySelector('.item-grid');
const filter = document.querySelector('.filter');
const add = document.getElementById('addtocart');

function addToCart(e) {
    e.preventDefault();
    console.log('heh');
}

function filterIt(e) {
    const items = document.querySelectorAll('.item');
    e.target.classList.toggle('active');
    if (e.target.classList.contains('active')) {
        items.forEach((item) => {
            if (!e.target.classList.contains(item.classList[0])) {
                item.style.display = 'none';
            }
        });
    } else {
        items.forEach((item) => {
            if (!e.target.classList.contains(item.classList[0])) {
                item.style.display = 'block';
            }
        });
    }
}
function buildPage(data) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const addToCart = document.createElement('div');
    const tag = document.createElement('div');
    tag.className = 'tag';
    addToCart.id = 'addtocart';
    addToCart.style.textAlign = 'justify';
    div.className = data.class;
    div2.className = data.class;
    tag.innerHTML = `<span class='name'>${data.name}</span>
    <span class='price'>₹${data.price}</span>`;
    addToCart.innerHTML = `<button>Add to Cart</button>`;
    div.appendChild(div2);
    div.style.boxShadow = '10px 10px 10px 10px rgba(0, 0, 0, 0.2)';
    div.classList.add('item');
    div2.innerHTML = `<img src="images/${data.image}" alt="" />`;
    if (
        div.classList.contains('books') ||
        div.classList.contains('food') ||
        div.classList.contains('kids')
    ) {
        div2.innerHTML = `<img src="images/${data.image}" alt=""
        style="width:170px"/>`;
    }
    div2.appendChild(tag);
    div2.appendChild(addToCart);
    grid.appendChild(div);
}

async function getData() {
    const res = await fetch('./items.json');
    const datas = await res.json();

    datas.forEach((data) => {
        buildPage(data);
    });
}

function init() {
    document.addEventListener('DOMContentLoaded', getData);
    filter.addEventListener('click', filterIt);
    add.addEventListener('click', addToCart);
}

init();
