export const MakeTable = (data) => {
  // создаем елементы под таблицу
  const body = document.getElementById('body');
  const table = document.createElement('table');
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  //задаем id
  table.id = 'table';

  // задаем стили
  thead.style.border = '1px solid black';
  headerRow.style.border = '1px solid black';

  // создаем нумерацию столбцов
  for (let key in data) {
    let th = document.createElement('th');
    th.style.border = '1px solid black';
    th.style.direction = 'row';
    headerRow.style.display = 'flex';
    headerRow.style.flexDirection = 'column';
    th.appendChild(document.createTextNode(key));
    headerRow.appendChild(th);
  }
  //мантируем нумерацию столбцов
  table.appendChild(headerRow);
  table.appendChild(thead);

  // создаем тело таблицы
  let tbody = document.createElement('tbody');
  data.forEach(function (obj, index) {
    let row = document.createElement('tr');
    //проходимся по таблице и заполняем ее  данными
    for (var prop in obj) {
      var cell = document.createElement('td');
      //проверяем на наличие ссылок
      if (['web_pages', 'domains'].includes(prop)) {
        var link = document.createElement('a');
        link.href = obj[prop];
        link.textContent = obj[prop];
        cell.appendChild(link);
      } else {
        cell.textContent = obj[prop];
      }
      cell.style.border = '1px solid black';

      cell.style.textAlign = 'center';
      row.appendChild(cell);
      tbody.appendChild(row);
    }
  });
  table.style.display = 'flex';
  table.appendChild(tbody);

  body.appendChild(table);
};
