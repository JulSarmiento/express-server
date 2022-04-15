window.addEventListener('load', () => {

  const socket = io.connect()

  /**
   * This function list and print all the products
   * @param {array} products 
   */
  function listProducts(products) {

    if(products.length > 0){

      fetch('/templates/tableTitle')
        .then( async function (response) {
          const html = await response.text()
          const container = document.getElementById('product-table');

          container.innerHTML = html;

          const rows = container.querySelector('tbody');
          products.forEach(product =>{

            rows.insertAdjacentHTML('beforeEnd', `    
              <tr class="text">
                <td>${product.productName}</td>
                <td>${new Intl.NumberFormat('en-US', {style: 'currency', currency: 'USD'}).format(product.productPrice )}</td>
                <td><img width="50" src="${product.thumbnail}" alt="not found"></td>
              </tr>`)
  
          })
        });
    }else {

      fetch('/templates/noTable')
        .then(async function (response) {
          const html = await response.text();
          document.getElementById('product-table').innerHTML = html
        })

    }
  }

  /**
   * This function list and print all the messages
   * @param {array} messages 
   */
  function listMessages(messages){
    const messageBox = document.getElementById('message-box');
    messageBox.innerHTML = '';

    messages.forEach(message => {
      messageBox.insertAdjacentHTML('beforeEnd', 
      `
        <p>${message.email}(${message.date}): ${message.text}</p>
      `
    )})

  }

  // SOCKETS
  socket.on('products', products => {
    console.log('Lista de productos: ', products)
    listProducts(products);
  });

  socket.on('messages', messages => {
    console.log('Lista de mensajes: ', messages)
    listMessages(messages);
  })

  // PRODUCTS
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

  // MESSAGES
  document.getElementById('messages-form').addEventListener('submit', async (e) => {
    e.preventDefault();

    const messageForm = e.target;
    const body = JSON.stringify(Object.fromEntries(new FormData(messageForm).entries()));

    await fetch('/api/mensajes', {
      method: 'POST',
      headers: {
        "Content-Type": "application/json",
        "Accept": "application/json"
      },
      body
    })

    messageForm.reset();
  })

})