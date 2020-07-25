let carts = document.querySelectorAll('.product-button');

let products = [
  {
    name: 'Blue Pill',
    tag: 'blue_pills',
    price: 0.0021,
    inCart: 0
  },
  {
    name: 'Green Pill',
    tag: 'green_pills',
    price: 0.0019,
    inCart: 0
  },
  {
    name: 'Purple Pill',
    tag: 'purple_pills',
    price: 0.0010,
    inCart: 0
  },
  {
    name: 'Red Pill',
    tag: 'red_pills',
    price: 0.0017,
    inCart: 0
  },
]

for (let i=0; i < carts.length; i++) {
  carts[i].addEventListener('click', () => {
    cartNumbers();
  })
}

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');

  if(productNumbers) {
    document.querySelector('.span span').textContent = productNumbers
  }
}

function cartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  productNumbers = parseInt(productNumbers);
  if(productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.span span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('cart span').textContent = 1;
  }
}

onLoadCartNumbers()
