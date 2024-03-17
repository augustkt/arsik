function chooseNo() {
  document.getElementById('question').innerHTML = 'Ты уверен?';
  document.getElementById('gif').src = 'net.gif';
  document.querySelector('button:nth-child(1)').style.display = 'none';
	document.getElementById('question').innerHTML = 'Ну и иди отсюда';
	document.getElementById('releaseBtn').style.display = 'none'// Прячем кнопку "Нет"
}

function chooseYes() {
  document.getElementById('question').innerHTML = 'Ну и молодец';
  document.getElementById('gif').src = '200w.gif';
	document.querySelector('button:nth-child(2)').style.display = 'none'; // Прячем кнопку "Да"
  document.getElementById('releaseBtn').style.display = 'block';
}

function releaseBalloons() {
  document.getElementById('question').innerHTML = '';
  document.getElementById('gif').src = 'payoff-balloon-loader-dribbble.gif'; // Путь к анимации с шариками
  document.querySelector('.buttons').style.display = 'none'; // Прячем кнопки "Нет" и "Да"
}
