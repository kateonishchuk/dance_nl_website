let searchable = [
  'Спортивно бальні танці',
  'Спорт',
  'Танці',
  'Стрічки',
  'Бахрома',
  'Реголін',
  'Костюми',
  'Балетки',
  'Спідниці',
  'Фрак',
  'Тріко',
  'Жіночі Туфлі',
  'Чоловічі Туфлі',
  'Плаття',
  'ФотоГалерея',
  'Костюми'
];

const searchInput = document.getElementById('search');
const searchWrapper = document.querySelector('.wrapper');
const resultsWrapper = document.querySelector('.results');

searchInput.addEventListener('keyup', () => {
  let results = [];
  let input = searchInput.value;

  if (input.length) {
    results = searchable.filter((item) => {
      return item.toLowerCase().includes(input.toLowerCase());
    });
  }
  renderResults(results);
});

function renderResults(results) {
  if (!results.length) {
    return searchWrapper.classList.remove('show');
  }

  const content = results.map((item) => {
    let line = item.toLowerCase().split(" ").join("_");
    
      return `<li><a href="https://kateonishchuk.github.io/dance_nl_${line}">${item}</a></li>`;
  }).join('');

  searchWrapper.classList.add('show');
  
  resultsWrapper.innerHTML = `<ul class="drop-down-list">${content}</ul>`;
}
