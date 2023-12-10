const add = document.querySelector('#add');
const subtract = document.querySelector('#subtract');
const quantity = document.querySelector('#quantity');
const cantidad = document.querySelector('#cantidad');

//add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
//subtract.addEventListener('click', () => quantity.value = Number(quantity.value) - 1);

add.addEventListener('click', () => quantity.value = Number(quantity.value) + 1);
subtract.addEventListener('click', () => {
  if (Number(quantity.value) > 0) {
    quantity.value = Number(quantity.value) - 1;
  }
});

add.addEventListener('click', () => cantidad.value = Number(cantidad.value) + 1);
subtract.addEventListener('click', () => {
  if (Number(cantidad.value) > 0) {
    cantidad.value = Number(cantidad.value) - 1;
  }
});
