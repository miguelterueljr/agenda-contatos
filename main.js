const form = document.querySelector('.form');

const names = [];
const numbers = [];
let linhas = ''


form.addEventListener('submit', (evt) => {
  evt.preventDefault();

  addTableLine();
  updateTable();
  form.reset();
  
})
const check = document.querySelector('.form__check');

function addTableLine() {
  const inputName = document.getElementById('name');
  const inputNumber = document.getElementById('number');

  if (names.includes(inputName.value)) {
    alert(`O nome ${inputName.value} já existe em sua lista de contatos!!`)
  } else {
    names.push(inputName.value);
    numbers.push(inputNumber.value)

    let linha = '<tr class="table__columns table__columns-contact">';

    linha += `<td class="table__content">${inputName.value}</td>`;
    linha += `<td class="table__content">${inputNumber.value}</td>`;
    if(check.checked) {
      linha += `<td class="table__content"><a href="https://wa.me/${inputNumber.value}" target="_blank"><img src="./images/whatsapp.png" alt="icone do app whatsapp" class="table__image"></a></td>`;
    } else {
      linha += `<td class="table__content">Sem whatsapp</td>`;
    }
    linha += '</tr>'

    linhas += linha;
  }
}

function updateTable() {
  const tableBody = document.querySelector('tbody')
  tableBody.innerHTML = linhas;
}