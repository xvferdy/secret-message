const {
    hash
} = window.location;
const message = (atob(hash.replace('#', '')));

if (message) {
    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#message-show').classList.remove('hide');

    document.querySelector('h1').innerHTML = message;
}

window.addEventListener('hashchange', function () {
    // window.open(window.location.href);
    window.location.href = window.location.href;
    location.reload();
});

document.querySelector('form').addEventListener('submit', (event) => {
    event.preventDefault();

    document.querySelector('#message-form').classList.add('hide');
    document.querySelector('#link-form').classList.remove('hide');

    const input = document.querySelector('#message-input');
    const encrpted = btoa(input.value);

    const linkInput = document.querySelector('#link-input');
    linkInput.value = `${window.location}#${encrpted}`;
    linkInput.select();
});

