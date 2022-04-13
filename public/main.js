window.addEventListener('load', () => {

  const socket = io.connect()

  socket.on('products', data => {
    console.log('Lista de productos: ', data)
    // render(data);
  })

  document.getElementById('products-form').addEventListener('submit', (e) => {
    e.preventDefault();

    const productForm = e.target;
    const data = new FormData(productForm);
  });


  

})