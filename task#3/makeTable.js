export const MakeTable = (data) => {
  const body = document.getElementById('body');
  const table = document.createElement('table');
  table.id = 'table';
  const thead = document.createElement('thead');
  const headerRow = document.createElement('tr');
  thead.style.border = '1px solid black';

  headerRow.style.border = '1px solid black';
  for (let key in data) {
    let th = document.createElement('th');
    th.style.border = '1px solid black';
    th.style.direction = 'row';
    headerRow.style.display = 'flex';
    headerRow.style.flexDirection = 'column';
    th.appendChild(document.createTextNode(key));
    headerRow.appendChild(th);
  }
  table.appendChild(headerRow);
  table.appendChild(thead);
  let tbody = document.createElement('tbody');
  data.forEach(function (obj, index) {
    let row = document.createElement('tr');

    for (var prop in obj) {
      var cell = document.createElement('td');
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

  // Add the table to the body
  body.appendChild(table);
};
