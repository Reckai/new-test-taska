import { getData } from './getData.js';
import { MakeTable } from './makeTable.js';
document.addEventListener('DOMContentLoaded', function () {
  const resetAll = document.getElementById('reset');
  const submitForm = document.getElementById('submit');

  submitForm.addEventListener('click', async function () {
    let country = document.getElementById('country').value;
    let data = await getData(country);
    MakeTable(data);
  });

  resetAll.addEventListener('click', async function () {
    let country = document.getElementById('country');
    const table = document.getElementById('table');
    table.remove();
    country.value = '';
  });
});
