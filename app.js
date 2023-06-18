
let dataText = document.querySelectorAll('.data__text')
let dataTitle = document.querySelectorAll('.data__title')
let dataBase = document.querySelector('.data-base')
let inputTitle = document.querySelector('.create__input-title');
const addBtn = document.querySelector('.create__button');
const inputText = document.querySelector('.create__input-text');
let editButt = document.querySelectorAll('.data__button-image');
let saveButt = document.querySelectorAll('.data__button-save');
let readButt = document.querySelectorAll('.data__button-read');
const content = document.querySelector('.create')
const show = document.querySelector('.button-create')
const timeEdit = document.querySelectorAll('.data__time-edit')
let dateNow = new Date();
let dateCreate = dateNow.toLocaleString()


show.addEventListener('click', () => {
    content.style.display = 'block'
    show.style.display = 'none'
})

function readButton() {
    for (let i = 0; i < readButt.length; ++i) {
        readButt[i].addEventListener('click', function () {
            readButt[i].style.display = 'none'
            dataText[i].style.display = 'block'
            editButt[i].style.display = 'block'
        });
    }
}
function editButton() {
    for (let i = 0; i < editButt.length; ++i) {
        editButt[i].addEventListener('click', function () {
            saveButt[i].style.display = 'block'
            editButt[i].style.display = 'none'
            dataText[i].setAttribute("contenteditable", "true")
            dataTitle[i].setAttribute("contenteditable", "true")
        });
    }
}
function saveButton() {
    for (let i = 0; i < saveButt.length; ++i) {
        saveButt[i].addEventListener('click', function () {
            editButt[i].style.display = 'block'
            saveButt[i].style.display = 'none'
            timeEdit[i].innerHTML = `Дата Редактирования: ${dateCreate}`
            dataText[i].setAttribute("contenteditable", "false")
            dataTitle[i].setAttribute("contenteditable", "false")
        });
    }
}

addBtn.onclick = () => {
    const createBlock = document.createElement('div');
    createBlock.className = 'data';
    if (inputTitle.value === '') {
        alert('Введите Заголовок')
        return;
    }

    createBlock.innerHTML = `<div><h2 class="data__title">${inputTitle.value}</h2></div>              
<div><p class="data__text">${inputText.value}</p></div>              
<div class="data__time"><div><p class="data__time-create">Дата создания: ${dateCreate}</p>
<p class="data__time-edit">Дата редактирования: ${dateCreate}</p></div><div class="data__button"><button class="data__button-read ">
Прочитать</button><button class="data__button-save"><img src="/image/save.png" alt="Кнопка «save»"></button><button class="data__button-image">
<img src="image/edit.png" alt="Кнопка «edit»"></button></div></div>`
    dataBase.prepend(createBlock);
    inputTitle.value = '';
    inputText.value = '';
}


readButton()

editButton()

saveButton()
