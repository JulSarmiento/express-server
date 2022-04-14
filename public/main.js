window.addEventListener('load', () => {

  const socket = io.connect()

  function listProducts(products) {

    if(products.length > 0){

      document.getElementById('result-table').innerHTML =
      `
        div(class="table-responsive")
        table(class="table table-dark gap-5 table--mod")
  
          tr
            th='Nombre'
            th='Precio'
            th='foto'
      `

        products.map(product => {
          `           
            tr 
            td=product.productName
            td=new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.productPrice )   
            td
              img(width="50" src=product.thumbnail alt="not found")
          `
        });

    }else {

      document.getElementById('no-result-table').innerHTML = 
      `
        h3(class="alert alert-warning")='No se encontraron productos'

        a(href="/" type="button" class="btn btn-primary ")='Cargar un nuevo producto'
      `
    }


  }



  socket.on('products', products => {
    console.log('Lista de productos: ', products)
    listProducts(products);
  })

  socket.on('messages', messages => {
    console.log('Lista de mensajes: ', messages)
    // render(data);
  })

  document.getElementById('products-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const productForm = e.target;
    const body = new FormData(productForm);

    await fetch('/api/productos', {
      method: 'POST',
      body
    });

    productForm.reset();
      
  });




  

})