// One behaviour: show what to bring.
const tipsButton = document.querySelector('#tips-button');
const tips = document.querySelector('#tips');

tipsButton.addEventListener('click', () => {
  tips.textContent = 'Bring your bicycle, a lock and, if you have them, the parts you want fitted.';
});

// A second, optional behaviour: check the booking form, without any server.
const form = document.querySelector('form');
const message = document.querySelector('#message');

form.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = document.querySelector('#name').value.trim();
  if (name === '') {
    message.textContent = 'Please enter your name.';
    return;
  }
  message.textContent = 'Thanks, ' + name + '. A real site would now save this booking; this page does not.';
});
