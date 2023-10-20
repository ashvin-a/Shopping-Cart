const grid = document.querySelector('.item-grid');
const filter = document.querySelector('.filter')

async function getData() {
    const res = await fetch('./items.json');
    const datas = await res.json();

    datas.forEach((data) => {
        const div = document.createElement('div');
        const div2 = document.createElement('div');
        const description = document.createElement('p');
        description.style.textAlign = 'justify';
        div.className = data.class;
        div2.className = data.class;
        if(true===true){
            console.log('workin')
        }
        description.innerHTML = `<span class=name>${data.name}</span>
        &nbsp&nbsp<span class=price>${data.price}</span><br>
        ${data.description}`;
        div.appendChild(div2);
        div.style.boxShadow = '10px 1px 10px 10px rgba(166, 166, 166, 0.703)'
        div.classList.add('item');
        div2.innerHTML = `<img src="images/${data.image}" alt="" />`;
        if (
            div.classList.contains('books') ||
            div.classList.contains('food') ||
            div.classList.contains('kids')
        ) {
            div2.innerHTML = `<img src="images/${data.image}" alt="" style="width:170px"/>`;
        }
        div2.appendChild(description);
        grid.appendChild(div);
    });
}

function filterIt(e){
    console.log(e.target.classList)//this is it bro we got this
}

function init() {
    document.addEventListener('DOMContentLoaded', getData);
    filter.addEventListener('click',filterIt);
}

init();