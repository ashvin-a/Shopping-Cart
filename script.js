const grid = document.querySelector('.item-grid');
const filter = document.querySelector('.filter');
const cartlist = document.querySelector('.cart');

function reloadCart() {
    const tot = document.querySelector('.total');
    const summary = document.querySelector('.summary');
    tot.innerHTML = `Total Amount:<strong>₹${total}</strong>`;

    const itemcount = cart.reduce((acc, curr) => {
        acc[curr] ? acc[curr]++ : (acc[curr] = 1);
        return acc;
    }, {});

    for (let key in itemcount) {
        const itemshow = document.createElement('div');
        itemshow.className = 'itemshow';
        if (itemcount[key] === 1) {
            itemshow.innerHTML = `${key}
            <button>+</button>${itemcount[key]}<button>-</button>`;
            summary.appendChild(itemshow);
        } else {
            itemshow.innerHTML = `${key}
            <button>+</button>${itemcount[key]}<button>-</button>`;
            summary.appendChild(itemshow);
            summary.removeChild(itemshow.previousSibling)
            console.log(itemshow)
        } 
    }
}

let cart = [];
let total = 0;
function addToCart(e) {
    if (e.target.className == 'addcart') {
        let detail =
            e.target.parentNode.previousElementSibling.innerText.split('\n');
        cart.push(detail[0]);
        total += parseFloat(detail[1].substring(1));
        reloadCart();
    }
}

function carton(e) {
    const cartl = document.querySelector('.cartlist');
    cartl.classList.toggle('carton');
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
    const addToCart = document.createElement('div');
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const tag = document.createElement('div');
    tag.className = 'tag';
    addToCart.className = 'addtocart';
    addToCart.style.textAlign = 'justify';
    div.className = data.class;
    div2.className = data.class;
    tag.innerHTML = `<span class='name'>${data.name}</span>
    <span class='price'>₹${data.price}</span>`;
    addToCart.innerHTML = `<button class ='addcart'>Add to Cart</button>`;
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
    document.addEventListener('click', addToCart);
    filter.addEventListener('click', filterIt);
    cartlist.addEventListener('click', carton);
}

init();
