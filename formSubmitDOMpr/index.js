const inputTitle = document.querySelector('#inputTitle');
const nameInfo = document.querySelector('#nameInfo');
const showRes = document.querySelector('#showResult');

function handleSubmit(event) {

    event.preventDefault();

    const outputHtml = `
        <p>title: ${inputTitle.value}</p>
        <p>phone: ${nameInfo.value}</p>
    `;

    showRes.innerHTML += outputHtml;
}

const infoSubmitForm = document.querySelector('#infoSubmitForm');
infoSubmitForm.addEventListener('submit', handleSubmit)