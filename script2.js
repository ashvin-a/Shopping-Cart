const grid = document.querySelector('.item-grid');
const filter = document.querySelector('.filter');

async function getData() {
    const res = await fetch('./items.json');
    const datas = await res.json();

    datas.forEach((data) => {
        buildPage(data);
    });
}

function buildPage(data) {
    const div = document.createElement('div');
    const div2 = document.createElement('div');
    const description = document.createElement('p');
    description.style.textAlign = 'justify';
    div.className = data.class;
    div2.className = data.class;

    description.innerHTML = `<span class=name>${data.name}</span>
        &nbsp&nbsp<span class=price>${data.price}</span><br>
        ${data.description}`;
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
    div2.appendChild(description);
    grid.appendChild(div);
}

function filterIt(e) {
    const items = document.querySelectorAll('.item');
    // console.log(items);
    // const target = data.class;
    e.target.classList.toggle('active');
    if (e.target.classList.contains('active')) {
        items.forEach((item) => {
            if (!e.target.classList.contains(item.classList[0])) {
                item.style.display='none'
            }
        });
    } else {
        items.forEach((item) => {
            if (!e.target.classList.contains(item.classList[0])) {
                item.style.display='block'
            }
        })
    }
}

function init() {
    document.addEventListener('DOMContentLoaded', getData);
    filter.addEventListener('click', filterIt);
}

init();
